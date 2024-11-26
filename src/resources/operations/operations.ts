// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as CryptoAPI from '../crypto';
import * as CodeAPI from '../accounts/code';
import * as NonceAPI from '../accounts/nonce';
import * as ReceiptAPI from './receipt';
import { Receipt, ReceiptResource, TypedReceipt } from './receipt';

const blake2 = require("blake2");

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

  /**
   * Inject an operation into Jstz and poll for a receipt
   */
  async injectAndPoll<T extends OperationInjectParams>(body: T, options?: Core.RequestOptions): Promise<TypedReceipt<T>> {
    await this.inject(body, options);
    const operationHash = this.hash(body.inner);
    return this.receipt.pollReceipt(operationHash, options);
  }

  /**
   * Jstz specific operation hash
   */
  hash(operation: OperationInjectParams.Inner): string {
    const hash = JSON.stringify(operation);
    const buffer = Buffer.from(hash, "utf8");
    let h = blake2.createHash('blake2b', { digestLength: 32});
    h.update(buffer); //FIXME: Should be hex encoded
    return h.digest('hex');
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
      _type: 'DeployFunction';

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
      _type: 'RunFunction';

      body: Array<number> | null;

      /**
       * Maximum amount of gas that is allowed for the execution of this operation
       */
      gas_limit: number;

      /**
       * Any valid HTTP headers
       */
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
