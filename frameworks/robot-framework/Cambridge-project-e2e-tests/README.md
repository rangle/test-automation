# Robot-BrowserStack
Robot Framework template for testing with Applitools Eyes using browserstack through VPN.

installation:

install pip (follow the instruction)
```sh
https://pip.pypa.io/en/stable/installing/
```
install robotframework
```
pip install robotframework
```
install selenium2 library
```
sudo pip install robotframework-selenium2library
```
install robot app eyes
```
sudo pip install Robot-AppEyes
```
install chrome driver (or download and put it in bin folder)
```
brew install chromedriver
```
download browser stack binary
```
https://www.browserstack.com/local-testing
sudo chmod 777 BrowserStackLoal
./BrowserStackLocal -force -forcelocal <browser stack access key>
```
clone the fork and run the test
```
pybot -d results Tests/Login_Logout.robot
```




