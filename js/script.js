
// document.addEventListener("DOMContentLoaded", () => {
//     let z = 10;
//     function bringToFront(el) {
//       el.style.zIndex = ++z;
//     }
//     clickableImages.forEach(img => {
//       img.addEventListener("click", () => bringToFront(img));
//     });
//   });

  window.addEventListener("DOMContentLoaded", () => {
    const img = document.getElementById("slide-img");
  
    // Delay the slide in by 100ms for a smoother effect
    setTimeout(() => {
      img.classList.add("slide-in");
    }, 100); 
  
    // Optional: slide out after 10s
    setTimeout(() => {
      img.classList.remove("slide-in");
    }, 10100);
  });