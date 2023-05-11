(function() {

let form = document.querySelector('#message-form')

form.addEventListener('submit',function(e) {
    e.preventDefault()

let message =document.querySelector('#message')
let feedback = document.querySelector('.feedback')
let messagecontent = document.querySelector('.message-content')

 if (message.value === '' ){
   
   feedback.classList.add('show')
    setTimeout(function() {
        feedback.classList.remove('show')
    }, 4000)
  } else {
     messagecontent.textContent = message.value
     message.value = ''
   }
 })

})()