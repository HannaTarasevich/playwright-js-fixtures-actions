# playwright-js-fixtures-actions

## Installation

Install after the cloning:

```bash
  npm install
```

## Running Tests

To run tests for all the devices in headless mode, run the following command (used on the pipeline):

```bash
  npm run test
```

Run in headed mode for specified device only (Chrome by default):

```bash
  npm run test:headed
```

Run in Playwright UI mode:

```bash
  npm run test:watch
```

Show report:

```bash
  npm run test:showReport
```

Update screenshots:

```bash
  npm run test:updateSnapshots
```

## Devices

- Desktop: Chrome/Firefox/Edge
- Mobile: iPhone 15, Samsung S24

## Reporting

If any test fails, an HTML report is generated and opens immediately. In the pipeline (GitHub Actions), there is an 'Upload Artifact' stage that includes the generated HTML report for download.

## Code style

The project uses Prettier as a code formatting tool. A pre-commit hook (powered by Husky) is enabled to ensure that the formatting rules are met.

## GitHub Actions

Tests run automatically after each merge to the main branch.
