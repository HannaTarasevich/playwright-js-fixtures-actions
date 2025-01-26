export default class footerComponent {
  constructor(page) {
    this.page = page;
    this.footerArea = page.locator('.wt-footer');
    this.countryButton = this.footerArea.getByTestId('footer-country-button');
    this.countrySearchInput = page.getByTestId('search-input');
    this.countryOption = page.getByTestId('dropdown-content').first();
    this.countryChooseButton = page.getByTestId('footer-popup-confirm-country');
  }

  async selectCountry(country) {
    await this.countryButton.click();
    await this.countrySearchInput.fill(country);
    await this.countryOption.click();
    await this.countryChooseButton.click();
  }
}
