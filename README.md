# weather_app_react_native(리액트 네이티브를 활용한 날씨 확인 APP)

## 주요 내용

### 실행 apk 다운로드 : https://expo.dev/artifacts/eas/3RkCsLvsRM8KM6XozWtQEP.apk

### 개발언어 등 
 - HTML, CSS, JavaScript
 - react-native, expo
 - kakao map API 활용
 - openWeatherMap API 활용
 
 ### 프로그램 특징
  - 접속 시 상단 지도를 통해 현재 위치 표시
  - 하단 정보 창에 현재 온도와 날씨 정보 표시
  - 지도 내 특정 위치 클릭(탭) 시 해당 지역의 날씨 확인
 
 ### 제작 특이사항
 - WebView를 활용하여 kakao map API와 연동
 - WebView의 onMethod 속성을 활용하여 지도 위치정보 연동
 
 ### 향후 개발 사항
 - expo를 사용하지 않고 빌드 및 배포할 수 있도록 진행
 - native의 기능들을 활용할 수 있도록 방향 설계 필요
 - 지도 클릭 외에 지역 선택 혹은 검색할 수 있는 기능 반영
 
 ![weather_react](https://user-images.githubusercontent.com/113665653/219518572-0e4b6c81-cb64-4458-aff8-a0338ebe683d.jpg)
