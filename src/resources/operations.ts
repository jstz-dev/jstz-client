// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as Shared from './shared';
import * as AccountsAPI from './accounts/accounts';

export class Operations extends APIResource {
  /**
   * Get the receipt of an operation
   */
  getReceipt(operationHash: string, options?: Core.RequestOptions): Core.APIPromise<Receipt> {
    return this._client.get(`/operations/${operationHash}/receipt`, options);
  }

  /**
   * Returns the hex encoded hash of an Operation
   */
  hash(body: OperationHashParams, options?: Core.RequestOptions): Core.APIPromise<string> {
    return this._client.post('/operations/hash', { body, ...options });
  }

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

export interface Operation {
  /**
   * The content of the operation
   */
  content: Operation.DeployFunction | Operation.RunFunction | Operation.RevealLargePayload;

  /**
   * Nonce is used to avoid replay attacks.
   */
  nonce: AccountsAPI.Nonce;

  /**
   * The public key of the account which was used to sign the operation
   */
  publicKey: Shared.PublicKey;
}

export namespace Operation {
  export interface DeployFunction {
    _type: 'DeployFunction';

    /**
     * Amount of tez to credit to the smart function account, debited from the sender
     */
    accountCredit: number;

    /**
     * Smart function code
     */
    functionCode: AccountsAPI.Code;
  }

  export interface RunFunction {
    _type: 'RunFunction';

    body: Array<number> | null;

    /**
     * Maximum amount of gas that is allowed for the execution of this operation
     */
    gasLimit: number;

    /**
     * Any valid HTTP headers
     */
    headers: RunFunction.Headers;

    /**
     * Any valid HTTP method
     */
    method: string;

    /**
     * Smart function URI in the form jstz://{smart_function_address}/rest/of/path
     */
    uri: string;
  }

  export namespace RunFunction {
    /**
     * Any valid HTTP headers
     */
    export interface Headers {
      /**
       * Amount in mutez to transfer on request
       */
      'X-JSTZ-TRANSFER'?: number;

      [k: string]: unknown;
    }
  }

  export interface RevealLargePayload {
    _type: 'RevealLargePayload';

    /**
     * The original operation hash that is being revealed.
     */
    originalOpHash: Array<number>;

    /**
     * The type of operation being revealed.
     */
    revealType: string;

    /**
     * The root hash of the preimage of the operation used to reveal the operation
     * data.
     */
    rootHash: string;
  }
}

export interface Receipt {
  hash: Array<number>;

  result: Receipt.Success | Receipt.Failure;
}

export namespace Receipt {
  export interface Success {
    _type: 'Success';

    inner:
      | Success.DeployFunction
      | Success.RunFunction
      | Success.Deposit
      | Success.FaDeposit
      | Success.FaWithdraw;
  }

  export namespace Success {
    export interface DeployFunction {
      _type: 'DeployFunction';

      address: string;
    }

    export interface RunFunction {
      _type: 'RunFunction';

      body: Array<number> | null;

      /**
       * Any valid HTTP headers
       */
      headers: RunFunction.Headers;

      /**
       * Valid status code
       */
      statusCode: number;
    }

    export namespace RunFunction {
      /**
       * Any valid HTTP headers
       */
      export interface Headers {
        /**
         * Amount in mutez that was transferred on response
         */
        'X-JSTZ-AMOUNT'?: number;

        [k: string]: unknown;
      }
    }

    export interface Deposit {
      _type: 'Deposit';

      /**
       * Tezos Address
       */
      account: string;

      updatedBalance: number;
    }

    export interface FaDeposit {
      _type: 'FaDeposit';

      /**
       * Tezos Address
       */
      receiver: string;

      ticketBalance: number;

      runFunction?: FaDeposit.RunFunction | null;
    }

    export namespace FaDeposit {
      export interface RunFunction {
        body: Array<number> | null;

        /**
         * Any valid HTTP headers
         */
        headers: RunFunction.Headers;

        /**
         * Valid status code
         */
        statusCode: number;
      }

      export namespace RunFunction {
        /**
         * Any valid HTTP headers
         */
        export interface Headers {
          /**
           * Amount in mutez that was transferred on response
           */
          'X-JSTZ-AMOUNT'?: number;

          [k: string]: unknown;
        }
      }
    }

    export interface FaWithdraw {
      _type: 'FaWithdraw';

      amount: number;

      routingInfo: FaWithdraw.RoutingInfo;

      /**
       * Tezos Address
       */
      source: string;

      ticketInfo: FaWithdraw.TicketInfo;
    }

    export namespace FaWithdraw {
      export interface RoutingInfo {
        proxyL1Contract: string;

        /**
         * Tezos Address
         */
        receiver: string;
      }

      export interface TicketInfo {
        id: number;

        ticketer: string;

        content?: Array<number> | null;
      }
    }
  }

  export interface Failure {
    _type: 'Failed';

    inner: string;
  }
}

export interface SignedOperation {
  inner: Operation;

  signature: Shared.Signature;
}

export type OperationHashResponse = string;

export interface OperationHashParams {
  /**
   * The content of the operation
   */
  content:
    | OperationHashParams.DeployFunction
    | OperationHashParams.RunFunction
    | OperationHashParams.RevealLargePayload;

  /**
   * Nonce is used to avoid replay attacks.
   */
  nonce: AccountsAPI.Nonce;

  /**
   * The public key of the account which was used to sign the operation
   */
  publicKey: Shared.PublicKey;
}

export namespace OperationHashParams {
  export interface DeployFunction {
    _type: 'DeployFunction';

    /**
     * Amount of tez to credit to the smart function account, debited from the sender
     */
    accountCredit: number;

    /**
     * Smart function code
     */
    functionCode: AccountsAPI.Code;
  }

  export interface RunFunction {
    _type: 'RunFunction';

    body: Array<number> | null;

    /**
     * Maximum amount of gas that is allowed for the execution of this operation
     */
    gasLimit: number;

    /**
     * Any valid HTTP headers
     */
    headers: RunFunction.Headers;

    /**
     * Any valid HTTP method
     */
    method: string;

    /**
     * Smart function URI in the form jstz://{smart_function_address}/rest/of/path
     */
    uri: string;
  }

  export namespace RunFunction {
    /**
     * Any valid HTTP headers
     */
    export interface Headers {
      /**
       * Amount in mutez to transfer on request
       */
      'X-JSTZ-TRANSFER'?: number;

      [k: string]: unknown;
    }
  }

  export interface RevealLargePayload {
    _type: 'RevealLargePayload';

    /**
     * The original operation hash that is being revealed.
     */
    originalOpHash: Array<number>;

    /**
     * The type of operation being revealed.
     */
    revealType: string;

    /**
     * The root hash of the preimage of the operation used to reveal the operation
     * data.
     */
    rootHash: string;
  }
}

export interface OperationInjectParams {
  inner: Operation;

  signature: Shared.Signature;
}

export declare namespace Operations {
  export {
    type Operation as Operation,
    type Receipt as Receipt,
    type SignedOperation as SignedOperation,
    type OperationHashResponse as OperationHashResponse,
    type OperationHashParams as OperationHashParams,
    type OperationInjectParams as OperationInjectParams,
  };
}
