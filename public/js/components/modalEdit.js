const clearModal = () => {
  document.getElementById("modal-title").innerText =
    "Create memory for this year";
  document.getElementById("button-create-modal-memory").innerText = "Create";
  document.getElementById("title").value = "";
  document.getElementById("content").value = "";
  document.getElementById("file-upload-create").setAttribute("src", "");
  document.getElementById("file-upload-create").classList.add("hidden");
  document.getElementById("modal-create").classList.add("hidden");
};

// open-create-modal
document.addEventListener("DOMContentLoaded", () => {
  const editMemoryButtons = document.getElementsByName("edit-memory");
  const editModal = document.getElementById("modal-create");

  // Items modal
  const modalTitle = document.getElementById("modal-title");
  const title = document.getElementById("title");
  const content = document.getElementById("content");
  const inputFileCreate = document.getElementById("input-file-create");
  const fileUploadCreate = document.getElementById("file-upload-create");
  const buttonCreateModalMemory = document.getElementById(
    "button-create-modal-memory"
  );

  editMemoryButtons.forEach((button) => {
    button.addEventListener("click", () => {
      editModal.classList.toggle("hidden");
      modalTitle.innerText = "Edit this memory";
      buttonCreateModalMemory.innerText = "Edit";

      const parentButtonEdit = button.parentElement.parentElement.parentElement;
      const image = parentButtonEdit.querySelector("img");
      const titleMemory = parentButtonEdit.querySelector("h4");
      const contentMemory = parentButtonEdit.querySelector("span");

      title.value = titleMemory.innerText;
      content.value = contentMemory.innerText;
      fileUploadCreate.setAttribute("src", image.getAttribute("src"));
      fileUploadCreate.classList.remove("hidden");

      const onClickEdit = (e) => {
        e.preventDefault();
        const form = new FormData();
        form.append("title", title.value);
        form.append("content", content.value);

        if (inputFileCreate.files.length > 0) {
          form.append("image", inputFileCreate.files[0]);
        }

        clearModal();
      };

      buttonCreateModalMemory.addEventListener("click", onClickEdit);
    });
  });
});

export { clearModal };
