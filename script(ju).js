document.addEventListener('DOMContentLoaded', function() {
    const sib = document.querySelector('.sib');
    const dropdown = document.getElementById('dropdown');
    const clubStructureButton = document.querySelector('.clubs');
  
    // Toggle dropdown visibility
    sib.addEventListener('click', function(event) {
      event.stopPropagation(); // Prevent event from propagating to document
      if (dropdown.classList.contains('hidden')) {
        dropdown.classList.remove('hidden');
        dropdown.style.display = 'block'; // Ensure display block before animation
        dropdown.style.animation = 'dropdownAnimation 0.2s forwards'; // Start animation
      } else {
        dropdown.style.animation = 'reverseDropdownAnimation 0.2s forwards'; // Trigger reverse animation
        setTimeout(function() {
          dropdown.classList.add('hidden');
          dropdown.style.display = 'none';
        }, 200); // Match this duration to animation duration for smooth hide
      }
    });
  
    // Hide dropdown when clicking outside
    document.addEventListener('click', function(event) {
      if (!dropdown.contains(event.target) && !sib.contains(event.target)) {
        if (!dropdown.classList.contains('hidden')) {
          dropdown.style.animation = 'reverseDropdownAnimation 0.2s forwards'; // Trigger reverse animation
          setTimeout(function() {
            dropdown.classList.add('hidden');
            dropdown.style.display = 'none';
          }, 200); // Match this duration to animation duration for smooth hide
        }
      }
    });
  
    // Scroll to the club structure section
    clubStructureButton.addEventListener('click', function(event) {
      event.preventDefault();
      document.querySelector('section[about="club-structure"]').scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
    a
    document.addEventListener('DOMContentLoaded', function() {
      // Get the clubs element and the target section
      const clubs = document.querySelector('.clubs');
      const targetSection = document.getElementById('scroll-target'); // Replace with the ID of the section you want to scroll to
  
      // Add a click event listener to the clubs element
      clubs.addEventListener('click', function() {
        targetSection.scrollIntoView({ behavior: 'smooth' });
      });
    });