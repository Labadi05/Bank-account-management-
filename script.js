  class BankAccount {
    constructor() {
      this.balance = 0;
      this.transactions = [];
    }

    deposit(amount) {
      if (amount > 0) {
        this.transactions.push({ type: "deposit", amount: amount });
        this.balance += amount;
        return `Successfully deposited $${amount}. New balance: $${this.balance}`;
      } else {
        return "Deposit amount must be greater than zero.";
      }
    }

    withdraw(amount) {
      if (amount > 0 && amount <= this.balance) {
        this.transactions.push({ type: "withdraw", amount: amount });
        this.balance -= amount;
        return `Successfully withdrew $${amount}. New balance: $${this.balance}`;
      } else {
        return "Insufficient balance or invalid amount.";
      }
    }

    checkBalance() {
      return `Current balance: $${this.balance}`;
    }

    listAllDeposits() {
      const deposits = this.transactions
        .filter(t => t.type === "deposit")
        .map(t => t.amount);
      return `Deposits: ${deposits.join(",")}`;
    }

    listAllWithdrawals() {
      const withdrawals = this.transactions
        .filter(t => t.type === "withdraw")
        .map(t => t.amount);
      return `Withdrawals: ${withdrawals.join(",")}`;
    }
  }

  const myAccount = new BankAccount();
  myAccount.deposit(200);
  myAccount.deposit(100);
  myAccount.withdraw(50);
  myAccount.withdraw(30);
  myAccount.deposit(20);

  const fmt = n => `$${n.toFixed(2)}`;

  const balanceEl = document.getElementById('balanceAmount');
  const ledgerBody = document.getElementById('ledgerBody');
  const emptyState = document.getElementById('emptyState');
  const countsEl = document.getElementById('counts');
  const statusEl = document.getElementById('statusMsg');
  const depositTotalEl = document.getElementById('depositTotal');
  const withdrawTotalEl = document.getElementById('withdrawTotal');

  function render() {
    balanceEl.textContent = fmt(myAccount.balance);

    ledgerBody.innerHTML = '';
    let running = 0;
    myAccount.transactions.forEach((t, i) => {
      running += t.type === 'deposit' ? t.amount : -t.amount;
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>${String(i + 1).padStart(2, '0')}</td>
        <td><span class="tag ${t.type}">${t.type}</span></td>
        <td class="num">${t.type === 'deposit' ? '+' : '−'}${fmt(t.amount)}</td>
        <td class="num">${fmt(running)}</td>
      `;
      ledgerBody.appendChild(tr);
    });

    const n = myAccount.transactions.length;
    countsEl.textContent = `${n} ${n === 1 ? 'entry' : 'entries'}`;
    emptyState.style.display = n === 0 ? 'block' : 'none';

    const deposits = myAccount.transactions.filter(t => t.type === 'deposit').map(t => t.amount);
    const withdrawals = myAccount.transactions.filter(t => t.type === 'withdraw').map(t => t.amount);
    depositTotalEl.textContent = deposits.length ? `Deposits: ${deposits.map(fmt).join(', ')}` : 'Deposits: —';
    withdrawTotalEl.textContent = withdrawals.length ? `Withdrawals: ${withdrawals.map(fmt).join(', ')}` : 'Withdrawals: —';
  }

  function showStatus(message, kind) {
    statusEl.textContent = message;
    statusEl.className = 'status' + (kind ? ' ' + kind : '');
  }

  document.getElementById('depositBtn').addEventListener('click', () => {
    const input = document.getElementById('depositInput');
    const amount = parseFloat(input.value);
    if (isNaN(amount)) {
      showStatus('Enter an amount to deposit.', 'error');
      return;
    }
    const result = myAccount.deposit(amount);
    const ok = amount > 0;
    showStatus(result, ok ? 'success' : 'error');
    if (ok) input.value = '';
    render();
  });

  document.getElementById('withdrawBtn').addEventListener('click', () => {
    const input = document.getElementById('withdrawInput');
    const amount = parseFloat(input.value);
    if (isNaN(amount)) {
      showStatus('Enter an amount to withdraw.', 'error');
      return;
    }
    const result = myAccount.withdraw(amount);
    const success = result.startsWith('Successfully');
    showStatus(result, success ? 'success' : 'error');
    if (success) input.value = '';
    render();
  });

  [document.getElementById('depositInput'), document.getElementById('withdrawInput')].forEach(el => {
    el.addEventListener('keydown', e => {
      if (e.key === 'Enter') {
        e.preventDefault();
        const btnId = el.id === 'depositInput' ? 'depositBtn' : 'withdrawBtn';
        document.getElementById(btnId).click();
      }
    });
  });

  render();
