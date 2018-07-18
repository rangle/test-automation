# TestCafe Installation

* Install `node.js' (prerequisite)
* Run npm install -g testcafe


# Running tests

* testcafe chrome specs/ (will run tests on QA env)
* testcafe chrome specs/ --env=local (will run tests on local env)
* More info at http://devexpress.github.io/testcafe/documentation/using-testcafe/command-line-interface.html

# Features

* No manual timeouts: TestCafe automatically waits for page loads and XHRs before the test starts and after each action.
* Write in latest JS or TypeScript: TestCafe supports the latest JavaScript features, including ES2017 (for example, async/await). You can also use TypeScript if you prefer a strongly typed language.
* Detect JS errors in your code: TestCafe reports JS errors that it finds on the webpage. Tests automatically fail because of that.
* Launch concurrent tests: TestCafe can open multiple instances of the same browser to run parallel tests which decreases test execution time.
* Build readable tests using the PageObject pattern
* Include tests in continuous integration system: You can run TestCafe from a console, and its reports can be viewed in a CI system's interface (TeamCity, Jenkins, Travis & etc.)
* Rapid test development: With a free plugin to edit your TestCafe tests on the fly. Changes you make in the code will immediately restart the tests. And you'll see test results instantly.
* Works on all popular environments: TestCafe runs on Windows, MacOS, and Linux. It supports desktop, mobile, remote and cloud browsers (UI or headless).
* 1 minute to set up: You do not need WebDriver or any other testing software like Selenium. Install TestCafe with one command, and you are ready to test.
* Free and open source

