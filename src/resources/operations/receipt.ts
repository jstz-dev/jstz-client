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
  hash: string;

  inner: Receipt.Ok | Receipt.Err;
}

export namespace Receipt {
  export interface Ok {
    Ok: Ok.UnionMember0 | Ok.UnionMember1 | Ok.UnionMember2 | Ok.UnionMember3 | Ok.UnionMember4;
  }

  export namespace Ok {
    export interface UnionMember0 {
      _type: 'DeployFunction';

      /**
       * Tezos Address
       */
      address: CryptoAPI.PublicKeyHash;
    }

    export interface UnionMember1 {
      _type: 'RunFunction';

      body: Array<number> | null;

      headers: Record<string, unknown>;

      /**
       * Valid status code
       */
      status_code: number;
    }

    export interface UnionMember2 {
      _type: 'Deposit';

      /**
       * Tezos Address
       */
      account: CryptoAPI.PublicKeyHash;

      updated_balance: number;
    }

    export interface UnionMember3 {
      _type: 'FaDeposit';

      /**
       * Tezos Address
       */
      receiver: CryptoAPI.PublicKeyHash;

      ticket_balance: number;

      run_function?: UnionMember3.RunFunction | null;
    }

    export namespace UnionMember3 {
      export interface RunFunction {
        body: Array<number> | null;

        headers: Record<string, unknown>;

        /**
         * Valid status code
         */
        status_code: number;
      }
    }

    export interface UnionMember4 {
      _type: 'FaWithdraw';

      outbox_message_id: string;

      /**
       * Tezos Address
       */
      source: CryptoAPI.PublicKeyHash;
    }
  }

  export interface Err {
    Err: string;
  }
}

export declare namespace ReceiptResource {
  export { type Receipt as Receipt };
}
