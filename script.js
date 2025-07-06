let shoppingList = []

const removeBtn = document.getElementById("removeBtn");
const addBtn = document.getElementById("addBtn");

function addItem(item) {
    shoppingList.unshift(item);

}

function removeLastItem() {
    shoppingList.pop();

}

function displayList() {
    for (let i = 0; i < shoppingList.length; i++) {
  console.log(shoppingList[i]);
}
}

function filterItems() {

}
addBtn.addEventListener('click', function() {
    const userInput = document.getElementById('itemList');
    const item = userInput.value;

    if (item.trim() !== '') {
        addItem(item);
        userInput.value = '';
        displayList();
    }
})

removeBtn.addEventListener('click', function() {
    removeLastItem();
    displayList();
});