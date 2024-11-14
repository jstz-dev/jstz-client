// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';

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

export interface LogRecord {
  /**
   * Tezos Address
   */
  address: LogRecord.Tz1 | LogRecord.Tz2 | LogRecord.Tz3;

  level: 'ERROR' | 'WARN' | 'INFO' | 'LOG';

  request_id: string;

  text: string;
}

export namespace LogRecord {
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

export type PersistentRequestRetrieveResponse = Array<LogRecord>;

export type PersistentRequestListResponse = Array<LogRecord>;

export interface PersistentRequestListParams {
  limit?: number;

  offset?: number;
}

export declare namespace PersistentRequests {
  export {
    type LogRecord as LogRecord,
    type PersistentRequestRetrieveResponse as PersistentRequestRetrieveResponse,
    type PersistentRequestListResponse as PersistentRequestListResponse,
    type PersistentRequestListParams as PersistentRequestListParams,
  };
}
