function clickHandle() {
    const coins = [
        {
            name: 'Heads',
            src: './resources/heads.svg',
        },
        {
            name: 'Tails',
            src: './resources/tails.svg',
        },
    ];
    let div = document.getElementById('answer');
    let img = document.getElementById('img');

    const idx = Math.random() < 0.5 ? 0: 1;    
    console.log(idx)
    div.textContent = coins[idx].name;
    img.src = coins[idx].src;
}


const btn = document.getElementById("btn")
btn.onclick = clickHandle