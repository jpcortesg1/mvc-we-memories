document.addEventListener("DOMContentLoaded", () => {
  // Show mobile menu on hamburger button click
  const hamburger = document.getElementById("hamburger");
  const mobileMenu = document.getElementById("mobile-menu");
  const normalMenu = document.getElementById("menu-no-mobile");
  const path = window.location.pathname.substring(1);

  // For load years in menu dynamically
  const curretnDate = new Date();
  let year = curretnDate.getFullYear();
  if (path !== "") {
    year = parseInt(path);
  }
  for (let i = 0; i < 4; i++) {
    let yearForItem = year - i;
    const item = `
        <a
          href="/${yearForItem}"
          class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium ${
            yearForItem === parseInt(path) ? "bg-gray-900 text-white" : ""
          }"
          >${yearForItem}</a
        >
    `;
    mobileMenu.children[0].insertAdjacentHTML("beforeend", item);
    normalMenu.insertAdjacentHTML("beforeend", item);
  }

  // Toggle hidden class on mobile menu
  hamburger.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });

  // Hide mobile menu on click outside
  hamburger.addEventListener("blur", () => {
    setTimeout(() => {
      mobileMenu.classList.add("hidden");
    }, 100);
  });

  // Show dropdown menu on profile button click
  const profileMenu = document.getElementById("profile-menu");
  const profileButton = document.getElementById("profile-button");

  profileButton.addEventListener("click", () => {
    profileMenu.classList.toggle("hidden");
  });

  // Hide dropdown menu on click outside
  profileButton.addEventListener("blur", () => {
    setTimeout(() => {
      profileMenu.classList.add("hidden");
    }, 100);
  });

  // Change language
  const changeLanguage = async (lang) => {
    try {
      const res = await fetch(`/change-language/${lang}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      const { status } = data;

      if (status !== 200) {
        console.log(data);
        throw new Error("Error changing language");
      }

      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  // Change language buttons
  const changeLanguageSpanishButton = document.getElementById(
    "change-language-spanish"
  );
  const changeLanguageEnglishButton = document.getElementById(
    "change-language-english"
  );
  const buttonsLanguage = [
    changeLanguageSpanishButton,
    changeLanguageEnglishButton,
  ];

  buttonsLanguage.forEach((button) => {
    button.addEventListener("click", (e) => {
      const lang = e.target.name;
      changeLanguage(lang);
    });
  });
});
