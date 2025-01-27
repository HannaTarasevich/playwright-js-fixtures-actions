import footerComponent from '../components/footer.component';
import headerComponent from '../components/header.component';
import subHeaderComponent from '../components/subHeader.component';
import productCardComponent from '../components/productCard.component';

export default class BuyPage {
  constructor(page, product) {
    this.page = page;
    this.mainHeader = page.locator('#buy-cards h1');
    this.targetBuyerSwitcherOptions = page.locator(
      'section > [data-test*="adaptive-switcher"] > [data-test*="adaptive-switcher"] button'
    );
    this.periodSwitcherOptions = page.locator(
      'section.wt-section  div:not([class*=hidden]) > .wt-container [data-test="adaptive-switcher__switcher"] > [data-test="switcher"] button'
    );
    this.note = page.locator('.wt-container > div:nth-child(3)').first();
    this.footer = new footerComponent(page);
    this.header = new headerComponent(page);
    this.subHeader = new subHeaderComponent(page);
    this.productCard = new productCardComponent(page, product);
  }

  async goto(product) {
    await this.page.goto(product + '/buy');
  }

  async selectTargetBuyerSwitcher(option) {
    await this.targetBuyerSwitcherOptions.getByText(option).click();
  }

  async selectPeriod(option) {
    await this.periodSwitcherOptions.getByText(option).click();
  }
}
