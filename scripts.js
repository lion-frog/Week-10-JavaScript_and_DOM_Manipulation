let id = 1;

document.getElementById("btn").addEventListener("click", () => {
  let table = document.getElementById("list");
  let row = table.insertRow(-1);
  row.setAttribute("id", `item-${id}`);

  row.insertCell(0).innerHTML = id;
  row.insertCell(1).innerHTML = document.getElementById("pref-name").value;
  row.insertCell(2).innerHTML = document.getElementById("age").value;
  row.insertCell(3).innerHTML = document.getElementById("fav-col").value;

  document.getElementById("pref-name").value = "";
  document.getElementById("age").value = "";
  document.getElementById("fav-col").value = "";
  id++;
});
