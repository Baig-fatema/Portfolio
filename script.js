var typed = new Typed('#element', {
    strings: ['Web developer', 'Team worker', 'Fast learner'],
    typeSpeed: 50,
    backSpeed: 25,         // Controls the speed of the backspace effect
    loop: true,            // Makes the animation loop infinitely
    loopCount: Infinity,
  });
  var typed = new Typed('#element1', {
    strings: ['About me', 'About me', 'About me'],
    typeSpeed: 100,
    backSpeed: 75,           // Controls the speed of the backspace effect
    loop: true,            // Makes the animation loop infinitely
    loopCount: Infinity,
  });
  var typed = new Typed('#element2', {
    strings: ['Work Experience'],
    typeSpeed: 100,
    backSpeed: 75,           // Controls the speed of the backspace effect
    loop: true,            // Makes the animation loop infinitely
    loopCount: Infinity,
  });
  var typed = new Typed('#element3', {
    strings: ['Skills'],
    typeSpeed: 100,
    backSpeed: 75,         // Controls the speed of the backspace effect
    loop: true,            // Makes the animation loop infinitely
    loopCount: Infinity,
  });
  var typed = new Typed('#element4', {
    strings: ['Projects'],
    typeSpeed: 100,
    backSpeed: 75,         // Controls the speed of the backspace effect
    loop: true,            // Makes the animation loop infinitely
    loopCount: Infinity,
  });
  var typed = new Typed('#element5', {
    strings: ['Contact Me'],
    typeSpeed: 100,
    backSpeed: 75,         // Controls the speed of the backspace effect
    loop: true,            // Makes the animation loop infinitely
    loopCount: Infinity,
  });

  function animateProgress() {
    const skills = [
      { selector: '.java-bar', value: 80 },
      { selector: '.python-bar', value: 75 },
      { selector: '.github-bar', value: 70 },
      { selector: '.dsa-bar', value: 50 },
      { selector: '.mysql-bar', value: 70 },
      { selector: '.html-bar', value: 90 },
      { selector: '.css-bar', value: 85 },
      { selector: '.js-bar', value: 70 }
    ];

    skills.forEach(skill => {
      const bar = document.querySelector(skill.selector);
      bar.style.width = skill.value + '%';
      bar.innerText = skill.value + '%';

      setTimeout(() => {
        bar.style.width = '0%';
        bar.innerText = '0%';
      }, 2000);
    });
  }

  animateProgress();
  setInterval(animateProgress, 4000);

  function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}