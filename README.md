# 🚨 Automated Health Monitoring Suite

![Build Status](https://img.shields.io/github/actions/workflow/status/Cheetahrevive/Automated_Health_Monitoring_Suite/daily-check.yml?branch=main&label=Health%20Check)
![License](https://img.shields.io/badge/license-ISC-blue.svg)
![Node](https://img.shields.io/badge/node-%3E%3D16.0.0-brightgreen.svg)
![Playwright](https://img.shields.io/badge/playwright-v1.57.0-brightgreen.svg)
![Tests](https://img.shields.io/badge/tests-passing-success.svg)

Professional-grade automated health monitoring system that runs daily at 8 AM EST to verify your application's integrity. Get instant email alerts with screenshots when issues are detected.

## 📋 Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
  - [Running Tests Locally](#running-tests-locally)
  - [Viewing Test Reports](#viewing-test-reports)
  - [CI/CD Integration](#cicd-integration)
- [Project Structure](#project-structure)
- [Test Coverage](#test-coverage)
- [Email Notifications](#email-notifications)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)
- [License](#license)

## ✨ Features

- ✅ **GitHub Actions Integration** - Automated daily health checks
- 📧 **Email Alerts** - Instant notifications with screenshots on failure
- 🔄 **Full-Stack Testing** - UI, API, and Database health checks
- 🏗️ **Page Object Model** - Clean, maintainable test architecture
- ⚡ **CI/CD Optimized** - Parallel execution, retries, artifacts
- 🌐 **Multi-Browser Support** - Chromium, Firefox, WebKit
- 📊 **HTML Reports** - Comprehensive test execution reports
- 🔐 **Environment Security** - GitHub Secrets integration

## 📦 Prerequisites

- Node.js >= 16.0.0
- npm >= 8.0.0
- Git
- Gmail account (for email notifications)

## 🚀 Installation

1. **Clone the repository:**
```bash
git clone https://github.com/Cheetahrevive/Automated_Health_Monitoring_Suite.git
cd Automated_Health_Monitoring_Suite
```

2. **Install dependencies:**
```bash
npm install
```

3. **Install Playwright browsers:**
```bash
npx playwright install
```

## ⚙️ Configuration

### Local Environment

Create a `.env` file in the root directory:

```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-gmail-app-password
```

### GitHub Secrets (for CI/CD)

1. Go to **Settings** → **Secrets** → **Actions**
2. Add the following secrets:
   - `EMAIL_USER`: Your Gmail address
   - `EMAIL_PASS`: Gmail App Password ([How to generate](https://support.google.com/accounts/answer/185833))

## 💻 Usage

### Running Tests Locally

```bash
# Run all tests
npm test

# Run specific test suite
npm run test:health
npm run test:monitoring
npm run test:fullstack

# Run tests in headed mode (with browser UI)
npm test -- --headed

# Run tests in specific browser
npm test -- --project=chromium
npm test -- --project=firefox
npm test -- --project=webkit
```

### Viewing Test Reports

```bash
# Generate and open HTML report
npm run report

# View last test results
npm run show-report
```

### CI/CD Integration

The suite runs automatically:
- **Daily at 8 AM EST** via GitHub Actions
- **On every push** to main branch
- **Manual trigger** via GitHub Actions UI

## 📁 Project Structure

```
Automated_Health_Monitoring_Suite/
├── .github/
│   └── workflows/
│       └── daily-check.yml    # GitHub Actions workflow
├── tests/
│   ├── full-stack-health.spec.js    # Full-stack health tests
│   └── monitoring-setup.spec.js     # Configuration & setup tests
├── utils/
│   ├── Notifier.js        # Email notification system
│   ├── emailService.js    # SMTP configuration
│   └── pageObjects/       # Page Object Models
├── playwright.config.js    # Playwright configuration
├── package.json           # Dependencies & scripts
└── README.md              # This file
```

## 🎯 Test Coverage

### Health Check Tests
- ✅ UI Navigation & Responsiveness
- ✅ Page Title & Content Validation
- ✅ HTTP Status Code Verification
- ✅ Cross-Browser Compatibility

### Monitoring Setup Tests
- ✅ GitHub Actions Workflow Configuration
- ✅ Environment Variables Validation
- ✅ Email Service Configuration
- ✅ Project Structure Integrity

### Full-Stack Tests
- ✅ End-to-End User Flows
- ✅ API Integration Tests
- ✅ Database Connectivity (if applicable)

## 📧 Email Notifications

Receive detailed failure reports including:
- 🔴 Test failure summary
- 📸 Screenshots of failures
- 🕐 Timestamp and browser details
- 🔗 Link to full test report

## 🔧 Troubleshooting

### Email Not Sending
- Verify Gmail App Password is correct
- Check if Less Secure Apps is enabled
- Ensure EMAIL_USER and EMAIL_PASS are set correctly

### Tests Failing
- Check if Playwright browsers are installed: `npx playwright install`
- Verify Node.js version: `node --version`
- Clear cache: `npm cache clean --force && npm install`

### GitHub Actions Issues
- Verify secrets are correctly set in repository settings
- Check workflow logs for detailed error messages

## 🤝 Contributing

Contributions are welcome! Please:
1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📄 License

ISC License - see [LICENSE](LICENSE) file for details

---

**Built with** ❤️ **using Playwright & Node.js**
