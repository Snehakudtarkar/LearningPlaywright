# Test Plan: VWO App Login Feature

| Field | Value |
|-------|-------|
| **Version** | 1.0 |
| **Author** | QA Team |
| **Date** | 2026-03-23 |
| **Environment** | Production |
| **Browser** | Chromium, Firefox, WebKit |

---

## 1. Introduction

This test plan describes the testing approach for **VWO App Login Feature**. It outlines the scope, test strategy, resources, schedule, and deliverables for the testing effort.

## 2. Objectives

- Verify core functionality works as expected
- Identify defects before production release
- Ensure user flows are complete and error-free
- Validate UI elements and navigation

## 3. Scope

### In Scope
- Login page UI elements verification (Email field, Password field, Sign In button).
- Valid user authentication and redirection to the dashboard.
- Invalid user authentication (wrong password, invalid email format, missing fields).
- Presence and basic validation of the "Forgot Password" or "Remember Me" features.

### Out of Scope
- Single Sign-On (SSO) integration functionality (e.g., Log in with Google/Microsoft).
- Backend database or API infrastructure testing.
- Session timeout and forced logout mechanisms.

## 4. Test Strategy

### Test Approach
- **Automation Tool:** Playwright with @playwright/test
- **Test Type:** End-to-end functional testing
- **Browser:** Chromium, Firefox, WebKit
- **Environment:** Production

### Test Levels
- Smoke Testing (critical paths)
- Functional Testing (all features)
- Negative Testing (invalid inputs, error handling)

## 5. Test Environment

| Component | Details |
|-----------|---------|
| Application URL | https://app.vwo.com/#/login |
| Browser | Chromium, Firefox, WebKit |
| OS | Cross-platform (Node.js) |
| Framework | Playwright v1.58+ |
| Reporter | HTML + JSON |

## 6. Entry Criteria

- Application is deployed and accessible
- Test environment is configured
- Test data is available (Valid/Invalid usernames and passwords)
- Test cases are reviewed and approved

## 7. Exit Criteria

- All planned test cases executed
- All critical/high priority defects resolved
- Test report generated and reviewed
- No open blockers

## 8. Test Cases Summary

1. **TC_01:** Verify successful login with valid credentials.
2. **TC_02:** Verify login behavior with empty credentials (both fields blank).
3. **TC_03:** Verify validation error message for an invalid email format.
4. **TC_04:** Verify error message for valid email but incorrect password.
5. **TC_05:** Verify that the "Password" input field characters are masked (type="password").
6. **TC_06:** Verify that the "Forgot Password" link is properly displayed and functional to redirect the user.

## 9. Risk Assessment

| Risk | Impact | Mitigation |
|------|--------|-----------|
| Application downtime | High | Use stable test environment |
| Flaky tests | Medium | Implement proper waits, no retries |
| Environment differences | Medium | Use consistent browser version |

## 10. Schedule

| Phase | Duration |
|-------|----------|
| Test Planning | 1 day |
| Test Case Design | 1 day |
| Test Execution | 1 day |
| Defect Reporting | Ongoing |
| Test Closure | 1 day |

## 11. Deliverables

- [x] Test Plan (this document)
- [ ] Test Cases Document
- [ ] Test Execution Report (HTML)
- [ ] Defect Reports (Jira tickets)
- [ ] Test Summary Report
