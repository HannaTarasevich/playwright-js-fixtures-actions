export default class headerComponent {
  constructor(page) {
    this.page = page;
    this.logo = page.getByTestId('site-logo');
    this.menuTextOptions = page.getByTestId('main-menu-item-action');
    this.searchButton = page.getByTestId('site-header-search-action');
    this.profileButton = page.getByTestId('site-header-profile-action');
    this.cartButton = page.getByTestId('site-header-cart-action');
    this.languageButton = page.getByTestId('site-header').getByTestId('language-picker');
  }
}
