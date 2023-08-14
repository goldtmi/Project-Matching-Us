<template>
  <div>
    <!-- 네비게이션 바 -->
    <nav class="navbar bg-body-tertiary fixed-top">
      <div class="container-fluid">
        <div class="navbar_logo">
          <!-- 매칭어스 로고 이미지 -->
          <span class="MatchingUs">
            <img  @click="goToMainPage" src="/image/logo.png" class="img"  alt="매칭어스 로고" />
          </span>
        </div>
        <div class="navbar_right">
          <div class="navbar_welcome">
            <!-- 사용자 이름과 환영 메시지 -->
            <div class="welcome">환영합니다, <strong class="name">김혜빈</strong>님! <i class="fa-regular fa-face-smile"></i></div>
          </div>
          <!-- 로그아웃 버튼 -->
          <button @click="logout" class="btn btn-outline-success" style="color: #9370DB; text-decoration: none;">
            <i class="fa-solid fa-right-from-bracket"></i> LOG OUT!
          </button>
        </div>
      </div>
    </nav>

    <!-- 사이드 메뉴 바 -->
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
            <button @click="goToMatchingStatusPage"><p style="text-decoration: none; color: white;">매칭 현황</p></button>
          </li>
          <li>
                    <!-- 공지사항 페이지로 이동 -->
                    <button @click="goToNoticePage"><p style="text-decoration: none; color: white;">공지사항</p></button>
                </li>
        </ul>
      </div>
    </nav>
    </div>
    
<div class="content">
      <section id="postDetailContainer">
          <div class="post-it male">
              <h3>포스트잇 제목</h3>
              <p>인원: 2명</p>
              <p>학과: 공과대학 시스템경영공학부 산업경영공학전공</p>
              <p>내용: 매칭 상세 내용...</p>
          </div>
          
          <div class="comments-section">
        <!-- <h4>댓글</h4> -->
        <div class="comments-list">
          <ul class="comment-ul">
            <li v-for="comment in comments" :key="comment">{{ comment }}</li>
          </ul>
        </div>

        <div class="add-comment">
          <textarea v-model="newComment" placeholder="댓글을 작성해주세요."></textarea>
          <button class="comment-button" @click="addComment">댓글 추가</button>
        </div>

        <p class="warning-text" v-if="isCommentEmpty">추가할 내용이 없습니다.</p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
  return {
    comments: ['댓글1: 안녕하세요! 매칭을 원합니다.', '댓글2: 저도 참여하고 싶네요!'],
      newComment: '',
      isCommentEmpty: false // 추가된 부분
  };
},
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
    goToMatchingStatusPage() {
      this.$router.push("/MatchingStatusPage");
    },

    goToMainPage() {
      this.$router.push("/MainPage");
    },

    goToNoticePage() {
      this.$router.push("/NoticePage");
    },addComment() {
      if (this.newComment.trim() !== '') {
        this.comments.push(this.newComment);
        this.newComment = '';
        this.isCommentEmpty = false; // 내용이 있을 때 경고 문구 제거
      } else {
        this.isCommentEmpty = true; // 내용이 없을 때 경고 문구 표시
      }
    }
  }
}
</script>

<style scoped>
body {
    margin: 0;
    background-color: white;
}

.MatchingUs {
    font-size: 24px; /* 로고 사이즈를 24px로 조정 */
    color: #9370DB;
}

.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #F6E6F6;
    padding: 8px 12px;
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
}

.navbar_welcome .welcome {
    color: #9370DB;
    margin-bottom: 10px;
}

.btn.btn-outline-success {
    /* color: #9370DB; */
    border-color: #9370DB; 
    font-weight: 500;
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
}

.basicMenu button:hover {
    background-color:#cccccc; /* 호버시 진한 회색으로 변경 */
}

.content {
  display: flex;
  flex-direction: column;
  padding-top: 100px;
  padding-left: 350px;
  margin: 20px 0;
  border: none; /* 테두리 제거 */
}

/* 상세 정보 스타일 */

.post-it.male {
  background-color: #deeeff; /* Blue color for male */
}

.post-it.female {
  background-color: #ffe4ee; /* Pink color for female */

}
.post-it {
  width: 1000px;
  height: 500px;
  margin: 10px;
  padding: 10px;


  box-shadow: 2px 2px 5px #aaa;
  background-color: #fefabc; /* Default yellow color for post-it */
  transition: transform 0.2s; /* Animation for hover effect */
}



/* 댓글 섹션 스타일 */

.comment-ul {
  list-style: none;
  margin: none;
  padding: 10px;
}

.comment-ul li {
  margin-bottom: 10px; /* 댓글 간격을 조정 */
}

.comment-button {
  width: 70px;
  
}

.comments-section {
  width: 1000px;
  border: 1px solid #eee;
  border-radius: 5px;
  margin: 10px;
  margin-top: 30px;
  padding: 10px;
}

.add-comment {
  display: flex; /* Flexbox를 활성화합니다 */
  justify-content: space-between; /* 아이템들 사이에 공간을 균등하게 배분합니다 */
  margin-top: 20px;
  height: 70px;
}

.add-comment textarea {
  flex: 1; /* textarea가 가능한 한 많은 공간을 차지하게 합니다 */
  width: 100%;
  padding: 10px;
  border: 1px solid #eee;
  border-radius: 5px;
  margin-bottom: 10px;
}

.add-comment button {
  width: 100px; /* 버튼의 너비 */
  height: 60px; 
  background-color: #F6E6F6;
  color: #9370DB;
  border: 1px solid #9370DB;
  padding: 7px;
  border-radius: 15px;
  cursor: pointer;
  font-size: 14px;
  margin-bottom: 8px;
}

.warning-text {
  color: red;
  font-size: 15px;
  margin-top: 10px;
  font-weight: bold;
}
/* 반응형 레이아웃 (사이드바가 사라지는 화면 크기 이하) */
@media (max-width: 768px) { /* 예시: 768px 이하의 화면 크기에서 적용 */
    .content {
        margin-left: 20px; /* 사이드바가 사라지면 좌측 마진을 줄임 */
    }
    
    .side_nav {
        display: none; /* 사이드바를 숨김 */
    }
}

@import "~bootstrap/dist/css/bootstrap.min.css";
@import "~@fortawesome/fontawesome-free/css/all.min.css";
</style>