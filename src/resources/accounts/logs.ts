// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';

export class Logs extends APIResource {}

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

export declare namespace Logs {
  export { type LogRecord as LogRecord };
}
