// toggle spinner
const toggleSpinner = (state) => {
  const spinner = document.getElementById("loading");
  if (state) {
    spinner.classList.remove("hidden");
  } else {
    spinner.classList.add("hidden");
  }
};

// render cards in the UI
const renderCards = (items) => {
  const imageContainer = document.getElementById("all-img");
  imageContainer.innerHTML = "";
  document.getElementById("quntti").innerText = items.length;

  items.forEach((item) => {
    const updatedDate = new Date(item.updatedAt);
    const formattedDate = `${updatedDate.getDate().toString().padStart(2, "0")}/${(
      updatedDate.getMonth() + 1
    )
      .toString()
      .padStart(2, "0")}/${updatedDate.getFullYear()}`;

    const wrapper = document.createElement("div");

    wrapper.innerHTML = `...`; // card html

    imageContainer.append(wrapper);
  });

  toggleSpinner(false);
};

let issueStore = [];

const loadAllIssues = async () => {
  toggleSpinner(true);

  const response = await fetch(
    "https://phi-lab-server.vercel.app/api/v1/lab/issues"
  );

  const result = await response.json();

  issueStore = result.data;

  renderCards(issueStore);
};

loadAllIssues();

const buttonAll = document.getElementById("btn-all");
const buttonOpen = document.getElementById("btn-open");
const buttonClosed = document.getElementById("btn-closed");

const btnList = [buttonAll, buttonOpen, buttonClosed];

// active button state
btnList.forEach((element) => {
  element.addEventListener("click", () => {
    btnList.forEach((b) =>
      b.classList.remove("bg-[#6322FF]", "text-white")
    );

    element.classList.add("bg-[#6322FF]", "text-white");
  });
});

// filter open issues
document.getElementById("btn-open").addEventListener("click", () => {
  toggleSpinner(true);

  const openList = issueStore.filter(
    (item) => item.status === "open"
  );

  renderCards(openList);
});

// filter closed issues
document.getElementById("btn-closed").addEventListener("click", () => {
  toggleSpinner(true);

  const closedList = issueStore.filter(
    (item) => item.status === "closed"
  );

  renderCards(closedList);
});

// show all issues
document.getElementById("btn-all").addEventListener("click", () => {
  toggleSpinner(true);
  renderCards(issueStore);
});