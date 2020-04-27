Feature: To search protractor in google

    @CucumberScenario
    Scenario: Protractor Google
      Given I am on cucumber page with title "Google"
      When I type "cucumber"
      Then I click search button
