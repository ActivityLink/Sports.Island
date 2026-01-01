// 簡單的工具函數
const Utils = {
    // 顯示載入中
    showLoading: function() {
        const spinner = document.getElementById('loading-spinner');
        if (spinner) {
            spinner.style.display = 'flex';
        }
    },
    
    // 隱藏載入中
    hideLoading: function() {
        const spinner = document.getElementById('loading-spinner');
        if (spinner) {
            spinner.style.display = 'none';
        }
    },
    
    // 簡單的日期格式化
    formatDate: function(date) {
        if (!date) return '';
        const d = new Date(date);
        return d.toLocaleDateString('zh-TW');
    }
};

// 讓全域可以存取
window.Utils = Utils;
console.log('Utils 已載入');
