*** Settings ***
Library                         Selenium2Library
Resource      	                ../platformSetting/platformSetting.robot
Resource      	                ../pageElement/branchPage.robot

*** Variables ***
${MLogo}                         css=.navbar-header [data-qa]
${MlanguageDrop}                 css=[data-qa="langDrop"]
${MenglishLanguage}              css=[data-qa="english"]
${MfrenchLanguage}               css=[data-qa="french"]
${McountryField}                 css=[data-qa="country-field"]
${MaddressField}                 css=input[data-qa="address"]
${McurrentLocation}              css=[qa-data="use-current-location"] a
${Msearch-branch}                css=[data-qa="search-branch-name"] a
${MseeAllBranches}               css=#customAutocomplete [ng-click="showIdx \= 100"]
${Mpopup-branch-input}           css=#searchByBranch #customAutocomplete input
${Mpopup-branch-ok}              css=#searchByBranch #customAutocomplete button
${Mpopup-all-branches}           css=#searchByBranch #customAutocomplete a[ui-sref="locations-home"]
${MerrorMessage}                 css=#searchByBranch #customAutocomplete .text-danger
${MstartDateField}               css=[ng-click="status\.pickupOpened \= \!status\.pickupOpened"]
${MstartTimeField}               css=[class="col-xs-6 pad-l-0"] .dropdown-toggle
${MreturnDateField}              css=[ng-click="status\.returnOpened \= \!status\.returnOpened"]
${MreturnTimeField}              css=[class="col-xs-6"] .dropdown-toggle
${Mpickup1AM}                    css=[class="col-xs-6 pad-l-0"] [role="menuitem"]:nth-of-type(3) .ng-binding
${Mreturn1AM}                    css=[class="col-xs-6"] [role="menuitem"]:nth-of-type(3) .ng-binding
${McalendarTitle}                css=button[ng-disabled="datepickerMode === maxMode"] strong
${McalendarLeftButton}           css=.glyphicon-chevron-left
${McalendarRightButton}          css=.glyphicon-chevron-right
${McalendarMonthMay}             css=tbody [ng-repeat="row in rows track by \$index"]:nth-of-type(2) [ng-repeat="dt in row track by dt\.date"]:nth-of-type(2) [ng-class="\:\:\{\'text-info\'\: dt\.current\}"]
${McalendarDateFrist}            css=tbody [ng-repeat="row in rows track by \$index"]:nth-of-type(1) [ng-repeat="dt in row track by dt\.date"]:nth-of-type(4) [ng-class="\:\:\{\'text-muted\'\: dt\.secondary\, \'text-info\'\: dt\.current\}"]
${McalendarDateThird}            css=tbody [ng-repeat="row in rows track by \$index"]:nth-of-type(1) [ng-repeat="dt in row track by dt\.date"]:nth-of-type(6) [ng-class="\:\:\{\'text-muted\'\: dt\.secondary\, \'text-info\'\: dt\.current\}"]
${MpromoField}                   css=homepage-promo-code[data-qa="homepage-promo-code-1"] input
${MfindVehicleButton}            css=.btn-act-green
${Mcancel-yes}                   css=[data-qa="cancel-yes"]
${Mcancel-no}                    css=[data-qa="cancel-no"]
${McalendarTitle}                css=div[ng-switch="datepickerMode"] strong
${McalendarLeftButton}           css=div[ng-switch="datepickerMode"] .glyphicon-chevron-left
${McalendarRightButton}          css=div[ng-switch="datepickerMode"] .glyphicon-chevron-right
${McalendarMonthMay}             css=tbody [ng-repeat="row in rows track by \$index"]:nth-of-type(2) [ng-repeat="dt in row track by dt\.date"]:nth-of-type(2) [type]
${McalendarDateFrist}            css=tbody [ng-repeat="row in rows track by \$index"]:nth-of-type(1) [ng-repeat="dt in row track by dt\.date"]:nth-of-type(4) [ng-class="\:\:\{\'text-muted\'\: dt\.secondary\, \'text-info\'\: dt\.current\}"]
${MfindBranch}                   css=.fa-map-marker
${MmanageReservation}            css=.fa-calendar
${McontactSupport}               css=.fa-phone
${M18.95-rental}                 css=[data-qa="18.95-rental-link"]
${Mgreat-weekend-rates}          css=[data-qa="unlimited-detours-link"]
${Mearn-triple-points}           css=[data-qa="petro-slider-link"]
${Mget-start-button}             css=[data-qa="get-start-button"]
${Mhow-to-load}                  css=[data-qa="how-to-load-link"]
${Moffer-moving-supplies}        css=[data-qa="offer-moving-supplies-link"]

*** Keywords ***
