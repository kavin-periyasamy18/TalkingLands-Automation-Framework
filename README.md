# TalkingLands Automation Framework

This repository contains a **Playwright + TypeScript** automation framework for the TalkingLands sample map application. The framework covers the main user flow for the assignment: **login, location search, location selection, and logout**.

## Project Overview

The project is organized using the **Page Object Model (POM)** so that locators and actions are separated from test logic.

The current framework uses:
- `OpenStreetMap` as the sample application URL
- a custom `LoginPage` for authentication actions
- a custom `HomePage` for map search and location actions
- reusable browser helpers in `utils/browserActions.ts`
- a custom Playwright fixture in `pages/talkingLandsFixture.ts`
- a GitHub Actions workflow in `.github/workflows/playwright.yml`

## Tools and Technologies Used

- **Playwright Test** – UI automation framework
- **TypeScript** – test and framework language
- **Node.js / npm** – runtime and package management
- **Git / GitHub** – version control and source control hosting
- **GitHub Actions** – CI pipeline
- **HTML Report** from Playwright – test execution reporting

## Framework Architecture

The repository is structured as follows:

```text
TalkingLands-Automation-Framework/
├── .github/
│   └── workflows/
│       └── playwright.yml
├── pages/
│   ├── talkingLandsFixture.ts
│   └── talkingLandsPages/
│       ├── home.page.ts
│       └── login.page.ts
├── tests/
│   └── talkingLands.test.ts
├── utils/
│   ├── aut.ts
│   ├── browserActions.ts
│   └── constants.ts
├── playwright.config.ts
├── package.json
├── package-lock.json
└── .gitignore
```

### Folder Purpose

- **pages/** – Page Objects and custom fixtures
- **tests/** – Test scenarios and assertions
- **utils/** – Reusable actions, constants, and application data
- **data/** – Reserved for external test data if needed
- **.github/workflows/** – CI/CD pipeline configuration

## Test Flow Covered

The main test file `tests/talkingLands.test.ts` currently performs the following actions:

1. Opens the application
2. Logs in using the sample credentials in `utils/aut.ts`
3. Searches for multiple locations
4. Validates expected search results
5. Selects a location from search results
6. Verifies map marker and active location behavior
7. Logs out from the application

## Assumptions

- If a real OTP or production map backend is unavailable, a sample map application may be used.
- The sample app URL is currently set to **OpenStreetMap** in `utils/aut.ts`.
- Test data such as usernames, passwords, and expected locations are maintained in code for the current assignment scope.

## Setup Instructions

### Prerequisites

Make sure the following are installed on your machine:
- Node.js (LTS recommended)
- npm
- Git
- VS Code or another code editor

### Install Dependencies

From the project root, run:

```bash
npm install
```

### Install Playwright Browsers

```bash
npx playwright install
```

If browser dependencies are required on your machine:

```bash
npx playwright install --with-deps
```

## How to Run the Tests

### Run all tests

```bash
npx playwright test
```

### Run a specific test file

```bash
npx playwright test tests/talkingLands.test.ts
```

### Run in headed mode

```bash
npx playwright test tests/talkingLands.test.ts --headed
```

### Run in debug mode

```bash
npx playwright test tests/talkingLands.test.ts --debug
```

### Run in Chrome

```bash
npx playwright test tests/talkingLands.test.ts --project=chromium --headed
```

## Test Reporting

Playwright is configured to generate an **HTML report**.

To open the report after test execution:

```bash
npx playwright show-report
```

## CI/CD Pipeline

The CI/CD pipeline is implemented using GitHub Actions. On every push or pull request, it installs dependencies, installs Playwright browsers, runs the tests, and uploads the HTML report as a build artifact.
The repository already includes a GitHub Actions workflow at:

```text
.github/workflows/playwright.yml
```

The workflow:
- checks out the code
- installs Node.js
- installs dependencies with `npm ci`
- installs Playwright browsers
- runs Playwright tests
- uploads the HTML report as an artifact

## Notes

- The framework uses reusable helper methods in `utils/browserActions.ts` to reduce duplicated code.
- The fixture in `pages/talkingLandsFixture.ts` provides custom Playwright fixtures for `loginPage` and `homePage`.
- The structure can be expanded later to cover OTP-specific and category/subcategory scenarios.
