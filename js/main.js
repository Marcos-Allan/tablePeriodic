let elements = [...document.querySelectorAll('.element')]
let sElem = []

let tablePeriodic = './js/tp.json'
fetch(tablePeriodic, {
    method: 'GET',
    'Content-type':'application/json'
})
.then((response) => response.json())
.then((data) => {
    // console.log(data)
    for(let i = 0; i < elements.length; i++){
        sElem.push(data[i].symbol)
        elements[i].innerText = data[i].symbol   
        if(i >= 56 && i <= 72){
            elements[i].innerText = data[i+15].symbol   
        }
        else if(i >= 73 && i <= 87){
            elements[i].innerText = data[i+30].symbol
        }
        else if(i>=88 && i <= 102){
            elements[i].innerText = data[i-32].symbol
        }
        else if(i>= 103 && i <= 118){
            elements[i].innerText = data[i-15].symbol
        }
    }
    mostrar(elements[0], sElem[0])
})

.catch((err) => console.log(err))

function mostrar(elem, name){
    const chosenElement = document.querySelector('#chosenElement')
    colored()
    elem.style.backgroundColor='white'
    
    fetch(tablePeriodic, {
        method: 'GET',
        'Content-type':'application/json'
    })
    .then((response) => response.json())
    .then((data) => {
        chosenElement.innerHTML = ''
        data.map((elem) => {
            if(elem.symbol == name){
                let img1 = document.createElement('img')
                img1.src = '../imgs/esquerda.png'
                let img2 = document.createElement('img')
                img2.src = '../imgs/direita.png'
                let divEl = document.createElement('div')
                divEl.innerText = elem.symbol
                divEl.classList.add('elemSymb')
                chosenElement.appendChild(img1)
                chosenElement.appendChild(divEl)
                chosenElement.appendChild(img2)
                return
            }
        })
    })
    .catch((err) => console.log(err))
}

elements.map((elem) => {
    elem.addEventListener('click', (el) => {
        console.log(el.target.innerText)
        mostrar(el.target, el.target.innerText)
    })
})


let gt = 0.9
function colored(){
    elements.map((el, i) => {

        switch (i) {
            case 0:
            case 5:
            case 6:
            case 7:
            case 14:
            case 15:
            case 33:
                elements[i].style.backgroundColor = 'rgba(162, 211, 68,'+gt+')'
            break;
            
            case 1:
            case 9:
            case 17:
            case 35:
            case 53:
            case 70:
            case 87:
                elements[i].style.backgroundColor = 'rgba(61, 158, 227,'+gt+')'
            break;
            
            case 2:
            case 10:
            case 18:
            case 36:
            case 54:
            case 71:
                elements[i].style.backgroundColor = 'rgba(241, 179, 0,'+gt+')'
            break;
            
            case 3:
            case 11:
            case 19:
            case 37:
            case 55:
            case 72:
                elements[i].style.backgroundColor = 'rgba(234, 218, 0,'+gt+')'
            break;
            
            case 4:
            case 13:
            case 31:
            case 32:
            case 50:
            case 51:
            case 68:
                elements[i].style.backgroundColor = 'rgba(76, 182, 172,'+gt+')'
            break;
            
            case 8:
            case 16:
            case 34:
            case 52:
            case 69:
            case 86:
                elements[i].style.backgroundColor = 'rgba(112, 203, 234,'+gt+')'
            break;
            
            case 12:
            case 30:
            case 48:
            case 49:
            case 65:
            case 66:
            case 67:
            case 82:
            case 83:
            case 84:
            case 85:
                elements[i].style.backgroundColor = 'rgba(162, 198, 210,'+gt+')'
            break;
            
            case 20:
            case 21:
            case 22:
            case 23:
            case 24:
            case 25:
            case 26:
            case 27:
            case 28:
            case 29:
            case 38:
            case 39:
            case 40:
            case 41:
            case 42:
            case 43:
            case 44:
            case 45:
            case 46:
            case 47:
            case 56:
            case 57:
            case 58:
            case 59:
            case 60:
            case 61:
            case 62:
            case 63:
            case 64:
            case 73:
            case 74:
            case 75:
            case 76:
            case 77:
            case 78:
            case 79:
            case 80:
            case 81:
                elements[i].style.backgroundColor = 'rgba(234, 143, 142,'+gt+')'
            break;
            
            case 88:
            case 89:
            case 90:
            case 91:
            case 92:
            case 93:
            case 94:
            case 95:
            case 96:
            case 97:
            case 98:
            case 99:
            case 100:
            case 101:
            case 102:
                elements[i].style.backgroundColor = 'rgba(144, 227, 233,'+gt+')'
            break;
            
            case 103:
            case 104:
            case 105:
            case 106:
            case 107:
            case 108:
            case 109:
            case 110:
            case 111:
            case 112:
            case 113:
            case 114:
            case 115:
            case 116:
            case 117:
                elements[i].style.backgroundColor = 'rgba(220, 173, 215,'+gt+')'
            break;
        }
    })
}

colored()