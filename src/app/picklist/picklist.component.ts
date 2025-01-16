import { Component } from '@angular/core';
import {PickList, PickListModule} from 'primeng/picklist';

@Component({
  selector: 'app-picklist',
  imports: [PickListModule],
  templateUrl: './picklist.component.html',
  styleUrl: './picklist.component.scss'
})
export class PicklistComponent {

}
