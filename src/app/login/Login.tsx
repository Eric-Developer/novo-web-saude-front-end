"use client";
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import { useForm } from "@/hooks/useForm";
import { loginService } from "@/service/client/loginService";
import Input from "@/components/UI/Input";
import Button from "@/components/UI/Button";
import Link from "next/link";
import "@/app/login/css/style.css";

export default function Login() {
  const [errorMessage, setErrorMessage] = useState<string>("");

  const {
    values,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    showPassword,
    togglePasswordVisibility,
  } = useForm({
    email: "",
    password: "",
  });

  const clearError = () => setErrorMessage("");

  const submitForm = async (formValues: { email: string; password: string }) => {
    console.log("Formulário enviado:", formValues);
    const response = await loginService(formValues);
    setErrorMessage(response.message);
  };

  return (
    <section className="section-login">
      <div className="login-image">
        <img src="/image-login-register.png" alt="Imagem de login" />
      </div>

      <div className="login-form-container">
        <div className="login-titulo">
          <h1>BEM-VINDO!</h1>
        </div>

        <form noValidate onSubmit={(e) => handleSubmit(e, submitForm)}>
          <div className="login-inputs">

            <div className="input-wrapper">
              <Input
                type="email"
                name="email"
                icon={<FaEnvelope className="input-icon" />}
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                onFocus={clearError}
              />
              {errors.email && <span className="error">{errors.email}</span>}
            </div>

            <div className="input-wrapper">
              <Input
                type={showPassword ? "text" : "password"}
                name="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                onFocus={clearError}
                icon={<FaLock className="input-icon" />}
                iconPassword={
                  showPassword ? (
                    <FaEye className="input-icon" onClick={togglePasswordVisibility} />
                  ) : (
                    <FaEyeSlash className="input-icon" onClick={togglePasswordVisibility} />
                  )
                }
              />
              {errors.password && <span className="error">{errors.password}</span>}
            </div>

            <div className="forgot-password">
              <Link href="#">Esqueceu a senha?</Link>
            </div>
          </div>

          <div className="login-action">
            <Button type="submit" className="login-button">
                Entrar
            </Button>
          </div>
        </form>

        {errorMessage && <div className="error-message">{errorMessage}</div>}

        <div className="register-link">
          <p>Não tem uma conta? <Link href="/register">Então cadastre-se</Link></p>
        </div>

        <div className="login-logo">
          <h2>WEB SAÚDE</h2>
        </div>
      </div>
    </section>
  );
}
