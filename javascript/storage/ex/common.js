
$('header').load('inc.html a', menu);

function menu(){
    $('header a').eq(localStorage.num || 0).addClass('active');

    $('header a').on('click',function(){
        let idx = $(this).index();
        localStorage.num = idx;
    })
}

