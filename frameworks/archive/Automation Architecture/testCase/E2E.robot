*** Settings ***
Documentation               This suite test for end to end
Resource                    ../platformSetting/platformSetting.robot
Resource                    ../pageElement/homePage.robot
Suite Setup                 Run Keywords
...                         Open Browser To Home Page With    AND
...                         Open Screenshot Session
Test Setup                  Go To     ${URL}
Suite Teardown              Run Keywords
...                         Close Screenshot Session    AND
...                         Close All Browsers

*** Test Cases ***

Test For github WebPage
    Verify With Correct Username And Password For Login Function        haharangle@gmail.com        rangle999
    Log Out Of Account
    Verify With Incorrect Username And Password For Login Function      haharangle@gmail.com        fake