var navMenuBtn=document.querySelectorAll('.nav-menu a');
var targetSec;
var Interval;
//call Event Listner on Each Btn
for(let i=0 ; i<navMenuBtn.length ; i++){
    navMenuBtn[i].addEventListener('click',scrsmoot);
}
function scrsmoot(event){
    event.preventDefault();
    var targetSecId=this.textContent;
    //Now store Tags of targetSecId
    targetSec=document.getElementById(targetSecId);
    //This is time to goforward
    Interval=setInterval(scrollVertically,20,targetSec);
    
}
function scrollVertically(){
    console.log(targetSec);
    var targetSecCordinate=targetSec.getBoundingClientRect();
    console.log("This is Intrval in scrsmoot: ",Interval)
    // console.log(targetSecCordinate.top);
    if(targetSecCordinate.top <= 0 || targetSecCordinate.top <= 34 ){ 
        
        clearInterval(Interval);
        return;
    }
    window.scrollBy(0,50);
}

//==================================================FILL SKILL BARS ======================

// window.addEventListener('scroll',checkScroll);
// var progressBar=document.querySelectorAll('.s-pro > div');
// var animationDone=false;
// function init_Indi_Width(bar){
//     bar.style.width=0+'%';
// }

// // for(var bar of progressBar){
// //     init_Indi_Width(bar);
// // }
  
function checkScroll(){
   
    for(let bars of progressBar){
        
        var barCordinate=bars.getBoundingClientRect();
        if(barCordinate.top <= (window.innerHeight - barCordinate.height)){
            fillIndigators( bars);
//             // animationDone=true;
//             // console.log(bars.innerHTML);
        }
//         else if( barCordinate.top > window.innerHeight){
//             // init_Indi_Width(bar);
//             // animationDone=false;
//         }
//     }
}

function fillIndigators( bar){
    var targetWidth=bar.getAttribute('data-bar-width');
    var currWidth=0;
    var Interval=setInterval(function(){
        if(currWidth >= targetWidth){
            clearInterval(Interval);
            return;
        }
        currWidth+=10;
        bar.style.width=currWidth+ '%';
    },10);

}}