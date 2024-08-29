document.addEventListener('DOMContentLoaded', () => {
    // Example event listener for a button click
    const addButton = document.getElementById('add-expense');
    if (addButton) {
      addButton.addEventListener('click', () => {
        alert('Add expense clicked!');
      });
    }
  });