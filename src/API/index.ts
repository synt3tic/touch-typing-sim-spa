const baseURL = 'https://fish-text.ru/get?format=json';

const makeRequest = async (params: string, method: string) => {
  return await fetch(baseURL + params, {
    method: method,
  })
};

export {
  makeRequest,
};