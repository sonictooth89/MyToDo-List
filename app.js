const entries = Object.entries(localStorage);


if (localStorage != null) {
    for (const entry of entries) {
        const [key, value] = entry;
        const objValue = JSON.parse(value).value;
        const objChecked = JSON.parse(value).checked;
        const li = document.createElement('li');
        li.setAttribute('class', 'list-group-item');
        li.innerHTML= `
                <input class="form-check-input me-1" type="checkbox" value="" ${objChecked}>
                <label class="form-check-label">${objValue}</label>`
        const element = document.getElementById('myUl');
        element.appendChild(li);
        
    }
};


const newElement = () => {
    const id = String(Math.floor(Math.random()*999999999999999999))+'abcvpoood';
    const inputValue = document.getElementById('myInput').value;
    const objValue = {value: inputValue, checked: true};
    
    const li = document.createElement('li');
    li.setAttribute('class', 'list-group-item');

    li.innerHTML= `
                <input class="form-check-input me-1" type="checkbox" value="" id="${id}">
                <label class="form-check-label">${objValue.value}</label>`
    
    if (inputValue === '') {
        alert('You must written something :)')
    } else {
        const element = document.getElementById('myUl');
        element.appendChild(li);
        localStorage.setItem(id, JSON.stringify(objValue));
    }

    document.getElementById("myInput").value = "";
};

