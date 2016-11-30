var animDataA = {
        container: document.getElementById('a'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'letters/a.json'
    };

var anim = bodymovin.loadAnimation(animDataA);

var animDataC = {
        container: document.getElementById('c'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'letters/c.json'
      };

var anim = bodymovin.loadAnimation(animDataC);
