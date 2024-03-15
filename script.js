const boxes = document.querySelectorAll('.box')
boxes.forEach(box => {
    box.addEventListener('mouseover',(e)=>{
        const prevSibling = e.target.previousElementSibling;
        const prevPrevSibling = prevSibling ?. previousElementSibling;

       
        const nextSibling = e.target.nextElementSibling;
        const nextNextSibling = nextSibling ?. nextElementSibling;
    
        e.target.classList.add('hovered');

        //add prev-2 classname
        if(prevPrevSibling){
            prevPrevSibling.classList.add('prev2')
        }
        //add prev-1 classname
        if(prevSibling){
            prevSibling.classList.add('prev1')
        }

        //add next-2 classname
        if(nextNextSibling){
            nextNextSibling.classList.add('next2')
        }
        //add next-1 classname
        if(nextSibling){
            nextSibling.classList.add('next1')
        }
    })

    box.addEventListener('mouseout',(e)=>{
        const parent = e.target.parentElement;
        const siblings = parent.querySelectorAll('.hovered,.prev2,.prev1,.next2,.next1')
        siblings.forEach(sibling => sibling.classList.remove('hovered','prev2','prev1','next1','next2'))
    })
})