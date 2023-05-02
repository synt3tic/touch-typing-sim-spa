const makeRequest = async (url: string, method: string) => {
  return await fetch(url, {
    method: method,
  })
};

export {
  makeRequest,
};