const textContainer = document.querySelector('#elementContainer');

// createElement
const newHeader = document.createElement('h1');
newHeader.innerText = 'New header h1';
textContainer.append(newHeader);

// cloneElement
const mainHeader = document.querySelector('header');
const headerCopy = mainHeader.cloneNode(true);
textContainer.append(headerCopy);

// insertAdjacentHTML
const siteTitle = 'siteTitle.io';
const htmlExample = `<h2> ${siteTitle}</h2>`;
textContainer.insertAdjacentHTML('afterbegin', htmlExample)
