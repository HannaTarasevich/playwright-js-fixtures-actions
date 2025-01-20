/**
 * This module exports various constants and objects related to the buy page,
 * including header titles, product tags, user switcher options, period switcher options,
 * card elements, and product details.
 *
 * Buy tests use the "products" array to iterate the same test through test pages.
 *
 * @module buyProducts
 */

const headerTitle = 'Subscription Options and Pricing';
const productTag = 'JetBrains IDEs';

const userSwitcher = {
  organization: 'For Organizations',
  individual: 'For Individual Use',
  special: 'Special Categories',
  students: 'Students, Teachers & CommunityFree',
};

const periodSwitcher = {
  yearly: 'Yearly billingsave 2 months',
  monthly: 'Monthly billing',
};

const cardElements = {
  buyButton: 'Buy',
  getQuoteLink: 'Get quote',
  learnMoreLink: 'Learn more',
  checkboxDescription: /^Supercharge with JetBrains AI Pro/,
  priceDescription: {
    organization: {
      year: 'per user, per year',
      month: 'per user, per month',
    },
    individual: {
      year: ['first year', 'second year', 'third year onwards'],
      month: 'per month',
    },
  },
};

const _allProductsPackCard = {
  // Add the description for the card
};

const _jetBrainsAIProCard = {
  // Add the description for the card
};

const _idea = {
  urlTitle: 'idea',
  shortTitle: 'IntelliJ IDEA',
  fullTitle: 'IntelliJ IDEA Ultimate',
  subHeaderMenu: ['Coming in 2025.1', "What's New", 'Features', 'Resources'],
  targetBuyersCount: 3,
  numberOfLinks: 1,
  trial: true,
  cards: [
    {
      title: 'IntelliJ IDEA Ultimate',
      description: 'The Leading Java and Kotlin IDE',
      logoText: 'IntelliJ IDEA',
    },
    _allProductsPackCard,
  ],
};

const _clion = {
  urlTitle: 'clion',
  shortTitle: 'CLion',
  fullTitle: 'CLion',
  subHeaderMenu: ['Coming in 2025.1', "What's New", 'Features', 'Learn'],
  targetBuyersCount: 4,
  numberOfLinks: 1,
  trial: false,
  cards: [
    {
      title: 'CLion',
      description: 'A smart cross-platform IDE for C and C++',
      logoText: 'CLion',
    },
    _allProductsPackCard,
  ],
};

const products = [_idea, _clion];

export { products, headerTitle, userSwitcher, periodSwitcher, cardElements, productTag };
