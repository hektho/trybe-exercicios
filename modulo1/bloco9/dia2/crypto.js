/*const fetchCrypto = () => {
    const url = `https://api.coincap.io/v2/assets`;
    fetch(url).then((response) => response.json())
    .then((data) => {
        const main = document.querySelector('#main');
        const ol = document.createElement('ol');
        main.appendChild(ol);
        const dados = data.data;
        dados.forEach((item) => {
            const li = document.createElement('li');
            li.innerText = `${item.name} (${item.symbol}): ${item.priceUsd}`
            ol.appendChild(li)
        })
    }).catch((error) => window.alert(`Algo deu mucho errado: ${error}!`));
}

fetchCrypto();*/

const fetchCrypto = async () => {
    const url = `https://api.coincap.io/v2/assets`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data.data);
        const main = document.querySelector('#main');
        const ol = document.createElement('ol');
        main.appendChild(ol);
        let primeiros = data.data.slice(0,10);
        primeiros.forEach((item) => {
            const li = document.createElement('li');
            li.innerText = `${item.name} (${item.symbol}): ${item.priceUsd}`;
            ol.appendChild(li);
        })
        
    } catch(error) {
        alert(`Algo deu errado: ${error}`);
    }
}

fetchCrypto();