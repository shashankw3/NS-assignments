

let fname =document.getElementById('fname')
let lname=document.getElementById('lname')
let phone = document.getElementById('phno')
let office_no=document.getElementById('ofno')
let email=document.getElementById('email')
let pass1=document.getElementById('pass1')
let pass2 =document.getElementById('pass2')
let mon=document.getElementById('mon')
let day=document.getElementById('day')
let year =document.getElementById('year')
let age =document.getElementById('age')
let gender = document.getElementsByName('radio')
let msg = document.getElementById('msg')
let chbox = document.getElementsByName('checkbox')
let form =document.getElementById('myform')
let blabel = document.getElementById('birthdate')
let glabel = document.getElementById("gen")
let ilabel=document.getElementById('int')
let lastDay = document.getElementById('last_day')


fflag=lfag=phflag=offlag=pflag1=pflag2=eflag=aflag=gflag=iflag=mflag=false
monflag=dayflag=yearflag=false

function validate1(){
    let fnameReg =/^[a-zA-Z]{2,10}$/
    if(fname.value==""){
        alert("first name is required")
        fname.style.border='2px solid red'
        return false
    }else if(fname.value.length<2){
        alert("first name should be more than 2 character")
        fname.style.border='2px solid red'
        return false
    }else if(fname.value.length>10){
        alert("first name should be more than 10 letters")
        fname.style.border='2px solid red'
        return false
    }else if(!fnameReg.test(fname.value)){
        alert("first name should contain only letters")
        fname.style.border='2px solid red'
        return false
    }else{
        fname.style.border='2px solid green'
        fflag=true
        return true
    }
}
function validate2(){
    let lnameReg =  /^[a-zA-Z]{2,10}$/
    if(lname.value==""){
        alert("lastname is required")
        lname.style.border='2px solid red'
        return false
    }else if(lname.value.length<2){
        alert("last name should be more than 2 character")
        lname.style.border='2px solid red'
        return false
    }else if(lname.value.length<2){
        alert("last name should be more than 2 character")
        lname.style.border='2px solid red'
        return false
    }else if(lname.value.length>10){
        alert("last name should be more than 10 letters")
        lname.style.border='2px solid red'
        return false
    }else if(!lnameReg.test(lname.value)){
        alert("last name should contain only letters")
        lname.style.border='2px solid red'
        return false
    }
    else{
        lname.style.border='2px solid green'
        lflag=true
        return true
    }
}

function validate3(){
    
    let phnoReg = /^[(+91)]*[7-9][0-9]{9}$/
    if(phone.value==""){
        alert("Phone number is required")
       phone.style.border='2px solid red' 
       return false
    }else if(!phnoReg.test(phone.value)){
        if(13<phone.value.length || phone.value.length<10){
            alert("phone number atleast 10 digit long or should start with +91")
            phone.style.border='2px solid red'
            return false
        }else{
            alert("enter a valid phone number")
            phone.style.border='2px solid red'
            return false
        }
        
    }else{
        phone.style.border='2px solid green'
        phflag=true
        return true
    }
}
function validate4(){
    let ofReg=/^[0-9]{5}$/
    
    if(office_no.value==""){
        alert("office number is required")
        office_no.style.border='2px solid red'
        return false
    }else if(!ofReg.test(office_no.value)){
        alert("office number should contain number only")
        office_no.style.border='2px solid red'
        return false

    }else{
       
        office_no.style.border='2px solid green'
        offlag=true
        return true
    }
}

function validate5(){
    let emailReg= /^[a-zA-Z]{1,}?([a-zA-Z1-9]{1,})?([_])?([.])?([a-zA-Z1-9]{1,})?([.])?([a-zA-Z1-9]{1,})[@]?([a-z]{1,})?([.])?([a-z]{1,})?([.])?([a-z]{1,})$/
    //^[a-zA-Z]+([\.][a-zA-Z0-9]+)*@[a-zA-Z0-9]+([\.]?[a-zA-Z]+)*([\.][a-zA-Z]{2,3})$/
    
   
    if(email.value==""){
        alert("Email is required")
        email.style.border='2px solid red'
        return false
    }else if(!emailReg.test(email.value)){
        alert("please enter valid email")
        email.style.border='2px solid red'
        return false
    }else{
        email.style.border='2px solid green'
        eflag=true
         return true
    }
}

function validate6(){
   let passReg=new RegExp("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$")
    //^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&-+=()])$/
   // let passReg=/^[a-zA-Z0-9]{8,12}$/
    //^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/    
    //^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$

    //^[a-zA-Z0-9@#;'./-=+,\[\]\{\}\)\(<>.//\\!]{8,12}$/
    if(pass1.value==""){
        alert("Password is required")
        pass1.style.border='2px solid red'
        return false
    }else if(pass1.value.length<8 || pass1.value.length>12){
        alert("password should be 8 or 12 character long")
       
        pass1.style.border='2px solid red'
        return false
    }else if(!passReg.test(pass1.value)){
        alert("password should contain atleast 1 small letter,1 capital letter ,1 number and 1 special symbol")
        pass1.style.border='2px solid red'
        return false

    }else{
        pass1.style.border='2px solid green'
        pflag1=true
        return true
    }
}

function validate7(){
    if(pass1.value==""){
        alert("Password is required")
        pass1.style.border='2px solid red'
        pass2.style.border='2px solid red'
        return false
    }else if(pass2.value==""){
        alert("please confirm password ")
        pass2.style.border='2px solid red'
        pflag=false
        return false
    }else if(!(pass2.value==pass1.value)){
        alert("both password should match")
        pass2.style.border='2px solid red'
        pflag=false
        return false
    }else if(!validate6() && pass2.value==pass1.value){
        alert("password should contain atleast 1 small letter,1 capital letter ,1 number and 1 special symbol")
        pass1.style.border='2px solid red'
        pass2.style.border='2px solid red'
        return false
    }else{
        pass2.style.border='2px solid green'
        pflag2=true
        return true
    }


}

// function validate8(){
//     months =[
//         'jan','feb','march','april','may','june','july'
//         ,'aug','sep','oct','nov','dec'
//     ]
//     if(mon.value!='mon' ){
        
        
//        console.log(mon.value,op.length)
//         let days =new Date(2000,mon.value,0).getDate()
//         console.log(days)
        
        

//     }
    
//     // if(mon.value!='mon' && day.value!='day' && year.value!='year'){
//     //     //monflag=dayflag=yearflag=true
//     //     if(mon.value=='feb' || mon.value=='april' || mon.value=='june' || mon.value=='aug' || mon.value=='sep' || mon.value=='nov'){
//     //         console.log(day.value)
//     //         day.value=11
//     //         lastDay.style.display='none'

//     //     }else{
//     //         lastDay.style.display='inline'
//     //     }
    
//     // const d = new Date()
    

//     // var today = new Date();
//     // var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

//     // console.log(date)
   
//     // blabel.style.color=""
//     // const date1 = new Date(mon.value+'/'+day.value+'/'+year.value);
//     // console.log(d.getMonth()+'/'+d.getDay()+'/'+d.getFullYear())
//     // const date2 = new Date(d.getMonth()+1+'/'+d.getDate()+'/'+d.getFullYear())
//     // console.log(date1,date2)
//     // const diff = Math.abs(date2 - date1);
//     // const currentAge =(diff/ (1000 * 60 * 60 * 24))/365
//     // age.value=parseInt(currentAge)
//     // age.style.border='2px solid green'
    
//     // return true
    
//     // }else {
//     //     age.value=""
//     //     alert("please select birthdate to calculate age")
//     //     age.style.border='2px solid red'
//     //     blabel.style.color="red"
//     //     return false
//     // }
// }

function validate8(){
    if(mon.value!='mon' ){
            validateDay()
            calAge()
    }else {
                age.value=""
                alert("please select birthdate to calculate age")
                age.style.border='2px solid red'
                blabel.style.color="red"
                return false
            }

}

function validateDay(){
    console.log(mon.value)
    if(mon.value=='feb' || mon.value=='april' || mon.value=='june' || mon.value=='aug' || mon.value=='sep' || mon.value=='nov'){
        console.log(day)
        
        console.log(day.value)
        lastDay.style.display='none'

    }else{
        lastDay.style.display='inline'
        console.log(day.value)
        day.value='day'
        console.log(day.value)
    }
    return true
}
function calAge(){
    if(year.value!='year'){
        const d = new Date()
    

        var today = new Date();
        var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    
        console.log(date)
       
        blabel.style.color=""
        const date1 = new Date(mon.value+'/'+day.value+'/'+year.value);
        console.log(d.getMonth()+'/'+d.getDay()+'/'+d.getFullYear())
        const date2 = new Date(d.getMonth()+1+'/'+d.getDate()+'/'+d.getFullYear())
        console.log(date1,date2)
        const diff = Math.abs(date2 - date1);
        const currentAge =(diff/ (1000 * 60 * 60 * 24))/365
        age.value=parseInt(currentAge)
        age.style.border='2px solid green'
        
        return true
    }
    
}


function validate9(){
    console.log(gender[0],gender[1],gender[0].checked, gender[1].checked,!gender[0].checked || !gender[1].checked)
    if(gender[0].checked || gender[1].checked){
        console.log("correct");
        glabel.style.color='green'
        gflag=true
        return true
        
        
    }else{
        console.log("no")
        alert("please select gender")
        glabel.style.color='red'
        
        return false
    }
}



function validate10(){
    console.log(chbox[0].checked ,chbox[1].checked ,chbox[2].checked)
    if(chbox[0].checked || chbox[1].checked ||chbox[2].checked){
        console.log("correct");
        int.style.color='green'
        
        return true
        
        
    }else{
        alert("please select interests")
        
        int.style.color='red'
        return false
    }
}

function validate11(){
    console.log(msg.value,msg.value.length)
    if(msg.value==""){
        msg.style.border='2px solid red'
        alert("Message is required")
        return false
    }else if(msg.value.length<=1){
        msg.style.border='2px solid red'
        alert("Message should be more than 2 characters")
        return false
    }else{
        msg.style.border='2px solid green'
        mflag=true
        return true
    }
}


function validateForm(){
    console.log("called")
   // event.preventDefault();
       
        // let state=validate1()&&validate2()&&validate3()&&validate4()&&validate5()&&validate6()&&validate7()
        // &&validate8()&&validate9()&& validate10()&& validate11()
        if(fflag|| lfag|| phflag||offlag||pflag1||pflag2||eflag||aflag||gflag||iflag||mflag){
            let state1 = validate1();
            let state2 = validate2();
            let state3 = validate3();
            let state4 = validate4();
            let state5 = validate5();
            let state6 = validate6();
            let state7 = validate7();
            let state8 = validate8();
            let state9 = validate9();
            let state10 = validate10();
            let state11 = validate11();
            return (state1 && state2 && state3 && state4 && state5 && state6 && state7 && state8
                && state9 && state10 && state11)
        }else if(!(fflag&&lfag&&phflag&&offlag&&pflag1&&pflag2&&eflag&&aflag&&gflag&&iflag&&mflag)){
            alert("please fill all")
            return false
        }
       
         
        
            
        
}


