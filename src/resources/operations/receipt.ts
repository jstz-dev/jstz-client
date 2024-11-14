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

  inner: Receipt.UnionMember0 | Receipt._Type;
}

export namespace Receipt {
  export interface UnionMember0 {}

  export interface _Type {
    _type: 'Err';
  }
}

export declare namespace ReceiptResource {
  export { type Receipt as Receipt };
}
