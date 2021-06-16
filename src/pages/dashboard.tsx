import React, { useContext } from 'react'

import { AuthContext } from '../contexts/AuthContext'
import { setupAPIClient } from '../services/api'
import { withSSRAuth } from '../utils/withSSRAuth'

import { Can } from '../components/Can'

const pages: React.FC = () => {
  const { user } = useContext(AuthContext)

  return (
    <div>
      <>
        <h1>Dashboarde {user?.email}</h1>

        <Can permissions={['metrics.list']}>
          <div>Métricas</div>
        </Can>
      </>
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
