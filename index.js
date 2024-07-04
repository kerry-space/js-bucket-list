
const bucketListContainer = document.querySelector('.list');

// Create a new <p> element and add it to the DOM
const newItem1 = document.createElement('p');
newItem1.innerText = 'Skydive over the Grand Canyon';
bucketListContainer.appendChild(newItem1);

// Create another <p> element and insert it after the existing <p> tag
const newItem2 = document.createElement('p');
newItem2.innerText = 'Learn to play the guitar';
const existingItem = bucketListContainer.querySelector('p');
existingItem.insertAdjacentElement('afterend', newItem2);


console.log(bucketListContainer.innerHTML);

const newItemString = '<p>Travel to Iceland and see the Northern Lights</p>';

// Commented out line to preserve previous items
bucketListContainer.innerHTML = newItemString;

// Use insertAdjacentHTML to add the new item to the beginning of the list
bucketListContainer.insertAdjacentHTML('afterbegin', newItemString);

// Add three more items to the end of the list using a loop
const moreItems = ['Climb Mount Everest', 'Read 100 books', 'Run a marathon'];
moreItems.forEach(item => {
    const newItem = document.createElement('p');
    newItem.innerText = item;
    bucketListContainer.appendChild(newItem);
});

// Log the number of items in the bucket list
console.log(`Number of items in the bucket list: ${bucketListContainer.children.length}`);

// Change the content of the h2 to have your name instead of "Bucky's"
const header = document.querySelector('h2.owner');
header.innerText = 'Your Name\'s';

// Replace the first item in the list with a new item
const firstItem = bucketListContainer.querySelector('p');
const replacedItem = document.createElement('p');
replacedItem.innerText = 'Visit the Pyramids of Giza';
bucketListContainer.replaceChild(replacedItem, firstItem);

// Replace an item in the middle of the list with a new one
const middleIndex = Math.floor(bucketListContainer.children.length / 2);
const middleItem = bucketListContainer.children[middleIndex];
const newMiddleItem = document.createElement('p');
newMiddleItem.innerText = 'Learn to speak Mandarin';
bucketListContainer.replaceChild(newMiddleItem, middleItem);

// Remove the last element in the list
const lastItem = bucketListContainer.lastElementChild;
bucketListContainer.removeChild(lastItem);