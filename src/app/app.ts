import { Component, signal, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  protected readonly title = signal('angular-app');
  protected currentDateTime = signal('');

  ngOnInit(): void {
    this.updateDateTime();
  }

  private updateDateTime(): void {
    const now = new Date();
    this.currentDateTime.set(now.toLocaleString());
  }
}
