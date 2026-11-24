# Cats Pizza — QA Automation Project

An end-to-end test automation project for an existing full-stack pizza shop application, built with **Playwright and TypeScript**.

The project demonstrates automated testing of real user workflows, reusable test architecture, API mocking, test data management, visual regression testing, and CI integration.

## Project Origin & My Contribution

**Application under test:** [Cats Pizza by osstep](https://github.com/osstep/cats-pizza).

Cats Pizza is an existing React and Express application that I forked to practice and demonstrate QA automation engineering.

The original application was developed by another author. **My contribution is the automated testing framework**, including:

- UI end-to-end tests using Playwright and TypeScript
- Page Object Model implementation
- Custom Playwright fixtures
- Authentication setup with reusable storage state
- API response mocking and test data management
- Test data cleanup through backend API requests
- Visual regression tests using screenshot comparisons
- GitHub Actions integration for automated test execution

## Tech Stack

| Category          | Technologies                       |
| ----------------- | ---------------------------------- |
| Test automation   | Playwright, TypeScript             |
| Test architecture | Page Object Model, custom fixtures |
| API interactions  | Playwright APIRequestContext       |
| Mocking           | Playwright route interception      |
| Visual testing    | Playwright screenshot assertions   |
| CI/CD             | GitHub Actions, Docker             |
| Reporting         | Playwright HTML Reporter           |

## Test Coverage

The automated tests cover the following application features:

- **Catalog:** product display and interactions
- **Authentication:** registration, login and negative scenarios
- **Cart:** cart management and empty states
- **Checkout:** order submission and form validation
- **Orders:** order history and guest-user scenarios
- **Visual regression:** screenshot-based UI checks

## Test Architecture

The framework separates test scenarios, Page Objects, fixtures, test data, and API utilities.

Key implementation decisions include reusable authentication state, isolated guest and authenticated test fixtures, API response mocking, and backend cleanup operations.

For a detailed explanation, see **[Test Automation Documentation](docs/TEST_AUTOMATION.md)**.

## Getting Started

### Prerequisites

- Node.js and npm
- Playwright browser binaries

### Installation

```bash
npm install
npx playwright install
```

### Run tests

```bash
npm test
```

The Playwright configuration automatically starts the frontend and backend development servers.

### Run tests in UI mode

```bash
npm run test:ui
```

### Run visual tests

```bash
npx playwright test --project=chromium-visual
```

### Update visual snapshots

```bash
npm run test:upd
```

### View test report

```bash
npx playwright show-report
```

## CI/CD

The repository includes a GitHub Actions workflow for automated Playwright test execution.

Test results are available through Playwright HTML reports.

## Documentation

- **[Test Automation Documentation](docs/TEST_AUTOMATION.md)** — testing architecture, implementation details, test coverage and execution.
- **[Application Documentation](docs/APPLICATION.md)** — original application architecture, business logic, API and local setup instructions.

## Project Scope

This is a personal QA automation portfolio project, not a production application.

The purpose is to demonstrate test automation practices applied to an existing application, rather than to claim authorship of the application itself.
