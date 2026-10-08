// script.js
document.addEventListener('DOMContentLoaded', () => {
    // 부드러운 스크롤 효과 (모든 브라우저 지원을 위해)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70, // 네비게이션 바 높이만큼 조정
                    behavior: 'smooth'
                });
            }
        });
    });

    console.log("포트폴리오 사이트가 성공적으로 로드되었습니다.");
});

