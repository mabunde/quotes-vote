import { Directive ,ElementRef,HostListener} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private elem:ElementRef){}
  @HostListener('click') onClicks() {
    this.textDeco('green');
  }
  @HostListener('dbclick') onDoubleClicks() {
    this.textDeco('none');
  }
  private textDeco(action: string) {
    this.elem.nativeElement.style.textDecoration=action;
  }

 

}
