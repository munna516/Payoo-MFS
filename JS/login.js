document.getElementById('button-login').addEventListener('click', function (event) {
    event.preventDefault()

    const phoneNumber = document.getElementById('input-value').value
    const pinNumber = document.getElementById('pin-number').value
    if (phoneNumber === '5' && pinNumber === '1234') {
        window.location.href = './home.html'
    }
    else {
        alert("Incorrect Phone or Pin")
    }

})