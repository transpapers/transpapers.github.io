Feature: Michigan name change support

  # I am not a lawyer or legal scholar. Please be nitpicky about minutia.
  Background:
    Given I am a transgender person
    And I have resided in the state of Michigan for at least a year
    In order to legally change my name

  Scenario: Name Change Base
    Given I have a driver's license or state identification or a birth certificate
    And I do not have good cause to withhold notice of proceedings
    When I submit the web form
    Then I should see Michigan form PC 51 (Petition to Change Name)
    And I should see Michigan form MC 97a (Addendum to Personal Protected Identifying Information)
    And I should see Michigan form PC 50 (Publication of Notice of Hearing Regarding Petition for Name Change)
    And I should see Michigan form MC 20 (Fee Waiver Request)

  Scenario: Name Change Michigan Resident
    Given that I was born in the state of Michigan
    When I submit the web form
    Then I should see Michigan form DCH-0847-CHGBX (Application to Correct or Change a Michigan Birth Record)

  Scenario: Name Change Confidential
    Given I have a driver's license or state identification or a birth certificate
    And I have good cause to withhold notice of proceedings
    When I submit the web form
    Then I should see Michigan form PC 51c (Petition for Name Change And Ex Parte Request for Nonpublication and Confidential Record)
    But I should not see Michigan form PC 51 (Petition to Change Name)
