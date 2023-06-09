import {Component, OnInit} from '@angular/core';
import {ItemService} from "../service/item.service";
import {Item} from "../../model/Item";

@Component({
  selector: 'app-item-gallery',
  templateUrl: './item-gallery.component.html',
  styleUrls: ['./item-gallery.component.css']
})
export class ItemGalleryComponent implements OnInit{
  items: Item[] =[];
  constructor(private service: ItemService) {
  }
  ngOnInit(): void {
    this.getItems();
  }

  getItems(): void {
    this.service.getItems().subscribe(items => this.items = items);
  }

}
