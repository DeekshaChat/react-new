import React, {useContext} from 'react'
import UserContext from '../context/UserContext'

export default function Profile() {
  const {user} = useContext(UserContext)

  if (!user) return <div>Please Login</div>
  return (
    <div>
      Hi {user.userName}
    </div>
  )
}