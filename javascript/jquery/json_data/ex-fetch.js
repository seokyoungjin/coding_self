fetch('data3.json')
  .then(function(data){    return data.json()   })
  .then(function(realData){ 

        // console.log(realData.product[0]);
        const elUl = document.querySelector('ul');
        

        function sortDcd(){
            realData.product.sort(function (a, b) {
                if (a.price < b.price) return 1;
                if (a.price > b.price) return -1;
                return 0;
            });
            printFun();
        }

        function sortAcd(){
            realData.product.sort(function (a, b) {
                if (a.price > b.price) return 1;
                if (a.price < b.price) return -1;
                return 0;
            });
           
            printFun();
        }

        function printFun(){
            let tags = [];
            let list = '';

            realData.product.forEach(function(v){            
                tags.push(`<li>
                            <img src="${v.photo}">
                            <div>
                                <b>${v.name}</b>
                                <p>${v.price}원</p>
                            </div>                
                        </li>`);
            });
            
            tags.forEach(function(v){
            list += v;
            });
            
            elUl.innerHTML = list;
        }
        printFun();

        const btn = document.querySelectorAll('button');
        btn[0].addEventListener('click',sortAcd)
        btn[1].addEventListener('click',sortDcd)

  });


