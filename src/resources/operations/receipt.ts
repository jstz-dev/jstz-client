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
    _type: 'Ok';

    inner: Ok.DeployFunction | Ok.RunFunction | Ok.Deposit | Ok.FaDeposit | Ok.FaWithdraw;
  }

  export namespace Ok {
    export interface DeployFunction {
      _type: 'DeployFunction';

      /**
       * Tezos Address
       */
      address: CryptoAPI.PublicKeyHash;
    }

    export interface RunFunction {
      _type: 'RunFunction';

      body: Array<number> | null;

      headers: Record<string, unknown>;

      /**
       * Valid status code
       */
      status_code: number;
    }

    export interface Deposit {
      _type: 'Deposit';

      /**
       * Tezos Address
       */
      account: CryptoAPI.PublicKeyHash;

      updated_balance: number;
    }

    export interface FaDeposit {
      _type: 'FaDeposit';

      /**
       * Tezos Address
       */
      receiver: CryptoAPI.PublicKeyHash;

      ticket_balance: number;

      run_function?: FaDeposit.RunFunction | null;
    }

    export namespace FaDeposit {
      export interface RunFunction {
        body: Array<number> | null;

        headers: Record<string, unknown>;

        /**
         * Valid status code
         */
        status_code: number;
      }
    }

    export interface FaWithdraw {
      _type: 'FaWithdraw';

      outbox_message_id: string;

      /**
       * Tezos Address
       */
      source: CryptoAPI.PublicKeyHash;
    }
  }

  export interface Err {
    _type: 'Err';

    inner: string;
  }
}

export declare namespace ReceiptResource {
  export { type Receipt as Receipt };
}
