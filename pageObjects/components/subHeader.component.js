export default class subHeaderComponent {
  constructor(page) {
    this.logo = page.getByTestId('menu-second-title-box-title');
    this.tag = page.locator('[id*=js-menu-second]').getByTestId('tag');
    this.menuTextOptions = page.locator('.menu-second__link');
    this.buttons = page.locator('[id*=js-menu-second]').getByTestId('button');
    this.menuOptionsMobile = page.getByTestId('list-item');
  }
}
