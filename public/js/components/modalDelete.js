// open-create-modal
document.addEventListener("DOMContentLoaded", () => {
  const deleteMemoryButtons = document.getElementsByName("delete-memory");

  // Alert
  const alert = document.getElementById("alert");
  const titleAlert = document.getElementById("alert-title");
  const descriptionAlert = document.getElementById("alert-description");
  const cancelAlert = document.getElementById("alert-cancel");
  const confirmAlert = document.getElementById("alert-accept");

  deleteMemoryButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const idMemory = button.getAttribute("id");
      titleAlert.innerText = "Delete Memory adfasd";
      descriptionAlert.innerText =
        "Are you sure you want to delete this memory? dfasdas";
      cancelAlert.innerText = "Cancel dasd";
      confirmAlert.innerText = "Confirm dasd";

      alert.classList.remove("hidden");

      confirmAlert.addEventListener("click", async () => {
        const res = await fetch(`/memories/${idMemory}`, {
          method: "DELETE",
        });
        const { status } = await res.json();
        if (status === 200) {
          alert.classList.add("hidden");
          location.reload();
          return;
        }
      });
    });
  });

  cancelAlert.addEventListener("click", () => {
    alert.classList.add("hidden");
  });
});
