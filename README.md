# Name It App

Name It is a web application that suggests names based on user keywords. It helps users come up with creative and unique names for their startups, projects, products, or any other purposes. This README file provides an overview of the application, its features, and instructions for running and deploying it.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Deployment](#deployment)

## Features

- **Keyword-based Name Suggestions:** Users can enter a keyword or a phrase related to their project, and the app will generate a list of potential names based on that input.
- **Randomized Suggestions:** The app uses the startup-name-generator library to generate a variety of unique and creative name suggestions for the entered keyword.
- **Responsive Design:** The user interface is designed to be responsive and accessible, ensuring a seamless experience across different devices and screen sizes.

## Tech Stack

The Name It app is built using the following technologies:

- HTML: Markup language for creating the structure of the web pages.
- CSS: Styling language used for designing the user interface.
- React: JavaScript library for building the user interface components.
- JavaScript: Programming language used for the app's logic and functionality.
- startup-name-generator: Third-party library used to generate name suggestions.

## Installation

To run the Name It app locally, follow these steps:

1. Clone the repository: `git clone https://github.com/baluramk6/name-it.git`
2. Navigate to the project directory: `cd name-it`
3. Install the dependencies: `npm install`

## Usage

To start the app locally, run the following command:

```base
npm run dev
```

## Deployment

The Name It app can be easily deployed using Vercel. Vercel is a cloud platform for static sites and serverless functions. To deploy the app, follow these steps:

1. Sign up for a Vercel account at [vercel.com](https://vercel.com).
2. Install the Vercel CLI globally: `npm install -g vercel`
3. Navigate to the project directory: `cd name-it`
4. Run the deployment command: `vercel`
5. Follow the prompts and provide the necessary information when prompted.
6. Once the deployment is successful, Vercel will provide you with the app's URL.

The deployed app can be accessed at: [Name-It](https://name-it-lc.vercel.app/)
