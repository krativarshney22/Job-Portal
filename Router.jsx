import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import CreateJob from "../Pages/CreateJob";
import MyJobs from "../Pages/MyJobs";
import SignUp from "../Pages/SignUp";
import Login from "../Pages/Login";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children:[
        {path:"/",
            element:<Home/>
        },
        {
          path:"/post-job",
          element:<CreateJob/>
        },
        {
          path:"/my-job",
          element:<MyJobs/>
        },
        // {
        //   path: "/sign-up",
        //   element:<SignUp/>
        // },
        // {
        //   path: "/login",
        //   element:<Login/>
        // }
      ]
    },
  ]);

  export default router;