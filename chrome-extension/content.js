chrome.runtime.onMessage.addListener(function (msg) {
  if ( msg.action === 'save-bookmark' ) {
    let l = location.href;
    if ( document.getSelection ) {
      d = document.getSelection();
    } else {
      d = '';
    }
    let t = document.title;
    let w, h;
    if (innerWidth > 1500) {
      w = 1210;
    } else {
      w = (innerWidth * 80 ) / 100;
    }

    if(innerHeight > 1500) {
      h = 1210;
    } else {
      h = (innerHeight * 90 ) / 100;
    }
    let features = `toolbar=no,width=${w},height=${h},top=0, left=0`;
    open('https://www.bookmarks.dev/personal/new?url=' + encodeURIComponent(l) + '&desc=' + encodeURIComponent(d) + '&title=' + encodeURIComponent(t) + '&popup=true', 'Bookmarks.dev', features);
  }
});
