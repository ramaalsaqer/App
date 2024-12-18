const staticClothes = "dev-Clothes-site-v1"
const assets = [
  "/",
  "/index.html",
  "/style.css",
  "/app.js",
  "/images/https://th.bing.com/th/id/R.e6b1c61a9788677118d3c3b801e06756?rik=daTOBCBKVlweOA&riu=http%3a%2f%2fnew3.co%2fwp-content%2fuploads%2f2018%2f05%2f5720.jpg&ehk=jAri%2bVs%2bncAdJygH6P06zyktz1p7sF%2bh9oFasTFgN%2bo%3d&risl=&pid=ImgRaw&r=0",
  "/images/https://png.pngtree.com/png-clipart/20200701/original/pngtree-hand-painted-female-cute-princess-shirt-png-image_5401799.jpg",
  "/images/https://th.bing.com/th/id/OIP.VNIcAXPR2a5_IpObgYWBUwAAAA?rs=1&pid=ImgDetMain",
  "/images/https://love-words.net/wp-content/uploads/2019/07/10812-9.jpg",
  "/images/https://i.ytimg.com/vi/eQ2GIdNgMlA/hqdefault.jpg",
  "/images/https://th.bing.com/th/id/OIP.cI6KuJZRrwfuWg9myw05nwAAAA?rs=1&pid=ImgDetMain",
  "/images/https://1.bp.blogspot.com/-WEnT8f4VY_Q/Xxbye-rixWI/AAAAAAAAm8A/LzmtjDiFStIlWL_qaxmxc7uSRKGo0uLPACLcBGAsYHQ/s1600/%25D8%25B5%25D9%2588%25D8%25B1-%25D9%2581%25D8%25B3%25D8%25A7%25D8%25AA%25D9%258A%25D9%2586-%25D8%25A7%25D8%25B7%25D9%2581%25D8%25A7%25D9%2584.jpg",
  "/images/https://i.pinimg.com/736x/ba/27/a3/ba27a39df6939ae1eb7a41751d5be8cc.jpg",
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticClothes).then(cache => {
      cache.addAll(assets)
    })
  )
})

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request)
    })
  )
})
