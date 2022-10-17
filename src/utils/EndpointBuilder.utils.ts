interface EndpointBuilder {
  url: string;
  endpoint: string;
  id?: string;
  params?: string;
}

const endpointBuilder = ({ url, endpoint, id, params }: EndpointBuilder) => {
  if (id) {
    return url + endpoint + id;
  } else if (params) {
    return url + endpoint + params;
  } else {
    return url + endpoint;
  }
};

export default endpointBuilder;
