let elements = [...document.querySelectorAll('.element')]
let sElem = []
let gt = 0.9
let atual = 0

// FETCH E ORGANIZAÇÃO DO CONTEUDO NA TABELA
let tablePeriodic = './js/tp.json'
fetch(tablePeriodic, {
    method: 'GET',
    'Content-type':'application/json'
})
.then((response) => response.json())
.then((data) => {
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

// FUNÇÃO QUE MOSTRA O ELEMENTO ESCOLHIDO
function mostrar(elem, name){
    const chosenElement = document.querySelector('#chosenElement')
    colored(elements)
    const colorElem = elem.style.backgroundColor
    elem.style.backgroundColor='white'
    
    fetch(tablePeriodic, {
        method: 'GET',
        'Content-type':'application/json'
    })
    .then((response) => response.json())
    .then((data) => {
        if(chosenElement.children[2]){
            chosenElement.children[2].remove()
        }

        data.map((elem, i) => {
            if(elem.symbol == name){
                let res = document.createElement('div')
                res.classList.add('divRes')
                let divEl = document.createElement('div')
                let dsitributionEletronic = document.createElement('p')
                dsitributionEletronic.classList.add('dsitribuitionElectric')
                let elemName = document.createElement('p')
                elemName.classList.add('nameNumber')
                dsitributionEletronic.innerHTML = elem.electronicConfiguration
                elemName.innerHTML = `<span>#${elem.atomicNumber}</span> ${elem.name}`
                divEl.innerText = elem.symbol
                divEl.style.backgroundColor = colorElem
                divEl.style.backgroundColor = 1
                divEl.classList.add('elemSymb')
                res.appendChild(divEl)
                res.appendChild(elemName)
                res.appendChild(dsitributionEletronic)
                chosenElement.appendChild(res)
                return
            }
        })
    })
    .catch((err) => console.log(err))
}

// ADICIONA EVENTO DE CLIQUE NOS ITENS DA TABELA
elements.map((elem, i) => {
    elem.addEventListener('click', (el) => {
        atual = i
        mostrar(el.target, el.target.innerText)
    })
})

let prev = document.querySelector('.prev') 
let prox = document.querySelector('.prox') 

function prevElem() {
    if(atual == 0){
        return
    }else if(atual == 56){
        atual = 103
    }else if(atual == 88){
        atual = 56
    }else if(atual == 103) {
        atual = 73
    }
    else if(atual == 73){
        atual = 118
    }
    atual-=1
    mostrar(elements[atual], sElem[atual])
    let tt = 0
    switch (atual) {
        case 88:
            tt = 56
            mostrar(elements[atual], sElem[tt])
        break;
        
        case 89:
            tt = 57
            mostrar(elements[atual], sElem[tt])
        break;
        
        case 90:
            tt = 58
            mostrar(elements[atual], sElem[tt])
        break;
        
        case 91:
            tt = 59
            mostrar(elements[atual], sElem[tt])
        break;
        
        case 92:
            tt = 60
            mostrar(elements[atual], sElem[tt])
        break;
        
        case 93:
            tt = 61
            mostrar(elements[atual], sElem[tt])
        break;
        
        case 94:
            tt = 62
            mostrar(elements[atual], sElem[tt])
        break;
        
        case 95:
            tt = 63
            mostrar(elements[atual], sElem[tt])
        break;
        
        case 96:
            tt = 64
            mostrar(elements[atual], sElem[tt])
        break;
        
        case 97:
            tt = 65
            mostrar(elements[atual], sElem[tt])
        break;
        
        case 98:
            tt = 66
            mostrar(elements[atual], sElem[tt])
        break;
        
        case 99:
            tt = 67
            mostrar(elements[atual], sElem[tt])
        break;
        
        case 100:
            tt = 68
            mostrar(elements[atual], sElem[tt])
        break;
        
        case 101:
            tt = 69
            mostrar(elements[atual], sElem[tt])
        break;
        
        case 102:
            tt = 70
            mostrar(elements[atual], sElem[tt])
        break;
        
        case 56:
            tt = 71
            mostrar(elements[atual], sElem[tt])
        break;
        
        case 57:
            tt = 72
            mostrar(elements[atual], sElem[tt])
        break;
        
        case 58:
            tt = 73
            mostrar(elements[atual], sElem[tt])
        break;
        
        case 59:
            tt = 74
            mostrar(elements[atual], sElem[tt])
        break;
        
        case 60:
            tt = 75
            mostrar(elements[atual], sElem[tt])
        break;
        
        case 61:
            tt = 76
            mostrar(elements[atual], sElem[tt])
        break;
        
        case 62:
            tt = 77
            mostrar(elements[atual], sElem[tt])
        break;
        
        case 63:
            tt = 78
            mostrar(elements[atual], sElem[tt])
        break;
        
        case 64:
            tt = 79
            mostrar(elements[atual], sElem[tt])
        break;
        
        case 65:
            tt = 80
            mostrar(elements[atual], sElem[tt])
        break;
        
        case 66:
            tt = 81
            mostrar(elements[atual], sElem[tt])
        break;
        
        case 67:
            tt = 82
            mostrar(elements[atual], sElem[tt])
        break;
        
        case 68:
            tt = 83
            mostrar(elements[atual], sElem[tt])
        break;
        
        case 69:
            tt = 84
            mostrar(elements[atual], sElem[tt])
        break;
        
        case 70:
            tt = 85
            mostrar(elements[atual], sElem[tt])
        break;
        
        case 71:
            tt = 86
            mostrar(elements[atual], sElem[tt])
        break;
        
        case 72:
            tt = 87
            mostrar(elements[atual], sElem[tt])
        break;

        case 73:
            tt = 103
            mostrar(elements[atual], sElem[tt])
        break;

        case 74:
            tt = 104
            mostrar(elements[atual], sElem[tt])
        break;

        case 75:
            tt = 105
            mostrar(elements[atual], sElem[tt])
        break;

        case 76:
            tt = 106
            mostrar(elements[atual], sElem[tt])
        break;

        case 77:
            tt = 107
            mostrar(elements[atual], sElem[tt])
        break;

        case 78:
            tt = 108
            mostrar(elements[atual], sElem[tt])
        break;

        case 79:
            tt = 109
            mostrar(elements[atual], sElem[tt])
        break;

        case 80:
            tt = 110
            mostrar(elements[atual], sElem[tt])
        break;

        case 81:
            tt = 111
            mostrar(elements[atual], sElem[tt])
        break;

        case 82:
            tt = 112
            mostrar(elements[atual], sElem[tt])
        break;

        case 83:
            tt = 113
            mostrar(elements[atual], sElem[tt])
        break;

        case 84:
            tt = 114
            mostrar(elements[atual], sElem[tt])
        break;

        case 85:
            tt = 115
            mostrar(elements[atual], sElem[tt])
        break;

        case 86:
            tt = 116
            mostrar(elements[atual], sElem[tt])
        break;

        case 87:
            tt = 117
            mostrar(elements[atual], sElem[tt])
        break;

        case 103:
            tt = 88
            mostrar(elements[atual], sElem[tt])
        break;

        case 104:
            tt = 89
            mostrar(elements[atual], sElem[tt])
        break;

        case 105:
            tt = 90
            mostrar(elements[atual], sElem[tt])
        break;

        case 106:
            tt = 91
            mostrar(elements[atual], sElem[tt])
        break;

        case 107:
            tt = 92
            mostrar(elements[atual], sElem[tt])
        break;

        case 108:
            tt = 93
            mostrar(elements[atual], sElem[tt])
        break;

        case 109:
            tt = 94
            mostrar(elements[atual], sElem[tt])
        break;

        case 110:
            tt = 95
            mostrar(elements[atual], sElem[tt])
        break;

        case 111:
            tt = 96
            mostrar(elements[atual], sElem[tt])
        break;

        case 112:
            tt = 97
            mostrar(elements[atual], sElem[tt])
        break;

        case 113:
            tt = 98
            mostrar(elements[atual], sElem[tt])
        break;

        case 114:
            tt = 99
            mostrar(elements[atual], sElem[tt])
        break;

        case 115:
            tt = 100
            mostrar(elements[atual], sElem[tt])
        break;

        case 116:
            tt = 101
            mostrar(elements[atual], sElem[tt])
        break;

        case 117:
            tt = 102
            mostrar(elements[atual], sElem[tt])
        break;
    }
}

function nextElem(){
    if(atual == 87){
        atual = -1
    }else if(atual == 55){
        atual = 87
    }else if (atual == 102) {
        atual = 55   
    }
    else if(atual == 72){
        atual = 102
    }
    else if(atual == 117){
        atual = 72
    }
    atual+=1
    mostrar(elements[atual], sElem[atual])
    let tt = 0
    switch (atual) {
        case 88:
            tt = 56
            mostrar(elements[atual], sElem[tt])
        break;
        
        case 89:
            tt = 57
            mostrar(elements[atual], sElem[tt])
        break;
        
        case 90:
            tt = 58
            mostrar(elements[atual], sElem[tt])
        break;
        
        case 91:
            tt = 59
            mostrar(elements[atual], sElem[tt])
        break;
        
        case 92:
            tt = 60
            mostrar(elements[atual], sElem[tt])
        break;
        
        case 93:
            tt = 61
            mostrar(elements[atual], sElem[tt])
        break;
        
        case 94:
            tt = 62
            mostrar(elements[atual], sElem[tt])
        break;
        
        case 95:
            tt = 63
            mostrar(elements[atual], sElem[tt])
        break;
        
        case 96:
            tt = 64
            mostrar(elements[atual], sElem[tt])
        break;
        
        case 97:
            tt = 65
            mostrar(elements[atual], sElem[tt])
        break;
        
        case 98:
            tt = 66
            mostrar(elements[atual], sElem[tt])
        break;
        
        case 99:
            tt = 67
            mostrar(elements[atual], sElem[tt])
        break;
        
        case 100:
            tt = 68
            mostrar(elements[atual], sElem[tt])
        break;
        
        case 101:
            tt = 69
            mostrar(elements[atual], sElem[tt])
        break;
        
        case 102:
            tt = 70
            mostrar(elements[atual], sElem[tt])
        break;
        
        case 56:
            tt = 71
            mostrar(elements[atual], sElem[tt])
        break;
        
        case 57:
            tt = 72
            mostrar(elements[atual], sElem[tt])
        break;
        
        case 58:
            tt = 73
            mostrar(elements[atual], sElem[tt])
        break;
        
        case 59:
            tt = 74
            mostrar(elements[atual], sElem[tt])
        break;
        
        case 60:
            tt = 75
            mostrar(elements[atual], sElem[tt])
        break;
        
        case 61:
            tt = 76
            mostrar(elements[atual], sElem[tt])
        break;
        
        case 62:
            tt = 77
            mostrar(elements[atual], sElem[tt])
        break;
        
        case 63:
            tt = 78
            mostrar(elements[atual], sElem[tt])
        break;
        
        case 64:
            tt = 79
            mostrar(elements[atual], sElem[tt])
        break;
        
        case 65:
            tt = 80
            mostrar(elements[atual], sElem[tt])
        break;
        
        case 66:
            tt = 81
            mostrar(elements[atual], sElem[tt])
        break;
        
        case 67:
            tt = 82
            mostrar(elements[atual], sElem[tt])
        break;
        
        case 68:
            tt = 83
            mostrar(elements[atual], sElem[tt])
        break;
        
        case 69:
            tt = 84
            mostrar(elements[atual], sElem[tt])
        break;
        
        case 70:
            tt = 85
            mostrar(elements[atual], sElem[tt])
        break;
        
        case 71:
            tt = 86
            mostrar(elements[atual], sElem[tt])
        break;
        
        case 72:
            tt = 87
            mostrar(elements[atual], sElem[tt])
        break;

        case 73:
            tt = 103
            mostrar(elements[atual], sElem[tt])
        break;

        case 74:
            tt = 104
            mostrar(elements[atual], sElem[tt])
        break;

        case 75:
            tt = 105
            mostrar(elements[atual], sElem[tt])
        break;

        case 76:
            tt = 106
            mostrar(elements[atual], sElem[tt])
        break;

        case 77:
            tt = 107
            mostrar(elements[atual], sElem[tt])
        break;

        case 78:
            tt = 108
            mostrar(elements[atual], sElem[tt])
        break;

        case 79:
            tt = 109
            mostrar(elements[atual], sElem[tt])
        break;

        case 80:
            tt = 110
            mostrar(elements[atual], sElem[tt])
        break;

        case 81:
            tt = 111
            mostrar(elements[atual], sElem[tt])
        break;

        case 82:
            tt = 112
            mostrar(elements[atual], sElem[tt])
        break;

        case 83:
            tt = 113
            mostrar(elements[atual], sElem[tt])
        break;

        case 84:
            tt = 114
            mostrar(elements[atual], sElem[tt])
        break;

        case 85:
            tt = 115
            mostrar(elements[atual], sElem[tt])
        break;

        case 86:
            tt = 116
            mostrar(elements[atual], sElem[tt])
        break;

        case 87:
            tt = 117
            mostrar(elements[atual], sElem[tt])
        break;

        case 103:
            tt = 88
            mostrar(elements[atual], sElem[tt])
        break;

        case 104:
            tt = 89
            mostrar(elements[atual], sElem[tt])
        break;

        case 105:
            tt = 90
            mostrar(elements[atual], sElem[tt])
        break;

        case 106:
            tt = 91
            mostrar(elements[atual], sElem[tt])
        break;

        case 107:
            tt = 92
            mostrar(elements[atual], sElem[tt])
        break;

        case 108:
            tt = 93
            mostrar(elements[atual], sElem[tt])
        break;

        case 109:
            tt = 94
            mostrar(elements[atual], sElem[tt])
        break;

        case 110:
            tt = 95
            mostrar(elements[atual], sElem[tt])
        break;

        case 111:
            tt = 96
            mostrar(elements[atual], sElem[tt])
        break;

        case 112:
            tt = 97
            mostrar(elements[atual], sElem[tt])
        break;

        case 113:
            tt = 98
            mostrar(elements[atual], sElem[tt])
        break;

        case 114:
            tt = 99
            mostrar(elements[atual], sElem[tt])
        break;

        case 115:
            tt = 100
            mostrar(elements[atual], sElem[tt])
        break;

        case 116:
            tt = 101
            mostrar(elements[atual], sElem[tt])
        break;

        case 117:
            tt = 102
            mostrar(elements[atual], sElem[tt])
        break;
    }
}

prev.addEventListener('click', prevElem)
prox.addEventListener('click', nextElem)

window.addEventListener('keyup', (evt) => {
    if(evt.key == 'ArrowLeft'){
        prevElem()
    }
    
    if(evt.key == 'ArrowRight'){
        nextElem()
    }
})

//FUNÇÃO PARA COLORIR ITENS DA TABELA DE ACORDO COM O GRUPO
function colored(elements){
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