import {
  Directive,
  EventEmitter,
  Input,
  OnDestroy,
  Output,
} from '@angular/core';

@Directive({
  standalone: true,
  selector: '[infiniteScroller]',
})
export class InfiniteScrollerDirective implements OnDestroy {
  @Input() disablePagination = false;
  @Input() percentageForNext = 10;
  @Output() nextBatch: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
    this.initScrollObserver();
  }

  ngOnDestroy(): void {
    //@ts-ignore
    document.removeAllListeners();
  }

  initScrollObserver(): void {
    document.addEventListener('scrollend', ({ target }) => {
      if (this.disablePagination) return;
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
