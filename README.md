# Ledger — Bank Account Management


Ledger — Bank Account Management
A BankAccount class built in vanilla JavaScript that handles deposits, withdrawals, balance tracking, and a full transaction history — paired with a passbook-inspired front end so the account activity reads like an actual ledger book. Every deposit and withdrawal is logged with a running balance, deposits and withdrawals are validated (no negative amounts, no overdrafts), and the interface updates live as you interact with it. Built to demonstrate core JS class design (constructors, methods, array manipulation) alongside a distinct, hand-crafted UI rather than a generic form.


# 📚 Project Context 
 - I built This project as part of the freeCodeCamp Front End Development Libraries certification, fulfilling all required user stories for bank account management system project .
 - A small `BankAccount` class (deposit, withdraw, balance, transaction history) with a passbook-styled web UI on top of it.


## Live demo
Open `index.html` in a browser, or enable **GitHub Pages** for this repo (Settings → Pages → deploy from `main` branch, `/root`) 

```

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
