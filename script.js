
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


/* ALL 11 PERSONAL LETTERS */

const letters = [

  // LETTER 1 - MOM
  {
    from: "Mom",
    text: `ಪ್ರಿಯ ಪುತ್ರಾ,

ನಿನ್ನನ್ನು ಹೇಗೆ ಸಂಬೋಧಿಸಲಿ?

ವಿಘ್ನಗಳನ್ನು ನೀಗಿಸುವ ಸಂಕಷ್ಟಹರ ಮಂಗಳಕರ ವಿನಾಯಕನೇ! ಬಾಳನ್ನು ಬೆಳಗಿಸುವ ಪ್ರಜ್ವಲ ಜ್ಯೋತಿಯೇ! ಕುಣಿಸಿ, ನಗಿಸಿ, ಪುನೀತನಾಗಿಸುವ ಅಪ್ಪುವೇ! ನಿನ್ನ ಎಲ್ಲ ಸಹೋದರ ಸಹೋದರಿಯರಿಗೆ ಜ್ಞಾನ ನೀಡುವ ಅಗ್ರಜನೇ!

ಅದೇನೇ ಇರಲಿ, ನನಗಂತೂ ಜ್ಞಾನಾಮೃತವನ್ನು ನೀಡುವ ದೈವಾಂಶ ಸಂಭೂತರಾದ ಹಿರಿಯರ ಆಶೀರ್ವಾದದಿಂದ ಜನಿಸಿದ ನನ್ನ ಮುದ್ದಿನ ಮಗ ನೀನು. ಇದು ನನ್ನ ಸೌಭಾಗ್ಯ. ನಿನ್ನಂತಹ ಮಗನನ್ನು ಪಡೆದ ನಾನೇ ಧನ್ಯಳು.

ಜನ್ಮದಿಂದಲೇ ನೀನು ಕೋದಂಡರಾಮನ ಭಕ್ತನಾಗಿರುವೆ. ಕೇಶವನ ನಾಮಸ್ಮರಣೆಯಿಂದ ನಮ್ಮ ಮನೆಯೇ ಮಂತ್ರಾಲಯವಾಗಿದೆ.

ನೀನು ನಮ್ಮೆಲ್ಲರ ಮನಗಳನ್ನು ಗೆದ್ದಂತೆ, ಮನುಕುಲದ ಉದ್ಧಾರಕ್ಕಾಗಿ ನಿನ್ನ ನಿಲುವು ಸದಾ ಗಟ್ಟಿಯಾಗಿರಲಿ. ನಿನ್ನ ಆದರ್ಶಗಳು, ನಿನ್ನ ನಡೆ-ನುಡಿಗಳು ಅನೇಕರಿಗೆ ಪ್ರೇರಣೆಯಾಗಲಿ.

ಸದಾ ಭಗವಂತನ ಕೃಪಾಶೀರ್ವಾದ ನಿನ್ನ ಮೇಲಿರಲಿ ಎಂದು ಹಾರೈಸುತ್ತೇನೆ.

ಇಂತಿ,
ನಿನ್ನ ಪೂಜ್ಯ ಪ್ರೀತಿಯ ಮಾತೃಶ್ರೀ
ಮಂಜುಳಾ

With lots of love and blessings.`
  },


  // LETTER 2 - KAUSHALYA
  {
    from: "Kaushalya",
    text: `Dear Brother,
I am a plant, and you are the stick that supports me. I am the picture, and you are the frame that protects me. I am a chair, and you are the support that holds me up.
*You are the best brother!
* Your smile makes me glad.
* I am someone who needs support, and who always gives me support.
you are someone
Thank
you for everything.
Your favourite sister,
Kaushalya`
  },


  // LETTER 3 - TANUSH
  {
    from: "Tanush",
    text: `My brother gets angry very easily. Whenever I tease him, he gets frustrated, and that is the exact reason I love to tease him! 😜
However, he has everything—knowledge, discipline, and the ability to support and motivate people. He has completely changed our lives. If he hadn't been there for me, I would have never become a cricketer.   He helped me build my cricket skills and fitness. He would practice with me even after my coaching classes. Even when he got injured, he never told me to stop.
To me, he is the best brother forever and ever. He is like a God to me, though I will never tell him that directly. Whenever I am stressed, he simply asks what is wrong without ever forcing me to talk. He is just like Lord Rama, though his anger and frustration sometimes get the best of him. If I keep writing, this will easily turn into 5 or 6 pages, so I am ending it here.
— By Tanush not by Chat GPT or Gemini`
  },


  // LETTER 4 - DAD
  {
    from: "Dad",
    text: `ನನ್ನ ಮಗನ ಬಗ್ಗೆ ನನ್ನ ನಿರೀಕ್ಷೆಗಳೇ ಬೇರೆ, ಅವನ ಸಾಧನೆಯೇ ಬೇರೆ! ❤️

ನನ್ನ ಮಗ 7ನೇ ತರಗತಿಯವರೆಗೂ ಸ್ವಲ್ಪ ಪೆದ್ದು ಅಂದುಕೊಂಡಿದ್ದೆ. ಮುಂದೆ ಇಷ್ಟು ಬುದ್ಧಿವಂತನಾಗುತ್ತಾನೆ ಎಂದು ಕನಸಿನಲ್ಲಿಯೂ ಊಹಿಸಿರಲಿಲ್ಲ!

SSLC ಯಲ್ಲಿ 50–60% ಅಂಕಗಳನ್ನು ತೆಗೆದುಕೊಳ್ಳಬಹುದು ಎಂದುಕೊಂಡಿದ್ದೆ. ಆದರೆ ಅವನು ಬರೋಬ್ಬರಿ 88% ಅಂಕಗಳನ್ನು ಗಳಿಸಿ ನನ್ನ ನಿರೀಕ್ಷೆಯನ್ನೇ ಮೀರಿ ನಿಂತ!

ಫುಟ್ಬಾಲ್ ಆಡಬೇಕೆಂದರೆ ಮೊದಮೊದಲು ಅವನ ಆಟ ನೋಡಿದಾಗ ಅಯ್ಯೋ ದೇವರೇ, ಇವನ ಆಟವೇ ಹೀಗಾ ಅನಿಸುತ್ತಿತ್ತು. ಆದರೆ ಹೈಸ್ಕೂಲಿಗೆ ಬಂದ ಮೇಲೆ ಚೆನ್ನಾಗಿ ಆಡಲು ಶುರುಮಾಡಿದ.

ಇನ್ನು ಇವನು ಕುಳ್ಳಗೇ ಉಳಿಯುತ್ತಾನೆ ಎಂದುಕೊಂಡಿದ್ದೆ. ಆದರೆ ಈಗ ನಮ್ಮ ಅಜ್ಜನಂತೆಯೇ ಎತ್ತರವಾಗಿ ಬೆಳೆದು ನಿಂತಿದ್ದಾನೆ!

ನರ್ಸರಿಗೆ ಶಾಲೆಗೆ ಕಳುಹಿಸುವಾಗಲೂ ಕ್ಲಾಸಿನೊಳಗೆ ಹೋದ ತಕ್ಷಣ ಅಳುತ್ತಾ, ವಾಂತಿ ಮಾಡಿಕೊಳ್ಳುತ್ತಿದ್ದ. ಅದನ್ನೆಲ್ಲ ನೋಡಿದಾಗ ನನ್ನ ಮಗ ಮುಂದೆ ಹೇಗೆ ಕಲಿಯುತ್ತಾನೋ, ಏನು ಸಾಧಿಸುತ್ತಾನೋ ಎಂಬ ಆತಂಕವಿತ್ತು.

ಆದರೆ ಇಂದು ಅವನನ್ನು ನೋಡಿದಾಗ ಮನಸ್ಸಿಗೆ ತುಂಬಾ ಹೆಮ್ಮೆಯಾಗುತ್ತದೆ. ಅಂದು ನಾನು ಅಂದುಕೊಂಡಿದ್ದ ಪ್ರತಿಯೊಂದು ಊಹೆಯನ್ನೂ ಸುಳ್ಳು ಮಾಡಿ, ಇಂದು ನನ್ನ ಹೆಮ್ಮೆಯ ಮಗನಾಗಿ ಬೆಳೆದಿದ್ದಾನೆ.

ನಿಜ ಹೇಳಬೇಕೆಂದರೆ, ಮಗನ ಭವಿಷ್ಯವನ್ನು ಅಳೆಯುವಲ್ಲಿ ತಂದೆಯಾಗಿ ನನ್ನ ಲೆಕ್ಕಾಚಾರವೇ ತಪ್ಪಾಯಿತು. ಆದರೆ ಆ ತಪ್ಪು ಲೆಕ್ಕಾಚಾರವೇ ಇಂದು ನನಗೆ ಅತ್ಯಂತ ಸಂತೋಷವನ್ನು ಕೊಟ್ಟಿದೆ!

ನನ್ನ ಮಗನ ಸಾಧನೆ ಹೀಗೆಯೇ ಮುಂದುವರಿಯಲಿ. ಅವನ ಜೀವನದಲ್ಲಿ ಇನ್ನೂ ಎತ್ತರದ ಯಶಸ್ಸುಗಳು ಸಿಗಲಿ ಎಂಬುದೇ ನನ್ನ ಹಾರೈಕೆ. ❤️`
  },


  // LETTER 5 - KARTHIK
  {
    from: "Karthik",
    text: `" Soo
After thinking about it
 I have arrived at a decision
That I shall not give any letter, message to you for the surprise"`
  },


  // LETTER 6 - MANU
  {
    from: "Manu",
    text: `"Coming to kaam ki baat
Manu is not giving letter
 Soo plan accordingly. Message bhi nhi dega, yesa voo bola"`
  },


  // LETTER 7 - LAKSHITA
  {
    from: "Lakshita",
    text: `Happiest 19th birthdayy keshaaavvv❤️!! Never thought that something as small as Abhigyan could lead to such an amazing clg life..You have genuinely inspired me to be a better person and your creativity always ends up surprising me... all the random idea moments and competitions were trulyy goatedd!! I'm genuinely really grateful to have found a guy friend like you.. Youve always been so respectful and thoughtful in all the little things you do.. You are set for amazingggglyyy huge things in life.. hope you get more than what you deserve!! keep working hard and growing like this.. hope to see you at the top with all of us cheering loud for you✨️.. I wish you the veryyy bessttt for your future.. Happy birthdayyy once againn`
  },


  // LETTER 8 - AYUSH
  {
    from: "Ayush",
    text: `Keshav V Chikkmath,
I still remember the very first time we met during orientation. But back then, I had absolutely no idea how this journey would turn out.
It all started with some random talks, but somewhere along the way, we realised that our core directions were similar, yet different. Obviously, I stumbled a little and lost my way right at the very beginning (IYKYK).
During times when I felt everything was falling apart, I had just one reliable friend - You. I don't know what made you accept me after all that mess, but you did, and let me in with a hope for something better than what I was living with.
There's one thing I always wanted to say but never really got the guts to. Whether it was fear, embarrassment, ego, or whatever it was, I never said it.
Your presence just made things a lot easier and more memorable, when things could have very easily turned into misery, and all I wanted to do was quit. But somehow, knowingly or unknowingly, you gave me an opportunity to focus on myself, be who I am, and work towards a better life.
And the rest of the wonderful people I've met during our time together, in one way or another, were also connected back to you.
I absolutely have no idea how my college life would have been, or whether it would have even existed the way it does today, without your friendship.
A leverage I probably took full advantage of and got the best out of, making the most of what I could have.
and for that I would like to say,                                               Thanks a lottt!
Mrs. Creative, Charismatic, Conscientious and a Centred Man!!

And Happy 19th year anniversary on this planet, man!!
For you, the sky is the limit, sirr! Excited to see how you grow in life from today, as you turn 19.
And I hope to be a part of your life, not just as a friend, but as family, for the next 90 years.....`
  },


  // LETTER 9 - PRATIBHA
  {
    from: "Pratibha",
    text: `Happy Birthday, Keshav! ❤️
Honestly you are one of the most different and amazing people I have ever met!✨️ The way you are so serious about your career how ambitious and talented you are is genuinely inspiring.
Your editing skills your ideas your communication skills and the way you carry yourself on stage are just incredible✅️⭐️🫡You have so many talents and I really admire the person you are
I genuinely wish you achieve everything you dream of and reach the greatest heights in life🧿 I know you are going to do something really bigggg in lifeeeee📈✨️
Keep being the amazing person you are🙌All the very best for everything ahead✨️ You deserve the best! ❤️`
  },


  // LETTER 10 - VISHAKA
  {
    from: "Vishaka",
    text: `Happiest birthday dear Keshav!!💫
Hope you have an amazing day and a wonderful year ahead..
It's always been genuinely amazing sharing such a good bond with you. Here's to more crazy and bigger achievements ahead! Stay the same fun, genuine person you are. Wishing you lots of success n happiness ✨✨`
  },


  // LETTER 11 - NANDINI TEACHER
  {
    from: "Nandini Teacher",
    text: `Dear Keshav, wishing you the happiest birthday 🎂 to you. Proud to have you as my student. Whenever I remember your batch, the first name that comes to my mind is KESHAV.  I really had a great time with you all. I pray God to bless you abundantly ❤️ with success and happiness. Enjoy your day dear. 🎂 
🎂 🍰 🍰  🍫🍫🍫 

Nandini teacher`
  }

];


/* GALLERY FUNCTIONS */

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


/* CHAPTER FUNCTIONS */

function renderChapters(){
  document.querySelectorAll(".chapter-card").forEach(btn=>btn.addEventListener("click",()=>{
    const item=chapters[Number(btn.dataset.chapter)];
    document.getElementById("chapterLabel").textContent=`FILE ${String(Number(btn.dataset.chapter)+1).padStart(2,"0")} / CLASSIFIED`;
    document.getElementById("chapterTitle").textContent=item.title;
    document.getElementById("chapterBody").textContent=item.body;
    const modal=document.getElementById("chapterModal");modal.classList.add("open");modal.setAttribute("aria-hidden","false");
  }));
}


/* LETTER FUNCTIONS */

function renderLetters(){
  const grid=document.getElementById("envelopeGrid");
  if(!grid)return;

  grid.innerHTML=letters.map((_,i)=>`
    <button class="envelope-card" data-letter="${i}" aria-label="Open envelope ${i+1}">
      <span class="envelope-shape">
        <span class="envelope-number">LETTER ${String(i+1).padStart(2,"0")}</span>
        <span class="envelope-seal-small">K</span>
      </span>
    </button>
  `).join("");

  grid.querySelectorAll(".envelope-card").forEach(card=>{
    card.addEventListener("click",()=>openLetter(Number(card.dataset.letter)));
  });
}


function openLetter(i) {
  const item = letters[i];

  document.getElementById("letterFrom").textContent = item.from;
  document.getElementById("letterText").textContent = item.text;

  const modal = document.getElementById("letterModal");

  modal.classList.remove("revealed");
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      setTimeout(() => {
        modal.classList.add("revealed");
      }, 350);
    });
  });
}


/* MODAL CLOSE FUNCTION */

function closeModal(el) {
  el.classList.remove("revealed");
  el.classList.remove("open");
  el.setAttribute("aria-hidden", "true");
}


/* INITIALISE WEBSITE */

document.addEventListener("DOMContentLoaded",()=>{
  renderGallery();
  renderChapters();
  renderLetters();

  document.querySelectorAll(".modal-close").forEach(btn=>
    btn.addEventListener("click",()=>closeModal(btn.closest(".photo-modal,.chapter-modal,.letter-modal")))
  );

  document.querySelectorAll(".photo-modal,.chapter-modal,.letter-modal").forEach(modal=>
    modal.addEventListener("click",e=>{
      if(e.target===modal)closeModal(modal);
    })
  );

  document.addEventListener("keydown",e=>{
    if(e.key==="Escape"){
      document.querySelectorAll(".photo-modal.open,.chapter-modal.open,.letter-modal.open").forEach(closeModal);
    }
  });
});

