const currency = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

const form = document.querySelector("#simulation-form");
const amountInput = document.querySelector("#amount");
const installmentsInput = document.querySelector("#installments");
const rateInput = document.querySelector("#rate");
const marginInput = document.querySelector("#margin");
const paymentOutput = document.querySelector("#payment");
const approvalMessage = document.querySelector("#approval-message");

function calculatePayment() {
  const amount = Number(amountInput.value);
  const installments = Number(installmentsInput.value);
  const rate = Number(rateInput.value) / 100;
  const margin = Number(marginInput.value);

  const payment = rate === 0
    ? amount / installments
    : (amount * rate) / (1 - Math.pow(1 + rate, -installments));

  paymentOutput.textContent = currency.format(payment || 0);
  approvalMessage.textContent = payment <= margin
    ? "Parcela dentro da margem informada."
    : "Parcela acima da margem. Ajuste prazo, taxa ou valor.";
}

form.addEventListener("input", calculatePayment);
calculatePayment();
