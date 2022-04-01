import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { SecondaryButton } from "../components/elements"
import { logout } from "../redux/actions/users.actions"

const Verify = ({mailId}) =>{
    const navigate = useNavigate()
    const dispatch = useDispatch()
    
    const {user_login} = useSelector(state=> state.users.login)
    useEffect(()=>{
        if(user_login)
        {
            if(user_login.isVerified){
                navigate('/')
            }
    }
    else{
        navigate('/login')
    }
    },[dispatch,navigate, user_login])


    return (
    <div className="App-header" style={{minHeight:"100vh"}} > 
    <div className ="App">
        <h2>Verify Your Account</h2>
        <p>Goto your Mail box of {mailId} and verify your account before link expires.</p>
        <small style={{color: '#17d88b'}} >If you already verified, Reload or log out and then log in</small>
        <>
               <small>Please Logut and Login in again</small>
               <br/>
               <SecondaryButton
                onClick={()=>{
                    dispatch(logout())
                    navigate('/user/login')
                }}
               >
                   Logout
               </SecondaryButton>
               </>
    </div>
    </div>
)}

export default Verify