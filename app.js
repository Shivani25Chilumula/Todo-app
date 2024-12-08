function addTask() {
      const input = document.getElementById("datainput");
      const value = input.value;
      if(value){
        const listItem = document.createElement('li');
        listItem.innerHTML= `${value} <button onclick="editItem(this)">Edit</button> <button onclick="deleteItem(this)">Delete</button>`;
        document.getElementById('dataList').appendChild(listItem);
        input.value = '';
      }
}
function editItem(button) {
      const listItem = button.parentElement;
      const newValue = prompt("Edit item:", listItem.firstChild.textContent.trim());
      if (newValue !== null) {
         listItem.firstChild.textContent = newValue;
      }
}
function deleteItem(button) {
      const listItem = button.parentElement;
      listItem.remove();
}
