"use strict";
  document.addEventListener('DOMContentLoaded', function () {

    function getIssueDate() {
      const now = new Date();
      const year = now.getFullYear();
      const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May',
      'Jun', 'Jul', 'Aug', 'Sep','Oct', 'Nov', 'Dec']
      const month = months[now.getMonth()];
      const day = now.getDate();

      return ` ${day} ${month} ${year}`

    }
    getIssueDate()
    console.log(getIssueDate());
    function getDueDate() {
    }
    const invoices = JSON.parse(localStorage.getItem('invoices')) || [];

    function generateUniqueId() {
      const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      const numbers = '0123456789';
      const randomLetters = letters[Math.floor(Math.random() * letters.length)] +
        letters[Math.floor(Math.random() * letters.length)];
      const randomNumbers = Array.from({ length: 4 }, () => numbers[Math.floor(Math.random() * numbers.length)]).join('');
      return randomLetters + randomNumbers;
    }
    function saveInvoice(status) {
      const newInvoice = {
        id: generateUniqueId(),
        sendersStreetAddress: `${document.getElementById('sellers-street').value}`,
        sendersCity : `${document.getElementById('sellers-city').value}`,
        sendersPostCode: `${document.getElementById('sellers-postcode').value.toUpperCase()}`,
        sendersCountry: `${document.getElementById('sellers-country').value}`,
        clientsName: `${document.getElementById('clients-full-name').value}`,
        clientsEmail: `${document.getElementById('clients-email').value}`,
        clientsStreetAddress: `${document.getElementById('clients-street').value}`,
        clientsCity: `${document.getElementById('clients-city').value}`,
        clientsPostCode: `${document.getElementById('clients-postcode').value.toUpperCase()}`,
        clientsCountry: `${document.getElementById('clients-country').value}`,
        issueDate: getIssueDate(),
        dueDate: getDueDate(),
        paymentTerms: `${document.getElementById('terms').value}`,
        itemsList: [],
        status: status,
      };

      // Populate itemsList
      const items = document.querySelectorAll('.items-list .item');
      items.forEach(item => {
        newInvoice.itemsList.push({
          name: item.querySelector('[name="items-name"]').value,
          itemsPrice: parseFloat(item.querySelector('[name="price"]').value),
          itemsQuantity: parseInt(item.querySelector('[name="quantity"]').value),
          itemTotalPrice: parseFloat(item.querySelector('.items-total-price').textContent),
        });
      });

      invoices.push(newInvoice);
      localStorage.setItem('invoices', JSON.stringify(invoices));
    }

    document.querySelector('.save-btn').addEventListener('click', function () {
      saveInvoice('pending');
    });

    document.querySelector('.draft-btn').addEventListener('click', function () {
      saveInvoice('draft');
    });
  });
