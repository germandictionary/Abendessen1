const words = [
    { word: 'Die Suppe', translation: 'The soup' },
    { word: 'Der Salat', translation: 'The salad' },
    { word: 'Die Pizza', translation: 'The pizza' },
    // Add other words with their translations
];

document.addEventListener('DOMContentLoaded', () => {
    const wordList = document.getElementById('word-list');

    words.forEach(wordObj => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <span>${wordObj.word}</span>
            <span>${wordObj.translation}</span>
            <button onclick="speak('${wordObj.word}')">Play Pronunciation</button>
        `;
        wordList.appendChild(listItem);
    });
});

function speak(text) {
    const utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance);
}
