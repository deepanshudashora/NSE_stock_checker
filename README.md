# NSE Stock Price & PE Ratio Checker

## Overview

NSE Stock Price & PE Ratio Checker is a Chrome extension that allows users to quickly fetch the current stock price and recent news for companies listed on the National Stock Exchange (NSE) of India. The extension uses data from Google Finance to provide up-to-date information.

## Features

- Fetch real-time stock prices for NSE-listed companies
- Display recent news related to the searched company
- Simple and intuitive user interface
- Works directly from your Chrome browser

## Installation

1. Clone this repository or download the ZIP file and extract it.
2. Open Google Chrome and navigate to `chrome://extensions/`.
3. Enable "Developer mode" in the top right corner.
4. Click "Load unpacked" and select the directory containing the extension files.
5. The extension should now appear in your Chrome toolbar.

## Usage

1. Click on the extension icon in your Chrome toolbar.
2. Enter the company name or NSE symbol in the input field.
3. Click the "Check" button or press Enter.
4. The current stock price and recent news will be displayed.

## Sample Output

![images](sample_output.png)

## Files

- `manifest.json`: Defines the extension's properties and permissions.
- `popup.html`: Contains the HTML structure for the extension's popup.
- `popup.js`: Handles the logic for fetching and displaying stock data.

## Dependencies

This extension doesn't require any external libraries. It uses vanilla JavaScript and the Chrome extension API.

## Permissions

The extension requires the following permissions:

- `activeTab`: To interact with the current tab.
- `https://www.google.com/`: To fetch data from Google Finance.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

[MIT License](LICENSE)

## Disclaimer

This extension is for educational purposes only. Stock prices and news are fetched from Google Finance, and the accuracy of the data is not guaranteed. Always verify information from official sources before making any financial decisions.