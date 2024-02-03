document.addEventListener("DOMContentLoaded", () => {
  // Show mobile menu on hamburger button click
  const hamburger = document.getElementById("hamburger");
  const mobileMenu = document.getElementById("mobile-menu");

  // Toggle hidden class on mobile menu
  hamburger.addEventListener("click", () => {
    console.log("hola");
    mobileMenu.classList.toggle("hidden");
    mobileMenu.classList.toggle("pointer-events-none");
  });

  // Hide mobile menu on click outside
  // hamburger.addEventListener("blur", () => {
  //   mobileMenu.classList.add("hidden");
  // });

  // Show dropdown menu on profile button click
  const profileMenu = document.getElementById("profile-menu");
  const profileButton = document.getElementById("profile-button");

  profileButton.addEventListener("click", () => {
    profileMenu.classList.toggle("hidden");
    profileMenu.classList.toggle("pointer-events-none");
  });

  // Hide dropdown menu on click outside
  profileButton.addEventListener("blur", () => {
    setTimeout(() => {
      profileMenu.classList.add("hidden");
    }, 10);
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
        console.log(data)
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
