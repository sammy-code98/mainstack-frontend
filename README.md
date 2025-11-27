# MainStack Frontend Engineer Task

This is a  simple dashboard app designed for mainstack frontend engineer interview task.

## Tech Stack
- Reactjs
- Typescript
- Axios
- React Query
- Vite
- Tailwind CSS


### Figma UI
 Find the original ui for this task on the [Mainstack figma board](https://www.figma.com/design/dHd7ryO9dHNqxkl2fQavrh/Front-End-Test?node-id=1-1532&t=v6mldwHCQNCXuNor-0)

### API Endpoint Url
Checkout the API endpoint Url [Here](https://fe-task-api.mainstack.io)

### Demo Url
Checkout my implementation via this [Link](https://samuel-uzor-mainstack-frontend.vercel.app/)

## Features
- Pixel Perfect Responsive design for various screen sizes
- Filter Funtionality
- Export Transactions as Excel file


### Run Locally

Clone the repo
```bash
git clone <repo url>
```
Cd into project directory
```bash
cd <project directory>
```
Install dependencies
```bash
yarn install
```
Start local server
```bash
yarn dev
```

### Improvements and Next Steps

- **Add Testing:** Improve coverage for edge cases and asynchronous flows
- **Robust Transaction Filter Funtionality:** The current  endpoint for fetching  returns `undefined` when query params is passed to it, to get it functioning properly the backend needs to adjust the endpoint to accept query params and return the right data
- **Improved Schema Validation for Filter Drawer**


## Author

Uzor Samuel

Frontend Engineer

[LinkedIn](https://www.linkedin.com/in/samuel-uzor98/) || [Github](https://github.com/sammy-code98)

