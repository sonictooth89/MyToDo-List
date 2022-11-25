// odczytanie wszystkich elementow z lokal storage


for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        items.push([key, localStorage.getItem(key)])    
  };

console.log(items);

const li = document.createElement('li');
li.setAttribute('class', 'list-group-item');

items.map(
    item => li.innerHTML = `${item[1]}`
)
const element = document.getElementById('myUl');
        element.appendChild(li);


const newElement = () => {
    const id = String(Math.floor(Math.random()*999999999999999999))+'abcvpooodsaubcvlop';
    const inputValue = document.getElementById('myInput').value;
    const li = document.createElement('li');
    li.setAttribute('class', 'list-group-item');

    li.innerHTML= `
                <input class="form-check-input me-1" type="checkbox" value="">
                <label class="form-check-label">${inputValue}</label>`
    
    if (inputValue === '') {
        alert('You must written something :)')
    } else {
        const element = document.getElementById('myUl');
        element.appendChild(li);
        localStorage.setItem(id, inputValue);
    }

    document.getElementById("myInput").value = "";
};

// const setPriority = () => {
//     const prioHeigh = document.getElementById('prioHeigh');
//     const prioMedium = document.getElementById('prioMedium');
//     const prioLow = document.getElementById('prioLow');

//     if (prioHeigh) {
//         prioHeigh.setAttribute('checked', '');
//     } else if (prioMedium) {
//         prioMedium.setAttribute('checked', '');
//     } else {
//         prioLow.setAttribute('checked', '');
//     }
// }


// const showMessage = () => {
//     const para = document.getElementById('message');
//     para.innerHTML = '<h1 style="color: #f63f">Your message is here :)</h1>'
// }



