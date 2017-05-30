import {EventEmitter, Injectable, OnInit} from '@angular/core';

@Injectable()
export class ChangeUxService implements OnInit {

  bgColorEvent = new EventEmitter<string>(); // create event for background color changed

  constructor() { }

  ngOnInit(): void {
  }

}
