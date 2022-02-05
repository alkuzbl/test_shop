export type InputFPropsType = {
  className?: string;
  required?: boolean;
  label?: string;
  placeholder?: string;
  name: 'email' | 'name' | 'phone';
  register?: any;
  errors?: any;
  type: 'checkbox' | 'text' | 'password' | 'email';
  style?: any;
  autoComplete?: 'on' | 'off' | 'username' | 'new-password' | 'current-password' | 'name';
};
