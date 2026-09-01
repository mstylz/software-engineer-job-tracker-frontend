# Software Engineer Job Tracker

Software Engineer Job Tracker is a responsive React application that helps users browse and search software engineering job listings from The Muse API.

## Live Project

https://job-tracker.jumpingcrab.com

## Project Pitch Video

Check out [this project pitch video](https://www.loom.com/share/35ba853a493d4bc1be9d21c1986a79ee), where I demonstrate the project, explain how it works, discuss challenges I faced, and describe what I learned while building it.

## Features

- Browse current software engineering job listings
- Search jobs by title, company, or location
- Display three jobs initially
- Load three additional jobs at a time with the Show More button
- Save jobs for later review with local browser persistence
- Remove saved jobs
- View saved jobs on a separate protected route
- Display loading, empty-result, and API error states
- Responsive layout for desktop, tablet, and mobile
- Mock login and registration using localStorage
- Persist the authenticated user across page refreshes
- Hide save functionality from unauthorized users
- Display the authenticated user's name or email with a logout button
- Modal closing by close button, overlay click, and Escape key
- Form validation and focus states
- Reusable form state and validation hook

## Technologies

- React
- React Router
- Vite
- JavaScript
- CSS
- BEM methodology
- Fetch API
- LocalStorage
- The Muse API
- Nginx
- Google Cloud Compute Engine

## API

The project uses The Muse public jobs API.

API endpoint:

https://www.themuse.com/api/public/jobs

Software engineering jobs are requested from The Muse and then displayed as reusable React components.

API requests are handled in:

```text
src/utils/JobsApi.js
```

## Authentication

Stage 1 uses mocked frontend authentication as required for project review.

Login and registration form values are collected and validated in React. The authenticated user's name or email is stored in `localStorage`, allowing the mocked login state to persist after a page refresh.

Passwords are used only for form validation and are not stored.

Logging out removes the current authenticated user from localStorage.

## Saved Jobs

Only authenticated users can save or remove jobs.

Saved jobs are stored in `localStorage`, so they remain available after refreshing the browser or logging out and signing back in from the same browser.

Unauthorized users do not see Save Job controls or Saved Jobs navigation.

## Routes

The application contains two main frontend routes:

```text
/
```

Main job search page.

```text
/saved-jobs
```

Protected saved jobs page. Unauthorized users are redirected to the main route.

React Router handles client-side navigation. The deployed Nginx configuration uses an SPA fallback so direct requests to `/saved-jobs` are served correctly before React handles the protected route.

## Project Structure

```text
src/
├── components/
│   ├── About/
│   ├── ApiError/
│   ├── Footer/
│   ├── Header/
│   ├── JobCard/
│   ├── JobCardList/
│   ├── LoginModal/
│   ├── Main/
│   ├── ModalWithForm/
│   ├── Navigation/
│   ├── NothingFound/
│   ├── Preloader/
│   ├── ProtectedRoute/
│   ├── RegisterModal/
│   ├── SavedJobs/
│   └── SearchForm/
├── fonts/
│   ├── Inter-Bold.ttf
│   ├── Inter-Medium.ttf
│   ├── Inter-Regular.ttf
│   └── Inter-SemiBold.ttf
├── hooks/
│   └── useFormAndValidation.js
├── images/
│   └── hero.png
├── utils/
│   ├── constants.js
│   └── JobsApi.js
├── vendor/
│   └── normalize.css
├── App.css
├── App.jsx
├── index.css
└── main.jsx
```

## Local Development

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Run ESLint:

```bash
npm run lint
```

Create a production build:

```bash
npm run build
```

## Deployment

The frontend is deployed on Google Cloud Compute Engine and served with Nginx and HTTPS.

Live application:

https://job-tracker.jumpingcrab.com
