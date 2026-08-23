# Software Engineer Job Tracker

Software Engineer Job Tracker is a responsive React application that helps users browse and search software engineering job listings from The Muse API.

## Live Project

https://job-tracker.jumpingcrab.com

## Features

- Browse current software engineering job listings
- Search jobs by title, company, location, or description
- Display three jobs initially
- Load three additional jobs at a time with the Show More button
- Save jobs for later review during the current session
- Remove saved jobs
- View saved jobs on a separate route
- Display loading, empty-result, and API error states
- Responsive layout for desktop, tablet, and mobile
- Login and registration modal interfaces
- Modal closing by close button, overlay click, and Escape key
- Form validation and focus states

## Technologies

- React
- React Router
- Vite
- JavaScript
- CSS
- BEM methodology
- Fetch API
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

## Routes

The application contains two main frontend routes:

```text
/
```

Main job search page.

```text
/saved-jobs
```

Saved jobs page.

React Router handles client-side navigation. The deployed Nginx configuration uses an SPA fallback so direct requests to `/saved-jobs` are served correctly.

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
│   ├── RegisterModal/
│   ├── SavedJobs/
│   └── SearchForm/
├── fonts/
│   ├── Inter-Bold.ttf
│   ├── Inter-Medium.ttf
│   ├── Inter-Regular.ttf
│   └── Inter-SemiBold.ttf
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
