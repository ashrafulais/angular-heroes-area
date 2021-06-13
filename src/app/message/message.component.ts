import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  constructor(public messageService: MessageService) {}

  ngOnInit() {}
}
