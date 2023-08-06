
// 1. ul안에 준비된 데이터 수만큼 li추가
//   ㄴ 이미지 주소, 상품명, 가격 각각 출력


// 2. 추가된 li클릭하면 팝업창 노출
//    ㄴ 이미지, 상품명, 가격, 디테일정보

let data;

$.ajax({
    url:"data3.json",
    success:function(json){   
        data = json;

        productList();
        $('ul li').on('click',popupShow);
        $('.popup').on('click',popupClose);       
    //success end
    }
});

function productList(){ 
    let elData;
        $.each(data.product, function(key, value){
            elData = `<li data-code=${value.code}>
                        <img src="${value.photo}">
                        <div>
                            <b>${value.name}</b>
                            <p>${value.price}원</p>
                        </div>                
                      </li>`;

            $('ul').append(elData);
        })
} 

function popupShow(){ 
    // 클릭한 상품의 코드값을 찾아라!
    let code = $(this).data('code');

    // 데이터들 중에서 클릭한 상품 코드값과 같은 데이터를 찾아라!
    let p = data.product.filter(function(num){
         return num.code == code;
    });

    console.log(p)
    // 출력할 태그안에 값을 변경
    let elPopup = `<div><img src="${p[0].photo}"></div>
                    <div>
                        <p>${p[0].name}</p>
                        <p>${p[0].price}</p>
                        <p>${p[0].detail}</p>
                    </div>`;
    
    // info클래스안에 elPopup값으로 변경
    $('.info').html(elPopup);
    $('.popup').addClass('active');
} 

function popupClose(){ 
    if( event.target.classList.contains('popup') )
    $('.popup').removeClass('active');
} 







/*   
    $.each(data.product,function(i,v){
        if(v.code == code) console.log(v)
    }) 
*/

// let p = data.product.filter(function(매개변수){   });
// let p = data.product.filter(  (매개변수) => {   } );
