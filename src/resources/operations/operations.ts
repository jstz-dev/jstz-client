// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as Shared from '../shared';
import * as AccountsAPI from '../accounts/accounts';
import * as ContentAPI from './content';
import {
  Content,
  DeployFunction as ContentAPIDeployFunction,
  RunFunction as ContentAPIRunFunction,
} from './content';

export class Operations extends APIResource {
  content: ContentAPI.Content = new ContentAPI.Content(this._client);

  /**
   * Get the receipt of an operation
   */
  getReceipt(operationHash: string, options?: Core.RequestOptions): Core.APIPromise<Receipt> {
    return this._client.get(`/operations/${operationHash}/receipt`, options);
  }

  /**
   * Returns the hash of an Operation
   */
  hash(body: OperationHashParams, options?: Core.RequestOptions): Core.APIPromise<OperationHashResponse> {
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
   * Request used to run a smart function. The target smart function is given by the
   * host part of the uri. The rest of the attributes will be handled by the smart
   * function itself.
   */
  content: Operation.DeployFunction | Operation.RunFunction;

  nonce: AccountsAPI.Nonce;

  /**
   * Tezos Address
   */
  source: Shared.PublicKeyHash;
}

export namespace Operation {
  export interface DeployFunction extends ContentAPI.DeployFunction {
    _type: 'DeployFunction';
  }

  /**
   * Request used to run a smart function. The target smart function is given by the
   * host part of the uri. The rest of the attributes will be handled by the smart
   * function itself.
   */
  export interface RunFunction extends ContentAPI.RunFunction {
    _type: 'RunFunction';
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
      address: string | DeployFunction.Kt1;
    }

    export namespace DeployFunction {
      export interface Kt1 {
        Kt1: string;
      }
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
      account: string | Deposit.Kt1;

      updated_balance: number;
    }

    export namespace Deposit {
      export interface Kt1 {
        Kt1: string;
      }
    }

    export interface FaDeposit {
      _type: 'FaDeposit';

      /**
       * Tezos Address
       */
      receiver: string | FaDeposit.Kt1;

      ticket_balance: number;

      run_function?: FaDeposit.RunFunction | null;
    }

    export namespace FaDeposit {
      export interface Kt1 {
        Kt1: string;
      }

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
      source: string | FaWithdraw.Kt1;
    }

    export namespace FaWithdraw {
      export interface Kt1 {
        Kt1: string;
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

  /**
   * Tezos public key
   */
  public_key: Shared.PublicKey;

  signature: Shared.Signature;
}

export type OperationHashResponse = Array<number>;

export interface OperationHashParams {
  /**
   * Request used to run a smart function. The target smart function is given by the
   * host part of the uri. The rest of the attributes will be handled by the smart
   * function itself.
   */
  content: OperationHashParams.DeployFunction | OperationHashParams.RunFunction;

  nonce: AccountsAPI.Nonce;

  /**
   * Tezos Address
   */
  source: Shared.PublicKeyHash;
}

export namespace OperationHashParams {
  export interface DeployFunction extends ContentAPI.DeployFunction {
    _type: 'DeployFunction';
  }

  /**
   * Request used to run a smart function. The target smart function is given by the
   * host part of the uri. The rest of the attributes will be handled by the smart
   * function itself.
   */
  export interface RunFunction extends ContentAPI.RunFunction {
    _type: 'RunFunction';
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

Operations.Content = Content;

export declare namespace Operations {
  export {
    type Operation as Operation,
    type Receipt as Receipt,
    type SignedOperation as SignedOperation,
    type OperationHashResponse as OperationHashResponse,
    type OperationHashParams as OperationHashParams,
    type OperationInjectParams as OperationInjectParams,
  };

  export {
    Content as Content,
    type ContentAPIDeployFunction as DeployFunction,
    type ContentAPIRunFunction as RunFunction,
  };
}
