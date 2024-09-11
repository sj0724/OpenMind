# OpenMind

나의 생각과 궁금점을 자유롭게 질문해보세요! 익명으로 질문하고 답변 할 수 있습니다!

## 배포 링크

<a href='https://openmind-5-2.netlify.app/'>https://openmind-5-2.netlify.app/</a>

## Team
|<img src="https://avatars.githubusercontent.com/u/137033202?v=4" width="150" height="150"/>|<img src="https://avatars.githubusercontent.com/u/40783675?v=4" width="150" height="150"/>|<img src="https://avatars.githubusercontent.com/u/160032149?v=4" width="150" height="150"/>|<img src="https://avatars.githubusercontent.com/u/151392186?v=4" width="150" height="150"/>|<img src="https://avatars.githubusercontent.com/u/101908750?v=4" width="150" height="150"/>|
|:-:|:-:|:-:|:-:|:-:|
|팀장: 박상준<br/>[@sj0724](https://github.com/sj0724)|팀원: 전유민<br/>[@JeonYumin94](https://github.com/JeonYumin94)|팀원: 김현서<br/>[@khs0727](https://github.com/khs0727)|팀원: 최준엽<br/>[@yup299](https://github.com/yup299)|팀원: 허찬욱<br/>[@hkwangro](https://github.com/hkwangro)|

- 박상준: 랜딩 페이지, 질문 페이지
- 전유민: 질문 작성 페이지
- 김현서: 리스트 페이지
- 최준엽: 답변 모달
- 허찬욱: 발표, 코드 리뷰

## 개발 기간
  전체 개발 기간 : 2024-04-09 ~ <br>

## 기술 스택

- HTML, CSS, JavaScript, React, TypeScript, Axios, styled-components, React-router-dom, react-js-pagination

## 프로젝트 설명

1. 랜딩 페이지
   
<img width="1387" alt="스크린샷 2024-09-11 오후 4 21 44" src="https://github.com/user-attachments/assets/7fc576be-b19b-47fe-92fd-a8d14b2577b5">

- 닉네임을 입력해 익명의 이름으로 질문을 받을 수 있습니다.
- 상단의 질문하러 가기 버튼을 누르면 사용자 리스트 페이지로 이동합니다.

2. 사용자 리스트 페이지
   
  <img width="1387" alt="스크린샷 2024-09-11 오후 4 22 22" src="https://github.com/user-attachments/assets/9e41bfdd-f57e-439c-8160-540a39f113c7">

- 랜딩 페이지에서 입력한 이름으로 생성된 유저 카드 리스트를 확인할 수 있습니다.
- 하단 페이지네이션 버튼으로 다른 페이지로 이동 가능합니다.
- 유저 카드를 선택하면 해당 유저 질문 페이지로 이동합니다.
- 상단 답변하러가기 버튼을 누르면 본인 질문 페이지로 이동합니다.

3. 질문 페이지
   
   <img width="1387" alt="스크린샷 2024-09-11 오후 4 23 53" src="https://github.com/user-attachments/assets/8646c4cd-f4c6-41b9-80a6-78defb8a819d">

- 익명으로 해당 유저에게 질문할 수 있습니다.
- 다른 유저가 질문한 질문 목록을 확인할 수 있습니다.
- 답변 유무와 답변을 확인할 수 있습니다.
- 질문에 좋아요와 싫어요 버튼을 눌러 리액션을 남길 수 있습니다.

4. 질문 모달
   
   <img width="1387" alt="스크린샷 2024-09-11 오후 4 31 53" src="https://github.com/user-attachments/assets/d69d2160-24bb-4ed5-89fa-78d995d03bd1">

- 모달을 통해 질문을 등록할 수 있습니다.
- 글자수는 400자를 넘을 수 없으며 input 하단에서 글자수를 확인할 수 있습니다.

5. 답변 페이지
   
   <img width="1387" alt="스크린샷 2024-09-11 오후 4 36 04" src="https://github.com/user-attachments/assets/abbb15c2-2b0d-4dec-b541-dcb0ae8fb666">

- 나에게 등록된 질문을 확인할 수 있습니다.
- 질문에 대해 답변, 답변 거절, 질문 삭제를 할 수 있습니다.
- 질문은 400자를 넘을 수 없으면 input 하단에서 글자수를 확인할 수 있습니다.

## 실행 가이드

프로젝트에 build시에 환경 변수 설정이 필요합니다. API요청 url과 kakao key를 .env파일에 생성수 프로젝트를 실행해주세요.
```
VITE_API_URL=""
VITE_KEY=""
```
   
