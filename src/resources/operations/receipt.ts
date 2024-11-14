// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

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
    Ok:
      | Ok.DeployFunctionReceipt
      | Ok.RunFunctionReceipt
      | 'Deposit'
      | Ok.FaDepositReceipt
      | Ok.FaWithdrawReceipt;
  }

  export namespace Ok {
    export interface DeployFunctionReceipt {
      DeployFunction: DeployFunctionReceipt.DeployFunction;
    }

    export namespace DeployFunctionReceipt {
      export interface DeployFunction {
        /**
         * Tezos Address
         */
        address: DeployFunction.Tz1 | DeployFunction.Tz2 | DeployFunction.Tz3;
      }

      export namespace DeployFunction {
        export interface Tz1 {
          Tz1: string;
        }

        export interface Tz2 {
          Tz2: string;
        }

        export interface Tz3 {
          Tz3: string;
        }
      }
    }

    export interface RunFunctionReceipt {
      RunFunction: RunFunctionReceipt.RunFunction;
    }

    export namespace RunFunctionReceipt {
      export interface RunFunction {
        body: Array<number> | null;

        /**
         * Any valid HTTP headers
         */
        headers: unknown;

        /**
         * Valid status code
         */
        status_code: number;
      }
    }

    export interface FaDepositReceipt {
      FaDeposit: FaDepositReceipt.FaDeposit;
    }

    export namespace FaDepositReceipt {
      export interface FaDeposit {
        /**
         * Tezos Address
         */
        receiver: FaDeposit.Tz1 | FaDeposit.Tz2 | FaDeposit.Tz3;

        ticket_balance: number;

        run_function?: FaDeposit.RunFunction | null;
      }

      export namespace FaDeposit {
        export interface Tz1 {
          Tz1: string;
        }

        export interface Tz2 {
          Tz2: string;
        }

        export interface Tz3 {
          Tz3: string;
        }

        export interface RunFunction {
          body: Array<number> | null;

          /**
           * Any valid HTTP headers
           */
          headers: unknown;

          /**
           * Valid status code
           */
          status_code: number;
        }
      }
    }

    export interface FaWithdrawReceipt {
      FaWithdraw: FaWithdrawReceipt.FaWithdraw;
    }

    export namespace FaWithdrawReceipt {
      export interface FaWithdraw {
        outbox_message_id: string;

        /**
         * Tezos Address
         */
        source: FaWithdraw.Tz1 | FaWithdraw.Tz2 | FaWithdraw.Tz3;
      }

      export namespace FaWithdraw {
        export interface Tz1 {
          Tz1: string;
        }

        export interface Tz2 {
          Tz2: string;
        }

        export interface Tz3 {
          Tz3: string;
        }
      }
    }
  }

  export interface Err {
    Err: string;
  }
}

export declare namespace ReceiptResource {
  export { type Receipt as Receipt };
}
