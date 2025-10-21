window.addEventListener('load', solve);

function solve() {
   const nextButton = document.getElementById("next-btn");

   const userInfo = {
      firstName: document.getElementById("first-name"),
      lastName: document.getElementById("last-name"),
      peopleCount: document.getElementById("people-count"),
      fromDate: document.getElementById("from-date"),
      daysCount: document.getElementById("days-count")
   };

   nextButton.addEventListener("click", function onNext(event) {
        event.preventDefault();
        
         const firstName = userInfo.firstName.value;
         const lastName = userInfo.lastName.value;
         const peopleCount = userInfo.peopleCount.value;
         const fromDate = userInfo.fromDate.value;
         const daysCount = userInfo.daysCount.value;

         if (!firstName || !lastName || !peopleCount || !fromDate || !daysCount) {
            return;
         };

         const element = document.createElement("li");
         element.className = "ticket";
   });
   
   function createTicketPreview(data) {
      const listedItem = document.createElement("li");

      const articleItem = document.createElement("article");

      const h3 = document.createElement("h3");
      h3.textContent = `Name: `
   }  
}

// dateInput comes: year-month-day