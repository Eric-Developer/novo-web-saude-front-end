interface LoginResponse {
  success: boolean;
  message: string;
}

export async function loginService(formValues: { email: string; password: string }): Promise<LoginResponse> {
  try {
    const response = await fetch("https://novo-back-end-web-saude.onrender.com/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formValues),
    });

    if (response.status === 200) {
      return { success: true, message: "Login bem-sucedido!" };
    } else if (response.status === 404) {
      return { success: false, message: "Usuário não encontrado." };
    } else if (response.status === 401) {
      return { success: false, message: "Email ou senha incorretos." };
    } else if (response.status === 500) {
      return { success: false, message: "Houve um erro no. Tente novamente mais tarde." };
    } else {
      return { success: false, message: "Erro desconhecido." };
    }
  } catch (error) {
    if(error instanceof Error)
      return { success: false, message: "Erro ao conectar ao servidor. Tente novamente mais tarde." };
     return { success: false, message: "Erro interno no servidor." };
  }
  
}
