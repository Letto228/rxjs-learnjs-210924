// import { filter, map, MonoTypeOperatorFunction, Observable, of, OperatorFunction, pipe, Subscriber } from 'rxjs';
// import '../../assets/css/style.css';
// import { terminalLog } from '../../utils/log-in-terminal';

// // // function filterStreamValue<T>(
// // //     cb: (value: T) => boolean
// // // ):(parentStream$: Observable<T>) => Observable<T> {
// // // function filterStreamValue<T>(cb: (value: T) => boolean): OperatorFunction<T, T> {
// // function filterStreamValue<T>(cb: (value: T) => boolean): MonoTypeOperatorFunction<T> {
// //     return (parentStream$: Observable<T>) => new Observable<T>(subscriber => {
// //         const parentSubscription = parentStream$.subscribe({
// //             next: value => {
// //                 if (cb(value)) {
// //                     subscriber.next(value);
// //                 }
// //             },
// //             error: error => {
// //                 subscriber.error(error);
// //             },
// //             complete: () => {
// //                 subscriber.complete();
// //             },
// //         });

// //         return () => {
// //             parentSubscription.unsubscribe();
// //         }
// //     });
// // };

// // const stream$ = of(1,2,3,4,5,6,7,8,9);

// // const filterStreamByEvenNumber = filter<number>(value => value % 2 === 0);

// // // stream$.subscribe(terminalLog);
// // filterStreamByEvenNumber(stream$).subscribe(terminalLog);

// // -----------------------------------
// // BAD
// // function stub(_: Observable<unknown>): Observable<string> {
// //     return new Observable(subscriber => {
// //         subscriber.next('Stub');
// //         subscriber.complete();
// //     });
// // }
// // BAD
// // -----------------------------------

// const filterEven = filter<number>(value => value % 2 === 0);
// const double = map<number, number>(value => value * 2);

// const stream$ = of(1,2,3,4,5,6,7,8,9);

// // -----------------------------------

// // const filterEvenChildStream$ = filterEven(stream$);
// // const doubleChildStream$ = double(filterEvenChildStream$);

// // doubleChildStream$.subscribe(terminalLog);

// // -----------------------------------

// // double(
// //     filterEven(stream$),
// // ).subscribe(terminalLog);

// // map<number, number>(value => value * 2)(
// //     filter<number>(value => value % 2 === 0)(
// //         stream$
// //     ),
// // ).subscribe(terminalLog);

// // -----------------------------------

// // function pipe(
// //     ...operatorFunctions: Array<OperatorFunction<any, any>>
// // ): OperatorFunction<any, any> {
// //     return (parentStream$: Observable<any>): Observable<any> => 
// //         operatorFunctions.reduce(
// //             (source$, operatorFunction) => operatorFunction(source$),
// //             parentStream$,
// //         );
// // }

// pipe(
//     filter<number>(value => value % 2 === 0),
//     map<number, number>(value => value * 2),
// )(stream$).subscribe(terminalLog);

// // stream$.pipe(
// //     filter<number>(value => value % 2 === 0),
// //     map<number, number>(value => value * 2),
// // ).subscribe(terminalLog);
