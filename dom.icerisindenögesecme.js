

// let h2 = document.getElementsByTagName ('h2')
let title = document.getElementById('title')
title.innerHTML = "Değişen bilgi"
console.log (title.innerHTML)

let link = document.querySelector("#kodluyoruzLink")
link.innerHTML += " değişti"
link.style.color = "red"
link.classList.add('btn')