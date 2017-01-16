#-*- coding: UTF-8 -*-  
import unittest

from selenium import webdriver
from selenium.webdriver.common.keys import Keys


class BaiduSearch(unittest.TestCase):
    
    def setUp(self):
        self.driver = webdriver.Chrome()

    def test_search_in_baidu(self):
        driver = self.driver
        driver.get('http://www.baidu.com')
        self.assertIn(u"百度", driver.title)
        elem = driver.find_element_by_name("wd")
        elem.send_keys("fuck")
        elem.send_keys(Keys.RETURN)
        assert u"www.baidu.com" in driver.page_source

    def tearDown(self):
        self.driver.close()

if __name__ == '__main__':
    unittest.main()
