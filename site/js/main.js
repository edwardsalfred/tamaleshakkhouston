/* The Tamale Shakk Houston | nav + reveal + parallax */
(function(){
  'use strict';

  // year
  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  // nav scrolled state
  var nav = document.getElementById('nav');
  var lastY = 0;
  function onScroll(){
    var sy = window.scrollY || window.pageYOffset;
    if (sy > 24) nav.classList.add('scrolled'); else nav.classList.remove('scrolled');
    lastY = sy;
  }
  window.addEventListener('scroll', onScroll, {passive:true});
  onScroll();

  // mobile drawer
  var toggle = document.getElementById('navToggle');
  var links = document.getElementById('navLinks');
  function setOpen(open){
    nav.classList.toggle('open', open);
    document.body.classList.toggle('nav-open', open);
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  }
  toggle.addEventListener('click', function(){
    setOpen(!nav.classList.contains('open'));
  });
  links.querySelectorAll('a').forEach(function(a){
    a.addEventListener('click', function(){ setOpen(false); });
  });
  document.addEventListener('keydown', function(e){
    if (e.key === 'Escape' && nav.classList.contains('open')) setOpen(false);
  });
  window.addEventListener('resize', function(){
    if (window.innerWidth > 960 && nav.classList.contains('open')) setOpen(false);
  });

  // reveal — intersection observer + timeout fallback + final force-reveal
  var reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window){
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(e){
        if (e.isIntersecting){
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    },{threshold:0,rootMargin:'0px 0px 50px 0px'});
    reveals.forEach(function(el){ io.observe(el); });

    // 600ms catch-up: anything within 2x viewport
    setTimeout(function(){
      var vh = window.innerHeight;
      reveals.forEach(function(el){
        var r = el.getBoundingClientRect();
        if (r.top < vh*2) el.classList.add('in');
      });
    }, 600);

    // final 3s force-reveal so nothing stays opacity:0
    setTimeout(function(){
      reveals.forEach(function(el){ el.classList.add('in'); });
    }, 3000);
  } else {
    reveals.forEach(function(el){ el.classList.add('in'); });
  }

  // GSAP parallax on hero (if loaded, not reduced-motion)
  var rm = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  function initGsap(){
    if (rm || !window.gsap || !window.ScrollTrigger) return;
    gsap.registerPlugin(ScrollTrigger);
    var heroImg = document.querySelector('.hero-bg img');
    if (heroImg){
      gsap.to(heroImg, {
        yPercent: 12,
        ease: 'none',
        scrollTrigger: {
          trigger: '.hero',
          start: 'top top',
          end: 'bottom top',
          scrub: true
        }
      });
    }
  }
  // GSAP loads via defer; wait until ready
  if (document.readyState === 'complete') initGsap();
  else window.addEventListener('load', initGsap);

})();
