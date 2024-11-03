let count = 0;
const counterText = document.getElementById('counter-text');
const historyContainer = document.getElementById('history');
const countHistoryText = document.getElementById('count-history');


const increment = () => {
  count++; 
  counterText.innerText = count; 
}

const resetCount = () => {
  count = 0;
  counterText.innerText = 0;

}

function saveCount() {
    let output = ` ${count} - `
    countHistoryText.innerText += output
}

function showHistory() {
    if(historyContainer.style.display === 'block') {
        historyContainer.style.display = 'none'
        return
    } else {
        historyContainer.style.display = 'block'
        return
    }
    
}

function clearHistory() {
    countHistoryText.innerText = ""
}   