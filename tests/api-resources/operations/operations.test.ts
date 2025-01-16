// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import JstzClient from '@jstz-dev/client';
import { Response } from 'node-fetch';

const client = new JstzClient({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource operations', () => {
  test('getReceipt', async () => {
    const responsePromise = client.operations.getReceipt('operation_hash');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('getReceipt: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.operations.getReceipt('operation_hash', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(JstzClient.NotFoundError);
  });

  test('hash: only required params', async () => {
    const responsePromise = client.operations.hash({
      content: {
        account_credit: 0,
        function_code: "export default (request) => new Response('Hello world!')",
        _type: 'DeployFunction',
      },
      nonce: 0,
      source: 'tz1cD5CuvAALcxgypqBXcBQEA8dkLJivoFjU',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('hash: required and optional params', async () => {
    const response = await client.operations.hash({
      content: {
        account_credit: 0,
        function_code: "export default (request) => new Response('Hello world!')",
        _type: 'DeployFunction',
      },
      nonce: 0,
      source: 'tz1cD5CuvAALcxgypqBXcBQEA8dkLJivoFjU',
    });
  });

  test('inject: only required params', async () => {
    const responsePromise = client.operations.inject({
      inner: {
        content: {
          account_credit: 0,
          function_code: "export default (request) => new Response('Hello world!')",
          _type: 'DeployFunction',
        },
        nonce: 0,
        source: 'tz1cD5CuvAALcxgypqBXcBQEA8dkLJivoFjU',
      },
      public_key: 'edpkukK9ecWxib28zi52nvbXTdsYt8rYcvmt5bdH8KjipWXm8sH3Qi',
      signature:
        'edsigtpe2oRBMFdrrwf99ETNjmBaRzNDexDjhancfQdz5phrwyPPhRi9L7kzJD4cAW1fFcsyTJcTDPP8W4H168QPQdGPKe7jrZB',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('inject: required and optional params', async () => {
    const response = await client.operations.inject({
      inner: {
        content: {
          account_credit: 0,
          function_code: "export default (request) => new Response('Hello world!')",
          _type: 'DeployFunction',
        },
        nonce: 0,
        source: 'tz1cD5CuvAALcxgypqBXcBQEA8dkLJivoFjU',
      },
      public_key: 'edpkukK9ecWxib28zi52nvbXTdsYt8rYcvmt5bdH8KjipWXm8sH3Qi',
      signature:
        'edsigtpe2oRBMFdrrwf99ETNjmBaRzNDexDjhancfQdz5phrwyPPhRi9L7kzJD4cAW1fFcsyTJcTDPP8W4H168QPQdGPKe7jrZB',
    });
  });
});
