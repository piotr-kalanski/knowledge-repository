from tbselenium.tbdriver import TorBrowserDriver


PATH_TO_TOR_BROWSER_BUNDLE = 'TODO'

with TorBrowserDriver(PATH_TO_TOR_BROWSER_BUNDLE) as driver:
    driver.get('https://check.torproject.org')