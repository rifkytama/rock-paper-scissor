const game = () => {
    let playerScore = 0;
    let computerScore = 0;
    let moves = 0;

    const playGame = () => {
        const batu = $('#batu');
        const kertas = $('#kertas');
        const gunting = $('#gunting');
        const playerOptions = [batu, kertas, gunting];
        const computerOptions = ['batu', 'gunting', 'kertas'];

        playerOptions.forEach(option => {
            option.on('click', function() {
                const movesLeft = $('.movesLeft');
                moves++;
                movesLeft.text(`Sisa: ${10 - moves}`);
                movesLeft.css('font-size', '20px');
                movesLeft.css('color', 'black');
                movesLeft.css('margin-bottom', '18px');

                const choiceNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[choiceNumber];

                winner(this.innerText, computerChoice);

                if(moves == 10) {
                    gameOver(playerOptions, movesLeft);
                }
            });
        });
    };

    const winner = (player,computer) => {
        const result = $('.result');
        const playerScoreBoard = $('#player-score');
        const computerScoreBoard = $('#computer-score');
        player = player.toLowerCase();
        computer = computer.toLowerCase();
        switch (true) {
            case (player === computer):
                result.text('Seri, Suit lagi!');
                break;
            case (player == 'batu'):
                if(computer == 'kertas'){
                    result.text('Kalah sama Bot!');
                    result.css('margin-bottom', '2rem');
                    result.css('font-size', '18px');
                    computerScore++;
                    computerScoreBoard.text(computerScore);
                } else {
                    result.text('Kamu menang!');
                    result.css('margin-bottom', '2rem');
                    playerScore++;
                    playerScoreBoard.text(playerScore);
                }
                break;
            case (player == 'gunting'):
                if(computer == 'batu'){
                    result.text('Kalah sama Bot!');
                    result.css('margin-bottom', '2rem');
                    result.css('font-size', '18px');
                    computerScore++;
                    computerScoreBoard.text(computerScore);
                } else {
                    result.text('Kamu menang!');
                    result.css('margin-bottom', '2rem');
                    result.css('font-size', '18px');
                    playerScore++;
                    playerScoreBoard.text(playerScore);
                }
                break;
            case (player == 'kertas'):
                if(computer == 'gunting'){
                    result.text('Kalah sama Bot!');
                    result.css('margin-bottom', '2rem');
                    result.css('font-size', '18px');
                    computerScore++;
                    computerScoreBoard.text(computerScore);
                } else {
                    result.text('Kamu menang!');
                    result.css('margin-bottom', '2rem');
                    result.css('font-size', '18px');
                    playerScore++;
                    playerScoreBoard.text(playerScore);
                }
                break;
            default:
                console.log("Invalid input");
        }
    }

    const gameOver = (playerOptions, movesLeft) => {
        const choose = $('.choose');
        const result = $('.result');

        playerOptions.forEach(option => {
            option.css('display', 'none');
        });

        choose.css('font-size', '2rem');
        choose.text('Permainan Selesai');
        choose.css('color', 'black');
        choose.css('margin-bottom', '4rem');
        movesLeft.css('display', 'none');

        if (playerScore > computerScore) {
            result.css('font-size', '2rem');
            result.text('Mainnya Hebat!');
            result.css('color', 'black');
            result.css('margin-bottom', '4rem');
        } else if (playerScore < computerScore) {
            result.css('font-size', '2rem');
            result.text('Chuakz Kalah!');
            result.css('color', 'black');
            result.css('margin-bottom', '4rem');
        } else {
            result.css('font-size', '2rem');
            result.text('Jha Seri Nie!');
            result.css('color', 'black');
            result.css('margin-bottom', '4rem');
        }
    }

    const resetBtn = $('.reset');
    resetBtn.text('Suit Lagi!' || 'Reset');
    resetBtn.css('display', 'flex');
    resetBtn.on('click', () => {
        window.location.reload();
    });
    playGame();
}
game();