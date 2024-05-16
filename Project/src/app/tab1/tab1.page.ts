import { Component, OnInit } from '@angular/core';
import { IonInput, IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonList, IonLabel, IonImg,  IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle} from '@ionic/angular/standalone';
import { BookService } from '../Services/book.service';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonInput, IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonList, IonLabel, IonImg,  IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, ExploreContainerComponent],
})
export class Tab1Page implements OnInit{
  book:any=[]
  constructor(private bookService:BookService) {}

  ngOnInit(): void{

    this.bookService.GetBookData().subscribe(

      (data)=>{
        this.book = data.Search
      }
    );
  }
}


