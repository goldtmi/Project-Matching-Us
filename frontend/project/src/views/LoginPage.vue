<template>

  <form class="LoginPage" @submit.prevent="loginUser">
    <span class="MatchingUs">
                    <img
                    src="/image/logo.png"
                    class="img"
                    alt="매칭어스 로고"
                />
                </span>
    <div class="int-area">
      <label for="id"></label>
      <input v-model="userId" type="text" name="id" id="id" placeholder="USER ID" />
      <label for="password"></label>
      <input v-model="password" type="password" name="pwd" id="pwd" placeholder="PASSWORD" required />
    </div>

    <div class="btn-area">
      <button @click="loginUser" type="submit" id="login-button" :disabled="!userId || !password">
        LOGIN
      </button>
    </div>

    <div class="caption">
      <a href="#" @click="goToSignUpPage">회원가입</a>
    </div>
  </form>

</template>

<script>
import axios from "axios";

export default {
  name: 'LoginForm', // Multi-word name
  data() {
    return {
      userId: '',
      password: '',
    };
  },
  methods: {
    goToMainPage() {
      this.$router.push("/MainPage");
    },
    goToSignUpPage() {
      this.$router.push("/SignUpPage");
    },
    checkInputs() {
      if (!this.userId || !this.password) {
        alert('아이디와 비밀번호를 모두 입력해주세요.');
      } else {
        // 서버로 아이디와 비밀번호를 보내는 로직을 추가해야 합니다.
        // 서버에서 검증 후 로그인 처리를 해야 합니다.
      }
    },
    async loginUser() {
      if (!this.userId || !this.password) {
        alert('아이디와 비밀번호를 모두 입력해주세요.');
        return;
      }

      try {
        const response = await axios.post("http://localhost:3001/api/login", {
          studentID: this.userId,
          password: this.password,
        });

        if (response.status === 200) {
          const { message, user, token } = response.data;
          alert(message); // 백엔드에서 온 성공 메시지를 보여줍니다.
          
          // 로그인에 성공하면 사용자 정보와 토큰을 로컬 스토리지에 저장합니다.
          localStorage.setItem('user', JSON.stringify(user));
          localStorage.setItem('token', token);

          // 로그인에 성공하면 Main 페이지로 이동합니다.
          this.$router.push("/MainPage");
        } else {
          // 로그인이 실패한 경우, 백엔드에서 온 에러 메시지를 보여줍니다.
          const { error } = response.data;
          alert(error);
        }
      }  catch (error) {
        console.error("로그인 중에 문제가 발생했습니다. 다시 시도해주세요.", error);
        alert("로그인 중에 문제가 발생했습니다. 다시 시도해주세요.");
      }
    },
  },
};
</script>

<style scoped>
body {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f0f0;
  margin: 0;
  font-family: 'HakgyoansimWoojuR', sans-serif;
}

.LoginPage {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 2; 
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}

.LoginPage h1 {
  font-size: 32px;
  text-align: center;
  margin-bottom: 30px;
}

.int-area input {
  width: 100%;
  padding: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  margin-bottom: 15px;
}

.btn-area button {
  width: 100%;
  height: 50px;
  background: #007bff;
  color: white;
  font-size: 18px;
  border: none;
  border-radius: 25px;
  cursor: pointer;
}

.btn-area button:disabled {
  background: #ccc;
  cursor: not-allowed;
}

.caption {
  margin-top: 15px;
  text-align: center;
}

.caption a {
  font-size: 16px;
  color: #007bff;
  text-decoration: none;
  font-weight: bold;
}

.img {
  max-width: 100%;
  height: auto;
}

@font-face {
    font-family: 'HakgyoansimWoojuR';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2307-2@1.0/HakgyoansimWoojuR.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
}

</style>