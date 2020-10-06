import { HttpEventType, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { tap } from 'rxjs/internal/operators/tap';

export class LoggingInterceptorService implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler) {
        console.log('Outgoing Req');
        console.log(req.url);
        return next.handle(req).pipe(tap(
            events => {
                if(events.type === HttpEventType.Response){
                    console.log('Response Arrived');
                    console.log(events.body);
                }
            }
        ));
    }
}