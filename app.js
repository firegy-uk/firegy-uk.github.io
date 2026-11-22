(function () {
  "use strict";

  const SERVICES = [
    {
      slug: "fire-risk-assessments",
      name: "Fire Risk Assessments",
      standard: "BS 9792 · PAS 79",
      desc: "BS 9792 & PAS 79 assessments for HMOs, blocks and commercial sites.",
      sampleUrl: "samples/sample-fire-risk-assessment.pdf",
      images: [
        { src: "assets/svc-fra.jpg", alt: "Communal escape lobby and FD30S fire door inspection" },
        { src: "assets/slide-fra-report.jpg", alt: "Firegy BS 9792 Fire Risk Assessment report" },
        { src: "assets/svc-zone-plan.jpg", alt: "On-site fire compliance documentation" }
      ]
    },
    {
      slug: "fire-alarms-aov",
      name: "Fire Alarms & AOV",
      standard: "BS 5839 · Smoke Ventilation",
      desc: "BS 5839 fire alarm and AOV smoke ventilation servicing.",
      sampleUrl: "samples/sample-fire-alarm-certificate.pdf",
      images: [
        { src: "assets/slide-alarm-ctec.jpg", alt: "Firegy C-TEC addressable fire alarm control panel" },
        { src: "assets/slide-alarm-aov.jpg", alt: "C-TEC panel with red AOV manual override switch and Fire Action notice" },
        { src: "assets/slide-alarm-cert.jpg", alt: "Firegy BS 5839 fire alarm servicing certificate" }
      ]
    },
    {
      slug: "emergency-lighting",
      name: "Emergency Lighting",
      standard: "BS 5266-1",
      desc: "BS 5266-1 routine testing, duration checks and certification.",
      sampleUrl: "samples/sample-emergency-lighting-certificate.pdf",
      images: [
        { src: "assets/svc-lighting.jpg", alt: "Stairwell emergency bulkhead luminaire installed on site" },
        { src: "assets/slide-lighting-2.jpg", alt: "Modern corridor LED emergency lighting bulkhead" },
        { src: "assets/slide-lighting-cert.jpg", alt: "Firegy BS 5266-1 emergency lighting certificate" }
      ]
    },
    {
      slug: "fire-extinguishers",
      name: "Fire Extinguishers",
      standard: "BS 5306-3",
      desc: "BS 5306-3 supply, commissioning and annual servicing.",
      sampleUrl: "samples/sample-extinguisher-certificate.pdf",
      images: [
        { src: "assets/svc-extinguishers.jpg", alt: "Firegy mobile construction fire points lined up on site" },
        { src: "assets/slide-ext-label.jpg", alt: "Firegy commissioning and maintenance record label on extinguisher" },
        { src: "assets/slide-ext-set.jpg", alt: "Firegy serviced CO2, powder and foam fire extinguishers" }
      ]
    },
    {
      slug: "fire-alarm-zone-plans",
      name: "Fire Alarm Zone Plans",
      standard: "BS 5839-1",
      desc: "Bespoke BS 5839-1 zone plans mounted beside your panel.",
      sampleUrl: "samples/sample-zone-plan.pdf",
      images: [
        { src: "assets/svc-zone-plan.jpg", alt: "Framed Firegy BS 5839-1 fire alarm zone plan" },
        { src: "assets/slide-zone-drawing.jpg", alt: "Colour-coded Firegy fire alarm zone drawing" },
        { src: "assets/slide-alarm-ctec.jpg", alt: "Fire alarm panel paired with zone plan" }
      ]
    },
    {
      slug: "fire-evacuation-plans",
      name: "Fire Evacuation Plans",
      standard: "Site Escape Drawings",
      desc: "Clear colour-coded floor escape plans for occupants and visitors.",
      sampleUrl: "samples/sample-evacuation-plan.pdf",
      images: [
        { src: "assets/svc-evacuation-plan.jpg", alt: "Firegy emergency evacuation plan drawing" },
        { src: "assets/slide-evac-p2.jpg", alt: "Multi-level building escape route drawing" },
        { src: "assets/slide-signage-2.jpg", alt: "Directional escape signage and site notices" }
      ]
    },
    {
      slug: "fire-safety-signage",
      name: "Fire Safety Signage",
      standard: "BS 5499 · ISO 7010",
      desc: "BS 5499 & ISO 7010 fire safety signs supplied and fitted.",
      sampleUrl: "samples/sample-signage-report.pdf",
      images: [
        { src: "assets/svc-signage.jpg", alt: "Firegy photoluminescent fire safety signage" },
        { src: "assets/slide-signage-2.jpg", alt: "BS 5499 directional exit and Fire Action signage" },
        { src: "assets/slide-signage-3.jpg", alt: "Fire door and firefighting equipment signage" }
      ]
    },
    {
      slug: "pat-testing",
      name: "PAT Testing",
      standard: "IET Code of Practice",
      desc: "IET portable appliance testing with full asset register.",
      sampleUrl: "samples/sample-pat-testing-certificate.pdf",
      images: [
        { src: "assets/svc-pat.jpg", alt: "Green Firegy PAT PASS label applied to tested appliance" },
        { src: "assets/slide-pat-2.jpg", alt: "Sheet of Firegy branded PAT testing PASS labels" },
        { src: "assets/slide-pat-3.jpg", alt: "Firegy PAT PASS sticker on commercial washing machine" }
      ]
    },
    {
      slug: "legionella-risk-assessments",
      name: "Legionella Risk Assessments",
      standard: "ACOP L8 · HSG274",
      desc: "ACOP L8 water hygiene assessments and temperature monitoring.",
      sampleUrl: "samples/sample-legionella-risk-assessment.pdf",
      images: [
        { src: "assets/svc-legionella.jpg", alt: "Martindale DT175 hot water sentinel tap check at 53.1 degrees C" },
        { src: "assets/slide-legionella-cold.jpg", alt: "Martindale DT175 cold water tap temperature check at 13.8 degrees C" },
        { src: "assets/slide-legionella-report.jpg", alt: "Firegy ACOP L8 Legionella risk assessment report" }
      ]
    },
    {
      slug: "qr-fire-logbooks",
      name: "QR Fire Logbooks",
      standard: "Digital Compliance",
      desc: "Wall-mounted QR plaques linking straight to your digital logbook.",
      sampleUrl: null,
      images: [
        { src: "assets/svc-qr-logbook.jpg", alt: "Wall-mounted Firegy frosted acrylic QR Fire Logbook plaque" },
        { src: "assets/slide-alarm-ctec.jpg", alt: "Firegy C-TEC addressable fire alarm panel on site" },
        { src: "assets/slide-alarm-aov.jpg", alt: "Fire alarm panel with Firegy Fire Action notice" }
      ]
    }
  ];

  const FLEET = [
    { src: "assets/fleet-1.jpg", alt: "Firegy service vehicle on duty in Greater Manchester" },
    { src: "assets/fleet-2.jpg", alt: "Firegy branded compliance van" },
    { src: "assets/fleet-3.jpg", alt: "Firegy fleet parked at Salford base" },
    { src: "assets/fleet-4.jpg", alt: "Firegy fire safety engineering van" }
  ];

  const REVIEWS = [
    {
      quote: "Good, efficient and professional service. The team made the whole process effortless from start to finish.",
      name: "Benjamin W",
      role: "Engineer"
    },
    {
      quote: "Clear, thorough assessment and straightforward advice. Kept our property fully compliant without any hassle.",
      name: "S Chen",
      role: "Salford"
    },
    {
      quote: "Reliable, knowledgeable engineers and clear documentation every time. Our go-to for fire safety across our premises.",
      name: "M Harper",
      role: "Facilities Manager"
    }
  ];

  const ARTICLES = [
    {
      slug: "aov-smoke-ventilation-servicing-greater-manchester",
      category: "Fire Alarms & AOV",
      date: "22 November 2026",
      readTime: "4 min read",
      author: "Baruch Hoffman, MIFSM · Firegy Ltd",
      title: "AOV (Automatic Opening Vent) Servicing & Testing: What Residential Block Managers Need to Know",
      excerpt: "How routine BS 7346 and BS 9999 servicing keeps stairhead smoke vents, actuators, and override controls compliant in blocks of flats.",
      sections: [
        {
          h: "Why AOV Systems Are Critical in Multi-Storey Blocks",
          p: "Automatic Opening Vents (AOVs) sit at the top of protected stairwells and communal corridors to clear smoke rapidly during a fire. By keeping escape routes tenable for residents and clear for attending fire crews, a properly maintained AOV system is one of the most important life-safety installations in any residential block across Salford, Manchester, and Greater Manchester."
        },
        {
          h: "What Routine AOV Maintenance Should Cover",
          list: [
            "Weekly functional checks via the manual override switch and confirmation that the stairhead vent opens smoothly and fully.",
            "Six-monthly or annual planned preventative maintenance in line with BS 7346-8, BS 9999, and manufacturer instructions.",
            "Testing interlinked smoke detectors, control panel fault indicators, standby backup batteries, and 24V actuators.",
            "Checking weather seals, hinge brackets, and unobstructed free geometric vent area so the vent closes cleanly after reset."
          ]
        },
        {
          h: "Combine Fire Alarm & AOV Servicing in One Visit",
          p: "Because AOV control panels frequently interface with communal BS 5839 fire detection, having Firegy inspect both systems together reduces site disruption, avoids finger-pointing between contractors, and leaves you with clear compliance certificates ready for insurers and audits."
        }
      ]
    },
    {
      slug: "bs-9792-fire-risk-assessments-greater-manchester-landlords",
      category: "Fire Risk Assessments",
      date: "20 November 2026",
      readTime: "4 min read",
      author: "Baruch Hoffman, MIFSM · Firegy Ltd",
      title: "BS 9792 & Fire Risk Assessments in Greater Manchester: What Landlords & Managing Agents Need to Know",
      excerpt: "How BS 9792 raises the bar for residential Fire Risk Assessments across HMOs and blocks of flats in Salford, Manchester, and the North West.",
      sections: [
        {
          h: "Why BS 9792 Matters for Residential Portfolios",
          p: "Under the Regulatory Reform (Fire Safety) Order 2005 and the Fire Safety (England) Regulations 2022, every landlord or managing agent responsible for common areas in HMOs and multi-occupied residential blocks must maintain a suitable and sufficient Fire Risk Assessment. BS 9792 brings clearer structure, deeper compartmentation scrutiny, and practical, prioritised action plans."
        },
        {
          h: "What a Thorough Assessment Should Actually Include",
          list: [
            "Clear premises description, occupancy profile, and evacuation strategy (Simultaneous vs Stay Put).",
            "Photographic evidence of key fire safety provisions and defects — including fire doors, alarm panels, risers, and escape routes.",
            "Proportionate risk rating and time-bound remedial actions (High, Medium, Low) rather than copy-paste checklists.",
            "Verification of ongoing maintenance records for BS 5839 alarms, AOVs, BS 5266 emergency lighting, and BS 5306 extinguishers."
          ]
        },
        {
          h: "How Often Should You Review Your FRA?",
          p: "Most residential blocks and licensed HMOs across Salford, Bury, Oldham, Stockport, and Manchester should schedule an annual review, or sooner if there are building alterations, changes in occupancy, or a fire incident."
        }
      ]
    },
    {
      slug: "digital-qr-fire-logbooks-bs-5839-bs-5266",
      category: "Digital Compliance",
      date: "14 November 2026",
      readTime: "3 min read",
      author: "Baruch Hoffman, MIFSM · Firegy Ltd",
      title: "Weekly Fire Alarm Tests & Monthly Emergency Lighting Checks: Why On-Site QR Fire Logbooks Beat Paper Binders",
      excerpt: "Paper fire logbooks go missing or sit blank until an inspection. Here is how wall-mounted QR plaques create a verifiable, date-stamped audit trail.",
      sections: [
        {
          h: "The Hidden Compliance Gap in Managed Blocks",
          p: "Even when six-monthly fire alarm servicing and annual 3-hour emergency lighting drain tests are completed on time, enforcement officers and insurers routinely ask for evidence of weekly BS 5839-1 call point tests and monthly BS 5266-1 flick tests. Paper binders tucked in cupboards are easily lost, damaged, or left unsigned."
        },
        {
          h: "How Firegy On-Site QR Fire Logbooks Work",
          list: [
            "A durable, frosted acrylic QR compliance plaque is mounted directly beside your fire alarm panel.",
            "Inspectors, caretakers, or responsible persons scan the code with any phone camera — no app download required — to review test history.",
            "Firegy engineers and authorised testers log weekly call point tests, monthly lighting checks, and remedial updates straight into the record.",
            "Landlords and managing agents monitor every property across their portfolio from the Firegy Client Portal."
          ]
        },
        {
          h: "Ready for Insurers & Fire Authority Audits",
          p: "With every timestamped test and current PDF certificate accessible in moments, a digital QR fire logbook turns routine fire safety compliance into clear, instant proof."
        }
      ]
    },
    {
      slug: "fire-alarm-zone-plans-vs-evacuation-plans",
      category: "Compliance Drawings",
      date: "7 November 2026",
      readTime: "3 min read",
      author: "Baruch Hoffman, MIFSM · Firegy Ltd",
      title: "Fire Alarm Zone Plans vs Emergency Evacuation Plans: Which Drawings Does Your Building Need?",
      excerpt: "Zone plans and evacuation plans serve two completely different life-safety roles. Knowing where each goes keeps you compliant with BS 5839-1.",
      sections: [
        {
          h: "Fire Alarm Zone Plans (BS 5839-1)",
          p: "BS 5839-1 requires a clear, diagrammatic zone plan mounted directly adjacent to every fire alarm control panel. Its primary audience is the fire and rescue service and building staff investigating an activation: it must show colour-coded detection zones, the 'You Are Here' panel location, floors, and exits so responders can pinpoint an alarm in seconds."
        },
        {
          h: "Emergency Evacuation Plans",
          p: "Evacuation plans are designed for building occupants and visitors along corridors, lobbies, and stair landings. They highlight primary and secondary escape routes, fire exit doors, call points, extinguishers, and the designated external assembly point — helping unfamiliar occupants evacuate calmly."
        },
        {
          h: "Getting Both Done Together",
          p: "Firegy surveys your premises once and produces matching, framed Firegy-branded Zone Plans and Evacuation Plans — saving repeat visits and ensuring your drawings match the real layout on site."
        }
      ]
    },
    {
      slug: "legionella-acop-l8-and-pat-testing-landlord-checklist",
      category: "Landlord Compliance",
      date: "1 November 2026",
      readTime: "4 min read",
      author: "Baruch Hoffman, MIFSM · Firegy Ltd",
      title: "Legionella Risk Assessments (ACOP L8) & PAT Testing: A Practical Salford & Manchester Compliance Checklist",
      excerpt: "Beyond fire alarms and FRAs, landlords and commercial operators have clear duties on water hygiene and portable electrical appliances.",
      sections: [
        {
          h: "Legionella Risk Assessments Under ACOP L8 & HSG274",
          p: "Landlords and employers have a statutory duty under the Health and Safety at Work Act to assess and control the risk of Legionella bacteria in hot and cold water systems. A proper assessment inspects water storage, sentinel tap temperatures (cold below 20°C, hot at least 50°C within 1 minute), dead-legs, showerheads, and little-used outlets — supported by clear site photos and a written control scheme."
        },
        {
          h: "PAT Testing With a Full Itemised Register",
          p: "For furnished lets, HMOs, schools, and commercial offices, Portable Appliance Testing confirms electrical safety under the Electricity at Work Regulations 1989. Always make sure your contractor supplies both a summary certificate and an itemised appliance register recording each Asset ID, location, fuse rating, earth and insulation readings, and retest date."
        },
        {
          h: "Bundle Everything in One Site Visit",
          p: "Combining your FRA, fire alarm and AOV service, emergency lighting, extinguishers, signage, PAT testing, and Legionella assessment with Firegy cuts disruption for tenants and keeps every certificate aligned in one place."
        }
      ]
    }
  ];

  let carouselTimers = [];

  function esc(str) {
    return String(str == null ? "" : str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function clearCarousels() {
    carouselTimers.forEach(function (id) {
      clearInterval(id);
    });
    carouselTimers = [];
  }

  function closeMobileMenu() {
    const toggle = document.getElementById("menu-toggle");
    const drawer = document.getElementById("mobile-drawer");
    if (toggle && drawer) {
      toggle.setAttribute("aria-expanded", "false");
      drawer.hidden = true;
    }
  }

  function setActiveNav(key) {
    document.querySelectorAll("[data-nav]").forEach(function (el) {
      el.classList.toggle("is-active", el.getAttribute("data-nav") === key);
    });
  }

  function renderServiceCards() {
    return SERVICES.map(function (svc, idx) {
      const slides = svc.images
        .map(function (img, sIdx) {
          return (
            '<img src="' +
            esc(img.src) +
            '" alt="' +
            esc(img.alt) +
            '" width="640" height="400" loading="' +
            (idx < 2 && sIdx === 0 ? "eager" : "lazy") +
            '" class="carousel-slide' +
            (sIdx === 0 ? " is-active" : "") +
            '" />'
          );
        })
        .join("");

      const dots = svc.images
        .map(function (_img, sIdx) {
          return (
            '<button type="button" class="car-dot' +
            (sIdx === 0 ? " is-active" : "") +
            '" data-slide="' +
            sIdx +
            '" aria-label="View photo ' +
            (sIdx + 1) +
            " for " +
            esc(svc.name) +
            '"></button>'
          );
        })
        .join("");

      const sampleLink = svc.sampleUrl
        ? '<a href="' +
          esc(svc.sampleUrl) +
          '" target="_blank" rel="noopener noreferrer" class="link-sample">View Sample Report</a>'
        : "";

      return (
        '<article class="service-card" data-carousel="' +
        idx +
        '">' +
        '<div class="carousel-frame">' +
        slides +
        '<button type="button" class="car-arrow car-prev" aria-label="Previous photo">&#8249;</button>' +
        '<button type="button" class="car-arrow car-next" aria-label="Next photo">&#8250;</button>' +
        "</div>" +
        '<div class="car-dots" role="tablist" aria-label="' +
        esc(svc.name) +
        ' photos">' +
        dots +
        "</div>" +
        '<div class="service-body">' +
        '<div class="service-head-row">' +
        '<h3 class="service-title">' +
        esc(svc.name) +
        "</h3>" +
        '<span class="service-std">' +
        esc(svc.standard) +
        "</span>" +
        "</div>" +
        '<p class="service-desc">' +
        esc(svc.desc) +
        "</p>" +
        '<div class="service-actions">' +
        '<a href="#contact" class="link-action" data-quote-service="' +
        esc(svc.name) +
        '">Get a Quote &rarr;</a>' +
        sampleLink +
        "</div>" +
        "</div>" +
        "</article>"
      );
    }).join("");
  }

  function renderHome() {
    const fleetHtml = FLEET.map(function (item) {
      return (
        '<figure class="fleet-item">' +
        '<img src="' +
        esc(item.src) +
        '" alt="' +
        esc(item.alt) +
        '" width="600" height="375" loading="lazy" />' +
        "</figure>"
      );
    }).join("");

    const reviewsHtml = REVIEWS.map(function (r) {
      return (
        '<blockquote class="review-card">' +
        '<p class="review-quote">&ldquo;' +
        esc(r.quote) +
        "&rdquo;</p>" +
        '<footer class="review-author">' +
        esc(r.name) +
        ' <span class="review-role">&middot; ' +
        esc(r.role) +
        "</span></footer>" +
        "</blockquote>"
      );
    }).join("");

    const serviceOptions = SERVICES.map(function (s) {
      return '<option value="' + esc(s.name) + '">' + esc(s.name) + "</option>";
    }).join("");

    return (
      '<section class="hero" id="home">' +
      '<div class="container hero-grid">' +
      '<div class="hero-copy">' +
      '<h1 class="hero-title">Fire Safety &amp; Compliance Across Greater Manchester.</h1>' +
      '<p class="hero-lead">Dedicated fire safety engineers and assessors &mdash; FRAs, alarms, AOVs, lighting, extinguishers, PAT, Legionella &amp; QR logbooks.</p>' +
      '<div class="hero-actions">' +
      '<a href="#contact" class="btn-primary">Get a Free Quote</a>' +
      '<a href="tel:03336137233" class="phone-link">Call 0333 613 7233</a>' +
      "</div>" +
      "</div>" +
      '<figure class="hero-media">' +
      '<img src="assets/hero.jpg" alt="Firegy Ltd fleet of fire safety engineering vehicles in Salford" width="880" height="550" fetchpriority="high" />' +
      "</figure>" +
      "</div>" +
      "</section>" +
      '<section class="section" id="services">' +
      '<div class="container">' +
      '<div class="section-head">' +
      '<p class="eyebrow">Services</p>' +
      '<h2 class="section-title">Ten core compliance services.</h2>' +
      "</div>" +
      '<div class="services-grid">' +
      renderServiceCards() +
      "</div>" +
      "</div>" +
      "</section>" +
      '<section class="section section-bordered" id="about">' +
      '<div class="container">' +
      '<div class="section-head">' +
      '<p class="eyebrow">About</p>' +
      '<h2 class="section-title">Salford-Based. Greater Manchester Wide.</h2>' +
      '<p class="section-sub">IFSM-member fire safety assessors and engineers operating our own fleet from Salford across Greater Manchester and the North West.</p>' +
      "</div>" +
      '<div class="fleet-grid">' +
      fleetHtml +
      "</div>" +
      "</div>" +
      "</section>" +
      '<section class="section section-bordered" id="contact">' +
      '<div class="container">' +
      '<div class="reviews-grid">' +
      reviewsHtml +
      "</div>" +
      '<div class="contact-grid">' +
      '<div class="contact-info">' +
      '<p class="eyebrow">Contact</p>' +
      '<h2 class="section-title">Get a Free Quote.</h2>' +
      '<p class="section-sub">Tell us what your property needs and we will come back promptly with clear pricing.</p>' +
      '<ul class="contact-list">' +
      '<li><span class="contact-label">Phone</span><span class="contact-value"><a href="tel:03336137233">0333 613 7233</a></span></li>' +
      '<li><span class="contact-label">Email</span><span class="contact-value"><a href="mailto:office@firegy.co.uk">office@firegy.co.uk</a></span></li>' +
      '<li><span class="contact-label">Office</span><span class="contact-value">Suite 11, 284&ndash;290 Great Clowes St, Salford, M7 2HD</span></li>' +
      "</ul>" +
      "</div>" +
      '<div class="quote-card">' +
      '<form id="quote-form" name="firegy-quote" method="POST" data-netlify="true" novalidate><input type="hidden" name="form-name" value="firegy-quote" />' +
      '<div class="form-row-2">' +
      '<div class="field">' +
      '<label for="q-name">Name</label>' +
      '<input id="q-name" name="name" type="text" required autocomplete="name" placeholder="Your name" />' +
      "</div>" +
      '<div class="field">' +
      '<label for="q-email">Email</label>' +
      '<input id="q-email" name="email" type="email" required autocomplete="email" placeholder="you@company.co.uk" />' +
      "</div>" +
      "</div>" +
      '<div class="field">' +
      '<label for="q-service">Service</label>' +
      '<select id="q-service" name="service">' +
      '<option value="Multiple Services / Full Compliance">Multiple Services / Full Compliance</option>' +
      serviceOptions +
      "</select>" +
      "</div>" +
      '<div class="field">' +
      '<label for="q-message">Postcode &amp; brief details</label>' +
      '<textarea id="q-message" name="message" placeholder="Property type, postcode, and what you need quoted"></textarea>' +
      "</div>" +
      '<button type="submit" id="quote-submit-btn" class="btn-primary">Request Free Quote</button>' +
      '<div id="quote-feedback" class="form-feedback" hidden role="status" aria-live="polite"></div>' +
      "</form>" +
      "</div>" +
      "</div>" +
      "</div>" +
      "</section>"
    );
  }

  function renderGuidesIndex() {
    const cards = ARTICLES.map(function (a) {
      return (
        '<article class="guide-card">' +
        '<div class="guide-meta"><span class="guide-cat">' +
        esc(a.category) +
        "</span> &middot; " +
        esc(a.date) +
        " &middot; " +
        esc(a.readTime) +
        "</div>" +
        '<h2><a href="#guides/' +
        esc(a.slug) +
        '">' +
        esc(a.title) +
        "</a></h2>" +
        "<p>" +
        esc(a.excerpt) +
        "</p>" +
        '<a href="#guides/' +
        esc(a.slug) +
        '" class="guide-read-link">Read Guide &rarr;</a>' +
        "</article>"
      );
    }).join("");

    return (
      '<section class="guides-shell">' +
      '<div class="container">' +
      '<a href="#home" class="back-link">&larr; Back to Home</a>' +
      '<div class="section-head">' +
      '<p class="eyebrow">News &amp; Guides</p>' +
      '<h1 class="section-title">Fire Safety &amp; Compliance Guides.</h1>' +
      '<p class="section-sub">Practical guidance for Greater Manchester landlords, managing agents, schools, and commercial sites.</p>' +
      "</div>" +
      '<div class="guides-grid">' +
      cards +
      "</div>" +
      "</div>" +
      "</section>"
    );
  }

  function renderGuideArticle(slug) {
    const article = ARTICLES.find(function (a) {
      return a.slug === slug;
    });
    if (!article) {
      return renderGuidesIndex();
    }

    const bodyHtml = article.sections
      .map(function (sec) {
        let html = "<h2>" + esc(sec.h) + "</h2>";
        if (sec.p) {
          html += "<p>" + esc(sec.p) + "</p>";
        }
        if (sec.list && sec.list.length) {
          html +=
            "<ul>" +
            sec.list
              .map(function (item) {
                return "<li>" + esc(item) + "</li>";
              })
              .join("") +
            "</ul>";
        }
        return html;
      })
      .join("");

    return (
      '<article class="guides-shell">' +
      '<div class="container article-wrap">' +
      '<a href="#guides" class="back-link">&larr; All Guides</a>' +
      '<div class="guide-meta"><span class="guide-cat">' +
      esc(article.category) +
      "</span> &middot; " +
      esc(article.date) +
      " &middot; " +
      esc(article.readTime) +
      "</div>" +
      "<h1>" +
      esc(article.title) +
      "</h1>" +
      '<p class="article-byline">' +
      esc(article.author) +
      "</p>" +
      '<div class="article-body">' +
      bodyHtml +
      "</div>" +
      '<div class="article-cta">' +
      "<div><h3>Need compliance support for your building?</h3><p>Speak with our Salford team or request a clear quote.</p></div>" +
      '<a href="#contact" class="btn-primary">Request a Quote</a>' +
      "</div>" +
      "</div>" +
      "</article>"
    );
  }

  function renderPortal(kind) {
    const isEngineer = kind === "engineer";
    const title = isEngineer ? "Engineer Portal" : "Client Portal";
    const subtitle = isEngineer
      ? "Authorised Firegy Ltd engineers and assessors only."
      : "Sign in to view your properties, certificates and QR fire logbooks.";
    const emailLabel = isEngineer ? "Work email" : "Email address";
    const emailPlaceholder = isEngineer ? "name@firegy.co.uk" : "you@company.co.uk";
    const btnClass = isEngineer ? "btn-dark portal-submit" : "btn-primary portal-submit";
    const switchHtml = isEngineer
      ? 'Looking for the Client Portal?<a href="#portal">Client Portal &rarr;</a>'
      : 'Are you a Firegy engineer?<a href="#engineer">Engineer Portal &rarr;</a>';
    const helpHtml = isEngineer
      ? 'Access issues? Contact <a href="mailto:office@firegy.co.uk">office@firegy.co.uk</a>.'
      : 'Need an account? Contact <a href="mailto:office@firegy.co.uk">office@firegy.co.uk</a> or call <a href="tel:03336137233">0333 613 7233</a>.';

    return (
      '<section class="portal-stage">' +
      '<div class="portal-wrap">' +
      '<div class="portal-card">' +
      '<div class="brand-split-bar" aria-hidden="true"><span></span><span></span></div>' +
      '<div class="portal-card-body">' +
      '<img src="assets/firegy-logo.png" alt="Firegy Ltd" class="portal-logo" width="112" height="28" />' +
      '<h1 class="portal-title">' +
      esc(title) +
      "</h1>" +
      '<p class="portal-sub">' +
      esc(subtitle) +
      "</p>" +
      '<div id="portal-error" class="portal-error" hidden role="alert"></div>' +
      '<form id="portal-login-form" data-portal="' +
      esc(kind) +
      '" novalidate>' +
      '<div class="field">' +
      '<label for="p-email">' +
      esc(emailLabel) +
      "</label>" +
      '<input id="p-email" name="email" type="email" required autocomplete="email" placeholder="' +
      esc(emailPlaceholder) +
      '" />' +
      "</div>" +
      '<div class="field">' +
      '<label for="p-password">Password</label>' +
      '<input id="p-password" name="password" type="password" required autocomplete="current-password" placeholder="Enter your password" />' +
      "</div>" +
      '<button type="submit" id="portal-submit-btn" class="' +
      btnClass +
      '">Sign In</button>' +
      "</form>" +
      '<p class="portal-switch">' +
      switchHtml +
      "</p>" +
      '<p class="portal-help">' +
      helpHtml +
      "</p>" +
      "</div>" +
      "</div>" +
      '<p class="portal-back-row"><a href="#home">&larr; Back to Firegy.co.uk</a></p>' +
      "</div>" +
      "</section>"
    );
  }

  function initHomeInteractions(scope) {
    const reduceMotion =
      window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    scope.querySelectorAll("[data-carousel]").forEach(function (card, cardIdx) {
      const slides = card.querySelectorAll(".carousel-slide");
      const dots = card.querySelectorAll(".car-dot");
      if (slides.length < 2) return;

      let current = 0;
      let paused = false;

      function goTo(index) {
        current = (index + slides.length) % slides.length;
        slides.forEach(function (s, i) {
          s.classList.toggle("is-active", i === current);
        });
        dots.forEach(function (d, i) {
          d.classList.toggle("is-active", i === current);
        });
      }

      const prev = card.querySelector(".car-prev");
      const next = card.querySelector(".car-next");
      if (prev) {
        prev.addEventListener("click", function () {
          goTo(current - 1);
        });
      }
      if (next) {
        next.addEventListener("click", function () {
          goTo(current + 1);
        });
      }
      dots.forEach(function (dot) {
        dot.addEventListener("click", function () {
          goTo(parseInt(dot.getAttribute("data-slide"), 10) || 0);
        });
      });

      card.addEventListener("mouseenter", function () {
        paused = true;
      });
      card.addEventListener("mouseleave", function () {
        paused = false;
      });

      if (!reduceMotion) {
        const timer = setInterval(function () {
          if (!paused && !document.hidden) {
            goTo(current + 1);
          }
        }, 4200 + (cardIdx % 4) * 550);
        carouselTimers.push(timer);
      }
    });

    scope.querySelectorAll("[data-quote-service]").forEach(function (link) {
      link.addEventListener("click", function () {
        const svc = link.getAttribute("data-quote-service");
        const sel = document.getElementById("q-service");
        if (sel && svc) {
          sel.value = svc;
        }
      });
    });

    const quoteForm = document.getElementById("quote-form");
    const feedback = document.getElementById("quote-feedback");
    const submitBtn = document.getElementById("quote-submit-btn");
    if (quoteForm && feedback) {
      quoteForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const name = (document.getElementById("q-name").value || "").trim();
        const email = (document.getElementById("q-email").value || "").trim();
        const service = document.getElementById("q-service").value;
        const message = (document.getElementById("q-message").value || "").trim();

        if (!name || !email || email.indexOf("@") < 1) {
          feedback.className = "form-feedback is-error";
          feedback.textContent = "Please enter your name and a valid email address.";
          feedback.hidden = false;
          return;
        }

        const defaultBtnLabel = submitBtn ? submitBtn.textContent : "Request Free Quote";
        if (submitBtn) {
          submitBtn.disabled = true;
          submitBtn.textContent = "Sending\u2026";
        }
        feedback.className = "form-feedback";
        feedback.textContent = "Sending\u2026";
        feedback.hidden = false;

        fetch("https://formsubmit.co/ajax/2a252327c56209063c017f2cd3a74366", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: name,
            email: email,
            service: service,
            message: message || "Please get in touch regarding a quote.",
            _subject: "New Quote Request \u2014 firegy.co.uk",
            _template: "table",
          }),
        })
          .then(function (res) {
            if (!res.ok) throw new Error("HTTP " + res.status);
            return res.json();
          })
          .then(function (data) {
            if (data && (data.success === "true" || data.success === true)) {
              feedback.className = "form-feedback is-success";
              feedback.textContent =
                "Thank you \u2014 your quote request has been sent to Firegy Ltd. We will respond promptly.";
              feedback.hidden = false;
              quoteForm.reset();
            } else {
              throw new Error("Unexpected response");
            }
          })
          .catch(function () {
            feedback.className = "form-feedback is-error";
            feedback.textContent =
              "Please email office@firegy.co.uk or call 0333 613 7233 directly.";
            feedback.hidden = false;
          })
          .finally(function () {
            if (submitBtn) {
              submitBtn.disabled = false;
              submitBtn.textContent = defaultBtnLabel;
            }
          });
      });
    }
  }

  function initPortalInteractions() {
    const form = document.getElementById("portal-login-form");
    const btn = document.getElementById("portal-submit-btn");
    const err = document.getElementById("portal-error");
    const emailEl = document.getElementById("p-email");
    const passEl = document.getElementById("p-password");

    if (!form || !btn || !err) return;

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      err.hidden = true;

      const email = (emailEl.value || "").trim();
      const pass = passEl.value || "";

      if (!email || email.indexOf("@") < 1 || !pass) {
        err.textContent = "Please enter your email address and password.";
        err.hidden = false;
        return;
      }

      btn.disabled = true;
      btn.textContent = "Signing in\u2026";

      setTimeout(function () {
        btn.disabled = false;
        btn.textContent = "Sign In";
        passEl.value = "";
        err.textContent =
          "Invalid email address or password. Please check your credentials or contact office@firegy.co.uk.";
        err.hidden = false;
      }, 450);
    });
  }

  let currentView = null;


  const LEGAL_PAGES = {
    privacy: {
      title: "Privacy Policy",
      updated: "Last updated: November 2026",
      sections: [
        {
          heading: "1. Who we are",
          body: "Firegy Ltd (Suite 11, 284\u2013290 Great Clowes St, Salford, M7 2HD, United Kingdom) is the data controller for personal information collected through firegy.co.uk and our compliance services. For any privacy enquiry, email office@firegy.co.uk or call 0333 613 7233."
        },
        {
          heading: "2. Information we collect",
          body: "When you request a quote, email us, or instruct us to carry out fire safety or Legionella compliance work, we collect your name, email address, telephone number, company or portfolio name, and property address or postcode."
        },
        {
          heading: "3. How we use your information",
          body: "We use your details solely to prepare quotations, schedule site visits, issue statutory reports and certificates (such as Fire Risk Assessments, BS 5839, BS 5266, BS 5306, PAT and Legionella records), manage Client Portal access, and send service due-date reminders under legitimate interest or contract performance (UK GDPR Articles 6(1)(b) and 6(1)(f)). We never sell or rent your data."
        },
        {
          heading: "4. Retention & security",
          body: "Statutory fire safety, inspection and certification records are retained for as long as required for legal, insurance and building-safety audit purposes (typically up to 7 years after the last active service). Access is restricted to authorised Firegy Ltd personnel and trusted UK/EEA infrastructure providers."
        },
        {
          heading: "5. Your UK GDPR rights",
          body: "You have the right to request access to, correction of, or deletion of your personal data, or to object to processing. Email office@firegy.co.uk with any request. You also have the right to lodge a complaint with the Information Commissioner\u2019s Office (ico.org.uk)."
        }
      ]
    },
    terms: {
      title: "Terms of Use",
      updated: "Last updated: November 2026",
      sections: [
        {
          heading: "1. Website information",
          body: "This website is operated by Firegy Ltd. All technical guides, checklists and British Standard summaries published on this site are provided for general guidance for landlords, responsible persons and managing agents in England and Wales and do not constitute formal legal advice or replace a site-specific assessment."
        },
        {
          heading: "2. Quotations & engagements",
          body: "Submitting a quote enquiry through this website does not create a binding contract. All fire risk assessments, servicing, testing, installation and QR logbook services are provided subject to written quotation acceptance and Firegy Ltd\u2019s service terms."
        },
        {
          heading: "3. Client & Engineer Portals",
          body: "Access to the Firegy Client Portal and Engineer Portal is strictly restricted to authorised account holders. Unauthorised access attempts, credential sharing or automated scraping are prohibited."
        },
        {
          heading: "4. Intellectual property",
          body: "All Firegy Ltd branding, logos, photographs, reports, zone plan formats and written guides on this website remain the intellectual property of Firegy Ltd and may not be reproduced without written permission."
        },
        {
          heading: "5. Governing law",
          body: "These terms are governed by the laws of England and Wales, and any disputes are subject to the exclusive jurisdiction of the courts of England and Wales."
        }
      ]
    },
    cookies: {
      title: "Cookies Policy",
      updated: "Last updated: November 2026",
      sections: [
        {
          heading: "1. Zero tracking or advertising cookies",
          body: "firegy.co.uk does not set third-party advertising cookies, behavioural tracking pixels or cross-site analytics cookies. Because no non-essential cookies are placed on your device, no cookie consent banner is required under UK PECR regulations."
        },
        {
          heading: "2. Strictly necessary browser storage",
          body: "Standard browser navigation (such as page hash routes and responsive layout rendering) operates locally in your browser without storing tracking identifiers. When authenticated Client Portal or Engineer Portal accounts are enabled, strictly necessary session cookies will be used solely to keep authorised users securely signed in."
        },
        {
          heading: "3. Questions",
          body: "If you have any questions about privacy or cookies on this website, contact office@firegy.co.uk or call 0333 613 7233."
        }
      ]
    }
  };

  function renderLegalPage(key) {
    var doc = LEGAL_PAGES[key];
    if (!doc) return renderHome();
    return (
      '<section class="section article-section">' +
      '<div class="container article-container">' +
      '<a href="#home" class="back-link">&larr; Back to Home</a>' +
      '<p class="eyebrow">Legal</p>' +
      '<h1 class="article-title">' + esc(doc.title) + "</h1>" +
      '<p class="article-meta">' + esc(doc.updated) + " &middot; Firegy Ltd</p>" +
      '<div class="article-body">' +
      doc.sections.map(function (s) {
        return "<h2>" + esc(s.heading) + "</h2><p>" + esc(s.body) + "</p>";
      }).join("") +
      "</div>" +
      "</div>" +
      "</section>"
    );
  }

  function route() {
    const rawHash = (window.location.hash || "").replace(/^#/, "");
    const main = document.getElementById("main-content");
    if (!main) return;

    closeMobileMenu();


    if (rawHash === "privacy" || rawHash === "terms" || rawHash === "cookies") {
      clearCarousels();
      currentView = "legal";
      document.title = LEGAL_PAGES[rawHash].title + " | Firegy Ltd";
      setActiveNav("");
      main.innerHTML = renderLegalPage(rawHash);
      window.scrollTo({ top: 0, behavior: "auto" });
      return;
    }

    if (rawHash === "portal") {
      clearCarousels();
      currentView = "portal";
      document.title = "Client Portal | Firegy Ltd";
      setActiveNav("portal");
      main.innerHTML = renderPortal("client");
      initPortalInteractions();
      window.scrollTo({ top: 0, behavior: "auto" });
      return;
    }

    if (rawHash === "engineer") {
      clearCarousels();
      currentView = "engineer";
      document.title = "Engineer Portal | Firegy Ltd";
      setActiveNav("engineer");
      main.innerHTML = renderPortal("engineer");
      initPortalInteractions();
      window.scrollTo({ top: 0, behavior: "auto" });
      return;
    }

    if (rawHash === "guides" || rawHash.indexOf("guides/") === 0) {
      clearCarousels();
      currentView = "guides";
      const slug = rawHash.indexOf("guides/") === 0 ? rawHash.slice("guides/".length) : "";
      setActiveNav("guides");
      if (slug) {
        const found = ARTICLES.find(function (a) {
          return a.slug === slug;
        });
        document.title = (found ? found.title : "News & Guides") + " | Firegy Ltd";
        main.innerHTML = renderGuideArticle(slug);
      } else {
        document.title = "News & Guides | Firegy Ltd";
        main.innerHTML = renderGuidesIndex();
      }
      window.scrollTo({ top: 0, behavior: "auto" });
      return;
    }

    // Home or in-page anchor (#home, #services, #about, #contact)
    const sectionIds = ["home", "services", "about", "contact"];
    const targetId = sectionIds.indexOf(rawHash) >= 0 ? rawHash : "";

    if (currentView !== "home") {
      clearCarousels();
      currentView = "home";
      document.title = 'Getting you compliant';
      main.innerHTML = renderHome();
      initHomeInteractions(main);
    }

    setActiveNav(targetId && targetId !== "home" ? targetId : "");

    if (targetId && targetId !== "home") {
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo({ top: 0, behavior: "auto" });
    }
  }

  function initShell() {
    const toggle = document.getElementById("menu-toggle");
    const drawer = document.getElementById("mobile-drawer");
    if (toggle && drawer) {
      toggle.addEventListener("click", function () {
        const open = toggle.getAttribute("aria-expanded") === "true";
        toggle.setAttribute("aria-expanded", open ? "false" : "true");
        drawer.hidden = open;
      });
      drawer.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", closeMobileMenu);
      });
    }

    window.addEventListener("hashchange", route);
    route();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initShell);
  } else {
    initShell();
  }

  document.addEventListener("click", function (ev) {
    var a = ev.target && ev.target.closest ? ev.target.closest('a[href="#home"]') : null;
    if (a && (window.location.hash === "" || window.location.hash === "#home")) {
      ev.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  });

  // Auto-close mobile menu when scrolling or tapping outside on phone
  var lastScrollYForMenu = 0;
  function isMobileMenuOpen() {
    var m = document.getElementById("mobile-drawer");
    return !!(m && !m.hidden);
  }
  window.addEventListener("scroll", function () {
    var m = document.getElementById("mobile-drawer");
    if (!m) return;
    if (!m.hidden) {
      if (Math.abs(window.scrollY - lastScrollYForMenu) > 8) {
        closeMobileMenu();
      }
    }
    lastScrollYForMenu = window.scrollY;
  }, { passive: true });
  document.addEventListener("touchmove", function (ev) {
    var m = document.getElementById("mobile-drawer");
    if (!m || m.hidden) return;
    if (!m.contains(ev.target)) {
      closeMobileMenu();
    }
  }, { passive: true });
  document.addEventListener("click", function (ev) {
    var m = document.getElementById("mobile-drawer");
    var btn = document.getElementById("menu-toggle");
    if (!m || m.hidden) return;
    if (!m.contains(ev.target) && (!btn || !btn.contains(ev.target))) {
      closeMobileMenu();
    }
  });
})();
