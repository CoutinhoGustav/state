import React, { useState } from "react";

export default function InputText({ placeholder, onChange }) {
  const [valor, setValor] = useState("");
  const [erro, setErro] = useState(false);

  function handleChange(e) {
    const novoValor = e.target.value;
    setValor(novoValor);
    setErro(novoValor.trim() === "");
    onChange(novoValor);
  }

  return (
    <div className="w-full my-2">
      <input
        type="text"
        placeholder={placeholder}
        value={valor}
        onChange={handleChange}
        className="w-full p-3 rounded bg-gray-800 text-white border border-gray-600 focus:border-blue-400 outline-none"
      />

      {erro && <p className="text-red-400 text-sm">Campo obrigatório</p>}
    </div>
  );
}
