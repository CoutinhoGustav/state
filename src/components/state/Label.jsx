import React, { useState } from "react";

export default function Label({ texto }) {
  const [valor] = useState(texto);

  return <span className="text-gray-300 font-semibold">{valor}</span>;
}
