import AppConfig from "../Config/App.config";
import endpointBuilder from "../Utils/EndpointBuilder.utils";

interface ApiRequest {
  endpoint: string;
  id?: string;
  params?: string;
}

const callPokemonApiService = async ({ endpoint, id, params }: ApiRequest) => {
  const { apiURL } = AppConfig;
  const endpointURL = endpointBuilder({ url: apiURL, endpoint, id, params });

  const data = await fetch(endpointURL);

  return data.json();
};

export default callPokemonApiService;
