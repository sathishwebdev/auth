import { Navigate } from "react-router-dom"
import ChangePassword from "../pages/changePassword"
import ForgetPassword from "../pages/forgetPassword"
import Login from "../pages/login"
import Profile from "../pages/profile"
import SignUp from "../pages/SignUp"
import Verification from "../pages/verification"
import Verify from "../pages/Verify"

const routes = [
    {
        name: "Login",
        path:"/login",
        element:<Login />
    },
    {
        name: "Profile",
        path:"profile",
        element: <Profile/>
    },
    {
        name:"Sign UP",
        path:"signup",
        element: <SignUp/>
    },
    {
        name:"verification",
        path:":id/verify/k",
        element: <Verification/>

    },
    {
        name:"verify",
        path:"verify",
        element: <Verify/>
    },
    {
        name:"Error 404",
        path : "*",
        element: <Navigate to="/" replace/>
    },
    {
        name: "forget password",
        path:"forgetpassword",
        element: <ForgetPassword/>
    },
    {
        name:"Change Password",
        path: ":userId/changepassword/k",
        element: <ChangePassword />
    }

]

export default routes