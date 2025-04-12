// let count= localStorage.getItem('count');
let count = localStorage.getItem('count');
count = count ? Number(count) : 0;


function button_clicked(){
    // document.querySelector('.btn');
    localStorage.setItem('count' , count);
    let btnn = document.querySelector('.btn');
    if(count % 2 === 0)
       {
        // btnn.classList.add('js-even');
        document.querySelector('.btn').classList.add('js-even');
        document.querySelector('.btn').classList.remove('js-odd');
       }

    else
    {
        document.querySelector('.btn').classList.add('js-odd');
        document.querySelector('.btn').classList.remove('js-even');
    }
    
    count++;

    btnn.innerHTML = count;

}



let countStr = JSON.stringify(count);

