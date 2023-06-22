
  const cells = document.querySelectorAll('td');

  cells.forEach(cell => {
    cell.addEventListener('click', () => {
      const row = cell.parentNode.rowIndex;
      const col = cell.cellIndex;

      for (let i = 0; i < cells.length; i++) {
        if (cells[i].parentNode.rowIndex === row) {
          cells[i].classList.add('highlighted');
        }
      }
      const highlightedCells = document.querySelectorAll('.highlighted');
      highlightedCells.forEach(highlightedCell => {
        if (highlightedCell.parentNode.rowIndex !== row) {
          highlightedCell.classList.remove('highlighted');
        }
      });
    });
  });