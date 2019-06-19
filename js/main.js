(function ($) {
  'use strict';
  // This is a functions that scrolls to #{blah}link
  function goToByScroll(id) {
    // Remove "link" from the ID
    id = id.replace('link', '');
    // Scroll
    $('html,body').animate({
        scrollTop: $('#' + id).offset().top
      },
      'slow'
    );
  }

  $('.scrollToAbout').click(function (e) {
    // Prevent a page reload when a link is pressed
    e.preventDefault();
    // Call the scroll function
    console.log();
    goToByScroll($(this).attr('data-toScroll'));
  });
  $('.carousel-inner .item:first-child').addClass('active');
  /* Mobile menu click then remove
    ==========================*/
  $('.mainmenu-area #mainmenu li a').on('click', function () {
    $('.navbar-collapse').removeClass('in');
  });
  /*WoW js Active
    =================*/
  new WOW().init({
    mobile: true
  });
  /* Scroll to top
    ===================*/
  $.scrollUp({
    scrollText: '<i class="fa fa-angle-up"></i>',
    easingType: 'linear',
    scrollSpeed: 900,
    animation: 'fade'
  });
  /* testimonials Slider Active
    =============================*/
  $('.testimonials').owlCarousel({
    loop: true,
    margin: 0,
    responsiveClass: true,
    nav: true,
    autoplay: true,
    autoplayTimeout: 4000,
    smartSpeed: 1000,
    navText: [
      '<i class="ti-arrow-left"></i>',
      '<i class="ti-arrow-right" ></i>'
    ],
    items: 1
  });
  /* testimonials Slider Active
    =============================*/
  $('.screen-slider').owlCarousel({
    loop: true,
    margin: 0,
    responsiveClass: true,
    nav: true,
    autoplay: true,
    autoplayTimeout: 4000,
    smartSpeed: 1000,
    navText: [
      '<i class="ti-arrow-left"></i>',
      '<i class="ti-arrow-right" ></i>'
    ],
    items: 1,
    animateIn: 'fadeIn',
    animateOut: 'fadeOut',
    center: true
  });
  /* testimonials Slider Active
    =============================*/
  $('.clients').owlCarousel({
    loop: true,
    margin: 30,
    responsiveClass: true,
    nav: true,
    autoplay: true,
    autoplayTimeout: 4000,
    smartSpeed: 1000,
    navText: [
      '<i class="ti-arrow-left"></i>',
      '<i class="ti-arrow-right" ></i>'
    ],
    responsive: {
      0: {
        items: 3
      },
      600: {
        items: 4
      },
      1000: {
        items: 6
      }
    }
  });
  /*--------------------
       MAGNIFIC POPUP JS
       ----------------------*/
  var magnifPopup = function () {
    $('.work-popup').magnificPopup({
      type: 'image',
      removalDelay: 300,
      mainClass: 'mfp-with-zoom',
      gallery: {
        enabled: true
      },
      zoom: {
        enabled: true, // By default it's false, so don't forget to enable it

        duration: 300, // duration of the effect, in milliseconds
        easing: 'ease-in-out', // CSS transition easing function

        // The "opener" function should return the element from which popup will be zoomed in
        // and to which popup will be scaled down
        // By defailt it looks for an image tag:
        opener: function (openerElement) {
          // openerElement is the element on which popup was initialized, in this case its <a> tag
          // you don't need to add "opener" option if this code matches your needs, it's defailt one.
          return openerElement.is('img') ?
            openerElement :
            openerElement.find('img');
        }
      }
    });
  };
  // Call the functions
  magnifPopup();

  //Background Parallax
  $('.header-area').parallax('50%', -0.4);
  $('.price-area').parallax('50%', -0.5);
  $('.testimonial-area').parallax('10%', -0.2);

  $('#accordion .panel-title a').prepend('<span></span>');

  //Function to animate slider captions
  function doAnimations(elems) {
    //Cache the animationend event in a variable
    var animEndEv = 'webkitAnimationEnd animationend';

    elems.each(function () {
      var $this = $(this),
        $animationType = $this.data('animation');
      $this.addClass($animationType).one(animEndEv, function () {
        $this.removeClass($animationType);
      });
    });
  }

  //Variables on page load
  var $myCarousel = $('.caption-slider'),
    $firstAnimatingElems = $myCarousel
    .find('.item:first')
    .find("[data-animation ^= 'animated']");

  //Initialize carousel
  $myCarousel.carousel();

  //Animate captions in first slide on page load
  doAnimations($firstAnimatingElems);

  //Pause carousel
  $myCarousel.carousel('pause');

  //Other slides to be animated on carousel slide event
  $myCarousel.on('slide.bs.carousel', function (e) {
    var $animatingElems = $(e.relatedTarget).find(
      "[data-animation ^= 'animated']"
    );
    doAnimations($animatingElems);
  });

  // Select all links with hashes
  $('.mainmenu-area a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function (event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, '') ==
        this.pathname.replace(/^\//, '') &&
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ?
          target :
          $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $('html, body').animate({
              scrollTop: target.offset().top
            },
            1000,
            function () {
              // Callback after animation
              // Must change focus!
              var $target = $(target);
              $target.focus();
              if ($target.is(':focus')) {
                // Checking if the target was focused
                return false;
              } else {
                $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
              }
            }
          );
        }
      }
    });

  /* Preloader Js
    ===================*/
  $(window).on('load', function () {
    $('.preloader').fadeOut(500);
  });
})(jQuery);

if (window.location.pathname === "/" || window.location.pathname === "/index.html") {
  $(window).scroll(function () {
    $(".mainmenu-area").toggleClass('scrolled', $(this).scrollTop() > 50);
  });
} else {
  $(".mainmenu-area").addClass('scrolled');
}



//Profile Slider

(function () {
  $('#carousel-item').carousel({
    interval: 6000
  });
}());


(function () {
  $('.carousel-multiItem  .item').each(function () {
    var itemToClone = $(this);
    /*
    .....number  of item show  in slide  !
    */
    for (var i = 1; i < 3; i++) {
      /* 
        ..... go to the  next  item  in curasol 
      */
      itemToClone = itemToClone.next();


      if (!itemToClone.length) {
        itemToClone = $(this).siblings(':first');
      }


      itemToClone.children(':first-child').clone()
        .addClass("cloneditem-" + (i))
        .appendTo($(this));

      $(".carousel-multiItem ").find(".item").css("transition", "   500ms ease-in-out all  ").css("transition", "  500ms ease-in-out all").css("backface-visibility", "visible").css("transform", "none!important")

    }
  });
}());


///Rendering Creators based on Firabase data

firebase.database()
  .ref('Users')
  .orderByChild('User_IsCreator')
  .equalTo('True')
  .once('value')
  .then(res => {
    let usersObject = res.val();
    successCallbackMain(usersObject);
  })
  .catch(err => console.log(err))



function successCallbackMain(x) {
  let usersArray = Object.values(x)

  let user = `
${usersArray.map(profile => {
  
  let profileImageUrl = `http://triplee.info/Triple_E_Social/ProfilePictures/${profile.User_ID}.jpg`;
  
  return (
  ` <div class="col-md-3 creatorCard">
    <a href="/profile.html?id=${profile.User_ID}" data = ${profile.User_ID}>
           <div class="creator">
             <div class="header">
             <img src=${profileImageUrl} alt="">
             </div>
             <div class="Ocean">
              <div class=" Coral">
                 <div><span class="Coralwave1"></span><span class="Coralwave2"></span><span class="Coralwave3"></span>
                 </div>
               </div>
             </div>
             <div class="body">
               <p>${profile.User_FullName}</p>
            
               <div class="hashtags">
                 <p>${profile.User_Skills}</p>
               </div>
             </div>
           </div>
       </a>
    </div>`)
}).join('')}
`;



  let creatorCardDeck = document.querySelector(".creatorCardDeck");
  if (creatorCardDeck) {
    creatorCardDeck.innerHTML = user;
  }


  // Artists list expand

  $(function () {
    $(".creatorCard").slice(0, 4).show();
    $("#more").click(function (e) {
      e.preventDefault();
      $(".creatorCard:hidden").slice(0, 8).slideDown();
      $("#more").hide();
      $("#less").show();
    });
    $("#less").click(function (e) {
      e.preventDefault();
      $(".creatorCard").slice(0, 4).show();
      $(".creatorCard").slice(4, 12).slideUp();
      $("#more").show();
      $("#less").hide();
    });
  });


  ///Rendering Creator's Profile page based on Firabase data

  let creatorCards = document.querySelectorAll(".creatorCard");

  for (let i = 0; i < creatorCards.length; i++) {
    creatorCards[i].addEventListener('click', (e) => {

      localStorage.setItem("id", usersArray[i].User_ID);
      localStorage.setItem("fullName", usersArray[i].User_FullName);
      localStorage.setItem("email", usersArray[i].User_Email);
      showProfile();
    })

  }

}

if (window.location.pathname == "/profile.html") {
  showProfile();
}



function showProfile() {

  let userId = document.location.search.substring(4);
  firebase.database()
    .ref('Users/' + userId)
    .once('value')
    .then(res => {
      let creatorData = res.val();
      successCallbackProfile(creatorData)
    })
    .catch(err => console.log(err))

}

function successCallbackProfile(creatorData) {

  let profileImageUrl = `http://triplee.info/Triple_E_Social/ProfilePictures/${creatorData.User_ID}.jpg`;
  let socialLinksObject = creatorData.User_SocialLinks;


  let socialLinksBlock = `${Object.keys(socialLinksObject).map(function(key) {
  let iconImage = "";
  let value = socialLinksObject[key];
  key = key.toLowerCase();
  
  (key == "googlepoly") ? (iconImage="<img src='images/poly-bw.jpg' class='iconImage' />") : console.log("");
  (key == "sketchfab") ? (iconImage="<img src='images/sketchfab.jpg' class='iconImage' />") : console.log("");
  (!(key == "googlepoly" || key == "sketchfab")) ? (iconImage = "") : console.log("");

if(value){
  return (` <a href = ${value}  target = "_blank"> ${iconImage} <i class = "fa fa-${key} fa-2x" aria - hidden = "true" > </i> </a>
    `);
}else return null;
  
}).join('')
}`


  // let creatorBio = creatorData.User_Bio.split(" ").slice(0, 20).join(" ");
  // let creatorSkills = creatorData.User_Skills.split(" ").slice(0, 8).join(" ");

  let creatorDescription = `<div class="header">
  <img src=${profileImageUrl} alt="">
</div>
<div class="Ocean">
  <div class=" Coral">
    <div><span class="Coralwave1"></span><span class="Coralwave2"></span><span class="Coralwave3"></span>
    </div>
  </div>
</div>
<div class="body">
  <p>${creatorData.User_FullName}</p>
  <div class="bio">
  <p>${creatorData.User_Bio}</p>
  </div>
  <div class="social">
  </div>
  <div class="hashtags">
    <p>${creatorData.User_Skills}</p>
  </div>

</div>`

  let creator = document.querySelector(".creator");
  creator.innerHTML = creatorDescription;

  let socialDiv = document.querySelector(".social");
  if (socialDiv) {
    socialDiv.innerHTML = socialLinksBlock;
  }
}

///Rendering Creator's Posts on Profile page based on Firabase data

let userId = document.location.search.substring(4);

firebase.database()
  .ref('Posts')
  .orderByChild('PostAuthorID')
  .equalTo(userId)
  .once('value')
  .then(res => {
    let userPosts = res.val();
    successCallbackPosts(userPosts);
  })
  .catch(err => console.log(err))



function successCallbackPosts(userPosts) {



  let postsArray;
  if (!userPosts) {
    document.querySelector(".noPosts").style.display = "block";
  } else {
    postsArray = Object.values(userPosts);
  }



  postsArray.sort(function (a, b) {
    var c = new Date(a.DateTime);
    var d = new Date(b.DateTime);
    return c - d;
  }).reverse();

  let postsArraySplitted = postsArray.slice(0, 10);

  let userArtworks = "";


  var $grid = $('.grid').masonry({
    itemSelector: '.grid-item',
    percentPosition: true,
    columnWidth: '.grid-sizer',
    transitionDuration: '3s'
  });
  // layout Masonry after each image loads
  $grid.imagesLoaded().progress(function () {
    $grid.masonry('layout');
  });



  function loadImages(someArray) {



    let artworksBody = $(".grid");
    userArtworks = `

      ${someArray.map(post => {

        let postImage = "http://triplee.info/Triple_E_WebService/AllImageTargets/" + post.ARTargetName + ".jpg";

        let gridItem = document.createElement('div');
        gridItem.className = "grid-item";
        gridItem.innerHTML = `<img src=${postImage} onerror="this.src='https://is2-ssl.mzstatic.com/image/thumb/Purple113/v4/67/9f/1c/679f1cff-dba9-3950-ca7f-4af353a76091/source/512x512bb.jpg';" data-image-id="" data-toggle="modal" data-image="" data-target="#image-gallery" />`;

        artworksBody.append(gridItem);
          return  artworksBody.masonry("reloadItems").delay(500).masonry("layout");
      }).join("")
      }
      `;

  }

  loadImages(postsArraySplitted);

  let shownImages = 10;
  $(window).bind('scroll', function () {
    if ($(window).scrollTop() >= $('.artworks-body').offset().top + $('.artworks-body').outerHeight() - window.innerHeight) {

      console.log(`shown: ${shownImages} length: ${postsArray.length}`)
      if (postsArray.length > shownImages) {
        shownImages += 10;
        console.log(shownImages);
        postsArraySplitted = postsArray.slice(shownImages - 10, shownImages);
        loadImages(postsArraySplitted);
        console.log(`loaded ${shownImages}`)
      } else console.log("that's all")
    }
  });

  function showPostModal() {
    let postCards = document.querySelectorAll(".grid img");

    let modalImage = document.querySelector("#image-gallery-image");

    for (let i = 0; i < postCards.length; i++) {

      postCards[i].addEventListener("click", function (e) {
        e.preventDefault();
        modalImage.src = this.src;
      });

    }

  }

  showPostModal();

}

// Contact form 7

function recaptchaCallback() {
  $('.btn').removeAttr('disabled');
}


const btn_send = document.querySelector("#btn-send1");


btn_send && btn_send.addEventListener("click", e => {
  e.preventDefault();

  let full_name = document.querySelector("#name").value;
  let email = document.querySelector("#email").value;
  let comment = document.querySelector("#comment").value;
  let country = Intl.DateTimeFormat().resolvedOptions().timeZone;
  let success_message7 = document.querySelector("#success_message7");
  let danger_message7 = document.querySelector("#danger_message7");
  let creatorID = localStorage.getItem("id");
  let creatorFullName = localStorage.getItem("fullName");
  let creatorEmail = localStorage.getItem("email");


  const data = new FormData();
  data.append('full_name', full_name);
  data.append('email', email);
  data.append('comment', comment);
  data.append('country', country);
  data.append('g-recaptcha-response', grecaptcha.getResponse());
  data.append('creatorID', creatorID);
  data.append('creatorFullName', creatorFullName);
  data.append('creatorEmail', creatorEmail);

  console.log(data);

  fetch("https://cors-anywhere.herokuapp.com/http://arize.io/assets/php/contactcreator.php", {
      method: 'POST',
      body: data
    }).then(res => {
      console.log(res);
      success_message7.style.display = 'block';
    })
    .catch(err => {
      console.log(err);
      danger_message7.style.display = 'block';
    });
})