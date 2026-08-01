# Ledger — Bank Account Management

A small `BankAccount` class (deposit, withdraw, balance, transaction history) with a passbook-styled web UI on top of it.

## Live demo
Open `index.html` in a browser, or enable **GitHub Pages** for this repo (Settings → Pages → deploy from `main` branch, `/root`) and it'll be live at:

```
https://<Labadi05>.github.io/<bank-account management-system>/
```

## Files
- `bank-account.js` — the `BankAccount` class used for grading/tests (Node-friendly, no DOM).
- `index.html` — the UI markup.
- `styles.css` — passbook/ledger visual styling.
- `script.js` — the same `BankAccount` class plus the DOM logic that powers the UI.

## Features
- `deposit(amount)` — adds a deposit transaction and increases the balance.
- `withdraw(amount)` — adds a withdrawal transaction if funds are sufficient.
- `checkBalance()` — returns the current balance as a string.
- `listAllDeposits()` / `listAllWithdrawals()` — list transaction amounts by type.

## Running locally
No build step needed — just open `index.html` in a browser.

## Running tests
If you're using this with a test suite (e.g. Jest/Mocha) that requires `bank-account.js`:

```bash
npm install
npm test
```
