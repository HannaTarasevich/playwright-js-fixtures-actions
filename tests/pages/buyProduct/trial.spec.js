/**
 * This file contains tests for further information on the buy page.
 * The tests are run according to the `products` array from the `data/buyProducts` module.
 */

import test from '../../../pageObjects/pageFixture';
import { products } from '../../../data/buyProducts';

products.forEach((product) => {
  test.describe.skip(`Trial block`, async () => {
    test.beforeEach(async ({ buyPage }) => {
      await buyPage.goto(product.urlTitle);
    });

    test(`Structure check - ${product.urlTitle}`, async ({ buyPage }) => {});

    test(`Request a trial button redirects to the shop/eform - ${product.urlTitle}`, async ({ buyPage }) => {});
  });
});
