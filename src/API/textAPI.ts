import { makeRequest } from ".";

const getText = async (textLength: string) => {
  const response = await makeRequest(textLength, 'GET');
  if (response.status === 200) {
    return await response.json();
  } else {
    throw new Error('Неизвестная ошибка');
  };
}

export {
  getText,
}