// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as BalanceAPI from './balance';
import { Balance, BalanceRetrieveResponse } from './balance';
import * as CodeAPI from './code';
import { Code, ParsedCode } from './code';
import * as NonceAPI from './nonce';
import { Nonce, NonceResource } from './nonce';
import * as KvAPI from './kv/kv';
import { Kv, KvValue } from './kv/kv';

export class Accounts extends APIResource {
  balance: BalanceAPI.Balance = new BalanceAPI.Balance(this._client);
  code: CodeAPI.Code = new CodeAPI.Code(this._client);
  kv: KvAPI.Kv = new KvAPI.Kv(this._client);
  nonce: NonceAPI.NonceResource = new NonceAPI.NonceResource(this._client);
}

Accounts.Balance = Balance;
Accounts.Code = Code;
Accounts.Kv = Kv;
Accounts.NonceResource = NonceResource;

export declare namespace Accounts {
  export { Balance as Balance, type BalanceRetrieveResponse as BalanceRetrieveResponse };

  export { Code as Code, type ParsedCode as ParsedCode };

  export { Kv as Kv, type KvValue as KvValue };

  export { NonceResource as NonceResource, type Nonce as Nonce };
}
