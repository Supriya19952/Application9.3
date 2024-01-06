import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'marvellousChk'
})
export class MarvellousChkPipe implements PipeTransform {

  transform(Num: number): string {
    if (Num <= 1) {
      return 'Neither prime nor perfect';
    }

    if (this.isPrime(Num)) {
      return 'Prime';
    }

    if (this.isPerfect(Num)) {
      return 'Perfect';
    }

    return 'Neither prime nor perfect';
  }

  private isPrime(num: number): boolean {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return num > 1;
  }

  private isPerfect(num: number): boolean {
    let sum = 1;
    for (let i = 2; i * i <= num; i++) {
      if (num % i === 0) {
        sum += i;
        if (i * i !== num) {
          sum += num / i;
        }
      }
    }
    return sum === num;
  }
}