import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'mdInline', standalone: true })
export class MdInlinePipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return value;
    return value
      .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
      .replace(/_(.+?)_/g, '<em>$1</em>');
  }
}
