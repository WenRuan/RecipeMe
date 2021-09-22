# RecipeMe
Recipe App


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
