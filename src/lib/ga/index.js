import * as prodLytics from './analytics/prod';
import * as devLytics from './analytics/dev';

const isLocal = () => {
  return location.hostname === 'localhost';
};

const isDev = () => {
  return process.env.NODE_ENV !== 'production';
};

const initGA = (code, Router) => {
  const shouldNotTrack = isLocal() || isDev();
  // check if it should use production or dev analytics
  const analytics = shouldNotTrack ? devLytics : prodLytics;

  // init analytics
  analytics.init(code);
  // log page
  analytics.pageview();

  // save possible previously defined callback
  const previousCallback = Router.onRouteChangeComplete;
  Router.onRouteChangeComplete = () => {
    // call previously defined callback if is a function
    if (typeof previousCallback === 'function') {
      previousCallback();
    }
    // log page
    analytics.pageview();
  };
};

export default initGA;
