# AngularDay1App

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.0.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

# Day 1: Angular Project Setup & Routing (Standalone Components)

## ✅ Objectives
- Set up a fresh Angular 19 project using standalone components
- Create basic project folder structure with pages
- Configure routing using `provideRouter` and lazy-loaded routes
- Ensure navigation using `<a routerLink="...">` works
---------------------------------Day1-----------------------------------------

# Day 2: Component Communication, Data Binding & Lifecycle Hooks

## ✅ Objectives
- Create `ParentComponent` and `ChildComponent`
- Use `@Input()` and `@Output()` for data flow
- Log lifecycle hooks in console
- Build UI to interact between components

## 🛠 Tasks
1. Show message from Parent in Child via `@Input()`
2. On button click in Child, send message to Parent using `@Output()`
3. Observe lifecycle log messages in browser console
4. Style with basic layout
5. Push changes to GitHub
---------------------------------Day2-----------------------------------------

# Usefull Commands
## Check current changes
git status

## Add and commit
git add .
git commit -m "Day 1: Setup project with routing"

## Push to GitHub
git push -u origin main

