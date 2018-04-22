"use strict";var currentWidth=document.body.offsetWidth,tabletWidth=768;$("[data-index]").on("click",function(e){var t=parseInt($(e.currentTarget).attr("data-index"));$.fn.moveTo(t)}),$(".main").onepage_scroll({sectionContainer:"section",easing:"ease",animationTime:500,pagination:!0,updateURL:!1,beforeMove:function(e){},afterMove:function(e){},loop:!1,keyboard:!0,responsiveFallback:768,direction:"vertical"}),$(".btn").on("click",function(){currentWidth<=tabletWidth?$(".btn").attr("href","#contacts"):$(".btn").removeAttr("href","#contacts")}),$(".btn-down__link").on("click",function(){currentWidth<=tabletWidth?$(".btn-down__link").attr("href","#features"):$(".btn-down__link").removeAttr("href","#features")});var mobileMenuCheck=document.querySelector("#checkbox"),mobileMenuCont=document.querySelector("#mobile-cont"),mobileMenuLink=document.getElementsByClassName("mobile-menu-link"),mobileMenuBtn=document.querySelector("#mobile-btn");mobileMenuCheck.addEventListener("click",function(){var e=mobileMenuCont.classList.contains("mobile-menu-container--active");e||(mobileMenuCont.classList.add("mobile-menu-container--active"),document.body.style.overflow="hidden",mobileMenuBtn.classList.add("mobile-menu-btn--active:after"),mobileMenuBtn.classList.add("mobile-menu-btn--active:before"),mobileMenuBtn.classList.add("mobile-menu-btn--active")),e&&(mobileMenuCont.classList.remove("mobile-menu-container--active"),document.body.style.overflow="auto",mobileMenuBtn.classList.remove("mobile-menu-btn--active:after"),mobileMenuBtn.classList.remove("mobile-menu-btn--active:before"),mobileMenuBtn.classList.remove("mobile-menu-btn--active"))});for(var i=0;i<mobileMenuLink.length;i++)mobileMenuLink[i].addEventListener("click",function(){mobileMenuCont.classList.remove("mobile-menu-container--active"),document.body.style.overflow="auto",mobileMenuBtn.classList.remove("mobile-menu-btn--active:after"),mobileMenuBtn.classList.remove("mobile-menu-btn--active:before"),mobileMenuBtn.classList.remove("mobile-menu-btn--active")});for(var accoTeam=document.getElementsByClassName("accordeon-team__desc-people"),_loop=function(n){accoTeam[n].addEventListener("click",function(){var e=this.classList.contains("accordeon-team__desc-people--active");if(!e)for(var t=0;t<accoTeam.length;t++)accoTeam[t].classList.remove("accordeon-team__desc-people--active"),accoTeam[n].classList.add("accordeon-team__desc-people--active");e&&this.classList.remove("accordeon-team__desc-people--active")})},_i=0;_i<accoTeam.length;_i++)_loop(_i);for(var accoMenuBtn=document.getElementsByClassName("accordeon-menu__list-btn"),accoMenuDesc=document.getElementsByClassName("accordeon-menu__hidden-desc"),_loop2=function(o){accoMenuBtn[o].addEventListener("click",function(){for(var e=0;e<accoMenuDesc.length;e++){var t=accoMenuDesc[o].classList.contains("accordeon-menu__hidden-desc--active");if(!t)for(var n=0;n<accoMenuDesc.length;n++)accoMenuDesc[n].classList.remove("accordeon-menu__hidden-desc--active"),accoMenuDesc[o].classList.add("accordeon-menu__hidden-desc--active");t&&accoMenuDesc[o].classList.remove("accordeon-menu__hidden-desc--active")}})},_i2=0;_i2<accoMenuBtn.length;_i2++)_loop2(_i2);for(var burgerMenu=document.getElementsByClassName("carousel-burgers__menu"),burgerMenuList=document.getElementsByClassName("carousel-burgers__menu-list"),_loop3=function(o){burgerMenu[o].addEventListener("click",function(){for(var e=0;e<burgerMenuList.length;e++){var t=burgerMenuList[o].classList.contains("carousel-burgers__menu-list--active");if(!t)for(var n=0;n<burgerMenuList.length;n++)burgerMenuList[o].classList.add("carousel-burgers__menu-list--active");t&&burgerMenuList[o].classList.remove("carousel-burgers__menu-list--active")}})},_i3=0;_i3<burgerMenu.length;_i3++)_loop3(_i3);var getBtnMore=document.querySelectorAll(".btn__more"),closeBtn=document.querySelectorAll(".full-review__close"),fullReview=document.querySelectorAll("#full-review"),textTitle=document.querySelectorAll(".comments__title"),textItem=document.querySelectorAll(".comments__text"),addTextItem=document.querySelector(".full-review__content-item"),addTitleItem=document.querySelector(".full-review__title"),commentItem=document.querySelectorAll(".comments__item");$(commentItem).click(function(){var e=$(this).find(textItem).text(),t=$(this).find(textTitle).text();$(addTextItem).text(e),$(addTitleItem).text(t)});for(var _loop4=function(t){getBtnMore[t].addEventListener("click",function(){if(!getBtnMore[t].classList.contains("full-review--active"))for(var e=0;e<fullReview.length;e++)fullReview[e].classList.add("full-review--active"),document.body.style.overflow="hidden"});for(var e=0;e<closeBtn.length;e++)closeBtn[e].addEventListener("click",function(){fullReview[t].classList.remove("full-review--active"),document.body.style.overflow="auto"})},_i4=0;_i4<getBtnMore.length;_i4++)_loop4(_i4);function submitForm(e){e.preventDefault();var n=$(e.target);n.serialize(),n.attr("action"),n.attr("method");ajaxForm(n).done(function(e){var t=e.mes;"OK"===e.status?n.append('<p class="success">'+t+"</p>"):n.append('<p class="error">'+t+"</p>")}).fail(function(e,t){alert("Request failed: "+t)})}slidr.create("best-burgers__slider").start(),$("#order-form").on("submit",submitForm);var ajaxForm=function(e){var t=e.serialize(),n=e.attr("action");return $.ajax({type:"POST",url:n,dataType:"JSON",data:t})};ymaps.ready(init);var placemarks=[{latitude:59.97,longitude:30.31,hintContent:'<div class="map__hint">ул. Литераторов, д. 19</div>',balloonContent:['<div class="map__balloon">','<img class="map__burger-img" src="img/burger-promo.png" alt="Бургер"/>',"Самые вкусные бургеры у нас! Заходите по адресу: ул. Литераторов, д. 19","</div>"]},{latitude:59.94,longitude:30.25,hintContent:'<div class="map__hint">Малый проспект В О, д 64</div>',balloonContent:['<div class="map__balloon">','<img class="map__burger-img" src="img/burger-promo.png" alt="Бургер"/>',"Самые вкусные бургеры у нас! Заходите по адресу: Малый проспект В О, д 64","</div>"]},{latitude:59.93,longitude:30.34,hintContent:'<div class="map__hint">наб. реки Фонтанки, д. 56</div>',balloonContent:['<div class="map__balloon">','<img class="map__burger-img" src="img/burger-promo.png" alt="Бургер"/>',"Самые вкусные бургеры у нас! Заходите по адресу: наб. реки Фонтанки, д. 56","</div>"]}],geoObjects=[];function init(){for(var e=new ymaps.Map("map",{center:[59.94,30.32],zoom:12,controls:["zoomControl"],behaviors:[]}),t=0;t<placemarks.length;t++)geoObjects[t]=new ymaps.Placemark([placemarks[t].latitude,placemarks[t].longitude],{hintContent:placemarks[t].hintContent,balloonContent:placemarks[t].balloonContent.join("")},{iconLayout:"default#image",iconImageHref:"img/sprites/map-marker.svg",iconImageSize:[46,57],iconImageOffset:[-23,-57]});var n=new ymaps.Clusterer({clusterIcons:[{href:"img/burger-promo.png",size:[100,100],offset:[-50,-50]}],clusterIconContentLayout:null});e.geoObjects.add(n),n.add(geoObjects)}