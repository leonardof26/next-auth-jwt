import React, { useContext } from 'react'

import { AuthContext } from '../contexts/AuthContext'

const pages: React.FC = () => {
  const { user } = useContext(AuthContext)

  return (
    <div>
      <h1>Dashboard {user?.email}</h1>
    </div>
  )
}

export default pages
