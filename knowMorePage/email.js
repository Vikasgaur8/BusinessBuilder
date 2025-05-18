function sendMail(){
    let params = {
        name: document.getElementById("query_name").value,
        email: document.getElementById("query_email").value,
        phone: document.getElementById("query_phone").value,
        msg: document.getElementById("query_msg").value,
    };
    emailjs.send("service_5veuxcg","template_exjwylf",params).then(alert("Email has been Sent!!!"));
}