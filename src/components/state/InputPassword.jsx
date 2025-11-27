import React, { useState } from "react";

export default function InputPassword({ placeholder, onChange }) {
  const [senha, setSenha] = useState("");

  function handleChange(e) {
    const valor = e.target.value;
    setSenha(valor);
    onChange(valor);
  }

  return (
    <div className="w-full my-2">
      <input
        type="password"
        placeholder={placeholder}
        value={senha}
        onChange={handleChange}
        className="w-full p-3 rounded bg-gray-800 text-white border border-gray-600 focus:border-blue-400 outline-none"
      />
    </div>
  );
}
