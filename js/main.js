function appendMailTo(){
    let message = document.getElementById("mailMessage").Value;
    let subject = document.getElementById("mailSubject").value;
    console.log(subject);
    console.log(message);

    let mailToAttr = document.getElementById("sendMail");
    mailToAttr.setAttribute("href", "mailto:uwibambe_adeline@yahoo.com?subject="+subject+"&body="+message);
}

let date = new Date();
let yearPos = document.getElementById("getYear");
let currYear = date.getFullYear();
yearPos.innerHTML = currYear;