'use strict';

const wall = document.querySelector('.wall');

wall.style.position = 'relative';

const spider = document.querySelector('.spider');

if (spider.complete) {
  centerSpider();
} else {
  spider.onload = () => {
    centerSpider();
  };
}

function centerSpider() {
  const left = (wall.offsetWidth - spider.offsetWidth) / 2;
  const topOffset = (wall.offsetHeight - spider.offsetHeight) / 2;

  spider.style.position = 'absolute';
  spider.style.top = `${topOffset}px`;
  spider.style.left = `${left}px`;
}
