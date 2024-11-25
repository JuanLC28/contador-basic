import { useState } from "react";

export function useContador() {
  const [contador, setContador] = useState(0);

  function aumentarContador(valor) {
    setContador((prevContador) => {
      const newContador = prevContador + valor;
      return newContador;
    });
  }

  function disminuirContador(valor) {
    setContador((prevContador) => {
      const newContador = prevContador - valor;
      return newContador;
    });
  }

  function reiniciarContador() {
    setContador(0);
  }

  return { contador, disminuirContador, aumentarContador, reiniciarContador };
}