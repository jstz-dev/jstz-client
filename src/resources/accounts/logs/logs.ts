// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as PersistentAPI from './persistent';
import {
  Persistent,
  PersistentGetResponse,
  PersistentListParams,
  PersistentListResponse,
} from './persistent';

export class Logs extends APIResource {
  persistent: PersistentAPI.Persistent = new PersistentAPI.Persistent(this._client);

  /**
   * Returns a stream of console logs from the given Smart Function as Server-Sent
   * Events.
   *
   * @example
   * ```ts
   * await client.accounts.logs.stream('address');
   * ```
   */
  stream(address: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.get(`/logs/${address}/stream`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface Log {
  address: string;

  level: 'ERROR' | 'WARN' | 'INFO' | 'DEBUG';

  requestId: string;

  text: string;
}

Logs.Persistent = Persistent;

export declare namespace Logs {
  export { type Log as Log };

  export {
    Persistent as Persistent,
    type PersistentListResponse as PersistentListResponse,
    type PersistentGetResponse as PersistentGetResponse,
    type PersistentListParams as PersistentListParams,
  };
}
