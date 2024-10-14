document.getElementById('checkStock').addEventListener('click', async () => {
  const companyName = document.getElementById('companyInput').value.trim().toUpperCase();

  if (companyName === "") {
    showMessage("Please enter a company name.", "error");
    return;
  }

  // Mapping common company names to NSE symbols
  // These mappings are only for future enhancement purpose, Not putting any impact in the current code execution. 
  const companyMapping = {
    "RELIANCE": "RELIANCE",
    "TCS": "TCS",
    "INFOSYS": "INFY",
    "HDFC": "HDFCBANK",
    "ICICI": "ICICIBANK",
    // Add more mappings as needed
  };

  // Normalize user input to match a company symbol
  const symbol = companyMapping[companyName] || companyName;

  showMessage("Fetching data...", "info");

  try {
    const stockData = await fetchStockData(symbol);
    updateUI(stockData);
  } catch (error) {
    console.error('Error fetching stock data:', error);
    showMessage("Could not fetch stock data. Please try again later.", "error");
  }
});

async function fetchStockData(symbol) {
  const url = `https://www.google.com/finance/quote/${symbol}:NSE`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const html = await response.text();
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");

    // Helper function to extract data
    const extractData = (selector) => {
      const element = doc.querySelector(selector);
      return element ? element.textContent.trim() : 'N/A';
    };

    // Extract news items
    const newsItems = Array.from(doc.querySelectorAll('div.yY3Lee')).slice(0, 5).map(item => {
      const title = item.querySelector('div.Yfwt5')?.textContent.trim() || '';
      const source = item.querySelector('div.sfyJob')?.textContent.trim() || '';
      return { title, source };
    });

    return {
      price: extractData('.YMlKec.fxKbKc'),
      change: extractData('.JwB6zf span'),
      news: newsItems
    };
  } catch (error) {
    console.error('Error scraping stock data:', error);
    throw new Error('Failed to fetch stock data');
  }
}

function updateUI(data) {
  document.getElementById('price').textContent = data.price;

  const newsListElement = document.getElementById('newsList');
  newsListElement.innerHTML = '';
  data.news.forEach(item => {
    const li = document.createElement('li');
    li.innerHTML = `<strong>${item.title}</strong> - <em>${item.source}</em>`;
    newsListElement.appendChild(li);
  });

  document.getElementById('result').style.display = 'block';
  document.getElementById('message').style.display = 'none';
}

function showMessage(message, type) {
  const messageElement = document.getElementById('message');
  messageElement.textContent = message;
  messageElement.className = type;
  messageElement.style.display = 'block';
  document.getElementById('result').style.display = 'none';
}