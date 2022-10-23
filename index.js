let cardEl=document.getElementById("card-el")
let sumEl=document.getElementById("sum-el")
let messageEl=document.getElementById("message-el")
let hasBlackjack=false
let player={
name:"Archa",
chips:120
}

let playerEl=document.getElementById("player-el")
playerEl.textContent=player.name+" : $"+ player.chips
// let firstCard=getRandomCard()
// let secondCard=getRandomCard()
// let cards=[firstCard,secondCard]
let sum=0;
let isAlive=false
let newEl=document.getElementById("new-el")
// console.log(cards)
function start(){
     isAlive=true
     let firstCard=getRandomCard()
let secondCard=getRandomCard()
cards=[firstCard,secondCard]
sum=firstCard+secondCard

    renderGame()
}
function getRandomCard(){
   let y=Math.floor(Math.random()*13)+1
    if(y===1){
        return 11;
    }
   else if(y===11||y===12||y===13){
        return 10;
    }
    else return y;
   
}
function renderGame(){
 
    cardEl.textContent="Cards: "
    for(let i=0;i<cards.length;i++){
        cardEl.textContent+=cards[i]+" "
    }
   
    sumEl.textContent="Sum:"+ " "+sum;

    if(sum<21){
        messageEl.textContent="Please,try again!😕"

    }
    else if(sum==21){
        messageEl.textContent="Hurray! You've got a Blackjack👌"
        hasBlackjack=true
    }
else{
    messageEl.textContent="Oops!You are out of the game😭"
    isAlive = false
}


}
function newCard(){
    if(isAlive===true&&hasBlackjack===false){
    // console.log("draw new card")
    let newCards=getRandomCard();
    sum+=newCards
    // if(sum>21){
    //     reset()
    // }
    cards.push(newCards)
    //newEl=document.getElementById("new-el")
    
   
    // sumEl.textContent="Sum: "+sum
    // cardEl.textContent="Cards: "+firstCard+ " "+secondCard+ " "+newCards
    renderGame()
    }
    

}
function reset(){
    messageEl.textContent="Want to play around?"
    cardEl.textContent="Cards:"+ " "+ 0;
    cards=0;
    sumEl.textContent="Sum: "+" "+0;
    sum=0;


}

// console.log(newsum)
// let firstCard=5
// let secondCard=11
// let sum=firstCard+ secondCard
