export interface HttpResponse<T> {
    statusCode: number;
    message: string;
    errorType?: string;
    data?: T;
}