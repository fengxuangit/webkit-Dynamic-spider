from selenium import webdriver
from selenium.webdriver.common.keys import Keys

browser = webdriver.Chrome()
browser.get('http://www.baidu.com')
elem = browser.find_element_by_name("wd")
elem.send_keys("python")
elem.send_keys(Keys.RETURN)
print browser.page_source
