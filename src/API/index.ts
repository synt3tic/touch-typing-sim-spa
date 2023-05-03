const baseURL = 'https://fish-text.ru/get?format=json';

const makeRequest = async (params: string, method: string) => {
  try {
    return await fetch(baseURL + params, {
      method: method,
    })
  } catch (error) {
    console.log(error);
  }
};

export {
  makeRequest,
};