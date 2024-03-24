import { FormikAuthForm, FormikAuthFormProps } from '@renderer/components/auth/form'

export interface AuthPageContainerProps {
  formikAuthFormProps: FormikAuthFormProps
}

function AuthPageContainer({ formikAuthFormProps }: AuthPageContainerProps): JSX.Element {
  return <FormikAuthForm {...formikAuthFormProps} />
}

export default AuthPageContainer
