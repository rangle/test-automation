*** Settings ***
Library                     Selenium2Library
Library                     RobotAppEyes
Resource                    ../pageElement/pageElement.robot
Resource                    ../pageElement/homePage.robot
Resource                    ../pageElement/mobileHomePage.robot

*** Variables ***

### Browser Stack Variables ###
${URL}                          https://github.com
${BROWSER LOCAL}                chrome
${DELAY}                        0
${BSUser}
${BSKey}

### Environment Variables ###
${platform}
${testPlatform}
${local}                        local
${use win10 chrome63}           chrome
${use Win7 IE11}                ie
${use osx firefox51}            firefox
${use osx safari11}             safari
${use mobile iphone8}           iphone8
${use mobile galaxy s8}         galaxys8

### Applitools Variables ###
${Applitools-url}               https://github.com
${Applitools-AppName}           github_Website
${Applitools-TestName}          Demo_Test
${Applitools-Key}
${Width}                        1024
${Height}                       768

${OSOverride}                   OSOverride
${BrowserOverride}              BrowserOverride
${MatchLevel}                   CONTENT                      #STRICT, LAYOUT or CONTENT
${True}                         True



*** Keywords ***

Open Browser To Home Page With
    Run Keyword If      '${local}' == '${platform}'                   LOCALHOST            ${Logo}
    Run Keyword If      '${use win10 chrome63}' == '${platform}'      WIN10_CHROME63       ${Logo}
    Run Keyword If      '${use Win7 IE11}' == '${platform}'           WIN7_IE11            ${Logo}
    Run Keyword If      '${use osx firefox51}' == '${platform}'       OSX_FIREFOX57        ${Logo}
    Run Keyword If      '${use osx safari11}' == '${platform}'        OSX_SAFARI11         ${Logo}
    Run Keyword If      '${use mobile iphone8}' == '${platform}'      IOS_IPHONE8          ${Logo}
    Run Keyword If      '${use mobile galaxy s8}' == '${platform}'    ANDROID_GALAXYS8     ${Logo}

LOCALHOST
    [Arguments]     ${Logo}
    Open Browser  url=localhost:9000  browser=chrome
    Maximize Browser Window
    Wait Until Page Contains Element  ${Logo}   timeout=10

WIN10_CHROME63
    [Arguments]     ${Logo}
    Open Browser  url=${URL}  browser=chrome  alias=None  remote_url=http://${BSUser}:${BSKey}@hub.browserstack.com:80/wd/hub  desired_capabilities=browser:Chrome,browser_version:63,os:Windows,os_version:10,resolution:1024x768,browserstack.debug:true
    Maximize Browser Window
    Wait Until Page Contains Element  ${Logo}   timeout=10

OSX_SAFARI11
    [Arguments]     ${Logo}
    Open Browser  url=${URL}  browser=chrome  alias=None  remote_url=http://${BSUser}:${BSKey}@hub.browserstack.com:80/wd/hub  desired_capabilities=browser:Safari,browser_version:11,os:OS X,os_version:High Sierra,resolution:1024x768,browserstack.debug:true
    Maximize Browser Window
    Wait Until Page Contains Element  ${Logo}   timeout=10

WIN7_IE11
    [Arguments]     ${Logo}
    Open Browser  url=${URL}  browser=chrome  alias=None  remote_url=http://${BSUser}:${BSKey}@hub.browserstack.com:80/wd/hub  desired_capabilities=browser:IE,browser_version:11,os:Windows,os_version:7,resolution:1024x768,browserstack.debug:true
    Maximize Browser Window
    Wait Until Page Contains Element  ${Logo}   timeout=10

OSX_FIREFOX57
    [Arguments]     ${Logo}
    Open Browser  url=${URL}  browser=chrome  alias=None  remote_url=http://${BSUser}:${BSKey}@hub.browserstack.com:80/wd/hub  desired_capabilities=browser:Firefox,browser_version:57,os:OS X,os_version:El Capitan,resolution:1024x768,browserstack.debug:true
    Maximize Browser Window
    Wait Until Page Contains Element  ${Logo}   timeout=10

IOS_IPHONE8
    [Arguments]     ${Logo}
    Open Browser  url=${URL}  browser=chrome  alias=None  remote_url=http://${BSUser}:${BSKey}@hub.browserstack.com:80/wd/hub  desired_capabilities=os_version:11.0,device:iPhone 8,real_mobile:true,browserstack.debug:true
    Wait Until Page Contains Element  ${Logo}   timeout=10

ANDROID_GALAXYS8
    [Arguments]     ${Logo}
    Open Browser  url=${URL}  browser=chrome  alias=None  remote_url=http://${BSUser}:${BSKey}@hub.browserstack.com:80/wd/hub  desired_capabilities=os_version:7.0,device:Samsung Galaxy S8,real_mobile:true,browserstack.debug:true
    Wait Until Page Contains Element  ${Logo}   timeout=10

### Applitools Common Keyword ###

Open Screenshot Session
	  Open Eyes Session  ${Applitools-url}     ${Applitools-AppName}    ${Applitools-TestName}     ${Applitools-Key}    matchlevel=${MatchLevel}       includeEyesLog=${True}      httpDebugLog=${True}

Close Screenshot Session
	  Close Eyes Session

Screenshot
    [Arguments]     ${screenshotName}
	  Check Eyes Window  ${screenshotName}  force_full_page_screenshot=${True}   includeEyesLog=${True}   httpDebugLog=${True}
