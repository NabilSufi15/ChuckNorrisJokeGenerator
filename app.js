document.querySelector('.get-jokes').addEventListener('click', getJokes);

function getJokes(e) {
    e.preventDefault();

    const number = document.querySelector('#number').value;

    const xhr = new XMLHttpRequest();

    xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);

    xhr.onload = function () {
        if (this.status === 200) {
            const response = JSON.parse(this.responseText);
            console.log(response);

            let output = '';

            if (response.type === 'success') {
                response.value.forEach(function (chuck) {
                    output += `<li>${chuck.joke}</li>`;
                });
            } else {
                output += `<li>something wrong</li>`
            }

            document.querySelector('.jokes').innerHTML = output;
        }
    }

    xhr.send();

    console.log(number);
}
