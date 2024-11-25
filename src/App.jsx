import { useId } from 'react';
import { useContador } from './hooks/useContador';

function App() {
  const inputDisminuir = useId();
  const inputAumentar = useId();

  function disminuirCustom() {
    const inputValue = document.getElementById(inputDisminuir).value;
    document.getElementById(inputDisminuir).value = '';

    const customValue = inputValue === '' ? 0 : parseInt(inputValue);
    disminuirContador(customValue);
  }

  function aumentarCustom() {
    const inputValue = document.getElementById(inputAumentar).value;
    document.getElementById(inputAumentar).value = '';

    const customValue = inputValue === '' ? 0 : parseInt(inputValue);
    aumentarContador(customValue);
  }

  const { contador, disminuirContador, aumentarContador, reiniciarContador } =
    useContador();

  return (
    <main className='w-4/5 lg:w-3/5 aspect-video my-10 md:my-20 mx-auto'>
      <section className='pb-10'>
        <h1 className="uppercase font-bold text-center text-4xl pb-2">Contador</h1>
        <p className="text-center text-xl">
          Contador simple con botones para incrementar, decrementar y resetear
        </p>
      </section>

      <section className="px-5 py-10 md:px-10 md:py-20 grid grid-cols-1 md:grid-cols-[2fr_1fr_2fr] gap-10 md:gap-0 place-content-center">
        <div className="flex flex-row-reverse md:flex-row justify-between md:justify-center items-center gap-5">
          <div className="w-20 flex flex-col gap-3">
            <input
              type="number"
              className="text-black text-center outline-none bg-gray-400 border-gray-900 border-4 py-1 border-solid font-bold"
              id={inputDisminuir}
            />
            <button
              className="bg-purple-600 py-1 px-3 rounded-md hover:bg-purple-900 font-bold"
              onClick={disminuirCustom}
            >
              -
            </button>
          </div>

          <button
            className="bg-orange-600 py-1 px-3 rounded-md hover:bg-orange-900 font-bold"
            onClick={() => disminuirContador(3)}
          >
            -3
          </button>

          <button
            className="bg-green-600 py-1 px-3 rounded-md hover:bg-green-900 font-bold"
            onClick={() => disminuirContador(2)}
          >
            -2
          </button>

          <button
            className="bg-blue-600 py-1 px-3 rounded-md hover:bg-blue-900 font-bold"
            onClick={() => disminuirContador(1)}
          >
            -1
          </button>
        </div>

        <div className="-order-1 md:order-none flex justify-center items-center flex-col gap-8">
          <div className="w-4/5 md:w-full aspect-square rounded-full border-gray-600 border-solid border-8 shadow-xl shadow-gray-600/30 font-bold flex items-center justify-center text-6xl">
            {contador}
          </div>

          <button
            className="bg-gray-900 py-2 px-5 rounded-md hover:bg-gray-600"
            onClick={reiniciarContador}
          >
            Reiniciar
          </button>
        </div>

        <div className="flex md:justify-center items-center justify-between gap-5">
          <button
            className="bg-blue-600 py-1 px-3 rounded-md hover:bg-blue-900 font-bold"
            onClick={() => aumentarContador(1)}
          >
            +1
          </button>

          <button
            className="bg-green-600 py-1 px-3 rounded-md hover:bg-green-900 font-bold"
            onClick={() => aumentarContador(2)}
          >
            +2
          </button>

          <button
            className="bg-orange-600 py-1 px-3 rounded-md hover:bg-orange-900 font-bold"
            onClick={() => aumentarContador(3)}
          >
            +3
          </button>

          <div className="w-20 flex flex-col gap-3">
            <input
              type="number"
              className="text-black text-center outline-none bg-gray-400 border-gray-900 border-4 py-1 border-solid font-bold"
              id={inputAumentar}
            />
            <button
              className="bg-purple-600 py-1 px-3 rounded-md hover:bg-purple-900 font-bold"
              onClick={aumentarCustom}
            >
              +
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
