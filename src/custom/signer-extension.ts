import Jstz from '../index';

// Extension events
enum ExtensionResponseEvent {
  SIGN_RESPONSE = 'JSTZ_SIGNER_SIGN_RESPONSE',
  GET_ADDRESS_RESPONSE = 'JSTZ_SIGNER_GET_ADDRESS_RESPONSE',
}

enum ExtensionRequestEvent {
  SIGN = 'JSTZ_SIGNER_SIGN_REQUEST',
  GET_ADDRESS = 'JSTZ_SIGNER_GET_ADDRESS_REQUEST',
}

interface ExtensionError {
  error: string;
}

// Extension requests
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

function jstzCallSigner<T = SignResponse | GetAddressResponse>(
  payload: SignRequest | GetSignerAddressRequest,
) {
  // @ts-ignore
  const event = new CustomEvent<typeof payload>(payload.type, {
    detail: payload,
  });
  // @ts-ignore
  window.dispatchEvent(event);

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

  return new Promise<ExtensionResponse<T>>((resolve, reject) => {
    // @ts-ignore
    window.addEventListener(
      getResponseType(payload.type),
      // @ts-ignore
      ((event: CustomEvent<ExtensionError | SignResponse<T>>) => {
        if ('error' in event.detail) {
          // @ts-ignore
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

export {
  initSignerExtension,
  ExtensionResponseEvent as SignerResponseEvent,
  ExtensionRequestEvent as SignerRequestEvent,
  type SignResponse as ExtensionResponse,
  type ExtensionError,
  type SignRequest as SignRequestCall,
  type GetSignerAddressRequest as GetSignerAddressCall,
  type SignResponse,
  type GetAddressResponse,
};

declare global {
  interface Window {
    jstzCallSignerExtension: <T = SignResponse | GetAddressResponse>(
      payload: SignRequest | GetSignerAddressRequest,
    ) => Promise<ExtensionResponse<T>>;
  }
}

function initSignerExtension(): void {
  // @ts-ignore
  if (typeof window !== 'undefined') {
    // @ts-ignore
    window.jstzCallSignerExtension = jstzCallSigner;
  }
}
