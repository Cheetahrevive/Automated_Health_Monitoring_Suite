# 🚨 Automated Health Monitoring Suite

Professional-grade automated health monitoring system that runs daily at 8 AM EST to verify your application's integrity.

## Features
- ✅ **GitHub Actions Integration** - Automated daily health checks
- ✅ **Email Alerts** - Instant notifications with screenshots on failure
- ✅ **Full-Stack Testing** - UI, API, and Database health checks
- ✅ **Page Object Model** - Clean, maintainable test architecture
- ✅ **CI/CD Optimized** - Parallel execution, retries, artifacts

## Setup

1. Install dependencies:
\`\`\`bash
npm install
\`\`\`

2. Set up environment variables (create \`.env\` file):
\`\`\`
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-gmail-app-password
\`\`\`

3. Configure GitHub Secrets (for CI/CD):
   - Go to Settings → Secrets → Actions
   - Add: \`EMAIL_USER\` and \`EMAIL_PASS\`

## Usage

### Run tests locally:
\`\`\`bash
npm test
\`\`\`

### Run in headed mode (see browser):
\`\`\`bash
HEADED=true npm test
\`\`\`

### Run specific health check:
\`\`\`bash
npx playwright test tests/full-stack-health.spec.js
\`\`\`

## Architecture

See \`.github/workflows/MONITORING_GUIDE.md\` for detailed architecture documentation.

## Customization

1. Update \`tests/full-stack-health.spec.js\` with your application URL
2. Customize Page Objects in \`utils/pageObjects/\`
3. Configure backend checks in \`services/BackendChecks.js\`
4. Update email recipients in \`utils/Notifier.js\`
