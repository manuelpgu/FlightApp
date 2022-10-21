package com.example.packages.selenium;

import static org.assertj.core.api.Assertions.assertThat;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import io.github.bonigarcia.wdm.WebDriverManager;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.time.Duration;

class ChromeTest {

    WebDriver driver;

    @BeforeAll
    static void setupClass() {
        WebDriverManager.chromedriver().setup();
    }

    @BeforeEach
    void setupTest() {
        driver = new ChromeDriver();
    }

    @AfterEach
    void teardown() {
        driver.quit();
    }

    @Test
    void testIndexPage() {
        // Exercise
        driver.get("http://localhost:3000/");
        String title = driver.getTitle();

        // Verify
        assertThat(title).contains("Students CRUD");
    }

    @Test
    void testAddStudent() throws InterruptedException {
        // Exercise
        driver.get("http://localhost:3000/");
        String title = driver.getTitle();
        driver.findElement(By.name("add-student")).click();
        WebElement nameInput = new WebDriverWait(driver, Duration.ofSeconds(5))
                .until(ExpectedConditions.elementToBeClickable(By.name("name")));
        nameInput.sendKeys("test-name");
        driver.findElement(By.name("email")).sendKeys("test_email@email.com");
        WebElement dobElement = driver.findElement(By.xpath("/html/body/div/div/form/div[3]/div/input"));
        dobElement.clear();
        dobElement.sendKeys("1/1/2001");
        driver.findElement(By.xpath("/html/body/div/div/form/button")).click();
        WebElement indexAddStudentBtn = new WebDriverWait(driver, Duration.ofSeconds(10))
                .until(ExpectedConditions.elementToBeClickable(By.name("add-student")));

        WebElement newlyAddedStudentName = driver.findElement(By.name("test-name"));
        assertThat(newlyAddedStudentName.toString()).contains("test-name");
    }



}