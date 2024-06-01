var saving = () => {
   
    var salaryElement = document.getElementById('salary');
    var homeloanElement = document.getElementById('homeloan');
    var carloanElement = document.getElementById('carloan');
    var creditcardElement = document.getElementById('creditcard');

    if (salaryElement && homeloanElement && carloanElement && creditcardElement) {
        var salary = Number(salaryElement.value);
        var homeloan = Number(homeloanElement.value);
        var carloan = Number(carloanElement.value);
        var creditcardbill = Number(creditcardElement.value);

        console.log(salary);

        var res = salary - (homeloan + carloan + creditcardbill);
        console.log('saving : ', res);

        var savingResElement = document.getElementById('savingRes');
        if (savingResElement) {
            savingResElement.innerHTML = res;
        }
    }
}
saving()

var emitotal = () => {
    var homeloanElement = document.getElementById('homeloan');
    var carloanElement = document.getElementById('carloan');
    var creditcardElement = document.getElementById('creditcard');

    if (homeloanElement && carloanElement && creditcardElement) {
        var homeloan = Number(homeloanElement.value);
        var carloan = Number(carloanElement.value);
        var creditcardbill = Number(creditcardElement.value);

        var res = (homeloan + carloan + creditcardbill);
        console.log('emitotal : ', res);
        var savingResElement = document.getElementById('emitotal');
        if (savingResElement) {
            savingResElement.innerHTML = res;
        }
    }
}
emitotal()