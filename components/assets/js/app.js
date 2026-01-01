// 簡單的主應用程式
console.log('Sports Island Admin 正在啟動...');

// 等DOM載入完成
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM 載入完成');
    
    // 簡單的側邊欄點擊處理
    document.addEventListener('click', function(e) {
        if (e.target.closest('.nav-item')) {
            const navItem = e.target.closest('.nav-item');
            const module = navItem.getAttribute('data-route');
            
            if (module) {
                // 移除所有active狀態
                document.querySelectorAll('.nav-item').forEach(item => {
                    item.classList.remove('active');
                });
                
                // 設置當前active
                navItem.classList.add('active');
                
                // 顯示簡單訊息
                alert(`即將載入: ${module} 模組\n(這個功能還沒完成)`);
            }
        }
        
        // 登出按鈕
        if (e.target.closest('[data-action="logout"]')) {
            if (confirm('確定要登出嗎？')) {
                alert('登出成功！');
            }
        }
    });
    
    // 顯示歡迎訊息
    setTimeout(function() {
        console.log('應用程式已準備就緒');
    }, 1000);
});
