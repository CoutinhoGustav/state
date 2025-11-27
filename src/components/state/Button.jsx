import React from "react";

export default function Button({ valor, aoClicar }) {
  return (
    <button
      onClick={aoClicar}
      className="w-full bg-blue-600 hover:bg-blue-700 transition p-3 rounded mt-4 font-semibold"
    >
      {valor}
    </button>
  );
}
