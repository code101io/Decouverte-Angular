import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appMovieHighlight]'
})
export class MovieHighlightDirective {

  constructor(
    private readonly el: ElementRef<HTMLElement>
  ) { }

  @HostListener('mouseenter')
  onMouseEnter(): void {
    this.modify('red');
  }

  @HostListener('mouseleave')
  onMouseLeave(): void {
    this.modify(null);
  }

  private modify(textColor: string): void {
    this.el.nativeElement.style.color = textColor;
  }

}
