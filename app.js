
const newElement = () => {
    const priority = `
    <div class="btn-group btn-group-sm float-end" role="group" aria-label="Basic  radio toggle button group">
        
        <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off">
        <label class="btn btn-outline-danger" for="btnradio1" id="prioHigh" onclick="setPriority">high</label>

        <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off">
        <label class="btn btn-outline-warning" for="btnradio2" id="prioMedium" onclick="setPriority">medium</label>

        <input type="radio" class="btn-check" name="btnradio" id="btnradio3" autocomplete="off">
        <label class="btn btn-outline-success" for="btnradio3" id="prioLow" onclick="setPriority">low</label>
    </div>
    `;
    const inputValue = document.getElementById('myInput').value;
    const li = document.createElement('li');
    li.setAttribute('class', 'list-group-item');

    li.innerHTML= `
                <input class="form-check-input me-1" type="checkbox" value="">
                <label class="form-check-label">${inputValue}</label>
                ${priority}`
    
    if (inputValue === '') {
        alert('You must written something :)')
    } else {
        const element = document.getElementById('myUl');
        element.appendChild(li);
    }

    

    document.getElementById("myInput").value = "";
};

const setPriority = () => {
    const prioHeigh = document.getElementById('prioHeigh');
    const prioMedium = document.getElementById('prioMedium');
    const prioLow = document.getElementById('prioLow');

    if (prioHeigh) {
        prioHeigh.setAttribute('checked', '');
    } else if (prioMedium) {
        prioMedium.setAttribute('checked', '');
    } else {
        prioLow.setAttribute('checked', '');
    }
}


const showMessage = () => {
    const para = document.getElementById('message');
    para.innerHTML = '<h1 style="color: #f63f">Your message is here :)</h1>'
}


