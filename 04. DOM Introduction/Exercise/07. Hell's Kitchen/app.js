function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   const textArea = document.querySelector("textarea");
   const bestRestaurantRef = document.querySelector("#bestRestaurant p");
   const bestWorkersRef = document.querySelector("#workers p");

   function onClick () {
      const inputText = textArea.value;
      const textArray = JSON.parse(inputText);

      const result = {};

      for (let element of textArray) {
         const [name, workersData] = element.split(" - ");
         if (!result[name]) {
            result[name] = {
               bestSalary: 0,
               averageSalary: 0,
               workers: []
            }
         }

         const workers = workersData.split(', ');
         const newWorkersList = createWorkerList(workers);
         result[name].workers = concatWorkersList(result[name].workers, newWorkersList);
         const salaryData = calculateSalary(result[name].workers);
         result[name].averageSalary = salaryData.averageSalary;
         result[name].bestSalary = salaryData.bestSalary;
      }

      const bestRestaurant = findBestRestaurant(result);
      bestRestaurantRef.textContent = `Name: ${bestRestaurant[0]} Average Salary: ${bestRestaurant[1].averageSalary.toFixed(2)} Best Salary: ${bestRestaurant[1].bestSalary.toFixed(2)}`;

      let buff = "";
      bestRestaurant[1].workers.sort((a, b) => b.salary - a.salary).forEach(worker => {
         buff += `Name: ${worker.name} With Salary: ${worker.salary} `;
      });

      bestWorkersRef.textContent = buff.trim();
   }

   function findBestRestaurant(object) {
      return Object.entries(object).sort((a, b) => b[1].averageSalary - a[1].averageSalary)[0];
   }

   function calculateSalary(workerList) {
      const result = {
         averageSalary: 0,
         bestSalary: 0
      };

      let sum = 0;
      for (let worker of workerList) {
         let salary = worker.salary;
         sum += salary;

         if (result.bestSalary < salary) {
            result.bestSalary = salary;
         }
      }

      result.averageSalary = sum / workerList.length;
      return result;
   }

   function concatWorkersList(oldList, newList) {
      return oldList.concat(newList);
   }

   function createWorkerList(data) {
      const result = [];
      for (let element of data) {
         let [name, salary] = element.split(' ');
         salary = Number(salary);
         result.push({
            name,
            salary
         });
      }
      return result;
   }
}