import {Component, EventEmitter, OnInit} from '@angular/core';
import {ChangeUxService} from '../../_services/change-ux.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  bgColor: string;

  constructor(private changeUxService: ChangeUxService) { }

  ngOnInit() {
    this.bgColor = '#3F51B5'; // indigo
  }

  changeBackgroundColor(color: string) {
    this.bgColor = color;
    this.changeUxService.bgColorEvent.emit(color);
  }

}
