
document.addEventListener('DOMContentLoaded', function () {

  // ── Sticky Header Shadow ──
  const header = document.getElementById('header');
  window.addEventListener('scroll', function () {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // ── Mobile Menu Toggle ──
  const menuToggle = document.getElementById('menuToggle');
  const mobileNav = document.getElementById('mobileNav');

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

  // ── Smooth Scroll for Anchor Links ──
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var targetId = this.getAttribute('href');
      if (targetId === '#') return;
      var target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        var headerHeight = header.offsetHeight;
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
  var totalSlides = document.querySelectorAll('.gallery-slide').length;
  var track = document.getElementById('galleryTrack');
  var dotsContainer = document.getElementById('galleryDots');

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
    dotsContainer.querySelectorAll('.gallery-dot').forEach(function (dot, idx) {
      dot.classList.toggle('active', idx === currentSlide);
    });
  }

  // Auto-slide every 2 seconds
  var autoSlide = setInterval(function () {
    goToSlide(currentSlide + 1);
  }, 2000);

  // Pause on hover
  var carousel = document.querySelector('.gallery-carousel');
  carousel.addEventListener('mouseenter', function () {
    clearInterval(autoSlide);
  });
  carousel.addEventListener('mouseleave', function () {
    autoSlide = setInterval(function () {
      goToSlide(currentSlide + 1);
    }, 2000);
  });

  // Expose gallerySlide globally for button onclick
  window.gallerySlide = function (direction) {
    goToSlide(currentSlide + direction);
  };

  // ── Scroll Animations (Intersection Observer) ──
  var fadeElements = document.querySelectorAll(
    '.consultancy-card, .course-card, .resource-card, .team-card, .blog-card, .specialty-tag'
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
  var navLinks = document.querySelectorAll('#desktopNav a, #mobileNav a:not(.btn-join-mobile)');

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

  // ── Notification Toast (Example) ──
  // Show a welcome notification after 2 seconds
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
    '}' +
    '.active-nav {' +
      'color: orange !important;' +
      'background: #f0fdfa;' +
      'border-radius: 6px;' +
    '}';
  document.head.appendChild(style);
})();
