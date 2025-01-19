const choices = document.querySelectorAll('img')
const computer_choice = ['rock','paper','scissor']
let player_total = 0
let computer_total = 0

choices.forEach(choosen =>{
    choosen.addEventListener('click', () => {
        const res = document.getElementById('res')
        const computer_choosen = Math.floor(Math.random() * 3)
        
        const player_wish = document.getElementById('player-wish')
        const computer_wish = document.getElementById('computer-wish')
        const player_choice = choosen.id
        player_wish.textContent = `PLAYER: ${player_choice}`
        computer_wish.textContent = `COMPUTER: ${computer_choice[computer_choosen]}`

       res.classList.remove('win','loose', 'tie')

        if(choosen.id === "rock"){
            if(computer_choosen == 0){
                res.textContent = "IT's a TIE!!"
                res.classList.add('tie')
            }
            else if(computer_choosen == 1){
                res.textContent = "YOU LOOSE!!🤣🤣"
                res.classList.add('loose')
                computer_total += 1
            }
            else{
                res.textContent = "YOU WIN!!😠😡"
                res.classList.add('win')
                player_total += 1
            }
        }
        else if(choosen.id === "paper"){
            if(computer_choosen == 0){
                res.textContent = "YOU WIN!!😠😡"
                res.classList.add('win')
                player_total += 1
            }
            else if(computer_choosen == 1){
                res.textContent = "IT's a TIE!!"
                res.classList.add('tie')
            }
            else{
                res.textContent = "YOU LOOSE!!🤣🤣"
                res.classList.add('loose')
                computer_total += 1
            }
        }
        else{
            if(computer_choosen == 0){
                res.textContent =  "YOU LOOSE!!🤣🤣"
                res.classList.add('loose')
                computer_total += 1
            }
            else if(computer_choosen == 1){
                res.textContent = "YOU WIN!!😠😡"
                res.classList.add('win')
                player_total += 1
            }
            else{
                res.textContent ="IT's a TIE!!"
                res.classList.add('tie')
            }
        }
        const p_score = document.getElementById('Player-score')
        const c_score = document.getElementById('Computer-score')
        p_score.classList.add('win')
        c_score.classList.add('loose')
        p_score.textContent = `PLAYER SCORE: ${player_total}`
        c_score.textContent = `COMPUTER SCORE: ${computer_total}`

    })
})

