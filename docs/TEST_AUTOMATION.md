# Test Automation Documentation

## 1. Overview

This document describes the automated testing framework developed for the Cats Pizza application using Playwright and TypeScript.

The framework is designed to validate core user workflows and provide reusable components for UI testing, API response mocking, test data preparation, and visual regression testing.

The application itself is an existing third-party project. This document focuses on the independently developed test automation implementation.

## 2. Framework Architecture

The test framework follows the Page Object Model pattern and separates test scenarios from page interactions and assertions.

### Directory Structure

```text
tests/
├── fixtures/
│   └── app.fixture.ts
├── setup/
│   └── auth.setup.ts
├── pom/
│   ├── pages/
│   │   ├── HomePage.ts
│   │   ├── CartPage.ts
│   │   ├── CheckoutPage.ts
│   │   ├── OrdersPage.ts
│   │   └── AuthModal.ts
│   ├── specs/
│   │   ├── home.spec.ts
│   │   ├── auth.spec.ts
│   │   ├── cart.spec.ts
│   │   ├── checkout.spec.ts
│   │   ├── orders.spec.ts
│   │   ├── orders.guest.spec.ts
│   │   └── visualTests/
│   ├── api/
│   │   ├── CleanupAPI.ts
│   │   └── mockApi/
│   ├── mockData/
│   └── data/
│       └── testData.ts
└── __screenshots__/
```

## 3. Page Object Model

Page Objects encapsulate UI interactions and assertions for individual application pages and components.

This approach reduces duplicated code and keeps test scenarios readable.

The framework includes Page Objects for:

- Home page
- Cart page
- Checkout page
- Orders page
- Authentication modal

Test scenarios use these abstractions instead of repeatedly implementing the same browser interactions.

## 4. Custom Playwright Fixtures

Custom fixtures are implemented using Playwright's `test.extend()` API.

The `app.fixture.ts` file provides typed Page Object instances to test scenarios.

Two test configurations are exported:

- `guestTest` — for guest-user scenarios
- `authorizedTest` — for scenarios requiring a saved authenticated session

This separates authentication requirements from individual test implementations and reduces repeated setup code.

## 5. Authentication Setup

Authentication is prepared through a dedicated Playwright setup project.

The setup process:

1. Opens the application.
2. Signs in using an existing test user.
3. Verifies successful authentication.
4. Saves browser storage state to `playwright/.auth/existing-user.json`.

The Chromium test project depends on the setup project.

Tests using `authorizedTest` load the saved authentication state, avoiding repeated UI login operations.

## 6. Test Scenarios

### Catalog

Tests verify product catalog behavior and relevant user interactions.

### Authentication

Tests cover registration, login and negative authentication scenarios, including invalid credentials and duplicate registration.

### Shopping Cart

Tests cover cart operations and empty-cart behavior.

### Checkout

Tests validate checkout functionality, including required address fields and order submission.

### Orders

Tests verify order-related workflows for authenticated and guest users.

## 7. API Mocking

Playwright's `page.route()` and `route.fulfill()` are used to intercept selected network requests and return predefined responses.

Mock data is organized separately from test scenarios in the `mockData/` directory.

API mocking helps create controlled conditions for UI tests and reduces dependencies on specific backend responses.

The framework includes mock API utilities for:

- Authentication
- Catalog
- Cart
- Orders

These are UI tests using mocked backend responses, not a separate suite of real API integration tests.

## 8. Test Data Management

Test data is organized in `data/testData.ts` and dedicated mock data modules.

The framework also includes `CleanupAPI.ts`, which uses Playwright's API request functionality to remove test-generated users and orders.

Cleanup operations help limit persistent test data in the backend.

Further improvements may include stricter API response validation and more explicit test data isolation.

## 9. Visual Regression Testing

Visual regression tests are stored separately under `specs/visualTests/`.

They use Playwright screenshot assertions to compare the current UI against stored reference snapshots.

Visual tests cover:

- Catalog
- Authentication
- Cart
- Orders

Reference screenshots are stored under `tests/__screenshots__/`.

Visual tests run in the dedicated `chromium-visual` Playwright project.

## 10. Playwright Configuration

The framework configuration is defined in `playwright.config.ts`.

Key settings include:

- Chromium browser projects
- Separate setup and visual test projects
- HTML test reporting
- Trace collection on the first retry
- CI-specific retries and worker settings
- Automatic frontend and backend startup using `webServer`

The frontend runs on port `5173`, and the backend runs on port `3001`.

## 11. CI/CD

The repository contains a GitHub Actions workflow for automated test execution.

The CI setup uses a Playwright Docker environment and generates an HTML report.

This allows test execution in a controlled environment without relying solely on a local development machine.

## 12. Running the Tests

Install dependencies:

```bash
npm install
npx playwright install
```

Run the test suite:

```bash
npm test
```

Run in interactive UI mode:

```bash
npm run test:ui
```

Run the Chromium project:

```bash
npx playwright test --project=chromium
```

Run visual regression tests:

```bash
npx playwright test --project=chromium-visual
```

Update visual snapshots:

```bash
npm run test:upd
```

Open the HTML report:

```bash
npx playwright show-report
```

## 13. Known Limitations and Future Improvements

Potential improvements include:

- Adding dedicated API integration tests
- Strengthening cleanup response validation
- Improving test data isolation
- Reviewing unnecessary serial execution
- Extending cross-browser coverage
- Improving environment configuration

These are potential improvements rather than claims of already implemented functionality.
