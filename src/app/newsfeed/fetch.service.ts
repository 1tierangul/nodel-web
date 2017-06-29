/**
 * Created by Sunpil on 2017-06-29.
 */
import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { environment } from '../../environments/environment';

const baseUrl = environment.production
  ? '/api'
  : 'http://198.199.111.152:9090/api';

@Injectable()
export class FetchService {
  token = null;

  constructor(private http: Http) {}

  login(email: string, password: string) {
    return this.http
      .post(`${baseUrl}/user/auth`, { email, password })
      .toPromise()
      .then(this.extractData)
      .then((data) => {
        this.token = data.token;
        return data;
      })
      .catch(this.handleError);
  }

  isAuthorized() {
    if (!this.token) {
      return Promise.reject('Not authorized.');
    }

    const headers = new Headers();
    headers.append('Authorization', `token ${this.token}`);

    return this.http
      .get(`${baseUrl}/user/auth`, { headers })
      .toPromise()
      .catch(this.handleError);
  }

  register(email: string, name: string, password: string) {
    return this.http
      .post(`${baseUrl}/user`, { email, name, password })
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }

  getPhotoList(startIndex: number = 0, hashTag?: string) {
    const headers = new Headers();
    headers.append('Authorization', `token ${this.token}`);

    const params = new URLSearchParams();
    params.set('startIndex', startIndex.toString());

    if (hashTag) {
      params.set('hashTag', hashTag);
    }

    const options = new RequestOptions({
      headers,
      params
    });

    return this.http
      .get(`${baseUrl}/photo`, options)
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }


  postPhoto(fd: FormData) {
    const headers = new Headers();
    headers.append('Authorization', `token ${this.token}`);
    headers.append('Content-Type', 'multipart/form-data');

    return this.http
      .post(`${baseUrl}/photo`, fd, { headers })
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }

  extractData(res: Response) {
    return res.json();
  }

  handleError(err: Response | any) {
    let error;

    if (err instanceof Response) {
      error = err.json();
    } else {
      error = err.message ? err.message : err.toString();
    }
    console.error(error);
    return Promise.reject(error);
  }
}
