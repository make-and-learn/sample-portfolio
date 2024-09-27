// DOMが完全に読み込まれた後に実行
document.addEventListener('DOMContentLoaded', () => {
    // 必要な要素の取得
    const contactForm = document.getElementById('contact-form');
    const currentYearSpan = document.getElementById('current-year');

    // フォーム送信処理
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault(); // デフォルトの送信動作を防止
        // ここにフォーム送信のロジックを実装
        // 例: サーバーへのデータ送信、バリデーションなど
        alert('お問い合わせありがとうございます。');
        contactForm.reset(); // フォームをリセット
    });

    // スムーズスクロール機能
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault(); // デフォルトのリンク動作を防止
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth' // スムーズスクロールを有効化
            });
        });
    });

    // フッターの年を自動更新
    currentYearSpan.textContent = new Date().getFullYear();
});