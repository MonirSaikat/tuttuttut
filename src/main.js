import '../style/main.scss';
import $ from 'jquery';
import AbDropdown from './AbDropdown.js';

class MyClass {
  constructor() {
    this.abDropdown = new AbDropdown();
  }

  initListener() {
    const self = this;

    $('.ab-dropdown-trigger').on('click', function () {
      const width = $(this).outerWidth();
      const top = $(this).offset().top;
      const left = $(this).offset().left;

      self.abDropdown.top(top)
      self.abDropdown.left(width + left);
      self.abDropdown.toggle();
    });
  }

  init() {
    this.initListener();
  }
}

const b = (new MyClass());
b.init()
window.b = b;