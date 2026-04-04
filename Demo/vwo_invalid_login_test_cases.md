# Test Cases: VWO App Login Feature

| Field | Value |
|-------|-------|
| **Version** | 1.0 |
| **Author** | QA Team |
| **Date** | 2026-03-23 |
| **Total Test Cases** | 5 |

---

## Test Case Format

Each test case follows this structure:

| Field | Description |
|-------|-------------|
| **TC ID** | Unique identifier (TC-001, TC-002, ...) |
| **Title** | Brief description of what is tested |
| **Preconditions** | What must be true before the test |
| **Steps** | Step-by-step instructions |
| **Expected Result** | What should happen |
| **Priority** | High / Medium / Low |
| **Category** | Smoke / Functional / Negative |
| **Spec File** | Corresponding Playwright spec file |

---

## Test Cases

### TC-001: Dummy User Invalid Login Credentials
| Field | Value |
|-------|-------------|
| **TC ID** | TC-001 |
| **Title** | Verify login failure when using an unregistered dummy email |
| **Preconditions** | User has navigated to `https://app.vwo.com/#/login` |
| **Steps** | 1. Enter an unregistered email `dummy.user.123@automationtest.com` in "Email address" field <br> 2. Enter a valid dummy password `Test@1234` in "Password" field <br> 3. Click "Sign in" button |
| **Expected Result** | An exact red error banner containing the text *"Your email, password, IP address or location did not match"* is displayed. User is left on the login page. |
| **Priority** | High |
| **Category** | Negative |
| **Spec File** | `vwo_invalid_login.spec.js` |

### TC-002: Arabic Invalid Login Credentials
| Field | Value |
|-------|-------------|
| **TC ID** | TC-002 |
| **Title** | Verify login behavior using Arabic characters |
| **Preconditions** | User has navigated to `https://app.vwo.com/#/login` |
| **Steps** | 1. Enter an Arabic text email `اختبار@مجال.كوم` in the "Email address" field <br> 2. Enter an Arabic text password `كلمةالسر١٢٣` in "Password" field <br> 3. Click "Sign in" button |
| **Expected Result** | The UI accurately encodes the Arabic characters, safely triggers a 401 Unauthorized, and displays *"Your email, password, IP address or location did not match"*. |
| **Priority** | High |
| **Category** | Negative |
| **Spec File** | `vwo_invalid_login.spec.js` |

### TC-003: Chinese Invalid Login Credentials
| Field | Value |
|-------|-------------|
| **TC ID** | TC-003 |
| **Title** | Verify login behavior using Chinese characters |
| **Preconditions** | User has navigated to `https://app.vwo.com/#/login` |
| **Steps** | 1. Enter a Chinese text email `测试@域名.公司` in the "Email address" field <br> 2. Enter a Chinese text password `密码一二三` in "Password" field <br> 3. Click "Sign in" button |
| **Expected Result** | The UI successfully validates the Chinese encoding, triggers a secure 401 Unauthorized API error, and displays *"Your email, password, IP address or location did not match"*. |
| **Priority** | High |
| **Category** | Negative |
| **Spec File** | `vwo_invalid_login.spec.js` |

### TC-004: SQL Injection Invalid Login
| Field | Value |
|-------|-------------|
| **TC ID** | TC-004 |
| **Title** | Verify login fields are secure against basic SQL injection parameters |
| **Preconditions** | User has navigated to `https://app.vwo.com/#/login` |
| **Steps** | 1. Enter a strict SQL payload `' OR 1=1 --` into the "Email address" field <br> 2. Enter an arbitrary string in "Password" field <br> 3. Click "Sign in" button |
| **Expected Result** | Payload is strictly treated as text without backend execution, returning securely with *"Your email, password, IP address or location did not match"*. |
| **Priority** | High |
| **Category** | Negative |
| **Spec File** | `vwo_invalid_login.spec.js` |

### TC-005: Repeated Invalid Logins (reCAPTCHA trigger)
| Field | Value |
|-------|-------------|
| **TC ID** | TC-005 |
| **Title** | Verify that consecutive invalid login attempts reliably trigger the bot-prevention reCAPTCHA |
| **Preconditions** | User has navigated to `https://app.vwo.com/#/login` |
| **Steps** | 1. Use an automated script or repeatedly click "Sign In" with invalid dummy credentials 3+ times in succession <br> 2. Observe the form container |
| **Expected Result** | A Google reCAPTCHA iframe with an "I'm not a robot" checkbox dynamically renders above the Sign In button preventing further direct inputs. |
| **Priority** | High |
| **Category** | Negative |
| **Spec File** | `vwo_invalid_login.spec.js` |

---

## Summary

| Priority | Count |
|----------|-------|
| High | 5 |
| Medium | 0 |
| Low | 0 |
| **Total** | **5** |

| Category | Count |
|----------|-------|
| Smoke | 0 |
| Functional | 0 |
| Negative | 5 |
