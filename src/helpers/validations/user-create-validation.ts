import * as yup from 'yup'

const defaultMessage = "Campo nome é obrigatório!"
export const userValidation = yup.object({
    nome:yup.string().required(defaultMessage).max(20),
    email:yup.string().email("Digite um email válido").required(defaultMessage),
    password:yup.string().required(defaultMessage)
})