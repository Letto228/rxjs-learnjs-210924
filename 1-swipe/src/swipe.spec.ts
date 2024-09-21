import { filter, map, Observable, tap, zip } from "rxjs";
import { TestScheduler } from "rxjs/testing";
import { swipe$ } from "./swipe";

function createMouseEvent(clientXSub: number): MouseEvent {
    return new MouseEvent('mousemove', {clientX: clientXSub});
}

describe('Test swipe block', () => {
    let testScheduler: TestScheduler;

    beforeEach(() => {
        testScheduler = new TestScheduler((actual, expected) => {
            expect(actual).toEqual(expected);
        });
    });

    it('Test swipe', () => {
        testScheduler.run(({expectObservable, cold}) => {
            const mouseDown$ = cold(
                '-a----------b--------------|',
                {
                    a: createMouseEvent(2),
                    b: createMouseEvent(30),
                },
            );
            const mouseUp$ = cold(
                '------a------------------b-|',
                {
                    a: createMouseEvent(200),
                    b: createMouseEvent(20),
                },
            );

            const swipeStream$ = swipe$(
                mouseDown$,
                mouseUp$,
            );

            const expectedMarbles = '------a--------------------|';
            const expectedMarblesValueMap = {
                a: -198,
            }

            expectObservable(swipeStream$).toBe(expectedMarbles, expectedMarblesValueMap);
        });
    });
})