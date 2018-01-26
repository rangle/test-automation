# Running E2E tests

The end to end (E2E) tests are created using the [Robot Framework](http://robotframework.org/). Robot Framework is a testing utility written in Python that uses Selenium under the hood to control a web browser and impersonate a user. In an ideal setup, we use Robot Framework alongside [AppEyes](https://github.com/NaviNet/Robot-AppEyes) and [BrowserStack](https://www.browserstack.com/).

**AppEyes** is a Robot Framework extension developed by [Aplitools](https://applitools.com/) for visual software testing verification, that requires the creation of an account to use it (and paying eventually). To run the E2E tests locally you can skip creating an account but you still need to install the dependency for the tests to run.

**BrowserStack** is a cloud service that allows to run the E2E test in multiple platforms (Windows, Mac, Linux) with multiple browsers (Chrome, IE, Firefox, etc.) all at once. This is a paid tool and we can skip it for local usage but it's recommended for continuous integration.

## Installation and Usage for Local

1. Install pip following the instructions found [here](https://pip.pypa.io/en/stable/installing/).

2. Install Robot Framework

```
pip install robotframework
```

3. Install the Selenium extension for Robot Framework

```
sudo pip install robotframework-selenium2library
```

4. Install Robot App Eyes

```
sudo pip install Robot-AppEyes
```

5. Install chrome driver (or download and put it in bin folder)

```
brew install chromedriver
```

6. Run the tests

```
pybot -v BSUser:"browser stack user name" -v BSKey:"browser stack keyword" -v platform:"test paltform keyword" -v Applitools-Key:"applitools keyword" -v Applitools-TestName:"applitools test case name" -d e2e/results e2e/testCase/"test case name".robot
```

If the user is `john` and the password is `1234` the command will look like this:

```
pybot -v BSUser:"John" -v BSKey:"1234" -v platform:"chrome" -v Applitools-Key:"12345" -v Applitools-TestName:"descktopE2E" -d e2e/results e2e/testCase/"E2E".robot
```

> Quotes are important to preserve passwords with special characters that might be interpreted by the shell

## Installation and Usage for CI  If you Running in Local

Follow the steps `1` to `5` shown before and then:

6. Download browser stack binary from this [link](https://www.browserstack.com/local-testing)

7. Change the permission of the folder:

```
sudo chmod 777 BrowserStackLocal
```

8. Enable Browser Stack

```
./BrowserStackLocal -force -forcelocal <browser stack access key>
```

7. Clone the fork and run the test

```
pybot -v BSUser:"browser stack user name" -v BSKey:"browser stack keyword" -v platform:"test paltform keyword" -v Applitools-Key:"applitools keyword" -v Applitools-TestName:"applitools test case name" -d e2e/results e2e/testCase/"test case name".robot
```

The possible values for the argument `platform` are:

- `local`: Use local Chrome
- `ie`: Use IE11 on Windows 10
- `chrome`: Use Chrome63 on Windows 10
- `firefox`: Use Firefox57 on Windows 10
- `safari`: Use Safari11 on Mac
- `iphone8`: User safari on iPhone
- `galaxys8`: User chrome on SamSung Galaxy S8
