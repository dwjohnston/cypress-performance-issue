import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import { UsersPage } from './pages/UsersPage';
import { TodosPage } from './pages/TodosPage';
import { FormPage } from './pages/FormPage';
import { TabsPage } from './pages/TabsPage';
import { InputPage } from './pages/InputPage';


const router = createBrowserRouter([
  {
    path: '/',
    element: <div> home page</div>
  },
  {
    path: "/users",
    element: <UsersPage />
  },
  {
    path: "/todos",
    element: <TodosPage />
  },

  {
    path: "/form", 
    element: <FormPage/>
  }, 

  {
    path: "/tabs", 
    element: <TabsPage/>
  },
  {
    path: "/input", 
    element: <InputPage/>
  }
]);
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>




    <nav>
      <a href="/users">Users</a>
      <a href="/todos">Todos</a>
      <a href="/form">Form</a>
      <a href="/tabs">Tabs</a>
      <a href ="/input">Input</a>

    </nav>
    <RouterProvider router={router} />

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
