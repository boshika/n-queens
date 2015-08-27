/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other

window.findNRooksSolution = function(n) {
<<<<<<< HEAD
  var board = new Board({n:n});
  var solution = board.rows();

  var findSolution = function(row) {
    // base case
    if (row === n) {
      solution = [];
      for ( var i =0; i < n; i++) {
        solution.push(board.rows()[i].slice());
      }
      return;
    }
    // iterate over each column in whatever row we are in
    for (var i = 0; i < n; i++) {
      board.togglePiece(row, i);
      if(!board.hasAnyRooksConflicts()) {
        findSolution(row + 1);
      }
      board.togglePiece(row, i);
    }
  }
  findSolution(0);
  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
=======
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
>>>>>>> d676afdde7f6120d7c1cb673f7a0bfe5b46b2c88
  return solution;
};



// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
<<<<<<< HEAD
  var solutionCount = 0;
  // Creat a new chessboard with the size of n
  var board = new Board({n:n});

  var findSolution = function(row) {
    // base case
    if (row === n) {
      solutionCount ++;
      return;
    }
    // iterate over each column in whatever row we are in
    for (var i = 0; i < n; i++) {
      board.togglePiece(row, i);
      if(!board.hasAnyRooksConflicts()) {
        findSolution(row + 1);
      }
      board.togglePiece(row, i);
    }
  }
  findSolution(0);

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;

=======
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
>>>>>>> d676afdde7f6120d7c1cb673f7a0bfe5b46b2c88
};



// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
<<<<<<< HEAD
  // Creat a new chessboard with the size of n
  var board = new Board({n:n});
  var solution = board.rows();

  var findSolution = function(row) {
    // base case
    if (row === n) {
      solution = [];
      for ( var i =0; i < n; i++) {
        solution.push(board.rows()[i].slice());
      }
      return;
    }
    // iterate over each column in whatever row we are in
    for (var i = 0; i < n; i++) {
      board.togglePiece(row, i);
      if(!board.hasAnyQueensConflicts()) {
        findSolution(row + 1);
      }
      board.togglePiece(row, i);
    }
  }
  findSolution(0);
=======
  var solution = undefined; //fixme

>>>>>>> d676afdde7f6120d7c1cb673f7a0bfe5b46b2c88
  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
<<<<<<< HEAD
  var solutionCount = 0;
   // Creat a new chessboard with the size of n
   var board = new Board({n:n});

   var findSolution = function(row) {
     // base case
     if (row === n) {
       solutionCount ++;
       return;
     }
     // iterate over each column in whatever row we are in
     for (var i = 0; i < n; i++) {
       board.togglePiece(row, i);
       if(!board.hasAnyQueensConflicts()) {
         findSolution(row + 1);
       }
       board.togglePiece(row, i);
     }
   }
   findSolution(0);
=======
  var solutionCount = undefined; //fixme
>>>>>>> d676afdde7f6120d7c1cb673f7a0bfe5b46b2c88

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
