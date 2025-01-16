// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class NonceResource extends APIResource {
  /**
   * Get nonce of an account
   */
  retrieve(address: string, options?: Core.RequestOptions): Core.APIPromise<Nonce> {
    return this._client.get(`/accounts/${address}/nonce`, options);
  }
}

export type Nonce = number;

export declare namespace NonceResource {
  export { type Nonce as Nonce };
}
