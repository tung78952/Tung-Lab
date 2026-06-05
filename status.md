# Tung Lab Website Status

Ngay cap nhat: 2026-06-05

## Thu muc chinh

Website hien tai nam trong:

`D:/Tunglab/claude-design-fixed`

Server dang xem ben app browser:

`http://localhost:4174/#top`

Lenh chay lai neu can:

```powershell
python -m http.server 4174 --bind 127.0.0.1 --directory D:\Tunglab\claude-design-fixed
```

## File dang dung

- `index.html`: entry HTML chinh cua website.
- `app.jsx`: root app, route home/detail, locale va dark mode.
- `data.jsx`: noi dung app, i18n, thong tin FPhoto.
- `ui.jsx`: shared UI, pixel sprite, header/footer, button, badge, mascot asset.
- `home.jsx`: trang chu Tung Lab va card ung dung.
- `fphoto.jsx`: trang chi tiet FPhoto.
- `assets/mascot-light.png`: mascot light mode da chot.

## Da lam duoc

- Chot website Tung Lab la noi gom cac mini app tu lam, khong con la website rieng cho FPhoto.
- Trang chu co hero Tung Lab, danh sach app, about Tung Lab, footer link.
- Co route chi tiet FPhoto rieng khi bam xem chi tiet.
- Co dark mode/light mode bang nut tren header.
- Light mode dung mascot pixel da chot theo reference.
- Dark mode dung canh nhan vat ngu/laptop, co icon phu va chu `zZz`.
- Logo FPhoto tren card home da thay logo moi, khong con icon cam cu.
- Logo FPhoto da bo khung vuong ben ngoai.
- Logo FPhoto doi mau theo theme: pixel vien dung `var(--ink)` nen light/dark co phan ung mau.
- Card app dang dung kieu cartridge pixel, app chua co thi hien `Untitled - 02`, `Untitled - 03`.
- Da go panel tweak/test cua Claude ra khoi app chinh.
- Da xoa file HTML trung `Tung Lab.html`.

## Da don dep

Da xoa:

- `tweaks-panel.jsx`
- `Tung Lab.html`

Hien trong folder chi con cac file can cho website chinh va asset mascot.

## Luu y con mo

- Trang chi tiet FPhoto trong `data.jsx` dang khai bao screenshot tai `assets/fphoto/*.png`, nhung folder nay chua co trong ban hien tai. Khi co anh that, tao `assets/fphoto/` va them cac file:
  - `workspace.png`
  - `search.png`
  - `grid.png`
  - `preview.png`
  - `copy.png`
- Link tai Windows cua FPhoto trong data can duoc cap nhat thanh link GitHub release moi nhat khi ban co release that.
- Neu chuyen may, chi can mang ca folder `D:/Tunglab/claude-design-fixed`.

## Huong design da chot

- Pixel style, vien sac, bong do dang block.
- Mau chu dao warm/off-white + cam gach `#cc6b4e`.
- Mascot light mode phai giu dung asset `assets/mascot-light.png`.
- Dark mode co the la trang thai khac cua mascot, nhung van phai cung identity.
- App logo/sprite nen doi mau theo theme bang CSS variables, tranh khoa mau den co dinh.
