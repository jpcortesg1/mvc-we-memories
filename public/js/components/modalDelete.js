// open-create-modal
document.addEventListener("DOMContentLoaded", () => {
  const deleteMemoryButtons = document.getElementsByName("delete-memory");
  const dataEn = {
    title: "Delete this memory",
    buttonAccept: "Delete",
    buttonCancel: "Cancel",
    description: "Are you sure you want to delete this memory?",
  };

  const dataEs = {
    title: "Borrar este recuerdo",
    buttonAccept: "Borrar",
    buttonCancel: "Cancelar",
    description: "¿Estás seguro de que quieres borrar este recuerdo?",
  };

  // Alert
  const alert = document.getElementById("alert");
  const titleAlert = document.getElementById("alert-title");
  const descriptionAlert = document.getElementById("alert-description");
  const cancelAlert = document.getElementById("alert-cancel");
  const confirmAlert = document.getElementById("alert-accept");

  deleteMemoryButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const lang = document.cookie
        .split(";")
        .find((cookie) => cookie.includes("lang"))
        .split("=")[1];
      const data = lang === "EN" ? dataEn : dataEs;

      const idMemory = button.getAttribute("id");
      titleAlert.innerText = data.title;
      descriptionAlert.innerText = data.description;
      cancelAlert.innerText = data.buttonCancel;
      confirmAlert.innerText = data.buttonAccept;

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
