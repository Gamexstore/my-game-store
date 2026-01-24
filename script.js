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
        image: 'images/Grand Theft Auto San Andreas mobile.png',
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
    }
];

function getGameById(id) {
    return games.find(g => g.id === id);
}

// Render Games Grid (Index Page)
const gamesGrid = document.getElementById('gamesGrid');
const searchInput = document.getElementById('searchInput');

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
        <a href="game.html?id=${game.id}" class="game-card">
            <img src="${game.image}" alt="${game.title}" class="game-image">
            <div class="game-info">
                <div class="game-title">${game.title}</div>
                <div class="game-rating">★ ${game.rating}</div>
            </div>
        </a>
    `).join('');
}

// Logic for Game Details Page
function loadGameDetails(id) {
    const game = getGameById(id);
    if (!game) return;

    document.getElementById('gameImg').src = game.image;
    document.getElementById('gameTitle').innerText = game.title;
    document.title = `${game.title} - Download`;

    // Update Stats
    if (document.getElementById('gameRating')) {
        document.getElementById('gameRating').innerText = `★★★★★ ${game.rating}`;
    }
    if (document.getElementById('gameReviews')) {
        document.getElementById('gameReviews').innerText = game.reviews;
    }
    if (document.getElementById('gameDownloads')) {
        document.getElementById('gameDownloads').innerText = game.downloads;
    }

    // Update buttons to point to locker
    document.getElementById('btnAndroid').href = `download.html?id=${id}&device=android`;
    document.getElementById('btnIos').href = `download.html?id=${id}&device=ios`;
}

// Logic for Locker Page
async function loadOffers(deviceType) {
    // Deprecated in favor of external script
    console.log("External script handling verification.");
}

function startVerification() {
    // Just a UI effect
    const box = document.querySelector('.warning-box');
    if (box) {
        box.innerHTML = 'Verifying offer completion...';
        box.style.background = 'rgba(0, 255, 0, 0.1)';
        box.style.borderColor = '#00f260';
        box.style.color = '#00f260';
    }
}
