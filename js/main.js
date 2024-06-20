document.addEventListener('DOMContentLoaded', () => {
    const cardFolderPath = 'cards/';
    const cardsContainer = document.getElementById('cards');

    // Display all card images by suit
    Object.keys(cardFiles).forEach(suit => {
        const suitDiv = document.createElement('div');
        suitDiv.className = 'suit';
        cardFiles[suit].forEach(cardFile => {
            const img = document.createElement('img');
            img.src = `${cardFolderPath}${cardFile}`;
            img.alt = cardFile;
            img.dataset.suit = suit;
            img.dataset.filename = cardFile;
            img.addEventListener('click', () => {
                if (selectedCard) {
                    selectedCard.classList.remove('selected');
                }
                if (!img.classList.contains('grayed-out')) {
                    selectedCard = img;
                    selectedCard.classList.add('selected');
                }
            });
            suitDiv.appendChild(img);
        });
        cardsContainer.appendChild(suitDiv);
    });

    document.getElementById('pick-btn').addEventListener('click', () => {
        if (selectedCard) {
            performAction('p', selectedCard);
        }
    });

    document.getElementById('discard-btn').addEventListener('click', () => {
        if (selectedCard) {
            performAction('d', selectedCard);
        }
    });

    document.getElementById('undo-btn').addEventListener('click', () => {
        if (actionHistory.length > 0) {
            const lastAction = actionHistory.pop();
            redoStack.push(lastAction);
            if (lastAction.action === 'pick') {
                pickedUpCards.splice(pickedUpCards.indexOf(lastAction.card.src), 1);
                addCardBack(lastAction.card);
            } else if (lastAction.action === 'discard') {
                discardedCards.splice(discardedCards.indexOf(lastAction.card.src), 1);
                addCardBack(lastAction.card);
            } else if (lastAction.action === 'moveToDiscarded') {
                discardedCards.splice(discardedCards.indexOf(lastAction.card.src), 1);
                pickedUpCards.push(lastAction.card.src);
            } else if (lastAction.action === 'moveToPicked') {
                pickedUpCards.splice(pickedUpCards.indexOf(lastAction.card.src), 1);
                discardedCards.push(lastAction.card.src);
            }
            updateGameState();
        }
    });

    document.getElementById('redo-btn').addEventListener('click', () => {
        if (redoStack.length > 0) {
            const lastRedoAction = redoStack.pop();
            actionHistory.push(lastRedoAction);
            if (lastRedoAction.action === 'pick') {
                pickedUpCards.push(lastRedoAction.card.src);
                lastRedoAction.card.classList.add('grayed-out');
            } else if (lastRedoAction.action === 'discard') {
                discardedCards.push(lastRedoAction.card.src);
                lastRedoAction.card.classList.add('grayed-out');
            } else if (lastRedoAction.action === 'moveToDiscarded') {
                pickedUpCards.splice(pickedUpCards.indexOf(lastRedoAction.card.src), 1);
                discardedCards.push(lastRedoAction.card.src);
            } else if (lastRedoAction.action === 'moveToPicked') {
                discardedCards.splice(discardedCards.indexOf(lastRedoAction.card.src), 1);
                pickedUpCards.push(lastRedoAction.card.src);
            }
            updateGameState();
        }
    });
});
