const dataEn = {
  title: "Create memory for this year",
  labelTitle: "Title",
  placeholderTitle: "My best year",
  labelContent: "Description",
  labelFile: "Photo",
  buttonChangeFile: "Change",
  buttonCreate: "Create",
  buttonCancel: "Cancel",
};

const dataEs = {
  title: "Crea un recuerdo para este año",
  labelTitle: "Título",
  placeholderTitle: "Mi mejor año",
  labelContent: "Descripción",
  labelFile: "Foto",
  buttonChangeFile: "Cambiar",
  buttonCreate: "Crear",
  buttonCancel: "Cancelar",
};

// Objetive: Set modal like default when it's closed
const clearModal = () => {
  // Get cokies lang
  const lang = document.cookie
    .split(";")
    .find((cookie) => cookie.includes("lang"))
    .split("=")[1];
  const data = lang === "EN" ? dataEn : dataEs;

  document.getElementById("modal-title").innerText = data.title;
  document.getElementById("button-create-modal-memory").innerText =
    data.buttonCreate;
  document
    .getElementById("title")
    .setAttribute("placeholder", data.placeholderTitle);
  document.getElementById("label-title-create").innerText = data.labelTitle;
  document.getElementById("label-content-create").innerText = data.labelContent;
  document.getElementById("label-file-create").innerText = data.labelFile;
  document.getElementById("button-upload-image-create").innerText =
    data.buttonChangeFile;
  document.getElementById("close-create-modal-button").innerText =
    data.buttonCancel;

  document.getElementById("title").value = "";
  document.getElementById("content").value = "";
  document.getElementById("file-upload-create").setAttribute("src", "");
  document.getElementById("file-upload-create").classList.add("hidden");
  document.getElementById("modal-create").classList.add("hidden");
};

const dataEditEn = {
  ...dataEn,
  title: "Edit this memory",
  buttonCreate: "Edit",
};

const dataEditEs = {
  ...dataEs,
  title: "Edita este recuerdo",
  buttonCreate: "Editar",
};

// open-create-modal
document.addEventListener("DOMContentLoaded", () => {
  const editMemoryButtons = document.getElementsByName("edit-memory");
  const editModal = document.getElementById("modal-create");

  // Items modal
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
      const lang = document.cookie
        .split(";")
        .find((cookie) => cookie.includes("lang"))
        .split("=")[1];
      const data = lang === "EN" ? dataEditEn : dataEditEs;

      document.getElementById("modal-title").innerText = data.title;
      document.getElementById("button-create-modal-memory").innerText =
        data.buttonCreate;
      document
        .getElementById("title")
        .setAttribute("placeholder", data.placeholderTitle);
      document.getElementById("label-title-create").innerText = data.labelTitle;
      document.getElementById("label-content-create").innerText =
        data.labelContent;
      document.getElementById("label-file-create").innerText = data.labelFile;
      document.getElementById("button-upload-image-create").innerText =
        data.buttonChangeFile;
      document.getElementById("close-create-modal-button").innerText =
        data.buttonCancel;

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
