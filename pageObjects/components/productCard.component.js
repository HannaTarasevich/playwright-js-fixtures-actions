export default class productCardComponent {
  constructor(page, product) {
    this.page = page;
    this.item = page.locator(`div:not([class*=hidden]) > .wt-container [data-test=product-card-${product}]`);
    this.title = this.item.locator('[data-test="product-name"]');
    this.description = this.item.locator('[data-test="product-description"]');
    this.checkbox = this.item.locator('[data-test="checkbox-input"]');
    this.markedCheckbox = this.item.locator('[data-test="checkmark"]');
    this.checkboxDescription = this.item.locator('span[class*=content]');
    this.price = this.item.locator('[data-test="product-price"]');
    this.priceTitle = this.item.locator('[data-test*="product-price-title"]');
    this.buyButton = this.item.locator('[data-test="product-card-footer-buy-button"]');
    this.link = this.item.locator('[data-test="product-card-footer-link"]');
    this.stickyTag = this.item.locator('[data-test="sticky-tag"]');
    this.logo = this.item.locator('[data-test="product-list-logo"]');
  }

  async clickCheckbox() {
    await this.checkbox.click();
  }

  async clickBuyButton() {
    await this.buyButton.click();
  }
}
