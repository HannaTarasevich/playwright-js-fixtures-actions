/**
 * This file contains tests for further information on the buy page.
 * The tests are run according to the `products` array from the `data/buyProducts` module.
 */

import { expect } from '@playwright/test';
import test from '../../../pageObjects/pageFixture';
import { periodSwitcher, products, userSwitcher, cardElements } from '../../../data/buyProducts';
import { isMobile } from '../../../utils/helper';

products.forEach((product) => {
  test.describe('Buy product - product cards', () => {
    test(`Check default view for ${product.fullTitle} product card`, async ({ buyPage }) => {
      const attribute = isMobile() ? 'data-test' : 'class';
      await expect(await buyPage.targetBuyerSwitcherOptions.first()).toHaveAttribute(attribute, /selected/);
      await expect(await buyPage.periodSwitcherOptions.first()).toHaveClass(/selected/);
      await expect(buyPage.productCard.markedCheckbox).not.toBeVisible();
    });

    test(`Check ${product.fullTitle} options for organization`, async ({ buyPage }) => {
      await buyPage.selectPeriod(periodSwitcher.monthly);
      await expect(await buyPage.productCard.priceTitle).toHaveText(cardElements.priceDescription.organization.month);
      await buyPage.selectPeriod(periodSwitcher.yearly);
      await expect(await buyPage.productCard.priceTitle).toHaveText(cardElements.priceDescription.organization.year);
    });

    test(`Check ${product.fullTitle} individual options`, async ({ buyPage }) => {
      await buyPage.selectTargetBuyerSwitcher(userSwitcher.individual);
      await expect(await buyPage.periodSwitcherOptions.first()).toHaveClass(/selected/);

      const pricesTitles = await buyPage.productCard.priceTitle.all();
      for (let i = 0; i < pricesTitles.length; i++) {
        await expect(pricesTitles[i]).toHaveText(cardElements.priceDescription.individual.year[i]);
      }

      await buyPage.selectPeriod(periodSwitcher.monthly);
      await expect(await buyPage.productCard.priceTitle).toHaveText(cardElements.priceDescription.individual.month);
    });

    test.skip(`Purchase ${product.fullTitle} by clicking on Buy button`, async ({ buyPage }) => {});

    test.skip(`Purchase with Supercharge option for ${product.fullTitle}`, async ({ buyPage }) => {});

    test.skip(`Product card links for ${product.fullTitle} navigates to the appropriate page`, async ({
      buyPage,
    }) => {});

    test.skip(`Check prices for ${product.fullTitle}`, async ({ buyPage }) => {});

    test.skip(`Check All Products pack included tools - ${product.fullTitle}`, async ({ buyPage }) => {});

    test.skip(`Check All Products pack Learn more link - ${product.fullTitle}`, async ({ buyPage }) => {});

    test.skip(`Check "Best offer" tags on ${product.fullTitle}`, async ({ buyPage }) => {});

    test.skip(`JetBrains AI Pro product card - ${product.fullTitle} (skip the test if there is not the card by design)`, async ({
      buyPage,
    }) => {});
  });
});
