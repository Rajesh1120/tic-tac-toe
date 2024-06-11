https://github.com/Rajesh1120/tic-tac-toe/assets/116103929/f97fbd9f-dca8-4d36-b0a5-a93044af025b

### Tic-Tac-Toe Description

#### Overview

Tic-Tac-Toe is a classic, simple, two-player game that is played on a 3x3 grid. Each player takes turns marking a cell in the grid with their respective symbol: "X" or "O". The game is usually played with the following objectives:

1. **Players**: Two players.
2. **Symbols**: One player uses "X" and the other uses "O".
3. **Turns**: Players take alternate turns to mark their symbols in an empty cell.

#### Objective

The primary goal of Tic-Tac-Toe is to be the first player to form a straight line of three of their own symbols. This line can be horizontal, vertical, or diagonal. 

#### Game Rules

1. **Grid**: The game board consists of a 3x3 grid.
2. **First Move**: One player is chosen to go first and they place their symbol ("X" or "O") in any one of the 9 cells.
3. **Turns**: Players alternate turns, placing their symbol in an empty cell.
4. **Winning**: The game is won by the first player to get three of their symbols in a row horizontally, vertically, or diagonally.
5. **Draw**: If all 9 cells are filled and neither player has three in a row, the game is considered a draw.

#### Example Game

```
Player 1: X
Player 2: O

Initial Board:

 1 | 2 | 3
-----------
 4 | 5 | 6
-----------
 7 | 8 | 9

Moves:
1. Player 1 (X) - cell 1
 X | 2 | 3
-----------
 4 | 5 | 6
-----------
 7 | 8 | 9

2. Player 2 (O) - cell 5
 X | 2 | 3
-----------
 4 | O | 6
-----------
 7 | 8 | 9

3. Player 1 (X) - cell 9
 X | 2 | 3
-----------
 4 | O | 6
-----------
 7 | 8 | X

4. Player 2 (O) - cell 3
 X | 2 | O
-----------
 4 | O | 6
-----------
 7 | 8 | X

5. Player 1 (X) - cell 2
 X | X | O
-----------
 4 | O | 6
-----------
 7 | 8 | X

6. Player 2 (O) - cell 8
 X | X | O
-----------
 4 | O | 6
-----------
 7 | O | X

7. Player 1 (X) - cell 7
 X | X | O
-----------
 4 | O | 6
-----------
 X | O | X

8. Player 2 (O) - cell 4
 X | X | O
-----------
 O | O | 6
-----------
 X | O | X

9. Player 1 (X) - cell 6
 X | X | O
-----------
 O | O | X
-----------
 X | O | X

Result: Draw
```

#### Strategy and Tips

1. **Center Control**: The center cell is often a strategic point since it is part of four potential winning lines (two diagonals, one vertical, and one horizontal).
2. **Corner Play**: Corners can be crucial as they are part of three potential winning lines.
3. **Blocking**: Always try to block your opponent’s moves to prevent them from getting three in a row.
4. **Forking**: Create opportunities where you have two potential winning moves, making it impossible for your opponent to block both.

Tic-Tac-Toe, despite its simplicity, can be an excellent exercise in strategic thinking and is a great way to introduce basic concepts of game theory and strategy.
