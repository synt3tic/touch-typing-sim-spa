import { makeRequest } from ".";

const url = '	https://fish-text.ru/get?format=json&number=1';

const getText = async () => {
  const response = await makeRequest(url, 'GET');
  if (response.status === 200) {
    return await response.json();
  } else {
    throw new Error('Неизвестная ошибка');
  };
}

export {
  getText,
}