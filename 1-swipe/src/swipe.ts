import { filter, map, Observable, tap, zip } from "rxjs";

function getXPosition(event: MouseEvent) {
    return event.clientX;
}

export function swipe$(
    down$: Observable<MouseEvent>,
    up$: Observable<MouseEvent>,
): Observable<number> {
    return zip(
        down$.pipe(map(getXPosition)),
        up$.pipe(map(getXPosition)),
    ).pipe(
        map(([downPosition, upPosition]) => downPosition - upPosition),
        tap({
            next: value => {
                console.log(value);
            },
        }),
        filter(diff => Math.abs(diff) > 30),
    );
};