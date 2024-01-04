
function followMouse(){
    

    document.querySelector(".main").addEventListener('mousemove', function(dets){
            // let mouse =  document.querySelector(".mouse");

            // mouse.style.left = `${dets.x}px`;
            // mouse.style.top = `${dets.y}px` ;


        prevx= dets.clientX;
    prevy= dets.clientY;
        document.querySelector(".mouse").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)`
    })

    document.addEventListener('scroll', ()=>{
        let moveDown = window.scrollY;
    document.querySelector(".mouse").style.transform = `translate(${dets.clientX}px, ${dets.clientY + moveDown}px)`

    })
}

    followMouse();