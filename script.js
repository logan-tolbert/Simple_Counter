let count = 0;
const counterText = document.getElementById('counter-text');
const historyContainer = document.getElementById('history-container');
const historyText = document.getElementById('history-text');


const incrementCount = () => {
  count++; 
  counterText.innerText = count; 
}

const resetCounter = () => {
  count = 0;
  counterText.innerText = 0;

}

function saveCurrentCount() {
    let output = ` ${count} - `;
    historyText.innerText += output;
}

function showHistory() {
    historyContainer.style.display = (historyContainer.style.display === 'block') ? 'none' : 'block';
    }

function clearHistory() {
    historyText.innerText = "";
}   