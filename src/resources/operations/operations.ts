// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as CodeAPI from '../accounts/code';
import * as NonceAPI from '../accounts/nonce';
import * as ReceiptAPI from './receipt';
import { Receipt, ReceiptResource } from './receipt';

export class Operations extends APIResource {
  receipt: ReceiptAPI.ReceiptResource = new ReceiptAPI.ReceiptResource(this._client);

  /**
   * Inject an operation into Jstz
   */
  create(body: OperationCreateParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/operations', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface OperationCreateParams {
  inner: OperationCreateParams.Inner;

  /**
   * Tezos public key
   */
  public_key: string;

  signature: string;
}

export namespace OperationCreateParams {
  export interface Inner {
    content: Inner.UnionMember0 | Inner.UnionMember1;

    nonce: NonceAPI.Nonce;

    /**
     * Tezos Address
     */
    source: string;
  }

  export namespace Inner {
    export interface UnionMember0 {
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

    export interface UnionMember1 {
      '#type': 'RunFunction';

      body: Array<number> | null;

      /**
       * Maximum amount of gas that is allowed for the execution of this operation
       */
      gas_limit: number;

      /**
       * Any valid HTTP headers
       */
      headers: unknown;

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
  export { type OperationCreateParams as OperationCreateParams };

  export { ReceiptResource as ReceiptResource, type Receipt as Receipt };
}
