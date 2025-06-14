// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { Jstz } from './index';

export abstract class APIResource {
  protected _client: Jstz;

  constructor(client: Jstz) {
    this._client = client;
  }
}
