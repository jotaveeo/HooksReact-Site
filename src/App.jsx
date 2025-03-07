import { useState } from "react";
import './app.css';

export default function App() {
  const [isVisivel, setVisibilidade] = useState(false);

  const toggleVisibilidade = () => {
    setVisibilidade(!isVisivel);
  };

  const mostrarToast = () => {
    const toats = document.querySelector(".toast");

    if (isVisivel) {
      toats.classList.add("show");

      setTimeout(() => {
        setVisibilidade(!isVisivel);
        toats.classList.remove("show");
      }, 1500);
    }
  };

  const [contador, setContador] = useState(0);

  return (
    <>
      <div>
        <button onClick={toggleVisibilidade}>
          {isVisivel ? "Esconder Mensagem" : "Exibir Mensagem"} Mensagem
        </button>

        {isVisivel && mostrarToast()}
      </div>

      <div className="base-toast">
        <div className="toast">Esta é a mensagem!</div>
      </div>

      {/* TESTE */}
      <button onClick={() => setContador((contador) => contador +1)}>
          Contar
      </button>

      <h3 id="cont">
        {contador}
      </h3>
    </>
  );
}
