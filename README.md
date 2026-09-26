# 올바른광고

광고 기획과 운영을 준비하는 사람을 위한 한글 안내 사이트입니다.

## 출처

구조는 [ProCleaning](https://github.com/anastasiiaxfr/ProCleaning)의 MIT 라이선스 Astro 정적 사이트 소스를 바탕으로 재구성했습니다. 원본 저작권 및 허가 조건은 `LICENSE`에 보존했습니다. 원본의 이미지와 사업자 정보는 사용하지 않았습니다.

## 실행

```bash
npm ci
npm run build
```

배포 도메인이 확정되면 `SITE_URL=https://도메인`을 Vercel 환경 변수로 설정하세요. 설정하지 않으면 Vercel의 프로젝트 프로덕션 URL을 사용합니다. 시스템 환경 변수가 비활성화된 배포에서는 `SITE_URL` 설정이 필수입니다. 로컬 빌드는 `http://localhost:4321`을 사용합니다. 도메인 변경 후 다시 빌드해야 canonical, robots.txt, sitemap-index.xml에 반영됩니다.

네이버 소유 확인 값이 발급되면 `NAVER_SITE_VERIFICATION` 환경 변수에 태그의 `content` 값만 설정하고 다시 배포하세요. 실제 업체 정보, 연락처와 서비스 범위가 확정되기 전에는 임의로 기재하지 않았습니다.
