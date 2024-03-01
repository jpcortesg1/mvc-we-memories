import { clearModal } from "./modalEdit.js";

// open-create-modal
document.addEventListener("DOMContentLoaded", () => {
  const openCreateModalButton = document.getElementById(
    "open-create-modal-button"
  );
  const closeCreateModalButton = document.getElementById(
    "close-create-modal-button"
  );
  const modalCreate = document.getElementById("modal-create");

  const buttonUploadImageCreate = document.getElementById(
    "button-upload-image-create"
  );
  const inputFileCreate = document.getElementById("input-file-create");

  openCreateModalButton.addEventListener("click", () => {
    clearModal();
    modalCreate.classList.toggle("hidden");
  });

  closeCreateModalButton.addEventListener("click", () => {
    clearModal();
    modalCreate.classList.add("hidden");
  });

  buttonUploadImageCreate.addEventListener("click", () => {
    inputFileCreate.click();
  });

  inputFileCreate.addEventListener("change", (e) => {
    const fileUploadCreate = document.getElementById("file-upload-create");
    if (inputFileCreate.files && inputFileCreate.files[0]) {
      let reader = new FileReader();

      reader.onload = function (e) {
        fileUploadCreate.setAttribute("src", e.target.result);
      };

      reader.readAsDataURL(inputFileCreate.files[0]);
      fileUploadCreate.classList.remove("hidden")
      return
    }
    fileUploadCreate.classList.add("hidden")
  });
});
