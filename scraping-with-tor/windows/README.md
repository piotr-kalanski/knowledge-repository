# Scraping with tor

tbselenium (https://github.com/webfp/tor-browser-selenium) is not supported at Windows.

Workaround described here: https://stackoverflow.com/questions/49987197/failed-to-launch-tor-browser

One of possible workaround in case if you need privacy is to start Tor (it will use it default port 9150) and use PySocks for routing traffic, Python3 example

```python
import socks
import socket
from urllib.request import urlopen

socks.set_default_proxy(socks.SOCKS5, "localhost", 9150)
socket.socket = socks.socksocket
print(urlopen('http://icanhazip.com').read())
```

Or the same idea using webdriver

```python
from selenium import webdriver
from selenium.webdriver.chrome.options import Options

chrome_options = Options()
chrome_options.add_argument("--proxy-server=socks5://127.0.0.1:9150")
driver = webdriver.Chrome(executable_path='chromedriver', options=chrome_option$

driver.get('https://whatismyipaddress.com/')
```

## Installation

Install tor browser from https://www.torproject.org/download/

## Run

- Start tor browser

- Run python script

        python basic_example.py
