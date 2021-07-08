var Close=document.getElementById("close")
var boxcontainer=document.getElementById("boxcontainer")
var imgs= Array.from(document.querySelectorAll(".item img"))
var boxItem=document.getElementById('boxItem')  
var next=document.getElementById('next')
var prev=document.getElementById('prev')



var imgIndex=0
Close.addEventListener('click',function () {
    boxcontainer.style.display="none"
})
for (var i = 0; i < imgs.length; i++) {
    imgs[i].addEventListener("click",function (e) {
    imgIndex=imgs.indexOf(e.target)
    boxcontainer.style.display="flex" 
    boxItem.style.backgroundImage=`url(${e.target.src})`   
    })
    
}

 
next.addEventListener('click',nextImg)

 function nextImg() {
   imgIndex++
   if (imgIndex==imgs.length) {
    imgIndex=0
    }   
   
   boxItem.style.backgroundImage=`url(${imgs[imgIndex].src})`   

       
}
prev.addEventListener('click',prevImg)
function prevImg() {
    imgIndex--
    if (imgIndex<0) {
        imgIndex=imgs.length-1
        
    }
    boxItem.style.backgroundImage=`url(${imgs[imgIndex].src})`   


}
document.addEventListener('keyup',function (e) {
    if (e.key=='ArrowRight') {
        nextImg()
    } else if (e.key=='ArrowLeft') {
        prevImg()
    } else if(e.key=='Escape') {
        boxcontainer.style.display="none"
    } 
        
})

boxcontainer.addEventListener('click',function () {
    boxcontainer.style.display="none"
    boxItem.addEventListener('click',function (e) {
        e.stopPropagation()
        
    })  
    
})

