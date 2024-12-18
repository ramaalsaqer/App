const container = document.querySelector(".container")
const Clothes = [
  { name: "Short dresses", image: "https://th.bing.com/th/id/R.e6b1c61a9788677118d3c3b801e06756?rik=daTOBCBKVlweOA&riu=http%3a%2f%2fnew3.co%2fwp-content%2fuploads%2f2018%2f05%2f5720.jpg&ehk=jAri%2bVs%2bncAdJygH6P06zyktz1p7sF%2bh9oFasTFgN%2bo%3d&risl=&pid=ImgRaw&r=0" },
  { name: "shirt", image: "https://png.pngtree.com/png-clipart/20200701/original/pngtree-hand-painted-female-cute-princess-shirt-png-image_5401799.jpg" },
  { name: "Engagement Dresses", image: "https://th.bing.com/th/id/OIP.VNIcAXPR2a5_IpObgYWBUwAAAA?rs=1&pid=ImgDetMain" },
  { name: "Wedding Dresses", image: "https://love-words.net/wp-content/uploads/2019/07/10812-9.jpg" },
  { name: "Formal suits", image: "https://i.ytimg.com/vi/eQ2GIdNgMlA/hqdefault.jpg" },
  { name: "Casual wear", image: "https://th.bing.com/th/id/OIP.cI6KuJZRrwfuWg9myw05nwAAAA?rs=1&pid=ImgDetMain" },
  { name: "Baby Dresses", image: "https://1.bp.blogspot.com/-WEnT8f4VY_Q/Xxbye-rixWI/AAAAAAAAm8A/LzmtjDiFStIlWL_qaxmxc7uSRKGo0uLPACLcBGAsYHQ/s1600/%25D8%25B5%25D9%2588%25D8%25B1-%25D9%2581%25D8%25B3%25D8%25A7%25D8%25AA%25D9%258A%25D9%2586-%25D8%25A7%25D8%25B7%25D9%2581%25D8%25A7%25D9%2584.jpg" },
  { name: "Children's suits", image: "https://i.pinimg.com/736x/ba/27/a3/ba27a39df6939ae1eb7a41751d5be8cc.jpg" },
]

const showClothes = () => {
  let output = ""
  Clothes.forEach(
    ({ name, image }) =>
      (output += `
              <div class="card">
                <img class="card--avatar" src=${image} />
                <h1 class="card--title">${name}</h1>
                <a class="card--link" href="#">Taste</a>
              </div>
              `)
  )
  container.innerHTML = output
}

document.addEventListener("DOMContentLoaded", showClothes)

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("/serviceWorker.js")
      .then(res => console.log("service worker registered"))
      .catch(err => console.log("service worker not registered", err))
  })
}

