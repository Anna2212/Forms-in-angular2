import {Component, Input, HostBinding, ChangeDetectionStrategy} from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'debug-panel',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  @Input() data;
  @HostBinding('class.has-content')
  get content() { return this.hasContent; }
  hasContent = false;
  @HostBinding('class.is-visible') 
  get visible() { return this.isVisible; }
  isVisible = false;
  
  constructor() {
    this.isVisible = localStorage.getItem('debugIsVisible') === 'true';
  }
  
  ngOnInit() {
    this.hasContent = (this.data);
  }
  onSaveState(){
    localStorage.setItem('debugIsVisible', this.isVisible.toString());
  }
}