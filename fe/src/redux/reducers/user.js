const initstate = {
  data:[],
  token: window.localStorage.token,
  isAuth: !!window.localStorage.token,
  ulid : window.localStorage.ulid
}

export default (state = initstate, { type , payload }) =>{
  switch (type) {
    case 'USER:SET_DATA':
      return {
        data: payload,
        isAuth: !!window.localStorage.token,
      }
    case 'USER:SET_USERS_DATA':
      return {
        ...state,
        users: payload,
      }
    case 'USER:SET_IS_AUTH':
      return {
        ...state,
        isAuth: payload
    }
    case 'USER:UPDATE_USER_AVATAR':
      return {
      ...state,
      data:{
          ...state.data ,

            avatar: payload
          
        }
    }
    default:
      return state
  }
}
