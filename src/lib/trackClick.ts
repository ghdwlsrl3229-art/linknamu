export function trackClick(id: string) {
  fetch("/api/clicks", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id }),
    keepalive: true,
  }).catch(() => {
    // 클릭 집계 실패가 사용자 경험(이동/화면)에 영향을 주지 않도록 무시
  });
}
