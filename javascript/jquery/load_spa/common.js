 // common.js
 $('main').load('main.html');

 let idx=0;
 $('header nav a').click(function(){
    event.preventDefault();
    let pageUrl = $(this).attr('href');
    $('main').load(pageUrl);


    $('header nav a').eq(idx).removeClass('active');
    $(this).addClass('active');

    idx = $(this).index();
 });
