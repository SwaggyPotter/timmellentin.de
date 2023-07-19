import { Component } from '@angular/core';

@Component({
  selector: 'app-slider-show',
  templateUrl: './slider-show.component.html',
  styleUrls: ['./slider-show.component.scss']
})
export class SliderShowComponent {
  images = ['black-agend-cat.jpg', 'cat-astronaut.jpg', 'cat-bussines.jpg', 'garage-cat.jpg', 'glass-cat.jpg', 'villa-cat.jpg']
  startSlogans = ['Cats overall', 'brewing catnip', 'reloading catness', 'Miauuuuuuuuu!', 'Cats overall', 'brewing catnip', 'reloading catness', 'Miauuuuuuuuu!']
  showImage = true;
  currentImage = 0

  ngOnInit() {
    this.updateImage();
  }

  updateImage() {
    setInterval(() => {
      if (this.images.length - 1 == this.currentImage) {
        this.currentImage = 0;
        this.showImage = false
        setTimeout(() => {
          this.showImage = true;
        }, 10)
      }
      else if (this.currentImage < this.images.length) {
        this.currentImage++
        this.showImage = false
        setTimeout(() => {
          this.showImage = true;
        }, 10)
      }
    }, 5000)
  }
}
