<<<<<<< HEAD
# Student Task Manager

A small React app for adding, completing, filtering and deleting tasks.

## Run it
```bash
npm install
npm run dev
```

## Features
- Add tasks (empty input is rejected with an error message)
- Mark tasks completed / pending with a checkbox
- Delete tasks (with a confirmation prompt)
- "No tasks available" empty state
- Stats: total, completed, remaining
- Filter: All / Pending / Completed
- Reusable `Card` component using `children`
- `ErrorBoundary` fallback UI if the task list fails to render

## Component structure
```
App
├── Card > TaskForm
├── Card > TaskStats
└── Card
    ├── FilterBar
    └── ErrorBoundary > TaskList > TaskItem
```

## Submit
```bash
git init && git add . && git commit -m "Student Task Manager"
git remote add origin https://github.com/your-username/student-task-manager.git
git push -u origin main
```
=======
# -student-task-manager
>>>>>>> 079baa5703904dbd73dce09c30384d69fdadd673
