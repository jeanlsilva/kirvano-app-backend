import { HttpRequest } from './http-request'
import { HttpResponse } from './http-response';

export interface Controller<T> {
  handle(httpRequest: HttpRequest<T>): Promise<HttpResponse>;
}
