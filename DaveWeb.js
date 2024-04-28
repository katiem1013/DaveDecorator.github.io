const scriptURL = 'https://script.google.com/macros/s/AKfycbwh53V-dR6cMnbxBQ2f_n0AOJysK3tDXkEK0-n-D28qrkvzKKNZZsodXA0Q3iNN0CNT5A/exec'
        const form = document.forms['DavidMurrayDecoratings']
        
        form.addEventListener('submit', e => {
            e.preventDefault()
            fetch(scriptURL, { method: 'POST', body: new FormData(form)})
            .then(response => alert("Thanks for Registration"))
            .catch(error => console.error('Error!', error.message))
        })