*** Settings ***
Documentation               This suite test for end to end
Resource                    ../platformSetting/platformSetting.robot
Resource      	            ../pageElement/pageElement.robot
Suite Setup                 Run Keywords
...                         Open Browser To Home Page With    AND
...                         Open Screenshot Session
Test Setup                  Go To     ${URL}
Suite Teardown              Run Keywords
...                         Close Screenshot Session    AND
...                         Close All Browsers


*** Test Cases ***

Test For Happy Pass Of Reserve A Car
    [Tags]                                     Smoke
#    Switch The Language To      english                             ## options: english or french
#    Change PickUp Date To 2019 May 1
    Fill Up Reserve A Car Form With The City Name And Use Default PickUp Return Time       Milton ON
#    Screenshot      HomePage
    Click On Find A Vehicle Button On Reseve A Car Form on home page
#    Screenshot      BranchesPage
    Select First Branch On The Branchs List
#    Screenshot      FristBranchInfoPage
    Click On Find A Vehicle Button By Using Default PickUp and Return Time
#    Screenshot      typeVehiclePage
    Select First Type Of Vehicle On The List
    Fill Up Customer Info Form       Jack    Pirate      haharangle@gmail.com    6479752651
#    Screenshot      userInfoPage
    Expand Cost Breakdown Detail info page
#    Screenshot      BreakDownDetailPage
