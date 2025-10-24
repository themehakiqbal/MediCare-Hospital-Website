(() => {
  'use strict';
  const apptForm = document.getElementById('apptForm');
  if (apptForm) {
    apptForm.addEventListener('submit', event => {
      if (!apptForm.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      } else {
        event.preventDefault();
        showToast("✅ Appointment request submitted! We'll contact you soon.");
        apptForm.reset();
        apptForm.classList.remove('was-validated');
      }
      apptForm.classList.add('was-validated');
    });
  }
})();

(() => {
  'use strict';
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', event => {
      if (!contactForm.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      } else {
        event.preventDefault();
        showToast("✅ Your message has been sent! We'll get back to you soon.");
        contactForm.reset();
        contactForm.classList.remove('was-validated');
      }
      contactForm.classList.add('was-validated');
    });
  }
})();

document.querySelectorAll('.book-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const doctor = btn.dataset.doctor;
    const dept = btn.dataset.dept;
    const deptSelect = document.querySelector('#departmentA');
    const nameInput = document.querySelector('#fullName');

    document.querySelector('#appointments').scrollIntoView({ behavior: 'smooth' });

    if (deptSelect) {
      for (let option of deptSelect.options) {
        if (option.text.trim() === dept.trim()) {
          option.selected = true;
          break;
        }
      }
    }

    setTimeout(() => {
      if (nameInput) nameInput.focus();
    }, 800);

    showToast(`Booking with ${doctor} (${dept})`);
  });
});

function showToast(message) {

  const existing = document.querySelector('.custom-toast');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.className = 'custom-toast';
  toast.textContent = message;
  document.body.appendChild(toast);

  setTimeout(() => toast.classList.add('show'), 10);

  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => {
      if (toast.parentNode) toast.remove();
    }, 300);
  }, 3000);
}

document.addEventListener('DOMContentLoaded', () => {
  const backToTopBtn = document.getElementById('backToTopBtn');
  const scrollToBottomBtn = document.getElementById('scrollToBottomBtn');

  if (backToTopBtn) {
    window.addEventListener('scroll', () => {
      backToTopBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
    });

    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  if (scrollToBottomBtn) {
    scrollToBottomBtn.addEventListener('click', () => {
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    });
  }
});