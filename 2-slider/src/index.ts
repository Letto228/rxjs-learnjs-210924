import { fromEvent, map, withLatestFrom } from 'rxjs';
import '../../assets/css/style.css';
import { terminalLog } from '../../utils/log-in-terminal';
import { createSlider$ } from './slider';

const buttonElement = document.getElementById('send-result') as HTMLElement;

const buttonClick$ = fromEvent(buttonElement, 'click');
// buttonElement.addEventListener('click', )

buttonClick$.pipe(
    withLatestFrom(
        createSlider$('quality'),
        createSlider$('rating'),
        createSlider$('actual'),
    ),
    map(([_clickEvent, quality, rating, actual]) => (quality + rating + actual) / 3),
).subscribe(terminalLog);
