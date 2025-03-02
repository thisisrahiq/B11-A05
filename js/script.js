function theme() {
  const colors = [
    "bg-gray-100 ",
    "bg-blue-200",
    "bg-amber-50",
    "bg-slate-50",
    "bg-green-100",
    "bg-yellow-100",
    "bg-sky-100",
    "bg-red-100",
    "bg-teal-100",
    "bg-lime-100",
  ];
  document.getElementById("theme-btn").addEventListener("click", function () {
    document.body.className = colors[Math.floor(Math.random() * colors.length)];
  });
}

theme();

function cureentDate() {
  let date = new Date();
  let optionsWeekday = { weekday: "short" };
  let optionsDate = { month: "short", day: "2-digit", year: "numeric" };

  let weekday = date.toLocaleDateString("en-US", optionsWeekday);
  let day = date.toLocaleDateString("en-US", optionsDate).replace(",", "");

  document.getElementById("today").innerHTML = `
    ${weekday}
    <br>
    <span class="font-bold">${day}</span>
    `;
}
cureentDate();

document.getElementById("blog-btn").addEventListener("click", function () {
  window.location.href = "../blog.html";
});

const completedTasks = document.getElementById("completed-tasks");
const countTask = document.getElementById("count-task");

const cards = document.querySelectorAll(".card-body");
for (let card of cards) {
  const btn = card.querySelector(".task-btn");

  btn.addEventListener("click", function (event) {
    alert("Board Updated Successfully");

    btn.classList.remove("btn-active");
    btn.classList.add("btn-disabled");

    completedTasks.innerHTML = parseInt(completedTasks.innerText) + 1;

    countTask.innerHTML = parseInt(countTask.innerText) - 1;

    if (countTask.innerHTML === "0") {
      alert("Congratulations! You have completed all the task");
    }

    const paragraph = document.createElement("p");
    const title = card.querySelector(".card-title").innerText;
    let date = new Date();
    const time = date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });

    paragraph.innerText = `You have Complete the task ${title} at ${time}`;

    paragraph.classList.add("bg-[#F4F7FF]", "p-4", "m-4", "rounded-2xl");

    const history = document.getElementById("history");

    history.append(paragraph);
  });
}

document.getElementById("clear-btn").addEventListener("click", function () {
  const history = document.getElementById("history");
  history.innerHTML = "";
});
