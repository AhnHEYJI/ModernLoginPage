// container 요소를 가져오기
const container = document.getElementById("container");

// Register 버튼과 Login 버튼 가져오기
const registerBtn = document.getElementById("register");
const loginBtn = document.getElementById("login");

// Toggle 버튼도 추가로 제어하기 위해 가져오기
const registerToggle = document.getElementById("registerToggle");
const loginToggle = document.getElementById("loginToggle");

// Register 버튼 클릭 시 Sign Up 화면으로 전환 (active 클래스 추가)
registerBtn.addEventListener("click", () => {
  container.classList.add("active");
});

// Register Toggle 버튼을 클릭해도 Sign Up 화면으로 전환
registerToggle.addEventListener("click", () => {
  container.classList.add("active");
});

// Login 버튼 클릭 시 Sign In 화면으로 전환 (active 클래스 제거)
loginBtn.addEventListener("click", () => {
  container.classList.remove("active");
});

// Login Toggle 버튼을 클릭해도 Sign In 화면으로 전환
loginToggle.addEventListener("click", () => {
  container.classList.remove("active");
});
