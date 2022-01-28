function getElement(id) {
  return document.getElementById(id);
}

// serverga ulansh
async function getCurrencies() {
  const response = await fetch('https://www.cbr-xml-daily.ru/daily_json.js');
  const data = await response.json();
  
  console.log(data);
 
  const usdRate = data.Valute.USD.Value.toFixed(2);
  const eurRate = data.Valute.EUR.Value.toFixed(2);
  const uzsRate = data.Valute.UZS.Value.toFixed(2);
  
  const usdElement = document.querySelector('#usd');
  const eurElement = document.querySelector('#eur');
  const uzsElement = document.querySelector('#uzs');
  
  usdElement.innerText = usdRate;
  eurElement.innerText = eurRate;
  uzsElement.innerText = uzsRate;
  getElement('date').innerHTML = 'date: ' + response.date;
  
}
getCurrencies();