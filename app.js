const hoverElements = document.querySelectorAll(".c1");

hoverElements.forEach((hover) => {
  const img = hover.querySelector("img");

  hover.addEventListener("mouseover", () => {
    // Blur the image in this container
    if (img) {
      img.style.filter = "blur(2px)";
    }

    // Show other elements if needed (adjust selectors as necessary)
    document
      .querySelectorAll(".a1, .b1")
      .forEach((el) => (el.style.opacity = "1"));

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
    document
      .querySelectorAll(".a1, .b1")
      .forEach((el) => (el.style.opacity = "0"));
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
    document
      .querySelectorAll(".a2, .b2")
      .forEach((el) => (el.style.opacity = "1"));

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
    document
      .querySelectorAll(".a2, .b2")
      .forEach((el) => (el.style.opacity = "0"));
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
    document
      .querySelectorAll(".a3, .b3")
      .forEach((el) => (el.style.opacity = "1"));

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
    document
      .querySelectorAll(".a3, .b3")
      .forEach((el) => (el.style.opacity = "0"));
    document.querySelectorAll(".msg").forEach((el) => (el.style.opacity = "1"));
    document.querySelectorAll(".d3").forEach((el) => (el.style.opacity = "0"));
    document.querySelectorAll(".e3").forEach((el) => (el.style.top = "100%"));
  });
});
