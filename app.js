const $=id=>document.getElementById(id),f=n=>n.toLocaleString(undefined,{maximumFractionDigits:2});
function bmi(){const w=+$('bw').value,h=+$('bh').value/100;if(!(w>0&&h>0))return $('bmir').textContent='Enter a valid weight and height.';
  const b=w/(h*h);const c=b<18.5?'Underweight':b<25?'Healthy weight':b<30?'Overweight':'Obese';
  const lo=18.5*h*h,hi=24.9*h*h;$('bmir').innerHTML='BMI: '+b.toFixed(1)+' ('+c+')<br>Healthy weight for your height: '+lo.toFixed(1)+' – '+hi.toFixed(1)+' kg'}
function age(){const b=$('ab').value;if(!b)return $('ager').textContent='Enter your date of birth.';
  const s=new Date(b),e=$('at').value?new Date($('at').value):new Date();
  if(e<s)return $('ager').textContent='The second date must be after the date of birth.';
  let y=e.getFullYear()-s.getFullYear(),m=e.getMonth()-s.getMonth(),d=e.getDate()-s.getDate();
  if(d<0){m--;d+=new Date(e.getFullYear(),e.getMonth(),0).getDate()}
  if(m<0){y--;m+=12}
  const days=Math.floor((e-s)/864e5);
  $('ager').innerHTML='Age: '+y+' years, '+m+' months, '+d+' days<br>Total days lived: '+f(days)}
function pc(t){const g=i=>$('p'+i).value,n=i=>+g(i);
  if(t===1){if(g(1)===''||g(2)==='')return $('pr1').textContent='Fill in both fields.';$('pr1').textContent=n(1)+'% of '+n(2)+' = '+f(n(1)*n(2)/100)}
  if(t===2){if(g(3)===''||!n(4))return $('pr2').textContent='Fill in both fields (Y cannot be 0).';$('pr2').textContent=n(3)+' is '+f(n(3)/n(4)*100)+'% of '+n(4)}
  if(t===3){if(g(5)===''||g(6)===''||!n(5))return $('pr3').textContent='Fill in both fields (old value cannot be 0).';const c=(n(6)-n(5))/Math.abs(n(5))*100;$('pr3').textContent=(c>=0?'Increase of ':'Decrease of ')+f(Math.abs(c))+'%'}}
function emi(){const P=+$('la').value,R=+$('lr').value,T=+$('lt').value;if(!(P>0&&T>0&&R>=0))return $('emir').textContent='Enter a valid amount, rate and tenure.';
  const n=Math.round(T*12),r=R/1200;const E=r===0?P/n:P*r*Math.pow(1+r,n)/(Math.pow(1+r,n)-1);
  $('emir').innerHTML='Monthly EMI: '+f(E)+'<br>Total interest: '+f(E*n-P)+'<br>Total repayment: '+f(E*n)}

const AD_CLIENT='ca-pub-4323979893422483';
/* Paste your AdSense ad unit slot IDs (numbers) between the quotes. Empty = no ad shown. */
const AD_SLOTS={mid:'',end:''};
document.querySelectorAll('.adwrap').forEach(w=>{const s=AD_SLOTS[w.dataset.slot];if(!s){w.remove();return}
w.innerHTML='<small>Advertisement</small><ins class="adsbygoogle" style="display:block" data-ad-client="'+AD_CLIENT+'" data-ad-slot="'+s+'" data-ad-format="auto" data-full-width-responsive="true"></ins>';
try{(window.adsbygoogle=window.adsbygoogle||[]).push({})}catch(e){}});
