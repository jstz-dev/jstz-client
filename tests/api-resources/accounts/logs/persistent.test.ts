// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Jstz from '@jstz-dev/jstz-client';
import { Response } from 'node-fetch';

const client = new Jstz({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource persistent', () => {
  test('list', async () => {
    const responsePromise = client.accounts.logs.persistent.list('address');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.accounts.logs.persistent.list('address', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Jstz.NotFoundError);
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.accounts.logs.persistent.list(
        'address',
        { limit: 0, offset: 0 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Jstz.NotFoundError);
  });

  test('get', async () => {
    const responsePromise = client.accounts.logs.persistent.get('address', 'request_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('get: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.accounts.logs.persistent.get('address', 'request_id', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Jstz.NotFoundError);
  });
});
