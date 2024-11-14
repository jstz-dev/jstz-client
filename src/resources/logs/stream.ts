// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class Stream extends APIResource {
  /**
   * Returns a stream of console logs from the given Smart Function as Server-Sent
   * Events.
   */
  list(address: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.get(`/logs/${address}/stream`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}
