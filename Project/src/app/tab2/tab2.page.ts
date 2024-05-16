import { Component } from '@angular/core';
import { IonInput, IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonList, IonLabel, IonImg,  IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle} from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [IonInput, IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonList, IonLabel, IonImg,  IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, ExploreContainerComponent],
})
export class Tab2Page {

  constructor() {}

}
