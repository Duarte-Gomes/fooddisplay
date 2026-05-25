import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit{

  private httpClient = inject(HttpClient)

  day = 0;

  pratos: any[] = [];

  ngOnInit() {

    const time = new Date();
    this.day = time.getDate();

    this.httpClient.get<any>('/data.json').subscribe(res => {
      this.pratos = res;
    })
  }
}
