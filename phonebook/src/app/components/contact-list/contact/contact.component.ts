import {Component, Input, OnInit} from '@angular/core';
import {Contact} from "../../../models/contact.model";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  @Input() public contact: Contact;

  constructor() {
  }

  ngOnInit() {
  }

}
