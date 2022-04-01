import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {  useLocation, useNavigate, useParams } from 'react-router-dom'
import { logout, verifyUser } from '../redux/actions/users.actions'
import {Message, SecondaryButton} from '../components/elements'

function Verification() {

    const location = useLocation()
    const {id} = useParams()
    const dispatch = useDispatch()
    let key = location.search
    const navigate = useNavigate()
    const {loading, error, success, response} = useSelector(state=>state.users.verify)
    const {user_login} = useSelector(state=> state.users.login)
    useEffect(()=>{
        if(user_login)
        {
         dispatch(verifyUser( id, key))
    }
    else{
        navigate('/login')
    }
    },[id, key, user_login])

  return (
    <><div className="App" >

        <div className="App-header"style={{flexDirection:"column", minHeight:"100vh"}}>
            <div>
                {error && <Message type="error" message={error}/>}
                {success && <Message type="success" message={response? response.message : "Account Verified"} />}
                {response && <Message type="success" message={response? response.message : "Account Verified"} />}
                
                <h1>Verification</h1>

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
            {loading && <div className="loader"></div>}
        </div>
    </div> </>
  )
}

export default Verification