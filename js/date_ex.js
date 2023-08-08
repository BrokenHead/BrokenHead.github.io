function date_ex(){
    let date_s = new Date("4/08/2022")   
    let date_now = new Date()
    var sub = (date_now.getTime() - date_s.getTime())/(24*60*60*1000) ;
    document.getElementById("work_ex").innerHTML += Math.floor(sub/365) +" year " + Math.ceil((sub%365)/30) + " month(s)"
}
// document.getElementById("work_ex").value = "test"
date_ex()