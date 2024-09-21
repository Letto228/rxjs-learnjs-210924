// import { Observable } from 'rxjs';
// import '../../assets/css/style.css';
// import { terminalLog } from '../../utils/log-in-terminal';

// const ws = new WebSocket('ws://localhost:8081');

// ws.addEventListener('open', () => {
//     ws.send('on');
// });

// const wsMessage$ = new Observable<MessageEvent['data']>(subscriber => {
//     console.log('START');

//     function listenerMessage({data}: MessageEvent) {
//         console.log('NEW DATA', data);
//         subscriber.next(data);
//     };

//     function listenerClose() {
//         console.log('COMPLETE');
//         subscriber.complete();
//     };

//     function listenerError(error: Event) {
//         console.log('ERROR', error);
//         subscriber.error(error);
//     };

//     ws.addEventListener('message', listenerMessage);
//     ws.addEventListener('close', listenerClose);
//     ws.addEventListener('error', listenerError);

//     return () => {
//         console.log('DESTROY');
//         ws.removeEventListener('message', listenerMessage);
//         ws.removeEventListener('close', listenerClose);
//         ws.removeEventListener('error', listenerError);
//     }
// });

// wsMessage$.subscribe(value => {
//     terminalLog(`sub 1: ${value}`);
// });


// setTimeout(() => {
//     wsMessage$.subscribe(value => {
//         terminalLog(`sub 2: ${value}`);
//     });
// }, 6000);
