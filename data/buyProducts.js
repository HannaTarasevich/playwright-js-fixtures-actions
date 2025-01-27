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

class Card {
  constructor(title, description, logosText) {
    this.title = title;
    this.description = description;
    this.logosText = logosText;
  }
}

class Product {
  constructor(urlTitle, shortTitle, fullTitle, subHeaderMenu, targetBuyersCount, numberOfLinks, trial, tagIde, cards) {
    this.urlTitle = urlTitle;
    this.shortTitle = shortTitle;
    this.fullTitle = fullTitle;
    this.subHeaderMenu = subHeaderMenu;
    this.targetBuyersCount = targetBuyersCount;
    this.numberOfLinks = numberOfLinks;
    this.trial = trial;
    this.tagIde = tagIde;
    this.cards = cards.map((card) => new Card(card.title, card.description, card.logosText));
  }
}

const _allProductsPackCard = {}; // Add new Product()
const _jetBrainsAIProCard = {}; // Add new Product()
const _dotUltimate = {}; // Add new Product()

const _idea = new Product(
  'idea',
  'IntelliJ IDEA',
  'IntelliJ IDEA Ultimate',
  ['Coming in 2025.1', "What's New", 'Features', 'Resources'],
  3,
  1,
  true,
  true,
  [
    {
      title: 'IntelliJ IDEA Ultimate',
      description: 'The Leading Java and Kotlin IDE',
      logosText: ['IntelliJ IDEA'],
    },
    _allProductsPackCard,
  ]
);

const _clion = new Product(
  'clion',
  'CLion',
  'CLion',
  ['Coming in 2025.1', "What's New", 'Features', 'Learn'],
  4,
  1,
  false,
  true,
  [
    {
      title: 'CLion',
      description: 'A smart cross-platform IDE for C and C++',
      logosText: ['CLion'],
    },
    _allProductsPackCard,
  ]
);

const _pycharm = new Product(
  'pycharm',
  'PyCharm',
  'PyCharm Professional',
  ['Use Cases', 'EAP', "What's New", 'Features', 'Learn'],
  4,
  1,
  false,
  true,
  [
    {
      title: 'PyCharm Professional',
      description: 'The Python IDE for data science and web development',
      logosText: ['PyCharm'],
    },
    _allProductsPackCard,
    _jetBrainsAIProCard,
  ]
);

const _rubymine = new Product(
  'ruby',
  'RubyMine',
  'RubyMine',
  ['Coming in 2025.1', "What's New", 'Features', 'Learn'],
  4,
  1,
  true,
  true,
  [
    {
      title: 'RubyMine',
      description: 'The most intelligent Ruby IDE',
      logosText: ['RubyMine'],
    },
    _allProductsPackCard,
  ]
);

const _resharper = new Product(
  'resharper',
  'ReSharper',
  'ReSharper',
  ['Coming in 2025.1', "What's New", 'Features', 'Docs', 'Blog', 'Plugins'],
  4,
  1,
  false,
  false,
  [
    {
      title: 'ReSharper',
      description: 'Visual Studio extensions for .NET and C++ developers.',
      logosText: ['ReSharper', 'ReSharper C++'],
    },
    _allProductsPackCard,
    _dotUltimate,
  ]
);

const products = [_idea, _clion, _pycharm, _rubymine, _resharper];

export { products, headerTitle, userSwitcher, periodSwitcher, cardElements, productTag };
