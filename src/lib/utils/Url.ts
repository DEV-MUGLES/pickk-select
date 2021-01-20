import { ImageSize } from '@src/component/atoms/Img';

export const constructUrl = (pathname: string, queries: {}) => {
  const queryString = Object.keys(queries)
    .map((v) => [v, queries[v]])
    .reduce((acc, cur, i) => {
      return acc + (i === 0 ? '?' : '&') + cur[0] + '=' + cur[1];
    }, '');
  return pathname + queryString;
};

export const getQueryParameters = (url: string) => {
  const queryString = url.substring(url.indexOf('?') + 1);
  if (queryString === url) return {};
  const result = {};
  queryString.split('&').forEach((query) => {
    const name = query.substring(0, query.indexOf('='));
    const value = query.substring(query.indexOf('=') + 1, query.length);
    result[name] = value;
  });
  return result;
};

export const getHostName = (url: string) =>
  new URL(url).hostname.replace('www.', '');

export const addImageSize = (url: string, size: ImageSize): string => {
  if (!url || !size) {
    return url;
  }
  const _urlLen = url.length;
  const _lastSlash = url.lastIndexOf('/');

  const _path = url.substring(0, _lastSlash);
  const _filename = url.substring(_lastSlash + 1, _urlLen);

  return `${_path}/${size}/${_filename}`;
};

export const getYoutubeThumbnailSrc = (youtubeVideoId?: string) =>
  youtubeVideoId
    ? `http://i.ytimg.com/vi/${youtubeVideoId}/maxresdefault.jpg`
    : null;
