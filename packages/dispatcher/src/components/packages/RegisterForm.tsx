'use client'

import { Form, Input, InputNumber } from 'antd'
import { PackageImageUploader } from './PackageImageUploader'

const { Item: FormItem } = Form

export const RegisterForm = () => {
  return (
    <Form>
      <FormItem label='ID de cliente'>
        <Input></Input>
      </FormItem>
      <FormItem label='Nombre del producto o paquete' required>
        <Input></Input>
      </FormItem>
      <FormItem label='Valor en dólares' required>
        <InputNumber min={0} step={'0.01'}></InputNumber>
      </FormItem>
      <FormItem label='Peso' required>
        <InputNumber min={0} step={'0.01'}></InputNumber>
      </FormItem>
      <FormItem label='Imágen'>
        <PackageImageUploader></PackageImageUploader>
      </FormItem>
    </Form>
  )
}