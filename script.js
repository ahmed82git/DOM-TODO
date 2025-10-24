const mydivId = document.getElementById("0");
console.log(mydivId);
const mydivCl = document.getElementsByClassName("di").item(0);
console.log(mydivCl);
const mydivNam = document.getElementsByTagName("div")[0];
console.log(mydivNam);
mydivId.innerHTML = "this is my name";
mydivNam.innerText = "test";
mydivCl.textContent = "new test";
