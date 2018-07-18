*** Settings ***
Documentation               This suite test for Cambridge login and logout functions
Resource      	            ../Resource/resource.robot
Suite Teardown              Close Browser


*** Test Cases ***

Test Login And Logout Cambridge Website
    [Tags]                                     Smoke
#	Open Browser To Home Page(Local)
	Open Browser To Home Page  BROWSER=Chrome  BROWSER VERSION=47.0  OS=Windows  OS VERSION=7
#    Maximize Browser Window
#	Open Screenshot Session
#    Screenshot                                 mainPage
#    Focus   css=button.Btn.Primary
#    sleep  5
    focus  css=div[id=applet_p_93109] div.Fl-start a
    Click Button  css=div[id=applet_p_93109] div.Fl-start a
    Wait Until Element Is Visible  css=#login-signin
#    screenshot                                 login
#    Close Screenshot Session
	close browser









