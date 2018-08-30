if (process.env.NODE_ENV === "production") {
  importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js");
  
  if (workbox) {
    workbox.setConfig({debug: false})
    workbox.routing.registerRoute(
      /\.(png|gif|jpg|jpeg|svg)/,
      workbox.strategies.cacheFirst({
        cacheName: 'images',
        plugins: [
          new workbox.expiration.Plugin({
            maxEntries: 60,
            maxAgeSeconds: 7 * 24 * 60 * 60,
          }),
        ],
      }),
    );
    workbox.routing.registerRoute(
      /.*(?:googleapis|gstatic)\.com.*\.(png|gif|jpg|jpeg|svg)/,
      workbox.strategies.cacheFirst({
        cacheName: 'images',
      }),
    );
    workbox.routing.registerRoute(
      /\/$|(\/index\.html)/,
      workbox.strategies.staleWhileRevalidate({
        cacheName: 'static',
      }),
    );
    workbox.routing.registerRoute(
      /\.(?:json|js|css)/,
      workbox.strategies.staleWhileRevalidate({
        cacheName: 'static',
      }),
    );
  } else {
    console.error(`Fail to load workbox`);
  }
}