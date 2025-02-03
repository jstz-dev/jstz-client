// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Jstz from '@jstz-dev/jstz-client';
import { Response } from 'node-fetch';

const client = new Jstz({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource accounts', () => {
  test('get', async () => {
    const responsePromise = client.accounts.get('address');
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
    await expect(client.accounts.get('address', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      Jstz.NotFoundError,
    );
  });

  test('getBalance', async () => {
    const responsePromise = client.accounts.getBalance('address');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('getBalance: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.accounts.getBalance('address', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      Jstz.NotFoundError,
    );
  });

  test('getCode', async () => {
    const responsePromise = client.accounts.getCode('address');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('getCode: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.accounts.getCode('address', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      Jstz.NotFoundError,
    );
  });

  test('getKv', async () => {
    const responsePromise = client.accounts.getKv('address');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('getKv: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.accounts.getKv('address', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      Jstz.NotFoundError,
    );
  });

  test('getKv: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.accounts.getKv('address', { key: 'key' }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Jstz.NotFoundError);
  });

  test('getNonce', async () => {
    const responsePromise = client.accounts.getNonce('address');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('getNonce: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.accounts.getNonce('address', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      Jstz.NotFoundError,
    );
  });

  test('getSubkeys', async () => {
    const responsePromise = client.accounts.getSubkeys('address');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('getSubkeys: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.accounts.getSubkeys('address', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      Jstz.NotFoundError,
    );
  });

  test('getSubkeys: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.accounts.getSubkeys('address', { key: 'key' }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Jstz.NotFoundError);
  });
});
