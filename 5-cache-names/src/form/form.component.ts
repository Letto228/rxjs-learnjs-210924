import { combineLatest, fromEvent, map, startWith } from "rxjs";
import { userService } from "./user.service";
import "./styles.css";

export class FormComponent {
    private readonly inputElement: HTMLInputElement;
    private readonly buttonElement: HTMLButtonElement;

    constructor(formContainer: HTMLElement) {
        const inputElement = formContainer.querySelector('input');
        const buttonElement = formContainer.querySelector('button');

        if (!inputElement) {
            throw new Error('Форма не имеет <input> элемента');
        }

        if (!buttonElement) {
            throw new Error('Форма не имеет <button> элемента');
        }

        this.inputElement = inputElement;
        this.buttonElement = buttonElement;

        this.listenInputChange();
    }

    private listenInputChange() {
        const inputValue$ = fromEvent<InputEvent>(this.inputElement, 'input')
            .pipe(
                // map(({target}) => (target as HTMLInputElement).value),
                map(() => this.inputElement.value),
                startWith(this.inputElement.value),
            );

        combineLatest([
            inputValue$,
            userService.userNameSequence$,
        ]).subscribe(([inputValue, names]) => {
            this.updateFormValidStatus(inputValue, names);
        })
    }

    private updateFormValidStatus(inputValue: string, names: string[]) {
        const isValid = inputValue && names.includes(inputValue);

        this.buttonElement.disabled = !isValid;

        if (isValid) {
            this.inputElement.classList.remove('error');

            return;
        }

        this.inputElement.classList.add('error');
    }
}