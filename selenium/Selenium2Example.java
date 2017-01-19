package com.evalshell.cn.example;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedCondition;
import org.openqa.selenium.support.ui.WebDriverWait;

/**
 * Created by fengxuan on 17/1/19.
 */
public class Selenium2Example {

    public static void main(String[] args){

        if (args.length < 2){
            System.out.println(String.format("Usage: %s keyword %n", args[0]));
            System.exit(-1);
        }

        final String keyword = (String )args[1];

        WebDriver driver = new ChromeDriver();

        driver.get("http://www.baidu.com");

        WebElement element = driver.findElement(By.name("wd"));

        element.sendKeys(keyword);

        element.submit();

        System.out.println("Page title is: "+driver.getTitle());

        (new WebDriverWait(driver, 5)).until(new ExpectedCondition<Boolean>() {

            public Boolean apply(WebDriver webDriver) {
                return webDriver.getTitle().toLowerCase().startsWith(keyword);
            }
        });

        System.out.println("Page title is: "+driver.getTitle());

        System.out.println("Pagesource: " + driver.getPageSource());

        driver.quit();

    }

}
