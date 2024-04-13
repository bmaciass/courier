import { PropsWithChildren } from "react"
import { RegisterForm } from "~/components/packages/RegisterForm"
import { PrimaryWithDetailsLayout } from "~/layouts/list-details"
import { logger } from "~/utils/logger"

async function getData (slug: string) {
  /* const res = await fetch('https://api.example.com/...')
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  } */
  if (slug === 'new') return null
  return { foo: 'bar' }
}

type PackagePageProps = {
  slug: string
}

export default async function Page (props: PackagePageProps) {
  const { slug } = props
  const r = await getData(slug)
  logger.debug(r)
  return (
    <PrimaryWithDetailsLayout main={'hi'} details={<RegisterForm />}>
    </PrimaryWithDetailsLayout>
  )
}