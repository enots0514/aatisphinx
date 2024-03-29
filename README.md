## 회원가입 및 로그인 백엔드 폼
> express와 몽고DB를 활용함
>   > 회원가입 및 로그인 폼은 라이브러리를 사용함

###### 위는 >를 사용해 >     > 이런 식으로 작성함.

### 순서있는 리스트(숫자와 점을 사용하면 된다.)
    1. 첫번째
    2. 두번째


# 깃허브 브랜치
> logins
>   > 몽고디비를 활용한 회원가입 및 로그인 기본 포맷
>   >   > 암호화 및 섹션 사용 없음


> bcript모듈(모듈명 철자를 잘못 썼네, 하지만 브랜치는 그냥 이대로)
>   > bcrypt(철자 주의)모듈 활용, salt와 hash 사용해 암호화하기
>   >   > 참조사이트
* 공식사이트
    - https://www.npmjs.com/package/bcrypt
* 국내유저사이트     
    - https://velog.io/@iamhayoung/Bcrypt%EB%A1%9C-%EB%B9%84%EB%B0%80%EB%B2%88%ED%98%B8-%EC%95%94%ED%98%B8%ED%99%94%ED%95%98%EA%B8%B0
* stackoverflow
    - https://stackoverflow.com/questions/14588032/mongoose-password-hashing
* 해외유저사이트
    - https://coderrocketfuel.com/article/store-passwords-in-mongodb-with-node-js-mongoose-and-bcrypt


> passports
>   > passportjs를 활용한 회원가입 및 로그인 기본 포맷
>   >   > bcrypt 암호화 기반 위에 섹션 추가
* 공식사이트
    - http://www.passportjs.org/
* 국내유저사이트     
    - https://mindflip.github.io/javascript/node.js/nodejs_passport/
* 국내유저사이트2
    - https://dev-dain.tistory.com/73

> flashmsg
>   > 회원가입 및 로그인에 flash Message 추가하기
>   >   > connect-flash 모듈 활용
* 국내유저사이트
 - https://m.blog.naver.com/rwans0397/220680181786
* 국내유저사이트2
   - https://dev-dain.tistory.com/73


> logouts
>   > 로그인 시에만 콘텐츠 보기 및 로그아웃 구현
>   >   > req.logout();
* 공식사이트
 - http://www.passportjs.org/docs/login/
* 국내유저사이트2
   - https://dev-dain.tistory.com/73


> googles
>   > 구글을 통한 로그인 
>   >   > passport-google-oauth20
* 공식사이트
 - http://www.passportjs.org/docs/login/
* 국내유저사이트
  -  https://www.a-mean-blog.com/ko/blog/%EB%8B%A8%ED%8E%B8%EA%B0%95%EC%A2%8C/_/Node-JS-%EC%84%9C%EB%B2%84%EC%97%90-%EA%B5%AC%EA%B8%80-%EC%86%8C%EC%85%9C-%EB%A1%9C%EA%B7%B8%EC%9D%B8-%EA%B8%B0%EB%8A%A5-%EB%84%A3%EA%B8%B0-1-2-Google-OAuth-Client-ID-Client-Secret-%EC%83%9D%EC%84%B1%EB%B0%A9%EB%B2%95 

   - https://www.a-mean-blog.com/ko/blog/%EB%8B%A8%ED%8E%B8%EA%B0%95%EC%A2%8C/_/Node-JS-%EC%84%9C%EB%B2%84%EC%97%90-%EA%B5%AC%EA%B8%80-%EC%86%8C%EC%85%9C-%EB%A1%9C%EA%B7%B8%EC%9D%B8-%EA%B8%B0%EB%8A%A5-%EB%84%A3%EA%B8%B0-2-2-%EC%BD%94%EB%94%A9




    #### 순서없는 리스트 (글머리 기호 *, -, + 지원)
* 1단계
    - 2단계
        + 3단계
            + 4단계 

##### 들여쓰기 
    마크다운 작성법(사용법)

        * 들여쓰기는 한 칸 뛰고 들여쓰면 된다.

            글자크기는 우물정(#)자를 사용한다.

            1) 우물정(#)자 하나가 H1를 의미하고 여섯개가 H6를 의미한다. 

            2) *는 검은점, +는 흰점, -는 네모점 등 글머리 기호 지원한다.  

            3) 코드 블럭 <pre><code> 코드 내용 입력 </code></pre> 가능하다.

            4) 수평선 hr은 ****** 또는 -------------------를 사용한다.



**********************       

##### 글자 형식 (눈송이*를 텍스트 앞 뒤에 넣는다.) 
*눈송이 하나를 앞 뒤에 넣은 경우*

**눈송이 두 개를 넣은 경우**

###### 링크 연결 하기
* 기본적인 링크 형식으로 < > 안에 링크 주소를 넣으면 된다.
+ 이 외에도 링크 방법은 다양하다.
- 예시 : <http://url주소.co.kr> 
/ 이메일 : <이메일@daum.net>

*******************************