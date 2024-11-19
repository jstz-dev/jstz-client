// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import Blake2b from 'blakejs';

export class Crypto extends APIResource {
  static blake2b_hash = (buffer: Buffer): string => {
    return Blake2b.blake2bHex(buffer, undefined, 32);
  }
}

/**
 * Tezos public key
 */
export type PublicKey = string;

/**
 * Tezos Address
 */
export type PublicKeyHash = string;

export type Signature = string;

/**
 * Jstz commpliant blake2b hash
 */

export declare namespace Crypto {
  export { type PublicKey as PublicKey, type PublicKeyHash as PublicKeyHash, type Signature as Signature };
}
