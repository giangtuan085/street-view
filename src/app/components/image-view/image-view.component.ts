import { Component, ElementRef, ViewChild } from '@angular/core';
import { Scenes } from '../../mock-data/constants';
import { Scene } from '../../models/scene';
import { NavigationButtonComponent } from './navigation-button/navigation-button.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-image-view',
  standalone: true,
  imports: [NavigationButtonComponent, CommonModule],
  templateUrl: './image-view.component.html',
  styleUrl: './image-view.component.scss'
})
export class ImageViewComponent {
  scenes: Scene[] = Scenes;
  currentScene!: Scene;
  @ViewChild('imageContainer') imageContainer?: ElementRef;

  constructor() {
    this.currentScene = this.scenes[0];
  }

  public onNavigate(destination: number) {
    this.currentScene = this.scenes.find(x => x.id === destination)! // assertion based on mock data;
  }

  public scrollContainer(scrollValue: number) {
    this.imageContainer?.nativeElement.scrollTo({ left: (this.imageContainer.nativeElement.scrollLeft + scrollValue), behavior: 'smooth' });
  }

}
