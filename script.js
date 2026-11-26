/* EDIT YOUR PERSONAL CONTENT HERE */
const galleryItems = Array.from({length:20}, (_,i)=>({
  image:`photo-${String(i+1).padStart(2,"0")}.jpg`,
  description:`A favourite little moment. Replace this caption with the story behind photo ${i+1}.`
}));

const chapters = [
  {title:"Early Years",body:"Every good story has a beginning. Add a few memories from Keshav's childhood here: the little habits, big mischiefs, family stories and the moments that made him who he is."},
  {title:"The Person",body:"The things that make Keshav Keshav. Add a few words about his personality, his humour, the way he sees the world and all the little things people around him recognise instantly."},
  {title:"Things He Loves",body:"The favourites list. Add his favourite music, food, films, places, hobbies, comfort things and the interests he can talk about for hours."},
  {title:"A Few Rare Facts",body:"The details that deserve their own footnote. Add funny facts, unexpected talents, oddly specific preferences and stories that only his closest people know."},
  {title:"The Keshav Effect",body:"Some people leave a place exactly as they found it. Keshav probably doesn't. Add what changes when he is around, what people appreciate about him and why he matters."}
];

const letters = Array.from({length:11},(_,i)=>({
  from:`Someone who cares about you`,
  text:`Dear Keshav,\n\nHappy 19th birthday! This is where your personal message goes. Replace this sample letter with the note written especially for you.\n\nHere's to more memories, more laughter and a brilliant year ahead.\n\nWith love,\nSomeone who is cheering you on.`
}));

function renderGallery(){
  const grid=document.getElementById("photoGrid");
  if(!grid)return;
  grid.innerHTML=galleryItems.map((item,i)=>`<button class="photo-card" data-photo="${i}" aria-label="Open photo ${i+1}">
    <span class="photo-pin"></span><span class="photo-mat"><span class="photo-image"><img src="${item.image}" alt="Photo ${i+1}" onerror="this.style.display='none'"><span class="photo-placeholder">YOUR PHOTO<br> ${String(i+1).padStart(2,"0")}</span></span><span class="photo-label">FRAME ${String(i+1).padStart(2,"0")} · A MEMORY</span></span>
  </button>`).join("");
  grid.querySelectorAll(".photo-card").forEach(card=>card.addEventListener("click",()=>openPhoto(Number(card.dataset.photo))));
}
function openPhoto(i){
  const modal=document.getElementById("photoModal"),item=galleryItems[i],img=document.getElementById("modalImage");
  img.src=item.image;img.alt=`Photo ${i+1}`;
  img.onerror=()=>{img.style.display="none"};img.onload=()=>{img.style.display="block"};
  document.getElementById("modalNumber").textContent=`FRAME ${String(i+1).padStart(2,"0")}`;
  document.getElementById("modalDescription").textContent=item.description;
  modal.classList.add("open");modal.setAttribute("aria-hidden","false");
}
function renderChapters(){
  document.querySelectorAll(".chapter-card").forEach(btn=>btn.addEventListener("click",()=>{
    const item=chapters[Number(btn.dataset.chapter)];
    document.getElementById("chapterLabel").textContent=`FILE ${String(Number(btn.dataset.chapter)+1).padStart(2,"0")} / CLASSIFIED`;
    document.getElementById("chapterTitle").textContent=item.title;
    document.getElementById("chapterBody").textContent=item.body;
    const modal=document.getElementById("chapterModal");modal.classList.add("open");modal.setAttribute("aria-hidden","false");
  }));
}
function renderLetters(){
  const grid=document.getElementById("envelopeGrid");if(!grid)return;
  grid.innerHTML=letters.map((_,i)=>`<button class="envelope-card" data-letter="${i}" aria-label="Open envelope ${i+1}"><span class="envelope-shape"><span class="envelope-number">LETTER ${String(i+1).padStart(2,"0")}</span><span class="envelope-seal-small">K</span></span></button>`).join("");
  grid.querySelectorAll(".envelope-card").forEach(card=>card.addEventListener("click",()=>openLetter(Number(card.dataset.letter))));
}

function openLetter(i) {
  const item = letters[i];

  document.getElementById("letterFrom").textContent = item.from;
  document.getElementById("letterText").textContent = item.text;

  const modal = document.getElementById("letterModal");

  modal.classList.remove("revealed");
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");

  // Give the closed envelope time to appear first
  setTimeout(() => {
    modal.classList.add("revealed");
  }, 100);
}

function closeModal(el) {
  el.classList.remove("revealed");
  el.classList.remove("open");
  el.setAttribute("aria-hidden", "true");
}

document.addEventListener("DOMContentLoaded",()=>{
  renderGallery();renderChapters();renderLetters();
  document.querySelectorAll(".modal-close").forEach(btn=>btn.addEventListener("click",()=>closeModal(btn.closest(".photo-modal,.chapter-modal,.letter-modal"))));
  document.querySelectorAll(".photo-modal,.chapter-modal,.letter-modal").forEach(modal=>modal.addEventListener("click",e=>{if(e.target===modal)closeModal(modal)}));
  document.addEventListener("keydown",e=>{if(e.key==="Escape")document.querySelectorAll(".photo-modal.open,.chapter-modal.open,.letter-modal.open").forEach(closeModal)});
});
