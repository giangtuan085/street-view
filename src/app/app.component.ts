import { Component } from '@angular/core';
import { ImageViewComponent } from './components/image-view/image-view.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ImageViewComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'street-view';
}
