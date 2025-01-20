export default class footerComponent {
  constructor(page) {
    this.page = page;
    this.footerArea = page.locator('.wt-footer');
    this.countryButton = this.footerArea.locator('[data-test="footer-country-button"]');
    this.countrySearchInput = page.locator('[data-test="search-input"]');
    this.countryOption = page.locator('[data-test="dropdown-content"]').first();
    this.countryChooseButton = page.locator('[data-test="footer-popup-confirm-country"]');
  }

  async selectCountry(country) {
    await this.countryButton.click();
    await this.countrySearchInput.fill(country);
    await this.countryOption.click();
    await this.countryChooseButton.click();
  }
}
