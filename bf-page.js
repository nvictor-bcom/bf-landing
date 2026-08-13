/* ═══════════════════════════════════════════════════════════════════════
   BRIGHTER FUTURES — landing page renderer
   Served from CDN; loaded into Squarespace by loader-snippet.html.
   Injects the full page into <div id="bf-app"> and wires up the EN/ES
   toggle, sticky nav, and scroll animations.

   Optional globals (set BEFORE this script loads):
     window.BF_SHOW_NAV = false;          // drop the built-in sticky nav
     window.BF_IMAGES   = { hero: "…" };  // override any image URL;
                                          // unset keys fall back to the
                                          // assets/ folder next to this file
   ═══════════════════════════════════════════════════════════════════════ */
(function(){
  var script=document.currentScript;
  /* Assets live next to this file, so image URLs are derived from the
     script's own src — no per-host configuration needed. */
  var base=script&&script.src?script.src.replace(/[^\/]*$/,''):'';
  var DEFAULTS={
    logo:      base+'assets/bf-color.svg',
    logoWhite: base+'assets/bf-white.svg',
    texture:   base+'assets/paper-texture-900.jpg',
    hero:      base+'assets/hero-banner.webp',
    s1:        base+'assets/standard-01.webp',
    s2:        base+'assets/standard-02.webp',
    s3:        base+'assets/item-03-image.jpg'
  };
  var IMG={}, overrides=window.BF_IMAGES||{};
  Object.keys(DEFAULTS).forEach(function(k){IMG[k]=overrides[k]||DEFAULTS[k];});

  var app=document.getElementById('bf-app');
  if(!app&&script){app=document.createElement('div');app.id='bf-app';
    script.parentNode.insertBefore(app,script);}
  if(!app||app.dataset.bfReady)return; app.dataset.bfReady='1';

  app.innerHTML=[
'  <header class="bf-nav" data-bf-nav>',
'    <a href="#bf-top" data-bf-goto="bf-top"><img data-bf-src="logo" alt="Brighter Futures"></a>',
'    <nav class="bf-navlinks">',
'      <a class="bf-navlink" href="#bf-top" data-bf-goto="bf-top" data-bf-i18n="navStatement">Statement</a>',
'      <a class="bf-navlink" href="#bf-standard" data-bf-goto="bf-standard" data-bf-i18n="navStandard">Our Standard</a>',
'      <a class="bf-navlink" href="#bf-footer" data-bf-goto="bf-footer" data-bf-i18n="navContact">Contact</a>',
'      <div class="bf-lang">',
'        <button type="button" data-bf-lang="en">EN</button>',
'        <button type="button" data-bf-lang="es">ES</button>',
'      </div>',
'    </nav>',
'  </header>',
'',
'  <section class="bf-hero" id="bf-top">',
'    <div class="bf-lang">',
'      <button type="button" data-bf-lang="en">EN</button>',
'      <button type="button" data-bf-lang="es">ES</button>',
'    </div>',
'    <img class="bf-herologo" data-bf-src="logo" data-bf-rise alt="Brighter Futures">',
'    <p class="bf-eyebrow" data-bf-rise data-bf-i18n="eyebrow">Chicago School Board \u00b7 November 2026</p>',
'    <h1 data-bf-rise data-bf-i18n="h1">Brighter Futures Starts Here</h1>',
'    <p class="bf-herosub" data-bf-rise data-bf-i18n="heroSub">A brighter future for Chicago schools starts with leadership that puts students and families first.</p>',
'  </section>',
'',
'  <section class="bf-photo">',
'    <img data-bf-src="hero" alt="Chicago families outside a neighborhood school">',
'    <div class="bf-photocard">',
'      <p data-bf-i18n="bannerFamilies">Chicago families deserve school board leadership focused on students, communities, and real progress.</p>',
'    </div>',
'  </section>',
'',
'  <section class="bf-navybar">',
'    <p data-bf-i18n="bannerNavy">Brighter Futures supports candidates who meet that standard.</p>',
'  </section>',
'',
'  <section class="bf-standard" id="bf-standard">',
'    <div class="bf-wrap">',
'    <svg class="bf-arcs" data-bf-draw="1" viewBox="0 0 230.442 46.637" aria-hidden="true">',
'      <path d="M3.658,39.321c74.376-47.552,148.751-47.552,223.127,0" fill="none" stroke="#fdb704" stroke-linecap="round" stroke-width="7.316"></path>',
'      <path d="M21.947,42.979c62.183-34.14,124.366-34.14,186.548,0" fill="none" stroke="#fb7c00" stroke-linecap="round" stroke-width="5.487"></path>',
'      <path d="M43.894,44.808c47.552-19.508,95.103-19.508,142.655,0" fill="none" stroke="#016edc" stroke-linecap="round" stroke-width="3.658"></path>',
'    </svg>',
'      <h2 data-bf-reveal data-bf-i18n="standardTitle">Our Standard</h2>',
'',
'      <div class="bf-row" data-bf-reveal>',
'        <div class="bf-frame"><img data-bf-src="s1" alt="Students in a classroom"></div>',
'        <div class="bf-rowtext">',
'          <span class="bf-num">01</span>',
'          <h3 data-bf-i18n="s1t">Students First</h3>',
'          <p data-bf-i18n="s1b">Every dollar and every decision measured against one question: does this help our kids learn?</p>',
'        </div>',
'      </div>',
'',
'      <div class="bf-row" data-bf-reveal>',
'        <div class="bf-frame"><img data-bf-src="s2" alt="Parents at a school meeting"></div>',
'        <div class="bf-rowtext">',
'          <span class="bf-num">02</span>',
'          <h3 data-bf-i18n="s2t">Open Books</h3>',
'          <p data-bf-i18n="s2b">Parents should be able to see how their school\u2019s money is spent without the red tape.</p>',
'        </div>',
'      </div>',
'',
'      <div class="bf-row" data-bf-reveal>',
'        <div class="bf-frame"><img data-bf-src="s3" alt="Neighborhood school"></div>',
'        <div class="bf-rowtext">',
'          <span class="bf-num">03</span>',
'          <h3 data-bf-i18n="s3t">Schools That Work</h3>',
'          <p data-bf-i18n="s3b">A good school within walking distance of every family.</p>',
'        </div>',
'      </div>',
'      <div class="bf-rowend"></div>',
'    </div>',
'  </section>',
'',
'  <section class="bf-highlight">',
'    <p data-bf-i18n="highlight">Students first. Not politics.</p>',
'    <p class="bf-highlightsub" data-bf-i18n="highlightSub1"></p>',
'    <p class="bf-highlightsub" data-bf-i18n="highlightSub2">Let\u2019s put our students BEFORE politics.</p>',
'  </section>',
'',
'  <footer class="bf-footer" id="bf-footer">',
'    <div class="bf-footertop">',
'      <img data-bf-src="logoWhite" alt="Brighter Futures">',
'      <a class="bf-footerlink" href="https://brighterfutureschi.org">brighterfutureschi.org</a>',
'    </div>',
'    <div class="bf-fine">',
'      <p data-bf-i18n="disclaimer">Paid for by Brighter Futures. Not authorized by any candidate or candidate\u2019s committee.</p>',
'    </div>',
'  </footer>'
  ].join('\n');

  var ES={
  navStatement:'Declaraci\u00f3n', navStandard:'Nuestro Est\u00e1ndar', navContact:'Contacto',
  eyebrow:'Junta de Educaci\u00f3n de Chicago \u00b7 Noviembre 2026',
  h1:'Nuestros Mejores Futuros empiezan aqu\u00ed',
  heroSub:'Un mejor futuro para las escuelas de Chicago comienza con liderazgo que prioriza a nuestros estudiantes y familias.',
  bannerFamilies:'Las familias de Chicago merecen liderazgo en la junta de educaci\u00f3n que est\u00e9 enfocado en nuestros estudiantes, comunidades, y progreso real.',
  bannerNavy:'\u00c9l comit\u00e9 para Mejores Futuros apoya a aquellos candidatos que cumplan con ese est\u00e1ndar.',
  standardTitle:'Nuestro Est\u00e1ndar',
    s1t: 'Nuestros estudiantes son lo primero', s1b:'Cada d\u00f3lar y decisi\u00f3n que tomamos debe tener en mente una pregunta: ¿esto ayuda a que nuestros estudiantes aprendan?',
    s2t: 'Rinden cuentas', s2b:'Los padres y madres de familia deben de poder ver cómo se gasta el dinero en nuestras escuelas sin tanta burocracia.',
    s3t:'Escuelas con buen rendimiento académico ', s3b:'Luchamos para tener una buena escuela a poca distancia de cada familia.',
  highlight:'Los estudiantes primero. No la politica.',
  highlightSub1:'',
  highlightSub2:'Pongamos a nuestros estudiantes ANTES de la pol\u00edtica.',
  disclaimer:'Pagado por Brighter Futures. No autorizado por ning\u00fan candidato ni por el comit\u00e9 de ning\u00fan candidato.'
}, EN={};
  if(window.BF_SHOW_NAV===false){var n0=app.querySelector('[data-bf-nav]'); if(n0)n0.remove();}
  if(IMG.texture)app.style.setProperty('--bf-texture',"url('"+IMG.texture+"')");
  app.querySelectorAll('[data-bf-src]').forEach(function(el){
    var u=IMG[el.getAttribute('data-bf-src')]; if(u)el.src=u; else el.style.visibility='hidden';
  });
  app.querySelectorAll('[data-bf-i18n]').forEach(function(el){EN[el.getAttribute('data-bf-i18n')]=el.textContent;});

  function setLang(l,save){
    app.querySelectorAll('[data-bf-i18n]').forEach(function(el){
      var k=el.getAttribute('data-bf-i18n'); el.textContent=(l==='es'?(ES[k]||EN[k]):EN[k]);
    });
    app.querySelectorAll('[data-bf-lang]').forEach(function(b){
      b.classList.toggle('bf-langon',b.getAttribute('data-bf-lang')===l);
    });
    app.setAttribute('lang',l);
    if(save){try{localStorage.setItem('bf-lang',l);}catch(e){}}
  }
  app.querySelectorAll('[data-bf-lang]').forEach(function(b){
    b.addEventListener('click',function(){setLang(b.getAttribute('data-bf-lang'),true);});
  });
  var saved='en'; try{saved=localStorage.getItem('bf-lang')||'en';}catch(e){}
  setLang(saved,false);

  app.querySelectorAll('[data-bf-goto]').forEach(function(a){
    a.addEventListener('click',function(e){
      e.preventDefault();
      var el=document.getElementById(a.getAttribute('data-bf-goto')); if(!el)return;
      window.scrollTo({top:Math.max(0,el.getBoundingClientRect().top+window.pageYOffset-74),behavior:'smooth'});
    });
  });

  var nav=app.querySelector('[data-bf-nav]'), links=app.querySelectorAll('.bf-navlink');
  function onScroll(){
    if(nav)nav.classList.toggle('bf-on',window.pageYOffset>window.innerHeight*0.55);
    var ids=['bf-top','bf-standard','bf-footer'],active=0;
    ids.forEach(function(id,i){var el=document.getElementById(id);
      if(el&&el.getBoundingClientRect().top<=140)active=i;});
    links.forEach(function(l,i){l.classList.toggle('bf-active',i===active);});
  }
  window.addEventListener('scroll',onScroll,{passive:true}); onScroll();

  var reduce=window.matchMedia&&window.matchMedia('(prefers-reduced-motion:reduce)').matches;
  var rise=app.querySelectorAll('[data-bf-rise]');
  if(reduce){rise.forEach(function(el){el.classList.add('bf-in');});}
  else{rise.forEach(function(el,i){setTimeout(function(){el.classList.add('bf-in');},120+i*160);});}

  if('IntersectionObserver'in window&&!reduce){
    var io=new IntersectionObserver(function(es){es.forEach(function(en){
      if(en.isIntersecting){en.target.classList.add('bf-in');io.unobserve(en.target);}});},
      {rootMargin:'0px 0px -12% 0px'});
    app.querySelectorAll('[data-bf-reveal]').forEach(function(el){io.observe(el);});
    setTimeout(function(){app.querySelectorAll('[data-bf-reveal]').forEach(function(el){el.classList.add('bf-in');});},3000);
  } else {app.querySelectorAll('[data-bf-reveal]').forEach(function(el){el.classList.add('bf-in');});}

  var arcs=app.querySelectorAll('[data-bf-draw]');
  arcs.forEach(function(svg){
    var ps=svg.querySelectorAll('path');
    ps.forEach(function(p){var L=p.getTotalLength();p.style.strokeDasharray=L;p.style.strokeDashoffset=reduce?0:L;});
    if(reduce)return;
    if(!('IntersectionObserver'in window)){ps.forEach(function(p){p.style.strokeDashoffset=0;});return;}
    var ao=new IntersectionObserver(function(es){es.forEach(function(en){
      if(!en.isIntersecting)return;
      ps.forEach(function(p,i){p.style.transition='stroke-dashoffset 1s cubic-bezier(.3,.8,.3,1) '+(i*0.13)+'s';p.style.strokeDashoffset=0;});
      ao.unobserve(en.target);});},{rootMargin:'0px 0px -15% 0px'});
    ao.observe(svg);
  });
})();
