function search() {
   const input = document.getElementById('searchText');
   const listedItems = document.getElementsByTagName("li");
   const countRef = document.getElementById('result');

   const matches = [];
   let matchesCount = 0;

   for (let i = 0; i < listedItems.length; i++) {
      listedItems[i].style.fontWeight = 'normal';
      listedItems[i].style.textDecoration = 'none';

      let item = listedItems[i].textContent;

      if (item.includes(input.value) && input.value !== '') {
         listedItems[i].style.fontWeight = 'bold';
         listedItems[i].style.textDecoration = 'underline';
         matchesCount++;
      }
   }

   countRef.textContent = `${matchesCount} matches found`;
   input.value = '';
}