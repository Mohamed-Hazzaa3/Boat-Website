let stars=document.getElementById("stars");
let moon=document.getElementById("moon");
let mountains3=document.getElementById("mountains3");
let mountains4=document.getElementById("mountains4");
let mountains7=document.getElementById("mountains7");
let river=document.getElementById("river");
let boat=document.getElementById("boat");
let hazzaa3=document.querySelector('.Hazzaa3');
   

 onscroll=function(){
    let value=this.scrollY;
    stars.style.left=value +'px';  
    moon.style.top=value * 4 +'px';
    mountains3.style.top=value * 2 +'px';
    mountains4.style.top=value * 1.5 +'px';
    river.style.top=value +'px';
    boat.style.top=value +'px';
    boat.style.left=value * 3 +'px';
    hazzaa3.style.fontSize =  value/2 + 'px' ;
    if(this.scrollY >= 67){
        hazzaa3.style.fontSize =  50 + 'px' ;
        hazzaa3.style.position='fixed';
    }
    if(this.scrollY>=460){
        hazzaa3.style.display='none';
    }else{
        hazzaa3.style.display='block';
    }
    if(this.scrollY >= 124){
        document.querySelector('.main').style.background='linear-gradient(#376281,#10001f)';  
    }else{
        document.querySelector('.main').style.background='linear-gradient(to top,#200016,transparent)';  
    }
    console.log(value);

}