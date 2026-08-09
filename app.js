document.documentElement.classList.remove('no-js');

const menuButton=document.querySelector('.menu-toggle');
const navigation=document.querySelector('.global-nav');
if(menuButton&&navigation){
  menuButton.addEventListener('click',()=>{
    const open=navigation.classList.toggle('open');
    menuButton.setAttribute('aria-expanded',String(open));
    document.body.classList.toggle('menu-open',open);
  });
  navigation.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{
    navigation.classList.remove('open');
    menuButton.setAttribute('aria-expanded','false');
    document.body.classList.remove('menu-open');
  }));
}

const reduceMotion=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const reveals=document.querySelectorAll('.reveal');
if(reduceMotion||!('IntersectionObserver' in window)){
  reveals.forEach(item=>item.classList.add('is-visible'));
}else{
  const revealObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{
    if(entry.isIntersecting){entry.target.classList.add('is-visible');revealObserver.unobserve(entry.target);}
  }),{threshold:.12});
  reveals.forEach(item=>revealObserver.observe(item));
}

const tabLinks=[...document.querySelectorAll('.audience-tabs a')];
const tabTargets=tabLinks.map(link=>document.querySelector(link.getAttribute('href'))).filter(Boolean);
if(tabLinks.length&&tabTargets.length&&'IntersectionObserver' in window){
  const tabObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{
    if(entry.isIntersecting){
      tabLinks.forEach(link=>link.classList.toggle('active',link.getAttribute('href')===`#${entry.target.id}`));
    }
  }),{rootMargin:'-25% 0px -60% 0px'});
  tabTargets.forEach(section=>tabObserver.observe(section));
}

document.querySelectorAll('[data-contact-form]').forEach(form=>form.addEventListener('submit',event=>{
  event.preventDefault();
  const status=form.querySelector('.form-status');
  const required=[...form.querySelectorAll('[required]')];
  const invalid=required.some(field=>field.type==='checkbox'?!field.checked:!field.value.trim());
  if(invalid){status.textContent='必須項目をご確認ください。';status.style.display='block';return;}
  const data=new FormData(form);
  const subject=`【Malz Insight】Waitlist登録 - ${data.get('company')}`;
  const body=[`会社名：${data.get('company')}`,`お名前：${data.get('name')}`,`メール：${data.get('email')}`,`お立場：${data.get('topic')||''}`,`関心テーマ・補足：${data.get('message')||''}`].join('\n');
  status.textContent='メール作成画面を開きます。内容をご確認のうえ送信してください。';
  status.style.display='block';
  window.location.href=`mailto:ttakino@cosmosketch.co.jp?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}));
