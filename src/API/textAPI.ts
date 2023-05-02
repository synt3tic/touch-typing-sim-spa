import { makeRequest } from ".";

const url = 'https://baconipsum.com/api/?type=meat-and-filler';

const getText = async () => {
  const response = await makeRequest(url, 'GET');
  const text = await response.json();
  return text;
}

export {
  getText,
}