let title = document.querySelector('.title')
let turn = 'x';
let squer = [];

function end (num1,num2,num3){
    title.innerHTML = `${squer[num1]}winner!`
    document.getElementById('tareq'+num1).style.background= '#FF506E'
    document.getElementById('tareq'+num2).style.background= '#FF506E'
    document.getElementById('tareq'+num3).style.background= '#FF506E'

    setInterval(function(){title.innerHTML += '.'},1000)
    setInterval(function(){location.reload()},4000)
}

function winner (){
   for(let i=1; i<10;i++){
    squer[i]= document.getElementById('tareq'+i).innerHTML;
   }
   if(squer[1]==squer[2]&&squer[2]==squer[3]&&squer[1]!=''){
    end(1,2,3)
   }
   else if(squer[4]==squer[5]&&squer[5]==squer[6]&&squer[4]!=''){
    end(4,5,6)
}
else if(squer[7]==squer[8]&&squer[8]==squer[9]&&squer[7]!=''){
    end(7,8,9)
}

else if(squer[1]==squer[4]&&squer[4]==squer[7]&&squer[7]!=''){
    end(1,4,7)
}
else if(squer[2]==squer[5]&&squer[5]==squer[8]&&squer[2]!=''){
    end(2,5,8)
}
else if(squer[3]==squer[6]&&squer[6]==squer[9]&&squer[6]!=''){
    end(3,6,9)
}

else if(squer[3]==squer[5]&&squer[5]==squer[7]&&squer[3]!=''){
    end(3,5,7)
}
else if(squer[1]==squer[5]&&squer[5]==squer[9]&&squer[1]!=''){
    end(1,5,9)
}



}

function game (id){
    let element = document.getElementById(id)
    if(turn === 'x' && element.innerHTML === '' ){
        element.innerHTML= 'x';
        turn= 'o'
        title.innerHTML= 'O Turn...'
    }
    else if(turn==='o' && element.innerHTML === ''){
        element.innerHTML= 'O';
        turn= 'x'
        title.innerHTML= 'X Turn...'
    }
    winner ()
}