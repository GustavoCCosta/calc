const calk = () => {
    const btnCalk = document.getElementById("calk");
    var inputs = document.querySelectorAll(".form-control");
    btnCalk.addEventListener('click', (event) => {
        console.clear();
        switch (inputs[1].value) {
            case '1':
                console.log("-----------SOMA-------------");
                inputs[3].value = parseInt(inputs[0].value)  + parseInt(inputs[2].value);
                break;
            case '2':
                console.log("-----------SUBTRAÇÃO-------------");
                inputs[3].value = parseInt(inputs[0].value)  - parseInt(inputs[2].value);
                break;
            case '3':
                console.log("-----------MULTIPLICAÇÃO-------------");
                inputs[3].value = parseInt(inputs[0].value)  * parseInt(inputs[2].value);
                break;
        
            case '4':
                console.log("-----------DIVISÃO-------------");
                inputs[3].value = parseInt(inputs[0].value)  / parseInt(inputs[2].value);
                break;
        
            default:
                inputs[3].value = ('OP INVÁLIDA')
                break;
        }
    });
};