let list = document.querySelector(".list");
console.log(list);
let tog = document.querySelector(".tog");
let dlist = document.querySelectorAll(".dlist");
console.log(dlist);
let clickAlert = "Unclicked";
let sublist = document.querySelectorAll(".sub-list");
console.log(sublist);
let close = document.querySelector(".close");
let navcon = document.querySelector(".nav-con");
let main = document.querySelector("main");
let foodnin = document.querySelector(".foodnin");
let open = document.querySelector(".open");
let details = document.querySelector(".details");
let resipi = document.querySelector('.resipi');







close.addEventListener("click", () => {
  navcon.classList.remove("visible");
  navcon.classList.add("md:hidden");
  main.classList.remove("md:ml-32");
  open.classList.add("md:block");
  foodnin.classList.add("md:block");
});

open.addEventListener("click", () => {
  navcon.classList.remove("md:hidden");
  navcon.classList.add("visible");
  main.classList.add("md:ml-32");
  close.classList.add("md:block");
  open.classList.remove("md:block");
  open.classList.add("hidden");
  foodnin.classList.remove("md:block");
  foodnin.classList.add("hidden");
});

for (i = 0; i < sublist.length; i++) {
  sublist[i].style.marginTop = "15px";
}

tog.addEventListener("click", () => {
  if (list.classList.contains("hidden")) {
    list.classList.remove("hidden");
    list.classList.add("visible");
  } else {
    list.classList.add("hidden");
    list.classList.remove("visible");
  }
});

for (i = 0; i < dlist.length; i++) {
  dlist[i].addEventListener("click", (e) => {
    clickAlert = "clicked";
    console.log(clickAlert);
    console.log(e.target);
    console.log(e.target.innerText + " is clicked");
    console.log(e.target.nextElementSibling);
    if (e.target.nextElementSibling.classList.contains("hidden")) {
      e.target.nextElementSibling.classList.remove("hidden");
      console.log(e.target.nextElementSibling);
      e.target.nextElementSibling.classList.add("visible");
      e.target.nextElementSibling.style.backgroundColor =
        "rgb(240,240,230,0.9)";
    } else {
      e.target.nextElementSibling.classList.add("hidden");
      e.target.nextElementSibling.classList.remove("visible");
      e.target.nextElementSibling.style.backgroundColor = "rgb(241,245,249)";
    }
    for (let j = 0; j < dlist.length; j++) {
      dlist[j].classList.remove("border-r-2");
      dlist[j].classList.remove("border-red-500");
    }

    // Add border color to the clicked dlist element
    e.currentTarget.classList.add("border-r-2");
    e.currentTarget.classList.add("border-red-500");
  });
}
