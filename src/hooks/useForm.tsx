import { useState } from "react";

interface FormValues {
  email: string;
  password: string;
}

export function useForm(initialValues: FormValues) {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<Partial<FormValues>>({});
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name } = e.target;
    if (!values[name as keyof FormValues]) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name as keyof FormValues]: `${name} é obrigatório`,
      }));
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e: React.FormEvent, submitForm: (values: FormValues) => void) => {
    e.preventDefault();
    
    const newErrors: Partial<FormValues> = {};

    // Validação do email
    if (!values.email) {
      newErrors.email = "Email é obrigatório";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      newErrors.email = "Email inválido";
    }

    // Validação da senha
    if (!values.password) {
      newErrors.password = "Senha é obrigatória";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      submitForm(values);
    }
  };

  return {
    values,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    showPassword,
    togglePasswordVisibility,
  };
};
