// achievements.js
function openAchievements() {
  const content = document.getElementById('mainContent');
  content.innerHTML = '<h2>Achievements</h2>' +
    '<div class="achievements-list">' +
    getAchievementHTML('Master Dancer', ' - Reach a total score of 10,000') +
    getAchievementHTML('Georgian Virtuoso', ' - Unlock all Georgian dances') +
    getAchievementHTML('Adventurous Explorer', ' - Try 1 new thing') +
    getAchievementHTML('Dance Scholar', ' - Learn 5 new dances') +
    getAchievementHTML('Dance Enthusiast', ' - Play 10 times') +
    getAchievementHTML('Dance Marathoner', ' - Play for 10 days') +
    getAchievementHTML('Dance Centurion', ' - Play for 100 days') +
    getAchievementHTML('Shopaholic', ' - Buy 10 new things') +
    getAchievementHTML('Master Choreographer', ' - Learn 20 new dances') +
    getAchievementHTML('Record Breaker', ' - Achieve a new record') +
    getAchievementHTML('Coin Collector', ' - Earn 100 coins') +
    getAchievementHTML('Wealth Accumulator', ' - Earn 500 coins') +
    getAchievementHTML('Big Spender', ' - Spend 1000 coins') +
    // Add more achievements as needed
    '</div>';
}


function getAchievementHTML(name, description) {
  return '<div class="achievement">' +
    `<span class="achievement-name">${name}</span>` +
    `<span class="achievement-desc">${description}</span>` +
    '</div>';
}
