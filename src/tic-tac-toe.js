class TicTacToe {
    constructor() {
        this.currentPlayerSymbol = 'x';
        this.nextPlayerSymbol = 'o';
        this.field = [
                      [null, null, null],
                      [null, null, null],
                      [null, null, null]
                      ];
        this.count = 0;
        this.gameWinner = null;
    }

    getCurrentPlayerSymbol() {
        return this.currentPlayerSymbol;  
    }

    nextTurn(rowIndex, columnIndex) {

        if(this.field[rowIndex][columnIndex] == null) {
            this.field[rowIndex][columnIndex] = this.currentPlayerSymbol;
            this.count = 1;
            if(this.field[0][0] == this.field[1][1] && this.field[1][1] == this.field[2][2]) {
                this.gameWinner = this.field[0][0];
            }
            if(this.field[0][2] == this.field[1][1] && this.field[1][1] == this.field[2][0]) {
                this.gameWinner = this.field[0][2];
            }
            for(var i = 0; i < this.field.length; i++) {
                if(this.field[i][0] == this.field[i][1] && this.field[i][1] == this.field[i][2]) {
                    this.gameWinner = this.field[i][0];
                }
                if(this.field[0][i] == this.field[1][i] && this.field[1][i] == this.field[2][i]) {
                    this.gameWinner = this.field[0][i];
                }
            }
        } else this.count = 0;

        if(this.count) {
            var symbol = this.currentPlayerSymbol;
            this.currentPlayerSymbol = this.nextPlayerSymbol;
            this.nextPlayerSymbol = symbol;
        }
    }

    isFinished() {
        if(this.gameWinner != null || this.isDraw()) {
            return true;
        } else {
            return false;
        }
    }

    getWinner() {
        return this.gameWinner;
    }

    noMoreTurns() {
        for(var i = 0; i < this.field.length; i++) {
            for(var j = 0; j < this.field[i].length; j++) {
                if(this.field[i][j] === null) {
                    return false;
                }
            }
        }
        return true;
    }

    isDraw() {
        if(this.noMoreTurns() && this.gameWinner == null) {
            return true;
        } else return false;
    }

    getFieldValue(rowIndex, colIndex) {
        return this.field[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
