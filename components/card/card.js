"use strict";
const cardBox = document.getElementById("card-box");
const noInvoice= document.querySelector(".no-invoice");
let invoices = new Array();
invoices = [
   {
      id: "XM9141",
      sendersStreetAddress:"19 Union Terrace London United Kingdom",
      sendersCity: "London",
      sendersPostCode: "E1 3EZ ",
      sendersCountry: "United Kingdom",
      clientsName: "Jensen Huang",
      clientsEmail: "alexgrim@mail.com",
      sclientsStreetAddress:"19 Union Terrace London United Kingdom",
      sclientsCity: "London",
      sclientsPostCode: "E1 3EZ ",
      sclientsCountry: "United Kingdom",
      issueDate: "21 Aug 2021",
      dueDate: "20 Sep 2021",
      paymentTerms:"Next 30 Days",
      invoiceAmount: 1.8,
      issueDate: "21 Aug 2021",
      dueDate: "19 Aug 2021",
      status: "paid",
      projectDescription:"Graphic Design",
      itemsList: [
       { name:"Banner Design",
        itemsPrice: 1800,
        itemsQuantity: 1,
        itemTotalPrice: 1800,
      },
      { name:"Logo Design",
        itemsPrice: 2000,
        itemsQuantity: 1,
        itemTotalPrice: 2000,
      },
      { name:"Website Design",
        itemsPrice: 900,
        itemsQuantity: 1,
        itemTotalPrice: 900,
      },
      ],
   },


];
function saveInvoicesToLocalStorage() {
  // localStorage.setItem("invoices", JSON.stringify(invoices));
}
// saveInvoicesToLocalStorage()

// invoices = JSON.parse(localStorage.getItem("invoices"));
// console.log(invoices.length);

invoices=['']
if(invoices.length>0) {
  // showInvoices()
  noInvoice.classList.add("hidden");
  cardBox.classList.remove("hidden");
}else{
  noInvoice.classList.remove("hidden");
  cardBox.classList.add("hidden");
}
function showInvoices() {
  invoices = JSON.parse(localStorage.getItem("invoices"));
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

// function showInvoiceDetail(ID) {
//   loadInvoicesFromLocalStorage()
//   let invoice = invoices.find(invoice => {
//     return invoice.id.toString() === ID.toString();
//   });
//   let cardTemplate;
//   cardTemplate.innerHTML =`
//   <div class="card">
//     <div class="card__header">
//       <span class="card__header__title">Invoice #${invoice.id}</span>
//       <span class="card__header__date">${invoice.dueDate}</span>
//     </div>
//     <div class="card__body">
//       <span class="card__body__to">${invoice.billTo}</span>
//       <span class="card__body__amount">£${invoice.invoiceAmount}</span>
//     </div>
//     <div class="card__footer">
//       <span class="card__footer__status ${invoice.status}">${invoice.status}</span>
//     </div>
//   </div>
//   `
//   cardBox.innerHTML += cardTemplate;
// }
