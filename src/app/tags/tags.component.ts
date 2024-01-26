import { Component, Input } from '@angular/core';
import { Tag } from '../shared/models/Tag';
import { FoodService } from '../services/food/food.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrl: './tags.component.css',
})
export class TagsComponent {
  @Input()
  foodPageTags?: string[];
  tags?: Tag[] = [];

  constructor(private foodService: FoodService) {}

  ngOnInit() {
    if (!this.foodPageTags) {
      this.tags = this.foodService.getAllTags();
    }
  }
}
