*** Settings ***
Library                         Selenium2Library
Resource      	                ../platformSetting/platformSetting.robot

*** Variables ***
${Logo}                         css=[class="header-logo-invertocat my-0"] [aria-hidden]
${SignIn}                       css=[class] .text-white.no-underline:nth-of-type(1)
${usernameField}                css=.bubble-content [accept-charset] .form-control:nth-child(3)
${passwordField}                css=.bubble-content [accept-charset] .form-control:nth-child(5)
${SignInButton}                 css=.bubble-content button
${hamburgerNemu}                css=[type] [aria-hidden]
${SignOutOption}                css=[href="\/logout"]
${LogoutButton}                 css=.auth-form-body [type]
${LoginError}                   css=.flash-error .container

*** Keywords ***
Verify With Correct Username And Password For Login Function
    [Arguments]     ${username}     ${password}
    wait until element is visible   ${SignIn}
    click element   ${SignIn}
    wait until element is visible   ${usernameField}
    Input Text      ${usernameField}    ${username}
    Input Text      ${passwordField}    ${password}
    click element   ${SignInButton}
    wait until element is visible   ${hamburgerNemu}

Log Out Of Account
    wait until element is visible   ${hamburgerNemu}
    click element   ${hamburgerNemu}
    wait until element is visible   ${SignOutOption}
    click element   ${SignOutOption}
    wait until element is visible   ${LogoutButton}
    click element   ${LogoutButton}
    wait until element is visible   ${SignIn}

Verify With Incorrect Username And Password For Login Function
    [Arguments]     ${username}     ${password}
    wait until element is visible   ${SignIn}
    click element   ${SignIn}
    wait until element is visible   ${usernameField}
    Input Text      ${usernameField}    ${username}
    Input Text      ${passwordField}    ${password}
    click element   ${SignInButton}
    wait until element is visible   ${LoginError}