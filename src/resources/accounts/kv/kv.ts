// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as SubkeysAPI from './subkeys';
import { SubkeyListResponse, Subkeys } from './subkeys';

export class Kv extends APIResource {
  subkeys: SubkeysAPI.Subkeys = new SubkeysAPI.Subkeys(this._client);

  /**
   * Get KV value under a given key path for an account. If `key` is not provided,
   * the empty key path will be used.
   */
  retrieve(address: string, options?: Core.RequestOptions): Core.APIPromise<string> {
    return this._client.get(`/accounts/${address}/kv`, options);
  }
}

/**
 * A value stored in the Key-Value store. Always valid JSON.
 */
export type KvValue = string;

Kv.Subkeys = Subkeys;

export declare namespace Kv {
  export { type KvValue as KvValue };

  export { Subkeys as Subkeys, type SubkeyListResponse as SubkeyListResponse };
}
