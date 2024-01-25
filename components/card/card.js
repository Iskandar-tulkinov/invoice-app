"use strict";
const cardBox = document.getElementById("card-box");
let invoices = new Array();
invoices = [
   {
      id: "XM9141",
      dueDate: "19 Aug 2021",
      billTo: "Jensen Huang",
      invoiceAmount: 1.8,
      status: "paid",
   },
   {
      id: "XL9351",
      dueDate: "24 Sep 2022",
      billTo: "Thomas Wayne",
      invoiceAmount: 1.8,
      status: "pending",
   },
   {
      id: "AC9141",
      dueDate: "19 Aug 2021",
      billTo: "Mellisa Clarke",
      invoiceAmount: 4032.33,
      status: "draft",
   },
];

function saveInvoicesToLocalStorage() {
  localStorage.setItem("invoices", JSON.stringify(invoices));
}

function loadInvoicesFromLocalStorage() {
  invoices = JSON.parse(localStorage.getItem("invoices"));
}

if (saveInvoicesToLocalStorage) {
   loadInvoicesFromLocalStorage();
  //  showInvoices();
}
if(invoices.length) showInvoices()
function showInvoices() {
   loadInvoicesFromLocalStorage();
   cardBox.innerHTML = "";
   invoices.forEach((invoice) => {
    cardBox.innerHTML += `
    <div class="card" onclick="showInvoiceDetail(${invoice.id})">
            <span class="invoice__id"><span>#</span>${invoice.id}</span>
            <span class="invoice__due-date"><span>Due </span> ${invoice.dueDate}</span>
            <span class="invoice__to">${invoice.billTo}</span>
            <span class="invoice__amount">£${invoice.invoiceAmount}</span>
            <span >
              <span class="invoice__status ${invoice.status}">${invoice.status}</span>
              <img class="right-icon"  src="./assets/img/arrow-right.svg" alt="Right arrow icon">
            </span>
          </div>
    `;

   });
}

function showInvoiceDetail(ID) {
  loadInvoicesFromLocalStorage()
  let invoice = invoices.find(invoice => {
    return invoice.id.toString() === ID.toString();
  });
  let cardTemplate;
  cardTemplate.innerHTML =`
  <div class="card">
    <div class="card__header">
      <span class="card__header__title">Invoice #${invoice.id}</span>
      <span class="card__header__date">${invoice.dueDate}</span>
    </div>
    <div class="card__body">
      <span class="card__body__to">${invoice.billTo}</span>
      <span class="card__body__amount">£${invoice.invoiceAmount}</span>
    </div>
    <div class="card__footer">
      <span class="card__footer__status ${invoice.status}">${invoice.status}</span>
    </div>
  </div>
  `
  cardBox.innerHTML += cardTemplate;
}
