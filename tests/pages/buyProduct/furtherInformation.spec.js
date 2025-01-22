/**
 * This file contains tests for further information on the buy page.
 * The tests are run according to the `products` array from the `data/buyProducts` module.
 */

import test from '../../../pageObjects/pageFixture';
import { products } from '../../../data/buyProducts';

products.forEach((product) => {
  test.describe.skip(`Further information`, async () => {
    test.beforeEach(async ({ buyPage }) => {
      await buyPage.goto(product.urlTitle);
    });

    test(`Structure check - ${product.fullTitle}`, async ({ buyPage }) => {});

    test(`Links navigates to the appropriate pages - ${product.fullTitle}`, async ({ buyPage }) => {});

    test(`Contact Us button redirects to the email sales - ${product.fullTitle}`, async ({ buyPage }) => {});
  });
});
