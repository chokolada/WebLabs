function sortPlatesByCostDescending() {
  const plateInfoArray = Array.from(
    document.getElementsByClassName("plateInfo")
  );

  plateInfoArray.sort((a, b) => {
    const costA = parseFloat(a.querySelector(".costValue").textContent);
    const costB = parseFloat(b.querySelector(".costValue").textContent);
    return costB - costA;
  });

  const parent = plateInfoArray[0].parentElement;
  while (parent.firstChild !== parent.children[0]) {
    parent.removeChild(parent.firstChild);
  }

  plateInfoArray.forEach((plate) => {
    parent.appendChild(plate);
  });
}

function sortPlatesByOriginalState() {
  const plateInfoArray = Array.from(
    document.getElementsByClassName("plateInfo")
  );

  plateInfoArray.sort((a, b) => {
    const nameA = a.querySelector("h2").textContent;
    const nameB = b.querySelector("h2").textContent;
    return nameA.localeCompare(nameB);
  });

  const parent = plateInfoArray[0].parentElement;
  while (parent.firstChild !== parent.children[0]) {
    parent.removeChild(parent.firstChild);
  }

  plateInfoArray.forEach((plate) => {
    parent.appendChild(plate);
  });
}

function switcherFunction(element) {
  const parent = element.parentElement;
  const currentJustifyContent = window.getComputedStyle(parent).justifyContent;

  if (currentJustifyContent === "flex-start") {
    parent.style.justifyContent = "flex-end";
    sortPlatesByCostDescending();
  } else {
    parent.style.justifyContent = "flex-start";
    sortPlatesByOriginalState();
  }
}
function plateCreation() {
  window.location.href = "/Lab_3/creationPage.html"
}

document.addEventListener("DOMContentLoaded", function () {
  const existingPlates = JSON.parse(localStorage.getItem("plates")) || [];
  const rightSection = document.querySelector(".rightSection");

  // localStorage.clear();

  if (rightSection) {
    existingPlates.forEach((plate) => {
      const { plateId, title, description, cost, type } = plate;
      const newPlateDiv = document.createElement("div");
      newPlateDiv.classList.add("plateInfo");
      newPlateDiv.setAttribute("data-plate-id", plateId);
      newPlateDiv.innerHTML = `
        <h2>${title}</h2>
        <p><strong>Description:</strong> ${description}</p>
        <p><strong>Cost($):</strong><span class="costValue">${cost}</span>$</p>
        <p><strong>Plate type:</strong> ${type}</p>
        <div class="plateInfoButtons">
          <button class="deleteButton" onclick="deleteButton(${plateId})">Delete</button>
          <button class="editButton" onclick="editButton(${plateId}, '${title}', '${description}', ${cost}, '${type}')">Edit</button>
        </div>
      `;
    
      rightSection.appendChild(newPlateDiv);
    });
    
  } else {
    console.error("Div not found in loaded HTML");
  }
});



function addPlate() {
  const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;
  const cost = document.getElementById("cost").value;
  const type = document.getElementById("type").value;

  const existingPlates = JSON.parse(localStorage.getItem("plates")) || [];

  const plateId = existingPlates.length + 1;

  const newPlate = {
    plateId, 
    title,
    description,
    cost,
    type,
  };

  existingPlates.push(newPlate);

  localStorage.setItem("plates", JSON.stringify(existingPlates));

}


function totalCount() {
  const plateInfoArray = Array.from(
    document.getElementsByClassName("costValue")
  );
  let totalCost = 0.0;

  plateInfoArray.forEach((plate) => {
    const cost = parseFloat(plate.textContent);
    if (!isNaN(cost)) {
      totalCost += cost;
    }
  });

  const totalExpensesDiv = document.querySelector(".totalExpenses");
  totalExpensesDiv.textContent = `Total expenses: $${totalCost.toFixed(2)}`;
}


function searchFunc() {
  const searchBar = document.querySelector(".searchBar");
  const plateInfoArray = Array.from(
    document.getElementsByClassName("plateInfo")
  );

  const lowercaseSearchBar = searchBar.value.toLowerCase();

  plateInfoArray.forEach((plateInfo) => {
    const h2Element = plateInfo.querySelector("h2");
    const h2Content = h2Element.textContent.toLowerCase();

    if (!h2Content.includes(lowercaseSearchBar)) {
      plateInfo.style.display = "none";
    } else {
      plateInfo.style.display = "flex";
    }
  });
}

function clearFunc() {
  const searchBar = document.querySelector(".searchBar");
  const plateInfoArray = Array.from(
    document.getElementsByClassName("plateInfo")
  );
  searchBar.value = "";

  plateInfoArray.forEach((plateInfo) => {
    plateInfo.style.display = "flex";
  });
}
function deleteButton(plateId) {
  const existingPlates = JSON.parse(localStorage.getItem("plates")) || [];

  const indexToRemove = existingPlates.findIndex((plate) => plate.plateId === plateId);

  if (indexToRemove !== -1) {
    existingPlates.splice(indexToRemove, 1);

    localStorage.setItem("plates", JSON.stringify(existingPlates));

    const plateInfoDiv = document.querySelector(`[data-plate-id="${plateId}"]`);
    if (plateInfoDiv) {
      plateInfoDiv.remove();
    }
  }
}

function editButton(plateId, title, description, cost, type) {
  sessionStorage.setItem("editPlateId", plateId);
  sessionStorage.setItem("editTitle", title);
  sessionStorage.setItem("editDescription", description);
  sessionStorage.setItem("editCost", cost);
  sessionStorage.setItem("editType", type);

  window.location.href = "editPage.html";
}


function saveEdits() {
  const plateId = sessionStorage.getItem("editPlateId");

  const existingPlates = JSON.parse(localStorage.getItem("plates")) || [];

  const indexToEdit = existingPlates.findIndex((plate) => plate.plateId === parseInt(plateId));

  if (indexToEdit !== -1) {
      const editedPlate = {
          plateId: parseInt(plateId),
          cost: document.getElementById("cost").value,
          title: document.getElementById("title").value,
          description: document.getElementById("description").value,
      };

      existingPlates[indexToEdit] = editedPlate;

      localStorage.setItem("plates", JSON.stringify(existingPlates));

      window.location.href = "managePage.html";
  }
}
document.addEventListener("DOMContentLoaded", function() {
  const title = sessionStorage.getItem("editTitle");
  const description = sessionStorage.getItem("editDescription");
  const cost = sessionStorage.getItem("editCost");
  const type = sessionStorage.getItem("editType");

  document.getElementById("title").value = title;
  document.getElementById("description").value = description;
  document.getElementById("cost").value = cost;
  document.getElementById("type").value = type;

  sessionStorage.clear()
})