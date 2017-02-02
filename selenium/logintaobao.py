#!/usr/bin/env python
#!-*- coding:utf-8 -*-

#https://login.taobao.com/member/login.jhtml?redirectURL=https%3A%2F%2Fwww.taobao.com%2F

from selenium import webdriver
from selenium.webdriver.common.keys import Keys

driver = webdriver.PhantomJS(executable_path='/Users/apple/.nvm/versions/node/v6.0.0/bin/phantomjs')

# driver = webdriver.Chrome()

driver.get('https://login.taobao.com/member/login.jhtml')

driver.execute_script("document.getElementById('J_Quick2Static').click();");

driver.find_element_by_xpath('//*[@id="TPL_username_1"]').clear()
driver.find_element_by_xpath('//*[@id="TPL_password_1"]').clear()

driver.find_element_by_id("TPL_username_1").send_keys('fengxuantaobao') 
driver.find_element_by_id("TPL_password_1").send_keys('fengxuan123480')

driver.find_element_by_id("J_SubmitStatic").click()

print driver.page_source

driver.close()