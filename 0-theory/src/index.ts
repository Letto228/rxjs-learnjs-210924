import { asapScheduler, asyncScheduler, BehaviorSubject, combineLatest, from, interval, Observable, observeOn, of, publish, refCount, ReplaySubject, scheduled, share, Subject, subscribeOn, tap } from 'rxjs';
import '../../assets/css/style.css';
import { terminalLog } from '../../utils/log-in-terminal';

// from(Array.from({length: 10}, (_, i) => i))
//     .subscribe(console.log);

// interval(1000).subscribe(console.log);

// from(Array.from({length: 10}, (_, i) => i), asyncScheduler)
// from(Array.from({length: 10}, (_, i) => i), asapScheduler)
//     .subscribe(console.log);

// scheduled(Array.from({length: 10}, (_, i) => i), asapScheduler)
//     .subscribe(console.log);

// from(Array.from({length: 10}, (_, i) => i))
//     .pipe(
//         tap(value => {
//             console.log('asap Scheduler', value);
//         }),
//         observeOn(asyncScheduler),
//         tap(value => {
//             console.log('before async Scheduler', value);
//         }),
//         subscribeOn(asapScheduler),
//     )
//     .subscribe(console.log);

// from([1,2,3]).subscribe(value => {
//     console.log('Sync', value)
// })

// ------------------------------------

const sequence1$ = scheduled([1, 2], asapScheduler);
const sequence2$ = of(10);

const sequence$ = combineLatest([
    sequence1$,
    sequence2$,
])

sequence$.subscribe(value => {
    console.log(value);
})
