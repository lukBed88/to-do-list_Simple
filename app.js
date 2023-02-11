/*   
1.Funkcja tworząca button
2.Funkcja tworząca listę i dodającą elementu do tablicy
3.dodanie przekreślenia na liście
9.02
1.dodanie elementu button z usuwaniem do list
2.usuwanie elementu po naciśnięciu button X - za pomocą zwykłej pętli for
10.02
1. po naciśnięciu przycisku add - dodanie zawarości w inpucie do listy i wyświetlenie go
ALE - dodanie jest i czyszenie inputa też,ale jak input jest psuty,
wtedy dodaje poprzednią wartość - trzeba jakość zmienić
*/

let arrayLi = [];
let arrayBtn = [];

function create(){
    const button = document.querySelector('button')
    createButtonAndAddValues();
}

const createButtonAndAddValues = function() {
    
    const div = document.querySelector('div');
    const input = document.createElement('input');
    createAddBtn()
    div.appendChild(input);
    input.addEventListener(
        'keyup',
        function(e){
            const val = e.target.value;
    //dodanie wartości z inputa do literału stats.valueLi
            stats.valueLi = val;
            if(e.key === "Enter"){
                console.log(val);
                createLi(div,val);
                console.log(arrayLi);
                e.target.value = ''
                
            }
}) 
            
}

const createLi = function(container,value){
    const input = document.querySelector('input');
    const li = document.createElement('li');
    const button = document.querySelector('button');

    li.textContent = value;
    li.style.listStyleType = 'decimal'
    li.style.cursor = 'pointer'
    arrayLi = arrayLi.concat(value);  
    container.appendChild(li);
    createButtonDelete(button,li);
    crossLi(li);     
    
}

const createButtonDelete = function(btn,li) {
    btn = document.createElement('button');
    btn.textContent = 'X'
    btn.classList.add('buttonDelete');
    btn.classList.add('deleteBtn');
    arrayBtn = arrayBtn.concat(btn);
    li.appendChild(btn);
    
    findAndRemoveBtnWithArray(btn,li);

}

const findAndRemoveBtnWithArray = function(button,li){

    const buttons = document.querySelectorAll('button');
    const list = document.querySelector('li');

    button.addEventListener(
        'click',
        function(e){

           const addClass = button.classList.add('pointer');
           const find = button.classList.contains('pointer');
           for(let i = 0;i<buttons.length;i++){
                if(buttons[i].classList.contains('pointer')){
                    console.log(i);
                    arrayLi.splice(i,1);
                    li.remove(i)
                    button.remove(i)
                }
           }

        }
    )
}
// create BTN
const createAddBtn = function() {

    const btn = document.createElement('button');
    btn.textContent = 'ADD';
    document.body.appendChild(btn);
    const input = document.querySelector('input');
    const list = document.querySelector('li');
    const div = document.querySelector('div');

    btn.addEventListener(
        'click',
        function(){

            //dodanie wartości input po wciśnięciu przycisku
            createLi(div,stats.valueLi);
            
            console.log(stats.valueLi);
            console.log(stats.inputValue);
            clearInput();
        }
    )

}

const clearInput = function() {
    const input = document.querySelector('input');
    const inputValue = input.addEventListener(
        'keyup',
        function(){
            // e.target.value = ''
        }
    )

    if(inputValue !== ''){
        input.value = ''
    }
}

// const clearInput = function() {
//     const input = document.querySelector('input');
//     input.addEventListener(
//         'click',
//         function(e){
//             e.target.value = ''
//             console.log('sdbsb');
//         }
//     )
// }

// const clearRemove = function() {
//     addEventListener(
//         'click',
//         clearInput()
//     )
// }

const crossLi = function(li) {
    li.addEventListener(
        'click',
        function(){
                li.classList.toggle('line');
        }
    )
}

const stats = {
    valueLi: createButtonAndAddValues
}

create()
