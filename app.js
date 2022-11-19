
const newElement = () => {
    const li = document.createElement('li');
    const inputValue = document.getElementById('myInput').value;
    const node = document.createTextNode(inputValue);
    li.appendChild(node);


    
    if (inputValue === '') {
        alert('You must written something :)')
    } else {
        const element = document.getElementById('myUl');
        element.appendChild(li);
    }

    document.getElementById("myInput").value = "";
};


