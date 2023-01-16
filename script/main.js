// Scroll reveal
window.sc = ScrollReveal({
    origin:'top',
    distance:'60px',
    duration: 2500,
    delay:300,
     reset:true
});
sc.reveal('.main-header, .carousel');
sc.reveal('.education, .form', {delay:500, origin:'left',interval:100});
sc.reveal('.info, .social',{delay:500, origin:'right',interval:100});
sc.reveal('.progress-bar-container',{delay:600, origin:'top',interval:100})


// Form
const contactForm = document.getElementById('contact-form'),
        userName = document.getElementById('name'),
        userEmail = document.getElementById('email'),
        userMessage = document.getElementById('message'),
        errorMessage = document.getElementById('error');

        const sendMessage = (e)=>{
            e.preventDefault();

            if(userName.value === '' || userEmail.value === '' || userMessage.value === ''){
                // Add and remove message color
                errorMessage.classList.remove('green-col');
                errorMessage.classList.add('red-col');

                errorMessage.textContent = "** fill all input fields"
            }else {
                // service,template,formId, publickey
                emailjs.sendForm('service_yemze5b','template_8gz45b4','#contact-form','qflHR9AlG6LDQCYVL')
                .then(()=> {
                    // add color and message
                    errorMessage.classList.add('green-col')
                    errorMessage.textContent="message send"

                    // Remove message after 4s
                    setTimeout(() => {
                        errorMessage.textContent=""
                    }, 4000)},
                    (error)=>{
                        alert('Something went wrong!', error)
                    })
                    // Clear input fields
                    userName.value=''
                    userEmail.value=''
                    userMessage.value=''
            }

        }

        contactForm.addEventListener('submit', sendMessage);