import { Button } from '@mui/material';
import { auth } from "../firebase.js";
import React from 'react';
import  CallIcon  from '@mui/icons-material/Call';

function SignOut() {
  return (
    <div className= "header">
        <Button style={{ color: "white", fontsize: "15px"}}
        onClick={() => auth.signOut()}>
            サインアウト
        </Button>
        <h3>{auth.currentUser.displayName}</h3> {/* 現在ログインしているユーザーの名前を上部に表示する */}
        <CallIcon />
    </div>
  )
}

export default SignOut;