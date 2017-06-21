import { Injectable } from '@angular/core';
import { BaseRequestOptions, RequestOptions } from '@angular/http';
import { environment } from '../environments/environment';

@Injectable()
export class DefaultRequestOptions extends BaseRequestOptions {
  constructor() {
    super();

    if (!environment.production) {
      this.withCredentials = true;
    }

    this.headers.set('Content-Type', 'application/json');
    this.headers.set('Accept', 'application/json');
  }
}

export const requestOptionsProvider = {
  provide: RequestOptions,
  useClass: DefaultRequestOptions
};
