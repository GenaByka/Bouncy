let menuBtn = document.querySelectorAll('.menu-template'),
   links = document.querySelectorAll('.light-link'),
   burgerBtn = document.querySelector('.header__menu-burger'),
   sidebarMenu = document.querySelector('.sidebar');


burgerBtn.addEventListener('click', function () {
   this.classList.toggle('active');
   sidebarMenu.classList.toggle('active');
});

links.forEach(links => {
   links.onclick = function (event) {
      event.preventDefault();
   };
});


menuBtn.forEach(menuBtn => {
   menuBtn.addEventListener('click', function () {
      let menuArrow = this.querySelector('.fa-angle-right'),
         menuList = this.querySelector('.menu-template__list');
      menuList.onclick = function (event) {
         event.stopPropagation();
      };
      menuList.classList.toggle('active');
      menuArrow.classList.toggle('active');

   });
});

