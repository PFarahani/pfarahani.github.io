// FIXED NAVBAR ON SCROLL
document.addEventListener('DOMContentLoaded', function () {

  window.addEventListener('scroll', function () {

    if (window.scrollY > 400) {
      document.getElementById('navbar-top').classList.add('fixed-top');
    } else {
      document.getElementById('navbar-top').classList.remove('fixed-top');
    }
  });
});



// TYPEWRITING EFFECT
class TxtType {
  constructor(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
  }
  tick() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }

    setTimeout(function () {
      that.tick();
    }, delta);
  }
}


window.onload = function () {
  var elements = document.getElementsByClassName('typewrite');
  for (var i = 0; i < elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-type');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtType(elements[i], JSON.parse(toRotate), period);
    }
  }
  // Inject CSS
  var css = document.createElement('style');
  css.innerHTML = `
  .typewrite > .wrap {
      border-right: 0.08em solid #fff;
      padding-right: 0.2rem;
      animation: blink-caret 1s step-end infinite;
  }
  @keyframes blink-caret {
      from, to { border-color: #fff; }
      50% { border-color: transparent; }
  }
`;
  document.body.appendChild(css);
};



// SECTION ANIMATION
window.addEventListener('scroll', function () {

  const reveals = document.querySelectorAll('.reveal');
  const windowHeight = window.innerHeight;
  const elementVisibleThreshold = 10;

  // Loop through the elements and check if they should be revealed
  reveals.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;

    if (elementTop < windowHeight - elementVisibleThreshold) {
      element.classList.add('active');
    }
    // else {
    //   reveals[i].classList.remove('active');
    // }
  });
});



// EXPAND/COLLAPSE EXPERIENCE TIMELINE
document.addEventListener('DOMContentLoaded', function () {
  const timeline = document.querySelector('.timeline');
  const experience = document.querySelectorAll('.experience');
  const toggleCheckbox = document.getElementById('exp-toggle');
  const toggleLabel = document.getElementById('exp-expand-collapse');

  let ExpInitialHeight = 0;
  let ExpMaximumHeight = 0;

  // Function to recalculate heights
  function calculateHeights() {
    ExpInitialHeight = 0;
    for (let i = 0; i < 2 && i < experience.length; i++) {
      ExpInitialHeight += experience[i].offsetHeight;
    }

    ExpMaximumHeight = 0;
    experience.forEach(experience => {
      ExpMaximumHeight += experience.offsetHeight;
    });

    // Update UI state
    if (ExpInitialHeight === ExpMaximumHeight) {
      toggleLabel.classList.add('no-collapse');
    } else {
      toggleLabel.classList.remove('no-collapse');
    }

    // Apply current height based on checkbox state
    timeline.style.maxHeight = toggleCheckbox.checked 
      ? `${ExpMaximumHeight}px` 
      : `${ExpInitialHeight}px`;
  }

  // Initial calculation
  calculateHeights();

  // Debounced resize handler
  let resizeTimeout;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      calculateHeights();
    }, 200); // Adjust debounce time as needed
  });

  // Toggle logic
  toggleCheckbox.addEventListener('change', () => {
    calculateHeights();
    timeline.style.maxHeight = toggleCheckbox.checked 
      ? `${ExpMaximumHeight}px` 
      : `${ExpInitialHeight}px`;
  });
});


// DISPLAY SKILL CATEGORY
document.addEventListener('DOMContentLoaded', function () {
  var softwareElement = document.getElementById('software');
  var programmingElement = document.getElementById('programming');

  // Set the element to none on page load (refresh)
  softwareElement.style.display = 'none';
  programmingElement.style.display = 'none';

  // 'software' category
  document.getElementById('category-software').addEventListener('click', function () {
    if (softwareElement.style.display === 'none' || softwareElement.style.display === '') {
      softwareElement.style.display = 'flex';
      programmingElement.style.display = 'none';
    } else {
      softwareElement.style.display = 'none';
    }
  });

  // 'programming' category
  document.getElementById('category-programming').addEventListener('click', function () {
    if (programmingElement.style.display === 'none' || programmingElement.style.display === '') {
      programmingElement.style.display = 'flex';
      softwareElement.style.display = 'none';
    } else {
      programmingElement.style.display = 'none';
    }
  });
});


// SKILL PROGRESS BAR
document.addEventListener('DOMContentLoaded', function () {
  const progressBars = document.querySelectorAll('.progress-circle');

  progressBars.forEach((progressBar) => {
    const progress = progressBar.getAttribute('data-progress');
    progressBar.style.setProperty('--progress', progress + '%');
  });
});



// PROJECT DETAILS ANIMATION
document.addEventListener('DOMContentLoaded', function () {
  const detailsButtons = document.querySelectorAll('.project-details-button');

  detailsButtons.forEach((detailsButton) => {
    const parentProject = detailsButton.closest('.project');
    const details = parentProject.querySelector('.project-details');

    details.style.display = 'none';

    detailsButton.addEventListener('click', () => {
      if (details.style.display === 'none' || details.style.display === '') {
        details.classList.remove('fade-out-left');
        details.classList.add('fade-in-left');
        details.style.display = 'block';
      } else {
        details.classList.remove('fade-in-left');
        details.classList.add('fade-out-left');
        details.style.display = 'none';
      }
    });
  });
});




// EXPAND/COLLAPSE PROJECTS
document.addEventListener('DOMContentLoaded', function () {
  const projectContainer = document.querySelector('.projects-container');
  const toggleCheckbox = document.getElementById('proj-toggle');
  const toggleLabel = document.getElementById('proj-expand-collapse');
  const parentSelector = '#projects-section .container .projects-container';

  const numDefaultVisibleChildren = 3;
  const numMaxChildren = document.querySelector(parentSelector).children.length;


  function calculateHeight(containerSelector, numVisibleChildren) {
    const container = document.querySelector(containerSelector);
    if (!container) {
      console.error(`Container with ID ${containerSelector} not found.`);
      return 0;
    }

    // Calculate the maximum height of the container before modifying nested children

    const children = container.querySelectorAll(`:scope > :nth-child(-n+${numVisibleChildren})`);
    let maxHeight = 0;

    children.forEach((child) => {
      const description = child.querySelector('.project-description');
      const details = child.querySelector('.project-details');

      // Store the original display value
      const originalDisplayValues = [];
      originalDisplayValues.push(getComputedStyle(details).display);
      details.style.display = 'block'; // Set display to 'block' temporarily

      // For some reason .description is not included in the child already
      maxHeight += child.offsetHeight + description.offsetHeight;

      // Restore the original display values
      details.style.display = originalDisplayValues[0];
    });

    // Return the original height of the container
    return maxHeight;
  }

  const ProjInitialHeight = calculateHeight(parentSelector, numDefaultVisibleChildren);
  const ProjMaximumHeight = calculateHeight(parentSelector, numMaxChildren);


  if (ProjInitialHeight === ProjMaximumHeight) {
    toggleLabel.classList.add('no-collapse');
  }

  projectContainer.style.maxHeight = `${ProjInitialHeight}px`;

  document.querySelectorAll('.project:nth-child(n+4)').forEach((element) => {
    element.style.display = 'none';
  });

  toggleCheckbox.addEventListener('change', () => {
    const isChecked = toggleCheckbox.checked;

    document.querySelectorAll('.project:nth-child(n+4)').forEach((element) => {
      if (isChecked) {
        element.classList.remove('fade-down');
        element.classList.add('fade-up');
        projectContainer.style.maxHeight = `${ProjMaximumHeight}px`;
        element.style.display = 'block';
      } else {
        element.classList.remove('fade-up');
        element.classList.add('fade-down');
        projectContainer.style.maxHeight = `${ProjInitialHeight}px`;
        element.style.display = 'none';
      }
    });
  });
});



// // WEBSITE LOADER
// function showLoader() {
//   document.getElementById('loader').style.display = 'flex';
// }

// function hideLoader() {
//   document.getElementById('loader').style.display = 'none';
// }

// function loading() {
//   showLoader();

//   setTimeout(function () {
//       hideLoader();
//   }, 3000);
// }
// loading();
