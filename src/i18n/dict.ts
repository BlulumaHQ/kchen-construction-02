// Centralized EN + ZH (Traditional Chinese, Taiwan) copy.
// Keep keys stable; the t() helper reads from here.

export type Lang = "en" | "zh";

export const dict = {
  // ---------- Top bar / Header / Footer ----------
  topbar: {
    phoneLabel: { en: "Call us", zh: "聯絡電話" },
    langEn: { en: "EN", zh: "EN" },
    langZh: { en: "繁中", zh: "繁中" },
    switchAria: { en: "Switch language", zh: "切換語言" },
  },
  nav: {
    home: { en: "Home", zh: "首頁" },
    about: { en: "About", zh: "關於我們" },
    services: { en: "Services", zh: "服務項目" },
    projects: { en: "Projects", zh: "工程實績" },
    recognitions: { en: "Recognitions", zh: "獲獎認證" },
    contact: { en: "Contact", zh: "聯絡我們" },
    menu: { en: "Menu", zh: "選單" },
    logoAlt: { en: "K. Chen Construction Management Home", zh: "K. Chen 營造管理 首頁" },
  },
  footer: {
    nav: { en: "Navigation", zh: "網站導覽" },
    contact: { en: "Contact", zh: "聯絡資訊" },
    office: { en: "Vancouver, BC", zh: "加拿大 BC 省 溫哥華" },
    rights: {
      en: "K. Chen Construction Management Inc. Copyright © 2026 All Rights Reserved.",
      zh: "K. Chen Construction Management Inc. 版權所有 © 2026 保留一切權利。",
    },
    webBy: { en: "Web Design by", zh: "網站設計：" },
  },

  // ---------- Home ----------
  home: {
    metaTitle: {
      en: "K. Chen Construction Management | Vancouver",
      zh: "K. Chen 營造管理｜溫哥華專業營建管理",
    },
    metaDesc: {
      en: "K. Chen Construction Management provides integrated design, project, and construction management services across Greater Vancouver.",
      zh: "K. Chen 營造管理提供大溫哥華地區整合性設計、專案與營建管理服務，住宅、商業案場一手包辦。",
    },
    heroTitle1: { en: "Building Excellence", zh: "用心打造" },
    heroTitle2: { en: "Across Vancouver", zh: "每一個溫哥華建案" },
    heroSub: {
      en: "Integrated design, project, and construction management services for discerning clients.",
      zh: "結合設計、專案與營建管理，為您打造高品質的住宅與商業空間。",
    },
    heroCta: { en: "View Our Work", zh: "看看我們的作品" },
    formTitle: { en: "Get a Free Consultation", zh: "免費諮詢" },
    formName: { en: "Full Name", zh: "您的姓名" },
    formEmail: { en: "Email Address", zh: "電子信箱" },
    formPhone: { en: "Phone Number", zh: "聯絡電話" },
    formMsg: { en: "Tell us about your project...", zh: "請簡述您的需求或案件..." },
    formSubmit: { en: "Send Message", zh: "送出訊息" },
    formSubmitting: { en: "Sending...", zh: "傳送中..." },
    formThanks: { en: "Thank you! We'll be in touch shortly.", zh: "謝謝您！我們會盡快與您聯繫。" },
    introKicker: { en: "WHO WE ARE", zh: "關於 KCHEN" },
    introTitle: {
      en: "We provide integrated design, project, and construction management services across Greater Vancouver.",
      zh: "我們在大溫地區提供整合設計、專案與營建管理的一站式服務。",
    },
    introBody: {
      en: "K. Chen Construction Management is a full-service construction management firm based in Vancouver, British Columbia. With over two decades of experience in residential, commercial, and institutional projects, we bring a meticulous approach to every build — from initial consultation through final handover.",
      zh: "K. Chen 營造管理位於 BC 省溫哥華，是一間提供全方位服務的營造管理公司。我們擁有逾二十年的住宅、商業及公共工程經驗，從前期評估、規劃、施工到最後交屋，每一個環節都用心把關。",
    },
    certsKicker: { en: "CERTIFICATIONS & MEMBERSHIPS", zh: "專業認證與會員資格" },
    testimonial: {
      en: "Kevin and his team delivered our home with exceptional attention to detail and professionalism. The process was transparent, on time, and the result exceeded our expectations.",
      zh: "Kevin 跟團隊把我們家的工程做得非常細緻、又很專業。整個流程公開透明，準時完工，成果完全超出我們預期。",
    },
    testimonialBy: { en: "— Homeowner, Shaughnessy", zh: "— Shaughnessy 屋主" },
    featuredKicker: { en: "FEATURED PROJECTS", zh: "精選工程" },
    featuredTitle: { en: "Recent Projects", zh: "近期工程實績" },
    featuredBtn: { en: "View All Projects", zh: "查看全部工程" },
    ctaTitle: { en: "Ready to Start Your Project?", zh: "準備好開始您的工程了嗎？" },
    ctaBody: {
      en: "Let's discuss your vision. We'd love to hear about your next project.",
      zh: "歡迎和我們聊聊您的想法，我們很期待參與您下一個專案。",
    },
    ctaBtn: { en: "Get in Touch", zh: "立即聯絡" },
  },

  // ---------- How We Work ----------
  how: {
    kicker: { en: "HOW WE WORK", zh: "服務流程" },
    title: {
      en: "Let's Talk About Your New Project, We Can Do It!",
      zh: "把您的新案子交給我們，從零到完工一手包辦！",
    },
    s1Title: { en: "Consultation", zh: "需求諮詢" },
    s1Desc: { en: "We listen to your vision and assess the project scope.", zh: "傾聽您的想法，並評估整體工程規模。" },
    s2Title: { en: "Design & Budgeting", zh: "設計與預算" },
    s2Desc: { en: "Detailed plans and transparent budgets tailored to you.", zh: "依您的需求量身規劃，預算清楚透明。" },
    s3Title: { en: "Permitting & Planning", zh: "申請與規劃" },
    s3Desc: { en: "We handle all permits and regulatory requirements.", zh: "所有相關建照與法規申辦，我們一手搞定。" },
    s4Title: { en: "Construction & Supervision", zh: "施工與監造" },
    s4Desc: { en: "Hands-on management ensuring quality and schedule.", zh: "親自進場管理，掌握品質與進度。" },
    s5Title: { en: "Handover & Warranty", zh: "交屋與保固" },
    s5Desc: { en: "Smooth handover with comprehensive warranty coverage.", zh: "完整保固，交屋過程順暢無壓力。" },
  },

  // ---------- About ----------
  about: {
    metaTitle: { en: "About | K. Chen Construction Management", zh: "關於我們｜K. Chen 營造管理" },
    metaDesc: {
      en: "K. Chen Construction Management — your one-stop trusted advisor for residential and commercial construction in Greater Vancouver.",
      zh: "K. Chen 營造管理｜大溫哥華地區住宅與商業營建的一站式專業顧問。",
    },
    pageTitle: { en: "About Us", zh: "關於我們" },
    storyKicker: { en: "OUR STORY", zh: "我們的故事" },
    storyTitle: { en: "Your One-Stop Trusted Advisor", zh: "您值得信賴的一站式營造夥伴" },
    storyP1: {
      en: "K. Chen Construction Management is a full-service construction management company in Vancouver, BC, specializing in residential and commercial projects — fulfilling the visions of property owners, business owners, developers, and property managers. We help our clients build their dream homes and realize their investment goals while bridging communication barriers.",
      zh: "K. Chen 營造管理位於 BC 省溫哥華，是一間提供全方位營造管理服務的公司，專精住宅與商業工程。我們服務的對象包含屋主、企業主、開發商與物業管理單位，協助大家打造理想住家、實現投資目標，並且在過程中替您搞定各種溝通上的問題。",
    },
    storyP2: {
      en: "We provide a streamlined range of services that brings efficiency to our clients by removing the hassle of coordinating multiple contractors. From the preliminary stage of evaluating a project's profitability and feasibility, to design and construction, to managing budget and schedule, we give our clients a genuine sense of security and comfort throughout the process.",
      zh: "我們提供一條龍式服務，讓您不必再為了協調多家廠商而傷腦筋。從前期的可行性與獲利評估、設計施工、到預算與進度管理，每一個階段都讓您安心。",
    },
    peopleKicker: { en: "OUR PEOPLE", zh: "團隊成員" },
    kevinName: { en: "Kevin Chen", zh: "Kevin Chen 陳先生" },
    kevinTitle: { en: "P. Eng., GSC", zh: "註冊專業工程師 (P. Eng.)、加拿大金印認證 (GSC)" },
    kevinP1: {
      en: "Kevin is the President of K. Chen Construction Management, and co-founder and partner of Formation Project Management Inc. With over 15 years of career expertise in the construction industry, Kevin works directly with clients and manages all trade partners at every stage of a project.",
      zh: "Kevin 是 K. Chen 營造管理的負責人，同時也是 Formation Project Management Inc. 的共同創辦人及合夥人。他擁有逾 15 年的營建產業實務經驗，每個專案都親自與客戶對接，並全程督導所有合作的工班與廠商。",
    },
    kevinP2: {
      en: "Prior to starting K. Chen Construction Management, Kevin was a Project Manager at a larger Canadian-based international construction firm. He has served on construction projects of various scales, managed budgets ranging from $250K to over $80 million, and worked on projects from Victoria and Whistler to every corner of the Lower Mainland. Notable projects include the River Rock Casino Resort South Parkade in Richmond, the Horseshoe Bay BC Ferries terminal and parkade, and various BMO branches across Greater Vancouver.",
      zh: "創立 K. Chen 營造管理之前，Kevin 曾任職於一家加拿大跨國營造公司的專案經理。他經手過大大小小的工程，管理過 25 萬至 8 千萬加幣以上的工程預算，足跡從 Victoria、Whistler 一路到大溫各個角落。代表作包含列治文 River Rock 賭場度假村南棟停車場、Horseshoe Bay BC Ferries 碼頭與停車場，以及大溫各地多間 BMO 蒙特婁銀行分行。",
    },
    kevinP3: {
      en: "Kevin is a registered Professional Engineer and holds the Gold Seal Certification from the Canadian Construction Association.",
      zh: "Kevin 是 BC 省註冊專業工程師，同時擁有加拿大營造協會 (CCA) 頒發的 Gold Seal 金印認證。",
    },
    certsKicker: { en: "CERTIFICATIONS & MEMBERSHIPS", zh: "專業認證與會員資格" },
    certsTitle: { en: "Industry Recognized", zh: "業界肯定" },
  },

  // ---------- Services ----------
  services: {
    metaTitle: { en: "Services | K. Chen Construction Management", zh: "服務項目｜K. Chen 營造管理" },
    metaDesc: {
      en: "Construction management, design-build, and project management services for residential and commercial projects across Greater Vancouver.",
      zh: "提供大溫地區住宅及商業案的營建管理、設計建造 (Design-Build) 與專案管理服務。",
    },
    pageTitle: { en: "Services", zh: "服務項目" },
    kicker: { en: "WHAT WE DO", zh: "我們提供什麼" },
    title: { en: "Comprehensive Construction Solutions", zh: "完整的營造解決方案" },
    cm: {
      title: { en: "Construction Management", zh: "營建管理 (Construction Management)" },
      tag: { en: "We take care of everything", zh: "從頭到尾都交給我們" },
      desc: {
        en: "KChen delivers high-quality construction on budget, on time, and to our clients' satisfaction. From pre-construction planning — budgeting, scheduling, and identifying challenges and solutions — through a transparent bidding process, cost control, and on-site supervision, we ensure quality standards right through to completion.",
        zh: "KChen 致力於在預算內、準時交付高品質工程，讓客戶滿意。從前期的預算規劃、工期排程、問題評估與解決方案研擬，到公開透明的招標流程、成本控管、現場監造，每一個環節都嚴格把關，確保完工品質。",
      },
    },
    db: {
      title: { en: "Design-Build", zh: "設計建造 (Design-Build)" },
      tag: { en: "Transforming dreams into reality", zh: "把夢想變成真的" },
      desc: {
        en: "Our designers from North America, Europe, and Asia bring diverse cultural backgrounds to every project — from single-family homes to multi-family residences to commercial spaces. The integrated design-build process keeps design and construction coordinated, so projects run smoothly without the usual miscommunication between teams.",
        zh: "我們的設計團隊來自北美、歐洲與亞洲，為每個案子注入多元文化的設計思維 — 從獨棟住宅、多戶住宅到商業空間都能勝任。整合式的 Design-Build 模式讓設計與施工團隊密切配合，避免兩邊溝通卡關，工程進行得更順利。",
      },
    },
    pm: {
      title: { en: "Project Management / Owner's Representative", zh: "專案管理／業主代表 (Owner's Representative)" },
      tag: { en: "We have your best interest in mind", zh: "永遠站在您這邊" },
      desc: {
        en: "With deep local knowledge, expertise, and a wide industry network, we help clients maximize their investment potential and assess project feasibility — including years of experience working with government bodies and local authorities. As your Owner's Representative, we protect your interests and provide strategy throughout development and construction.",
        zh: "我們熟悉當地市場、擁有豐富業界人脈，協助客戶評估專案可行性、把投資效益最大化，並擁有多年與市政府、相關主管機關打交道的經驗。擔任您的業主代表時，我們會在整個開發與施工過程中替您把關利益、提供策略建議。",
      },
    },
    forKicker: { en: "WHO WE BUILD FOR", zh: "我們服務的對象" },
    forTitle: { en: "Residential & Commercial", zh: "住宅與商業案皆可" },
    res: {
      title: { en: "Residential", zh: "住宅案 (Residential)" },
      tag: { en: "Your home is our home", zh: "把您的家當自己家" },
      desc: {
        en: "We don't just build houses — we build lasting relationships. From custom single-family homes to multi-family townhomes and condominiums, we build each home as if it were our own, helping clients create the sanctuary where lasting memories are made.",
        zh: "我們蓋的不只是房子，更是長久的信任關係。從客製化獨棟住宅、多戶連棟到大樓社區，每一戶我們都當成自己家在蓋，幫客戶打造留下美好回憶的溫馨家園。",
      },
    },
    com: {
      title: { en: "Commercial", zh: "商業案 (Commercial)" },
      tag: { en: "Your business's problem solver", zh: "幫您事業解決問題" },
      desc: {
        en: "We're in the business of supporting your success. Our team brings concrete, hands-on experience across offices, financial institutions, healthcare, restaurants, and religious buildings — turning your vision into reality, whatever the challenge.",
        zh: "我們的使命是幫助您事業成功。團隊在辦公室、金融機構、醫療院所、餐廳到宗教建築都有實際施作經驗，無論案件挑戰多大，都能把您的願景化為實際成果。",
      },
    },
  },

  // ---------- Projects ----------
  projects: {
    metaTitle: { en: "Projects | K. Chen Construction Management", zh: "工程實績｜K. Chen 營造管理" },
    metaDesc: {
      en: "Explore our portfolio of residential and commercial construction projects across Greater Vancouver.",
      zh: "瀏覽我們在大溫地區的住宅與商業營建作品集。",
    },
    pageTitle: { en: "Projects", zh: "工程實績" },
    loading: { en: "Loading projects…", zh: "案例載入中…" },
    error: { en: "Couldn't load projects. Please try again later.", zh: "案例載入失敗，請稍後再試。" },
    none: { en: "No projects match the selected filters.", zh: "找不到符合條件的案例。" },
    projectType: { en: "Project Type", zh: "工程類型" },
    serviceType: { en: "Service Type", zh: "服務類型" },
    clear: { en: "Clear Filters", zh: "清除篩選" },
    countOne: { en: "1 project", zh: "1 件案例" },
    countMany: { en: "{n} projects", zh: "{n} 件案例" },
  },

  // ---------- Portfolio detail ----------
  portfolio: {
    back: { en: "Back to Projects", zh: "回到工程實績" },
    notFound: { en: "Project Not Found", zh: "找不到此案例" },
    loadError: { en: "Couldn't load this project", zh: "案例載入失敗" },
    loading: { en: "Loading project…", zh: "案例載入中…" },
  },

  // ---------- Recognitions ----------
  recog: {
    metaTitle: { en: "Recognitions | K. Chen Construction Management", zh: "獲獎認證｜K. Chen 營造管理" },
    metaDesc: {
      en: "Awards, certifications, and industry recognition earned by K. Chen Construction Management.",
      zh: "K. Chen 營造管理所獲得的獎項、專業認證與業界肯定。",
    },
    pageTitle: { en: "Recognitions", zh: "獲獎認證" },
    kicker: { en: "AWARDS & CERTIFICATIONS", zh: "獎項與認證" },
    title: { en: "Industry Recognized Excellence", zh: "業界肯定的卓越品質" },
    g: {
      title: { en: "Georgie Awards", zh: "Georgie Awards 喬治獎" },
      desc: {
        en: "Recognized by the Canadian Home Builders' Association of BC for outstanding achievement in residential construction.",
        zh: "由 BC 省加拿大住宅建造商協會 (CHBA BC) 頒發，肯定我們在住宅營造領域的傑出成就。",
      },
    },
    w: {
      title: { en: "2-5-10 Year Warranty", zh: "2-5-10 年新屋保固" },
      desc: {
        en: "All projects are backed by comprehensive 2-5-10 year new home warranty coverage for complete homeowner peace of mind.",
        zh: "所有工程皆提供完整的 2-5-10 年新屋保固，讓屋主完全放心。",
      },
    },
    a: {
      title: { en: "GVHBA Member", zh: "GVHBA 大溫住宅建造商協會會員" },
      desc: {
        en: "Proud member of the Greater Vancouver Home Builders' Association, committed to industry best practices and standards.",
        zh: "我們是大溫住宅建造商協會 (GVHBA) 的正式會員，秉持業界最佳實務與標準。",
      },
    },
    n: {
      title: { en: "National Home Warranty", zh: "National Home Warranty 全國新屋保固" },
      desc: {
        en: "Registered with National Home Warranty providing additional protection and quality assurance for every project.",
        zh: "與 National Home Warranty 合作註冊，為每一個案件提供額外的品質保障。",
      },
    },
  },

  // ---------- Contact ----------
  contact: {
    metaTitle: { en: "Contact | K. Chen Construction Management", zh: "聯絡我們｜K. Chen 營造管理" },
    metaDesc: {
      en: "Get in touch with K. Chen Construction Management for your next residential or commercial project in Greater Vancouver.",
      zh: "聯絡 K. Chen 營造管理，討論您在大溫地區的住宅或商業工程需求。",
    },
    pageTitle: { en: "Contact Us", zh: "聯絡我們" },
    sub: { en: "We'd love to hear about your project.", zh: "歡迎跟我們聊聊您的案子。" },
    name: { en: "Name", zh: "姓名" },
    email: { en: "Email", zh: "電子信箱" },
    phone: { en: "Phone", zh: "聯絡電話" },
    message: { en: "Message", zh: "留言內容" },
    send: { en: "Send Message", zh: "送出訊息" },
    sent: { en: "Message Sent", zh: "訊息已送出" },
    sentDesc: { en: "Thank you! We'll be in touch shortly.", zh: "感謝您！我們會盡快與您聯繫。" },
    infoTitle: { en: "Get in Touch", zh: "與我們聯繫" },
    infoBody: {
      en: "Whether you're planning a new custom home, a commercial development, or a renovation, we'd love to discuss how K. Chen Construction Management can help bring your vision to life.",
      zh: "不論您正在規劃新建客製化住宅、商業開發案或是整修工程，都歡迎找我們聊聊 K. Chen 營造管理可以怎麼幫您把想法實現。",
    },
    officeLabel: { en: "Office", zh: "辦公室" },
    officeAddr: { en: "Vancouver, British Columbia", zh: "加拿大 BC 省 溫哥華" },
    emailLabel: { en: "Email", zh: "電子信箱" },
    phoneLabel: { en: "Phone", zh: "聯絡電話" },
  },

  notFound: {
    title: { en: "Oops! Page not found", zh: "找不到您要的頁面" },
    home: { en: "Return to Home", zh: "回到首頁" },
  },
};

export type DictNode = string | { en: string; zh: string } | { [k: string]: DictNode };
