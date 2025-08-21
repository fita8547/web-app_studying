// -----------------------------
// 1. 부드러운 스크롤 (네비게이션 클릭 시)
// -----------------------------
document.querySelectorAll('.header-nav .right div p').forEach(menu => {
  menu.addEventListener('click', () => {
    const text = menu.innerText.trim();

    let target;
    if (text === "소개") target = document.querySelector(".my_introduce_box");
    if (text === "프로젝트") target = document.querySelector(".my_introduce_boxforder");
    if (text === "연락처") target = document.querySelector("footer");

    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// -----------------------------
// 2. 타자기 효과 (UI UX Designer)
// -----------------------------
const typingText = document.querySelector(".left p:last-child");
if (typingText) {
  const text = typingText.innerText;
  typingText.innerText = "";
  let i = 0;
  function typing() {
    if (i < text.length) {
      typingText.innerText += text.charAt(i);
      i++;
      setTimeout(typing, 150);
    }
  }
  typing();
}

// -----------------------------
// 3. 프로젝트 카드 Hover 효과
// -----------------------------
document.querySelectorAll(".box").forEach(card => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "scale(1.05)";
    card.style.transition = "0.3s";
    card.style.boxShadow = "0 4px 15px rgba(0,0,0,0.3)";
  });
  card.addEventListener("mouseleave", () => {
    card.style.transform = "scale(1)";
    card.style.boxShadow = "none";
  });
});

// -----------------------------
// 4. 다크모드 토글 버튼 추가
// -----------------------------
const darkBtn = document.createElement("button");
darkBtn.innerText = "🌙 다크모드";
darkBtn.style.position = "fixed";
darkBtn.style.bottom = "20px";
darkBtn.style.right = "20px";
darkBtn.style.padding = "10px 15px";
darkBtn.style.borderRadius = "10px";
darkBtn.style.border = "none";
darkBtn.style.cursor = "pointer";
document.body.appendChild(darkBtn);

let dark = false;
darkBtn.addEventListener("click", () => {
  dark = !dark;
  if (dark) {
    document.body.style.backgroundColor = "#111";
    document.body.style.color = "#eee";
    darkBtn.innerText = "☀️ 라이트모드";
  } else {
    document.body.style.backgroundColor = "#fff";
    document.body.style.color = "#000";
    darkBtn.innerText = "🌙 다크모드";
  }
});

// -----------------------------
// 5. 스크롤 애니메이션 (fade-in)
// -----------------------------
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = "translateY(0)";
      entry.target.style.transition = "all 0.8s ease-out";
    }
  });
});

document.querySelectorAll(".my_introduce_box, .box").forEach(el => {
  el.style.opacity = 0;
  el.style.transform = "translateY(50px)";
  observer.observe(el);
});

// -----------------------------
// 6. 맨 위로 가기 버튼
// -----------------------------
const topBtn = document.createElement("button");
topBtn.innerText = "⬆️ Top";
topBtn.style.position = "fixed";
topBtn.style.bottom = "70px";
topBtn.style.right = "20px";
topBtn.style.padding = "10px 15px";
topBtn.style.borderRadius = "10px";
topBtn.style.display = "none";
document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
});

topBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// -----------------------------
// 7. 프로젝트 추가 버튼
// -----------------------------
const projectContainer = document.getElementById("project-container");
const addProjectBtn = document.getElementById("addProjectBtn");
let projectCount = projectContainer.querySelectorAll(".box").length;

addProjectBtn.addEventListener("click", () => {
  projectCount++;

  // 새로운 박스 생성
  const newBox = document.createElement("div");
  newBox.classList.add("box");
  newBox.innerHTML = `
    <h3>프로젝트 ${projectCount}</h3>
    <img src="">
    <p>언어</p>
    <p>내용</p>
    <button>Live Demo</button>
  `;

  // hover 애니메이션 적용 위해 이벤트 다시 바인딩
  newBox.addEventListener("mouseenter", () => {
    newBox.style.transform = "scale(1.05)";
    newBox.style.transition = "0.3s";
    newBox.style.boxShadow = "0 4px 15px rgba(0,0,0,0.3)";
  });
  newBox.addEventListener("mouseleave", () => {
    newBox.style.transform = "scale(1)";
    newBox.style.boxShadow = "none";
  });

  // fade-in 애니메이션 초기값 설정 후 observer 연결
  newBox.style.opacity = 0;
  newBox.style.transform = "translateY(50px)";
  observer.observe(newBox);

  // 컨테이너에 추가
  projectContainer.appendChild(newBox);
});
