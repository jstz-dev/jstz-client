// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as PersistentRequestsAPI from './persistent-requests';
import {
  LogRecord,
  PersistentRequestListParams,
  PersistentRequestListResponse,
  PersistentRequestRetrieveResponse,
  PersistentRequests,
} from './persistent-requests';
import * as StreamAPI from './stream';
import { Stream } from './stream';

export class Logs extends APIResource {
  persistentRequests: PersistentRequestsAPI.PersistentRequests = new PersistentRequestsAPI.PersistentRequests(
    this._client,
  );
  stream: StreamAPI.Stream = new StreamAPI.Stream(this._client);
}

Logs.PersistentRequests = PersistentRequests;
Logs.Stream = Stream;

export declare namespace Logs {
  export {
    PersistentRequests as PersistentRequests,
    type LogRecord as LogRecord,
    type PersistentRequestRetrieveResponse as PersistentRequestRetrieveResponse,
    type PersistentRequestListResponse as PersistentRequestListResponse,
    type PersistentRequestListParams as PersistentRequestListParams,
  };

  export { Stream as Stream };
}
