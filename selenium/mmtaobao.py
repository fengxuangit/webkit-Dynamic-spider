#!/usr/bin/env python
#!-*- coding:utf-8 -*-

import urllib2,re,os,datetime
from selenium import webdriver

class Spider(object):
    def __init__(self):
        self.page = 1
        self.dir = 'test'
        cap = webdriver.DesiredCapabilities.PHANTOMJS
        cap["phantomjs.page.settings.resourceTimeout"] = 1000
        self.driver = webdriver.PhantomJS(desired_capabilities=cap)

    def LoadPageContent(self, page):
        begin_time=datetime.datetime.now()
        url="https://mm.taobao.com/json/request_top_list.htm?page="+str(page)
        self.page += 1

        USER_AGENT = 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36  (KHTML, like Gecko) Chrome/44.0.2403.130 Safari/537.36'
        headers = {'User-Agent': USER_AGENT}

        request=urllib2.Request(url,headers=headers)
        response=urllib2.urlopen(request)

        pattern_link=re.compile(r'<div.*?class="pic-word">.*?<img src="(.*?)".*?'
                            r'<a.*?class="lady-name".*?href="(.*?)".*?>(.*?)</a>.*?'
                            r'<em>.*?<strong>(.*?)</strong>.*?'
                            r'<span>(.*?)</span>'
                             ,re.S)
        items=re.findall(pattern_link,response.read().decode('utf-8', 'ignore'))
        print items


def main():
    a = Spider()
    a.LoadPageContent(1)

if __name__ == '__main__':
    main()
