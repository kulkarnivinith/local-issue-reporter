document.getElementById("issueForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent form from reloading the page

  const name = document.getElementById("name").value.trim();
  const location = document.getElementById("location").value.trim();
  const description = document.getElementById("description").value.trim();

  if (!name || !location || !description) return;

  const issueCard = document.createElement("div");
  issueCard.className = "issue-card";
  issueCard.innerHTML = `
    <strong>${name}</strong> from <em>${location}</em><br>
    <p>${description}</p>
  `;

  document.getElementById("issuesList").appendChild(issueCard);

  // Clear the form
  document.getElementById("issueForm").reset();
});
