// data.jsx — Tung Lab content + i18n. Exports to window.
// All strings live here so VI/EN switch is a single lookup.

const FPHOTO_URL = "https://github.com/tung78952/FPhoto/releases/download/v1.0.0/FPhoto-Setup-1.0.0.exe";
const FPHOTO_RELEASE = "https://github.com/tung78952/FPhoto/releases/tag/v1.0.0";
const FPHOTO_RELEASE_API = "https://api.github.com/repos/tung78952/FPhoto/releases/tags/v1.0.0";

// ---- UI chrome strings (nav, buttons, labels) ----
const STRINGS = {
  vi: {
    nav: { home: "Trang chủ", apps: "Ứng dụng", about: "Giới thiệu", aboutMe: "Về tôi" },
    cta: { details: "Xem chi tiết", download: "Tải xuống", downloadWin: "Tải cho Windows", back: "Quay lại", aboutMe: "Xem About Me", contact: "Liên hệ" },
    status: { available: "Đang có", "coming-soon": "Sắp ra mắt", beta: "Beta", "not-planned": "Chưa hỗ trợ" },
    hero: {
      kicker: "MINI PRODUCT LAB",
      title: "Tung Lab",
      tagline: "Những app nhỏ mình làm để giải quyết việc thật.",
      desc: "Một nơi để mình giới thiệu, hướng dẫn và chia sẻ các ứng dụng mình tự làm. Tải trực tiếp, không vòng vo.",
      primary: "Xem ứng dụng",
      secondary: "FPhoto là gì?",
      stat1: "app đang chạy", stat2: "miễn phí", stat3: "không quảng cáo",
    },
    gallery: { kicker: "BỘ SƯU TẬP APP", title: "Ứng dụng", sub: "Mỗi app sinh ra từ một việc thật cần làm cho nhanh." },
    section: { features: "Tính năng", usage: "Hướng dẫn dùng nhanh", requirements: "Yêu cầu hệ thống", release: "Thông tin phát hành", notes: "Lưu ý trước khi cài", screenshots: "Ảnh giao diện", download: "Tải xuống", platforms: "Nền tảng" },
    detail: { version: "Phiên bản", released: "Ngày phát hành", file: "Tên file", minos: "Hệ điều hành tối thiểu", size: "Dung lượng", releaseNotes: "Trang phát hành trên GitHub", step: "Bước" },
    footerCta: { title: "Cần lọc ảnh nhanh hơn?", desc: "Tải FPhoto và thử ngay trong vài phút.", btn: "Tải FPhoto cho Windows" },
    footer: { blurb: "Các app nhỏ do Tùng tự làm. Tải trực tiếp, dùng ngay.", github: "GitHub", copyright: "© 2026 Tung Lab. Apps built by Tung." },
    about: { title: "Về Tung Lab", body: "Tung Lab là không gian cá nhân để mình gom các app tự làm về một chỗ — mỗi cái giải một bài toán cụ thể trong công việc. Không backend, không tài khoản, không thu thập dữ liệu. Bạn thấy app hữu ích thì tải về dùng.", ctaTitle: "Muốn biết người đứng sau Tung Lab?", ctaDesc: "Mình có một trang About Me riêng: dự án, kỹ năng, cách mình học bằng project thật và một vài sở thích ngoài code." },
  },
  en: {
    nav: { home: "Home", apps: "Apps", about: "About", aboutMe: "About Me" },
    cta: { details: "View details", download: "Download", downloadWin: "Download for Windows", back: "Back", aboutMe: "View About Me", contact: "Contact" },
    status: { available: "Available", "coming-soon": "Coming soon", beta: "Beta", "not-planned": "Not supported" },
    hero: {
      kicker: "MINI PRODUCT LAB",
      title: "Tung Lab",
      tagline: "Small apps built for real workflows.",
      desc: "A place where I share apps I build — with guides, screenshots, and direct downloads. No detours.",
      primary: "Browse apps",
      secondary: "What is FPhoto?",
      stat1: "app shipping", stat2: "free", stat3: "no ads",
    },
    gallery: { kicker: "APP COLLECTION", title: "Apps", sub: "Each app was born from a real job that needed to go faster." },
    section: { features: "Features", usage: "Quick start", requirements: "System requirements", release: "Release info", notes: "Before you install", screenshots: "Screenshots", download: "Download", platforms: "Platforms" },
    detail: { version: "Version", released: "Released", file: "File name", minos: "Minimum OS", size: "Size", releaseNotes: "GitHub release page", step: "Step" },
    footerCta: { title: "Need to cull photos faster?", desc: "Grab FPhoto and try it in minutes.", btn: "Download FPhoto for Windows" },
    footer: { blurb: "Small apps built by Tung. Direct downloads, ready to use.", github: "GitHub", copyright: "© 2026 Tung Lab. Apps built by Tung." },
    about: { title: "About Tung Lab", body: "Tung Lab is a personal space where I collect the apps I build — each one solving a specific job at work. No backend, no accounts, no data collection. If an app helps, just download and use it.", ctaTitle: "Want to meet the person behind Tung Lab?", ctaDesc: "I made a separate About Me page for projects, skills, how I learn by building real things, and a few interests outside code." },
  },
};

// ---- Apps ----
const APPS = [
  {
    id: "fphoto", slug: "fphoto", name: "FPhoto", version: "1.0.0", status: "available",
    releaseDate: "2026-05-12",
    accent: "violet",
    pixelLogo: "fphoto",
    platforms: {
      windows: { status: "available", label: "Windows", fileName: "FPhoto-Setup-1.0.0.exe", fileSize: "153.5 MB", url: FPHOTO_URL, minimumOs: "Windows 10 or later" },
      macos: { status: "coming-soon", label: "macOS" },
      linux: { status: "coming-soon", label: "Linux" },
    },
    releasePage: FPHOTO_RELEASE,
    releaseApiUrl: FPHOTO_RELEASE_API,
    screenshots: [
      { id: "workspace", srcLight: "assets/fphoto/workspace-light.png", srcDark: "assets/fphoto/workspace-dark.png", caption: { vi: "Khu làm việc chính", en: "Main workspace" } },
      { id: "search", srcLight: "assets/fphoto/smart-search-light.png", srcDark: "assets/fphoto/smart-search-dark.png", caption: { vi: "Smart Search", en: "Smart Search" } },
      { id: "grid", srcLight: "assets/fphoto/grid-light.png", srcDark: "assets/fphoto/grid-dark.png", caption: { vi: "Xem dạng lưới thumbnail", en: "Thumbnail grid view" } },
      { id: "preview", srcLight: "assets/fphoto/preview-exif-light.png", srcDark: "assets/fphoto/preview-exif-dark.png", caption: { vi: "Preview & EXIF", en: "Preview & EXIF" } },
      { id: "copy", srcLight: "assets/fphoto/copy-move-light.png", srcDark: "assets/fphoto/copy-move-dark.png", caption: { vi: "Thanh thao tác Copy/Move", en: "Copy/Move action bar" } },
    ],
    content: {
      vi: {
        tagline: "Lọc ảnh theo mã/ảnh chụp và copy file an toàn.",
        shortDescription: "FPhoto giúp thợ ảnh lọc nhanh ảnh theo mã, xem trước JPEG/RAW và copy file sang thư mục giao hàng mà không phải mò thủ công trong Explorer.",
        longDescription: "FPhoto là app desktop cho Windows, được làm cho thợ ảnh và studio nhỏ. App giúp quét thư mục ảnh, nhận diện danh sách mã ảnh bạn chọn, lọc đúng file cần giao, xem trước ảnh và copy sang thư mục đích một cách an toàn.",
        features: [
          "Smart Search hiểu mã ảnh, danh sách số, khoảng số, ảnh chụp và câu tiếng Việt tự nhiên.",
          "Lọc theo JPEG, RAW hoặc các định dạng khác.",
          "Xem kết quả theo Danh sách, Nhóm hoặc Lưới thumbnail.",
          "Xem trước JPEG/PNG/WebP/GIF/BMP và preview nhúng của RAW khi có.",
          "Đọc EXIF theo yêu cầu và lọc theo ngày chụp hoặc ISO.",
          "Copy file an toàn, tự đổi tên khi đích đã có file trùng.",
          "Move có xác nhận và bị khóa khi nguồn là thẻ nhớ hoặc ổ rời.",
        ],
        usageSteps: [
          "Chọn thư mục ảnh cần xử lý.",
          "Dán danh sách mã ảnh khách chọn vào ô tìm kiếm.",
          "Chọn loại file hoặc bộ lọc EXIF nếu cần.",
          "Xem lại kết quả bằng Danh sách, Nhóm hoặc Lưới.",
          "Chọn thư mục đích.",
          "Bấm Copy để xuất file an toàn.",
        ],
        notes: [
          "FPhoto hiện chỉ có bản Windows.",
          "Installer chưa có code-signing certificate, Windows SmartScreen có thể hiện cảnh báo khi cài lần đầu.",
          "Move bị khóa nếu nguồn nằm trên thẻ nhớ hoặc ổ rời để tránh mất file gốc.",
        ],
      },
      en: {
        tagline: "Filter photos by client-selected codes and copy files safely.",
        shortDescription: "FPhoto helps photographers quickly filter images by code, preview JPEG/RAW files, and copy selected files without manually searching in Explorer.",
        longDescription: "FPhoto is a Windows desktop app for photographers and small studios. It scans photo folders, understands client-selected image codes, filters matching files, previews images, and safely copies them to a delivery folder.",
        features: [
          "Smart Search understands image codes, number lists, ranges, and natural Vietnamese text.",
          "Filter by JPEG, RAW, or other file types.",
          "Review results in List, Groups, or Thumbnail Grid view.",
          "Preview JPEG/PNG/WebP/GIF/BMP and embedded RAW previews when available.",
          "Load EXIF on demand and filter by date taken or ISO.",
          "Safely copy files and auto-rename duplicates at the destination.",
          "Move requires confirmation and is locked for memory cards or removable drives.",
        ],
        usageSteps: [
          "Choose the photo folder you want to process.",
          "Paste the client-selected image codes into the search box.",
          "Apply file type or EXIF filters if needed.",
          "Review results in List, Groups, or Grid view.",
          "Choose a destination folder.",
          "Click Copy to export files safely.",
        ],
        notes: [
          "FPhoto is currently available for Windows only.",
          "The installer is not code-signed yet, so Windows SmartScreen may show a warning during first install.",
          "Move is locked for memory cards and removable drives to protect original files.",
        ],
      },
    },
  },
  {
    id: "soon-1", slug: "soon-1", name: "Untitled · 02", version: "—", status: "coming-soon",
    accent: "cyan", pixelLogo: "question",
    content: {
      vi: { tagline: "Một công cụ nhỏ nữa đang nhen nhóm.", shortDescription: "Mình đang phác thảo app tiếp theo. Sẽ lại là một thứ gọn nhẹ giải đúng một việc." },
      en: { tagline: "Another small tool is brewing.", shortDescription: "I'm sketching the next app. It'll be another lean thing that nails one job." },
    },
    platforms: { windows: { status: "coming-soon", label: "Windows" } },
  },
  {
    id: "soon-2", slug: "soon-2", name: "Untitled · 03", version: "—", status: "coming-soon",
    accent: "coral", pixelLogo: "question",
    content: {
      vi: { tagline: "Ý tưởng còn trong ngăn kéo.", shortDescription: "Chưa kịp đặt tên. Cứ ghé lại sau nhé." },
      en: { tagline: "Still an idea in the drawer.", shortDescription: "Not even named yet. Check back later." },
    },
    platforms: { windows: { status: "coming-soon", label: "Windows" } },
  },
];

// Per-app accents — all warm to stay on the orange identity, but distinguishable.
const ACCENTS = {
  violet: { base: "#cc6b4e", soft: "var(--accent-soft)", ink: "#8a4429" }, // FPhoto = clay orange
  cyan: { base: "#c2693b", soft: "var(--accent-soft)", ink: "#7a3d1d" },   // burnt
  coral: { base: "#e0a14f", soft: "var(--accent-soft)", ink: "#7a571a" },  // amber
  lime: { base: "#b6713f", soft: "var(--accent-soft)", ink: "#6a3f1d" },
};

const PORTFOLIO = {
  vi: {
    hero: {
      kicker: "STUDENT DEVELOPER",
      title: "Xin chào, mình là Tùng",
      subtitle: "Sinh viên năm 3 ngành Công nghệ Thông tin tại UIT - VNUHCM, đang học cách biến ý tưởng thành sản phẩm chạy được bằng code, sự tò mò và AI-assisted workflows.",
      status: "Learning by building practical projects."
    },
    about: {
      title: "Mình đang học bằng cách làm thật",
      body: "Mình là Trần Phan Thanh Tùng, một sinh viên IT đang tìm hiểu Software Engineering qua đồ án ở trường, project cá nhân và những lần tự mày mò sửa lỗi. Mình thích cảm giác một ý tưởng ban đầu dần biến thành một sản phẩm có thể chạy, test, deploy và cải thiện được. Hiện mình quan tâm đến web app, backend, database, testing, deployment và cách dùng AI tools để hiểu project nhanh hơn, làm việc có hệ thống hơn."
    },
    projectsTitle: "Featured Projects",
    projectsSub: "Một vài project mình đã học được nhiều nhất từ đó.",
    skillsTitle: "Skills & Tools",
    aiTitle: "AI-assisted Workflow",
    aiBody: "Mình dùng AI như một công cụ hỗ trợ học tập và phát triển: đọc hiểu codebase, chia task, lên checklist, debug, refactor nhỏ, viết tài liệu và kiểm tra lại luồng hoạt động. Phần quan trọng vẫn là mình phải hiểu yêu cầu, kiểm tra kết quả, chỉnh sửa và chịu trách nhiệm với sản phẩm cuối cùng.",
    interestsTitle: "Outside Coding",
    interestsSub: "Một vài thứ giữ cho mình có năng lượng và gu riêng ngoài màn hình code.",
    contactTitle: "Contact",
    contactSub: "Nếu bạn muốn xem thêm project hoặc trao đổi cơ hội học hỏi/làm việc, cứ ghé qua các link này.",
    buttons: { projects: "Xem Projects", github: "GitHub", contact: "Contact" }
  },
  en: {
    hero: {
      kicker: "STUDENT DEVELOPER",
      title: "Hi, I'm Tung",
      subtitle: "Third-year IT student at UIT - VNUHCM, learning to turn ideas into working software with code, curiosity, and AI-assisted workflows.",
      status: "Learning by building practical projects."
    },
    about: {
      title: "I learn by building real things",
      body: "I'm Tran Phan Thanh Tung, an IT student exploring Software Engineering through school projects, personal products, and a lot of hands-on debugging. I like the moment when an early idea slowly becomes something that can run, be tested, deployed, and improved. Right now, I'm interested in web apps, backend systems, databases, testing, deployment, and using AI tools to understand projects faster and work more deliberately."
    },
    projectsTitle: "Featured Projects",
    projectsSub: "A few projects that taught me the most.",
    skillsTitle: "Skills & Tools",
    aiTitle: "AI-assisted Workflow",
    aiBody: "I use AI as a learning and development companion: to understand codebases, break tasks down, make checklists, debug, do small refactors, write documentation, and re-check how a flow behaves. The important part is still mine: understanding the requirement, validating the result, editing carefully, and taking responsibility for the final product.",
    interestsTitle: "Outside Coding",
    interestsSub: "A few things that keep my energy and taste alive outside the code editor.",
    contactTitle: "Contact",
    contactSub: "If you want to see more projects or talk about learning/work opportunities, these are the best places to find me.",
    buttons: { projects: "View Projects", github: "GitHub", contact: "Contact" }
  },
  projects: [
    { name: "BikeStore Management System", type: "FULL-STACK", icon: "store", repo: "https://github.com/tung78952/bike-store-fullstack", tags: ["FastAPI", "ReactJS", "PostgreSQL", "SQLAlchemy", "JWT", "Tailwind CSS", "Docker"], vi: "Full-stack web app quản lý cửa hàng xe đạp: sản phẩm, khách hàng, nhân viên, đơn hàng, tồn kho, doanh thu, đăng nhập và phân quyền.", en: "A full-stack web app for bicycle store management: products, customers, staff, orders, inventory, sales, authentication, and role-based access.", learned: { vi: "Auth, roles, inventory logic, API design", en: "Auth, roles, inventory logic, API design" } },
    { name: "Exam Generation and Grading Management System", type: "COURSE PROJECT", icon: "exam", repo: "https://github.com/tung78952/Exam-Generation-and-Grading-Management-System", tags: ["NextJS", "ReactJS", "TypeScript", "NestJS", "Prisma", "MySQL", "Docker", "JWT"], vi: "Project môn Nhập môn Công nghệ Phần mềm, hỗ trợ quản lý ngân hàng câu hỏi, tạo đề, chấm điểm, báo cáo và phân quyền Admin/Lecturer.", en: "A Software Engineering course project for question banks, exam generation, grading, reports, and Admin/Lecturer permissions.", learned: { vi: "Exam flow, permissions, grading workflow", en: "Exam flow, permissions, grading workflow" } },
    { name: "FPhoto", type: "PERSONAL APP", icon: "fphoto", repo: "https://github.com/tung78952/FPhoto", tags: ["Electron", "TypeScript", "SQLite", "HTML", "CSS"], vi: "Windows desktop app giúp photographer lọc, tìm kiếm, preview và copy ảnh nhanh hơn sau buổi chụp. Project xuất phát từ nhu cầu thật khi phải chọn ảnh thủ công.", en: "A Windows desktop app that helps photographers filter, search, preview, and copy photos faster after a shoot. It came from a real workflow problem.", learned: { vi: "Desktop UX, file safety, real workflow", en: "Desktop UX, file safety, real workflow" } }
  ],
  skills: [
    { group: "Programming", items: ["Python", "C++", "SQL", "JavaScript", "HTML", "CSS"] },
    { group: "Backend", items: ["FastAPI", "ExpressJS", "RESTful API", "JWT Authentication"] },
    { group: "Frontend", items: ["ReactJS", "NextJS", "Basic Full-stack Development"] },
    { group: "Database", items: ["PostgreSQL", "MySQL", "SQLAlchemy", "Prisma"] },
    { group: "Tools", items: ["Git", "GitHub", "Docker", "Linux", "VS Code", "Vercel"] },
    { group: "AI-assisted Development", items: ["Claude Code", "OpenCode", "GitHub Copilot", "Codex", "ChatGPT"] }
  ],
  interests: [
    { id: "gaming", title: "Gaming", sprite: "bot", vi: "Game cho mình chiến thuật, phản xạ, teamwork và problem-solving.", en: "Games give me strategy, reflexes, teamwork, and problem-solving." },
    { id: "music", title: "Music", sprite: "music", vi: "Mình nghe nhạc để thư giãn và giữ nhịp làm việc.", en: "Music helps me relax and keep a steady working rhythm." },
    { id: "photography", title: "Photography", sprite: "camera", vi: "Mình thích bố cục, màu sắc và lưu lại khoảnh khắc. Sở thích này cũng dẫn tới FPhoto.", en: "I like composition, color, and capturing moments. This interest also led to FPhoto." },
    { id: "football", title: "Football", sprite: "football", vi: "Bóng đá có tính đồng đội, năng lượng và những pha xử lý rất đời.", en: "Football has teamwork, energy, and very human split-second decisions." },
    { id: "models", title: "Model kits", sprite: "model", vi: "Mô hình dạy mình kiên nhẫn với chi tiết và cảm giác tự tay hoàn thiện một thứ.", en: "Model kits teach patience with detail and the satisfaction of finishing something by hand." }
  ],
  contact: [
    { label: "GitHub", href: "https://github.com/tung78952" },
    { label: "Email", href: "mailto:iamtptt2005@gmail.com" },
    { label: "Facebook", href: "https://www.facebook.com/takumi.minamino.104" },
    { label: "TikTok", href: "https://www.tiktok.com/@iamtptt05" }
  ]
};

Object.assign(window, { STRINGS, APPS, ACCENTS, PORTFOLIO, FPHOTO_URL, FPHOTO_RELEASE, FPHOTO_RELEASE_API });
