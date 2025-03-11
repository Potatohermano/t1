const hoverElements = document.querySelectorAll(".c1");

hoverElements.forEach((hover) => {
  const img = hover.querySelector("img");

  hover.addEventListener("mouseover", () => {
    // Blur the image in this container
    if (img) {
      img.style.filter = "blur(2px)";
    }

    // Show other elements if needed (adjust selectors as necessary)
    document.querySelectorAll(".a1").forEach((el) => (el.style.opacity = "1"));

    // Hide other elements during hover
    document.querySelectorAll(".msg").forEach((el) => (el.style.opacity = "0"));
    document
      .querySelectorAll(".d1")
      .forEach((el) => (el.style.opacity = "0.7"));
    document.querySelectorAll(".e1").forEach((el) => (el.style.top = "37%"));
  });

  hover.addEventListener("mouseleave", () => {
    // Reset the blur effect on the image
    if (img) {
      img.style.filter = "blur(0px)";
    }

    // Reset other elements on mouse leave
    document.querySelectorAll(".a1").forEach((el) => (el.style.opacity = "0"));
    document.querySelectorAll(".msg").forEach((el) => (el.style.opacity = "1"));
    document.querySelectorAll(".d1").forEach((el) => (el.style.opacity = "0"));
    document.querySelectorAll(".e1").forEach((el) => (el.style.top = "100%"));
  });
});

const hoverElements2 = document.querySelectorAll(".c2");

hoverElements2.forEach((hover) => {
  const img = hover.querySelector("img");

  hover.addEventListener("mouseover", () => {
    // Blur the image in this container
    if (img) {
      img.style.filter = "blur(2px)";
    }

    // Show other elements if needed (adjust selectors as necessary)
    document.querySelectorAll(".a2").forEach((el) => (el.style.opacity = "1"));

    // Hide other elements during hover
    document.querySelectorAll(".msg").forEach((el) => (el.style.opacity = "0"));
    document
      .querySelectorAll(".d2")
      .forEach((el) => (el.style.opacity = "0.7"));
    document.querySelectorAll(".e2").forEach((el) => (el.style.top = "37%"));
  });

  hover.addEventListener("mouseleave", () => {
    // Reset the blur effect on the image
    if (img) {
      img.style.filter = "blur(0px)";
    }

    // Reset other elements on mouse leave
    document.querySelectorAll(".a2").forEach((el) => (el.style.opacity = "0"));
    document.querySelectorAll(".msg").forEach((el) => (el.style.opacity = "1"));
    document.querySelectorAll(".d2").forEach((el) => (el.style.opacity = "0"));
    document.querySelectorAll(".e2").forEach((el) => (el.style.top = "100%"));
  });
});

const hoverElements3 = document.querySelectorAll(".c3");

hoverElements3.forEach((hover) => {
  const img = hover.querySelector("img");

  hover.addEventListener("mouseover", () => {
    // Blur the image in this container
    if (img) {
      img.style.filter = "blur(2px)";
    }

    // Show other elements if needed (adjust selectors as necessary)
    document.querySelectorAll(".a3").forEach((el) => (el.style.opacity = "1"));

    // Hide other elements during hover
    document.querySelectorAll(".msg").forEach((el) => (el.style.opacity = "0"));
    document
      .querySelectorAll(".d3")
      .forEach((el) => (el.style.opacity = "0.7"));
    document.querySelectorAll(".e3").forEach((el) => (el.style.top = "37%"));
  });

  hover.addEventListener("mouseleave", () => {
    // Reset the blur effect on the image
    if (img) {
      img.style.filter = "blur(0px)";
    }

    // Reset other elements on mouse leave
    document.querySelectorAll(".a3").forEach((el) => (el.style.opacity = "0"));
    document.querySelectorAll(".msg").forEach((el) => (el.style.opacity = "1"));
    document.querySelectorAll(".d3").forEach((el) => (el.style.opacity = "0"));
    document.querySelectorAll(".e3").forEach((el) => (el.style.top = "100%"));
  });
});

const starsContainer = document.querySelector(".stars");
const numberOfStars = 275; // Adjust for star #

for (let i = 0; i < numberOfStars; i++) {
  const star = document.createElement("div");
  star.classList.add("star");

  // Random size
  const size = Math.random() * 0.5; // Customize size of stars
  star.style.width = `${size}vh`;
  star.style.height = `${size}vh`;

  // Random position
  star.style.top = `${Math.random() * 85}vh`;
  star.style.left = `${Math.random() * 100}vw`;

  // Optional: Random opacity
  star.style.opacity = Math.random();

  starsContainer.appendChild(star);
}
