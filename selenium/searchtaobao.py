#!/usr/bin/env python
#!-*- coding:utf-8 -*-

from selenium import webdriver
from bs4 import BeautifulSoup
import time
from selenium.webdriver.common.keys import Keys


driver = webdriver.PhantomJS(executable_path='/Users/apple/.nvm/versions/node/v6.0.0/bin/phantomjs')
driver.get('https://www.taobao.com')
driver.find_element_by_id("q").clear()
driver.find_element_by_id('q').send_keys('qq' + Keys.RETURN)

html = driver.page_source
num = 1

soup = BeautifulSoup(html, 'lxml')
while True:
	print "[*] page num : {0} \n".format(num)
	titles = soup.find_all('a', {'class':'J_ClickStat'})
	for title in titles:
		print title.text.strip()
		print title['href']
	elem = driver.find_element_by_class_name('J_Ajax num icon-tag')
	elem.click()
	if driver.page_source.find('icon icon-btn-next-2-disable') >=0 :
		break
	soup = BeautifulSoup(driver.page_source, 'lxml')
	num += 1
	time.sleep(0.5)

print "Done!"

driver.quit()