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
  public_key: OperationCreateParams.Ed25519 | OperationCreateParams.Secp256k1 | OperationCreateParams.P256;

  signature:
    | OperationCreateParams.Ed25519Signature
    | OperationCreateParams.Secp256k1Signature
    | OperationCreateParams.P256Signature;
}

export namespace OperationCreateParams {
  export interface Inner {
    content: Inner.DeployFunction | Inner.RunFunction;

    nonce: NonceAPI.Nonce;

    /**
     * Tezos Address
     */
    source: Inner.Tz1 | Inner.Tz2 | Inner.Tz3;
  }

  export namespace Inner {
    export interface DeployFunction {
      DeployFunction: DeployFunction.DeployFunction;
    }

    export namespace DeployFunction {
      export interface DeployFunction {
        /**
         * Amount of tez to credit to the smart function account, debited from the sender
         */
        account_credit: number;

        /**
         * Smart function code
         */
        function_code: CodeAPI.ParsedCode;
      }
    }

    export interface RunFunction {
      /**
       * Request used to run a smart function. The target smart function is given by the
       * host part of the uri. The rest of the attributes will be handled by the smart
       * function itself.
       */
      RunFunction: RunFunction.RunFunction;
    }

    export namespace RunFunction {
      /**
       * Request used to run a smart function. The target smart function is given by the
       * host part of the uri. The rest of the attributes will be handled by the smart
       * function itself.
       */
      export interface RunFunction {
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

  export interface Ed25519 {
    Ed25519: string;
  }

  export interface Secp256k1 {
    Secp256k1: string;
  }

  export interface P256 {
    P256: string;
  }

  export interface Ed25519Signature {
    Ed25519: string;
  }

  export interface Secp256k1Signature {
    Secp256k1: string;
  }

  export interface P256Signature {
    P256: string;
  }
}

Operations.ReceiptResource = ReceiptResource;

export declare namespace Operations {
  export { type OperationCreateParams as OperationCreateParams };

  export { ReceiptResource as ReceiptResource, type Receipt as Receipt };
}
