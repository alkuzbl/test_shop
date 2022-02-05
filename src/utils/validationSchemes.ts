import * as yup from 'yup';

export const orderValidationSchema = yup.object().shape({
  name: yup.string().required().min(3, 'Ваше имя должно быть не менее 3-х символов'),
  phone: yup.string().required(),
  email: yup.string().required().email(),
});
