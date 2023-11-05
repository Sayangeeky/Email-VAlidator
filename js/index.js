let result = {
    "tag": "",
    "free": true,
    "role": false,
    "user": "sayandg41",
    "email": "sayandg41@gmail.com",
    "score": 0.64,
    "state": "deliverable",
    "domain": "gmail.com",
    "reason": "valid_mailbox",
    "mx_found": true,
    "catch_all": null,
    "disposable": false,
    "smtp_check": true,
    "did_you_mean": "",
    "format_valid": true
};
subbtn.addEventListener("click", async (e)=>{
    e.preventDefault()
    console.log("clicked!")
    resultCont.innerHTML = '<img width=120px src="image/load.svg" alt="">'
    let key = `ema_live_kyhGvBdYgsvi9pHzbZOKj0KSrKDr6KLAsvyyrfWW`
    let email = document.getElementById("username").value
    
    let url =  `https://api.emailvalidation.io/v1/info?apikey=ema_live_kyhGvBdYgsvi9pHzbZOKj0KSrKDr6KLAsvyyrfWW&email=`
    let res = await fetch(url+email)
    let result = await res.json()



let str = '';
for (key of Object.keys(result)) {
    if(result[key]!="" && result[key]!=" ")
    str = str + `<div>${key}: ${result[key]}</div>`;
}

console.log(str);
resultCont.innerHTML = str;
})



