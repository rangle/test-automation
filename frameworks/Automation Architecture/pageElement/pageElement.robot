*** Settings ***
Library                         Selenium2Library
Resource      	                ../platformSetting/platformSetting.robot


*** Variables ***
${logo}                         css=.list-inline [src="assets\/img\/logo_img\.png"]
${inputCity}                    css=input[id="hi"]
${findVehicle}                  css=[class="col-md-3 col-sm-4 pad-r-0"] [ng-click]
${firstBranchLocation}          css=[ng-include] .hidden-sm [ng-repeat="branch in vm\.locations"]:nth-of-type(1) bc
${firstBranch}                  css=[ng-include] .hidden-sm [ng-repeat="branch in vm\.locations"]:nth-of-type(1) span
${findBehicleButton}            css=[ng-include] .hidden-sm [ng-hide="vm\.freeze"]
${selectVehicle}                css=.col-md-5 button[class="btn btn-act-green maxwidth"]
${confirmRental}                css=button[analytics-event="ConfirmPage-Desktop-ConfirmRental"] span
${firstNameField}               css=input[name="nameField"]
${lastNameField}                css=input[name="LnameField"]
${emailField}                   css=input[name="emailField"]
${phoneNumberField}             css=input[name="phoneField"]
${cancelLink}                   css=[ng-click="\$event\.preventDefault\(\)\; vm\.goModify\(\)"]
${cancelButton}                 css=[class="col-md-3"]:nth-of-type(4) .btn-act-green
${cancelEmailField}             css=[type="email"]
${cancelConfirmMessage}         css=.confirmation-body b

*** Keywords ***
Fill Up Reserve A Car Form With The City Name And Use Default PickUp Return Time
    [Arguments]     ${city}
    Input Text    ${inputCity}   ${city}
    wait until element is visible   css=[ng-hide="loc\.description \=\=\= \'Canada\'"]:nth-of-type(4) [class] .ng-binding       timeout=30
    click element       css=[ng-hide="loc\.description \=\=\= \'Canada\'"]:nth-of-type(4) [class] .ng-binding

Select First Branch On The Branchs List
    click element       ${firstBranch}
    wait until element is visible    ${findBehicleButton}       timeout=30

Click On Find A Vehicle Button By Using Default PickUp and Return Time
    click element       ${findBehicleButton}
    wait until element is visible   css=.default .btn-group .ng-not-empty:nth-of-type(2)        timeout=30

Select First Type Of Vehicle On The List
    click element       css=.default .btn-group .ng-not-empty:nth-of-type(2)
    wait until element is visible   ${selectVehicle}        timeout=30
    Screenshot          TruckVehiclePage
    click element       ${selectVehicle}
    wait until element is visible       ${firstNameField}        timeout=30

Fill Up Customer Info Form
    [Arguments]     ${firstName}    ${lastName}     ${email}    ${phone}
    input text      ${firstNameField}       ${firstName}
    input text      ${lastNameField}        ${lastName}
    input text      ${emailField}       ${email}
    input text      ${phoneNumberField}     ${phone}

Expand Cost Breakdown Detail info page
    click element       css=[ng-show="\!showCost"]

Click On Find A Vehicle Button On Reseve A Car Form on home page
    wait until element is visible   ${findVehicle}    timeout=30
    Click Element       ${findVehicle}
    Wait Until Element Is Visible    ${logo}   timeout=30