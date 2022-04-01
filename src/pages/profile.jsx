import { Delete } from '@mui/icons-material'
import { Avatar, Button} from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import EditComponent from '../components/editComponent'
import {  DialogBox, Loader, Message } from '../components/elements'
import { deleteUsers, getUserDetails, logout } from '../redux/actions/users.actions'


function Profile() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const{ user_login } = useSelector(
        (state) => state.users.login
      );

      const [dialogText , setDialogText] = useState("This will delete your Account Permently and You can't retreive your account.")
      const [open, setOpen] = useState(false);

const {success, error, data} = useSelector(state=> state.users.userDetail)

let {loading : delLoad, error:delError, success : delSuccess} = useSelector(state => state.users.delete)
const handleClickOpen = () => {
    setOpen(true);
};

const handleClose = () => {
    setOpen(false);
};

const handleDialogAction = () =>{
    dispatch(deleteUsers(user_login._id))
    if(delLoad){
         setDialogText(<Loader/>)
    }
    if(delError){
        setDialogText(delError)
    }
   
}

      useEffect(() => {
        if (!user_login) {
          navigate(`/`);
        }else if(!user_login.isVerified){
            navigate(`/verify`);
        }else{
            dispatch(getUserDetails(user_login._id))
        }
        if(delSuccess){
            setOpen(false);
            dispatch(logout());
            navigate("/")
        }
      }, [delSuccess, dispatch, navigate, user_login]);
    
    let user = !data? '' : data.data

  return (
    <>
        <div style={{position:"absolute", left: "20%", right:"20%", zIndex:"4"}} >
            {error && <Message type="error" message={error}/>}
            {success && <Message type="success" message="UserDetails"/>}
        </div>
        <div className='m-auto' style={{paddingTop:"80px", paddingBottom:"80px"}}>
            
            <div className="pad">
                { !data ?
                    <div className='m-auto'> <div><Loader /></div>  </div> :
                    <div className='m-auto' style={{maxWidth:"800px"}}>
                        <div className="d-flex justify-content-center align-items-center">
                            <div>
                                <Avatar sx={{width:"120px", height:"120px"}} alt={user.name} src={user.profilePic}/>
                            </div>
                            <div style={{margin:"2%"}}>
                                <h1>{user.name}</h1>
                                <small>@{user.username}</small>
                                <br/>
                                <Button
                                    color="error"
                                    variant="contained"
                                    margin="normal"
                                    onClick={ ()=>{
                                    dispatch(logout())
                                    navigate("/")
                                    }}
                                > Logout 
                                </Button>
                            </div>
                        </div>
                        <hr/>
                         <div className="pad">
                             <EditComponent user={{...user, id: user_login._id}} />
                         </div>
                         <hr/>
                        <div>
                            <Button
                                startIcon= {<Delete/>}
                                variant="text"
                                color="error"
                                onClick={handleClickOpen}
                            >
                                Delete Account
                            </Button>
                            <DialogBox open={open} close = {handleClose} title="Do you Want to Peremently Delete the Account?" text={dialogText} action={handleDialogAction} />
                        </div>
                </div>}
            </div>
            
        </div>
    </>
  )
}

export default Profile