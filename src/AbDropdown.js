export default class AbDropdown {
  constructor(settings) {
    this.settings = settings;
    this.element = $('.ab-dropdown');
    this.initEventListeners();
  }

  elNoItemText() {
    return this.element.find('.no-items');
  }

  elAddButton() {
    return this.element.find('.ab-dropdown-button');
  }

  elDropdownItems() {
    return this.element.find('.dropdown-items');
  }

  addItem(text, color) {
    if (this.elDropdownItems().length > 0) {
      this.elNoItemText().remove();
    }

    this.elDropdownItems().append(
      `<div class="dropdown-item">
          <span>OK</span>
          <span class="color-box" style="background-color: ${color}"></span>
        </div>`
    );
  }

  show() {
    this.element.removeClass('none');
  }

  hide() {
    this.element.addClass('none');
  }

  toggle() {
    this.element.toggleClass('none');
  }

  top(val = null) {
    if (val) {
      this.element.css('top', `${val}px`);
    }
  }

  left(val = null) {
    if (val) {
      this.element.css('left', `${val}px`);
    }
  }

  bottom(val = null) {
    if (val) {
      this.element.css('bottom', `${val}px`);
    }
  }

  right(val = null) {
    if (val) {
      this.element.css('right', `${val}px`);
    }
  }

  initEventListeners() {
    const self = this;

    this.elAddButton().on('click', () => this.addItem('Test', '#f00'));
  }
}