// data.jsx — Tung Lab content + i18n. Exports to window.
// All strings live here so VI/EN switch is a single lookup.

const FPHOTO_URL = "https://github.com/tung78952/FPhoto/releases/download/v1.0.0/FPhoto-Setup-1.0.0.exe";
const FPHOTO_RELEASE = "https://github.com/tung78952/FPhoto/releases/tag/v1.0.0";
const FPHOTO_RELEASE_API = "https://api.github.com/repos/tung78952/FPhoto/releases/tags/v1.0.0";

// ---- UI chrome strings (nav, buttons, labels) ----
const STRINGS = {
  vi: {
    nav: { home: "Trang chủ", apps: "Ứng dụng", about: "Giới thiệu" },
    cta: { details: "Xem chi tiết", download: "Tải xuống", downloadWin: "Tải cho Windows", back: "Quay lại" },
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
    about: { title: "Về Tung Lab", body: "Tung Lab là không gian cá nhân để mình gom các app tự làm về một chỗ — mỗi cái giải một bài toán cụ thể trong công việc. Không backend, không tài khoản, không thu thập dữ liệu. Bạn thấy app hữu ích thì tải về dùng." },
  },
  en: {
    nav: { home: "Home", apps: "Apps", about: "About" },
    cta: { details: "View details", download: "Download", downloadWin: "Download for Windows", back: "Back" },
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
    about: { title: "About Tung Lab", body: "Tung Lab is a personal space where I collect the apps I build — each one solving a specific job at work. No backend, no accounts, no data collection. If an app helps, just download and use it." },
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

Object.assign(window, { STRINGS, APPS, ACCENTS, FPHOTO_URL, FPHOTO_RELEASE, FPHOTO_RELEASE_API });
