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

## Project Structure
So I prefererd this structure in our project:
![image](https://user-images.githubusercontent.com/56639521/208322122-aa80498c-716c-4be4-8561-788cbaf08c34.png)

- First we have the api folder that contain services that help us to connect to the json server api.
- We have assets folder that contains styles or images.

![image](https://user-images.githubusercontent.com/56639521/208322234-9a356731-9730-4eaf-978e-95464a5db681.png)

- We have also components folder that contains components that we will use in our project.
 
 ![image](https://user-images.githubusercontent.com/56639521/208322276-c42046fe-b73b-420b-ad3e-5f510ae0fc5f.png)
 
- We have data folder that contains json files.

![image](https://user-images.githubusercontent.com/56639521/208322309-0d43260e-f098-4782-a20b-c7b3636f8f7b.png)

- we have also hooks folder in which we put custom hooks if needed.
- We have a pages folder that contains the pages of our project.

![image](https://user-images.githubusercontent.com/56639521/208322393-845901dc-9b2f-477f-bbb5-445be96e7bd5.png)

- And finally we have utils  folder in which I put the interfaces that we will need in our project.

![image](https://user-images.githubusercontent.com/56639521/208322432-eaa029f2-b3a4-41fc-b7d7-f80b992f5a2d.png)


## Interfaces
So first of all I started with designing the Use Case Diagram to this project.

![usecase](https://user-images.githubusercontent.com/56639521/208318518-062a88a5-1c80-4a00-b905-e63d3d53f4dc.png)

Then I decided for each functionality what are the necessary pages.

So the User have to be logged in our system.
By fullfilling the login page
![Opera Instantané_2022-12-18_223525_localhost](https://user-images.githubusercontent.com/56639521/208320822-4c8c393c-79e3-4169-bfd0-d8dd67a117c6.png)
![Opera Instantané_2022-12-18_223639_localhost](https://user-images.githubusercontent.com/56639521/208320843-4bfa6a1a-861f-4349-9d9b-0af7bc70d055.png)

Once logged in the user will be redirected to the home page
![Opera Instantané_2022-12-18_223801_localhost](https://user-images.githubusercontent.com/56639521/208320885-7b35ba87-8741-42c3-9b1b-665b15631262.png)
![Opera Instantané_2022-12-18_223900_localhost](https://user-images.githubusercontent.com/56639521/208320931-f4bc5417-6852-4c5e-a1bd-113c7c668258.png)

The User can see the list of teachers by pressing the button see our teachers

![Opera Instantané_2022-12-18_224014_localhost](https://user-images.githubusercontent.com/56639521/208320990-aaf8627f-7109-40fd-9ba5-25b8f61d3099.png)

He can also see the courses 

 ![Opera Instantané_2022-12-18_224237_localhost](https://user-images.githubusercontent.com/56639521/208321053-97df5fe9-c076-419e-abc2-685e5e2cc7b6.png)
 
 At the left, we have a filter that the user can use to filter by category, subject and start time
 ![Opera Instantané_2022-12-18_224456_localhost](https://user-images.githubusercontent.com/56639521/208321122-327ff4b1-a44d-4f71-a966-726e4a7840e1.png)
 
 Also we see at the bottom right add course button that only the instructor can see and he can create a new course and if the student went to the url of creating a new course he will be redirected to 404 not found page.
 
 
![Opera Instantané_2022-12-18_224759_localhost](https://user-images.githubusercontent.com/56639521/208321210-b227df97-51d4-4e58-9de6-b73298af0481.png)

Also the teacher must enter the start time between 8AM and 4PM and the end time between start time and 6PM.
![image](https://user-images.githubusercontent.com/56639521/208404377-3b861641-acaf-41f7-b109-bacc505e531b.png)


And after submitting we notice that the new course is added to the list of courses
![Opera Instantané_2022-12-18_224937_localhost](https://user-images.githubusercontent.com/56639521/208321243-51da65aa-0e02-473e-8d18-064168d14677.png)

We have also a 404 page if the user entered a random url or accessed to a random page
![image](https://user-images.githubusercontent.com/56639521/208321329-80fd4341-3863-40aa-9295-789b6d900f2f.png)

The user can also disconnect from the application and his data will be removed from the data storage
![image](https://user-images.githubusercontent.com/56639521/208321712-3c2ba5ed-0004-4fc2-9af2-bb1ff07b53c4.png)

![image](https://user-images.githubusercontent.com/56639521/208321585-645491f6-f3a4-4cb6-a7e9-b259cb49f8ab.png)

![image](https://user-images.githubusercontent.com/56639521/208321754-a09c350c-ab34-4047-b9e1-4133839f9cc0.png)

I worked in this project with Json server so i created a json file containing 2 tables users and courses.
![image](https://user-images.githubusercontent.com/56639521/208321872-fd9932f2-8887-46a1-9ad6-387cf5b50896.png)
![image](https://user-images.githubusercontent.com/56639521/208321903-a123e6a3-b047-4dcd-b515-594745519a39.png)

to run json server, we go to the front/my-app directory and type in the terminal:
```bash
npx json-server --watch src/data/db.json --port -3006
```


## Deployment

As it is a front end project I used Vercel to deploy my application and in order to do that 
I replaced json server with a simple json file and uploading its data in a table.

To login as a teacher : (mail : email1@gmail.com, password: 123)

To login as a student : (mail : email4@gmail.com, password: 123)

https://course-management-system-5yhs.vercel.app

## Remark 
This website is responsive too











