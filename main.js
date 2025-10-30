const btn = document.querySelectorAll('button')
console.log(btn);
btn.forEach(btns => {
    console.log(btns);
    
    btns.addEventListener("click" , ()=>{
        const content = btns.nextElementSibling;
         btn.forEach (otherbtn => {
            const othercontent = otherbtn.nextElementSibling;
            if (othercontent !== null ){
                othercontent.style.display = 'none';
            }
         })
         content.style.display = 'block';
    });
})
