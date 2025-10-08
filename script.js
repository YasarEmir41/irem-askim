// Autoplay YouTube embed attempt. Some browsers block autoplay with sound.
// We'll try muted autoplay first, then attempt unmuted shortly after.
const VIDEO_ID = "9GYbRI4yJ78"; // main chosen track

function createIframe(id, autoplay, mute){
  const iframe = document.createElement('iframe');
  iframe.width = "0"; iframe.height = "0"; iframe.style.display = 'none';
  iframe.src = `https://www.youtube.com/embed/${id}?autoplay=${autoplay?1:0}&mute=${mute?1:0}&rel=0&modestbranding=1`;
  iframe.allow = "autoplay; encrypted-media";
  return iframe;
}

document.addEventListener('DOMContentLoaded', ()=>{
  const container = document.getElementById('yt-player');
  const ifr = createIframe(VIDEO_ID, true, true);
  container.appendChild(ifr);
  setTimeout(()=>{
    const ifr2 = createIframe(VIDEO_ID, true, false);
    container.innerHTML = '';
    container.appendChild(ifr2);
  }, 1200);
});