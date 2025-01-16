// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as AccountsAPI from '../accounts/accounts';

export class Content extends APIResource {}

export interface DeployFunction {
  /**
   * Amount of tez to credit to the smart function account, debited from the sender
   */
  account_credit: number;

  /**
   * Smart function code
   */
  function_code: AccountsAPI.Code;
}

/**
 * Request used to run a smart function. The target smart function is given by the
 * host part of the uri. The rest of the attributes will be handled by the smart
 * function itself.
 */
export interface RunFunction {
  body: Array<number> | null;

  /**
   * Maximum amount of gas that is allowed for the execution of this operation
   */
  gas_limit: number;

  /**
   * Any valid HTTP headers
   */
  headers: Record<string, unknown>;

  /**
   * Any valid HTTP method
   */
  method: string;

  /**
   * Smart function URI in the form tezos://{smart_function_address}/rest/of/path
   */
  uri: string;
}

export declare namespace Content {
  export { type DeployFunction as DeployFunction, type RunFunction as RunFunction };
}
