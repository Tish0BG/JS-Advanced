function solve() {
   const addButtons = document.querySelectorAll('.add-product');
   const outputBox = document.querySelector('textarea');
   const checkoutButton = document.querySelector('.checkout');

   const products = new Set();
   let sum = 0;
   
   for (let button of addButtons) {
      button.addEventListener('click', (event) => {
         const productDiv = event.target.closest('.product');
         
         const name = productDiv.querySelector('.product-title').textContent;
         const price = Number(productDiv.querySelector('.product-line-price').textContent);

         sum += price;
         products.add(name);

         outputBox.value += `Added ${name} for ${price.toFixed(2)} to the cart.\n`;
      });
   }

   checkoutButton.addEventListener('click', (event) => {
      outputBox.value += `You bought ${Array.from(products).join(', ')} for ${sum.toFixed(2)}.`;
      addButtons.forEach(bt => bt.disabled = true);
      checkoutButton.disabled = true;
   });
}