import { animationFrameScheduler, asapScheduler, interval, map, Observable, takeWhile, tap } from "rxjs";

const animationFn = (percentage: number) => {
    return Math.sin(-13 * (percentage + 1) * Math.PI * 2) * Math.pow(2, -10 * percentage) + 1;
}

function time$() {
    const startTime = animationFrameScheduler.now();

    return interval(0, animationFrameScheduler).pipe(
        map(() => animationFrameScheduler.now() - startTime),
    );
}

function duration$(allMs: number): Observable<number> {
    return time$().pipe(
        map(time => time / allMs),
        takeWhile(percentage => percentage <= 1),
    )
}

const diffPx = 400;

export function animationDownElement$(
    element: HTMLElement,
    animationTime: number,
): Observable<number> {
    return duration$(animationTime).pipe(
        map(animationFn),
        map(percentage => percentage * diffPx),
        tap(translate => {
            element.style.transform = `translateY(${translate}px)`;
        })
    )
}