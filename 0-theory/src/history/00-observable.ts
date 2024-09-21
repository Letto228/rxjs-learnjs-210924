// import { Observable, Subscribable, Subscriber, Subscription } from 'rxjs';
// import '../../assets/css/style.css';
// import { terminalLog } from '../../utils/log-in-terminal';

// // const sequence = new Promise(resolve => {
// //     let count = 0;

// //     setInterval(() => {
// //         count += 1;

// //         console.log('setInterval', count);

// //         resolve(count);
// //     }, 1000)
// // });

// // sequence.then(terminalLog);

// // setTimeout(() => {
// //     sequence.then(terminalLog);
// // }, 3000);

// // const sequence = (function* iteratorFn() {
// //     let count = 0;

// //     while (true) {
// //         count += 1;

// //         console.log('while', count);

// //         yield count;
// //     }
// // })()

// // sequence.next();
// // sequence.next();
// // sequence.next();

// // ----------------------------------------

// const maxCount = 5;

// const sequence = new Observable<number>((subscriber: Subscriber<number>) => {
//     let count = 0;

//     const intervalId = setInterval(() => {
//         count += 1;

//         console.log('INCREMENT', count);

//         subscriber.next(count);

//         if (count === maxCount) {
//             // subscriber.error(new Error('Max count'));
//             // clearInterval(intervalId);
            
//             subscriber.complete();
//         }
//     }, 1000);

//     return function destroyFn() {
//         console.log('DESTROY');
//         clearInterval(intervalId);
//     };
// });

// const allSubscription = new Subscription();

// // const subcription: Subscription = sequence.subscribe({
// allSubscription.add(
//     sequence.subscribe({
//         next: value => {
//             terminalLog(value);
//         },
//         error: err => {
//             terminalLog(err);
//         },
//         complete: () => {
//             terminalLog('Completed');
//         },
//     }),
// );

// setTimeout(() => {
//     allSubscription.unsubscribe();
// }, 3000);
