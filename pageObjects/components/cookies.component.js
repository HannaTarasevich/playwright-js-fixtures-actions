export default class CookiesComponent {
  constructor(page) {
    this.page = page;
    this.cookieBannerAcceptButton = page.locator('[data-jetbrains-cookies-banner-action="ACCEPT_ALL"]');
  }

  async acceptCookies() {
    await this.cookieBannerAcceptButton.click();
  }
}
