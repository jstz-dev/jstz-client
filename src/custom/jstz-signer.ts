import Jstz from '../index';

// Extension events
enum SignerRequestEventTypes {
  CHECK_STATUS = "JSTZ_CHECK_EXTENSION_AVAILABILITY_REQUEST_TO_EXTENSION",
  SIGN = "JSTZ_SIGN_REQUEST_TO_EXTENSION",
  GET_ADDRESS = "JSTZ_GET_ADDRESS_REQUEST_TO_EXTENSION",
}

enum SignerResponseEventTypes {
  CHECK_STATUS_RESPONSE = "JSTZ_CHECK_EXTENSION_AVAILABILITY_RESPONSE_FROM_EXTENSION",
  SIGN_RESPONSE = "JSTZ_SIGN_RESPONSE_FROM_EXTENSION",
  GET_ADDRESS_RESPONSE = "JSTZ_GET_ADDRESS_RESPONSE_FROM_EXTENSION",
}

interface ExtensionError {
  type: SignerResponseEventTypes;
  error: string;
}

// Signer requests
interface SignRequestCall {
  type: SignerRequestEventTypes.SIGN;
  content: unknown;
}

interface CheckStatusCall {
  type: SignerRequestEventTypes.CHECK_STATUS;
}

interface GetSignerAddressCall {
  type: SignerRequestEventTypes.GET_ADDRESS;
}

// Extension responses
interface ExtensionResponse<T = unknown> {
  type: SignerResponseEventTypes;
  data: T;
}

export interface SignResponse {
  operation: Jstz.Operation;
  signature: string;
  publicKey: string;
  accountAddress: string;
}

export interface GetAddressResponse {
  accountAddress: string;
}

export interface CheckStatusResponse {
  success: boolean;
}

/**
 * An event dispatcher for Signer extensions
 */
export class JstzSigner {
  // @ts-expect-error - EventTarget is available in ts DOM lib
  eventTarget: EventTarget;
  // @ts-expect-error - EventTarget is available in ts DOM lib
  constructor(eventTarget: EventTarget) {
    this.eventTarget = eventTarget;
  }

  private getResponseType(reqType: SignerRequestEventTypes) {
    switch (reqType) {
      case SignerRequestEventTypes.SIGN:
        return SignerResponseEventTypes.SIGN_RESPONSE;
      case SignerRequestEventTypes.GET_ADDRESS:
        return SignerResponseEventTypes.GET_ADDRESS_RESPONSE;
      case SignerRequestEventTypes.CHECK_STATUS:
        return SignerResponseEventTypes.CHECK_STATUS_RESPONSE;
      default:
        throw new Error("Unknown request type");
    }
  }

  /**
   * Dispatch a Signer request event on `this.eventTarget`.
   * Returns a Promise listening for the corresponding `ExtensionResponse` event.
   *
   * Signer extensions (typically, a browser wallet) should listen for the given payloads
   * on `this.eventTarget` and emit an `ExtensionResponse<T>` if succesfully handled or
   * `ExtensionError` if not
   */
  public callSignerExtension<T = SignResponse | GetAddressResponse | CheckStatusResponse>(
    payload: SignRequestCall | GetSignerAddressCall | CheckStatusCall,
    options?: {
      timeout?: number;
    },
  ): Promise<ExtensionResponse<T>> {

    // @ts-expect-error - CustomEvent is available in ts DOM lib
    const event = new CustomEvent<typeof payload>(payload.type, {
      detail: payload,
    });

    this.eventTarget.dispatchEvent(event);

    const { timeout } = options || {};

    return new Promise<ExtensionResponse<T>>((resolve, reject) => {
      let eventFired = false;

      if (timeout) {
        // @ts-expect-error - setTimeout is available in ts DOM lib
        setTimeout(() => {
          if (!eventFired) {
            reject(new Error("Extension is not responding"));
          }
        }, timeout);
      }

      this.eventTarget.addEventListener(
        this.getResponseType(payload.type),
        // @ts-ignore
        ((event: CustomEvent<ExtensionError | ExtensionResponse<T>>) => {
          eventFired = true;

          if ('error' in event.detail) {
            reject(new Error(event.detail.error));
          } else {
            resolve(event.detail);
          }
          // @ts-expect-error - EventListener is available in ts DOM lib
        }) as EventListener,
        { once: true },
      );
    });
  }
}

export declare namespace JstzSigner {
  export {
    SignerResponseEventTypes,
    SignerRequestEventTypes,
    type ExtensionError,
    type SignRequestCall,
    type GetSignerAddressCall,
    type ExtensionResponse,
    type SignResponse,
    type GetAddressResponse,
  };
}

export default JstzSigner;
