// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';
import * as LogsAPI from './logs';

export class Persistent extends APIResource {
  /**
   * Fetch console logs by address from the log store only if persistent logging is
   * enabled on this Jstz node instance
   *
   * @example
   * ```ts
   * const logs = await client.accounts.logs.persistent.list(
   *   'address',
   * );
   * ```
   */
  list(
    address: string,
    query?: PersistentListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PersistentListResponse>;
  list(address: string, options?: Core.RequestOptions): Core.APIPromise<PersistentListResponse>;
  list(
    address: string,
    query: PersistentListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<PersistentListResponse> {
    if (isRequestOptions(query)) {
      return this.list(address, {}, query);
    }
    return this._client.get(`/logs/${address}/persistent/requests`, { query, ...options });
  }

  /**
   * Fetch console logs by address and request id from the log store only if
   * persistent logging is enabled on this Jstz node instance
   *
   * @example
   * ```ts
   * const logs = await client.accounts.logs.persistent.get(
   *   'address',
   *   'request_id',
   * );
   * ```
   */
  get(
    address: string,
    requestId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PersistentGetResponse> {
    return this._client.get(`/logs/${address}/persistent/requests/${requestId}`, options);
  }
}

export type PersistentListResponse = Array<LogsAPI.Log>;

export type PersistentGetResponse = Array<LogsAPI.Log>;

export interface PersistentListParams {
  limit?: number;

  offset?: number;
}

export declare namespace Persistent {
  export {
    type PersistentListResponse as PersistentListResponse,
    type PersistentGetResponse as PersistentGetResponse,
    type PersistentListParams as PersistentListParams,
  };
}
