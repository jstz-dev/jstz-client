// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';

export class Subkeys extends APIResource {
  /**
   * Get array of KV subkeys under a given key path for an account. If `key` is not
   * provided, the empty key path will be used.
   */
  list(address: string, options?: Core.RequestOptions): Core.APIPromise<SubkeyListResponse> {
    return this._client.get(`/accounts/${address}/kv/subkeys`, options);
  }
}

export type SubkeyListResponse = Array<string>;

export declare namespace Subkeys {
  export { type SubkeyListResponse as SubkeyListResponse };
}
