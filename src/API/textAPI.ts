import { makeRequest } from ".";

const getText = async (textLength: string) => {
  const response = await makeRequest(textLength, 'GET');
  if (!response) {
    throw new Error('Неизвестная ошибка');
  }
  if (response.status !== 200) {
    throw new Error('Неизвестная ошибка');
  }
  return await response.json();
}

export {
  getText,
}