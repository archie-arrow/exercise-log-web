export interface AuthFormInterface {
  title: string;
  subtitle: string;
  form: {
    formGroup: string;
    fields: FieldInterface[];
    action: string;
  };
  linkText: string;
  linkAction: string;
  redirect: string;
}

interface FieldInterface {
  label: string;
  controlName: string;
  forgotPassword?: boolean;
}
