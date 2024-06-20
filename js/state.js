const cardFiles = {
    clubs: [
        '2_of_clubs.svg', '3_of_clubs.svg', '4_of_clubs.svg', '5_of_clubs.svg', '6_of_clubs.svg',
        '7_of_clubs.svg', '8_of_clubs.svg', '9_of_clubs.svg', '10_of_clubs.svg', 'jack_of_clubs2.svg',
        'queen_of_clubs2.svg', 'king_of_clubs2.svg', 'ace_of_clubs.svg'
    ],
    diamonds: [
        '2_of_diamonds.svg', '3_of_diamonds.svg', '4_of_diamonds.svg', '5_of_diamonds.svg', '6_of_diamonds.svg',
        '7_of_diamonds.svg', '8_of_diamonds.svg', '9_of_diamonds.svg', '10_of_diamonds.svg', 'jack_of_diamonds2.svg',
        'queen_of_diamonds2.svg', 'king_of_diamonds2.svg', 'ace_of_diamonds.svg'
    ],
    hearts: [
        '2_of_hearts.svg', '3_of_hearts.svg', '4_of_hearts.svg', '5_of_hearts.svg', '6_of_hearts.svg',
        '7_of_hearts.svg', '8_of_hearts.svg', '9_of_hearts.svg', '10_of_hearts.svg', 'jack_of_hearts2.svg',
        'queen_of_hearts2.svg', 'king_of_hearts2.svg', 'ace_of_hearts.svg'
    ],
    spades: [
        '2_of_spades.svg', '3_of_spades.svg', '4_of_spades.svg', '5_of_spades.svg', '6_of_spades.svg',
        '7_of_spades.svg', '8_of_spades.svg', '9_of_spades.svg', '10_of_spades.svg', 'jack_of_spades2.svg',
        'queen_of_spades2.svg', 'king_of_spades2.svg', 'ace_of_spades.svg'
    ]
};

const discardedCards = [];
const pickedUpCards = [];
const actionHistory = [];
let redoStack = [];
let selectedCard = null;
let currentHotkeyInput = '';
