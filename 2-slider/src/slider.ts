import 'bootstrap';
import 'bootstrap-slider';
import  './styles.css';
import { fromEvent, map, Observable, startWith, tap } from 'rxjs';

interface JQuerySliderEvent {
    value: {
        newValue: number;
    }
}

enum SliderClass {
    Good = 'good',
    Warn = 'warn',
    Bad = 'bad',
}

function colorizeSlider(element: HTMLElement, value: number) {
    element.classList.remove(...Object.values(SliderClass));

    if (value < 4) {
        element.classList.add(SliderClass.Bad);

        return;
    }

    if (value <= 7) {
        element.classList.add(SliderClass.Warn);

        return;
    }

    element.classList.add(SliderClass.Good);
}

export function createSlider$(sliderId: string): Observable<number> {
    const jquerySlider = $(`#${sliderId}`).slider();
    const sliderElement = jquerySlider.prev().get(0).querySelector('.slider-track') as HTMLElement;
    const initValue = Number(jquerySlider.val());

    return fromEvent<JQuerySliderEvent>(jquerySlider, 'change').pipe(
        map(({value}) => value.newValue),
        startWith(initValue),
        tap(value => {
            colorizeSlider(sliderElement, value);
        }),
    )
}