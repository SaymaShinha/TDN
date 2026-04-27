import { createBrowserRouter } from "react-router";
import App from "../App.jsx";
import Home from "../Pages/Home.jsx";
import AddNote from "../Pages/Notes/AddNote.jsx";
import ShowNotes from "../Pages/Notes/ShowNotes.jsx";
import ShowSingleNote from "../Pages/Notes/ShowSingleNote.jsx";
import AddToDo from "../Pages/ToDo/AddToDo.jsx";
import ShowDoneToDoList from "../Pages/ToDo/ShowDoneToDoList.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      { index: true, path: "/home", Component: Home },
      { path: "/add-note", Component: AddNote },
      { path: "/add-note/:index", Component: AddNote },
      { path: "/show-notes", Component: ShowNotes },
      { path: "/single-note-details/:index", Component: ShowSingleNote },
      { path: "/add-todo", Component: AddToDo },
      { path: "/add-todo/:index", Component: AddToDo },
      { path: "/show-done-todo", Component: ShowDoneToDoList},
],
  },
]);

export default router;