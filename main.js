const fortunes = [
    "당신의 오늘이 반짝반짝 빛나길 응원합니다.",
    "모든 일은 결국 당신에게 가장 좋은 방향으로 흘러갈 거예요.",
    "오늘 하루, 당신이 생각하는 것보다 훨씬 더 잘해낼 수 있습니다.",
    "작은 행복들이 모여 당신의 큰 기쁨이 되는 하루가 되길.",
    "지치고 힘든 날에도 당신 곁에는 늘 응원하는 마음이 있습니다.",
    "당신은 충분히 잘하고 있고, 앞으로도 그럴 거예요.",
    "오늘 예상치 못한 기분 좋은 소식이 당신을 찾아올 거예요.",
    "가장 빛나는 별은 가장 어두운 밤에 보이는 법입니다.",
    "당신만의 속도로 걸어가세요. 그 과정 자체가 이미 아름답습니다.",
    "포기하지 마세요. 당신의 노력이 결실을 맺을 순간이 머지않았습니다.",
    "따뜻한 차 한 잔처럼 마음이 포근해지는 하루 보내시길.",
    "당신은 누군가에게 아주 소중하고 큰 힘이 되는 존재입니다.",
    "어제보다 조금 더 성장한 당신을 위해 스스로를 칭찬해 주세요.",
    "오늘은 당신이 가장 많이 웃는 날이 되었으면 좋겠습니다.",
    "당신이 꿈꾸는 미래는 이미 조금씩 당신 곁으로 오고 있습니다."
];

const fortuneDisplay = document.getElementById("fortune-display");
const generateBtn = document.getElementById("generate-fortune");
const themeToggle = document.getElementById("theme-toggle");

// 랜덤 덕담 생성 함수
function showRandomFortune() {
    // 텍스트 페이드 효과를 위한 애니메이션 처리
    fortuneDisplay.style.opacity = 0;
    
    setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * fortunes.length);
        fortuneDisplay.textContent = `"${fortunes[randomIndex]}"`;
        fortuneDisplay.style.opacity = 1;
    }, 200);
}

// 버튼 클릭 이벤트
generateBtn.addEventListener("click", showRandomFortune);

// 다크 모드 설정
themeToggle.addEventListener("change", () => {
    document.body.classList.toggle("dark-mode");
    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
});

// 초기화
document.addEventListener("DOMContentLoaded", () => {
    // 저장된 테마 불러오기
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");
        themeToggle.checked = true;
    }
    
    // 첫 화면 로드 시 페이드 효과 설정
    fortuneDisplay.style.transition = "opacity 0.5s ease";
});
