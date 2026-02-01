// Hardcoded list of games with Google Play imitation stats
const games = [
    {
        id: 'dbz',
        title: 'DRAGON BALL Mobile',
        image: 'images/DRAGON BALL Mobile.png',
        rating: 4.6,
        reviews: '2M',
        downloads: '50M+'
    },
    {
        id: 'gta-vc',
        title: 'GTA Vice City',
        image: 'images/GTA Vice City mobile.png',
        rating: 4.1,
        reviews: '500K',
        downloads: '5M+'
    },
    {
        id: 'gta-sa',
        title: 'Grand Theft Auto San Andreas',
        image: 'images/Grand Theft Auto San Andreas GTA SA mobile.png',
        rating: 4.0,
        reviews: '950K',
        downloads: '10M+'
    },
    {
        id: 'naruto',
        title: 'NARUTO Ultimate Ninja STORM',
        image: 'images/NARUTO Ultimate Ninja STORM mobile.png',
        rating: 4.3,
        reviews: '800K',
        downloads: '20M+'
    },
    {
        id: 'spiderman',
        title: 'Marvel\'s Spider-Man',
        image: 'images/Spider man mobile.png',
        rating: 4.5,
        reviews: '3M',
        downloads: '100M+'
    },
    {
        id: 'forza',
        title: 'Forza Horizon 5',
        image: 'images/forza horizon 5 mobile.png',
        rating: 4.2,
        reviews: '150K',
        downloads: '10M+'
    },
    {
        id: 'gta-5',
        title: 'Grand Theft Auto V',
        image: 'images/Grand_Theft_Auto_V_GTA_5_Mobile.png',
        rating: 4.8,
        reviews: '10M',
        downloads: '100M+'
    }
];

// Elements
const gamesGrid = document.getElementById('gamesGrid');
const searchInput = document.getElementById('searchInput');
const modal = document.getElementById('gameModal');
const closeModal = document.querySelector('.close-modal');

// Init
if (gamesGrid) {
    renderGames(games);

    searchInput.addEventListener('input', (e) => {
        const term = e.target.value.toLowerCase();
        const filtered = games.filter(g => g.title.toLowerCase().includes(term));
        renderGames(filtered);
    });
}

function renderGames(list) {
    gamesGrid.innerHTML = list.map(game => `
        <div class="game-card">
            <div onclick="openModal('${game.id}')" style="cursor: pointer;">
                <img src="${game.image}" alt="${game.title}" class="game-image">
                <div class="game-info">
                    <div class="game-title">${game.title}</div>
                    <div class="game-rating">★ ${game.rating}</div>
                </div>
            </div>
            <div class="card-actions">
                <a href="https://getcomt.click/cl/i/qnn227" class="card-btn android-btn">
                    Download Android
                </a>
                <a href="https://getcomt.click/cl/i/qnn227" class="card-btn ios-btn">
                    Download iOS
                </a>
            </div>
        </div>
    `).join('');
}

// Modal Logic
function openModal(id) {
    const game = games.find(g => g.id === id);
    if (!game) return;

    // Reset State
    document.getElementById('downloadButtons').style.display = 'flex';
    document.getElementById('captchaContainer').style.display = 'none';

    // Populate Data
    document.getElementById('modalGameImg').src = game.image;
    document.getElementById('modalGameTitle').innerText = game.title;
    document.getElementById('modalGameRating').innerText = `★ ${game.rating}`;
    document.getElementById('modalGameReviews').innerText = game.reviews;
    document.getElementById('modalGameDownloads').innerText = game.downloads;

    // Show Modal
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

// Close Modal Logic
if (closeModal) {
    closeModal.onclick = function () {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// Close when clicking outside
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// Show Captcha Logic
function showCaptcha() {
    // Hide buttons
    document.getElementById('downloadButtons').style.display = 'none';

    // Show Captcha Container
    document.getElementById('captchaContainer').style.display = 'block';
}
