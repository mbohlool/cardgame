const cardValues = {
    '1': 'ace',
    '2': '2',
    '3': '3',
    '4': '4',
    '5': '5',
    '6': '6',
    '7': '7',
    '8': '8',
    '9': '9',
    '0': 'jack',
    '-': 'queen',
    '=': 'king'
};

const cardSuits = {
    '1': 'clubs',
    '2': 'diamonds',
    '3': 'hearts',
    '4': 'spades'
};

document.addEventListener('keydown', (event) => {
    const key = event.key;
    console.log('Key pressed:', key); // Debug log

    if (!currentHotkeyInput) {
        if (cardValues[key]) {
            currentHotkeyInput = cardValues[key];
            showHotkeyConfirmation(`Value: ${cardValues[key]}`);
            console.log('Card value selected:', cardValues[key]); // Debug log
        }
    } else {
        if (cardSuits[key]) {
            const value = currentHotkeyInput;
            const suit = cardSuits[key];
            showHotkeyConfirmation(`Suit: ${suit}`);
            console.log('Card suit selected:', suit); // Debug log

            // Select the card
            const cardFile = cardFiles[suit].find(card => card.includes(value));
            if (cardFile) {
                console.log('Card file found:', cardFile); // Debug log
                const img = Array.from(document.getElementById('cards').getElementsByTagName('img')).find(img => img.alt === cardFile);
                if (img) {
                    console.log('Image element found:', img); // Debug log
                    if (selectedCard) {
                        selectedCard.classList.remove('selected');
                    }
                    selectedCard = img;
                    selectedCard.classList.add('selected');
                } else {
                    console.log('Image element not found for card file:', cardFile); // Debug log
                }
            } else {
                console.log('Card file not found for value and suit:', value, suit); // Debug log
            }
            currentHotkeyInput = '';
        }
    }

    // Handle pick up and discard actions
    if (selectedCard) {
        if (key === 'p') {
            console.log('Performing pick up action'); // Debug log
            performAction('p', selectedCard);
        } else if (key === 'd') {
            console.log('Performing discard action'); // Debug log
            performAction('d', selectedCard);
        }
    }
});

function showHotkeyConfirmation(text) {
    const hotkeyConfirmation = document.getElementById('hotkey-confirmation');
    hotkeyConfirmation.innerText = text;
    hotkeyConfirmation.style.display = 'block';
    setTimeout(() => {
        hotkeyConfirmation.style.display = 'none';
    }, 1000);
}
