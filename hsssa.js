
function create_list_item(event){
    event.preventDefault();
    let text = document.getElementById('Input').value;
    let li = document.createElement('li');
    li.innerText = text;
    document.getElementById('ul').appendChild(li);
    
}
function calculate(event){
    event.preventDefault();
    let int1 = parseInt(document.getElementById('int1').value);
    let int2 = parseInt(document.getElementById('int2').value);
    console.log("int1: "+int1);
    console.log("int2: "+int2);
    console.log(int1+int2);
    let li = document.createElement('li');
    let calc = int1+int2;
    li.innerText = int1+"+"+int2+"="+calc;
    document.getElementById('ul').appendChild(li);
}

let state = 0;
let states = [
    '/',
    'A',
    'A-',
    'Az',
    'Az\\',
    'Azv',
    'Azv@',
    'Azve',
    'Azve|',
    'Azver',
    'Azvere',
    'AzverexD',
    'AzverexD',
    'AzverexD',
    'Azvere',
    'Azver',
    'Azve|',
    'Azve',
    'Azv@',
    'Azv',
    'Az\\',
    'Az',
    'A-',
    'A',
    '/',
    ];

function anim(){
    if(state >= states.length) state = 0;
    document.title = states[state];
    state++;

}

setInterval(anim, 400);