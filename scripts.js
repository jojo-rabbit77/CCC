// // scripts.js

// document.addEventListener('DOMContentLoaded', () => {
//     // Grab all sections with .content-section
//     const sections = document.querySelectorAll('.content-section');
  
//     // Callback for intersection observer
//     const observerCallback = (entries, observer) => {
//       entries.forEach(entry => {
//         if (entry.isIntersecting) {
//           // Add the .observed class to trigger unique animation
//           entry.target.classList.add('observed');
//           // Optionally unobserve once animation is applied
//           observer.unobserve(entry.target);
//         }
//       });
//     };
  
//     // Options for intersection observer
//     const observerOptions = {
//       root: null,           // use the browser viewport as the container
//       rootMargin: '0px',    // margin around the root
//       threshold: 0.2        // trigger when 20% of the section is visible
//     };
  
//     // Create the observer
//     const observer = new IntersectionObserver(observerCallback, observerOptions);
  
//     // Observe each .content-section
//     sections.forEach(section => {
//       observer.observe(section);
//     });
//   });
  
// scripts.js

// scripts.js

document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.content-section');
  
    const observerCallback = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('observed');
          observer.unobserve(entry.target);
        }
      });
    };
  
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.2
    };
  
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sections.forEach(section => observer.observe(section));
  });
  