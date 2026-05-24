/* ════════════════════════════════════════════════════
   course-detail.js  — ARC Course Data & Page Logic
   ════════════════════════════════════════════════════ */

var COURSES = [
  /* ── 0 ── */
  {
    id: 0,
    title: 'HOW TO WRITE A RESEARCH GRANT PROPOSAL',
    type: 'Online',
    typeClass: 'online',
    status: 'Upcoming',
    statusClass: 'upcoming',
    startDate: '2026-05-22',
    schedule: 'Online (ZOOM) · 3pm – 5pm',
    fee: 500,
    duration: '4 weeks',
    seats: 30,
    image: 'arc5.jpg',
    description: `
      <p>This intensive course is designed for researchers, clinicians, and academics who want to master the art and science of writing competitive research grant proposals. Whether you are applying to national funding bodies, international agencies, or institutional grants, this course equips you with the essential skills to craft a compelling, well-structured proposal.</p>

      <p><strong>What you will learn:</strong></p>
      <ul>
        <li>Understanding grant agency expectations and evaluation criteria</li>
        <li>Structuring your proposal: aims, background, methodology, budget</li>
        <li>Writing a strong specific aims page that captures reviewers' attention</li>
        <li>Crafting a realistic and justified budget</li>
        <li>Common pitfalls to avoid in grant writing</li>
        <li>Responding to reviewer feedback and resubmission strategies</li>
      </ul>

      <p>Sessions are conducted live via ZOOM with hands-on exercises, peer review components, and one-on-one feedback from experienced grant writers.</p>
    `,
    infoBlocks: [
      { icon: 'calendar', label: 'Date', text: 'Starting 22 May 2026 (Thursday)' },
      { icon: 'clock',    label: 'Online Schedule (ZOOM)', text: '3:00 PM – 5:00 PM' },
      { icon: 'map',      label: 'Contact', text: 'Call 01712534626 for any enquiry (10am – 6pm)' }
    ]
  },

  /* ── 1 ── */
  {
    id: 1,
    title: 'Certificate Course on Research Methodology (CCRM – 21st Cohort)',
    type: 'Online & Offline',
    typeClass: 'hybrid',
    status: 'Upcoming',
    statusClass: 'upcoming',
    startDate: '2026-06-06',
    schedule: 'Fri & Sat · 9am – 1pm (Offline) + ZOOM sessions',
    fee: 5000,
    duration: '6 weeks',
    seats: 25,
    image: 'arc4.jpg',
    description: `
      <p>The Certificate Course on Research Methodology (CCRM) is ARC's flagship comprehensive training programme, now in its 21st cohort. It is tailored for medical and health science graduates, postgraduates, and faculty members who wish to develop a solid foundation in clinical and academic research.</p>

      <p><strong>Topics Covered:</strong></p>
      <ul>
        <li>Fundamentals of research: types, designs, and ethics</li>
        <li>Literature review and evidence-based practice</li>
        <li>Quantitative and qualitative research methods</li>
        <li>Sampling techniques and sample size determination</li>
        <li>Data collection tools: questionnaire and CRF design</li>
        <li>Data management and statistical analysis (SPSS)</li>
        <li>Research writing and publication strategy</li>
        <li>Protocol and thesis writing</li>
      </ul>

      <p>Participants receive a <strong>certificate of completion</strong> upon successfully attending at least 80% of sessions and passing the final assessment.</p>
    `,
    infoBlocks: [
      { icon: 'calendar', label: 'Start Date',   text: '6 June 2026 (Saturday)' },
      { icon: 'clock',    label: 'Class Days',   text: 'Every Friday & Saturday' },
      { icon: 'map',      label: 'Offline Venue', text: 'Rabindra Bhaban, Deparment of Law, RU, Rajshahi-6205, ARC' },
      { icon: 'phone',    label: 'Contact',       text: '01712534626 (10am – 6pm)' }
    ]
  },

  /* ── 2 ── */
  {
    id: 2,
    title: 'Fundamentals of Statistics and Analysis using SPSS',
    type: 'Online',
    typeClass: 'online',
    status: 'Upcoming',
    statusClass: 'upcoming',
    startDate: '2026-07-11',
    schedule: 'Online (ZOOM) · 4pm – 6pm',
    fee: 999,
    duration: '3 weeks',
    seats: 40,
    image: 'arc3.jpg',
    description: `
      <p>This practical, hands-on course introduces researchers, students, and healthcare professionals to statistical analysis using SPSS (Statistical Package for the Social Sciences). No prior knowledge of statistics is required — the course is designed to take you from zero to confident analyst.</p>

      <p><strong>Course Highlights:</strong></p>
      <ul>
        <li>Navigating the SPSS interface and data entry</li>
        <li>Descriptive statistics: mean, median, mode, SD</li>
        <li>Data cleaning, coding, and transformation</li>
        <li>Parametric vs non-parametric tests</li>
        <li>t-test, ANOVA, Chi-square, correlation, regression</li>
        <li>Creating publication-ready tables and figures</li>
        <li>Interpreting and reporting results in APA/Vancouver format</li>
      </ul>

      <p>Each participant will receive a soft copy of the course manual and practice datasets.</p>
    `,
    infoBlocks: [
      { icon: 'calendar', label: 'Start Date',           text: '11 July 2026 (Saturday)' },
      { icon: 'clock',    label: 'Online Schedule (ZOOM)', text: '4:00 PM – 6:00 PM' },
      { icon: 'phone',    label: 'Contact',               text: 'Call 01712534626 (10am – 6pm)' }
    ]
  },

  /* ── 3 ── */
  {
    id: 3,
    title: 'Hands-on Training on Developing Questionnaire & Preparing Dataset',
    type: 'Online & Offline',
    typeClass: 'hybrid',
    status: 'Ongoing',
    statusClass: 'ongoing',
    startDate: null,
    schedule: 'Flexible batches — contact us',
    fee: 250,
    duration: '2 days (intensive)',
    seats: null,
    image: 'arc2.jpg',
    description: `
      <p>This two-day intensive workshop focuses on one of the most critical but often overlooked skills in research: designing effective questionnaires and building clean, analysis-ready datasets.</p>

      <p><strong>Day 1 — Questionnaire Design:</strong></p>
      <ul>
        <li>Types of questions: open, closed, Likert, VAS</li>
        <li>Validity and reliability of measurement tools</li>
        <li>Adapting validated questionnaires for local use</li>
        <li>Piloting and refining your questionnaire</li>
      </ul>

      <p><strong>Day 2 — Dataset Preparation:</strong></p>
      <ul>
        <li>Coding schemes and variable labeling</li>
        <li>Data entry strategies to minimize errors</li>
        <li>Data cleaning and handling missing values</li>
        <li>Preparing your dataset for SPSS, R, or Stata analysis</li>
      </ul>
    `,
    infoBlocks: [
      { icon: 'clock', label: 'Format',  text: 'Flexible batches – contact us to join the next session' },
      { icon: 'map',   label: 'Venue',   text: 'Rabindra Bhaban, Deparment of Law, RU, Rajshahi-6205, ARC' },
      { icon: 'phone', label: 'Contact', text: '01712534626 (10am – 6pm)' }
    ]
  },

  /* ── 4 ── */
  {
    id: 4,
    title: 'Writing Review Articles and Literature Reviews',
    type: 'Online',
    typeClass: 'online',
    status: 'Ongoing',
    statusClass: 'ongoing',
    startDate: null,
    schedule: 'Self-paced + Live Q&A sessions',
    fee: 400,
    duration: '2 weeks',
    seats: null,
    image: 'arc1.jpg',
    description: `
      <p>Literature reviews and review articles are the backbone of academic publishing. This course teaches you how to plan, search, evaluate, and write both narrative and systematic review articles with the rigor required for peer-reviewed publication.</p>

      <p><strong>What you will master:</strong></p>
      <ul>
        <li>Difference between narrative reviews, scoping reviews, and systematic reviews</li>
        <li>Developing a comprehensive search strategy (PICO, PICOS framework)</li>
        <li>Using PubMed, Cochrane, Embase, and Scopus effectively</li>
        <li>PRISMA flow diagram and reporting standards</li>
        <li>Critical appraisal of included studies</li>
        <li>Structuring and writing the review article</li>
        <li>Managing references with Mendeley/Zotero</li>
      </ul>
    `,
    infoBlocks: [
      { icon: 'clock', label: 'Mode',    text: 'Self-paced with weekly live Q&A via ZOOM' },
      { icon: 'phone', label: 'Contact', text: '01712534626 (10am – 6pm)' }
    ]
  },

  /* ── 5 ── */
  {
    id: 5,
    title: 'Sample Size Calculation',
    type: 'Online',
    typeClass: 'online',
    status: 'Ongoing',
    statusClass: 'ongoing',
    startDate: null,
    schedule: 'Online (ZOOM) · Weekend sessions',
    fee: 400,
    duration: '1 week',
    seats: null,
    image: 'arc5.jpg',
    description: `
      <p>Sample size calculation is a mandatory step in any research protocol, yet it is frequently done incorrectly or without proper justification. This focused one-week course gives you the conceptual understanding and practical skills to calculate sample size accurately for a wide variety of study designs.</p>

      <p><strong>Topics covered:</strong></p>
      <ul>
        <li>Why sample size matters: power, alpha, beta</li>
        <li>Sample size for descriptive studies (prevalence, mean)</li>
        <li>Sample size for analytical studies (RCT, case-control, cohort)</li>
        <li>Using OpenEpi, G*Power, and PASS software</li>
        <li>How to write the sample size justification for your protocol</li>
        <li>Adjusting for dropout and design effect</li>
      </ul>
    `,
    infoBlocks: [
      { icon: 'clock', label: 'Schedule', text: 'Weekend sessions via ZOOM (Fri & Sat evenings)' },
      { icon: 'phone', label: 'Contact',  text: '01712534626 (10am – 6pm)' }
    ]
  },

  /* ── 6 ── FREE ── */
  {
    id: 6,
    title: 'Certificate Course on Research Methodology — Free Session',
    type: 'Online & Offline',
    typeClass: 'hybrid',
    status: 'Free',
    statusClass: 'free',
    startDate: '2026-06-06',
    schedule: 'One-time session · 10am – 12pm',
    fee: 0,
    duration: '2 hours (free demo)',
    seats: 50,
    image: 'arc4.jpg',
    description: `
      <p>This is a <strong>free introductory session</strong> from ARC's flagship Certificate Course on Research Methodology (CCRM). It is open to all — medical students, interns, postgraduates, and faculty — who want to explore what CCRM has to offer before enrolling in the full course.</p>

      <p><strong>Session highlights:</strong></p>
      <ul>
        <li>Overview of research methodology for health sciences</li>
        <li>Types of research: observational vs experimental</li>
        <li>How to choose a research question and design your study</li>
        <li>Introduction to literature searching and review</li>
        <li>Q&A with ARC faculty</li>
      </ul>

      <p>No prior knowledge required. Seats are <strong>limited</strong> — register early to secure your spot.</p>
    `,
    infoBlocks: [
      { icon: 'calendar', label: 'Date',    text: '6 June 2026 (Saturday)' },
      { icon: 'clock',    label: 'Time',    text: '10:00 AM – 12:00 PM' },
      { icon: 'map',      label: 'Venue',   text: 'Rabindra Bhaban, Deparment of Law, RU, Rajshahi-6205, ARC' },
      { icon: 'phone',    label: 'Contact', text: '01712534626 (10am – 6pm)' }
    ]
  },

  /* ── 7 ── FREE ── */
  {
    id: 7,
    title: 'Day long FREE Consultancy',
    type: 'Online & Offline',
    typeClass: 'hybrid',
    status: 'Free',
    statusClass: 'free',
    startDate: '2026-06-08',
    schedule: 'Online (ZOOM): 3pm – 4pm  |  Offline: 10am – 5pm',
    fee: 0,
    duration: 'Full day (Free)',
    seats: null,
    image: 'arc3.jpg',
    description: `
      <p>Dear physician and researcher — the journey from academic research (protocol writing to thesis defense) can often leave you feeling overwhelmed and unsure about the next step. Finding the right guidance on what to do, how to navigate a difficult situation, or how to get accurate answers to seemingly simple questions is not always easy. CMRD always strives to be by your side throughout your academic research journey — offering guidance or simply making your research easier.</p>

      <p>That is why we are organising the <strong>Day Long FREE Consultancy</strong> programme.</p>

      <p><strong>🔬 One-on-one dedicated research consultations with expert faculty.</strong></p>

      <p><strong>What you can bring:</strong></p>
      <ul>
        <li>Research protocol questions or review requests</li>
        <li>Statistical analysis problems</li>
        <li>Thesis or dissertation issues</li>
        <li>Journal submission or reviewer response help</li>
        <li>Ethics committee documentation queries</li>
        <li>Any research-related challenge you are facing</li>
      </ul>

      <p><strong>📅 Date:</strong> 8 June 2026 (Monday)</p>
      <p><strong>💻 Online Schedule (ZOOM):</strong> 3pm – 4pm</p>

      <p><strong>📍 Our Address:</strong><br />
      Rabindra Bhaban, Deparment of Law, RU, Rajshahi-6205<br />CMRD</p>

      <p>📞 For any enquiry, call us at <strong>01712534626</strong> (10am – 6pm)</p>
    `,
    infoBlocks: [
      { icon: 'calendar', label: 'Date',            text: '8 June 2026 (Monday)' },
      { icon: 'clock',    label: 'Online (ZOOM)',   text: '3:00 PM – 4:00 PM' },
      { icon: 'clock',    label: 'Offline Hours',   text: '10:00 AM – 5:00 PM' },
      { icon: 'map',      label: 'Address',         text: 'Rabindra Bhaban, Deparment of Law, RU, Rajshahi-6205, ARC' },
      { icon: 'phone',    label: 'Call for Enquiry','text': '01712534626 (10am – 6pm)' }
    ]
  }
];

/* ════════════════════════════════════
   Icon helper
   ════════════════════════════════════ */
function getIcon(type) {
  var icons = {
    calendar: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>',
    clock:    '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
    map:      '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/></svg>',
    phone:    '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.06 6.06l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>'
  };
  return icons[type] || icons.clock;
}

/* ════════════════════════════════════
   Render course
   ════════════════════════════════════ */
(function () {
  var params = new URLSearchParams(window.location.search);
  var id = parseInt(params.get('course'));
  var course = COURSES.find(function(c) { return c.id === id; });

  if (!course) {
    // Not found — redirect back
    document.getElementById('cdLoading').innerHTML =
      '<p style="color:#ef4444;font-weight:600;">Course not found. <a href="index.html#courses" style="color:#0f766e;">Browse all courses →</a></p>';
    return;
  }

  /* ── Page meta ── */
  document.title = course.title + ' — ARC';
  document.getElementById('breadcrumbTitle').textContent = course.title;

  /* ── Type badge ── */
  var typeBadge = document.getElementById('cdTypeBadge');
  typeBadge.textContent = course.type;
  typeBadge.className = 'cd-type-badge ' + course.typeClass;

  /* ── Status badge ── */
  var statusBadge = document.getElementById('cdStatusBadge');
  statusBadge.textContent = course.status;
  statusBadge.className = 'cd-status-badge ' + course.statusClass;

  /* ── Title ── */
  document.getElementById('cdTitle').textContent = course.title;

  /* ── Description ── */
  document.getElementById('cdDescription').innerHTML = course.description;

  /* ── Info blocks ── */
  var blocksHtml = course.infoBlocks.map(function(b) {
    return '<div class="cd-info-row">' +
      '<div class="cd-info-icon">' + getIcon(b.icon) + '</div>' +
      '<div class="cd-info-text"><span class="cd-info-label">' + b.label + ':</span>' + b.text + '</div>' +
    '</div>';
  }).join('');
  document.getElementById('cdInfoBlocks').innerHTML = blocksHtml;

  /* ── Show body ── */
  document.getElementById('cdLoading').style.display = 'none';
  document.getElementById('cdBody').style.display = 'block';

  /* ── Sidebar meta ── */
  var img = document.getElementById('cdBannerImg');
  img.src = course.image;
  img.alt = course.title;

  document.getElementById('cdMetaType').textContent = course.type;

  var dateEl = document.getElementById('cdMetaDate');
  if (course.startDate) {
    dateEl.textContent = course.startDate;
  } else {
    dateEl.textContent = 'Ongoing';
    dateEl.style.color = '#a16207';
  }

  var schedRow = document.getElementById('cdMetaScheduleRow');
  if (course.schedule) {
    document.getElementById('cdMetaSchedule').textContent = course.schedule;
  } else {
    schedRow.style.display = 'none';
  }

  var feeEl = document.getElementById('cdMetaFee');
  if (course.fee === 0) {
    feeEl.textContent = 'Free';
    feeEl.classList.add('free-tag');
  } else {
    feeEl.textContent = 'BDT ' + course.fee.toLocaleString() + '.00';
  }

  var durRow = document.getElementById('cdMetaDurationRow');
  if (course.duration) {
    document.getElementById('cdMetaDuration').textContent = course.duration;
  } else {
    durRow.style.display = 'none';
  }

  var seatRow = document.getElementById('cdMetaSeatRow');
  if (course.seats) {
    document.getElementById('cdMetaSeats').textContent = course.seats + ' seats';
  } else {
    seatRow.style.display = 'none';
  }

  /* ── Show sidebar ── */
  document.getElementById('cdLoading2').style.display = 'none';
  document.getElementById('cdSideCard').style.display = 'block';

  /* ── Enroll modal course name ── */
  document.getElementById('enrollCourseName').textContent = course.title;
})();

/* ════════════════════════════════════
   Enroll Modal
   ════════════════════════════════════ */
function openEnroll() {
  document.getElementById('enrollModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeEnroll() {
  document.getElementById('enrollModal').classList.remove('open');
  document.body.style.overflow = '';
}

function closeEnrollOnOverlay(e) {
  if (e.target === document.getElementById('enrollModal')) closeEnroll();
}

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') closeEnroll();
});

function submitEnroll() {
  var fields = [
    { id: 'eName',      err: 'eErrName',      label: 'Full Name',   min: 2 },
    { id: 'eMobile',    err: 'eErrMobile',    label: 'Mobile',      min: 11, pattern: /^01[0-9]{9}$/ },
    { id: 'eEmail',     err: 'eErrEmail',     label: 'Email',       min: 5,  pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ },
    { id: 'eInstitute', err: 'eErrInstitute', label: 'Institute',   min: 2 }
  ];

  var valid = true;
  fields.forEach(function(f) {
    var el = document.getElementById(f.id);
    var errEl = document.getElementById(f.err);
    var val = el.value.trim();
    el.classList.remove('error');
    errEl.textContent = '';

    if (!val || val.length < f.min) {
      el.classList.add('error');
      errEl.textContent = f.label + ' is required.';
      valid = false;
    } else if (f.pattern && !f.pattern.test(val)) {
      el.classList.add('error');
      if (f.id === 'eMobile') errEl.textContent = 'Enter a valid mobile number (01XXXXXXXXX).';
      if (f.id === 'eEmail')  errEl.textContent = 'Enter a valid email address.';
      valid = false;
    }
  });

  if (!valid) return;

  closeEnroll();
  document.body.style.overflow = 'hidden';
  var successModal = document.getElementById('enrollSuccess');
  successModal.classList.add('open');

  // Reset form
  ['eName','eMobile','eEmail','eInstitute','eMessage'].forEach(function(id) {
    var el = document.getElementById(id);
    if (el) el.value = '';
  });
}
