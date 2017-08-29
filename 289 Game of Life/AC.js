// https://leetcode.com/problems/game-of-life/

/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
    let tmp = JSON.parse(JSON.stringify(board));
    let m = board.length,
        n = board[0].length;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            let lives = neighbors(tmp, m, n, i, j);
            if (tmp[i][j]) {
                if (lives < 2 || lives > 3) {
                    board[i][j] = 0
                } else if (lives === 2 || lives === 3) {
                    board[i][j] = 1
                }
            } else {
                if (lives === 3)  {
                    board[i][j] = 1
                }
            }
        }
    }
};

function neighbors(board, m, n, i, j) {
    let ret = 0;
    for (x = Math.max(i - 1, 0); x <= Math.min(i + 1, m - 1); x++) {
    	for (y = Math.max(j - 1, 0); y <= Math.min(j + 1, n - 1); y++) {
    		ret += board[x][y]
    	}
    }
    ret -= board[i][j]
    return ret
}