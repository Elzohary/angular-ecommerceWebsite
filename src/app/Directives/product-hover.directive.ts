import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { Iproduct } from '../viewModel/iproduct';

@Directive({
  selector: '[appProductHover]'
})
export class ProductHoverDirective {

  constructor(private elemRef : ElementRef) { }

  @HostListener ('mouseover') onMouseOver()
  {

    this.elemRef.nativeElement.style.transform= `scale(1.03)`;
    this.elemRef.nativeElement.style.boxShadow="0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)";

  }

  @HostListener ('mouseout') onMouseOut()
  {
    this.elemRef.nativeElement.style.transform="scale(1)";
    this.elemRef.nativeElement.style.boxShadow="none";
  }
}
