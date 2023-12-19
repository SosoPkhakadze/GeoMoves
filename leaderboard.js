function openLeaderboard() {
  const content = document.getElementById('mainContent');
  content.innerHTML = '<h2>Leaderboard</h2>' +
    '<div class="leaderboard-chart">' +
      // Random players for demonstration
      getRandomPlayerEntry('Mr.Akaki.TheDaneMaster', 2000000000, 'Davluri') +
      getRandomPlayerEntry('SosoDancer', 5000000, 'Shalaxo') +
      getRandomPlayerEntry('MariFreestyle', 60000, 'Bagdaduri') +
      getRandomPlayerEntry('DachiTheGreat', 45000, 'Mtiuluri') +
      getRandomPlayerEntry('TakoTheTako', 35000, 'Gandagana') +
      getRandomPlayerEntry('SandroSayMyName', 28000, 'Davluri') +
      getRandomPlayerEntry('taso', 18000, 'Davluri') +
      getRandomPlayerEntry('niku', 15000, 'Davluri') +
      getRandomPlayerEntry('temo', 12000, 'Davluri') +
      getRandomPlayerEntry('RandomPlayer1', 7000, 'Xevsuruli') +
      getRandomPlayerEntry('RandomPlayer2', 6000, 'Jeirani') +
      getRandomPlayerEntry('RandomPlayer3', 5500, 'Kintouri') +
      getRandomPlayerEntry('RandomPlayer4', 4000, 'Xonga') +
      getRandomPlayerEntry('RandomPlayer5', 3500, 'Simdi And Xonga') +
      getRandomPlayerEntry('RandomPlayer6', 700, 'Xevsuruli') +
      getRandomPlayerEntry('RandomPlayer7', 600, 'Jeirani') +
      getRandomPlayerEntry('RandomPlayer8', 550, 'Kintouri') +
      getRandomPlayerEntry('RandomPlayer9', 400, 'Xonga') +
      getRandomPlayerEntry('RandomPlayer10', 350, 'Simdi And Xonga') +
      '</div>';
  }
  
  function getRandomPlayerEntry(name, score, dance) {
    return '<div class="player-entry">' +
      '<span class="player-name">' + name + '</span>' +
      '<span class="score">' + score + '</span>' +
      '<span class="dance">' +'</span>' + dance +
      '</div>';
  }
  

  