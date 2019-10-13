import jwt from 'jsonwebtoken'
import {reduce} from 'lodash'

interface ILoginData{
  email: string
  password: string
}

export default (user: ILoginData) => {
let token = jwt.sign(
    {
      data: reduce(user, (result : any, value, key) => {
        if (key !== 'password'){
          result[key] = value
        }
        return result
      }, {})
    },
    process.env.JWT_KEY || '' ,
      {
        expiresIn: process.env.JWT_AGE,
        algorithm:'HS256'
      },
  )
  return token
}