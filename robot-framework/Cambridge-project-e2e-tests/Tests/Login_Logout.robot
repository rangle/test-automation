*** Settings ***
Documentation               This suite test for Cambridge login and logout functions
Resource      	            ../Resource/resource.robot
Suite Teardown              Close Browser


*** Test Cases ***

Test Login And Logout Cambridge Website
    [Tags]                                     Smoke
#	Open Browser To Home Page(Local)
###     windows 7 with chrome.47.0      ###
	Open Browser To Home Page  BROWSER=Chrome  BROWSER VERSION=47.0  OS=Windows  OS VERSION=7
###     windows 7 with firfox.43.0      ###
#	Open Browser To Home Page  BROWSER=Firefox  BROWSER VERSION=43.0  OS=Windows  OS VERSION=7
###     windows 7 with IE.11.0        ###
#    Open Browser To Home Page  BROWSER=IE  BROWSER VERSION=11.0  OS=Windows  OS VERSION=7
###     windows 8 with chrome.47.0      ###
#	Open Browser To Home Page  BROWSER=Chrome  BROWSER VERSION=47.0  OS=Windows  OS VERSION=8
###     windows 8 with firfox.43.0      ###
#	Open Browser To Home Page  BROWSER=Firefox  BROWSER VERSION=43.0  OS=Windows  OS VERSION=8
###     windows 8.1 with chrome.47.0        ###
#	Open Browser To Home Page  BROWSER=Chrome  BROWSER VERSION=47.0  OS=Windows  OS VERSION=8.1
###     windows 8.1 with firfox.43.0     ###
#	Open Browser To Home Page  BROWSER=Firefox  BROWSER VERSION=43.0  OS=Windows  OS VERSION=8.1
###     windows 10 with edge.12.0       ###
#	Open Browser To Home Page  BROWSER=Edge  BROWSER VERSION=12.0  OS=Windows  OS VERSION=10
###     windows 10 with IE.11.0     ###
#	Open Browser To Home Page  BROWSER=IE  BROWSER VERSION=11.0  OS=Windows  OS VERSION=10

	Open Screenshot Session
    Screenshot                                 loginPage
    Input Username                             jyu
    Input Password                             Cambridge
    Submit Credentials
    Screenshot                                 mainPage

    Close Screenshot Session
	close browser








