// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as CryptoAPI from '../crypto';
import { OperationInjectParams } from './operations';

export class ReceiptResource extends APIResource {
  /**
   * Get the receipt of an operation
   */
  retrieve(operationHash: string, options?: Core.RequestOptions): Core.APIPromise<Receipt> {
    return this._client.get(`/operations/${operationHash}/receipt`, options);
  }

  /**
   * Parsed the receipt based on the operation type
   */
  parseReceipt<T extends OperationInjectParams>(receipt: Receipt): TypedReceipt<T> { 
    switch (receipt.result._type) {
      case 'Success':
        switch (receipt.result.inner._type) {
          case 'DeployFunction':
            return receipt as TypedReceipt<T>;
          case 'RunFunction':
            return receipt as TypedReceipt<T>;
          case 'Deposit':
            return receipt as TypedReceipt<T>;
          case 'FaDeposit':
            return receipt as TypedReceipt<T>;
          case 'FaWithdraw':
            return receipt as TypedReceipt<T>;
        }
      case 'Failed':
        throw new Error(receipt.result.inner);
    }
  }

  /**
   * Polls the receipt until it is available in a typesafe manner.
   */
  pollReceipt<T extends OperationInjectParams>(operationHash: string, options?: Core.RequestOptions): Promise<TypedReceipt<T>> {
    const intervalRate = options?.pollInterval ?? 3000;
    const startTime = Date.now();
    return new Promise((resolve, reject) => {
      const interval = setInterval(async () => {
        try {
          const call = this.retrieve(operationHash, options);
          const response = await call.asResponse();
          if (response.status === 200) {
            const receipt = this.parseReceipt<T>(await call) ;
            clearInterval(interval);
            resolve(receipt);
          }
          const now = Date.now();
          const elapsedTime = now - startTime;
          if (elapsedTime > (options?.timeout ?? 30000)) {
            throw new Error('Poll timeout');  
          }
        }
        catch (err) {
          clearInterval(interval);
          reject(err);
        }
      }, intervalRate);
    });
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
      address: CryptoAPI.PublicKeyHash;
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
      source: CryptoAPI.PublicKeyHash;
    }
  }

  export interface Failure {
    _type: 'Failed';

    inner: string;
  }
}

// Add this type helper to determine the return type based on operation type
export type TypedReceipt<T> = T extends OperationInjectParams & { inner: { _type: 'DeployFunction' } }
  ? Receipt & { result: Receipt.Success & { inner: Receipt.Success.DeployFunction } }
  : T extends OperationInjectParams & { inner: { _type: 'RunFunction' } }
  ? Receipt & { result: Receipt.Success & { inner: Receipt.Success.RunFunction } }
  : T extends OperationInjectParams & { inner: { _type: 'Deposit' } }
  ? Receipt & { result: Receipt.Success & { inner: Receipt.Success.Deposit } }
  : T extends OperationInjectParams & { inner: { _type: 'FaDeposit' } }
  ? Receipt & { result: Receipt.Success & { inner: Receipt.Success.FaDeposit } }
  : T extends OperationInjectParams & { inner: { _type: 'FaWithdraw' } }
  ? Receipt & { result: Receipt.Success & { inner: Receipt.Success.FaWithdraw } }
  : Receipt;

export declare namespace ReceiptResource {
  export { type Receipt as Receipt };
}
