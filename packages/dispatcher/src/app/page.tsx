'use client'

import { PrimaryLayout } from '../layouts/primary'
import { withAuth } from '~/helpers/withAuthPage'

const Home = () => {
  return <PrimaryLayout>hi</PrimaryLayout>
}

export default withAuth(<Home />)
