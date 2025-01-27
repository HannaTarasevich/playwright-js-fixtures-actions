/**
 * This file contains tests for further information on the buy page.
 * The tests are run according to the `products` array from the `data/buyProducts` module.
 */

import test from '../../../pageObjects/pageFixture';
import { products } from '../../../data/buyProducts';

products.forEach((product) => {
  test.describe.skip(`Trial block`, async () => {
    test(`Structure check - ${product.fullTitle}`, async ({ buyPage }) => {});

    test(`Request a trial button redirects to the shop/eform - ${product.fullTitle}`, async ({ buyPage }) => {});
  });
});
