import { fromEvent, map, Observable, switchMap, takeUntil, tap } from "rxjs";

interface ElementPosition {
    top: number;
    left: number;
}

export function dragElement$(element: HTMLElement): Observable<ElementPosition> {
    const elementMouseDown$ = fromEvent<MouseEvent>(element, 'mousedown');
    const mouseMove$ = fromEvent<MouseEvent>(document, 'mousemove');
    const mouseUp$ = fromEvent<MouseEvent>(document, 'mouseup');

    return elementMouseDown$.pipe(
        tap(event => {
            event.preventDefault();
        }),
        switchMap(({offsetX, offsetY}) => mouseMove$.pipe(
            tap(event => {
                event.preventDefault();
            }),
            map(({clientX, clientY}): ElementPosition => ({
                left: clientX - offsetX,
                top: clientY - offsetY,
            })),
            takeUntil(mouseUp$),
        )),
    );
}