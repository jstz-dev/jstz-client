// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as AccountsAPI from './accounts';
import * as LogsAPI from './logs/logs';
import { Log, Logs } from './logs/logs';

export class Accounts extends APIResource {
  logs: LogsAPI.Logs = new LogsAPI.Logs(this._client);

  /**
   * Get account
   */
  get(address: string, options?: Core.RequestOptions): Core.APIPromise<Account> {
    return this._client.get(`/accounts/${address}`, options);
  }

  /**
   * Get balance of an account
   */
  getBalance(address: string, options?: Core.RequestOptions): Core.APIPromise<AccountGetBalanceResponse> {
    return this._client.get(`/accounts/${address}/balance`, {
      ...options,
      headers: { Accept: 'text/plain', ...options?.headers },
    });
  }

  /**
   * Get code of an account
   */
  getCode(address: string, options?: Core.RequestOptions): Core.APIPromise<string> {
    return this._client.get(`/accounts/${address}/code`, options);
  }

  /**
   * Get KV value under a given key path for an account. If `key` is not provided,
   * the empty key path will be used.
   */
  getKv(address: string, options?: Core.RequestOptions): Core.APIPromise<string> {
    return this._client.get(`/accounts/${address}/kv`, options);
  }

  /**
   * Get nonce of an account
   */
  getNonce(address: string, options?: Core.RequestOptions): Core.APIPromise<Nonce> {
    return this._client.get(`/accounts/${address}/nonce`, options);
  }

  /**
   * Get array of KV subkeys under a given key path for an account. If `key` is not
   * provided, the empty key path will be used.
   */
  getSubkeys(address: string, options?: Core.RequestOptions): Core.APIPromise<AccountGetSubkeysResponse> {
    return this._client.get(`/accounts/${address}/kv/subkeys`, options);
  }
}

export type Account = Account.User | Account.SmartFunction;

export namespace Account {
  export interface User {
    User: User.User;
  }

  export namespace User {
    export interface User {
      amount: number;

      nonce: AccountsAPI.Nonce;
    }
  }

  export interface SmartFunction {
    SmartFunction: SmartFunction.SmartFunction;
  }

  export namespace SmartFunction {
    export interface SmartFunction {
      amount: number;

      function_code: AccountsAPI.Code;

      nonce: AccountsAPI.Nonce;
    }
  }
}

export type Code = string;

/**
 * A value stored in the Key-Value store. Always valid JSON.
 */
export type KvValue = string;

export type Nonce = number;

export type AccountGetBalanceResponse = number;

export type AccountGetSubkeysResponse = Array<string>;

Accounts.Logs = Logs;

export declare namespace Accounts {
  export {
    type Account as Account,
    type Code as Code,
    type KvValue as KvValue,
    type Nonce as Nonce,
    type AccountGetBalanceResponse as AccountGetBalanceResponse,
    type AccountGetSubkeysResponse as AccountGetSubkeysResponse,
  };

  export { Logs as Logs, type Log as Log };
}
