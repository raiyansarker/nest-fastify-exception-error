import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
} from '@nestjs/common';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    // const request = ctx.getRequest();
    const response = ctx.getResponse();
    // const status = exception.getStatus();
    // const { message, error } = exception.getResponse() as {
    //   statusCode: number;
    //   message: string;
    //   error: string;
    // };

    // console.log(response.view);
    response.view('error.hbs');

    // Checl Here
    // return response.code(404).view('error.hbs');

    // For express I used to do
    // return response.code(404).render('error.hbs');
  }
}
