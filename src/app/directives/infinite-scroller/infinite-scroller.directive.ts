import {
  Directive,
  ElementRef,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

@Directive({
  standalone: true,
  selector: '[infiniteScroller]',
})
export class InfiniteScrollerDirective {
  @Input() disabled = false;
  @Input() percentageForNext = 10;
  @Output() nextBatch: EventEmitter<any> = new EventEmitter<any>();

  constructor(private el: ElementRef) {
    this.initScrollObserver();
  }

  initScrollObserver(): void {
    document.addEventListener('scrollend', ({ target }) => {
      if (this.disabled) return;
      this.checkIfReachTheEnd(target);
    });
  }

  checkIfReachTheEnd({ lastChild }: any): void {
    const percentage = 1 + this.percentageForNext / 100;
    const position = lastChild.scrollTop + lastChild.clientHeight;
    if (position * percentage >= lastChild.offsetHeight) {
      this.nextBatch.emit(true);
    }
  }
}
