import * as yup from 'yup'
export const assigneValidation = yup.object({
    email:yup.string().required().email("Não existe usuario com esse email cadastrado!"),
    projectid:yup.number().required("Selecione um projeto!")
})