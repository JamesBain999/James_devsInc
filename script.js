function diceValue() {
    var sel = document.getElementById('roll');
    var option = sel.options[sel.selectedIndex].value;
    document.getElementById("result").textContent = Math.floor((Math.random() * (option)) + 1)
}