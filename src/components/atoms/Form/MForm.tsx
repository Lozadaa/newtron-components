import { FormProvider, useForm } from 'react-hook-form'
import { MFormProps } from './MForm.types'

const MForm = ({children, config, onSubmit = () => {}}: MFormProps) => {
  const methods = useForm(config);
  

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        {children}
      </form>
    </FormProvider>
  )
}

export default MForm;