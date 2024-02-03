(function() {
    // https://dashboard.emailjs.com/admin/account
    emailjs.init('nWsYmfey0YmqONdHk');
})();



document.getElementById("form").addEventListener('submit', (e) => {
    e.preventDefault();
    const fields = {
        name: document.getElementById("name"),
        email: document.getElementById("email"),
        number: document.getElementById("number"),
        location: document.getElementById("location"),
        qualification: document.getElementById("qualification"),
        course: document.getElementById("course"),
        message: document.getElementById("message"),
    }
    
    emailjs.send("service_02zi7sn","template_3vr9mkh",{
        enquirer: fields.name.value,
        email_id: fields.email.value,
        contact_no: fields.number.value,
        location: fields.location.value,
        qualification: fields.qualification.value,
        course: fields.course.value,
        message: fields.message.value,
        }).then(() => {
            document.getElementById("name").value = ""
            document.getElementById("email").value = ""
            document.getElementById("number").value = ""
            document.getElementById("location").value = ""
            document.getElementById("qualification").value = ""
            document.getElementById("course").value = ""
            document.getElementById("message").value = ""
        });
})
