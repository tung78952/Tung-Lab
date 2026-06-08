# Tung Lab Portfolio Experiment Status

Ngay cap nhat: 2026-06-06

## Scope hien tai

Day la worktree thu nghiem, khong phai folder deploy chinh.

- Worktree thu nghiem: `D:/Tunglab/tung-lab-portfolio-experiment`
- Branch: `portfolio-mascot`
- Base repo chinh/deploy: `D:/Tunglab/claude-design-fixed` tren `main`
- Folder chinh van sach va chua bi merge/push nhung thay doi portfolio.

Chay local de xem ban thu nghiem:

```powershell
python -m http.server 4175 --bind 127.0.0.1 --directory D:\Tunglab\tung-lab-portfolio-experiment
```

URL dang xem trong in-app browser:

`http://127.0.0.1:4175/`

## Checkpoint commits tren branch nay

- `25f5993` Add About Me portfolio experiment
- `2e8dbd6` Update About Me hero mascot poses
- `9ca588a` Update About section mascot poses
- `bd276c3` Refine coffee mascot steam effect
- `46ac19b` Add GitHub links to portfolio projects
- `9c96292` Restyle portfolio projects as pixel notes
- `a497377` Add project note hover lift
- `472d662` Add interactive interest mascots

## File moi / file chinh can doc truoc

- `portfolio.jsx`: trang About Me / portfolio moi.
- `data.jsx`: co object `PORTFOLIO` gom copy song ngu, projects, skills, interests, contact.
- `ui.jsx`: shared sprites, gom mascot poses va sprites tuong tac.
- `index.html`: CSS responsive, hover/effect keyframes, script load `portfolio.jsx`.
- `app.jsx`: route moi `about-me`.
- `home.jsx`: mascot hero va CTA cuoi home link sang `about-me`.
- `scraps/mascot-poses.html`: source tham khao pose tinh tu Claude.
- `scraps/interactive-mascots.html`: source tham khao mascot click/effect tu Claude.

## Routing / navigation da lam

- Them route `about-me` trong `app.jsx`.
- Header co nav `Về tôi` / `About Me`.
- Footer co link `About Me`.
- Click mascot hero trang Home se mo About Me.
- Cuoi section About Tung Lab tren Home co CTA `Xem About Me`.

## About Me page da co

`portfolio.jsx` hien co cac section:

- Hero: intro Tung, button Projects / GitHub / Contact.
- About: doan gioi thieu tu nhien, khong qua CV.
- Featured Projects.
- Skills & Tools.
- AI-assisted Workflow.
- Outside Coding / Interests.
- Contact.

Noi dung copy song ngu VI/EN nam trong `PORTFOLIO` cua `data.jsx`.

## Mascot / sprite da lam

### Hero About Me

- Light mode: `tungThumb` trong `ui.jsx` lay tu pose "Gio ngon cai" cua `scraps/mascot-poses.html`.
- Dark mode: `tungSleepPose` trong `ui.jsx` lay tu pose "Buon ngu".
- Da bo icon FPhoto ben phai hero vi nhin giong chu P.

### About section tren About Me

- Light mode: `tungConfused` lay tu pose "Ngo ngac".
- Dark mode: `tungCoffee` lay tu pose "Cam ly ca phe".
- Khong con khung vuong quanh mascot.
- Co drop-shadow/outline de dark mode khong bi chim vao nen.
- Coffee steam nam trong function `CoffeeSteam()` cua `portfolio.jsx`.
  - Vi tri chinh sua nhanh: div wrapper trong `CoffeeSteam`, hien `left: 120, top: 120` theo user tu chinh.
  - Animation khong nam trong JSX ma trong `index.html` keyframes `coffeeSteam`.

### Interests interactive mascots

Sprites port tu `scraps/interactive-mascots.html` vao `ui.jsx`:

- `interestGaming`
- `interestMusic`
- `interestCamera`
- `interestFootball`
- `interestFootballBack`
- `interestModel`

Component click/effect nam trong `portfolio.jsx`:

- `InteractiveInterestCard`
- `MusicNotes`
- `InterestEffect`

Hieu ung:

- Gaming: glow man hinh.
- Music: click toggle `ON`, mascot bob, note nhac bay.
- Photography: flash + polaroid.
- Football: click doi sang lung ao + `SIUUU!`.
- Model kits: robot glow + spark.

CSS/keyframes lien quan nam trong `index.html`:

- `.interest-card`
- `.interest-music-on`
- `.interest-flash`
- `.interest-polaroid`
- `.interest-note`
- `.interest-glow`
- `.interest-shimmer`
- `.interest-goal`
- `@keyframes flashPop`, `polaroidOut`, `floatUp`, `bob`, `screenFlicker`, `shimmer`, `goalPop`

## Featured Projects da restyle

`PortfolioProjects` trong `portfolio.jsx` da doi tu card thuong sang note/pinboard pixel:

- Moi project la mot note co tape o dau.
- Co stamp: `FULL-STACK`, `COURSE PROJECT`, `PERSONAL APP`.
- Co icon pixel nho:
  - `store` cho BikeStore
  - `exam` cho Exam Generation
  - `fphoto` cho FPhoto
- Co block `WHAT I LEARNED`.
- Tech stack la sticker bang `TechSticker`.
- Moi note co nut GitHub o day card.
- Hover note co hieu ung nhac/lat giay nhe.
- Hover GitHub link dung class rieng `.project-github-link` de tranh cursor giat.

GitHub project links trong `data.jsx`:

- BikeStore: `https://github.com/tung78952/bike-store-fullstack`
- Exam: `https://github.com/tung78952/Exam-Generation-and-Grading-Management-System`
- FPhoto: `https://github.com/tung78952/FPhoto`

CSS hover project note nam trong `index.html`:

- `.project-note`
- `.project-note:hover`
- `.project-github-link`
- `.project-github-link:hover`

## Validation da chay

Da test bang headless Chromium tren `http://127.0.0.1:4175/`:

- Route About Me render duoc.
- Nav `Về tôi` mo dung route.
- Click mascot Home mo dung About Me.
- Header van fixed.
- Featured Projects co 3 note va 3 link GitHub dung URL.
- Hover note doi transform/shadow.
- Hover GitHub link doi mau, cursor pointer.
- Interests co 5 interactive cards.
- Click tung interest card tao effect, music toggle ON.
- Mobile width 390px khong tran ngang (`scrollWidth == clientWidth`).
- Khong co console/page error trong cac lan test.

## Luu y quan trong cho agent sau

- Dung `workdir` la `D:/Tunglab/tung-lab-portfolio-experiment` neu tiep tuc sua portfolio.
- Khong sua/push `D:/Tunglab/claude-design-fixed` tru khi user noi merge/deploy.
- Branch nay la thu nghiem local, chua merge vao `main`.
- Neu can deploy ve web that: review lan cuoi, merge/cherry-pick sang `main`, bump cache query trong `index.html` neu file JS/CSS doi, roi push `main`.
- Neu user noi ve "mấy con mascot trong HTML luc nay", xem `scraps/mascot-poses.html` va `scraps/interactive-mascots.html` truoc.
