function SendMail()
{
    var params = {
        from_name : document.getElementById("name").value,
        email_id : document.getElementById("email").value,
        message : document.getElementById("message").value,
    }
    const serviceID="service_29tht9v";
    const templateID="template_s7wldwa"

    emailjs.send(serviceID,templateID, params).then(function (res){
        alert("Success! We will reply message soon. Thanks. " + res.status);
    });
}
