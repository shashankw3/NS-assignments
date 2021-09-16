// Instructions: 
// You will have to validate the form as per below instructions: 

// Firstname - Compulsory 
// Lastname - Compulsory 
// Phone No - Compulsory, Only Nos, exact 10 digit
// Office No - Only Nos
// Email - Compulsory, Email validation
// Password - Compulsory, Range should be between 8 to 12 charachers, should accept only Alphanumeric characters, No Special characters
// Confirm Password - Compulsory, Exactly same as Password
//  DOB - Compulsory
// Age - Dissabled field, It should calculate the Age based on DOB entered above. It should show value as 25.6 years
// Gender - Compulsory
// Interest - It should have min 1 value selected
// About you - Compulsory 


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

function validate1(){
    let fnameReg = /[a-ZA-Z]/
    if(fname.value==""){
        alert("first name is required")
        fname.style.border='2px solid red'
    }else if(fname.value.length<2){
        alert("first name should be more than 2 character")
        fname.style.border='2px solid red'
    }else if(fname.value.length>10){
        alert("first name should be more than 10 letters")
        fname.style.border='2px solid red'
    }else if(!fnameReg.test(fname.value)){
        alert("first name should contain only letters")
        fname.style.border='2px solid red'
    }else{
        fname.style.border='2px solid green'
    }
}
function validate2(){
    let lnameReg = /[a-ZA-Z]/
    if(lname.value==""){
        alert("lastname is required")
        lname.style.border='2px solid red'
    }else if(lname.value.length<2){
        alert("last name should be more than 2 character")
        lname.style.border='2px solid red'
    }else if(lname..value.length>10){
        alert("last name should be more than 10 letters")
        lname.style.border='2px solid red'
    }else if(!lnameReg.test(lname.value)){
        alert("last name should contain only letters")
        lname.style.border='2px solid red'
     } else{
        lname.style.border='2px solid green'
    }
}

function validate3(){
    
    let phnoReg = /[7-9][0-9]{9}/
    if(phone.value==""){
        alert("Phone number is required")
       phone.style.border='2px solid red' 
    }else if(phone.value.length<10){
        alert("phone number should be 10 digit long")
        phone.style.border='2px solid red'
    }else if(phone.value.length>10){
        alert("phone number should be 10 digit long")
        phone.style.border='2px solid red'
    }else if(!phnoReg.test(phone.value)){
        alert("enter a valid phone number")
        phone.style.border='2px solid red'
    }else{
        phone.style.border='2px solid green'
    }
}
function validate4(){
    let ofReg=/[0-9]/
    
    if(office_no.value==""){
        alert("office number is required")
        office_no.style.border='2px solid red'
    }else if(!ofReg.test(office_no.value)){
        alert("office number should contain number only")
        office_no.style.border='2px solid red'

    }else{
       
        office_no.style.border='2px solid green'
    }
}

function validate5(){
    let emailReg=/[a-zA-Z0-9_\-\.]+[@][a-z]+[\.]+[a-z]{2,3}/

    if(email.value==""){
        alert("Email is required")
        email.style.border='2px solid red'
    }else if(!emailReg.test(email.value)){
        alert("please enter valid email")
        email.style.border='2px solid red'
    }else{
        email.style.border='2px solid green'
    }
}

function validate6(){
    let passReg=/[a-zA-Z0-9]{8,12}/

    if(pass1.value==""){
        alert("Password is required")
        pass1.style.border='2px solid red'
    }else if(pass1.value.length<8 || pass1.value.length>12){
        alert("password should be 8 or 12 character long")
        pass1.style.border='2px solid red'
    }else if(!passReg.test(pass1.value)){
        alert("password should contain only alphanumeric")
        pass1.style.border='2px solid red'

    }else{
        pass1.style.border='2px solid green'
    }
}

function validate7(){

    if(pass2.value==""){
        alert("please confirm password ")
        pass2.style.border='2px solid red'
    }else if(!(pass2.value==pass1.value)){
        alert("both password should match")
        pass2.style.border='2px solid red'
    }else{
        pass2.style.border='2px solid green'
    }


}

function validate8(){
    const d = new Date()
    

    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

    console.log(date)


    const date1 = new Date(mon.value+'/'+day.value+'/'+year.value);
    console.log(d.getMonth()+'/'+d.getDay()+'/'+d.getFullYear())
    const date2 = new Date(d.getMonth()+1+'/'+d.getDate()+'/'+d.getFullYear())
    console.log(date1,date2)
    const diff = Math.abs(date2 - date1);
    const currentAge =(diff/ (1000 * 60 * 60 * 24))/365
    age.value=parseInt(currentAge)
    
    }
function validate9(){

    if(!gender[0].checked || !gender[1].checked){
        alert("please select gender")
        return false
        
    }else{
        console.log("correct");
        return true
    }
}

function validate10(){

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
        return true
    }
}



function validateForm(){
    console.log("clciekd")
    return (
        validate1 && validate2 && validate3
    )
}