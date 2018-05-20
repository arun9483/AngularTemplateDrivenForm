import { Validator, AbstractControl, NG_VALIDATORS } from "@angular/forms";
import { Directive, Input } from "@angular/core";

@Directive({
  selector: "[customMinLengthValidator]",
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: minLengthValidatorDirective,
      multi: true
    }
  ]
})
export class minLengthValidatorDirective implements Validator {
  @Input() customMinLengthValidator: number;

  validate(control: AbstractControl): { [key: string]: any } | null {
    const minlength = { minlength: false };
    if (control.value) {
      const flag = control.value.length >= this.customMinLengthValidator;
      return flag ? null : { minlength: false };
    } else {
      minlength;
    }
  }
}
