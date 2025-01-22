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
  fullTitle: 'JetBrains AI Pro',
  // Add the description for the card
};

const _dotUltimate = {
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
  tagIde: true,
  cards: [
    {
      title: 'IntelliJ IDEA Ultimate',
      description: 'The Leading Java and Kotlin IDE',
      logosText: ['IntelliJ IDEA'],
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
  tagIde: true,
  cards: [
    {
      title: 'CLion',
      description: 'A smart cross-platform IDE for C and C++',
      logosText: ['CLion'],
    },
    _allProductsPackCard,
  ],
};

const _pycharm = {
  urlTitle: 'pycharm',
  shortTitle: 'PyCharm',
  fullTitle: 'PyCharm Professional',
  subHeaderMenu: ['Use Cases', 'EAP', "What's New", 'Features', 'Learn'],
  targetBuyersCount: 4,
  numberOfLinks: 1,
  trial: false,
  tagIde: true,
  cards: [
    {
      title: 'PyCharm Professional',
      description: 'The Python IDE for data science and web development',
      logosText: ['PyCharm'],
    },
    _allProductsPackCard,
    _jetBrainsAIProCard,
  ],
};

const _rubymine = {
  urlTitle: 'ruby',
  shortTitle: 'RubyMine',
  fullTitle: 'RubyMine',
  subHeaderMenu: ['Coming in 2025.1', "What's New", 'Features', 'Learn'],
  targetBuyersCount: 4,
  numberOfLinks: 1,
  trial: true,
  tagIde: true,
  cards: [
    {
      title: 'RubyMine',
      description: 'The most intelligent Ruby IDE',
      logosText: ['RubyMine'],
    },
    _allProductsPackCard,
  ],
};

const _resharper = {
  urlTitle: 'resharper',
  shortTitle: 'ReSharper',
  fullTitle: 'ReSharper',
  subHeaderMenu: ['Coming in 2025.1', "What's New", 'Features', 'Docs', 'Blog', 'Plugins'],
  targetBuyersCount: 4,
  numberOfLinks: 1,
  trial: false,
  tagIde: false,
  cards: [
    {
      title: 'ReSharper',
      description: 'Visual Studio extensions for .NET and C++ developers.',
      logosText: ['ReSharper', 'ReSharper C++'],
    },
    _allProductsPackCard,
    _dotUltimate,
  ],
};

const products = [_idea, _clion, _pycharm, _rubymine, _resharper];

export { products, headerTitle, userSwitcher, periodSwitcher, cardElements, productTag };
