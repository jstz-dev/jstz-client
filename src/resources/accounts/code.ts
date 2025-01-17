// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class Code extends APIResource {
  /**
   * Get code of an account
   */
  retrieve(address: string, options?: Core.RequestOptions): Core.APIPromise<string> {
    return this._client.get(`/accounts/${address}/code`, options);
  }
}

export type ParsedCode = string;

export declare namespace Code {
  export { type ParsedCode as ParsedCode };
}
