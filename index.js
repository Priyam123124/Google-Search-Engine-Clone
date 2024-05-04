const click = document.getElementById('buttonclick')

//It redirects us to 'result.html' when clicked on 'Google Search' button
click.addEventListener('click', ()=> {
            const value  = document.getElementById('id2').value.trim();
            localStorage.setItem('key111', value)
            if(value != "") {
            window.location.href = 'result.html'
            }
})

//When the textarea is not empty, it redirects us to result.html and textarea value is set in local storage
window.addEventListener('keydown', e=>{
    switch(e.key) {
        case 'Enter':
            const value  = document.getElementById('id2').value.trim();
            localStorage.setItem('key111', value)
            if(value != "") {
            window.location.href = 'result.html'
            }
            break;
        default:
            break;
    }
})