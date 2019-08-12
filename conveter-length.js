function conveter(number) {
    number = number * document.getElementById('length').value;
    return number;
}

function changeLength() {
    let length = conveter(document.getElementById('choose').value);
    document.getElementById('change').innerHTML = length;
}
