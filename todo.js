function addl() {
  const newvalue = document.getElementById("todoinput");
  const valueitem = " " + newvalue.value;
  console.log(valueitem);
  const listtodo = document.getElementById("list");
  listtodo.style.padding = "10px";
  listtodo.style.marginTop = "20px";
  listtodo.style.width = "100%";
  const li = document.createElement("li");
  const numitem = listtodo.children.length + 1 + ". ";
  console.log("listtodo: " + listtodo);
  console.log("li: " + li);
  li.style.backgroundColor = "#d0d0d7";
  li.style.padding = "5px";
  li.style.marginBottom = "5px";
  li.style.borderRadius = "3px";
  li.style.transition = "all 0.3s ease-in-out";
  li.setAttribute("class", "listitem");
  li.textContent = numitem + valueitem;
  listtodo.appendChild(li);
  newvalue.value = "";
  const deletebtn = document.createElement("button");
  deletebtn.textContent = "Delete";
  deletebtn.style.marginLeft = "10px";
  deletebtn.style.padding = "2px 5px";
  deletebtn.style.border = "none";
  deletebtn.style.borderRadius = "3px";
  deletebtn.style.backgroundColor = "#ff4d4d";
  deletebtn.style.color = "white";
  deletebtn.style.cursor = "pointer";
  deletebtn.addEventListener("click", function () {
    listtodo.removeChild(li);
  });
  li.style.display = "flex";
  li.style.justifyContent = "space-between";
  li.appendChild(deletebtn);

  li.style.opacity = "0";
  setTimeout(() => {
    li.style.opacity = "1";
    li.style.transition = "opacity 0.5s ease-in-out";
  }, 10);

  li.addEventListener("mouseover", function () {
    hoverItem(li);
  });
  li.addEventListener("mouseout", function () {
    removeHoverItem(li);
  });
}

function hoverItem(li) {
  li.style.backgroundColor = "#c0c0c7";
  li.style.transform = "scale(1.02)";
  li.style.cursor = "pointer";
  li.style.transition = "all 0.3s ease-in-out";
}

function removeHoverItem(li) {
  li.style.backgroundColor = "#d0d0d7";
  li.style.transform = "scale(1)";
  li.style.transition = "all 0.3s ease-in-out";
  li.style.cursor = "default";
}

function init() {
  const title = document.getElementById("title");
  const listcontainer = document.getElementById("listcontainer")
  function hoverEffect() {
    title.style.color = "darkblue";
    title.style.transform = "scale(1.05)";
  }

  function removeHoverEffect() {
    title.style.color = "blue";
    title.style.transform = "scale(1)";
  }

  // Title styling
  title.style.textAlign = "center";
  title.style.color = "blue";
  title.style.marginBottom = "20px";
  title.style.fontSize = "36px";
  title.style.fontWeight = "bold";
  title.style.textShadow = "2px 2px 4px #aaa";
  title.style.cursor = "default";
  title.style.userSelect = "none";
  title.style.lineHeight = "1.5";
  title.style.opacity = "0.9";
  title.style.transition = "all 0.3s ease-in-out";
  
  // Event listeners for hover effects
  title.addEventListener("mouseover", hoverEffect);
  title.addEventListener("mouseout", removeHoverEffect);

  // Create clear button
  const clearButton = document.createElement("button");
  clearButton.textContent = "Clear All";
  clearButton.className = "clearbtn";
  clearButton.style.margin = "10px auto";
  clearButton.style.display = "block";
  clearButton.style.padding = "5px 15px";
  clearButton.style.backgroundColor = "#e9ceceff";
  clearButton.style.color = "black";
  clearButton.style.border = "none";
  clearButton.style.borderRadius = "3px";
  clearButton.style.cursor = "pointer";
  clearButton.style.transition = "background-color 0.3s ease";

  // Add hover effect to clear button
  clearButton.addEventListener("mouseover", function() {
    this.style.backgroundColor = "#ff3333";
  });
  
  clearButton.addEventListener("mouseout", function() {
    this.style.backgroundColor = "#7485f3ff";
  });

  // Insert clear button after the title
  console.log(listcontainer);
  
  listcontainer.appendChild(clearButton);

  // Add event listener to the clear button
  clearButton.addEventListener("click", clearlist);
}



function clearlist() {
  const listtodo = document.getElementById("list");
  listtodo.innerHTML = "";
}


window.onload = init;
