const subBtn = document.querySelector('.submit-buttom');


subBtn.addEventListener('click', sendForm);

function sendForm(){
  let send = confirm('Are you sure you want to submit the form?');
  let success = 'Submitted successfully!'; 
  send?  alert(success) : false;
  subBtn.removeEventListener('click',sendForm);
}