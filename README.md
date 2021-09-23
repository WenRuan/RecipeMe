# RecipeMe
Plates App

## Basic IDE/Environment Setup
We will be using Visual Studio Code IDE for this Project. All instructions will be written for VSCode.
You can install VSCode at https://code.visualstudio.com/

For version control we will be using Git and Github.
Install Git at https://git-scm.com/ or install it inside VSCode

Our current tech stack consist of:
Web Front-end - ReactJs
Mobile Front-end - React Native
Desktop Front-end - React+Electron
Back-end - Python (Flask Framework)
Server - AWS
Database - MySQL, PostgreSQL

Once installed, use Git inside of VSCode to clone the main branch.

## Git Procedures
When working on the code, please create a seperate branch to work on.
When using the git terminal, type (without the ")
```bash
git checkout -b "name of branch"
```
This will create a new branch and change your current branch to that branch.

To move back to the main branch, type (without the ")
```bash
git checkout "name of branch"
```

To push your branch, type (without the ")
```bash
git push origin "name of your branch"
```

Once pushed, log in to the github on your browser, navigate to the branch and submit a pull request.
If there is no conflicts, feel free to merge the branch to the main branch.
Delete your branch after.

## FRONTEND WEBSITE
### Purpose
Front-end user interface for interacting with recipes and shopping list functions. 

### Installation Instructions
To install the dependencies necessary for the front-end we need to install npm.

To install Reactjs into your project you simply need to install node.js
Go to nodejs.org and install the lastest version. LTS.

Follow the launcher and install nodejs to your computer and add it to your path.
Once installed, launch VSCode and navigate to your project folder.
To access the terminal in VSCode use the shortcut Ctrl + `

In the folder, all components will be held in src/components and the main react file will be index.js

To start the development for ReactJs:
-Change directory to RecipeMe/plates
-Run the following command in the powershell to start development mode
```bash
npm start
```
This will open up a browser page with the current js code running.
@@@If you run into an error, use the command
```bash
npm install
```

## Backend
### Purpose
Powered by Flask, the backend is functioning as a RESTful interface between the React App and the Relational Database.

### Installation Instructions
Before installing, it is recommended to create a virtual environment. This is to keep consistency in the project and be sure there will be no intereference by PC-wide libaries / Python versions.

This project requires Python, specifically version 3.9.

First, create the virtual environment within the backend folder

On Windows
```bash
python -m venv env
```

On MacOS / Linux
```bash
python3 -m venv env
```

Then enter the virtual environment

On Windows
```bash
env/scripts/activate
```

On MacOS / Linux
```bash
source env/bin/activate
```

Next, install via PIP the dependencies. This is made easy via the reuqirements.txt file supplied
```bash
pip install -r requirements.txt
```

Once installed, enter the web-service folder and set the Flask App
On Windows
```bash
set FLASK_APP=wsgi.py
```

On MaxOS / Linux:
```bash
export FLASK_APP=wsgi.py
```

Then to run Flask, simply type
```bash
flask run
```

And you are successfully running the RESTful app!

### Running Tests with Pytest
Unit, functional, and end-to-end tests will have been created in the test folder of the webservice (backend/web-service/test). To run the tests, simply enter the virtual environment and run the command pytest

Enter the virtual environment

On Windows:
```bash
env/scripts/activate
```

On MacOS / Linux
```bash
source env/bin/activate
```

Then run pytest in any folder of 'test' and all downstream tests will run. **BE SURE TO HAVE THE FLASK APP RUNNING BEFORE RUNNING TESTS**
```bash
pytest
```
