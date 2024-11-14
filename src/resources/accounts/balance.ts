// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class Balance extends APIResource {
  /**
   * Get balance of an account
   */
  retrieve(address: string, options?: Core.RequestOptions): Core.APIPromise<BalanceRetrieveResponse> {
    return this._client.get(`/accounts/${address}/balance`, options);
  }
}

export type BalanceRetrieveResponse = number;

export declare namespace Balance {
  export { type BalanceRetrieveResponse as BalanceRetrieveResponse };
}
