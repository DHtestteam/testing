import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import { browser } from 'protractor';
import { Given, When, Then } from "cucumber";

const expect = chai.expect;
chai.use(chaiAsPromised);

Given(/^I am on cucumber page with title "(.*?)"$/, (title) => {
    return expect(browser.getTitle()).to.eventually.equal(title);
});

When(/^I type "(.*?)"$/, (text) => {
    browser.get("http://www.google.com/");
    return browser.findElement(By.name("q")).sendKeys(text);
});

Then(/^I click search button$/, () => {
    return browser.actions().sendKeys(protractor.Key.ENTER).perform();
});