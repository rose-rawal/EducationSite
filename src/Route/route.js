import Course from "../Pages/Course";
import Home from "../Pages/Home";
import Summarize from "../Pages/Listening/summarize";
import Login from "../Pages/Login";
import PtePractice from "../Pages/PtePractice";
import SignUp from "../Pages/SignUp";

const route=[
    {
        name:'Home',
        path:'/',
        element:<Home/>
    },
    {
        name:'Practice',
        path:'/practice',
        element:<PtePractice/>
    },
    {
        name:'Course',
        path:'/course',
        element:<Course/>
    },
    {
        name:'Login',
        path:'/login',
        element:<Login/>
    },
    {
        name:'Signup',
        path:'/signup',
        element:<SignUp/>
    },
    {
        name:'Summarize',
        path:'/summarize',
        element:<Summarize/>
    }
]
export default route