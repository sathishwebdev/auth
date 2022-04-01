import React from 'react'
import * as mui from "@mui/material"; 
import styled from '@emotion/styled';
import {Close} from '@mui/icons-material'

const Input = styled(mui.TextField)({
    'input' :{
      backgroundColor: 'whitesmoke',
      borderColor: 'whitesmoke',
      color: '#252525',
      zIndex:"1",
      borderRadius:"25px"
    },
    'label':{
      zIndex:"2",
    },
    '& label.Mui-focused': {
      color: "#252525",
      backgroundColor: 'transparent'
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'whitesmoke',
    },
    '& .MuiOutlinedInput-root': {
      
      '&.Mui-focused fieldset': {
        borderColor: 'whitesmoke',
        outline:"none",
        backgroundColor:"whitesmoke"
      },
      '&:hover fieldset':{
        borderColor:"whitesmoke"

      },
      ' fieldset':{
        borderRadius:"25px",
        borderColor:"whitesmoke",
        backgroundColor:"whitesmoke",
        color:"#252525",
        zIndex:"0"
      }
    },
  });

const Button = mui.styled(mui.Button)(({ theme }) => ({
    color: theme.palette.getContrastText(mui.colors.purple[500]),
    backgroundColor: "#",
    margin: "3%",
    fontFamily: "advent",
  
    "&:hover": {
      backgroundColor: "",
      color: "black",
      textShadow: "0px 0px 20px 1px #0f0f0f",
    },
    "&:focus": {
      border: "none",
      boxShadow: "none",
      outline: "none",
    },
  }));

  const IconButton = mui.styled(mui.IconButton)(({ theme }) => ({
    "&:focus": {
      border: "none",
      boxShadow: "none",
      outline: "none",
    },
  }));

  const PrimaryButton = mui.styled(mui.Button)(({ theme }) => ({
    color: theme.palette.getContrastText(mui.colors.purple[500]),
    backgroundColor: "#ffd500",
    margin: "3%",
    fontFamily: "advent",
    borderRadius:"25px",
    padding:"2%",
  
    "&:hover": {
      backgroundColor: "#ffd600",
      color: "white",
      boxShadow: "0px 0px 20px 1px #0f0f0f",
    },
    "&:focus": {
      border: "none",
      boxShadow: "none",
      outline: "none",
    },
  }));
  const SecondaryButton = mui.styled(mui.Button)(({ theme }) => ({
   color: theme.palette.getContrastText(mui.colors.purple[500]),
  backgroundColor: "#000",
  fontFamily: "advent",
  padding:"2%",
  paddingLeft:"15px",
  paddingRight:"15px",
  margin: "3%",
  borderRadius:"50px",
  '&:hover': {
    backgroundColor: "white",
    color:"black",
    boxShadow: "0px 0px 20px 1px #0f0f0f",
  },
  }));
  
  


function DialogBox({open, close, action, title, text}) {
  return (
    <mui.Dialog
        open={open}
        onClose={close}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <mui.DialogTitle id="alert-dialog-title">
          {title}
        </mui.DialogTitle>
        <mui.DialogContent>
          <mui.DialogContentText id="alert-dialog-description">
            {text}
          </mui.DialogContentText>
        </mui.DialogContent>
        <mui.DialogActions>
          <mui.Button color="inherit" onClick={close}>Close</mui.Button>
          <mui.Button color="error" onClick={action} autoFocus>
            Delete
          </mui.Button>
        </mui.DialogActions>
      </mui.Dialog>
  )
}

function Message({ message, type }) {
    const [open, setOpen] = React.useState(true);
  
    return (
      <mui.Box className="m-2">
        <mui.Collapse in={open}>
          <mui.Alert
            variant="filled"
            severity={type}
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  setOpen(false);
                }}
              >
               <Close/> 
              </IconButton>
            }
            sx={{ mb: 2 }}
          >
            {message}
          </mui.Alert>
        </mui.Collapse>
      </mui.Box>
    );
  }

  const Loader = () => <div className="App-header"> <div className="loader"></div> </div>

  export{
    Button,  
    PrimaryButton,
    SecondaryButton,
    DialogBox,
    Message,
    IconButton,
    Input,
    Loader
  }