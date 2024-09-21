import { Observable } from "rxjs";

const animationFn = (percentage: number) => {
    return Math.sin(-13 * (percentage + 1) * Math.PI * 2) * Math.pow(2, -10 * percentage) + 1;
}

export function animationDownElement$(
    element: HTMLElement,
    animationTime: number,
): Observable<number> {
    
}