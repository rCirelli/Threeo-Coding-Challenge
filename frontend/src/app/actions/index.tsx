'use server';

const baseUrl = 'http://localhost:3003/';

export async function calculate(prevState: any, formData: FormData) {
  const n1 = formData.get('n1');
  const n2 = formData.get('n2');
  const operation = formData.get('operation');

  const urlParams = `n1=${n1}&n2=${n2}`;
  const calcUrl = new URL(`/calc/${operation}`, baseUrl);
  calcUrl.search = urlParams;

  const res = await fetch(calcUrl);
  const result = await res.json();
  return { result }
}
