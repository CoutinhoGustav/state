import Label from "./Label.jsx";
import Labelln from "./Labelln.jsx";
import Button from "./Button.jsx";
import InputText from "./InputText.jsx";
import InputPassword from "./InputPassword.jsx";
import React, { useState } from "react";

export default function Login() {
  
  const [user, setUser] = useState("");
  const [senha, setSenha] = useState("");
  const [msg, setMsg] = useState("");

  function handleLogin() {

    // 0️⃣ Verificar campos vazios
    if (user.trim() === "" || senha.trim() === "") {
      setMsg("❌ Preencha usuário e senha!");
      return;
    }

    // 1️⃣ Salvar no LocalStorage
    localStorage.setItem("usuario", user);
    localStorage.setItem("senha", senha);

    // 2️⃣ Validar login
    const userLS = localStorage.getItem("usuario");
    const senhaLS = localStorage.getItem("senha");

    if (user === userLS && senha === senhaLS) {
      setMsg("✔ Login efetuado com sucesso!");
    } else {
      setMsg("❌ Usuário ou senha incorretos!");
    }
  }

  return (
    <div className="bg-gray-800 p-8 rounded-2xl shadow-xl w-96">
      <Labelln texto="Login" />

      <Label texto="Usuário:" />
      <InputText 
        placeholder="Digite o usuário..." 
        onChange={setUser}
      />

      <Label texto="Senha:" />
      <InputPassword
        placeholder="Digite sua senha..."
        onChange={setSenha}
      />

      <Button valor="Entrar" aoClicar={handleLogin} />

      <p className="mt-4 text-center text-lg text-white">{msg}</p>
    </div>
  );
}
