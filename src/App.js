import Hero from "./pages/app/hero/Hero";
import Nav from "./components/nav/Nav";
import Courses from "./pages/app/courses/Courses";
import Details from "./pages/app/details/Details";
import Learn from "./pages/app/learn/Learn";
import Chapter from "./pages/app/chapter/Chapter";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
function App() { 
  const router = createBrowserRouter([
    {
      path:"/",
      element:<Nav/>,
      children:[
        {index:true,element:<Hero/>},
        {
          path:"courses",
          children:[
            {index:true,element:<Courses/>},
            {path:':itemId',element:<Details/>}
          ]
        },
        {path:"learn/:itemId",element:<Learn/>,
          children:[{
            path:"chapter/:chapter",element:<Chapter/>
          }]
      }
      ]}
  ])
  return (
      <>
        <RouterProvider router={router}/>
      </>
  );
}

export default App;
