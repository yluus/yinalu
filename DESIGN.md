# Part 2b — CI & Alerting Design

No code required here — we want your reasoning.

## 1. Running this suite in GitHub Actions on every PR

Describe the workflow: what triggers it, the job/steps, how you start the API
before the tests, and how a test failure fails the build. A YAML sketch is
welcome but optional.

```yaml
# (optional) sketch your workflow here
```

Notes:

1. Command to run: 
   npx cypress run --spec "cypress/e2e/dashboard.cy.ts" --headed --browser chrome

2. Need to install json-server to mock the api with multiple levels of end points
   npm -g install json-server@v0.x

3. Start mock server:
   json-server -p 3001 --watch cypress/fixtures/server.json --routes cypress/fixtures/routes.json

4. Both server.json and routes.json are under the directory: cypress\fixtures


## 2. Failure summary to Slack (or structured JSON for alerting)

On a failed run, what would you post, and how do you keep it signal (not noise)?

- **What goes in the message:** (which fields — failing specs? counts? a link to
  the run? first error? )
- **How it's triggered:** (only on failure? on flaky retries? on `main` only?)
- **Keeping it useful:** (dedup, thresholds, grouping, who gets pinged, etc.)
