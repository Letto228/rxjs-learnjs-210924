// import { catchError, EMPTY, interval, map, mergeAll, mergeMap, NEVER, Observable, of, retry, take, tap, throwError, timer } from 'rxjs';
// import '../../assets/css/style.css';
// import { terminalLog } from '../../utils/log-in-terminal';

// const streamWithError$ = new Observable<number>(subscriber => {
//     subscriber.next(1);
//     subscriber.next(10);
//     subscriber.error(new Error('Error!'));
// })

// streamWithError$.pipe(
//     tap({
//         error: error => {
//             console.log('Tap: ', error);
//         },
//     }),
//     retry({
//         count: 3,
//         // delay: 1000,
//         delay: (error, retryCount) => timer(retryCount * 1000),
//     }),
//     catchError((error, parentStream$) => {
//         console.log('CatchError: ', error);

//         // return of(999);
//         // return throwError(new Error('OtherError')); // X
//         // return EMPTY; // |
//         return NEVER; // ------------------------------------------------------------------------...
//         // return parentStream$;
//     }),
// ).subscribe({
//     next: terminalLog,
//     complete: () => {
//         terminalLog('completed')
//     },
//     error: error => {
//         terminalLog(error);
//     }
// });
