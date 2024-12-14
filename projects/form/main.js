let btnElement = document.querySelector(".btn");
let firstNameElement = document.querySelector('[name="firstname"]');
let secondNameElement = document.querySelector('[name="secondname"]');
let resultElement = document.querySelector(".result");

btnElement.addEventListener("click", function() {
    if (firstNameElement.value && secondNameElement.value) {
        resultElement.textContent = `Ответ: Здравствуйте, ${firstNameElement.value} ${mySenameElement.value}!`
    } else {
        resultElement.textContent = `Ответ: Не все поля заполнены`;
    }
});