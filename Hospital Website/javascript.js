

var form = document.getElementById('form')
let clear = document.querySelector('button');
let inputs = document.querySelectorAll('input');
form.addEventListener('submit', function (event) {
    event.preventDefault()
    var name = document.getElementById('name').value
    console.log(name)
    var email = document.getElementById('email').value
    console.log(email)
    var phone = document.getElementById('phone').value
    console.log(phone)
    var textarea = document.getElementById('Textarea').value
    console.log(textarea)
    clear.addEventListener('click', () => {
        form.resetFields();
    });
})

