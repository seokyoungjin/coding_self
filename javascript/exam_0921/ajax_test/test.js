
$.ajax({
    url:"./data.json",
    success:function(data){
        let tags='';
        $.each(data.items,function(k,v){
            tags += `<div class="thumb">
                        <a href="images/fulls/01.jpg" class="image">
                            <img src="images/thumbs/01.jpg" alt="" />
                        </a>
                        <h2>Magna feugiat lorem</h2>
                    </div>`;
        })
        $('#main').html(tags);


        $('.thumb').on('click',function(){  
            event.preventDefault();
            $('.poptrox-overlay').fadeIn();
        })
    }
})