// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as CryptoAPI from '../crypto';
import * as CodeAPI from '../accounts/code';
import * as NonceAPI from '../accounts/nonce';
import * as ReceiptAPI from './receipt';
import { Receipt, ReceiptResource } from './receipt';

export class Operations extends APIResource {
  receipt: ReceiptAPI.ReceiptResource = new ReceiptAPI.ReceiptResource(this._client);

  /**
   * Inject an operation into Jstz
   */
  inject(body: OperationInjectParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/operations', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface OperationInjectParams {
  inner: OperationInjectParams.Inner;

  /**
   * Tezos public key
   */
  public_key: CryptoAPI.PublicKey;

  signature: CryptoAPI.Signature;
}

export namespace OperationInjectParams {
  export interface Inner {
    content: Inner.DeployFunction | Inner.RunFunction;

    nonce: NonceAPI.Nonce;

    /**
     * Tezos Address
     */
    source: CryptoAPI.PublicKeyHash;
  }

  export namespace Inner {
    export interface DeployFunction {
      '#type': 'DeployFunction';

      /**
       * Amount of tez to credit to the smart function account, debited from the sender
       */
      account_credit: number;

      /**
       * Smart function code
       */
      function_code: CodeAPI.ParsedCode;
    }

    export interface RunFunction {
      '#type': 'RunFunction';

      body: Array<number> | null;

      /**
       * Maximum amount of gas that is allowed for the execution of this operation
       */
      gas_limit: number;

      headers: Record<string, unknown>;

      /**
       * Any valid HTTP method
       */
      method: string;

      /**
       * Smart function URI in the form tezos://{smart_function_address}/rest/of/path
       */
      uri: string;
    }
  }
}

Operations.ReceiptResource = ReceiptResource;

export declare namespace Operations {
  export { type OperationInjectParams as OperationInjectParams };

  export { ReceiptResource as ReceiptResource, type Receipt as Receipt };
}
