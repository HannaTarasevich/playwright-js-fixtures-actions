/**
 * This file contains tests for further information on the buy page.
 * The tests are run according to the `products` array from the `data/buyProducts` module.
 */

import { expect } from '@playwright/test';
import test from '../../../pageObjects/pageFixture';
import {
  headerTitle,
  periodSwitcher,
  products,
  userSwitcher,
  productTag,
  cardElements,
} from '../../../data/buyProducts';
import { headerMenu } from '../../../data/menus';
import { isMobile } from '../../../utils/helper';

products.forEach((product) => {
  test.describe(`Buy product - page structure`, async () => {
    test.beforeEach(async ({ buyPage }) => {
      await buyPage.goto(product.urlTitle);
    });

    test(`Buy ${product.fullTitle} - header`, async ({ buyPage }) => {
      test.skip(helper.isMobile(), 'The test is not applicable for mobile devices');
      await expect.soft(buyPage.header.logo).toBeEnabled();
      await expect.soft(buyPage.header.searchButton).toBeEnabled();
      await expect.soft(buyPage.header.profileButton).toBeEnabled();
      await expect.soft(buyPage.header.cartButton).toBeEnabled();
      await expect.soft(buyPage.header.languageButton).toBeEnabled();

      const mainHeaderMenuOptions = await buyPage.header.menuTextOptions.all();
      await expect.soft(mainHeaderMenuOptions.length).toEqual(6);

      for (let i = 0; i < headerMenu.length; i++) {
        await expect.soft(mainHeaderMenuOptions[i]).toBeEnabled();
        await expect.soft(mainHeaderMenuOptions[i]).toHaveText(headerMenu[i]);
      }
    });

    test(`Buy ${product.fullTitle} - subheader`, async ({ buyPage }) => {
      test.skip(isMobile(), 'The test is not applicable for mobile devices');
      await expect.soft(buyPage.subHeader.logo).toBeEnabled();
      await expect.soft(buyPage.subHeader.logo).toHaveText(product.shortTitle);

      if (product.tagIde) {
        await expect.soft(buyPage.subHeader.tag).toBeEnabled();
        await expect.soft(buyPage.subHeader.tag).toHaveText(productTag);
      } else {
        await expect.soft(buyPage.subHeader.tag).toHaveCount(0);
      }

      const subHeaderMenuOptions = await buyPage.subHeader.menuTextOptions.all();
      await expect.soft(subHeaderMenuOptions.length).toEqual(product.subHeaderMenu.length);

      for (let i = 0; i < product.subHeaderMenu.length; i++) {
        await expect.soft(subHeaderMenuOptions[i]).toBeEnabled();
        await expect.soft(subHeaderMenuOptions[i]).toHaveText(product.subHeaderMenu[i]);
      }

      await expect.soft(buyPage.subHeader.buttons).toHaveCount(2);
    });

    test(`Buy ${product.fullTitle} - header (mobile)`, async ({ buyPage }) => {
      test.skip(!isMobile(), 'The test is applicable for mobile devices');
      await expect.soft(buyPage.header.logo).toBeEnabled();
      await expect.soft(buyPage.header.searchButton).toBeEnabled();
      await expect.soft(buyPage.header.profileButton).not.toBeVisible();
      await expect.soft(buyPage.header.cartButton).not.toBeVisible();
      await expect.soft(buyPage.header.languageButton).not.toBeVisible();
    });

    test(`Buy ${product.fullTitle} - subheader (mobile)`, async ({ buyPage }) => {
      test.skip(!isMobile(), 'The test is applicable for mobile devices');
      await expect.soft(buyPage.subHeader.logo).not.toBeVisible();
      await expect.soft(buyPage.subHeader.tag).not.toBeVisible();
      await expect.soft(buyPage.subHeader.menuOptionsMobile).toHaveCount(1);
      await expect.soft(buyPage.subHeader.menuOptionsMobile).toHaveText('Pricing');

      const buttons = await buyPage.subHeader.buttons.all();

      if (buttons) {
        for (let i = 0; i < buttons.length; i++) {
          await expect.soft(buttons[i]).not.toBeVisible();
        }
      }
    });

    test(`Buy ${product.fullTitle} - main title`, async ({ buyPage }) => {
      await expect.soft(buyPage.mainHeader).toBeVisible();
      await expect.soft(buyPage.mainHeader).toHaveText(headerTitle);
    });

    test(`Buy ${product.fullTitle} - target buyer switcher`, async ({ buyPage }) => {
      const targetBuyerSwitcherOptions = await buyPage.targetBuyerSwitcherOptions.all();
      await expect.soft(targetBuyerSwitcherOptions.length).toEqual(product.targetBuyersCount);

      for (let i = 0; i < targetBuyerSwitcherOptions.length; i++) {
        await expect.soft(targetBuyerSwitcherOptions[i]).toBeEnabled();
        await expect.soft(targetBuyerSwitcherOptions[i]).toHaveText(Object.values(userSwitcher)[i]);
      }
    });

    test(`Buy ${product.fullTitle} - period switcher`, async ({ buyPage }) => {
      const periodSwitcherOptions = await buyPage.periodSwitcherOptions.all();
      await expect.soft(periodSwitcherOptions.length).toEqual(Object.keys(periodSwitcher).length);

      for (let i = 0; i < periodSwitcherOptions.length; i++) {
        await expect.soft(periodSwitcherOptions[i]).toBeEnabled();
        await expect.soft(periodSwitcherOptions[i]).toHaveText(Object.values(periodSwitcher)[i]);
      }
    });

    test(`Buy ${product.fullTitle} - product card`, async ({ buyPage }) => {
      await expect.soft(buyPage.productCard.item).toHaveCount(1);
      await expect.soft(buyPage.productCard.title).toHaveText(product.cards[0].title);
      await expect.soft(buyPage.productCard.description).toHaveText(product.cards[0].description);
      await expect.soft(buyPage.productCard.logo).toHaveCount(product.cards[0].logosText.length);

      const logoElements = await buyPage.productCard.logo.all();
      for (const logo of logoElements) {
        await expect.soft(logo).toBeVisible();
      }

      await expect.soft(buyPage.productCard.logo).toHaveText(product.cards[0].logosText);
      await expect.soft(buyPage.productCard.checkbox).toBeVisible();
      await expect.soft(buyPage.productCard.checkboxDescription).toHaveText(cardElements.checkboxDescription);
      await expect.soft(buyPage.productCard.price).toBeVisible();
      await expect.soft(buyPage.productCard.priceTitle).toHaveText(cardElements.priceDescription.organization.year);
      await expect.soft(buyPage.productCard.buyButton).toBeEnabled();
      await expect.soft(buyPage.productCard.buyButton).toHaveText(cardElements.buyButton);
      await expect.soft(buyPage.productCard.link).toHaveText(cardElements.getQuoteLink);
      await expect.soft(buyPage.productCard.link).toHaveCount(product.numberOfLinks);
    });

    test.skip(`Buy ${product.fullTitle} - All Products Pack product card`, async ({ buyPage }) => {});

    test.skip(`Buy ${product.fullTitle} - note`, async ({ buyPage }) => {});

    test.skip(`Buy ${product.fullTitle} - further info`, async ({ buyPage }) => {});

    test.skip(`Buy ${product.fullTitle} - 90 days trial`, async ({ buyPage }) => {});

    test.skip(`Buy ${product.fullTitle} - footer`, async ({ buyPage }) => {});

    test.skip(`Buy ${product.fullTitle} - sticky main header`, async ({ buyPage }) => {});

    test.skip(`Buy ${product.fullTitle} - feedback option (survey)`, async ({ buyPage }) => {});

    test.skip(`Buy ${product.fullTitle} - hamburger menu is displayed for the width less then 1000`, async ({
      buyPage,
    }) => {});

    test.skip(`Buy ${product.fullTitle} - page reflects language changes`, async ({ buyPage }) => {});

    test.skip(`Buy ${product.fullTitle} - page reflects to the countries changes (additional banners are displayed)`, async ({
      buyPage,
    }) => {});
  });
});
