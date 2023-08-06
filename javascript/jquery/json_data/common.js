

$.ajax({
    url:'data.json',
    beforeSend:function(){
        // console.log('준비중....');
        $('.loading').show();
    },
    success:function(data){
        $('.loading').hide();

        // console.log(   data   );
        // console.log(   data.gallery[1]   );
        let elData='';

        $.each(data.gallery,function(key,url){
            elData += `<li><img src="${data.gallery[key]}"></li>`;
        })
        $('article:eq(0) ul').html(elData);

    },
    error:function(){
        console.log('실패');
    }
});


$.ajax({
    url:'data2.json',
    success:function(data){

        let elData = '';
        $.each(data.gallery,function(key,d){
            elData += ` <li><img src="${d.url}"> ${data.gallery[key].title} </li>`;
        });
        $('article:eq(1) ul').html(elData);

    }
});


