
document.addEventListener('DOMContentLoaded', function () {

  // ── Sticky Header Shadow ──
  var header = document.getElementById('header');
  if (header) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 20) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  }

  // ── Mobile Menu Toggle ──
  var menuToggle = document.getElementById('menuToggle');
  var mobileNav = document.getElementById('mobileNav');

  if (menuToggle && mobileNav) {
    menuToggle.addEventListener('click', function () {
      menuToggle.classList.toggle('active');
      mobileNav.classList.toggle('open');
    });

    // Close mobile menu when a link is clicked
    mobileNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        menuToggle.classList.remove('active');
        mobileNav.classList.remove('open');
      });
    });
  }

  // ── Smooth Scroll for Anchor Links ──
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var targetId = this.getAttribute('href');
      if (targetId === '#') return;
      var target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        var headerHeight = header ? header.offsetHeight : 0;
        var targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // ── Gallery Carousel ──
  var currentSlide = 0;
  var gallerySlides = document.querySelectorAll('.gallery-slide');
  var totalSlides = gallerySlides.length;
  var track = document.getElementById('galleryTrack');
  var dotsContainer = document.getElementById('galleryDots');

  if (track && totalSlides > 0) {
    // Create dots
    for (var i = 0; i < totalSlides; i++) {
      var dot = document.createElement('button');
      dot.className = 'gallery-dot' + (i === 0 ? ' active' : '');
      dot.setAttribute('aria-label', 'Go to slide ' + (i + 1));
      dot.setAttribute('data-index', i);
      dot.addEventListener('click', function () {
        goToSlide(parseInt(this.getAttribute('data-index')));
      });
      dotsContainer.appendChild(dot);
    }

    function goToSlide(index) {
      currentSlide = index;
      if (currentSlide < 0) currentSlide = totalSlides - 1;
      if (currentSlide >= totalSlides) currentSlide = 0;
      track.style.transform = 'translateX(-' + (currentSlide * 100) + '%)';
      updateDots();
    }

    function updateDots() {
      if (dotsContainer) {
        dotsContainer.querySelectorAll('.gallery-dot').forEach(function (dot, idx) {
          dot.classList.toggle('active', idx === currentSlide);
        });
      }
    }

    // Auto-slide every 2 seconds
    var autoSlide = setInterval(function () {
      goToSlide(currentSlide + 1);
    }, 2000);

    // Pause on hover
    var carousel = document.querySelector('.gallery-carousel');
    if (carousel) {
      carousel.addEventListener('mouseenter', function () {
        clearInterval(autoSlide);
      });
      carousel.addEventListener('mouseleave', function () {
        autoSlide = setInterval(function () {
          goToSlide(currentSlide + 1);
        }, 2000);
      });
    }

    // Expose gallerySlide globally for button onclick
    window.gallerySlide = function (direction) {
      goToSlide(currentSlide + direction);
    };
  }

  // ── Scroll Animations (Intersection Observer) ──
  var fadeElements = document.querySelectorAll(
    '.consultancy-card, .course-card, .resource-card, .team-card, .blog-card, .specialty-tag, .donate-card, .bank-card, .impact-card, .faq-item'
  );

  fadeElements.forEach(function (el) {
    el.classList.add('fade-in');
  });

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
  });

  fadeElements.forEach(function (el) {
    observer.observe(el);
  });

  // ── Active Nav Link Highlighting ──
  var sections = document.querySelectorAll('section[id]');
  var navLinks = document.querySelectorAll('#desktopNav a:not(.nav-donate-link), #mobileNav a:not(.nav-donate-link):not(.btn-join-mobile)');

  window.addEventListener('scroll', function () {
    var scrollY = window.pageYOffset;
    sections.forEach(function (section) {
      var sectionTop = section.offsetTop - 100;
      var sectionHeight = section.offsetHeight;
      var sectionId = section.getAttribute('id');

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        navLinks.forEach(function (link) {
          link.classList.remove('active-nav');
          if (link.getAttribute('href') === '#' + sectionId) {
            link.classList.add('active-nav');
          }
        });
      }
    });
  });

  // ── FAQ Accordion ──
  var faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(function (item) {
    var question = item.querySelector('.faq-question');
    if (question) {
      question.addEventListener('click', function () {
        var isActive = item.classList.contains('active');
        // Close all FAQs
        faqItems.forEach(function (otherItem) {
          otherItem.classList.remove('active');
          var otherBtn = otherItem.querySelector('.faq-question');
          if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
        });
        // Toggle current
        if (!isActive) {
          item.classList.add('active');
          question.setAttribute('aria-expanded', 'true');
        }
      });
    }
  });

  // ── Notification Toast (only on index page) ──
  if (document.getElementById('hero')) {
    setTimeout(function () {
      var notification = document.createElement('div');
      notification.className = 'notification-toast';
      notification.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg> Welcome to ARC! Explore our latest courses.';
      document.body.appendChild(notification);

      setTimeout(function () {
        notification.classList.add('show');
      }, 50);

      setTimeout(function () {
        notification.classList.remove('show');
        setTimeout(function () {
          notification.remove();
        }, 300);
      }, 5000);
    }, 2000);
  }


  // ═══════════════════════════════════════════════════════
  //   DONATION MODAL LOGIC
  // ═══════════════════════════════════════════════════════

  var donateModal = document.getElementById('donateModal');
  var donateModalTitle = document.getElementById('donateModalTitle');
  var donateModalClose = document.getElementById('donateModalClose');

  // State
  var donateState = {
    category: '',
    amount: 0,
    name: '',
    email: '',
    phone: '',
    message: '',
    paymentMethod: '',
    currentStep: 1
  };

  // ── Open Modal ──
  var donateButtons = document.querySelectorAll('.btn-donate-action[data-category]');
  donateButtons.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      var category = this.getAttribute('data-category');
      donateState.category = category;
      donateState.currentStep = 1;
      donateState.amount = 0;
      donateState.name = '';
      donateState.email = '';
      donateState.phone = '';
      donateState.message = '';
      donateState.paymentMethod = '';

      // Set title
      donateModalTitle.textContent = category;

      // Reset form
      resetDonateForm();

      // Show modal
      donateModal.classList.add('active');
      donateModal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';

      // Update steps
      updateStepUI(1);
    });
  });

  // ── Close Modal ──
  function closeDonateModal() {
    donateModal.classList.remove('active');
    donateModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  if (donateModalClose) {
    donateModalClose.addEventListener('click', closeDonateModal);
  }

  // Close on overlay click
  if (donateModal) {
    donateModal.addEventListener('click', function (e) {
      if (e.target === donateModal) {
        closeDonateModal();
      }
    });
  }

  // Close on ESC
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && donateModal && donateModal.classList.contains('active')) {
      closeDonateModal();
    }
  });

  // ── Reset Form ──
  function resetDonateForm() {
    // Reset amount buttons
    document.querySelectorAll('.donate-amount-btn').forEach(function (btn) {
      btn.classList.remove('selected');
    });
    var customAmount = document.getElementById('customAmount');
    if (customAmount) customAmount.value = '';

    // Reset donor info
    var donorName = document.getElementById('donorName');
    var donorEmail = document.getElementById('donorEmail');
    var donorPhone = document.getElementById('donorPhone');
    var donorMessage = document.getElementById('donorMessage');
    if (donorName) donorName.value = '';
    if (donorEmail) donorEmail.value = '';
    if (donorPhone) donorPhone.value = '';
    if (donorMessage) donorMessage.value = '';

    // Clear errors
    document.querySelectorAll('.donate-field-error').forEach(function (err) {
      err.textContent = '';
    });
    document.querySelectorAll('.donate-form-group input, .donate-form-group textarea').forEach(function (inp) {
      inp.classList.remove('error');
    });

    // Reset payment
    document.querySelectorAll('input[name="paymentMethod"]').forEach(function (radio) {
      radio.checked = false;
    });
    var paymentInstructions = document.getElementById('donatePaymentInstructions');
    if (paymentInstructions) paymentInstructions.style.display = 'none';

    // Enable/disable buttons
    var nextStep1 = document.getElementById('donateNextStep1');
    if (nextStep1) nextStep1.disabled = true;
    var nextStep3 = document.getElementById('donateNextStep3');
    if (nextStep3) nextStep3.disabled = true;

    // Show step 1 content, hide others
    document.querySelectorAll('.donate-step-content').forEach(function (content) {
      content.classList.remove('active');
    });
    var step1 = document.getElementById('donateStep1');
    if (step1) step1.classList.add('active');
  }

  // ── Update Step UI ──
  function updateStepUI(step) {
    donateState.currentStep = step;

    // Update step indicators
    document.querySelectorAll('.donate-step').forEach(function (stepEl) {
      var stepNum = parseInt(stepEl.getAttribute('data-step'));
      stepEl.classList.remove('active', 'completed');
      if (stepNum === step) {
        stepEl.classList.add('active');
      } else if (stepNum < step) {
        stepEl.classList.add('completed');
      }
    });

    // Update step lines
    document.querySelectorAll('.donate-step-line').forEach(function (line, index) {
      line.classList.remove('active');
      if (index < step - 1) {
        line.classList.add('active');
      }
    });

    // Show/hide step content
    document.querySelectorAll('.donate-step-content').forEach(function (content) {
      content.classList.remove('active');
    });

    if (step === 1) {
      var step1 = document.getElementById('donateStep1');
      if (step1) step1.classList.add('active');
    } else if (step === 2) {
      var step2 = document.getElementById('donateStep2');
      if (step2) step2.classList.add('active');
    } else if (step === 3) {
      var step3 = document.getElementById('donateStep3');
      if (step3) step3.classList.add('active');
    } else if (step === 4) {
      var step4 = document.getElementById('donateStep4');
      if (step4) step4.classList.add('active');
      populateSummary();
    } else if (step === 5) {
      var stepSuccess = document.getElementById('donateStepSuccess');
      if (stepSuccess) stepSuccess.classList.add('active');
    }
  }

  // ── Step 1: Amount Selection ──
  var amountButtons = document.querySelectorAll('.donate-amount-btn');
  var customAmountInput = document.getElementById('customAmount');
  var nextStep1Btn = document.getElementById('donateNextStep1');
  var cancelStep1Btn = document.getElementById('donateCancelStep1');

  amountButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      // Deselect all
      amountButtons.forEach(function (b) { b.classList.remove('selected'); });
      // Select this
      this.classList.add('selected');
      donateState.amount = parseInt(this.getAttribute('data-amount'));
      // Clear custom input
      if (customAmountInput) customAmountInput.value = '';
      // Enable next
      if (nextStep1Btn) nextStep1Btn.disabled = false;
    });
  });

  if (customAmountInput) {
    customAmountInput.addEventListener('input', function () {
      var val = parseInt(this.value);
      if (val > 0) {
        donateState.amount = val;
        // Deselect preset buttons
        amountButtons.forEach(function (b) { b.classList.remove('selected'); });
        if (nextStep1Btn) nextStep1Btn.disabled = false;
      } else {
        if (nextStep1Btn) nextStep1Btn.disabled = true;
      }
    });
  }

  if (nextStep1Btn) {
    nextStep1Btn.addEventListener('click', function () {
      if (donateState.amount > 0) {
        updateStepUI(2);
      }
    });
  }

  if (cancelStep1Btn) {
    cancelStep1Btn.addEventListener('click', closeDonateModal);
  }

  // ── Step 2: Donor Details ──
  var nextStep2Btn = document.getElementById('donateNextStep2');
  var backStep2Btn = document.getElementById('donateBackStep2');

  if (nextStep2Btn) {
    nextStep2Btn.addEventListener('click', function () {
      if (validateStep2()) {
        donateState.name = document.getElementById('donorName').value.trim();
        donateState.email = document.getElementById('donorEmail').value.trim();
        donateState.phone = document.getElementById('donorPhone').value.trim();
        donateState.message = document.getElementById('donorMessage').value.trim();
        updateStepUI(3);
      }
    });
  }

  if (backStep2Btn) {
    backStep2Btn.addEventListener('click', function () {
      updateStepUI(1);
    });
  }

  function validateStep2() {
    var valid = true;
    var nameInput = document.getElementById('donorName');
    var emailInput = document.getElementById('donorEmail');
    var phoneInput = document.getElementById('donorPhone');
    var nameError = document.getElementById('donorNameError');
    var emailError = document.getElementById('donorEmailError');
    var phoneError = document.getElementById('donorPhoneError');

    // Reset errors
    nameInput.classList.remove('error');
    emailInput.classList.remove('error');
    phoneInput.classList.remove('error');
    nameError.textContent = '';
    emailError.textContent = '';
    phoneError.textContent = '';

    // Validate name
    if (!nameInput.value.trim()) {
      nameInput.classList.add('error');
      nameError.textContent = 'Please enter your name';
      valid = false;
    }

    // Validate email
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailInput.value.trim()) {
      emailInput.classList.add('error');
      emailError.textContent = 'Please enter your email';
      valid = false;
    } else if (!emailRegex.test(emailInput.value.trim())) {
      emailInput.classList.add('error');
      emailError.textContent = 'Please enter a valid email address';
      valid = false;
    }

    // Validate phone
    if (!phoneInput.value.trim()) {
      phoneInput.classList.add('error');
      phoneError.textContent = 'Please enter your phone number';
      valid = false;
    } else if (phoneInput.value.trim().replace(/\D/g, '').length < 10) {
      phoneInput.classList.add('error');
      phoneError.textContent = 'Please enter a valid phone number';
      valid = false;
    }

    return valid;
  }

  // ── Step 3: Payment Method ──
  var nextStep3Btn = document.getElementById('donateNextStep3');
  var backStep3Btn = document.getElementById('donateBackStep3');
  var paymentInstructions = document.getElementById('donatePaymentInstructions');
  var paymentInstructionsInner = document.getElementById('donatePaymentInstructionsInner');

  document.querySelectorAll('input[name="paymentMethod"]').forEach(function (radio) {
    radio.addEventListener('change', function () {
      donateState.paymentMethod = this.value;
      if (nextStep3Btn) nextStep3Btn.disabled = false;
      showPaymentInstructions(this.value);
    });
  });

  function showPaymentInstructions(method) {
    if (!paymentInstructions || !paymentInstructionsInner) return;

    var html = '';

    if (method === 'bkash') {
      html = '<p><strong>bKash Payment Instructions:</strong></p>' +
             '<p>1. Open your bKash app</p>' +
             '<p>2. Go to "Send Money"</p>' +
             '<p>3. Enter number: <strong>+880 1712-534626</strong></p>' +
             '<p>4. Amount: <strong>' + formatAmount(donateState.amount) + ' BDT</strong></p>' +
             '<p>5. Reference: <strong>ARC Donation - ' + donateState.category + '</strong></p>' +
             '<p>6. Complete the transaction and keep the Transaction ID</p>';
    } else if (method === 'nagad') {
      html = '<p><strong>Nagad Payment Instructions:</strong></p>' +
             '<p>1. Open your Nagad app</p>' +
             '<p>2. Go to "Send Money"</p>' +
             '<p>3. Enter number: <strong>+880 1712-534626</strong></p>' +
             '<p>4. Amount: <strong>' + formatAmount(donateState.amount) + ' BDT</strong></p>' +
             '<p>5. Reference: <strong>ARC Donation - ' + donateState.category + '</strong></p>' +
             '<p>6. Complete the transaction and keep the Transaction ID</p>';
    } else if (method === 'bank') {
      html = '<p><strong>Bank Transfer Details:</strong></p>' +
             '<p>Bank: <strong>Sonali Bank PLC</strong></p>' +
             '<p>Account Name: <strong>ARC Research Center</strong></p>' +
             '<p>Account No: <strong>4416402001281</strong></p>' +
             '<p>Branch: <strong>Rajshahi University Campus</strong></p>' +
             '<p>Amount: <strong>' + formatAmount(donateState.amount) + ' BDT</strong></p>' +
             '<p>Please mention "ARC Donation - ' + donateState.category + '" in the transfer reference.</p>';
    } else if (method === 'cash') {
      html = '<p><strong>Cash / In Person:</strong></p>' +
             '<p>Please visit our office with your donation:</p>' +
             '<p><strong>ARC Research Center</strong></p>' +
             '<p>Rabindra Bhaban, Department of Law</p>' +
             '<p>University of Rajshahi</p>' +
             '<p>Rajshahi-6205, Bangladesh</p>' +
             '<p>Office Hours: Sun-Thu, 9:00 AM - 5:00 PM</p>';
    }

    paymentInstructionsInner.innerHTML = html;
    paymentInstructions.style.display = 'block';
  }

  if (nextStep3Btn) {
    nextStep3Btn.addEventListener('click', function () {
      if (donateState.paymentMethod) {
        updateStepUI(4);
      }
    });
  }

  if (backStep3Btn) {
    backStep3Btn.addEventListener('click', function () {
      updateStepUI(2);
    });
  }

  // ── Step 4: Summary & Confirm ──
  var confirmBtn = document.getElementById('donateConfirmBtn');
  var backStep4Btn = document.getElementById('donateBackStep4');

  function populateSummary() {
    var summaryCategory = document.getElementById('summaryCategory');
    var summaryAmount = document.getElementById('summaryAmount');
    var summaryName = document.getElementById('summaryName');
    var summaryEmail = document.getElementById('summaryEmail');
    var summaryPhone = document.getElementById('summaryPhone');
    var summaryPayment = document.getElementById('summaryPayment');
    var summaryMessageRow = document.getElementById('summaryMessageRow');
    var summaryMessage = document.getElementById('summaryMessage');

    if (summaryCategory) summaryCategory.textContent = donateState.category;
    if (summaryAmount) summaryAmount.textContent = formatAmount(donateState.amount) + ' BDT';
    if (summaryName) summaryName.textContent = donateState.name;
    if (summaryEmail) summaryEmail.textContent = donateState.email;
    if (summaryPhone) summaryPhone.textContent = donateState.phone;

    var paymentLabels = {
      'bkash': 'bKash',
      'nagad': 'Nagad',
      'bank': 'Bank Transfer',
      'cash': 'Cash / In Person'
    };
    if (summaryPayment) summaryPayment.textContent = paymentLabels[donateState.paymentMethod] || donateState.paymentMethod;

    if (donateState.message && summaryMessageRow && summaryMessage) {
      summaryMessageRow.style.display = 'flex';
      summaryMessage.textContent = donateState.message;
    } else if (summaryMessageRow) {
      summaryMessageRow.style.display = 'none';
    }
  }

  if (confirmBtn) {
    confirmBtn.addEventListener('click', function () {
      // Generate reference ID
      var refId = 'ARC-' + Date.now().toString(36).toUpperCase() + '-' + Math.random().toString(36).substring(2, 6).toUpperCase();

      // Show success
      var successCategory = document.getElementById('successCategory');
      var successEmail = document.getElementById('successEmail');
      var successRef = document.getElementById('successRef');

      if (successCategory) successCategory.textContent = donateState.category;
      if (successEmail) successEmail.textContent = donateState.email;
      if (successRef) successRef.textContent = refId;

      updateStepUI(5);

      // Scroll modal to top
      var modal = document.querySelector('.donate-modal');
      if (modal) modal.scrollTop = 0;
    });
  }

  if (backStep4Btn) {
    backStep4Btn.addEventListener('click', function () {
      updateStepUI(3);
    });
  }

  // ── Done Button ──
  var doneBtn = document.getElementById('donateDoneBtn');
  if (doneBtn) {
    doneBtn.addEventListener('click', closeDonateModal);
  }

  // ── Helper: Format Amount ──
  function formatAmount(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

});

/* ═══════════════════════════════════════════════
   NOTIFICATION TOAST STYLES (injected via JS)
   ═══════════════════════════════════════════════ */
(function () {
  var style = document.createElement('style');
  style.textContent = 
    '.notification-toast {' +
      'position: fixed;' +
      'top: 80px;' +
      'right: 1rem;' +
      'z-index: 200;' +
      'display: flex;' +
      'align-items: center;' +
      'gap: 0.5rem;' +
      'padding: 0.75rem 1.25rem;' +
      'background: linear-gradient(to right, #0b3f70, #699ab3, #0b3f70);' +
      'color: #fff;' +
      'font-size: 0.8125rem;' +
      'font-weight: 500;' +
      'border-radius: 8px;' +
      'box-shadow: 0 4px 16px rgba(13,148,136,0.4);' +
      'transform: translateX(120%);' +
      'transition: transform 0.3s ease;' +
      'max-width: 320px;' +
    '}' +
    '.notification-toast.show {' +
      'transform: translateX(0);' +
    '}';
  document.head.appendChild(style);
})();
