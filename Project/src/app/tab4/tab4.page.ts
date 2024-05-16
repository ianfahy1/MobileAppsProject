import { Component } from '@angular/core';
import { IonInput, IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonList, IonLabel, IonImg,  IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle} from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss'],
  standalone: true,
  imports: [IonInput, IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonList, IonLabel, IonImg,  IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, ExploreContainerComponent],
})
export class Tab4Page {
  constructor() {}
}
