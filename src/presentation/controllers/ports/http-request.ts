export interface HttpRequest<T> {
    body: T;
    query: {
        access_token: string
    }
}