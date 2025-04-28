import {
  JstzSigner,
  SignerRequestEventTypes,
  SignerResponseEventTypes,
  CheckStatusCall,
  SignRequestCall,
  GetSignerAddressCall,
} from '../../src/custom/jstz-signer';

describe('JstzSigner', () => {
  let eventTarget: EventTarget;
  let signer: JstzSigner;

  beforeEach(() => {
    eventTarget = new EventTarget();
    signer = new JstzSigner(eventTarget);
  });

  test('dispatches the correct event', () => {
    const dispatchSpy = jest.spyOn(eventTarget, 'dispatchEvent');
    const payload: CheckStatusCall = { type: SignerRequestEventTypes.CHECK_STATUS };

    signer.callSignerExtension(payload);

    expect(dispatchSpy).toHaveBeenCalledTimes(1);
    expect(dispatchSpy).toHaveBeenCalledWith(
      expect.objectContaining({
        type: SignerRequestEventTypes.CHECK_STATUS,
        detail: payload,
      }),
    );
  });

  test('resolves with the correct response', async () => {
    const payload: CheckStatusCall = { type: SignerRequestEventTypes.CHECK_STATUS };
    const response = { type: SignerResponseEventTypes.CHECK_STATUS_RESPONSE, data: { success: true } };

    setTimeout(() => {
      // @ts-expect-error - CustomEvent is available in ts DOM lib
      const event = new CustomEvent(SignerResponseEventTypes.CHECK_STATUS_RESPONSE, { detail: response });
      eventTarget.dispatchEvent(event);
    }, 10);

    await expect(signer.callSignerExtension(payload)).resolves.toEqual(response);
  });

  test('rejects with an error if the response contains an error', async () => {
    const payload: SignRequestCall = { type: SignerRequestEventTypes.SIGN, content: null };
    const errorResponse = { type: SignerResponseEventTypes.SIGN_RESPONSE, error: 'Some error occurred' };

    setTimeout(() => {
      // @ts-expect-error - CustomEvent is available in ts DOM lib
      const event = new CustomEvent(SignerResponseEventTypes.SIGN_RESPONSE, { detail: errorResponse });
      eventTarget.dispatchEvent(event);
    }, 10);

    await expect(signer.callSignerExtension(payload)).rejects.toThrow('Some error occurred');
  });

  test('rejects if no response is received within the timeout', async () => {
    const payload: GetSignerAddressCall = { type: SignerRequestEventTypes.GET_ADDRESS };

    await expect(signer.callSignerExtension(payload, { timeout: 50 })).rejects.toThrow(
      'Extension is not responding',
    );
  });
});
