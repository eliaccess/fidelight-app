import configs from 'configs';
import { Log } from 'platform/Logger';
import qs from 'query-string';

const defaultHeaders: {
  'Content-Type': string;
  Authorization?: string;
  oldToken?: string;
} = {
  'Content-Type': 'application/json',
};

export function setAuthenticationHeader({
  token,
  oldToken,
}: {
  token: string;
  oldToken?: string;
}) {
  if (token) {
    defaultHeaders.Authorization = `Bearer ${token}`;
  }
  if (oldToken) {
    defaultHeaders.oldToken = oldToken;
  } else {
    delete defaultHeaders.oldToken;
  }
  // Log({ defaultHeaders });
}

export function removeAuthenticationHeader() {
  Log('Removing Auth Token');
  delete defaultHeaders.Authorization;
  delete defaultHeaders.oldToken;
}

export function getLocationParam(payload) {
  return {
    city: payload.city,
    country: payload.country,
    language: 'en',
  };
}

interface IAPIArgs {
  url: string;
  method: 'GET' | 'POST';
  body?: any;
  headers?: any;
  params?: any;
  bodyParsing?: boolean;
  parseError?: boolean;
  noAuth?: boolean;
  [key: string]: any;
}

export default async function api(args: IAPIArgs, parsing: string = 'json') {
  const {
    url,
    method = 'GET',
    body = {},
    headers = {},
    params = null,
    baseDomain = configs.API_DOMAIN,
    bodyParsing = 'json',
    parseError = false,
    noAuth = false,
    ...extraProps
  } = args;

  const props = {
    method,
    headers: { ...defaultHeaders, ...headers },
    ...extraProps,
  };

  let fetchUrl = url;
  fetchUrl = `${baseDomain}${url}`;

  if (method !== 'GET') {
    if (bodyParsing === 'json') {
      // @ts-ignore
      props.body = JSON.stringify(body);
    } else {
      // @ts-ignore
      props.body = body;
    }
  }

  if (params) {
    fetchUrl = `${fetchUrl}?${qs.stringify(params, {
      arrayFormat: 'bracket',
    })}`;
  }

  if (noAuth) {
    delete props.headers.Authorization;
    delete props.headers.authorization;
  }
  // Log({ fetchUrl, props });
  const data = await fetch(fetchUrl, props);
  if (data.status >= 400) {
    if (parseError) {
      const error = await data.json();
      // eslint-disable-next-line no-throw-literal
      throw {
        status: data.status,
        error,
      };
    }
    throw data;
  }

  if (parsing === 'json') {
    return data.json();
  }

  return data;
}
