// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as PersistentRequestsAPI from './persistent-requests';
import {
  PersistentRequestListParams,
  PersistentRequestListResponse,
  PersistentRequestRetrieveResponse,
  PersistentRequests,
} from './persistent-requests';

export class Logs extends APIResource {
  persistentRequests: PersistentRequestsAPI.PersistentRequests = new PersistentRequestsAPI.PersistentRequests(
    this._client,
  );

  /**
   * Returns a stream of console logs from the given Smart Function as Server-Sent
   * Events.
   */
  stream(address: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.get(`/logs/${address}/stream`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface LogRecord {
  /**
   * Tezos Address
   */
  address: string | LogRecord.Kt1;

  level: 'ERROR' | 'WARN' | 'INFO' | 'LOG';

  request_id: string;

  text: string;
}

export namespace LogRecord {
  export interface Kt1 {
    Kt1: string;
  }
}

Logs.PersistentRequests = PersistentRequests;

export declare namespace Logs {
  export { type LogRecord as LogRecord };

  export {
    PersistentRequests as PersistentRequests,
    type PersistentRequestRetrieveResponse as PersistentRequestRetrieveResponse,
    type PersistentRequestListResponse as PersistentRequestListResponse,
    type PersistentRequestListParams as PersistentRequestListParams,
  };
}
