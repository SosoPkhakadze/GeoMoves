function openPage(page) {
    switch (page) {
      case 'search':
        window.location.href ='search.html';
      break;
      case 'avatar':
        content.innerHTML = '<h2>Avatar Page</h2><p>Choose your avatar</p><button onclick="openPage(\'settings\')">Next</button>';
        break;
      case 'leaderboard':
        openLeaderboard();
        break;
      case 'shop':
        openShop();
        break;
      case 'achievements':
        openAchievements();
        break;
      case 'account':
        window.location.href = './account.html'; 
        break;
        case 'ads':
        window.location.href = './ads.html';
        break;
        case 'purchases':
        window.location.href = './purchase.html';
        break;
        case 'settings':
        window.location.href = 'settings.html';
      break;
      default:
        content.innerHTML = '<h2>Welcome to GeoMoves</h2>';
      }
  }

  function include(file) {
    const script = document.createElement('script');
    script.src = file;
    script.type = 'text/javascript';
    script.defer = true;
    document.head.appendChild(script);
  }
  let userCoins = 5000; // Initial coins, you can adjust as needed


function updateCoinsDisplay() {
    const userCoinsElement = document.getElementById('userCoins');
    if (userCoinsElement) {
        userCoinsElement.textContent = userCoins;
    }
}



  // Include other JS files
  include('shop.js');
  include('achievements.js');
  include('leaderboard.js');
  
  

  