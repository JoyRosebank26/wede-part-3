const accordionHeaders = document.querySelectorAll('.accordion-header');

accordionHeaders.forEach(header => {
  header.addEventListener('click', function () {
    const content = this.nextElementSibling;
    content.classList.toggle('open');
  });
});

function openTab(evt, tabName) {
  const contents = document.querySelectorAll('.tab-content');
  contents.forEach(content => content.style.display = 'none');

  const buttons = document.querySelectorAll('.tab-btn');
  buttons.forEach(btn => btn.classList.remove('active'));

  document.getElementById(tabName).style.display = 'block';
  evt.currentTarget.classList.add('active');
}

const galleryImages = document.querySelectorAll('.gallery-img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const captionText = document.getElementById('caption');
const closeBtn = document.querySelector('.close-btn');

if (lightbox) {
  galleryImages.forEach(img => {
    img.addEventListener('click', function () {
      lightbox.classList.add('show');
      lightboxImg.src = this.src;
      captionText.innerHTML = this.alt;
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', function () {
      lightbox.classList.remove('show');
    });
  }

  lightbox.addEventListener('click', function (e) {
    if (e.target !== lightboxImg && e.target !== closeBtn) {
      lightbox.classList.remove('show');
    }
  });
}

const oydpPrograms = [
  { id: 1, title: 'Computer Literacy Course', category: 'skills', description: 'Hands-on basic and intermediate computer training for job seekers.' },
  { id: 2, title: 'Community Park Clean-Up', category: 'community', description: 'Weekly environmental restoration and parks maintenance drives.' },
  { id: 3, title: 'Youth Career Mentorship', category: 'mentorship', description: 'One-on-one professional guidance for matric graduates.' },
  { id: 4, title: 'Web Scripting Workshop', category: 'skills', description: 'Introductory HTML, CSS, and JS practical coding sessions.' },
  { id: 5, title: 'Youth Sports & Leadership', category: 'community', description: 'Team building and physical wellness initiatives for local youth.' }
];

const container = document.getElementById('dynamicCardContainer');
const searchInput = document.getElementById('programSearch');
const categorySelect = document.getElementById('categoryFilter');

function renderPrograms(programsList) {
  if (!container) return;
  
  container.innerHTML = '';

  if (programsList.length === 0) {
    container.innerHTML = '<p>No matching programs found.</p>';
    return;
  }

  programsList.forEach(program => {
    const card = document.createElement('div');
    card.className = 'card';

    const badge = document.createElement('span');
    badge.className = 'badge';
    badge.textContent = program.category.toUpperCase();

    const title = document.createElement('h3');
    title.textContent = program.title;

    const desc = document.createElement('p');
    desc.textContent = program.description;

    card.appendChild(badge);
    card.appendChild(title);
    card.appendChild(desc);
    container.appendChild(card);
  });
}

function filterPrograms() {
  const searchTerm = searchInput.value.toLowerCase();
  const selectedCategory = categorySelect.value;

  const filtered = oydpPrograms.filter(program => {
    const matchesSearch = program.title.toLowerCase().includes(searchTerm) || 
                          program.description.toLowerCase().includes(searchTerm);
    const matchesCategory = selectedCategory === 'all' || program.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  renderPrograms(filtered);
}

if (container) {
  renderPrograms(oydpPrograms);
  searchInput.addEventListener('input', filterPrograms);
  categorySelect.addEventListener('change', filterPrograms);
}


const simpleItems = [
  { title: "Skills Workshop", desc: "Free practical computer training." },
  { title: "Park Clean-Up", desc: "Weekly community environment project." },
  { title: "Youth Mentorship", desc: "Career guidance for matric graduates." }
];


if (container) {
  simpleItems.forEach(item => {
    container.innerHTML += `
      <div class="simple-card">
        <h3>${item.title}</h3>
        <p>${item.desc}</p>
      </div>
    `;
  });
}

// --- REGISTRATION FORM VALIDATION ---
const regForm = document.getElementById('registrationForm');

if (regForm) {
  regForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const fullName = document.getElementById('fullName').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();

    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const phoneError = document.getElementById('phoneError');
    const formSuccess = document.getElementById('formSuccess');

    nameError.textContent = '';
    emailError.textContent = '';
    phoneError.textContent = '';
    formSuccess.textContent = '';

    let isValid = true;

    if (fullName === '') {
      nameError.textContent = 'Please enter your full name.';
      isValid = false;
    }

    if (email === '' || !email.includes('@') || !email.includes('.')) {
      emailError.textContent = 'Please enter a valid email address.';
      isValid = false;
    }

    if (phone === '' || phone.length < 10) {
      phoneError.textContent = 'Please enter a valid 10-digit phone number.';
      isValid = false;
    }

    if (isValid) {
      formSuccess.textContent = 'Thank you! Your OYDP registration has been submitted successfully.';
      regForm.reset(); 
    }
  });
}

// --- CONTACT FORM VALIDATION ---
const contactForm = document.getElementById('contactForm');

if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const contactName = document.getElementById('contactName').value.trim();
    const contactEmail = document.getElementById('contactEmail').value.trim();
    const contactMessage = document.getElementById('contactMessage').value.trim();

    const contactNameError = document.getElementById('contactNameError');
    const contactEmailError = document.getElementById('contactEmailError');
    const contactMessageError = document.getElementById('contactMessageError');
    const contactSuccess = document.getElementById('contactSuccess');

    contactNameError.textContent = '';
    contactEmailError.textContent = '';
    contactMessageError.textContent = '';
    contactSuccess.textContent = '';

    let isValid = true;

    if (contactName === '') {
      contactNameError.textContent = 'Please enter your name.';
      isValid = false;
    }

    if (contactEmail === '' || !contactEmail.includes('@') || !contactEmail.includes('.')) {
      contactEmailError.textContent = 'Please enter a valid email address.';
      isValid = false;
    }

    if (contactMessage === '') {
      contactMessageError.textContent = 'Please enter your message.';
      isValid = false;
    }

    if (isValid) {
      contactSuccess.textContent = 'Thank you! Your message has been sent successfully.';
      contactForm.reset();
    }
  });
}