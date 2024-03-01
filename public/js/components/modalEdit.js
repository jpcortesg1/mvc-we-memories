// Objetive: Set modal like default when it's closed
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

  // Add event listener to each button
  editMemoryButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Show modal with different values
      editModal.classList.toggle("hidden");
      modalTitle.innerText = "Edit this memory";
      buttonCreateModalMemory.innerText = "Edit";

      // Get values
      const parentButtonEdit = button.parentElement.parentElement.parentElement;
      const image = parentButtonEdit.querySelector("img");
      const titleMemory = parentButtonEdit.querySelector("h4");
      const contentMemory = parentButtonEdit.querySelector("span");

      // Save initial values
      const initialTitle = titleMemory.innerText;
      const initialContent = contentMemory.innerText;

      // Set values
      title.value = titleMemory.innerText;
      content.value = contentMemory.innerText;
      fileUploadCreate.setAttribute("src", image.getAttribute("src"));
      fileUploadCreate.classList.remove("hidden");

      // Function to edit memory
      const onClickEdit = async (e) => {
        e.preventDefault();
        const form = new FormData();

        // Save values if they are different
        initialTitle != title.value && form.append("title", title.value);
        initialContent != content.value &&
          form.append("content", content.value);
        inputFileCreate.files.length > 0 &&
          form.append("file", inputFileCreate.files[0]);

        // No changes
        if (Array.from(form.entries()).length <= 0) {
          clearModal();
          buttonCreateModalMemory.removeEventListener("click", onClickEdit);
          return;
        }

        try {
          const id = button.getAttribute("id");
          const res = await fetch(`/memories/${id}`, {
            method: "PATCH",
            body: form,
          });
          const { status } = await res.json();
          if (status === 200) {
            location.reload();
            return;
          }
        } catch (error) {
          console.log(error);
        }
        clearModal();
        buttonCreateModalMemory.removeEventListener("click", onClickEdit);
      };

      buttonCreateModalMemory.addEventListener("click", onClickEdit);
    });
  });
});

export { clearModal };
