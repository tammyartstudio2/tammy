new fullpage('#fullpage', {
    //options here
    autoScrolling:true,
    scrollHorizontally: true,
    onLeave: function(origin, destination, direction){
        var loading2 = new TimelineMax();
loading2.fromTo(".upper",3,{
    autoAlpha: 0,
  
},{
    autoAlpha: 1,
    
})
;
    },
});

document.addEventListener("DOMContentLoaded",function(){
    
    
    var arrows = document.getElementsByClassName('arrow');
    for (i=0;i<arrows.length;i++){
        arrows[i].addEventListener('click',function(e){
            e.preventDefault();
            fullpage_api.moveSectionDown();
        });
    }


var loading = new TimelineMax();
loading.fromTo(".upper h2",1,{
    autoAlpha: 0,
    y: 20
},{
    autoAlpha: 1,
    y: 0
})
 .fromTo(".upper p",2,{
    autoAlpha: 0,
   
},{
    autoAlpha: 1,
   
})
; 

});