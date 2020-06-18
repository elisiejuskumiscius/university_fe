import { Component, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

  @Input() left: TemplateRef<any>;
  @Input() right: TemplateRef<any>;

  constructor() { }

  ngOnInit(): void {
  }
}
