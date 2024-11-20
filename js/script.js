const url = "https://api.adviceslip.com/advice";

const loadingElement = document.querySelector("#loading");
const adviceContainer = document.querySelector("#advice-container");
const btnAdvice = document.querySelector("#btn-advice");

async function getAdvice() {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);

  loadingElement.classList.add("hide")

  const div = document.createElement("div");
  const body = document.createElement("p");
  const link = document.createElement("a")

  body.innerText = data.slip.advice;
  link.innerText = "Novo Conselho"
  link.setAttribute("href", `/`)

  div.appendChild(body);
  div.appendChild(link)
  adviceContainer.appendChild(div);
}

getAdvice();