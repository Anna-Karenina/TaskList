import React, { useEffect } from 'react';
import orderBy from 'lodash/orderBy'
import { connect } from "react-redux";
import { dialogsActions } from "./../../redux/actions/index";
import socket from "./../../core/socket"
import OneDialogElement from './OneDialogElement'


import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

import {
  DialogSelect,
  DialogCreate,
 } from './components/index'


const useStyles = makeStyles(theme => ({
  dialogselect:{
    padding: theme.spacing(.5, .5),
    margin: theme.spacing(1, 1, 0.5),
  },
}));

const DialogList  = (props) => {

const {fetchDialogs, items} = props

  const onNewDialog = () => {
    fetchDialogs();
  };

  useEffect(() => {
    fetchDialogs();
      if (items.length) {
        fetchDialogs();
      }

    socket.on("SERVER:DIALOG_CREATED", onNewDialog);
    return () => socket.removeListener("SERVER:DIALOG_CREATED", onNewDialog);
  },[]);

  let list = orderBy(items , ['unreaded'], ['desc']).map(i =>
    <OneDialogElement
      key={i._id}
      authorName={i.author.name}
      author={i.author}
      partner={i.partner}
      id={i._id}
      lastsMessage={i.lastMessage.text}
      readed={i.lastMessage.readed}
      fetchDialogs={i.fetchDialogs}
      currentDialogId ={i.currentDialogId}
      setCurrentDialogId={props.setCurrentDialogId}
      userId={i.userId}
      items={i.items}
       />)
  const classes = useStyles();
  return (
    <>
      <Paper className={classes.dialogselect} name='headerindialogs'>
        <h3 style={{paddingLeft: '5%'}}>Диалоги</h3>
        <div style={{display: 'flex'}}>
          <DialogSelect options = {items}/>
          <DialogCreate />
        </div>
      </Paper>
      <div style={{overflow: 'scroll'}}>
       { list }
      </div>
    </>
  )
}




export default connect(
  ({ dialogs }) => dialogs,
  dialogsActions
)(DialogList);
