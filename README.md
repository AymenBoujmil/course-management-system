# Course Management System

This project is a course management system.

There is 2 roles of membership a Student and Instructor.

The Instructor can search for courses and create a new course. Although the Student can only search for courses.

The user must be logged in to have access into the system.

## Installation

So first of all we need to have node installed in our device.

To start a new Create React App project with TypeScript, We can run:
```bash
npx create-react-app my-app --template typescript
```
Then After installing the react app, we can also install other modules that we will need in our project.

### Bootstrap
React-Bootstrap replaces the Bootstrap JavaScript. Each component has been built from scratch as a true React component, without unneeded dependencies like jQuery.
```bash
npm i react-bootstrap bootstrap 
```
### React Router
React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.
```bash
npm install react-router react-router-dom
```
### React Icons
Include popular icons in your React projects easily with react-icons, which utilizes ES6 imports that allows you to include only the icons that your project is using.
```bash
npm install react-icons 
```

### React datepicker
The date picker let the user select a date. 

```bash
npm i react-datepicker
```
### Json server
JSON Server is a Node Module that you can use to create demo rest json webservice in less than a minute. All you need is a JSON file for sample data.
```batch
npm i json-server
```

### Axios
Promise based HTTP client for the browser and node.js.
```batch
npm i axios
```

### uuid
Universally Unique Identifier (UUID) is very useful. In Node. js there are many ways to generate a UUID. One of them is with a native module and others are using NPM packages. UUID can be very useful as reliable unique identifiers.

```batch
npm i uuid
```
## Starting
So first of all I started with designing the Use Case Diagram to this project.

![usecase](https://user-images.githubusercontent.com/56639521/208318518-062a88a5-1c80-4a00-b905-e63d3d53f4dc.png)

Then I decided for each functionality what are the necessary pages.

So the User have to be logged in our system.
By fullfilling the login page


