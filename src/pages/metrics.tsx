import React from 'react'

import decode from 'jwt-decode'

import { setupAPIClient } from '../services/api'
import { withSSRAuth } from '../utils/withSSRAuth'

const Metrics: React.FC = () => {
  return (
    <div>
      <>
        <h1>Metrics: </h1>
      </>
    </div>
  )
}

export default Metrics

export const getServerSideProps = withSSRAuth(
  async (ctx) => {
    const clientApi = setupAPIClient(ctx)
    const resp = await clientApi.get('me')

    return {
      props: {},
    }
  },
  {
    permissions: ['metrics.list'],
    roles: ['administrator'],
  }
)
