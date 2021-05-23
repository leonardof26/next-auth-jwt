import React, { useContext } from 'react'

import { AuthContext } from '../contexts/AuthContext'
import { setupAPIClient } from '../services/api'
import { withSSRAuth } from '../utils/withSSRAuth'

const pages: React.FC = () => {
  const { user } = useContext(AuthContext)

  return (
    <div>
      <h1>Dashboarde {user?.email}</h1>
    </div>
  )
}

export default pages

export const getServerSideProps = withSSRAuth(async (ctx) => {
  const clientApi = setupAPIClient(ctx)
  const resp = await clientApi.get('me')

  console.log(resp.data)

  return {
    props: {},
  }
})
