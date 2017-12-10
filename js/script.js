       window.onload = function() {
            var wrap = document.getElementById('wrap'), 
                pic = document.getElementById('pic'), 
                images = pic.getElementsByTagName("li"),
                list = document.getElementById('list').getElementsByTagName('li'),
                index = 0, 
                timer = null,
                aInput = document.getElementById('box-m'),
                oDiv = document.getElementById('goodcover'),
                oDiv1 = document.getElementById('loginbox'),
                aInput1 = document.getElementById('obtn3'),
                aInput2 = document.getElementById('switch-close');    
          
            function autoPlay() {
                index++;
                if (index >= list.length) {
                    index = 0;
                }
                changeImage(index);
            }
           
            function changeImage(curIndex) {
                for (var j = 0; j < list.length; j++) {
                    list[j].className = '';
                    images[j].style.display = 'none';
                }
                list[curIndex].className = 'on';
                images[curIndex].style.display = 'block';
                index = curIndex; 
            }
            
            wrap.onmouseover = function (){
                clearInterval(timer);
            }
               
            wrap.onmouseout = function(){
                //changeImage(index++);
                timer = setInterval(autoPlay, 1500);
            }
               
            for (var i = 0; i < list.length; i++) {
                list[i].id = +i;
                list[i].onmouseover = function (){
                    changeImage(this.id);
                    clearInterval(timer);
                }
            };
            
            timer = setInterval(autoPlay, 2000);

            aInput.onclick = function(){
                oDiv.style.display = 'block'
                oDiv1.style.display = 'block'
            }
            aInput1.onclick = function(){
                oDiv.style.display = 'none'
                oDiv1.style.display = 'none'
            }
            aInput2.onclick = function(){
                oDiv.style.display = 'none'
                oDiv1.style.display = 'none'
            }
        }
