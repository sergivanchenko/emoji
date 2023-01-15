let myEmojis = ['👨‍💻', '⛷', '🍲'];
const myEmojisFromLocalStorage = JSON.parse(localStorage.getItem('myEmojis'));

if (myEmojisFromLocalStorage) {
  myEmojis = myEmojisFromLocalStorage;
  renderEmojis();
}

function renderEmojis() {
  const emojiContainer = document.getElementById('emoji-container');
  emojiContainer.innerHTML = '';
  for (let i = 0; i < myEmojis.length; i++) {
    const emoji = document.createElement('span');
    emoji.textContent = myEmojis[i];
    emojiContainer.append(emoji);
  }
  localStorage.setItem('myEmojis', JSON.stringify(myEmojis));
}

renderEmojis();

function modifyEmoji(methodEmoji, arrayEmoji) {
  const emojiInput = document.getElementById('emoji-input');
  if (emojiInput.value) {
    arrayEmoji[methodEmoji](emojiInput.value);
    emojiInput.value = '';
    renderEmojis();
  }
}

const pushBtn = document.getElementById('push-btn');
pushBtn.addEventListener('click', function () {
  modifyEmoji('push', myEmojis);
});

const unshiftBtn = document.getElementById('unshift-btn');
unshiftBtn.addEventListener('click', function () {
  modifyEmoji('unshift', myEmojis);
});

const popBtn = document.getElementById('pop-btn');
popBtn.addEventListener('click', function () {
  myEmojis.pop();
  renderEmojis();
});

const shiftBtn = document.getElementById('shift-btn');
shiftBtn.addEventListener('click', function () {
  myEmojis.shift();
  renderEmojis();
});
