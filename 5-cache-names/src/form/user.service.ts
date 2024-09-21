import { AsyncSubject, map, Observable, share } from "rxjs";
import { ajax } from "rxjs/ajax";
import { User } from "./user.interface";

class UserService {
    userNameSequence$: Observable<string[]> = ajax<User[]>({
        url: 'https://learn.javascript.ru/courses/groups/api/participants?key=gu6ckf',
        crossDomain: true,
        method: 'GET',
    }).pipe(
        map(({response}) => response.map(({profileName}) => profileName)),
        share({
            connector: () => new AsyncSubject(),
            resetOnComplete: false,
        }),
    )
}

export const userService = new UserService();