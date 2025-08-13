import Jstz from '../index';

// Extension events
enum ExtensionRequestEvent {
  SIGN = 'JSTZ_SIGNER_SIGN_REQUEST',
  GET_ADDRESS = 'JSTZ_SIGNER_GET_ADDRESS_REQUEST',
}

enum ExtensionResponseEvent {
  SIGN_RESPONSE = 'JSTZ_SIGNER_SIGN_RESPONSE',
  GET_ADDRESS_RESPONSE = 'JSTZ_SIGNER_GET_ADDRESS_RESPONSE',
}

interface ExtensionError {
  error: string;
}

// Signer requests
interface SignRequest {
  type: ExtensionRequestEvent.SIGN;
  content: Jstz.Operation.RunFunction;
}

interface GetSignerAddressRequest {
  type: ExtensionRequestEvent.GET_ADDRESS;
}

// Extension responses
interface ExtensionResponse<T = unknown> {
  type: ExtensionResponseEvent;
  data: T;
}

interface SignResponse {
  operation: Jstz.Operation;
  signature: string;
  publicKey: string;
  accountAddress: string;
}

interface GetAddressResponse {
  accountAddress: string;
}

/**
 * An event dispatcher for Signer extensions
 */
export class JstzSigner {
  eventTarget: EventTarget;

  constructor(eventTarget: EventTarget) {
    this.eventTarget = eventTarget;
  }

  /**
   * Dispatch a Signer request event on `this.eventTarget`.
   * Returns a Promise listening for the corresponding `ExtensionResponse` event.
   *
   * Signer extensions (typically, a browser wallet) should listen for the given payloads
   * on `this.eventTarget` and emit an `ExtensionResponse<T>` if succesfully handled or
   * `ExtensionError` if not
   */
  callSignerExtension<T = SignResponse | GetAddressResponse>(
    payload: SignRequest | GetSignerAddressRequest,
  ): Promise<ExtensionResponse<T>> {
    function getResponseType(reqType: ExtensionRequestEvent): ExtensionResponseEvent {
      switch (reqType) {
        case ExtensionRequestEvent.SIGN:
          return ExtensionResponseEvent.SIGN_RESPONSE;
        case ExtensionRequestEvent.GET_ADDRESS:
          return ExtensionResponseEvent.GET_ADDRESS_RESPONSE;
        default:
          throw new Error('Unknown request type');
      }
    }

    // @ts-ignore
    const event = new CustomEvent<typeof payload>(payload.type, {
      detail: payload,
    });

    this.eventTarget.dispatchEvent(event);

    return new Promise<ExtensionResponse<T>>((resolve, reject) => {
      this.eventTarget.addEventListener(
        getResponseType(payload.type),
        // @ts-ignore
        ((event: CustomEvent<ExtensionError | ExtensionResponse<T>>) => {
          if ('error' in event.detail) {
            reject(new Error(event.detail.error));
          } else {
            resolve(event.detail);
          }
          // @ts-ignore
        }) as EventListener,
        { once: true },
      );
    });
  }
}

export declare namespace JstzSigner {
  export {
    ExtensionResponseEvent,
    ExtensionRequestEvent,
    type ExtensionError,
    type SignRequest,
    type GetSignerAddressRequest,
    type ExtensionResponse,
    type SignResponse,
    type GetAddressResponse,
  };
}

export default JstzSigner;
