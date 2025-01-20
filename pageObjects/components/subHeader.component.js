export default class subHeaderComponent {
  constructor(page) {
    this.page = page;
    this.logo = page.locator('[data-test="menu-second-title-box-title"]');
    this.tag = page.locator('[id*=js-menu-second] [data-test="tag"]');
    this.menuTextOptions = page.locator('.menu-second__link');
    this.buttons = page.locator('[id*=js-menu-second] [data-test="button"]');
    this.menuOptionsMobile = page.locator('[data-test="list-item"]');
  }
}
