import { Component, OnInit } from '@angular/core';
import { EngineService } from '../engine.service';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-heroes-list',
  imports: [ RouterOutlet, RouterLink, RouterLinkActive, NgFor ],
  templateUrl: './heroes-list.component.html',
  styleUrl: './heroes-list.component.css'
})
export class HeroesListComponent implements OnInit {
  products: any[] = [];

  constructor(private store: EngineService) { }

  ngOnInit(): void {
    this.store.getAllProducts().subscribe(products => {
      this.products = products;
    });
  }
}
