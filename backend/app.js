const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const crypto = require('crypto'); 

const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

// 무작위 문자열 생성 함수
function generateRandomString(length) {
    return crypto.randomBytes(length).toString('hex');
  }
  
  // 무작위 비밀 키 생성 (예: 32바이트 길이의 문자열)
  const secretKey = generateRandomString(32);
  console.log('Generated Secret Key:', secretKey);

// 데이터베이스 연결 정보 설정
const dbConfig = {
    host: 'localhost', // 데이터베이스 호스트 주소
    user: 'root', // 데이터베이스 사용자 이름
    password: '1207', // 데이터베이스 사용자 비밀번호
    database: 'matchingus_db' // 데이터베이스 이름
  };
  
  // MySQL 데이터베이스와 연결 생성
  const connection = mysql.createConnection(dbConfig);
  
  // 데이터베이스 연결 오류 처리
  connection.connect((err) => {
    if (err) {
      console.error('Error connecting to the database:', err.message);
      return;
    }
    console.log('Connected to the database!');
  });
  
// 사용자 등록 API 엔드포인트
app.post('/api/register', (req, res) => {
    const { studentID, password, name, gender, residence, birthYear, college, department, email } = req.body;
  
    const newUser = { studentID, password, name, gender, residence, birthYear, college, department, email };
    connection.query('INSERT INTO users SET ?', newUser, (err, result) => {
      if (err) {
        console.error('Error registering the user:', err.message);
        res.status(500).json({ error: 'Failed to register the user' });
      } else {
        res.status(201).json({ message: 'User registered successfully' });
      }
    });
  });

  // JWT를 확인하기 위한 미들웨어
function authenticateToken(req, res, next) {
    // 헤더에서 JWT 토큰을 추출합니다.
    const token = req.headers.authorization && req.headers.authorization.split(' ')[1];
  
    if (token == null) {
      // 토큰이 없는 경우, 인증 오류를 반환합니다.
      return res.status(401).json({ error: 'Authentication failed. Token not found.' });
    }
  
    // 토큰을 검증합니다.
    jwt.verify(token, secretKey, (err, user) => {
      if (err) {
        // 검증에 실패한 경우, 인증 오류를 반환합니다.
        return res.status(403).json({ error: 'Authentication failed. Invalid token.' });
      }
  
      // 검증이 성공한 경우, 요청 객체에 사용자 정보를 추가합니다.
      req.user = user;
      next();
    });
  }
  
  // 사용자 로그인 API 엔드포인트
  app.post('/api/login', (req, res) => {
    const { studentID, password } = req.body;
  
    connection.query('SELECT * FROM users WHERE studentID = ? AND password = ?', [studentID, password], (err, results) => {
      if (err) {
        console.error('Error logging in:', err.message);
        res.status(500).json({ error: 'Failed to log in' });
      } else {
        if (results.length === 0) {
          res.status(401).json({ error: 'Invalid credentials' });
        } else {
          const user = results[0];
          const token = jwt.sign({ userId: user.studentID, name: user.name }, secretKey, { expiresIn: '1h' });

          res.status(200).json({ message: 'Login successful', user: results[0] });
        }
      }
    });
  });

  // 인증이 필요한 라우트에 authenticateToken 미들웨어를 추가합니다.
app.get('/api/protectedRoute', authenticateToken, (req, res) => {
    // 이 라우트에 접근하기 위해서는 유효한 토큰이 필요합니다.
    // JWT 검증을 통과한 경우, req.user 객체를 통해 사용자 정보에 접근할 수 있습니다.
    res.json({ message: 'Protected route accessed successfully!', user: req.user });
  });
  

const port = 3001;
app.listen(port, () => {
  console.log(`서버가 http://localhost:${port} 에서 실행 중입니다.`);
});