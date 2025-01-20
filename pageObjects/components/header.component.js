export default class headerComponent {
  constructor(page) {
    this.page = page;
    this.logo = page.locator('[data-test="site-logo"]');
    this.menuTextOptions = page.locator('[data-test="main-menu-item-action"]');
    this.searchButton = page.locator('[data-test="site-header-search-action"]');
    this.profileButton = page.locator('[data-test="site-header-profile-action"]');
    this.cartButton = page.locator('[data-test="site-header-cart-action"]');
    this.languageButton = page.locator('[data-test="site-header"] [data-test="language-picker"]');
  }
}
