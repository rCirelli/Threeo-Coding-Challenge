'use client';
import { useFormState } from 'react-dom';
import { calculate } from './actions';

const initialState = {
  result: '',
};

export default function Home() {
  const [state, formAction] = useFormState(calculate, initialState);

  return (
    <>
      <main className="flex flex-col items-center justify-center py-10 gap-10">
        <h1 className="text-2xl">Threeo Calculator</h1>
        <form
          id="calc-form"
          action={formAction}
          className="flex gap-5 justify-center items-center"
        >
          <input
            type="number"
            name="n1"
            id="n1"
            className="border border-slate-300 size-20 text-center align-middle flex items-center rounded-lg text-2xl shadow-md"
          />
          <select
            name="operation"
            className="bg-slate-100 rounded-full size-12 text-2xl text-center"
          >
            <option value="sum">+</option>
            <option value="sub">-</option>
            <option value="mult">*</option>
            <option value="div">/</option>
          </select>
          <input
            type="number"
            name="n2"
            id="n2"
            className="border border-slate-300 size-20 text-center align-middle flex items-center rounded-lg text-2xl shadow-md"
          />
        </form>
        <button
          form="calc-form"
          type="submit"
          className="text-lg bg-blue-500 px-5 py-2 rounded-full border border-blue-400 text-slate-900 hover:bg-blue-400 active:bg-blue-600"
        >
          Calcular!
        </button>
      </main>
      <div className='size-full text-center'>
        <span className='text-lg font-light italic'>{state.result ? 'Resultado' : null}</span>
        <h1 className='my-3 size-full text-center text-5xl'>{state?.result}</h1>
      </div>
    </>
  );
}
