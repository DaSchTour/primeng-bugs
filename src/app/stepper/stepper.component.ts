import {Component, inject, Injector, signal} from '@angular/core';
import {Step, StepList, StepPanel, StepPanels, Stepper} from 'primeng/stepper';
import {PrimeTemplate} from 'primeng/api';
import {NgComponentOutlet} from '@angular/common';

@Component({
  template: `Dummy component for testing`
})
class DummyComponent {
}

@Component({
  selector: 'app-stepper',
  imports: [
    Stepper,
    StepList,
    Step,
    StepPanels,
    StepPanel,
    PrimeTemplate,
    NgComponentOutlet
  ],
  templateUrl: './stepper.component.html',
  styleUrl: './stepper.component.scss'
})
export class StepperComponent {
  public readonly injector = inject(Injector);
  public readonly activeStep = signal(1)
  public readonly stepList = [
    { label: 'Personal',component: DummyComponent },
    { label: 'Seat',component: DummyComponent },
    { label: 'Payment',component: DummyComponent },
    { label: 'Confirmation',component: DummyComponent }
  ]
}
