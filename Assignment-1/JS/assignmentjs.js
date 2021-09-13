let img=document.getElementById('client')
let imgArr=['our_team_laura.jpg','our_team_kerry.jpg','our_team_racel.jpg','our_team_zoe.jpg']
let count=0
function next(){
   
    if(count<imgArr.length-1){
        
    img.src='../Images/images/'+imgArr[++count]
    
    
    console.log(count)
    
    }
}

function prev(){
    
    if(count>0){
        
        img.src='../Images/images/'+imgArr[--count]
        
        console.log(count)
    }
}

function change(ele){
    ele.style.backgroundColor='yellowgreen'
    ele.style.color='white'
    if(ele.id=='read-btn1'){
        document.getElementById('title1').style.color='yellowgreen'
    } 
    if(ele.id=='read-btn2'){
        document.getElementById('title2').style.color='yellowgreen'
    }
    if(ele.id=='read-btn3'){
        document.getElementById('title3').style.color='yellowgreen'
    }

}