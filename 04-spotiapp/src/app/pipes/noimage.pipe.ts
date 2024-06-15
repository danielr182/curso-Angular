import { Pipe, PipeTransform } from '@angular/core';
import { Image } from '../shared/interfaces/spoti-common';

@Pipe({
  name: 'noimage',
  standalone: true,
})
export class NoimagePipe implements PipeTransform {
  transform(images: Image[]): string {
    if (images && images.length > 0) {
      return images[0].url;
    } else {
      return 'assets/img/noimage.png';
    }
  }
}
