# Front-end Test Assignment (React)

This project is a front-end test assignment for a sneaker collection management web application developed using React. Below, you'll find information about the project's requirements and resources.

## User Guide - Sneaker Collection Management

Welcome to the Sneaker Collection Management application. This guide will help you navigate and use the features of this application effectively.

### Table of Contents

1. [Sneaker Input Form](#sneaker-input-form)
2. [Sneaker Collection](#sneaker-collection)
3. [Sneaker Sorting](#sneaker-sorting)
4. [Query-like Interaction](#query-like-interaction)

#### Sneaker Input Form

The Sneaker Input Form allows you to add new sneakers to your collection. Follow these steps to use this feature:

1. Click on the "Add Sneaker" button or navigate to the "Add Sneaker" section of the application.

2. Fill out the form with the following details for the new sneaker:

    - **Title**: Enter the title or name of the sneaker.
    - **Description**: Optionally, provide a description of the sneaker.

3. Click the "Submit" button to add the sneaker to your collection.

4. If you attempt to submit the form with empty fields, you will receive an error message indicating that the inputs must not be empty. Please fill in all required information before submitting.

#### Sneaker Collection

The Sneaker Collection section displays a list of sneakers in your collection. Here's how you can manage your sneakers:

1. **View Sneakers**: You can view the title and details of each sneaker in your collection.

2. **Delete Sneakers**: To remove a sneaker from your collection, click the "Delete" button next to the sneaker's details. A confirmation prompt may appear to ensure you want to delete the sneaker. Confirm to proceed with deletion.

#### Sneaker Sorting

You have the option to sort your sneakers by different criteria:

1. **Sort by Year**: Click the "Sort by Year" button to arrange your sneakers in ascending order by the year they were released.

2. **Sort by Shoe Size**: Click the "Sort by Shoe Size" button to arrange your sneakers in ascending order by shoe size.

3. **Sort by Price**: Click the "Sort by Price" button to arrange your sneakers in ascending order by price.

#### Query-like Interaction

The application provides a search feature for efficient navigation:

1. **Search by Title**: In the search input field, type the title or name of the sneaker you are looking for.

2. As you type, the displayed sneakers will dynamically update to match your search query, showing only the sneakers whose titles contain the text you entered.

3. You can clear the search input to return to the full list of sneakers.

## Setting up instructions

1.  Clone this project from GitHub
2.  Open terminal and Run the following commands:
    -   npm install
    -   npm start
3.  First, run the development server:

```bash
npm  run  dev
# or
yarn  dev
# or
pnpm  dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Setting up API:

To set up the API, follow these steps:

1. Go to [crudcrud.com](https://crudcrud.com/).

2. Obtain your own REST API instance URL, e.g., [https://crudcrud.com/api/02298cb371ca4cc29c8271f6710bdefe](https://crudcrud.com/api/02298cb371ca4cc29c8271f6710bdefe).
   ``

To retrieve sneakers, use a GET request to [https://crudcrud.com/api/02298cb371ca4cc29c8271f6710bdefe/sneakers](https://crudcrud.com/api/02298cb371ca4cc29c8271f6710bdefe/sneakers).

**Note**: Replace the `crudEndpoint` variable in the file `services/apiCatalog.ts` with your specific API instance URL, e.g., `const crudEndpoint = 'https://crudcrud.com/api/02298cb371ca4cc29c8271f6710bdefe';`.

## Built With (alphabetically)

-   CSS
-   Emotion
-   Express
-   HTML
-   NextJS 13
-   React.JS
-   Typescript
-   Visual Studio Code

## Project Screenshot

![Project screenshot](https://i.ibb.co/TqmPWXF/Screenshot-2023-09-07-120112.jpg)

### Learn More

-   [Emotion.sh](https://emotion.sh/docs/introduction)
-   [Next.JS ](https://nextjs.com/)
-   [React](https://reactjs.org/)
-   [TypeScript](https://www.typescriptlang.org/)
-   [Visual Studio Code](https://code.visualstudio.com)

### Contact

Aneta D - kanardai.dev@email.cz

Portfolio Link: https://github.com/kanardai/by-all-means
