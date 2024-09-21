import { fromEvent, Observable } from 'rxjs';
import '../../assets/css/style.css';
import { swipe$ } from './swipe';
import { terminalLog } from '../../utils/log-in-terminal';

const down$ = fromEvent<MouseEvent>(document, 'mousedown');
const up$ = fromEvent<MouseEvent>(document, 'mouseup');

swipe$(down$, up$).subscribe(swipeDiff => {
    terminalLog(swipeDiff);
});
