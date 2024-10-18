[![Open in Codespaces](https://classroom.github.com/assets/launch-codespace-2972f46106e565e64193e422d61a12cf1da4916b45550586e14ef0a7c637dd04.svg)](https://classroom.github.com/open-in-codespaces?assignment_repo_id=16310135)
# MaterialUI - Vite.js Syllabus Activity

## How to use

Install it and run:

```bash
yarn install
yarn run dev
```

## The idea behind the example

This example uses [Vite.js](https://github.com/vitejs/vite).
It includes `@mui/material` and its peer dependencies, including [Emotion](https://emotion.sh/docs/introduction), the default style engine in MaterialUI v6.

## What's your task?

### Fetch Data from Syllabus API:
- Instead of using hardcoded rows in the useEffect, make an API request to fetch the data from the Syllabus API. Use the following endpoint: [courses.ianapplebaum.com/api](https://courses.ianapplebaum.com/public/docs/). I will provide you the API key to your group.
- You can use fetch() Links to an external site. or axios Links to an external site. to make the API request. Update the state with the fetched data to display it in the DataGrid Links to an external site..
- **Hint** you should use the useEffect Links to an external site. hook to make the call. Also you will have to place the API key in your project which is **BAD PRACTICE**, we will talk about securing keys in another class.
Display the Current Event:

Dynamically update the "Current Event" card to display details of the event occurring on the current date (if available).
If no event matches the current date, display a placeholder message like "No event today."

More information on Canvas. Start editing in `src/App.jsx`.

