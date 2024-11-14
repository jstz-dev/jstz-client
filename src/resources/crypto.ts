// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';

export class Crypto extends APIResource {}

/**
 * Tezos public key
 */
export type PublicKey = string;

/**
 * Tezos Address
 */
export type PublicKeyHash = string;

export type Signature = string;

export declare namespace Crypto {
  export { type PublicKey as PublicKey, type PublicKeyHash as PublicKeyHash, type Signature as Signature };
}
