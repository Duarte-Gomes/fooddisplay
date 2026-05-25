import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  selector: 'app-portuguese-component',
  imports: [RouterModule],
  templateUrl: './portuguese-component.html',
  styleUrl: './portuguese-component.scss'
})
export class PortugueseComponent implements OnInit {
  private httpClient = inject(HttpClient)
  constructor(private clipboard: Clipboard) {}

  copyTitle(text: string) {
    this.clipboard.copy(text);
  }
  copyDesc(text: string) {
    navigator.clipboard.writeText(text);
  }

  pratos: any[] = [];
  day = 0;
  ngOnInit() {

  const time = new Date();
  this.day = time.getDate();

    this.httpClient.get<any>('/data_portuguese.json')
      .subscribe(data => {
        this.pratos = data.sort((a: { portugueseName: string; }, b: { portugueseName: any; }) =>
          a.portugueseName.localeCompare(b.portugueseName)   // ordenação alfabética
        );
      });
  }
}
