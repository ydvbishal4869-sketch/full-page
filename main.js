const pageViews = document.querySelectorAll('.page-view');
const navButtons = document.querySelectorAll('.nav-btn');
const exploreEventsBtn = document.getElementById('exploreEventsBtn');
const tryDemosBtn = document.getElementById('tryDemosBtn');
const eventsSection = document.getElementById('eventsSection');

function showPage(pageName) {
  pageViews.forEach(view => {
    view.classList.toggle('active-view', view.dataset.view === pageName);
  });

  navButtons.forEach(button => {
    button.classList.toggle('active', button.dataset.page === pageName);
  });

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

navButtons.forEach(button => {
  button.addEventListener('click', event => {
    event.preventDefault();
    showPage(button.dataset.page);
  });
});

if (exploreEventsBtn && eventsSection) {
  exploreEventsBtn.addEventListener('click', () => {
    showPage('home');
    eventsSection.classList.add('show-events');
    setTimeout(() => {
      eventsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  });
}

if (tryDemosBtn) {
  tryDemosBtn.addEventListener('click', () => {
    showPage('portfolio');
  });
}

document.querySelectorAll('.open-enroll').forEach(button => {
  button.addEventListener('click', () => {
    showPage('enroll');
  });
});

const gradientPreview = document.getElementById('gradientPreview');
const gradientValue = document.getElementById('gradientValue');
const generateGradient = document.getElementById('generateGradient');

function randomHexColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
}

if (generateGradient && gradientPreview && gradientValue) {
  generateGradient.addEventListener('click', () => {
    const color1 = randomHexColor();
    const color2 = randomHexColor();
    const angle = Math.floor(Math.random() * 181);
    const gradient = `linear-gradient(${angle}deg, ${color1}, ${color2})`;
    gradientPreview.style.background = gradient;
    gradientValue.textContent = `Generated Gradient Values: ${gradient}`;
  });
}

document.querySelectorAll('.pdf-input').forEach(input => {
  input.addEventListener('change', event => {
    const file = event.target.files[0];
    if (!file) return;
    const viewer = document.getElementById(event.target.dataset.viewer);
    if (!viewer) return;
    viewer.src = URL.createObjectURL(file);
    viewer.style.display = 'block';
  });
});

function showMessage(formId, messageId) {
  const form = document.getElementById(formId);
  const message = document.getElementById(messageId);
  if (!form || !message) return;

  form.addEventListener('submit', event => {
    event.preventDefault();
    message.style.display = 'block';
    setTimeout(() => {
      form.reset();
    }, 300);
  });
}

showMessage('enrollForm', 'enrollMessage');
showMessage('contactForm', 'contactMessage');
