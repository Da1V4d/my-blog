/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "47083e137955ed152240f2e16bea8c3e"
  },
  {
    "url": "assets/css/0.styles.3a9f6531.css",
    "revision": "12accb44e818c4825ee52164c581e3bb"
  },
  {
    "url": "assets/img/1653118922924.72d846fb.png",
    "revision": "72d846fb69746976a4d772fb9e591d71"
  },
  {
    "url": "assets/img/1653119053628.69b5bb13.png",
    "revision": "69b5bb133d2236a6f2c6c21ddda32313"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/img/iconfont.36767f3e.svg",
    "revision": "36767f3efa2e4c880f42a42e8b2075b0"
  },
  {
    "url": "assets/js/1.e2e88ac6.js",
    "revision": "63ee03f03d39c47d65ac67485a27a829"
  },
  {
    "url": "assets/js/10.0f1a6214.js",
    "revision": "aed2ce279cb8069139b9ce0b4c0d8761"
  },
  {
    "url": "assets/js/11.1dcef5e3.js",
    "revision": "b44c80b1e90dd1fea3953864833ff464"
  },
  {
    "url": "assets/js/12.e1bab619.js",
    "revision": "0c777fe88fdd1926f6457e03ff5126c9"
  },
  {
    "url": "assets/js/13.4ab2683e.js",
    "revision": "7208e8294b490b53b99964be4640a8ae"
  },
  {
    "url": "assets/js/14.5f924852.js",
    "revision": "edddc78d86dcaef751018ef08cda00c4"
  },
  {
    "url": "assets/js/15.d618cf92.js",
    "revision": "a2d0f51575afa3dcaa017af980cb1114"
  },
  {
    "url": "assets/js/16.312b5bea.js",
    "revision": "bc467476030fc056cc659098f66714de"
  },
  {
    "url": "assets/js/17.0c8ba930.js",
    "revision": "f3b3829f30862a26a1165dfbe885459c"
  },
  {
    "url": "assets/js/18.f08bf664.js",
    "revision": "826306b4983d384ba3626387a7270c4c"
  },
  {
    "url": "assets/js/4.f34cd38b.js",
    "revision": "e10459d3809dba98c1bba49ef9ec64c3"
  },
  {
    "url": "assets/js/5.cd1ce7f8.js",
    "revision": "7347dfdedba2d017c568c7b51150269e"
  },
  {
    "url": "assets/js/6.89cc5adc.js",
    "revision": "6663f4417c923daea0fe08aad64d7c09"
  },
  {
    "url": "assets/js/7.6503cb7d.js",
    "revision": "fe02ddd8bfbd811354a0d6b7f3f2a35d"
  },
  {
    "url": "assets/js/8.fc5b7506.js",
    "revision": "868cb4ce0a0a9291b4a5dade91da3cf6"
  },
  {
    "url": "assets/js/9.d898caf8.js",
    "revision": "c6abf0f2268fd16ebac5d1a16ddc286e"
  },
  {
    "url": "assets/js/app.699196ef.js",
    "revision": "b14c2839fd2961dfe1a678e3628052f0"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "5e531c8203c137050051b7eabfedadb7"
  },
  {
    "url": "assets/js/vendors~flowchart.fe7c321e.js",
    "revision": "a64ebb2f4c1ee386f2eed5d866fffdab"
  },
  {
    "url": "avatar.png",
    "revision": "9e9bc9348ad2729ea7d2aedf5dd2de88"
  },
  {
    "url": "categories/index.html",
    "revision": "5061ef75e2ed12d9cb3fedf368bcd0fe"
  },
  {
    "url": "categories/java/index.html",
    "revision": "968c62070706f3857bb7f5b4e1c0faf0"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "515f53eb6925d416c7bfae646d89562a"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "97bc9816a49790dd7ad51286371e3334"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "3843f2099c65b088b0c505d9e76c8d60"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "d06e738969b1f645ba40e54be309afdf"
  },
  {
    "url": "hero_white.png",
    "revision": "5c707c6a6f8be5e1b6d767c83cedc8d5"
  },
  {
    "url": "img/5.jpg",
    "revision": "c48683b7627396b02eb4a7df386431f5"
  },
  {
    "url": "img/kbjw2.jpg",
    "revision": "78b0701cb66d42de9a6eaa6b0ff38ece"
  },
  {
    "url": "img/logo.png",
    "revision": "b35e54e85218c085de994fdcdd7726bf"
  },
  {
    "url": "img/sidebar_280140.png",
    "revision": "30e2bf90705fc32e783f29a833736c17"
  },
  {
    "url": "img/sidebar_2801401.png",
    "revision": "0c2331a84c22028e9d50010be4c9b71f"
  },
  {
    "url": "img/sidebar_28014022.png",
    "revision": "67ed912a57fe22a89c7ef25bfa3d6c74"
  },
  {
    "url": "index.html",
    "revision": "bec4cf2cb2c5426e06a00b7ad3f5ab9b"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "bbfd1417993df82f1967051ffaef0473"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "a3d10cb200096c302955c1051140d2be"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "081f353a5e32b01e1e23db2e0b127036"
  },
  {
    "url": "tags/js/index.html",
    "revision": "738e1d643ca75713637a5a0889e60187"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "1d4adec07a3290eba6b15b6a39869a6e"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "de63bfa8e29702655ef8dca0d69b1f25"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "a3ad1804d468481a8182389038daede5"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "967040142694248da50ca604afb6f629"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "4a17828bf6758fcf0f971b0d6429b64b"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "2b12cfa2e81cb521c63f7410149b8e8e"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "697fae01b51527305cfc9d6741fe9c8b"
  },
  {
    "url": "timeline/index.html",
    "revision": "fe2eb8faef522634b4c3c451b177906a"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "e8e73135462ff7d186df78c3c59a70b5"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "77c025534f25161ffc0146f83664f2e6"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "bd599086ffe88908df6c8f256b589ef0"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "1000d67d1ec208731868ac4f0d524334"
  },
  {
    "url": "生活分享/life.html",
    "revision": "53e806b901cdadfca8236eccef944868"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
