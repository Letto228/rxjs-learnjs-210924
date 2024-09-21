import { Observable } from "rxjs";

interface ElementPosition {
    top: number;
    left: number;
}

export function dragElement$(element: HTMLElement): Observable<ElementPosition> {
    
}