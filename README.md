# 올바른광고

광고 기획과 운영을 준비하는 사람을 위한 한글 안내 사이트입니다.

## 출처

구조는 [ProCleaning](https://github.com/anastasiiaxfr/ProCleaning)의 MIT 라이선스 Astro 정적 사이트 소스를 바탕으로 재구성했습니다. 원본 저작권 및 허가 조건은 `LICENSE`에 보존했습니다. 원본의 이미지와 사업자 정보는 사용하지 않았습니다.

## 실행

```bash
npm ci
npm run build
```

대표 주소는 `https://seoyo.kr`로 설정했습니다. `SITE_URL` 환경 변수로 다른 대표 주소를 지정할 수 있습니다. 도메인을 변경한 뒤 다시 빌드하면 canonical, robots.txt, sitemap-index.xml에 반영됩니다.

네이버 소유 확인 값이 발급되면 `NAVER_SITE_VERIFICATION` 환경 변수에 태그의 `content` 값만 설정하고 다시 배포하세요. 실제 업체 정보, 연락처와 서비스 범위가 확정되기 전에는 임의로 기재하지 않았습니다.
