"use strict";
let invoices = [
   {
      id: "XM9141",
      sendersStreetAddress: "19 United Seperate",
      sendersCity: "London",
      sendersPostCode: "E1 3EZ ",
      sendersCountry: "United Kingdom",
      clientsName: "Jensen Huang",
      clientsEmail: "alexgrim@mail.com",
      sclientsStreetAddress: "19 Union Terrace",
      sclientsCity: "London",
      sclientsPostCode: "E1 3EZ ",
      sclientsCountry: "United Kingdom",
      issueDate: "21 Aug 2021",
      dueDate: "20 Sep 2021",
      paymentTerms: "Next 30 Days",
      invoiceAmount: 1.8,
      issueDate: "21 Aug 2021",
      dueDate: "19 Aug 2021",
      status: "paid",
      projectDescription: "Graphic Design",
      itemsList: [
         {
            name: "Banner Design",
            itemsPrice: 1800,
            itemsQuantity: 1,
            itemTotalPrice: 1800,
         },
         {
            name: "Logo Design",
            itemsPrice: 2000,
            itemsQuantity: 1,
            itemTotalPrice: 2000,
         },
         {
            name: "Website Design",
            itemsPrice: 900,
            itemsQuantity: 1,
            itemTotalPrice: 900,
         },
      ],
   },
   {
      id: "XM9141",
      sendersStreetAddress: "19 United Seperate",
      sendersCity: "London",
      sendersPostCode: "E1 3EZ ",
      sendersCountry: "United Kingdom",
      clientsName: "Clark",
      clientsEmail: "alexgrim@mail.com",
      sclientsStreetAddress: "19 Union Terrace",
      sclientsCity: "London",
      sclientsPostCode: "E1 3EZ ",
      sclientsCountry: "United Kingdom",
      issueDate: "21 Aug 2021",
      dueDate: "20 Sep 2021",
      paymentTerms: "Next 30 Days",
      invoiceAmount: 1.8,
      issueDate: "21 Aug 2021",
      dueDate: "19 Aug 2021",
      status: "pending",
      projectDescription: "Graphic Design",
      itemsList: [
         {
            name: "Banner Design",
            itemsPrice: 1800,
            itemsQuantity: 1,
            itemTotalPrice: 1800,
         },
         {
            name: "Logo Design",
            itemsPrice: 2000,
            itemsQuantity: 1,
            itemTotalPrice: 2000,
         },
         {
            name: "Website Design",
            itemsPrice: 900,
            itemsQuantity: 1,
            itemTotalPrice: 900,
         },
      ],
   },
];

const cardBox = document.getElementById("card-box");
const noInvoice = document.querySelector(".no-invoice");

function saveInvoicesToLocalStorage() {
   localStorage.setItem("invoices", JSON.stringify(invoices));
}
saveInvoicesToLocalStorage();

let currentInvoices = JSON.parse(localStorage.getItem("invoices"));

const addInvoice = (data) => {
   const datas = currentInvoices.push(data);

   localStorage.setItem("invoices", JSON.string(datas));
};

currentInvoices = JSON.parse(localStorage.getItem("invoices"))
   ? JSON.parse(localStorage.getItem("invoices"))
   : [];

if (currentInvoices.length === 0) {
   noInvoice.classList.add("hidden");
   cardBox.classList.remove("hidden");
   showInvoices();
}

function showInvoices() {
   currentInvoices = JSON.parse(localStorage.getItem("invoices"));
   cardBox.innerHTML = "";
   invoices.forEach((invoice) => {
      cardBox.innerHTML += `
    <div class="card" onclick="showInvoiceDetail(${invoice.id})">
            <span class="invoice__id"><span>#</span>${invoice.id}</span>
            <span class="invoice__due-date"><span>Due </span> ${invoice.dueDate}</span>
            <span class="invoice__to">${invoice.clientsName}</span>
            <span class="invoice__amount">£${invoice.invoiceAmount}</span>
            <span >
              <span class="invoice__status ${invoice.status}">${invoice.status}</span>
              <img class="right-icon"  src="./assets/img/arrow-right.svg" alt="Right arrow icon">
            </span>
          </div>
    `;
   });
}

// Event listener for your "Save & Send" button
document.querySelector(".save-btn").addEventListener("click", function () {
   // Check for empty inputs before saving the invoice
   if (!hasEmptyInputs()) {
      // No empty inputs,  save the invoice
      saveInvoice("pending");
   }
});

// Event listener for your "Save as Draft" button
document.querySelector(".btn-quaternary").addEventListener("click", function () {
      // Check for empty inputs before saving the draft
      if (!hasEmptyInputs()) {
         // No empty inputs,  save the draft
         saveInvoice("draft");
      }
   });

   // FORM MODAL
function saveInvoice(status) {
  const newInvoice = {
     id: generateUniqueId(),
     sendersStreetAddress: `${
        document.getElementById("sellers-street").value
     }`,
     sendersCity: `${document.getElementById("sellers-city").value}`,
     sendersPostCode: `${document
        .getElementById("sellers-postcode")
        .value.toUpperCase()}`,
     sendersCountry: `${document.getElementById("sellers-country").value}`,
     clientsName: `${document.getElementById("clients-full-name").value}`,
     clientsEmail: `${document.getElementById("clients-email").value}`,
     clientsStreetAddress: `${
        document.getElementById("clients-street").value
     }`,
     clientsCity: `${document.getElementById("clients-city").value}`,
     clientsPostCode: `${document
        .getElementById("clients-postcode")
        .value.toUpperCase()}`,
     clientsCountry: `${document.getElementById("clients-country").value}`,
     issueDate: getIssueDate(),
     dueDate: getDueDate(),
     paymentTerms: `${document.getElementById("terms").value}`,
     itemsList: [],
     status: status,
  };

  // Populate itemsList
  const items = document.querySelectorAll(".items-list .item");
  items.forEach((item) => {
     newInvoice.itemsList.push({
        name: item.querySelector('[name="items-name"]').value,
        itemsPrice: parseFloat(item.querySelector('[name="price"]').value),
        itemsQuantity: parseInt(item.querySelector('[name="quantity"]').value),
        itemTotalPrice: parseFloat(
           item.querySelector(".items-total-price").textContent
        ),
     });
  });

  currentInvoices.push(newInvoice);
  saveInvoicesToLocalStorage();
  showInvoices();
}

function getIssueDate() {
   const now = new Date();
   const year = now.getFullYear();
   const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
   ];
   const month = months[now.getMonth()];
   const day = now.getDate();

   return ` ${day} ${month} ${year}`;
}

function getDueDate() {}

// Generate unique IDs
function generateUniqueId() {
   const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
   const numbers = "0123456789";
   const randomLetters =
      letters[Math.floor(Math.random() * letters.length)] +
      letters[Math.floor(Math.random() * letters.length)];
   const randomNumbers = Array.from(
      { length: 4 },
      () => numbers[Math.floor(Math.random() * numbers.length)]
   ).join("");
   return randomLetters + randomNumbers;
}


const inputs = document.querySelectorAll(".main-modal input");
const errorMessages = document.querySelectorAll(".error-message");
// Function to check if any input has no value
function hasEmptyInputs() {
   let hasEmpty = false;
   inputs.forEach((input) => {
      if (!input.value.trim()) {
         // Add error class to the input
         input.classList.add("error");
         errorMessages.forEach((errorMessage) => {
            errorMessage.style.display = "block";
         });
         hasEmpty = true;
      } else {
         setTimeout(() => {
            // Remove error class if the input has a value
            input.classList.remove("error");
            errorMessages.forEach((errorMessage) => {
               errorMessage.style.display = "none";
            });
         }, 0);
      }
   });

   return hasEmpty;
}

function handleInputs() {
   inputs.forEach((input) => {
      input.addEventListener("input", () => {
         // Remove error class when the user starts typing
         input.classList.remove("error");
         errorMessages.forEach((errorMessage) => {
            errorMessage.style.display = "none";
         });
      });
   });
}
handleInputs();

// Event listener for your "Save & Send" button
