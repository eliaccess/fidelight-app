import { Linking } from 'react-native';
import UrlPattern from 'url-pattern';
import QS from 'query-string';

// import { getInitialNotificationRoute } from 'platform/Notifications';
import { Log, Warn } from 'platform/Logger';

import routes from './routeConfigs';

function getRouteObject(match) {
  // eslint-disable-next-line no-restricted-syntax
  for (const key in routes) {
    // console.log('key', key);
    const pattern = new UrlPattern(routes[key].path);
    const check = pattern.match(match);
    if (check) {
      return { routeName: key, pattern };
    }
  }
  return null;
}

export function urlExtractor(url): {
  routeName: string;
  params: {
    city?: string;
    [k: string]: any;
  };
} | null {
  let path;
  let queryString;
  try {
    [, path] = url.split(':/');
    [path, queryString] = path.split('?');
    if (path.indexOf('bogo.pk') > -1) {
      path = path.replace('/bogo.pk', '');
    }
    path = path.replace(/ /g, '-').replace(/'|\.|\+|,|%|&|\(|\)/g, '');
    // console.log({ path });
    const routeObject = getRouteObject(encodeURI(path));
    // console.log({ routeObject });
    if (!routeObject) {
      return null;
    }
    const { pattern, routeName } = routeObject;
    let params = pattern.match(path);
    // console.log({ params });
    if (!params) {
      return null;
    }
    if (queryString) {
      let tmp = {};
      if (params) {
        tmp = params;
      }
      params = {
        ...tmp,
        query: {
          ...QS.parse(queryString, {
            parseBooleans: true,
            parseNumbers: true,
          }),
        },
      };
    }

    Object.keys(params).forEach((key) => {
      // eslint-disable-next-line no-restricted-globals
      if (key.toLowerCase().includes('id') && !isNaN(params[key])) {
        try {
          params[key] = parseInt(params[key], 10);
        } catch (e) {
          Warn(e);
        }
      }
    });
    return { routeName, params: params || {} };
  } catch (e) {
    Warn(e);
    return null;
  }
}

export async function deepLinkingHandler(): Promise<{
  initialCity: string;
  initialRoute: {
    routeName: string;
    params: {
      source: string;
      launcher: string;
    };
  };
} | null> {
  const url = await Linking.getInitialURL();
  // if (!url) {
  //   const notification = await getInitialNotificationRoute();
  //   if (notification?.url) {
  //     url = notification?.url;
  //   }
  // }
  Log({ url });
  if (!url) {
    return null;
  }
  const extractedUrl = urlExtractor(url);
  if (!extractedUrl) {
    return null;
  }

  const { city: initialCity, ...params } = extractedUrl.params;
  const initialRoute = {
    routeName: extractedUrl.routeName,
    params: {
      ...params,
      source: url.indexOf('https') !== -1 ? 'DEEP_LINK' : 'PUSH_NOTIFICATION',
      launcher: url.indexOf('https') !== -1 ? 'DeepLink' : 'PushNotification',
    },
  };
  return {
    initialCity: !initialCity || initialCity === 'device' ? '' : initialCity,
    initialRoute,
  };
}
