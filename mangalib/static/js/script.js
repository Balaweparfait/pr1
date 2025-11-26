/*const slider = document.getElementById("slider");
const images=[
    '../images/1.jpeg',
    '../images/image2.jpeg',
    '../images/images1.jpeg',
    '../images/images.jpeg',
    '../images/monback.jpeg'
];
let index = 0;
function changeBackground() {
    slider.style.backgroundImage='url(${images[index]})';
    index = (index + 1)%
    images.length;
}
changeBackground();
setInterval(changeBackground, 5000);
*/

const texts = ["Bienvenue dans notre salon de beauté", "Plus besoins de se deplacer", "Découvrez nos services", "Prenez soin de vous"];
    const typingSpeed = 100; // Vitesse de frappe (ms)
    const delayBetweenTexts = 2000; // Délai entre les phrases (ms)
    let textIndex = 0;
    let charIndex = 0;

    function typeText() {
        const currentText = texts[textIndex];
        const textElement = document.getElementById("text");

        if (charIndex < currentText.length) {
            textElement.textContent += currentText[charIndex];
            charIndex++;
            setTimeout(typeText, typingSpeed);
        } else {
            setTimeout(() => {
                textElement.textContent = "";
                charIndex = 0;
                textIndex = (textIndex + 1) % texts.length;
                typeText();
            }, delayBetweenTexts);
        }
    }

    // Démarrer l'effet d'écriture
    typeText();


// pourquois nous choisir

/*
  Script: carousel simple qui :
  - fait défiler automatiquement les .quote à interval configuré (data-interval)
  - crée les points indicateurs
  - pause au survol et bouton pause/reprendre
  - clic sur point -> va à l'item
*/

class SimpleCarousel {
    constructor(rootSelector){
      this.root = document.querySelector(rootSelector);
      if(!this.root) return;
      this.wrap = this.root;
      this.items = Array.from(this.wrap.querySelectorAll('.quote'));
      this.dotsContainer = this.wrap.parentElement.querySelector('.dots');
      this.interval = parseInt(this.wrap.dataset.interval) || 4000;
      this.current = 0;
      this.timer = null;
      this.paused = false;
  
      this._createDots();
      this._bindEvents();
      this.start();
    }
  
    _createDots(){
      if(!this.dotsContainer) return;
      this.dotsContainer.innerHTML = '';
      this.items.forEach((it, idx)=>{
        const d = document.createElement('button');
        d.className = 'dot' + (idx===0 ? ' active' : '');
        d.setAttribute('aria-label', 'Aller au témoignage ' + (idx+1));
        d.setAttribute('data-index', idx);
        d.type = 'button';
        d.addEventListener('click', ()=> this.goTo(idx));
        this.dotsContainer.appendChild(d);
      });
      this.dots = Array.from(this.dotsContainer.children);
    }
  
    _bindEvents(){
      // pause on hover/focus
      this.wrap.addEventListener('mouseenter', ()=> this.pause());
      this.wrap.addEventListener('mouseleave', ()=> this.resume());
      this.wrap.addEventListener('focusin', ()=> this.pause());
      this.wrap.addEventListener('focusout', ()=> this.resume());
  
      // keyboard navigation (gauche/droite)
      this.wrap.addEventListener('keydown', (e)=>{
        if(e.key === 'ArrowRight') this.next();
        if(e.key === 'ArrowLeft') this.prev();
      });
    }
  
    start(){
      this.stop();
      this.timer = setInterval(()=> {
        if(!this.paused) this.next();
      }, this.interval);
    }
  
    stop(){
      if(this.timer) { clearInterval(this.timer); this.timer = null; }
    }
  
    pause(){
      this.paused = true;
    }
    resume(){
      this.paused = false;
    }
  
    updateUI(){
      this.items.forEach((it, i)=> it.classList.toggle('active', i === this.current));
      if(this.dots) this.dots.forEach((d,i)=> d.classList.toggle('active', i === this.current));
    }
  
    next(){
      this.current = (this.current + 1) % this.items.length;
      this.updateUI();
    }
    prev(){
      this.current = (this.current - 1 + this.items.length) % this.items.length;
      this.updateUI();
    }
    goTo(n){
      this.current = n % this.items.length;
      this.updateUI();
    }
  }
  
  /* Initialise les carousels gauche et droite */
  const leftCarousel = new SimpleCarousel('#leftQuotes');
  const rightCarousel = new SimpleCarousel('#rightQuotes');
  
//   /* Bouton global pause / reprise (contrôle visuel) */
//   const toggle = document.getElementById('toggleAuto');
//   let globalPaused = false;
//   toggle.addEventListener('click', ()=>{
//     globalPaused = !globalPaused;
//     toggle.textContent = globalPaused ? 'Reprendre' : 'Pause';
//     toggle.setAttribute('aria-pressed', String(globalPaused));
//     // appliquer aux deux carousels
//     [leftCarousel, rightCarousel].forEach(c=>{
//       if(!c) return;
//       c.paused = globalPaused;
//     });
//   });
  
  /* Optionnel : arrêter l'auto-rotation quand onglet perdu pour économiser CPU */
  document.addEventListener('visibilitychange', ()=>{
    if(document.hidden){
      [leftCarousel, rightCarousel].forEach(c => c && c.pause());
    } else {
      [leftCarousel, rightCarousel].forEach(c => c && c.resume());
    }
  });

  // Sélection des éléments
const chatbotButton = document.querySelector('.chatbot-button');
const chatbotContent = document.querySelector('.chatbot-content');

// Afficher/Masquer le contenu du chatbot au survol
chatbotButton.addEventListener('mouseenter', () => {
    chatbotContent.style.display = 'flex';
});

chatbotContent.addEventListener('mouseleave', () => {
    chatbotContent.style.display = 'none';
});

// Sélection de la section "Pourquoi Nous"
const pourquoiNousSection = document.querySelector('.pourquoiNous');

// Fonction pour vérifier si l'élément est visible dans le viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Fonction pour ajouter la classe "visible" lorsque la section entre dans le viewport
function handleScroll() {
    if (isInViewport(pourquoiNousSection)) {
        pourquoiNousSection.classList.add('visible');
        window.removeEventListener('scroll', handleScroll); // Supprime l'écouteur après l'animation
    }
}

// Ajouter un écouteur d'événement pour le défilement
window.addEventListener('scroll', handleScroll);