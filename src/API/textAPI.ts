import { makeRequest } from ".";

const url = 'https://baconipsum.com/api/?type=meat-and-filler&paras=3';

const getText = async () => {
  const response = await makeRequest(url, 'GET');
  if (response.status === 200) {
    const result = await response.json();
    const text = result[0] + result[1] + result[2];
    return text;
  } else {
    throw new Error('Неизвестная ошибка');
  };
}

export {
  getText,
}