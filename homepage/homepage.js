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