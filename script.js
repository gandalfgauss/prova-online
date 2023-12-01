
document.addEventListener('visibilitychange', function () {
  if (document.visibilityState === 'hidden') {
  
    const sendButton = document.querySelector(".ff-button-bar button");
    sendButton && sendButton.click();

    setTimeout(function () {
      window.location.href = "https://www.google.com"
    }, 300);
    
  }
});
