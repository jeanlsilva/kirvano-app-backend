import { HttpRequest } from '@/presentation/controllers/ports';

export interface UseCase<Request, Response> {
    perform(request: HttpRequest<Request>): Promise<Response>;
}
  