<template>
    <div>
      <!-- 네비게이션 바 -->
      <!-- 상단 고정 네비게이션 바 -->
      <nav class="navbar bg-body-tertiary fixed-top">
        <div class="container-fluid">
          <div class="navbar_logo">
            <!-- 매칭어스 로고 이미지 -->
            <span class="MatchingUs">
              <img  @click="goToMainPage"
                src="/image/logo.png"
                class="img"
                alt="매칭어스 로고"
              />
            </span>
          </div>
          <div class="navbar_right">
            <div class="navbar_welcome">
              <!-- 사용자 이름과 환영 메시지 -->
              <div class="welcome">환영합니다, <strong class="name">김혜빈</strong>님! <i class="fa-regular fa-face-smile"></i></div>
            </div>
            <!-- 로그아웃 버튼 -->
            <button @click="goToLoginPage" class="btn btn-outline-success" style="color: #9370DB; text-decoration: none;">
              <i class="fa-solid fa-right-from-bracket"></i> LOG OUT!
            </button>
          </div>
        </div>
      </nav>
  
      <!-- 사이드 메뉴 바 -->
      <!-- 좌측 고정 사이드 메뉴 바 -->
      <nav class="menuBar fixed-top">
        <div class="side_nav">
          <ul class="basicMenu">
            <li>
              <!-- 내 정보 페이지로 이동 버튼 -->
              <button @click="goToMyInfoPage"><p style="text-decoration: none; color: white;">내 정보</p></button>
            </li>
            <li>
              <!-- 매칭 신청 페이지로 이동 버튼 -->
              <button @click="goToMatchingApplyPage"><p style="text-decoration: none; color: white;">매칭 신청</p></button>
            </li>
            <li>
              <!-- 매칭 현황 페이지로 이동 버튼 -->
              <button @click="goToMatchingApplyDetailPage"><p style="text-decoration: none; color: white;">매칭 현황</p></button>
            </li>
            <li>
                    <!-- 공지사항 페이지로 이동 -->
                    <button @click="goToNoticePage"><p style="text-decoration: none; color: white;">공지사항</p></button>
                </li>
          </ul>
        </div>
      </nav>
  
      <!-- 매칭 현황 -->
      <div class="match-status">
        <!-- 매칭 현황의 내용이 동적으로 표시될 영역 -->
      </div>
    </div>

        <!-- 추가된 부분 -->
        <div class="main-content">
        
        <strong><h4><p><i class="fa-solid fa-check"></i>    MATCHING US 공지사항</p></h4></strong><br>
        <p> 1. 왼쪽 상단 MATCHING US 로고를 누르시면 처음 로그인을 했을때 나오는 메인화면을 볼 수 있습니다. </p>
        <p> 2. 내 정보에서는 회원가입 때 기입했던 정보의 확인 및 수정을 할 수 있으며, <br>
        매칭 신청에서는 매칭을 신청 할 수 있습니다. 매칭 현황은 본인의 게시글 및 댓글을 확인하실 수 있습니다. </p>
        <p> 3. 매칭을 신청하실때나, 댓글을 작성하실때에는 욕설은 자제해주시고 기본적인 예절을 지켜주시길 바랍니다. </p>
        <p><i class="fa-regular fa-star"></i>   MATCHING US에서 여러분의 인연을 꼭 찾을 수 있기를 바랍니다! <i class="fa-regular fa-star"></i></p>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      // 내 정보 페이지로 이동
      goToMyInfoPage() {
        this.$router.push("/MyInfoPage");
      },
  
      // 매칭 신청 페이지로 이동
      goToMatchingApplyPage() {
        this.$router.push("/MatchingApplyPage");
      },
  
      // 매칭 현황 페이지로 이동
      goToMatchingApplyDetailPage() {
        this.$router.push("/MatchingApplyDetailPage");
      },
  
      // 로그인 페이지로 이동
      goToLoginPage() {
        this.$router.push("/");
      },

      goToNoticePage() {
      this.$router.push("/NoticePage");
    },

    goToMainPage() {
      this.$router.push("/MainPage");
    },
    }
  }
  </script>
  <style scoped>
  body {
      margin: 0;
      background-color: white;
      font-family: 'jua', sans-serif;
  }
  
  .MatchingUs {
      font-size: 28px;
      color: #9370DB;
  }
  
  /* 이미지의 크기를 조절하는 .img 클래스에 스타일 추가 */
  .img {
      width: 200px; /* 이미지의 너비를 200px로 조정 */
      height: auto; /* 높이를 자동으로 조정하여 가로 세로 비율 유지 */
      margin-left: -20px; /* 이미지를 왼쪽으로 20px 이동 */
  }
  
  
  .navbar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: #F6E6F6;
      padding: 8px 12px;
      font-family: 'jua', sans-serif;
  }
  
  .navbar_logo {
      font-size: 24px;
  }
  
  .navbar_logo .logo_image {
      margin-right: 8px; 
  }
  
  .navbar_welcome {
      display: flex;
      align-items: center;
      margin-right: 30px; 
      margin-top: 10px;
      font-weight: 400;
      font-family: 'jua', sans-serif;
  }
  
  .navbar_welcome .welcome {
      color: #9370DB;
      margin-bottom: 10px;
      font-family: 'jua', sans-serif;
  }
  
  .btn.btn-outline-success {
      /* color: #9370DB; */
      border-color: #9370DB; 
      font-weight: 500;
      font-family: 'jua', sans-serif;
  }
  
  .navbar_right {
      display: flex;
      align-items: center;
  }
  
  .navbar_right .btn {
      margin-left: auto;
      background-color: #F6E6F6; /* Set the background color to match the navbar background color */
  /* Set the border color to match the text color */
  }
  
  .navbar_right .btn a {
  /* Set the text color of the button */
      text-decoration: none;
  }
  
  .navbar_right .btn:hover {
      transform: scale(1.05);
  }
  
  
  
  /* 사이드 메뉴 바 */
  .side_nav {
      width: 200px;
      height: 100%;
      position: fixed;
      background-color:#E0E0E0; /* 회색으로 변경 */
      padding: 20px;
  }
  
  .basicMenu {
      list-style: none;
      padding: 0;
      margin: 0;
  }
  
  .basicMenu button {
      background: none;
      border: none;
      cursor: pointer;
      padding: 10px;
      margin-bottom: 10px;
      width: 100%;
      text-align: left;
      color: white; /* 버튼 텍스트 색상 흰색으로 설정 */
      font-size: 16px;
      transition: background-color 0.3s; /* 호버 효과 추가 */
      font-family: 'jua', sans-serif;
  }
  
  .basicMenu button:hover {
      background-color:#cccccc; /* 호버시 진한 회색으로 변경 */
  }
  
  .menuBar {
    top: 95px; /* Adjust this value according to your fixed navbar height */
  }
  
  .container {
    display: flex;
    justify-content: center;
  }
  
  .main-content {
  margin: 120px auto; /* Increase margin-top for more space, and use auto for horizontal centering */
  max-width: 800px; /* Limit the width of the main content */
  margin-left: 250px; /* Add right margin */
  font-family: 'jua', sans-serif;
}
  
@font-face {
  font-family: 'jua';
  src:url(../../public/fonts/font.ttf)
}

  @import "~bootstrap/dist/css/bootstrap.min.css";
  @import "~@fortawesome/fontawesome-free/css/all.min.css";
  
  @media screen and (max-width: 768px) {
      .side_nav{
        display: none;
      }
  }
  </style>