function openShop() {
  const content = document.getElementById('mainContent');
  content.innerHTML = '<h2>Shop</h2>' +
      '<div class="shop-info">' +
      '<span class="coins">Coins: <span id="userCoins">5000</span></span>' +
      '</div>' +
      '<div class="shop-items">' +
      
        '<div class="shop-item">' +
        '<span class="item-name">Unlock new dance moves</span>' +
        '<span class="price">100 coins</span>' +
        '<button onclick="buyItem(\'dance\', 100)">Buy</button>' +
        '</div>' +

        '<div class="shop-item">' +
        '<span class="item-name">Customize your avatar</span>' +
        '<span class="price">200 coins</span>' +
        '<button onclick="buyItem(\'avatar\', 200)">Buy</button>' +
        '</div>' +

        '<div class="shop-item">' +
        '<span class="item-name">Get a dance tutorial video</span>' +
        '<span class="price">50 coins</span>' +
        '<button onclick="buyItem(\'tutorial\', 50)">Buy</button>' +
        '</div>' +

        '<div class="shop-item">' +
        '<span class="item-name">Unlock special dance pack</span>' +
        '<span class="price">150 coins</span>' +
        '<button onclick="buyItem(\'special_dance\', 150)">Buy</button>' +
        '</div>' +

        '<div class="shop-item">' +
        '<span class="item-name">Unlock advanced dance moves</span>' +
        '<span class="price">250 coins</span>' +
        '<button onclick="buyItem(\'advanced_dance\', 250)">Buy</button>' +
        '</div>' +

        '<div class="shop-item">' +
        '<span class="item-name">Exclusive dance tutorial bundle</span>' +
        '<span class="price">300 coins</span>' +
        '<button onclick="buyItem(\'tutorial_bundle\', 300)">Buy</button>' +
        '</div>' +

        '<div class="shop-item">' +
        '<span class="item-name">Golden avatar skin</span>' +
        '<span class="price">500 coins</span>' +
        '<button onclick="buyItem(\'golden_avatar\', 500)">Buy</button>' +
        '</div>' +

        '<div class="shop-item">' +
        '<span class="item-name">Rare costume set</span>' +
        '<span class="price">1000 coins</span>' +
        '<button onclick="buyItem(\'rare_costume_set\', 1000)">Buy</button>' +
        '</div>' +

        '<div class="shop-item">' +
        '<span class="item-name">VIP dance club access</span>' +
        '<span class="price">800 coins</span>' +
        '<button onclick="buyItem(\'vip_dance_club\', 800)">Buy</button>' +
        '</div>' +

        '<div class="shop-item">' +
        '<span class="item-name">Unique background stage</span>' +
        '<span class="price">1200 coins</span>' +
        '<button onclick="buyItem(\'unique_background_stage\', 1200)">Buy</button>' +
        '</div>' +

        '<div class="shop-item">' +
        '<span class="item-name">Animated dance floor</span>' +
        '<span class="price">1500 coins</span>' +
        '<button onclick="buyItem(\'animated_dance_floor\', 1500)">Buy</button>' +
        '</div>' +

        '<div class="shop-item">' +
        '<span class="item-name">Personalized music track</span>' +
        '<span class="price">900 coins</span>' +
        '<button onclick="buyItem(\'personalized_music_track\', 900)">Buy</button>' +
        '</div>' +

        '<div class="shop-item">' +
        '<span class="item-name">Flashy light effects</span>' +
        '<span class="price">800 coins</span>' +
        '<button onclick="buyItem(\'flashy_light_effects\', 800)">Buy</button>' +
        '</div>' +

        '<div class="shop-item">' +
        '<span class="item-name">Signature dance gesture</span>' +
        '<span class="price">600 coins</span>' +
        '<button onclick="buyItem(\'signature_dance_gesture\', 600)">Buy</button>' +
        '</div>' +

        '<div class="shop-item">' +
        '<span class="item-name">Limited edition emotes</span>' +
        '<span class="price">1200 coins</span>' +
        '<button onclick="buyItem(\'limited_edition_emotes\', 1200)">Buy</button>' +
        '</div>' +

        '<div class="shop-item">' +
        '<span class="item-name">Virtual dance lessons</span>' +
        '<span class="price">1000 coins</span>' +
        '<button onclick="buyItem(\'virtual_dance_lessons\', 1000)">Buy</button>' +
        '</div>' +

        '<div class="shop-item">' +
        '<span class="item-name">Extra character slots</span>' +
        '<span class="price">1500 coins</span>' +
        '<button onclick="buyItem(\'extra_character_slots\', 1500)">Buy</button>' +
        '</div>' +

        '<div class="shop-item">' +
        '<span class="item-name">Special edition dance shoes</span>' +
        '<span class="price">900 coins</span>' +
        '<button onclick="buyItem(\'special_edition_dance_shoes\', 900)">Buy</button>' +
        '</div>' +

        '<div class="shop-item">' +
        '<span class="item-name">Exclusive dance animations</span>' +
        '<span class="price">1500 coins</span>' +
        '<button onclick="buyItem(\'exclusive_dance_animations\', 1500)">Buy</button>' +
        '</div>' +

        '<div class="shop-item">' +
        '<span class="item-name">Interactive dance challenges</span>' +
        '<span class="price">1000 coins</span>' +
        '<button onclick="buyItem(\'interactive_dance_challenges\', 1000)">Buy</button>' +
        '</div>' +

        '<div class="shop-item">' +
        '<span class="item-name">VIP lounge access</span>' +
        '<span class="price">2000 coins</span>' +
        '<button onclick="buyItem(\'vip_lounge_access\', 2000)">Buy</button>' +
        '</div>' +

        '<div class="shop-item">' +
        '<span class="item-name">Glowing aura customization</span>' +
        '<span class="price">1200 coins</span>' +
        '<button onclick="buyItem(\'glowing_aura_customization\', 1200)">Buy</button>' +
        '</div>' +

        '<div class="shop-item">' +
        '<span class="item-name">High-quality dance animation pack</span>' +
        '<span class="price">1800 coins</span>' +
        '<button onclick="buyItem(\'high_quality_dance_animation_pack\', 1800)">Buy</button>' +
        '</div>' +

        '<div class="shop-item">' +
        '<span class="item-name">Premium dance emotes</span>' +
        '<span class="price">1600 coins</span>' +
        '<button onclick="buyItem(\'premium_dance_emotes\', 1600)">Buy</button>' +
        '</div>' +

        '<div class="shop-item">' +
        '<span class="item-name">Elite dance coach session</span>' +
        '<span class="price">2500 coins</span>' +
        '<button onclick="buyItem(\'elite_dance_coach_session\', 2500)">Buy</button>' +
        '</div>' +

        '<div class="shop-item">' +
        '<span class="item-name">Customizable dance routine</span>' +
        '<span class="price">2000 coins</span>' +
        '<button onclick="buyItem(\'customizable_dance_routine\', 2000)">Buy</button>' +
        '</div>' +

        '<div class="shop-item">' +
        '<span class="item-name">3D holographic effects</span>' +
        '<span class="price">3000 coins</span>' +
        '<button onclick="buyItem(\'3d_holographic_effects\', 3000)">Buy</button>' +
        '</div>' +

        '<div class="shop-item">' +
        '<span class="item-name">Dynamic camera angles during dances</span>' +
        '<span class="price">2200 coins</span>' +
        '<button onclick="buyItem(\'dynamic_camera_angles\', 2200)">Buy</button>' +
        '</div>' +

        '<div class="shop-item">' +
        '<span class="item-name">Social media integration for in-game sharing</span>' +
        '<span class="price">1800 coins</span>' +
        '<button onclick="buyItem(\'social_media_integration\', 1800)">Buy</button>' +
        '</div>' +

        '<div class="shop-item">' +
        '<span class="item-name">Personalized dance studio</span>' +
        '<span class="price">2500 coins</span>' +
        '<button onclick="buyItem(\'personalized_dance_studio\', 2500)">Buy</button>' +
        '</div>' +
        '</div>';
  
  // Add event listeners to the buy buttons
const buyButtons = document.querySelectorAll('.shop-item button');
buyButtons.forEach(button => {
    button.addEventListener('click', handleButtonClick);
});

function handleButtonClick(event) {
    const button = event.target;
    const itemName = button.parentElement.querySelector('.item-name').textContent;
    const itemPrice = parseInt(button.parentElement.querySelector('.price').textContent);

    if (button.textContent.toLowerCase() === 'buy') {
        // Buy logic
        if (userCoins >= itemPrice) {
            userCoins -= itemPrice;
            updateCoinsDisplay();
            button.textContent = 'Sell';
            button.style.backgroundColor = 'red';
        } else {
            alert('Insufficient coins!');
        }
    } else if (button.textContent.toLowerCase() === 'sell') {
        // Sell logic
        userCoins += itemPrice / 2; // Assuming selling gives back half the price
        updateCoinsDisplay();
        button.textContent = 'Buy';
        button.style.backgroundColor = 'green';
    }
}

function updateCoinsDisplay() {
    const userCoinsElement = document.getElementById('userCoins');
    if (userCoinsElement) {
        userCoinsElement.textContent = userCoins;
    }
}
}



function getItemPrice(item) {
    // Define the prices for each item
    const itemPrices = {
        // Define prices for each item here
        'dance': 100,
        'avatar': 200,
        'tutorial': 50,
        'special_dance': 150,
        'advanced_dance': 250,
        'tutorial_bundle': 300,
        'golden_avatar': 500,
        'rare_costume_set': 1000,
        'vip_dance_club': 800,
        'unique_background_stage': 1200,
        'animated_dance_floor': 1500,
        'personalized_music_track': 900,
        'flashy_light_effects': 800,
        'signature_dance_gesture': 600,
        'limited_edition_emotes': 1200,
        'virtual_dance_lessons': 1000,
        'extra_character_slots': 1500,
        'special_edition_dance_shoes': 900,
        'exclusive_dance_animations': 1500,
        'interactive_dance_challenges': 1000,
        'vip_lounge_access': 2000,
        'glowing_aura_customization': 1200,
        'high_quality_dance_animation_pack': 1800,
        'premium_dance_emotes': 1600,
        'elite_dance_coach_session': 2500,
        'customizable_dance_routine': 2000,
        '3d_holographic_effects': 3000,
        'dynamic_camera_angles': 2200,
        'social_media_integration': 1800,
        'personalized_dance_studio': 2500,

        // Add more items and their prices as needed
    };

    // Return the price of the item or a default value
    return itemPrices[item] || 0;
}

