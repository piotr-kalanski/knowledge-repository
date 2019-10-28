from selenium import webdriver
from selenium.webdriver.chrome.options import Options
import time


chrome_options = Options()
chrome_options.add_argument("--proxy-server=socks5://127.0.0.1:9150")

with webdriver.Chrome(executable_path='D:\\Selenium\\chromedriver.exe', options=chrome_options) as driver:
    driver.get('https://www.iplocation.net/find-ip-address')
    time.sleep(20)
