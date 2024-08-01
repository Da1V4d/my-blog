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
    "revision": "1ee2a3bcf546db8117ca7c5a81b1e6ff"
  },
  {
    "url": "assets/css/0.styles.e273ad4e.css",
    "revision": "7eca21d06d23b96cfe1e240b6fff5222"
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
    "url": "assets/js/12.221cd6c4.js",
    "revision": "57f4e66b245d6d20ff699d7bb95674f4"
  },
  {
    "url": "assets/js/13.ff8869d1.js",
    "revision": "b8934ecdfbc3eb16d6388595c0372104"
  },
  {
    "url": "assets/js/14.179eaf8f.js",
    "revision": "7fdc669ad85130ad137a228209249b3d"
  },
  {
    "url": "assets/js/15.740d29e0.js",
    "revision": "ed1178aae3893d0a9f56c232548be0df"
  },
  {
    "url": "assets/js/16.68e9bb4b.js",
    "revision": "67fedde0bd35a92b05060a60f710c736"
  },
  {
    "url": "assets/js/17.287fa90a.js",
    "revision": "6bfe9f510eef6ee814bac18322a20aa7"
  },
  {
    "url": "assets/js/18.5ac236ed.js",
    "revision": "6ebf26e8a597d729a1f560a4bfc03fc9"
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
    "url": "assets/js/app.64f541e7.js",
    "revision": "01355683122c3e0e005ed3fb34a18fa9"
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
    "revision": "5e02a5c875c081c91e70461637cd5d9e"
  },
  {
    "url": "categories/java/index.html",
    "revision": "0e3ceab2bd40a4756499db4d6ebbf9f2"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "648f664fef76ad6ecb37765acace3763"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "102f2488b7febe177c004c36ab5546f1"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "1b1b317486906a4c4d8165f162da0063"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "780dd26b3fc016d042fa37e5d12d8f39"
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
    "revision": "db47c92e84d64be61f2aed42b52311ce"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "ce823ed41f802c8c561359ece00bfd3c"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "c13105a60a29fcf842ab8855a1e41658"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "6a6d83696b50a074166b267de8ced690"
  },
  {
    "url": "tags/js/index.html",
    "revision": "55376a5a26c43384ec7989eff606350d"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "57b1eb8a19014a9b6878a3dbaca68326"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "dfe5fdad1d5d2e0f1c2b3089d2a22ba8"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "eb455f5237821686011ab5df3fa4ba5a"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "1374a653a9ddc3c0ad1847eaab9dc948"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "6da67846f0e8e84f58985afef68ef402"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "0677f0583572a60b3c5e62679a8456c5"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "312050d89b7bb0a2d97b9a4c746c3110"
  },
  {
    "url": "timeline/index.html",
    "revision": "40847ab6ab0af45cf1c29e1e9ef2d179"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "d2e6f1cd6a94157bdff702e2b893627e"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "8fae60a919f56d8742207ed3a8d08139"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "60a60209ad1e95e940704491083dd965"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "171badc9959ea996dde119330eb1a368"
  },
  {
    "url": "生活分享/life.html",
    "revision": "cc36abd7328337305a3dd5947ae60cea"
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
