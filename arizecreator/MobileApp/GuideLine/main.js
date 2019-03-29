document.addEventListener('DOMContentLoaded', function() {
  const nextButton = document.querySelector('.moveNext');
  const prevButton = document.querySelector('.movePrev');
  const youtubeButtons = document.querySelectorAll('[href="#modalArize"]');
  const elem = document.querySelector('.carousel');

  let instances = M.Carousel.init(elem, {
    fullWidth: true,
    indicators: true,
    duration: 100,
    noWrap: true,
    onCycleTo: e => {
      let slideIndex = $(e).index();
      slideIndex === 1
        ? (prevButton.style.display = 'none')
        : (prevButton.style.display = 'block');
      slideIndex === 3
        ? (nextButton.style.display = 'none')
        : (nextButton.style.display = 'block');
    }
  });
  var instance = M.Carousel.getInstance(elem);

  nextButton.addEventListener('click', e => {
    e.preventDefault();
    e.stopPropagation();
    instance.next();
  });
  prevButton.addEventListener('click', e => {
    e.preventDefault();
    e.stopPropagation();
    instance.prev();
  });

  const onModalClose = function() {
    document.querySelector('.moveNext').style.display = 'block';
    document.querySelector('.movePrev').style.display = 'block';
    player.stopVideo();
    instance._setupEventHandlers();
  };

  var modal = document.querySelector('.modal');
  M.Modal.init(modal, {
    onCloseEnd: onModalClose
  });
  for (let i = 0; i < youtubeButtons.length; i++) {
    youtubeButtons[i].addEventListener('click', e => {
      let iframeSrc = e.target.getAttribute('data-src');
      document.querySelector('.moveNext').style.display = 'none';
      document.querySelector('.movePrev').style.display = 'none';
      console.log(instance);
      instance._removeEventHandlers();
      player.loadVideoById(iframeSrc);
    });
  }

  //youtube api
  // 2. This code loads the IFrame Player API code asynchronously.
  var tag = document.createElement('script');

  tag.src = 'https://www.youtube.com/iframe_api';
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  // 3. This function creates an <iframe> (and YouTube player)
  //    after the API code downloads.
  var player;
  function onYouTubeIframeAPIReady(id) {
    player = new YT.Player('player', {
      height: '360',
      width: '640',
      videoId: id,

      events: {
        onReady: onPlayerReady
      }
    });
  }

  // 4. The API will call this function when the video player is ready.
  function onPlayerReady(event) {
    event.target.playVideo();
  }
  function readyFunction() {
    $.getScript('https://www.youtube.com/iframe_api', onYouTubeIframeAPIReady);
  }

  readyFunction();
});
