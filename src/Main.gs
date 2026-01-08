/**
 * 處理網頁進入 (LIFF)
 */
function doGet(e) {
  const page = e.parameter.p || 'index';
  return HtmlService.createTemplateFromFile(page)
      .evaluate()
      .setTitle("運動島管理中心")
      .addMetaTag('viewport', 'width=device-width, initial-scale=1')
      .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

/**
 * 處理 API 請求 (API 模式)
 */
function doPost(e) {
  let result;
  try {
    const data = JSON.parse(e.postData.contents);
    switch(data.action) {
      case 'register':
        result = processRegistration(data);
        break;
      case 'attendance':
        result = markAttendance(data);
        break;
      default:
        result = { success: false, msg: "未定義的 API 動作" };
    }
  } catch (err) {
    result = { success: false, msg: "後端錯誤: " + err.message };
  }
  return ContentService.createTextOutput(JSON.stringify(result))
         .setMimeType(ContentService.MimeType.JSON);
}
