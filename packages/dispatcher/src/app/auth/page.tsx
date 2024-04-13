'use client'

import { Form, Input, Button } from 'antd'
import { withAuth } from '~/helpers/withAuthPage'

const { Item: FormItem } = Form

const AuthForm = () => {
  return (
    <Form>
      <FormItem required label='Usuario'>
        <Input placeholder='Usuario' />
      </FormItem>
      <FormItem required label='Clave'>
        <Input.Password placeholder="Clave" />
      </FormItem>
      <FormItem>
        <Button type='primary' htmlType='submit'>Iniciar sesión</Button>
      </FormItem>
    </Form>
  )
}

export default withAuth(<AuthForm />)