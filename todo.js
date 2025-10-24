function addl() {
  const newvalue = document.getElementById("todoinput");
  const valueitem = newvalue.value;
  console.log(valueitem);
  const listtodo = document.getElementById("list");
  console.log(listtodo)
  const li = document.createElement("li");
  li.style.backgroundColor = "#d0d0d7"
  li.style.padding="5px"
  li.textContent = valueitem;
  listtodo.appendChild(li);
}
