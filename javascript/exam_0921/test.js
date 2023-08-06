


$(function(){
    
    
    
   $.ajax({
       url:'data.xml',
       type:'get',
       
       success : function(data){
         
           var detail,thumb,name,tag = '';
           
           $(data).find('item').each(function(i){
                detail = $(this).find('detail').text();
                thumb = $(this).find('thumb').text();
                name = $(this).find('name').text();
               
                tag = "<article class=thumb>";
                tag += "<a href='"+detail+"' class='image'><img src='"+thumb+"' alt='' /></a>";
                tag += "<h2>"+name+"</h2>";
                tag += "</article>";
                       
                $('#main').append(tag);
           });

           //gallery click 
           var idx = 0;
           $('#main article').on('click',function(e){
               e.preventDefault();               
               idx = $(this).index();
               $('.poptrox-overlay').show();
               
               dataChange();               
           });
           
           function dataChange(){
//             $(data).find('item').eq(idx).find('detail').text();  //xml
               
               detail = $('#main article').eq(idx).find('a').attr('href');  //images/fulls/01.jpg
               txt = $('#main article').eq(idx).find('h2').text();
               
               $('.poptrox-overlay .pic img').attr('src',detail);
               $('.poptrox-overlay .caption h2').text(txt);
           }
           
          /* $('.nav-previous').on('click',function(){
               idx--;
               dataChange();
           })
           $('.nav-next').on('click',function(){
               idx++;
               dataChange();
           })
           $('.closer').on('click',function(){
                 $('.poptrox-overlay').hide();
           });*/
           
           
           $('.nav-previous, .nav-next, .closer').on('click',btn);
           function btn(){
                var btnName = $(this).attr('class');
                btnName == 'nav-next' ? idx ++ : idx--;
                dataChange();
                if(btnName == 'closer') $('.poptrox-overlay').hide();
           }
           

            $('#header nav a').on('click',footer);
           function footer(){
               $('footer').addClass('active');
               
               $('input[type=submit]').on('click',dataCheck);
               
               function dataCheck(e){
                   e.preventDefault();
                   var $name  = $('input[name=name]');
                   var $email  = $('input[name=email]');
                   
                   var regName = /^[가-힣]{2,6}$/;
                   var regEmail = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;
                   
                   if($name.val() == ''  || regName.test($name.val()) ){
                       alert('이름을 다시 확인하세요..');
                       $name.focus();
                       return;
                    }
                   msg.action = 'http://naver.com';
                   msg.submit();
                   
               }
           }
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
       }
       
   }); 
    
    
    
    
   
    
    
    
    
    
    
    
    
    
});


 


