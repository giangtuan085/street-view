import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Hitzone, Scene } from '../../../models/scene';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navigation-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navigation-button.component.html',
  styleUrl: './navigation-button.component.scss'
})
export class NavigationButtonComponent {
  @Input() currentScene!: Scene;
  @Input() currentHitzone!: Hitzone;
  @Output() onNavigate = new EventEmitter<number>();

  public onClick() {
    this.onNavigate.emit(this.currentHitzone.goto);
  }
}
