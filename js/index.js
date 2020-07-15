const $images = document.querySelectorAll(".img"),
      $containerImg = document.querySelector(".container-img"),
      $caption = document.querySelector(".copy"),
      $close = document.querySelector(".bx.bx-x");

    $images.forEach( el => {
        el.addEventListener("click", () => {
            $containerImg.firstElementChild.setAttribute("src",el.getAttribute("src"));
            $caption.textContent = el.getAttribute("alt");
            $containerImg.classList.toggle("move");
            $containerImg.firstElementChild.classList.toggle("show");
        });
    });

    $close.addEventListener("click", () => {
        $containerImg.classList.toggle("move");
        $containerImg.firstElementChild.classList.toggle("show");
    });