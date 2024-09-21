import { catchError, debounceTime, distinctUntilChanged, EMPTY, filter, map, Observable, of, OperatorFunction, pipe, retry, switchMap } from "rxjs";
import { ajax, AjaxConfig } from "rxjs/ajax";

export function liveSearch<T>(
    urlCreater: (searchParam: string) => string,
    errorValue: T,
    requestConfig: Omit<AjaxConfig, 'url'> = {crossDomain: true},
): OperatorFunction<string, T> {
    return pipe(
        debounceTime(300),
        filter(searchParam => searchParam.length >= 3),
        distinctUntilChanged(),
        map((searchParam: string): AjaxConfig => ({
            ...requestConfig,
            url: urlCreater(searchParam),
        })),
        switchMap(ajaxConfig => ajax<T>(ajaxConfig).pipe(
            map(({response}) => response),
            retry({
                count: 3,
                delay: 1000,
            }),
            catchError(error => {
                return EMPTY;
                // return of(errorValue);
            }),
        )),
    )
}