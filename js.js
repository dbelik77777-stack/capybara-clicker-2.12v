let span = document.querySelector("#spanCount")
let tapArea = document.querySelector("#tapArea")
let count = 0

// Якщо є збережений рахунок у localStorage — завантажуємо його
if (localStorage.getItem("count")) {
  count = parseInt(localStorage.getItem("count"))
}

// Функція для вибору картинки та ліміту
function getLevelData(count) {
  if (count > 300000000) return { img: "img/15.webp", limit: 1000000000 }
  if (count > 100000000) return { img: "img/14.png", limit: 300000000 }
  if (count > 50000000) return { img: "img/13.png", limit: 100000000 }
  if (count > 30000000) return { img: "img/12.png", limit: 50000000 }
  if (count > 15000000) return { img: "img/11.png", limit: 30000000 }
  if (count > 5000000) return { img: "img/10.png", limit: 15000000 }
  if (count > 1000000) return { img: "img/9.png", limit: 5000000 }
  if (count > 500000) return { img: "img/8.png", limit: 1000000 }
  if (count > 100000) return { img: "img/7.png", limit: 500000 }
  if (count > 50000) return { img: "img/6.webp", limit: 100000 }
  if (count > 15000) return { img: "img/5.webp", limit: 50000 }
  if (count > 1000) return { img: "img/4.webp", limit: 15000 }
  if (count > 200) return { img: "img/3.png", limit: 1000 }
  if (count > 25) return { img: "img/2.png", limit: 200 }
  return { img: "img/1.webp", limit: 25 }
}

// Створюємо картинку і ставимо відповідну
let img = document.createElement("img")
img.classList.add("capy1")
tapArea.append(img)

// Функція оновлення span
function updateSpan(limit) {
  span.innerHTML = "рахунок: " + count + " 🪙 /" + limit
}

// Оновлюємо при завантаженні
let startData = getLevelData(count)
img.src = startData.img
updateSpan(startData.limit)

let randomPlace 

function f1() {
  count ++

  randomPlace = Math.floor(Math.random() * 90)
  let sixseven = document.createElement("h5")
  sixseven.innerHTML = "+1"
  tapArea.append(sixseven)
  sixseven.style.left = randomPlace + "%"

  // Визначаємо нові дані рівня
  let levelData = getLevelData(count)
  img.src = levelData.img
  updateSpan(levelData.limit)

  // Зберігаємо рахунок
  localStorage.setItem("count", count)
}

img.onclick = f1
