import {menuArray} from "./data.js"
const order=document.getElementById('summary')
const thanksMessage=document.getElementById('Thanks-Message')

document.addEventListener('click', function(e){
    if(e.target.dataset.id === "0"){ 
    
        handlePizzaClick()
    
    }
    else if(e.target.dataset.id === "1"){
        handleBurgerClick()
    }
    else if (e.target.dataset.id === "2"){
        handleBeerClick()
    }
    else if (e.target.dataset.finish){
        handleFinishClick(e.target.dataset.finish)
    }
})

let ordersHtml=``
let newOrders = ``

let ordersArray =[]
let totalArray=[]

function ordersDisplay(){
let  totalPrice = totalArray.reduce(function(total,currentElement){
return total + currentElement
})
   ordersArray.forEach(function(order){
       
       ordersHtml = `
       
       <div class="order">
    
       <div>${order.name}
       <button data-remove="${order.id}" class="remove-btn">remove</button></div>
       <div class="price"> ${order.price}</div>
       </div>`
       
   })

newOrders+= ordersHtml
   
   order.innerHTML =`<div id="order-summary"><h2>Your Order</h2>`+ newOrders + `<div class="total"><div class="balance"><div><h2>Total:</h2></div><div><h2> ${totalPrice}</h2></div></div>
   <button id="finish" data-finish="btn">Complete Order</button></div></div>`
}


function handlePizzaClick(){
ordersArray.push(menuArray[0])
totalArray.push(menuArray[0].price)    
ordersDisplay()
renderOrderSummary()
}

function renderOrderSummary(){
    order.style.display = "block";
}



function handleBurgerClick(){
   ordersArray.push(menuArray[1])
    totalArray.push(menuArray[1].price)    
    ordersDisplay()
    renderOrderSummary()

}

function handleBeerClick(){
   ordersArray.push(menuArray[2])
totalArray.push(menuArray[2].price)    
ordersDisplay()
renderOrderSummary()

}
const payBtn=document.getElementById('pay-btn')      
 payBtn.addEventListener('click',function(){
document.getElementById('modal').style.display="none"
order.style.display ="none"
thanksMessage.innerHTML =`<div class="Thanks-Message"> 
<h2>"Thanks James Your Order Is On Its Way"</h2> 
</div>`
 })
function handleFinishClick(finishId){
document.getElementById('modal').style.display="block"

}
function getMenuHtml(){
let menuHtml = ''
let orderBox = ''

menuArray.forEach(function(menu){

        
return    menuHtml += `
                        <div class="flex">
                             <div>
                                <p class="emoji">${menu.emoji}</p>
                            </div>
                            <div>
                                <h2>${menu.name}</h2>
                                <p class="ingredients">${menu.ingredients}</p>
                                <p class="price">$${menu.price}</p>
                            </div>
                            <div>
                             <button data-id="${menu.id}"> + </button>
                             </div>
                            
                             </div>

`

                      
})
return `<header>
            <h1>Jimmy's Diner</h1>
            <p>The best burgers and pizzas in town!</p>
        </header>`+ menuHtml
   
}

function render(){
document.getElementById('container').innerHTML = getMenuHtml()
}

render()