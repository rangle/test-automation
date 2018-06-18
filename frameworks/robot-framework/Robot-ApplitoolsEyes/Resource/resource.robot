*** Settings ***
Library                         Selenium2Library
Library                         RobotAppEyes




*** Variables ***
${URL}                          http://www.ebay.ca/
${BROWSER LOCAL}                chrome
${DELAY}                        0


### Login Page Elements ###
${loginForm}                    css=form.loginForm
${userName}                     css=#username
${password}                     css=#password
${loginButton}                  css=input.btn.loginButton



### Applitools Variables ###
${Applitools-url}               https://ca.yahoo.com/
${Applitools-AppName}           Cambridge_Website
${Applitools-TestName}          Demo_Test
${Applitools-Key}               m7koXQC0Pzt3Lg4gU4NgisRJsEAf9zwuLA3102IK1qIis110       #NhBEEo1frQRbYyUGLZmeazh2s107RAkBMmt6n6ylcsw108w110
${Width}                        1024
${Height}                       768

${OSOverride}                   OSOverride
${BrowserOverride}              BrowserOverride
${MatchLevel}                   LAYOUT
${True}                         True


*** Keywords ***


Open Browser To Home Page(Local)
	Open Browser  ${URL}  ${BROWSER LOCAL}
	Maximize Browser Window
    Wait Until Element Is Visible  css=a.gf-bttl.thrd[href="http://www.ebay.ca/sch/allcategories/all-categories"]

Open Browser To Home Page
	[Arguments]  ${BROWSER}  ${BROWSER VERSION}  ${OS}  ${OS VERSION}
	Open Browser  url=${URL}  browser=chrome  alias=None  remote_url=http://rehanarajwani1:bwrxEqELu83iJs4DsBws@hub.browserstack.com:80/wd/hub  desired_capabilities=browserstack.local:true,browser:${BROWSER},browser_version:${BROWSER VERSION},os:${OS}, os_version:${OS VERSION},resolution:1680x1050
    Wait Until Element Is Visible  css=a.gf-bttl.thrd[href="http://www.ebay.ca/sch/allcategories/all-categories"]

Open Screenshot Session
	Open Eyes Session  ${Applitools-url}     ${Applitools-AppName}    ${Applitools-TestName}     ${Applitools-Key}      width=${Width}      height=${Height}   includeEyesLog=${True}

Close Screenshot Session
	Close Eyes Session

Screenshot
    [Arguments]  ${screenshotName}
	Check Eyes Window  ${screenshotName}  ${True}

Input Username
    [Arguments]    ${userNameVariable}
    Input Text     ${userName}    ${userNameVariable}

Input Password
    [Arguments]    ${passwordVariable}
    Input Text     ${password}    ${passwordVariable}

Submit Credentials
    Click Button    ${loginButton}
    Wait Until Element Is Visible  css=div.headBG.clearfix


