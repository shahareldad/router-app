import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { EngineService } from '../engine.service';

@Component({
  selector: 'app-crisis-list',
  imports: [],
  templateUrl: './crisis-list.component.html',
  styleUrl: './crisis-list.component.css'
})
export class CrisisListComponent implements OnInit {
  product: any = {};
  constructor(private store: EngineService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = params.get('id');

      if (id) {
        this.store.getProduct(parseInt(id, 10)).subscribe(product => {
          this.product = product;
        });
      }

    });
  }
}
