window.addEventListener("load", solve);

function solve() {

  const addActivityButton = document.getElementById("add-activity");
  const previewActivity = document.getElementById("preview-activity");
  const tableBodyRef = document.getElementById("activities-table");

  const typeRef = document.getElementById("type");
  const intensityRef = document.getElementById("intensity");
  const caloriesRef = document.getElementById("calories");
  const durationRef = document.getElementById("duration");
  const dateRef = document.getElementById("date");

  addActivityButton.addEventListener("click", onAdd);

  function onAdd(event) {
    const type = typeRef.value;
    const intensity = intensityRef.value;
    const calories = caloriesRef.value;
    const duration = durationRef.value;
    const date = dateRef.value;

    if (!type || !intensity || !calories || !duration || !date) {
      return;
    };

    const li = createFirstListItem(type, intensity, calories, duration, date);
    previewActivity.innerHTML = li;

    typeRef.value = "";
    intensityRef.value = "";
    caloriesRef.value = "";
    durationRef.value = "";
    dateRef.value = "";

    addActivityButton.disabled = true;

    const buttons = document.getElementsByClassName("btn-container")[0].children;
    const editButton = buttons[0];
    const nextButton = buttons[1];

    nextButton.addEventListener("click", onNext);
    editButton.addEventListener("click", onEdit);
  }

  function onNext(event) {
    const li = event.target.parentElement.parentElement;
    const article = li.children[0];
    const articleData = article.children;

    const editedData = editData(articleData);

    const tr = createSecondListItem(editedData[0], editedData[1], editedData[2], editedData[3], editedData[4]);
    tableBodyRef.innerHTML += tr;
    li.remove();

    const button = document.getElementsByClassName("delete-btn");
    const deleteButton = button[0];

    deleteButton.addEventListener("click", onDelete);

    addActivityButton.disabled = false;
  }

  function onDelete(event) {
    const tr = event.target.parentElement.parentElement;
    tr.remove();
    addActivityButton.disabled = false;
  }

  function onEdit(event) {
    const li = event.target.parentElement.parentElement;
    const article = li.children[0];

    const dataOfArticle = article.children;
    const editedData = editData(dataOfArticle);

    typeRef.value = editedData[0];
    intensityRef.value = editedData[1];
    caloriesRef.value = editedData[2];
    durationRef.value = editedData[3];
    dateRef.value = editedData[4];

    li.remove();

    addActivityButton.disabled = false;
  }

    function editData(array) {
      let activityTC = array[0].textContent;
      let intensityTC = array[1].textContent;
      let durationTC = array[2].textContent;
      let dateTC = array[3].textContent;
      let caloriesTC = array[4].textContent;

      const activity = activityTC.split(": ")[1];
      const intensity = intensityTC.split(": ")[1];
      const duration = durationTC.split(": ")[1].slice(0, -4).trim();
      const date = dateTC.split(": ")[1];
      const calories = caloriesTC.split(": ")[1].trim();

      return [activity, intensity, calories, duration, date];
    }

  function createFirstListItem(type, intensity, calories, duration, date) {
    const text = `
      <li>
        <article>
          <p>Activity: ${type}</p>
          <p>Intensity: ${intensity}</p>
          <p>Duration: ${duration} min.</p>
          <p>Date: ${date}</p>
          <p>Calories: ${calories} </p>
        </article>
        <div class="btn-container">
          <button class="edit-btn">Edit</button>
          <button class="next-btn">Next</button>
        </div>
      </li>`;

      return text;
  }

  function createSecondListItem(type, intensity, calories, duration, date) {
    const text = `
      <tr>
        <td class="type-cell">${type}</td>
        <td class="duration-cell">${duration}</td>
        <td class="calories-cell">${calories}</td>
        <td class="date-cell">${date}</td>
        <td class="intensity-cell">${intensity}</td>
        <td class="btn-cell">
          <button class="delete-btn">Delete</button>
        </td>
      </tr>`;

      return text;
  }
}