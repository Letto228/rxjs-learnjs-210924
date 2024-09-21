import 'bootstrap';
import 'bootstrap-slider';
import  './styles.css';
import { Observable } from 'rxjs';

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

export function createSlider$(sliderId: string): Observable<number> {
    
}