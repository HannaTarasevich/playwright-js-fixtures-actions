export default class productCardComponent {
  constructor(page, product) {
    this.item = page.locator('div:not([class*=hidden]) > .wt-container').getByTestId(`product-card-${product}`);
    this.title = this.item.getByTestId('product-name');
    this.description = this.item.getByTestId('product-description');
    this.checkbox = this.item.getByTestId('checkbox-input');
    this.markedCheckbox = this.item.getByTestId('checkmark');
    this.checkboxDescription = this.item.locator('span[class*=content]');
    this.price = this.item.getByTestId('product-price');
    this.priceTitle = this.item.getByTestId('product-price-title');
    this.buyButton = this.item.getByTestId('product-card-footer-buy-button');
    this.link = this.item.getByTestId('product-card-footer-link');
    this.stickyTag = this.item.getByTestId('sticky-tag');
    this.logo = this.item.getByTestId('product-list-logo');
  }

  async clickCheckbox() {
    await this.checkbox.click();
  }

  async clickBuyButton() {
    await this.buyButton.click();
  }
}
