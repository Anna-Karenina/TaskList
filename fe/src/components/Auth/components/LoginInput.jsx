import React from 'react'

import styled from './../Login.module.css'

import PersonIcon from '@material-ui/icons/Person';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import IconButton from '@material-ui/core/IconButton';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

const LoginInput = (props) => {
  const {
   values,
   touched,
   errors,
   handleChange,
   handleBlur,
   id,
    placeholder
<<<<<<< HEAD
  } = props;
  return (
    <div className ={
      errors[id] && touched[id] ?
      (styled.logininputcontainer+' '+styled.logininputcontainerborder) : (styled.logininputcontainer)
    }>
=======
 } = props;
  return (
    <div className ={
        errors[id] && touched[id] ?
        (styled.logininputcontainer+' '+styled.logininputcontainerborder) : (styled.logininputcontainer)
      }>
>>>>>>> 2553426f4705bcb58c36e374b3a5c11c6dcf4927
      <PersonIcon className = {styled.icon}/>
      <input
        id={id}
        placeholder={placeholder}
        type="text"
        value={values[id]}
        onChange={handleChange}
        onBlur={handleBlur}
        className={styled.logininput}
        />
        {touched[id] && errors[id] === undefined  ?
          <IconButton
              color="primary"
              className={styled.eror}
              aria-label="errorr">
          <CheckCircleOutlineIcon />
        </IconButton>
              :
<<<<<<< HEAD
        errors[id] && touched[id] && (
          <IconButton
            title= "Не верный формат почты"
            color="secondary"
            className={styled.eror}
            aria-label="errorr">
            <ErrorOutlineIcon />
          </IconButton>)
          }
=======
            errors[id] &&
          touched[id] && (
            <IconButton
                title= "Не верный формат почты"
                color="secondary"
                className={styled.eror}
                aria-label="errorr">
            <ErrorOutlineIcon />
          </IconButton>)
          }

>>>>>>> 2553426f4705bcb58c36e374b3a5c11c6dcf4927
    </div>
  )
}

export default LoginInput