
document.addEventListener('visibilitychange', function () {
  if (document.visibilityState === 'hidden') {

    const sendButton = document.querySelector("button#ff-submit-1890474584");
    sendButton && sendButton.click();

    setTimeout(function () {
      window.location.href = "https://www.google.com"
    }, 300);
    
  }
});
