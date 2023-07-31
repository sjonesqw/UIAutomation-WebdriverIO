# UIAutomation-WebdriverIO

Using the IDE of your choice or the native terminal. Run the following commands to set up your project directory.
Ensure that your current working directory is where you want to create your project folder:

"mkdir <filename>" - Creates a folder in the directory you're currently in.

"cd <filename>" - Changes your current directory to the folder you just created.

"npm init -y" - Inititalizes the directory as a Nodejs project.

"npm install webdriverio --save" - Installs the webdriverio package in your project.

"npm install @wdio/cli --save-dev" - Installs the webdriverio cli package in your project.

"npx wdio config" - Brings you through the Webdriverio configuration steps

  - Automation backend will be stored on your local machine
  - Select mocha as the framework
  - No, we will not use a compiler
  - accept the default path for spec files
  - Select no for autogenerated test files
  - Yes, we will use pageobjects
  - accept the default path for page objects
  - select 'spec' as the reporter
  - No, we won't be adding a plugin
  - Select 'selenuim-standalone' as the service
  - accept the default localhost suggestion as the base url
  - Yes, we want to run npm install

Now that the project has been created you can go ahead and clone this repo using the following command:

" git clone <repoURL> "


To run the test files use the command: "npm run <testscriptname>". The script names can be found in the package.json file under scripts eg.
"npm run login" to run the login test
