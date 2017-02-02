#!/usr/bin/env python
#!-*- coding:utf-8 -*-

from selenium import webdriver
from selenium.webdriver.common.keys import Keys

class GoogleSearch():
	def __init__(self):
		self.driver = webdriver.PhantomJS(executable_path='/Users/apple/.nvm/versions/node/v6.0.0/bin/phantomjs')

	def test_search_in_google(self):
		driver = self.driver
		driver.get('https://www.baidu.com/s?wd=phantomjs')
		elem = driver.find_element_by_class_name('nums')
		print elem.text



def main():
	a = GoogleSearch()
	a.test_search_in_google()

if __name__ == '__main__':
	main()