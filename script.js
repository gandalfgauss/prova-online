
document.addEventListener('visibilitychange', function () {
  if (document.visibilityState === 'hidden') {
    console.log("oi")
    const sendButton = document.querySelector(".ff-button-bar button");
    sendButton && sendButton.click();

    setTimeout(function () {
      window.location.href = "https://www.google.com"
    }, 300);
    
  }
});
