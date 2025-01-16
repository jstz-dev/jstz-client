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
    return this._client.post('/operations/hash', {
      body,
      ...options,
      headers: { Accept: 'application/json', ...options?.headers },
    });
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
  content: Operation.DeployFunction | Operation.RunFunction;

  nonce: AccountsAPI.Nonce;

  /**
   * Tezos Address
   */
  source: Shared.PublicKeyHash;
}

export namespace Operation {
  export interface DeployFunction {
    _type: 'DeployFunction';

    /**
     * Amount of tez to credit to the smart function account, debited from the sender
     */
    account_credit: number;

    /**
     * Smart function code
     */
    function_code: AccountsAPI.Code;
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

      /**
       * Tezos Address
       */
      address: string;
    }

    export interface RunFunction {
      _type: 'RunFunction';

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

    export interface Deposit {
      _type: 'Deposit';

      /**
       * Tezos Address
       */
      account: string;

      updated_balance: number;
    }

    export interface FaDeposit {
      _type: 'FaDeposit';

      /**
       * Tezos Address
       */
      receiver: string;

      ticket_balance: number;

      run_function?: FaDeposit.RunFunction | null;
    }

    export namespace FaDeposit {
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

    export interface FaWithdraw {
      _type: 'FaWithdraw';

      outbox_message_id: string;

      /**
       * Tezos Address
       */
      source: string;
    }
  }

  export interface Failure {
    _type: 'Failed';

    inner: string;
  }
}

export interface SignedOperation {
  inner: Operation;

  /**
   * Tezos public key
   */
  public_key: Shared.PublicKey;

  signature: Shared.Signature;
}

export type OperationHashResponse = string;

export interface OperationHashParams {
  content: OperationHashParams.DeployFunction | OperationHashParams.RunFunction;

  nonce: AccountsAPI.Nonce;

  /**
   * Tezos Address
   */
  source: Shared.PublicKeyHash;
}

export namespace OperationHashParams {
  export interface DeployFunction {
    _type: 'DeployFunction';

    /**
     * Amount of tez to credit to the smart function account, debited from the sender
     */
    account_credit: number;

    /**
     * Smart function code
     */
    function_code: AccountsAPI.Code;
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

export interface OperationInjectParams {
  inner: Operation;

  /**
   * Tezos public key
   */
  public_key: Shared.PublicKey;

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
