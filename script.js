const quotes = [
    { text: '"Success is not final, failure is not fatal: It is the courage to continue that counts."', author: "Winston S. Churchill" },
    { text: '"The only limit to our realization of tomorrow will be our doubts of today."', author: "Franklin D. Roosevelt" },
    { text: '"Your time is limited, don’t waste it living someone else’s life."', author: "Steve Jobs" },
    { text: '"Dream big and dare to fail."', author: "Norman Vaughan" },
    { text: '"Success usually comes to those who are too busy to be looking for it."', author: "Henry David Thoreau" },
    { text: '"Opportunities don\'t happen. You create them."', author: "Chris Grosser" },
    { text: '"The best time to plant a tree was twenty years ago. The second best time is now."', author: "Chinese Proverb" },
    { text: '"Life is 10% what happens to us and 90% how we react to it."', author: "Charles R. Swindoll" },
    { text: '"Success is walking from failure to failure with no loss of enthusiasm."', author: "Winston S. Churchill" },
    { text: '"I find that the harder I work, the more luck I seem to have."', author: "Thomas Jefferson" },
    { text: '"The way to get started is to quit talking and begin doing."', author: "Walt Disney" },
    { text: '"It does not matter how slowly you go as long as you do not stop."', author: "Confucius" },
    { text: '"Success is not how high you have climbed, but how you make a positive difference to the world."', author: "Roy T. Bennett" },
    { text: '"I am not a product of my circumstances. I am a product of my decisions."', author: "Stephen R. Covey" },
    { text: '"You miss 100% of the shots you don’t take."', author: "Wayne Gretzky" },
    { text: '"The future belongs to those who believe in the beauty of their dreams."', author: "Eleanor Roosevelt" },
    { text: '"Strive not to be a success, but rather to be of value."', author: "Albert Einstein" },
    { text: '"What you get by achieving your goals is not as important as what you become by achieving your goals."', author: "Zig Ziglar" },
    { text: '"Don’t watch the clock; do what it does. Keep going."', author: "Sam Levenson" },
    { text: '"Success is the sum of small efforts, repeated day in and day out."', author: "Robert Collier" },
    { text: '"The secret of getting ahead is getting started."', author: "Mark Twain" },
    { text: '"Believe you can and you’re halfway there."', author: "Theodore Roosevelt" },
    { text: '"Act as if what you do makes a difference. It does."', author: "William James" },
    { text: '"Every achievement starts with the decision to try."', author: "John F. Kennedy" },
    { text: '"Success is not in what you have, but who you are."', author: "Bo Bennett" },
    { text: '"If you want to achieve greatness, stop asking for permission."', author: "Anonymous" },
    { text: '"You don’t have to be great to start, but you have to start to be great."', author: "Zig Ziglar" },
];

const quoteElement = document.querySelector('.quote');
const quoteDisplay = document.querySelector('#quoteDisplay'); 
const authorDisplay = document.querySelector('#author'); 

quoteElement.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];

    quoteDisplay.innerHTML = `${randomQuote.text}`;
    authorDisplay.innerHTML = `${randomQuote.author}`; 
});

const postButton = document.querySelector('.post');

function postQuote() {
    const quoteText = quoteDisplay.innerText;
    const authorText = authorDisplay.innerText;

    const fullQuote = `${quoteText} ${authorText}`;
    const linkedInShareURL = `https://www.linkedin.com/sharing/share-offsite/?url=https://yourwebsite.com&text=${encodeURIComponent(fullQuote)}`;

    window.open(linkedInShareURL, '_blank'); 
}

postButton.addEventListener("click", postQuote);
