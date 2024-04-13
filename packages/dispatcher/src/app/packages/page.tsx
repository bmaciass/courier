import { RegisterForm } from "~/components/packages/RegisterForm"
import { PrimaryWithDetailsLayout } from "~/layouts/list-details"

const ListPackagesPage = () => {
  return (
    <PrimaryWithDetailsLayout main={<RegisterForm />} details={null}>
    </PrimaryWithDetailsLayout>
  )
}

export default ListPackagesPage