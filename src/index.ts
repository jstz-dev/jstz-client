// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { type Agent } from './_shims/index';
import * as Core from './core';
import * as Errors from './error';
import * as Uploads from './uploads';
import * as API from './resources/index';
import {
  Operation,
  OperationHashParams,
  OperationHashResponse,
  OperationInjectParams,
  Operations,
  Receipt,
  SignedOperation,
} from './resources/operations';
import {
  Account,
  AccountGetBalanceResponse,
  AccountGetSubkeysResponse,
  Accounts,
  Code,
  KvValue,
  Nonce,
} from './resources/accounts/accounts';

export interface ClientOptions {
  /**
   * Override the default base URL for the API, e.g., "https://api.example.com/v2/"
   *
   * Defaults to process.env['JSTZ_BASE_URL'].
   */
  baseURL?: string | null | undefined;

  /**
   * The maximum amount of time (in milliseconds) that the client should wait for a response
   * from the server before timing out a single request.
   *
   * Note that request timeouts are retried by default, so in a worst-case scenario you may wait
   * much longer than this timeout before the promise succeeds or fails.
   */
  timeout?: number;

  /**
   * An HTTP agent used to manage HTTP(S) connections.
   *
   * If not provided, an agent will be constructed by default in the Node.js environment,
   * otherwise no agent is used.
   */
  httpAgent?: Agent;

  /**
   * Specify a custom `fetch` function implementation.
   *
   * If not provided, we use `node-fetch` on Node.js and otherwise expect that `fetch` is
   * defined globally.
   */
  fetch?: Core.Fetch | undefined;

  /**
   * The maximum number of times that the client will retry a request in case of a
   * temporary failure, like a network error or a 5XX error from the server.
   *
   * @default 2
   */
  maxRetries?: number;

  /**
   * Default headers to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * header to `undefined` or `null` in request options.
   */
  defaultHeaders?: Core.Headers;

  /**
   * Default query parameters to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * param to `undefined` in request options.
   */
  defaultQuery?: Core.DefaultQuery;
}

/**
 * API Client for interfacing with the Jstz API.
 */
export class Jstz extends Core.APIClient {
  private _options: ClientOptions;

  /**
   * API Client for interfacing with the Jstz API.
   *
   * @param {string} [opts.baseURL=process.env['JSTZ_BASE_URL'] ?? https://localhost:8933] - Override the default base URL for the API.
   * @param {number} [opts.timeout=1 minute] - The maximum amount of time (in milliseconds) the client will wait for a response before timing out.
   * @param {number} [opts.httpAgent] - An HTTP agent used to manage HTTP(s) connections.
   * @param {Core.Fetch} [opts.fetch] - Specify a custom `fetch` function implementation.
   * @param {number} [opts.maxRetries=2] - The maximum number of times the client will retry a request.
   * @param {Core.Headers} opts.defaultHeaders - Default headers to include with every request to the API.
   * @param {Core.DefaultQuery} opts.defaultQuery - Default query parameters to include with every request to the API.
   */
  constructor({ baseURL = Core.readEnv('JSTZ_BASE_URL'), ...opts }: ClientOptions = {}) {
    const options: ClientOptions = {
      ...opts,
      baseURL: baseURL || `https://localhost:8933`,
    };

    super({
      baseURL: options.baseURL!,
      timeout: options.timeout ?? 60000 /* 1 minute */,
      httpAgent: options.httpAgent,
      maxRetries: options.maxRetries,
      fetch: options.fetch,
    });

    this._options = options;
  }

  accounts: API.Accounts = new API.Accounts(this);
  operations: API.Operations = new API.Operations(this);

  protected override defaultQuery(): Core.DefaultQuery | undefined {
    return this._options.defaultQuery;
  }

  protected override defaultHeaders(opts: Core.FinalRequestOptions): Core.Headers {
    return {
      ...super.defaultHeaders(opts),
      ...this._options.defaultHeaders,
    };
  }

  static Jstz = this;
  static DEFAULT_TIMEOUT = 60000; // 1 minute

  static JstzError = Errors.JstzError;
  static APIError = Errors.APIError;
  static APIConnectionError = Errors.APIConnectionError;
  static APIConnectionTimeoutError = Errors.APIConnectionTimeoutError;
  static APIUserAbortError = Errors.APIUserAbortError;
  static NotFoundError = Errors.NotFoundError;
  static ConflictError = Errors.ConflictError;
  static RateLimitError = Errors.RateLimitError;
  static BadRequestError = Errors.BadRequestError;
  static AuthenticationError = Errors.AuthenticationError;
  static InternalServerError = Errors.InternalServerError;
  static PermissionDeniedError = Errors.PermissionDeniedError;
  static UnprocessableEntityError = Errors.UnprocessableEntityError;

  static toFile = Uploads.toFile;
  static fileFromPath = Uploads.fileFromPath;
}

Jstz.Accounts = Accounts;
Jstz.Operations = Operations;
export declare namespace Jstz {
  export type RequestOptions = Core.RequestOptions;

  export {
    Accounts as Accounts,
    type Account as Account,
    type Code as Code,
    type KvValue as KvValue,
    type Nonce as Nonce,
    type AccountGetBalanceResponse as AccountGetBalanceResponse,
    type AccountGetSubkeysResponse as AccountGetSubkeysResponse,
  };

  export {
    Operations as Operations,
    type Operation as Operation,
    type Receipt as Receipt,
    type SignedOperation as SignedOperation,
    type OperationHashResponse as OperationHashResponse,
    type OperationHashParams as OperationHashParams,
    type OperationInjectParams as OperationInjectParams,
  };

  export type PublicKey = API.PublicKey;
  export type PublicKeyHash = API.PublicKeyHash;
  export type Signature = API.Signature;
}

export { toFile, fileFromPath } from './uploads';
export {
  JstzError,
  APIError,
  APIConnectionError,
  APIConnectionTimeoutError,
  APIUserAbortError,
  NotFoundError,
  ConflictError,
  RateLimitError,
  BadRequestError,
  AuthenticationError,
  InternalServerError,
  PermissionDeniedError,
  UnprocessableEntityError,
} from './error';

export default Jstz;
