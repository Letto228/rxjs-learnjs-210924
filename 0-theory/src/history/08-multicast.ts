// import { BehaviorSubject, interval, Observable, publish, refCount, ReplaySubject, share, Subject } from 'rxjs';
// import '../../assets/css/style.css';
// import { terminalLog } from '../../utils/log-in-terminal';

// const stream$ = interval(1000).pipe(
//     // publish(),
//     // refCount(),
//     share({
//         // connector: () => new Subject(),
//         // connector: () => new ReplaySubject(),
//         resetOnComplete: true,
//         resetOnError: true,
//         resetOnRefCountZero: false,
//     }),
// );

// const sub = stream$.subscribe(value => {
//     console.log('Sub 1 - ' + (value + 1));
// });

// setTimeout(() => {
//     sub.unsubscribe();
// }, 2000)

// setTimeout(() => {
//     stream$.subscribe(value => {
//         console.log('Sub 2 - ' + (value + 1));
//     });
// }, 5000)
