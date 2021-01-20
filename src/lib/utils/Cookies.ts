import cookie from 'js-cookie';
import { Cookies } from 'react-cookie';
import { IncomingMessage } from 'http';

const cookies = new Cookies();

export const setCookie = (key: string, value: string | object) => {
  if (process.browser) {
    cookie.set(key, value, {
      path: '/',
    });
  }
};

export const removeCookie = (key: string) => {
  if (process.browser) {
    cookie.remove(key, {
      expires: 1,
    });
  }
};

export const getCookie = (key: string, req?: IncomingMessage): string => {
  return req && !process.browser
    ? getCookieFromServer(key, req)
    : getCookieFromBrowser(key);
};

const getCookieFromBrowser = (key: string) => {
  return cookies.get(key);
};

const getCookieFromServer = (key: string, req: IncomingMessage) => {
  if (!req?.headers?.cookie) {
    return undefined;
  }
  const rawCookie = req?.headers?.cookie
    .split(';')
    .find((c: string) => c.trim().startsWith(`${key}=`));
  if (!rawCookie) {
    return undefined;
  }
  return decodeURI(rawCookie.split('=')[1]);
};
