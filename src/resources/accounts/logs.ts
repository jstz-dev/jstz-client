// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';

export class Logs extends APIResource {}

export interface LogRecord {
  /**
   * Tezos Address
   */
  address: string;

  level: 'ERROR' | 'WARN' | 'INFO' | 'LOG';

  request_id: string;

  text: string;
}

export declare namespace Logs {
  export { type LogRecord as LogRecord };
}
