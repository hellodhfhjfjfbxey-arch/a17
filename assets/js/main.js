(function(){
var b=document.querySelector('.burger'),n=document.getElementById('nav');
if(b&&n)b.addEventListener('click',function(){var o=n.classList.toggle('open');b.setAttribute('aria-expanded',o?'true':'false');b.setAttribute('aria-label',o?'Close menu':'Open menu');});
function $(i){return document.getElementById(i);}
var f=$('cform');
if(f)f.addEventListener('submit',function(e){e.preventDefault();var fm=$('fm');
 if($('website').value)return;
 if(!f.checkValidity()){fm.hidden=false;fm.textContent='Please add your name, a valid email address and a message, and tick the agreement box.';return;}
 var body='Name: '+$('name').value+'\nEmail: '+$('email').value+'\nTopic: '+$('topic').value+'\n\n'+$('message').value;
 location.href='mailto:'+f.getAttribute('data-to')+'?subject='+encodeURIComponent(f.getAttribute('data-brand')+': '+$('topic').value)+'&body='+encodeURIComponent(body);
 fm.hidden=false;fm.textContent='Your email app should open with the message ready to send. If nothing happens, write to us directly at '+f.getAttribute('data-to')+'.';});
var c=$('cookie'),k=null;try{k=localStorage.getItem('ck_'+location.hostname);}catch(e){}
if(c&&!k)c.classList.add('show');
if(c)c.querySelectorAll('button').forEach(function(bt){bt.addEventListener('click',function(){try{localStorage.setItem('ck_'+location.hostname,bt.getAttribute('data-cookie'));}catch(e){}c.classList.remove('show');});});
var y=$('year');if(y)y.textContent=new Date().getFullYear();
})();
(function(){var d=document.documentElement,rm=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;
[].forEach.call(document.querySelectorAll('.stg'),function(g){[].forEach.call(g.children,function(c,i){c.style.transitionDelay=(i*110)+'ms';});});
function cnt(el){var to=parseFloat(el.getAttribute('data-count')),dec=(el.getAttribute('data-count').split('.')[1]||'').length,t0=null,dur=1600;if(rm){el.textContent=to.toFixed(dec);return;}function f(t){if(!t0)t0=t;var p=Math.min(1,(t-t0)/dur),e=1-Math.pow(1-p,3);el.textContent=(to*e).toFixed(dec);if(p<1)requestAnimationFrame(f);}requestAnimationFrame(f);}
var els=[].slice.call(document.querySelectorAll('.rv,[data-count]'));
if(rm||!('IntersectionObserver' in window)){els.forEach(function(e){e.classList.add('in');if(e.hasAttribute('data-count'))e.textContent=e.getAttribute('data-count');});}
else{var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){var ts=(e.target.__rv||[]).concat(els.indexOf(e.target)>-1?[e.target]:[]);ts.forEach(function(t){t.classList.add('in');if(t.hasAttribute('data-count'))cnt(t);});io.unobserve(e.target);}});},{rootMargin:'0px 0px -6% 0px',threshold:.01});
 els.forEach(function(e){var o=e;if(e.classList.contains('rv-c')||e.classList.contains('rv-w')){o=e.parentElement;}if(o!==e){(o.__rv=o.__rv||[]).push(e);}io.observe(o);});
 setTimeout(function(){els.forEach(function(e){var r=e.getBoundingClientRect();if(r.top<innerHeight&&r.bottom>0)e.classList.add('in');});},1200);}
var px=[].slice.call(document.querySelectorAll('[data-px]')),pr=document.getElementById('prog'),tk=false;
function upd(){var h=innerHeight;if(!rm)px.forEach(function(el){var r=el.parentElement.getBoundingClientRect();if(r.bottom<0||r.top>h)return;var s=+el.getAttribute('data-px');el.style.transform='translate3d(0,'+((r.top+r.height/2-h/2)*s).toFixed(1)+'px,0) scale(1.14)';});
 if(pr){var m=d.scrollHeight-h;pr.style.width=(m>0?scrollY/m*100:0)+'%';}d.classList.toggle('scd',scrollY>60);tk=false;}
addEventListener('scroll',function(){if(!tk){requestAnimationFrame(upd);tk=true;}},{passive:true});addEventListener('resize',upd);upd();
[].forEach.call(document.querySelectorAll('.hs'),function(s){var down=false,x0=0,s0=0,mv=0;s.addEventListener('pointerdown',function(e){if(e.pointerType!=='mouse')return;down=true;mv=0;x0=e.clientX;s0=s.scrollLeft;s.classList.add('drag');});addEventListener('pointerup',function(){down=false;s.classList.remove('drag');});s.addEventListener('pointermove',function(e){if(!down)return;mv=Math.abs(e.clientX-x0);s.scrollLeft=s0-(e.clientX-x0);});s.addEventListener('click',function(e){if(mv>6){e.preventDefault();e.stopPropagation();}},true);});
})();
(function(){function $(i){return document.getElementById(i);}
var tp=[].slice.call(document.querySelectorAll('input[name=tp]')),bt=[].slice.call(document.querySelectorAll('input[name=bt]'));
if(tp.length){function v(a){var x=0;a.forEach(function(e){if(e.checked)x=+e.value;});return x;}
 var T=[['M84 74h72l10 66H74z',140],['M84 74h72l8 48H76z',122],['M70 74h100l22 120H48z',194],['M84 74h72l12 140H72z',214]];
 var B=[[function(y){return 'M74 '+y+'h92l18 '+(400-y)+'h-56l-8-'+(300-y)+'l-8 '+(300-y)+'H56z';}],[function(y){return 'M78 '+y+'h84l-6 '+(400-y)+'h-28l-8-'+(260-y)+'l-8 '+(260-y)+'H84z';}],[function(y){return 'M76 '+y+'h88l26 '+(330-y)+'H50z';}]];
 var V={'0,0':['Balanced','A tucked top with wide trousers: the waist sits high, the legs look long.'],'0,1':['Classic and clean','Tucked and slim: simple, neat and very versatile.'],'0,2':['Elegant','A tucked top and a midi skirt mark the waist and flow below it.'],
 '1,0':['Long and lean','A cropped top shows the high waist of wide trousers. The leg line is at its longest.'],'1,1':['Sporty','Cropped and slim reads light and athletic.'],'1,2':['Feminine','A cropped top over a midi skirt: a defined waist and plenty of movement.'],
 '2,0':['Volume everywhere','Oversized on wide: relaxed and fashion-forward. Keep one colour so it looks deliberate.'],'2,1':['The classic balance','Volume on top, slim below. The most reliable oversized outfit.'],'2,2':['Soft and fluid','Oversized over a midi skirt: add a belt or a half-tuck to find the waist.'],
 '3,0':['Column','Long line over wide trousers makes a tall column. Best in one tone.'],'3,1':['Lean and long','A long top over slim trousers: a simple, elongated line.'],'3,2':['Layered','Long line over a midi creates layers; let the skirt show below the hem.']};
 function lab(){var t=v(tp),b=v(bt),k=t+','+b;$('lb-t').setAttribute('d',T[t][0]);var y=t===1?122:(t===3?150:140);$('lb-b').setAttribute('d',B[b][0](y));$('lab-o').innerHTML='<b>'+V[k][0]+'</b><p>'+V[k][1]+'</p>';}
 tp.concat(bt).forEach(function(e){e.addEventListener('change',lab);});lab();}
var cw=$('cw');if(cw){var N=12,base=6,sc=[].slice.call(document.querySelectorAll('input[name=sc]'));var NM=['red','red-orange','orange','yellow-orange','yellow','yellow-green','green','teal','blue','blue-violet','violet','magenta'];
 function col(i,l){return 'hsl('+(i*30)+',62%,'+(l||52)+'%)';}
 function arc(i,r1,r2){var a0=(i*30-105)*Math.PI/180,a1=(i*30-75)*Math.PI/180,c=160;function p(r,a){return (c+r*Math.cos(a)).toFixed(1)+' '+(c+r*Math.sin(a)).toFixed(1);}return 'M'+p(r1,a0)+' L'+p(r2,a0)+' A'+r2+' '+r2+' 0 0 1 '+p(r2,a1)+' L'+p(r1,a1)+' A'+r1+' '+r1+' 0 0 0 '+p(r1,a0)+'Z';}
 function draw(){var s='c';sc.forEach(function(e){if(e.checked)s=e.value;});var pr=s==='c'?[base,(base+6)%N,(base+5)%N]:s==='a'?[base,(base+1)%N,(base+11)%N]:[base,(base+4)%N,(base+8)%N];var o='';
  for(var i=0;i<N;i++){var on=pr.indexOf(i)>-1;o+='<path d="'+arc(i,on?62:70,on?156:146)+'" fill="'+col(i)+'" opacity="'+(on?1:.35)+'" stroke="#E4E0D7" stroke-width="3" data-i="'+i+'" tabindex="0" role="button" aria-label="'+NM[i]+'"/>';}
  o+='<circle cx="160" cy="160" r="54" fill="#F3F1EC"/><text x="160" y="166" text-anchor="middle" font-family="Besley,serif" font-size="14">'+NM[base]+'</text>';cw.innerHTML=o;
  var lab=['Main, about 60%','Second, about 30%','Accent, about 10%'];$('cw-sw').innerHTML=pr.map(function(i,n){return '<div style="background:'+col(i,n===0?52:(n===1?72:45))+'">'+lab[n]+': '+NM[i]+'</div>';}).join('');
  $('cw-o').textContent=s==='c'?'Opposites make each other glow. Keep the partner small.':s==='a'?'Neighbours look calm and rich together, like a sunset.':'Three evenly spaced colours: bold, so keep one in charge.';
  [].forEach.call(cw.querySelectorAll('path'),function(p){function f(){base=+p.getAttribute('data-i');draw();}p.addEventListener('click',f);p.addEventListener('keydown',function(e){if(e.key==='Enter'||e.key===' '){e.preventDefault();f();}});});}
 sc.forEach(function(e){e.addEventListener('change',draw);});draw();}
var m=$('mast');if(m&&!(window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches)){addEventListener('scroll',function(){var y=Math.min(1,scrollY/500);m.style.fontVariationSettings="'YEAR' "+Math.round(1979+y*69);},{passive:true});}
})();
