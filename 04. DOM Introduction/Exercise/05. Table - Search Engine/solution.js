function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   const searchRef = document.getElementById("searchField");
   const tableRef = document.querySelectorAll("tbody tr");
   
   function onClick() {
      const searchText = searchRef.value.trim();
      if (!searchText) { 
         return; 
      }

      for (let row of tableRef) {
         row.classList.remove("select");
      }

      for (let row of tableRef) {
         const tableDataRef = row.querySelectorAll("td");
         for (let col of tableDataRef) {
            if (col.textContent.includes(searchText)) {
               row.classList.add("select");
               break;
            }
         }
      }

      searchRef.value = '';
   }
}