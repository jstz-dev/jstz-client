// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import JstzClient from 'jstz-client';
import { Response } from 'node-fetch';

const client = new JstzClient({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource operations', () => {
  test('create: only required params', async () => {
    const responsePromise = client.operations.create({
      inner: {
        content: {
          DeployFunction: {
            account_credit: 0,
            function_code: "export default (request) => new Response('Hello world!')",
          },
        },
        nonce: 0,
        source: { Tz1: 'tz1cD5CuvAALcxgypqBXcBQEA8dkLJivoFjU' },
      },
      public_key: { Ed25519: 'edpkukK9ecWxib28zi52nvbXTdsYt8rYcvmt5bdH8KjipWXm8sH3Qi' },
      signature: {
        Ed25519:
          'edsigtpe2oRBMFdrrwf99ETNjmBaRzNDexDjhancfQdz5phrwyPPhRi9L7kzJD4cAW1fFcsyTJcTDPP8W4H168QPQdGPKe7jrZB',
      },
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.operations.create({
      inner: {
        content: {
          DeployFunction: {
            account_credit: 0,
            function_code: "export default (request) => new Response('Hello world!')",
          },
        },
        nonce: 0,
        source: { Tz1: 'tz1cD5CuvAALcxgypqBXcBQEA8dkLJivoFjU' },
      },
      public_key: { Ed25519: 'edpkukK9ecWxib28zi52nvbXTdsYt8rYcvmt5bdH8KjipWXm8sH3Qi' },
      signature: {
        Ed25519:
          'edsigtpe2oRBMFdrrwf99ETNjmBaRzNDexDjhancfQdz5phrwyPPhRi9L7kzJD4cAW1fFcsyTJcTDPP8W4H168QPQdGPKe7jrZB',
      },
    });
  });
});
