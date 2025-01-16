// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as LogsAPI from './logs';

export class PersistentRequests extends APIResource {
  /**
   * Fetch console logs by address and request id from the log store only if
   * persistent logging is enabled on this Jstz node instance
   */
  retrieve(
    address: string,
    requestId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PersistentRequestRetrieveResponse> {
    return this._client.get(`/logs/${address}/persistent/requests/${requestId}`, options);
  }

  /**
   * Fetch console logs by address from the log store only if persistent logging is
   * enabled on this Jstz node instance
   */
  list(
    address: string,
    query?: PersistentRequestListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PersistentRequestListResponse>;
  list(address: string, options?: Core.RequestOptions): Core.APIPromise<PersistentRequestListResponse>;
  list(
    address: string,
    query: PersistentRequestListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<PersistentRequestListResponse> {
    if (isRequestOptions(query)) {
      return this.list(address, {}, query);
    }
    return this._client.get(`/logs/${address}/persistent/requests`, { query, ...options });
  }
}

export type PersistentRequestRetrieveResponse = Array<LogsAPI.LogRecord>;

export type PersistentRequestListResponse = Array<LogsAPI.LogRecord>;

export interface PersistentRequestListParams {
  limit?: number;

  offset?: number;
}

export declare namespace PersistentRequests {
  export {
    type PersistentRequestRetrieveResponse as PersistentRequestRetrieveResponse,
    type PersistentRequestListResponse as PersistentRequestListResponse,
    type PersistentRequestListParams as PersistentRequestListParams,
  };
}
