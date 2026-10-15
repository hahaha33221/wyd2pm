# VPS 배포 안내 (초안)

Ubuntu 22.04/24.04 기준입니다. 도메인은 `qna.example.com`, 설치 위치는 `/srv/wyd-qna`로 가정합니다.

## 1. 기본 설치 (최초 1회)

```bash
sudo apt update && sudo apt install -y nginx git
curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash -
sudo apt install -y nodejs
sudo corepack enable            # pnpm 사용
sudo useradd -r -m -d /srv/wyd-qna -s /bin/bash wyd
```

## 2. 코드 받기와 빌드

```bash
sudo -u wyd git clone https://github.com/hahaha33221/WYDQaA.git /srv/wyd-qna
cd /srv/wyd-qna
sudo -u wyd cp .env.example .env     # ADMIN_CODE 를 꼭 바꾸세요
sudo -u wyd pnpm install --frozen-lockfile
sudo -u wyd pnpm run build
```

## 3. 서버 상시 실행 (systemd)

```bash
sudo cp deploy/wyd-qna.service /etc/systemd/system/
sudo systemctl daemon-reload
sudo systemctl enable --now wyd-qna
curl -s http://127.0.0.1:3000/api/data     # {"faq":{},...} 가 나오면 정상
```

## 4. nginx + HTTPS

```bash
sudo cp deploy/nginx.conf /etc/nginx/sites-available/wyd-qna   # server_name 수정
sudo ln -s /etc/nginx/sites-available/wyd-qna /etc/nginx/sites-enabled/
sudo nginx -t && sudo systemctl reload nginx
sudo apt install -y certbot python3-certbot-nginx
sudo certbot --nginx -d qna.example.com
sudo ufw allow 'Nginx Full' && sudo ufw allow OpenSSH && sudo ufw enable
```

## 5. 이후 업데이트

```bash
cd /srv/wyd-qna && bash deploy/deploy.sh
```

`deploy.sh`는 `wyd` 사용자로 실행하고, 그 사용자에게 `systemctl restart wyd-qna` sudo 권한을 주거나 root로 실행하세요.

## 데이터 백업

질문·답변은 `/srv/wyd-qna/data/db.json` 한 파일입니다. 행사 기간에는 주기적으로 복사해 두세요.

```bash
sudo crontab -e
# 10분마다 백업
*/10 * * * * cp /srv/wyd-qna/data/db.json /srv/wyd-qna/data/backup-$(date +\%H\%M).json
```

## 확인할 것 (VPS 정보 받은 뒤 확정)

- [ ] VPS OS·접속 계정 (root / sudo 사용자)
- [ ] 도메인 연결 여부 (없으면 IP로 우선 운영, HTTPS는 도메인 필요)
- [ ] 같은 VPS에 다른 서비스가 있는지 (포트 3000·nginx 설정 충돌)
- [ ] GitHub Pages 배포를 계속 둘지, VPS로 완전히 옮길지
