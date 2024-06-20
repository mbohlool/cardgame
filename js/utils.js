function updateGameState() {
    const discardedCardsContainer = document.getElementById('discarded-cards');
    const pickedCardsContainer = document.getElementById('picked-cards');
    
    discardedCardsContainer.innerHTML = '';
    discardedCards.forEach(card => {
        const img = document.createElement('img');
        img.src = card;
        discardedCardsContainer.appendChild(img);
    });

    pickedCardsContainer.innerHTML = '';
    pickedUpCards.forEach(card => {
        const img = document.createElement('img');
        img.src = card;
        pickedCardsContainer.appendChild(img);
    });
}

function performAction(action, card) {
    if (action === 'p') {
        pickedUpCards.push(card.src);
        actionHistory.push({ action: 'pick', card });
        redoStack = [];
    } else if (action === 'd') {
        discardedCards.push(card.src);
        actionHistory.push({ action: 'discard', card });
        redoStack = [];
    }
    updateGameState();
    card.classList.add('grayed-out');
    card.classList.remove('selected');
    selectedCard = null;
}

function addCardBack(card) {
    card.classList.remove('grayed-out');
}
