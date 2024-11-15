// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as CryptoAPI from '../crypto';

export class ReceiptResource extends APIResource {
  /**
   * Get the receipt of an operation
   */
  retrieve(operationHash: string, options?: Core.RequestOptions): Core.APIPromise<Receipt> {
    return this._client.get(`/operations/${operationHash}/receipt`, options);
  }
}

export interface Receipt {
  hash: Array<number>;

  inner: Receipt.UnionMember0 | Receipt.UnionMember1;
}

export namespace Receipt {
  export interface UnionMember0 {
    _type: 'Success';

    inner:
      | UnionMember0.DeployFunctionReceipt
      | UnionMember0.RunFunctionReceipt
      | UnionMember0.DepositReceipt
      | UnionMember0.FaDepositReceipt
      | UnionMember0.FaWithdrawReceipt;
  }

  export namespace UnionMember0 {
    export interface DeployFunctionReceipt {
      /**
       * Tezos Address
       */
      address: CryptoAPI.PublicKeyHash;
    }

    export interface RunFunctionReceipt {
      body: Array<number> | null;

      /**
       * Any valid HTTP headers
       */
      headers: Record<string, unknown>;

      /**
       * Valid status code
       */
      status_code: number;
    }

    export interface DepositReceipt {
      /**
       * Tezos Address
       */
      account: CryptoAPI.PublicKeyHash;

      updated_balance: number;
    }

    export interface FaDepositReceipt {
      /**
       * Tezos Address
       */
      receiver: CryptoAPI.PublicKeyHash;

      ticket_balance: number;

      run_function?: FaDepositReceipt.RunFunction | null;
    }

    export namespace FaDepositReceipt {
      export interface RunFunction {
        body: Array<number> | null;

        /**
         * Any valid HTTP headers
         */
        headers: Record<string, unknown>;

        /**
         * Valid status code
         */
        status_code: number;
      }
    }

    export interface FaWithdrawReceipt {
      outbox_message_id: string;

      /**
       * Tezos Address
       */
      source: CryptoAPI.PublicKeyHash;
    }
  }

  export interface UnionMember1 {
    _type: 'Failed';

    inner: string;
  }
}

export declare namespace ReceiptResource {
  export { type Receipt as Receipt };
}
