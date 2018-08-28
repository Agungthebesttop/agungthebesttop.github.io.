// event pada saat link di klik
$('.page-scroll').on('click', function(e) {
  // console.log('ok');

  // ambil isi href
  var tujuan = $(this).attr('href');
  // console.log(href);

  // tangkap elemen ybs
  var elemenTujuan =$(tujuan);
  // console.log(elemenTujuan.offset().top);
  // console.log($('body,html').scrollTop());

// pindahkan scroll
$('html,body').animate({
  scrollTop: elemenTujuan.offset().top -40
},1250,'easeInOutExpo');


e.preventDefault();




  });

  // PARALLAX
  // About

  $(window).on('scroll', function () {
      $('.pKiri').addClass('pMuncul')
      $('.pKanan').addClass('pMuncul')
  });

  $(window).scroll(function(){
      var wScroll = $(this).scrollTop();


      // console.log(wScroll);
      // jumbotron
      $('.jumbotron img').css({
        'transform' : 'translate(0px, '+ wScroll/9 +'%)'
      });

      $('.jumbotron h1').css({
        'transform' : 'translate(0px, '+ wScroll/4 +'%)'
      });

      $('.jumbotron p').css({
        'transform' : 'translate(0px, '+ wScroll/2.5 +'%)'
      });


      // Portfolio

      if (  wScroll> $('.experience').offset().top -250  ) {
        $('.experience .column').each(function (i) {
          setTimeout(function () {
            $('.experience .column').eq(i).addClass('muncul');
          },400 * (i+1));
        });


      if (  wScroll> $('.skill').offset().top -250  ) {
        $('.skill .skillkiri').each(function (i) {
          setTimeout(function () {
            $('.skill .skillkiri').eq(i).addClass('muncul');
          },600 * (i+1));
        });

        if (  wScroll> $('.skill').offset().top -250  ) {
          $('.skill .skillkanan').each(function (i) {
            setTimeout(function () {
              $('.skill .skillkanan').eq(i).addClass('muncul');
            },1000 * (i+1));
              });

      if (  wScroll> $('.portfolio').offset().top -250  ) {
        $('.portfolio .card').each(function (i) {
          setTimeout(function () {
            $('.portfolio .card').eq(i).addClass('muncul');
          },300 * (i+1));
        });
        // console.log('ok');

        if (  wScroll> $('.contact').offset().top -250  ) {
          $('.contact .kontakkiri').each(function (i) {
            setTimeout(function () {
              $('.contact .kontakkiri').eq(i).addClass('muncul');
            },600 * (i+1));
          });

          if (  wScroll> $('.contact').offset().top -250  ) {
            $('.contact .kontak').each(function (i) {
              setTimeout(function () {
                $('.contact .kontak').eq(i).addClass('muncul');
              },1000 * (i+1));
                });


              }
              }
              }
              }
              }
              }
                });
