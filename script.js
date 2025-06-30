document.getElementById("rechargeForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const mobile = document.getElementById("mobile").value;
  const operator = document.getElementById("operator").value;
  const circle = document.getElementById("circle").value;
  const amount = document.getElementById("amount").value;
  const upi = document.getElementById("upi").value;

  if (upi && mobile && operator && circle && amount) {
    alert(`Recharge request submitted!\n\nMobile: ${mobile}\nAmount: ₹${amount}\nPay via UPI: ${upi}`);
    // Here you can integrate with payment API or Airtable/Firebase backend
  } else {
    alert("Please fill all details.");
  }
});
