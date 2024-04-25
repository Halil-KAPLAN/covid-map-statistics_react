# Covid-19 Map - React

View Covid-19 statistics for the country of your choice on the world map. Click on any country on the map to display a comprehensive set of data including **Last Update Date**, **Confirmed Cases**, **Active Cases**, **Deaths**, and **Fatality Rate**.

Review live demo: https://covidmap-b4e42c.netlify.app/

## Tech Stack

**Client:** React(Vite), Vitest, Redux Toolkit, Redux Saga, React Simple Maps, Tailwind CSS

## Screenshots

![alt text](public/screenshots/ss1.png?raw=true)
![alt text](public/screenshots/ss2.png?raw=true)
![alt text](public/screenshots/ss3.png?raw=true)

## Getting Started

Before you begin, make sure you have NodeJS installed on your machine. If not, download and install it along with npm [here](https://nodejs.org/en/). Additionally, ensure you have an editor (such as VSCode: [Visual Studio Code](https://code.visualstudio.com/)).

## Installation

Open a terminal or command prompt inside the project folder and install the dependencies:

```Bash
# Install project dependencies
npm install
```

## Running the Project

After installing the dependencies, start the project by running the following command in the terminal:

```Bash
# Run the project locally
npm run dev
```

Visit http://localhost:5173/ to view in your browser.

## Docker Support

This project is fully dockerised and allows easy installation and deployment. To run the application using Docker, follow these steps:

1. **Build the Docker image:**

```Bash
docker build -t covid-map-app .
```

2. **Run the Docker container:**

```Bash
docker run -p 8080:8080 covid-map-app
```

3. **Access the application:**

Visit http://localhost:8080/ to access the application running in the Docker container.
