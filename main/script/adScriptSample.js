var mybotstyleSheet='.ub-sticky-ad-container{background: url("https://cdn.jsdelivr.net/gh/unib0ts/unibots@latest/IrctcWidget/irctc_catering.jpg");background-size: 300px 250px;cursor: pointer;pointer-events: all;position: relative;height: 250px;width: 300px;}';

var css=document.createElement('style');
css.type='text/css';
css.appendChild(document.createTextNode(mybotstyleSheet));
document.getElementsByTagName('head')[0].appendChild(css);

z1= document.createElement('div');
z1.id = 'ub-sticky-ad-container';
z1.className = 'ub-sticky-ad-container';
x1 = document.querySelector('body');
x1.appendChild(z1);
