// Simple player logic: clicking Play sets the src of hidden iframe to the chosen YouTube video (autoplay enabled by adding autoplay=1)
// Two example video IDs (you gave these previously). We use the first by default.
const VIDEO_1 = "9GYbRI4yJ78"; // first track
const VIDEO_2 = "ocuGTFqDlSQ"; // second track

const playBtn = document.getElementById('playBtn');
const pauseBtn = document.getElementById('pauseBtn');
const yt1 = document.getElementById('yt1');
const yt2 = document.getElementById('yt2');

let playing = false;

function playVideo(id){
  // stop others by clearing src first (helps mobile browsers)
  yt1.src = '';
  yt2.src = '';
  // set selected src with autoplay
  yt1.src = `https://www.youtube.com/embed/${id}?autoplay=1&rel=0&modestbranding=1`;
  playing = true;
}

playBtn.addEventListener('click', ()=>{
  if(!playing){
    playVideo(VIDEO_1);
    playBtn.textContent = "Müzik Çalıyor ❤️";
  } else {
    // already playing -> switch to second track as a nice gesture
    playVideo(VIDEO_2);
    playBtn.textContent = "İkinci Şarkı Çalıyor 🎶";
  }
});
pauseBtn.addEventListener('click', ()=>{
  yt1.src='';
  yt2.src='';
  playing = false;
  playBtn.textContent = "Play";
});

// Accessibility: allow keyboard enter to trigger
playBtn.addEventListener('keyup', (e)=>{ if(e.key==='Enter') playBtn.click(); });

// Nice little fade-in
document.addEventListener('DOMContentLoaded', ()=>{
  document.querySelector('.page').style.opacity = 0;
  setTimeout(()=>{ document.querySelector('.page').style.transition='opacity .6s'; document.querySelector('.page').style.opacity=1; },50);
});