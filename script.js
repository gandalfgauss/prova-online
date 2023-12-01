
document.addEventListener('visibilitychange', function () {
  if (document.visibilityState === 'hidden') {

    setTimeout(function () {
      window.location.href = "https://www.google.com"
    }, 300);
    
  }
});
