
const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)




var tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".part-1",
        scroller: "body",
        scrub: true,
       
        start: "50% 50%",
        end: "250% 50%",
        pin: true,
        
    }
});

tl.to(".rotate-div", {

    rotate: -20,
    transform:"translateY(-14%)",
    scale: .6,
}, 'a')
    .to("#row-div-2", {
        marginTop: "-20%",
    }, 'a')
    .to("#row-div-3", {
        marginTop: "-25%",
    }, 'a')
    .to("#row-div-4", {
        marginTop: "-20%",
    }, 'a')
    .to("#row-div-5", {
        marginTop: "-35%",
    }, 'a')
    .to(".overlay-div h1", {
        opacity:1,
        delay:0.2,
    }, 'a')
    .to(".overlay-div", {
        backgroundColor:"rgba(0, 0, 0, 0.664)",
    }, 'a')
    .to(".scrolling", {
       width:"100%",
    }, 'a')

    // --------------------part -2-------------------
    var tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: ".part-2",
            scroller: "body",
            scrub: true,
          
            start: "0 70%",
            end: "50% 50%",
           
        }
    });

    tl2.to(".rounded-div-wrapper",{
            height:0,
            marginTop:0,
    });


   var tl3 = gsap.timeline({scrollTrigger:{
    trigger:".part-2 .text-Reaveal",
    start:"50% 70%",
    end:"120% 50%",
  
    scrub:1
   }});

   tl3.to(".part-2 .text-area-hover",{
    width:"100%"
   })


   var tl4 = gsap.timeline({scrollTrigger:{
    trigger:".part-4",
    start:"50% 50%",
    end:"200% 50%",
   pin:true,
  
    scrub:1
   }});

   
   tl4.to(".c-one",{
    opacity:1,
    marginTop:"-20%",
   },'s2')
   tl4.to(".c-two",{
    opacity:1,
   },'s3')
   tl4.to(".c-three",{
    opacity:0,
    marginTop:"-100",
   },'s1')
   tl4.to(".c-two",{

    opacity:0,
  
   },'s3')
   tl4.to(".c-one",{
    marginTop:"-180%"
  
   },'s1')

   tl4.to(".c-one",{
    marginLeft:"-230%",
 
  
   },'s4')
   tl4.to(".circle-img",{
    marginLeft:"100%",
    rotate:360,
  
   },'s4');
   var tl5 = gsap.timeline({scrollTrigger:{
    trigger:".part-5",
    start:"50% 70%",
    end:"120% 50%",
    scrub:1
   }});

   tl5.to(".part-5 .text-area-hover",{
    width:"100%"
   });

   var tl6 = gsap.timeline({scrollTrigger:{
    trigger:".part-6",
    start:"00% 70%",
    end:"50% 50%",
   
    scrub:1
   }});
   tl6.to(".rounded-div-wrapper-6",{
    height:0,
    marginTop:0
   });

   var tl7 = gsap.timeline({scrollTrigger:{
    trigger:".part-6",
    start:"20% 70%",
    end:"80% 50%",
    scrub:1
   }});

   tl7.to(".part-6 .text-area-hover",{
    width:"100%"
   })


   let tl8 = gsap.timeline({scrollTrigger:{
    trigger:".part-9",
    scroller:"body",
    start:"50% 50%",
    end:"300% 50%",
    pin:true,
    scrub:1
   }})

tl8.to(".our-work-text-div",{
    height:"60vh"
},'height')

tl8.to(".our-wrok-text",{
    height:"60vh"
},'height')
tl8.to("#our",{
    left:"0%"
},'height')

tl8.to("#work",{
   right:"0%"
},'height')

tl8.to(".scroll-img",{
    marginTop:"300%",
})
