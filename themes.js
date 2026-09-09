/* ══ 테마 ══
   색은 전부 styles.css의 :root 변수로 들어간다.
   여기서 변수 값만 바꿔치면 앱 전체 색이 한 번에 바뀐다.

   각 테마가 정하는 값
     p    주색 (헤더 그라데이션의 기준, 탭바 선택색, 버튼 테두리)
     a    강조색 (채운 버튼, 선택된 칩)
     dp   가장 진한 색 (토스트 배경)
     up   히어로 카드 그라데이션 끝
     lt   옅은 배경 칩
     sf   더 옅은 배경
     mu   중간 톤
     gd   별점 금색      gdl 그 옅은 버전
     cv   화면 바탕      cr 살짝 어두운 바탕      cl 거의 흰 바탕
     ink  본문 글씨      sft 흐린 글씨      ln 선
     rd   경고·삭제색
     oa   강조색 위에 올라갈 글씨색 (밝은 강조색이면 진한 색을 쓴다)
     hr   히어로 카드 그라데이션 세 칸 — 흰 글씨가 얹히므로 셋 다 진해야 한다
     h    [헤더배경1, 헤더배경2, 헤더글씨, 헤더글씨(흐림)]
     rgb  주색의 R,G,B — 그림자와 옅은 물결에 쓴다
*/

const THEMES = [
  {
    id: "green", name: "기본 초록", mood: "차분",
    p: "#1b5e3b", a: "#2e7d5a", dp: "#1a3a2e", up: "#3a6b56",
    lt: "#dceee6", sf: "#e8f5ee", mu: "#5a9a7c",
    gd: "#c49a3c", gdl: "#dfc49d",
    cv: "#f4f2ed", cr: "#edebe6", cl: "#f9f9f7",
    ink: "rgba(0,0,0,0.87)", sft: "rgba(0,0,0,0.52)", ln: "#d6dbde", rd: "#c82014",
    oa: "#ffffff", hr: ["#1b5e3b", "#2e7d5a", "#3a6b56"],
    h: ["#1b5e3b", "#2e7d5a", "#ffffff", "rgba(255,255,255,0.75)"],
    rgb: "46,125,90",
  },
  {
    id: "sage", name: "세이지 안개", mood: "차분",
    p: "#3E6B5C", a: "#5C8B7B", dp: "#23302A", up: "#6E9A8A",
    lt: "#E0EAE4", sf: "#EDF3EF", mu: "#7FA396",
    gd: "#B99A55", gdl: "#DCC9A0",
    cv: "#F3F4F1", cr: "#ECEEEA", cl: "#FAFBF9",
    ink: "rgba(0,0,0,0.85)", sft: "rgba(0,0,0,0.50)", ln: "#DDE2DC", rd: "#B4483F",
    oa: "#ffffff", hr: ["#33594C", "#3E6B5C", "#52806F"],
    h: ["#3E6B5C", "#5C8B7B", "#ffffff", "rgba(255,255,255,0.78)"],
    rgb: "92,139,123",
  },
  {
    id: "dawn", name: "새벽 티", mood: "차분",
    p: "#2F5D63", a: "#4C848B", dp: "#1E2E30", up: "#63979E",
    lt: "#DCE9EA", sf: "#EBF3F4", mu: "#79A6AC",
    gd: "#C7A45B", gdl: "#E2CFA6",
    cv: "#F2F4F4", cr: "#EBEEEE", cl: "#F9FBFB",
    ink: "rgba(0,0,0,0.85)", sft: "rgba(0,0,0,0.50)", ln: "#DBE2E3", rd: "#C0504A",
    oa: "#ffffff", hr: ["#274E53", "#2F5D63", "#437880"],
    h: ["#2F5D63", "#4C848B", "#ffffff", "rgba(255,255,255,0.78)"],
    rgb: "76,132,139",
  },
  {
    id: "cherry", name: "체리 소다", mood: "또렷",
    p: "#E23A5E", a: "#FF637E", dp: "#5C1024", up: "#FF8098",
    lt: "#FFE1E7", sf: "#FFF0F3", mu: "#F0A9B9",
    gd: "#E8A200", gdl: "#F5D68A",
    cv: "#FFF9F9", cr: "#F7EFF0", cl: "#FFFCFC",
    ink: "#3A1A22", sft: "#8A6B72", ln: "#F0DDE1", rd: "#C2410C",
    oa: "#4A0A1B", hr: ["#B31D42", "#D02B52", "#E23A5E"],
    h: ["#E23A5E", "#FF637E", "#ffffff", "rgba(255,255,255,0.85)"],
    rgb: "226,58,94",
  },
  {
    id: "lemonpop", name: "레몬 팝", mood: "발랄",
    p: "#C7274E", a: "#E23A5E", dp: "#4A1020", up: "#FF637E",
    lt: "#FFF3C4", sf: "#FFF9E4", mu: "#F0A9B9",
    gd: "#E8A200", gdl: "#F7D98F",
    cv: "#FFFDF5", cr: "#F7F2E4", cl: "#FFFEFA",
    ink: "#33212A", sft: "#8A7078", ln: "#EFE3CB", rd: "#C2410C",
    oa: "#ffffff", hr: ["#A81C42", "#C7274E", "#E23A5E"],
    h: ["#FFD24A", "#FFDD6B", "#B81E45", "rgba(150,25,55,0.72)"],
    rgb: "226,58,94",
  },
  {
    id: "lemonmint", name: "레몬 온 민트", mood: "발랄",
    p: "#0E7C63", a: "#14B8A6", dp: "#0A3B32", up: "#4FD1C0",
    lt: "#D6F5EA", sf: "#E9FBF5", mu: "#7FD5AD",
    gd: "#E09B00", gdl: "#F5D98F",
    cv: "#FFFEF7", cr: "#F5F2E4", cl: "#FFFFFC",
    ink: "#14322B", sft: "#6D8A82", ln: "#E7E6D4", rd: "#D6453B",
    oa: "#06342C", hr: ["#0A5C4A", "#0E7C63", "#109080"],
    h: ["#FEF08A", "#FFF6B4", "#0E7C63", "rgba(14,124,99,0.72)"],
    rgb: "20,184,166",
  },
  {
    id: "limeamber", name: "라임 온 앰버", mood: "발랄",
    p: "#3D6B12", a: "#5E8F22", dp: "#1C3208", up: "#7FB534",
    lt: "#ECFBD0", sf: "#F4FDE6", mu: "#A8CE72",
    gd: "#E8A200", gdl: "#F5D98F",
    cv: "#FBFDF4", cr: "#F1F4E8", cl: "#FDFFFA",
    ink: "#23330F", sft: "#74826A", ln: "#E2E9D2", rd: "#C2410C",
    oa: "#ffffff", hr: ["#2E5210", "#3D6B12", "#4E8618"],
    h: ["#DEFAA8", "#E9FCC6", "#3D6B12", "rgba(61,107,18,0.72)"],
    rgb: "94,143,34",
  },
  {
    id: "peachmint", name: "피치 온 민트", mood: "포근",
    p: "#B02A4E", a: "#14B8A6", dp: "#4A1020", up: "#4FD1C0",
    lt: "#FFE3E7", sf: "#FFF1F3", mu: "#F0A9B9",
    gd: "#E09B00", gdl: "#F5D98F",
    cv: "#FFFAFB", cr: "#F7EFF0", cl: "#FFFDFD",
    ink: "#331A22", sft: "#8A6B72", ln: "#F0DFE2", rd: "#C2410C",
    oa: "#06342C", hr: ["#8E1F3E", "#B02A4E", "#C43A5C"],
    h: ["#FECDD3", "#FFDEE2", "#B02A4E", "rgba(176,42,78,0.70)"],
    rgb: "176,42,78",
  },
  {
    id: "creamrose", name: "크림 온 로즈", mood: "포근",
    p: "#C0264F", a: "#E23A5E", dp: "#4A1020", up: "#FF637E",
    lt: "#FFE1E7", sf: "#FFF0F3", mu: "#F0A9B9",
    gd: "#E09B00", gdl: "#F5D98F",
    cv: "#FFFDF4", cr: "#F6F1E2", cl: "#FFFEF9",
    ink: "#33222A", sft: "#8A7078", ln: "#EEE4C9", rd: "#C2410C",
    oa: "#ffffff", hr: ["#9C1B3F", "#C0264F", "#D8365E"],
    h: ["#FFF4A0", "#FFF9C6", "#C0264F", "rgba(192,38,79,0.70)"],
    rgb: "192,38,79",
  },
];

const DEFAULT_THEME = "green";

function themeById(id) {
  return THEMES.find((t) => t.id === id) || THEMES[0];
}

/* 변수를 <html>에 직접 얹는다. :root보다 우선하므로 styles.css는 그대로 둬도 된다. */
function applyTheme(id) {
  const t = themeById(id);
  const s = document.documentElement.style;
  const v = {
    "--starbucks": t.p, "--green": t.p, "--accent": t.a, "--house": t.dp, "--uplift": t.up,
    "--green-light": t.lt, "--green-soft": t.sf, "--green-muted": t.mu,
    "--green-wash": "rgba(" + t.rgb + ",0.06)",
    "--gold": t.gd, "--yolk": t.gd, "--gold-light": t.gdl,
    "--canvas": t.cv, "--bg": t.cv, "--ceramic": t.cr, "--cool": t.cl,
    "--ink": t.ink, "--soft": t.sft, "--line": t.ln,
    "--red": t.rd, "--kimchi": t.rd, "--red-tint": hexTint(t.rd, 0.08),
    "--head-1": t.h[0], "--head-2": t.h[1], "--head-fg": t.h[2], "--head-fg-soft": t.h[3],
    "--on-accent": t.oa,
    "--hero-1": t.hr[0], "--hero-2": t.hr[1], "--hero-3": t.hr[2],
    "--hero-shadow": "0 4px 16px rgba(" + t.rgb + ",0.18), 0 1px 4px rgba(0,0,0,0.06)",
  };
  Object.keys(v).forEach((k) => s.setProperty(k, v[k]));

  // 폰 상태표시줄 색도 헤더에 맞춘다
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute("content", t.h[0]);
}

/* #RRGGBB → rgba(r,g,b,a) */
function hexTint(hex, a) {
  const m = /^#?([0-9a-f]{6})$/i.exec(hex);
  if (!m) return "rgba(200,32,20," + a + ")";
  const n = parseInt(m[1], 16);
  return "rgba(" + ((n >> 16) & 255) + "," + ((n >> 8) & 255) + "," + (n & 255) + "," + a + ")";
}
