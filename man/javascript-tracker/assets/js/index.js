/*
const descriptionInput = document.getElementById('description');
const buttonAdd = document.getElementById('buttonAdd');

buttonAdd.addEventListener('click', function handleAdd() {
  console.log(descriptionInput.value)
});
*/
const error = document.getElementById("error");
const buttonAdd = document.querySelector("#buttonAdd");
const descriptionInput = document.querySelector("#description");
const authorInput = document.querySelector("#author-select");
const severityInput = document.querySelector("#severity-select");
const issuesContainer = document.querySelector("#issues");
const countValue = document.querySelector(".count-value");
let issueCount = 0;

const displayCount = (issueCount) => {
    countValue.innerText = issueCount;
};

const addIssue = () => {
    const issueDescription = descriptionInput.value.trim();
    const issueName = authorInput.value.trim();
    const issueSeverity = severityInput.value.trim();
    error.style.display = "none";
    if(!issueDescription){
        setTimeout(()=>{
            error.style.display="block";
        }, 200);
        return;
    }
    
    const issue = `<div class="card">
    <div class="card_header">
    <span class="issueName">${issueName}</span>
    </div>
    <div class="card_content">
      <p>${issueDescription}</p>
      <div class="card_severity">${issueSeverity}</div>
      <div class="card_button">
        <button type="button" class="button button-close">Close</button>
        <button type="button" class="button button-delete">Delete</button>
      </div>
    </div>`;
/*
    const task = `<div class="task">
    <input type="checkbox" class="task-check">
    <span class="taskname">${taskName}</span>
    <button class="edit">
    <i class="fa-solid fa-pen-to-square"></i>
    </button>
    <button class="delete">
    <i class="fa-solid fa-trash"></i>
    </button>
</div>`;
*/
    issuesContainer.insertAdjacentHTML("beforeend", issue);

    const deleteButtons = document.querySelectorAll(".button-delete");
    deleteButtons.forEach((button) =>{
        button.onclick = () => {
            button.parentNode.remove();
            issueCount -= 1;
            displayCount(issueCount);
        };
    });

    issueCount += 1;
    displayCount(issueCount);
    descriptionInput.value = "";
};
/*
buttonAdd.addEventListener('click', function handleAdd() {
    console.log(descriptionInput.value)
    console.log(authorInput.value)
    console.log(severityInput.value)
  });

*/
buttonAdd.addEventListener("click", addIssue);

window.onload = () => {
    issueCount = 0;
    displayCount(issueCount);
    descriptionInput.value = "";
};

