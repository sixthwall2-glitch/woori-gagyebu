# 우리집 가계부

부부가 함께 쓰는 달력형 가계부입니다.

- **안드로이드**: [Releases](../../releases/latest)에서 `woori-gagyebu.apk`를 내려받아 설치
- **아이폰**: GitHub Pages 주소를 사파리로 열고 공유 → **홈 화면에 추가**
- 데이터: Firebase(Firestore)에 저장되며 두 사람의 이메일 계정만 읽고 쓸 수 있습니다 (`firestore.rules`).

## 구조
| 경로 | 내용 |
|---|---|
| `src/index.html` | 화면 마크업과 스타일 |
| `src/ledger.js` | 달력·등록·통계 화면 로직 |
| `src/main.js` | Firebase 로그인·저장소 연결, 안드로이드 뒤로가기 |
| `src/firebase-config.js` | Firebase 웹 앱 설정값 |
| `firestore.rules` | 데이터 접근 규칙 (콘솔에 붙여 넣기) |
| `android/` | Capacitor 안드로이드 프로젝트 |
| `.github/workflows/build.yml` | main에 올리면 APK 빌드 + 웹 배포 |

## 빌드 비밀값 (Settings → Secrets and variables → Actions)
`KEYSTORE_BASE64`, `KEYSTORE_PASSWORD`, `KEY_ALIAS` — 앱 서명 키. 키가 바뀌면 기존 앱 위에 업데이트 설치가 되지 않으니 원본 키 파일을 따로 보관하세요.
