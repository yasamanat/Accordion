const btn = document.querySelectorAll('button')
console.log(btn);
btn.forEach(btns => {
    console.log(btns);
    
    btns.addEventListener("click" , ()=>{
        const content = btns.nextElementSibling;
        const isCurrentlyOpen = content.style.display === 'block';
        
        // Close all accordions first
        btn.forEach (otherbtn => {
            const othercontent = otherbtn.nextElementSibling;
            if (othercontent !== null ){
                othercontent.style.display = 'none';
            }
        })
        
        // If the clicked accordion wasn't open, open it
        if (!isCurrentlyOpen) {
            content.style.display = 'block';
        }
    });
})
