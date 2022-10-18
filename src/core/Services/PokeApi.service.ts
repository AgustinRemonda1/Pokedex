import { endpointBuilder } from "utils";

interface ApiRequest {
  endpoint: string;
  id?: string;
  params?: string;
}

const callPokeApiService = async ({ endpoint, id, params }: ApiRequest) => {
  const url = "/api/v1/pokedex";
  const endpointURL = endpointBuilder({ url, endpoint, id, params });

  const data = await fetch(endpointURL);

  return data.json();
};

export default callPokeApiService;
