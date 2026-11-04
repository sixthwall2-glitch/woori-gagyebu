
/* ---------- 아이콘 ---------- */
const P={
 face:'<circle cx="12" cy="13" r="6.5"/><path d="M9.6 15.2c1.3 1.2 3.5 1.2 4.8 0"/><circle cx="9.8" cy="12.6" r=".5" fill="currentColor"/><circle cx="14.2" cy="12.6" r=".5" fill="currentColor"/>',
 man:'<path d="M5.6 12.2C5.2 7.6 8 5 12 5s6.8 2.6 6.4 7.2c-1.4-2-3.6-2.8-6.4-2.8-1.8 0-3.6.5-4.6 1.4"/>',
 woman:'<path d="M5.5 13C5.5 8 8 5.3 12 5.3S18.5 8 18.5 13v6.3h-2.4M5.5 13v6.3h2.4M8.5 9.5c2-.2 4.5-1.4 5.8-3.4"/>',
 baby:'<path d="M12 6.5c-1.2-1.6.4-3 1.6-2.2"/>',
 boy:'<path d="M6 11.5c.3-4 2.8-5.8 6-5.8s5.7 1.8 6 5.8c-1-1-2-1.6-3-1.8l-1 1.2-1-1.4-2.2 1.2-.6-1.2C8.5 9.8 7 10.4 6 11.5"/>',
 girl:'<circle cx="6.3" cy="7.4" r="1.8"/><circle cx="17.7" cy="7.4" r="1.8"/><path d="M6.4 11.4C7 8 9 6.6 12 6.6s5 1.4 5.6 4.8c-2.2-.2-4.2-1.2-5.6-2.6-1.4 1.4-3.4 2.4-5.6 2.6"/>',
 grandma:'<circle cx="12" cy="5" r="1.8"/><path d="M6.2 11.6C6.6 8.6 9 7 12 7s5.4 1.6 5.8 4.6"/><circle cx="9.7" cy="12.8" r="1.5"/><circle cx="14.3" cy="12.8" r="1.5"/><path d="M11.2 12.8h1.6"/>',
 grandpa:'<path d="M5.7 11.8c.4-1.4 1.6-2 2.6-1.8M18.3 11.8c-.4-1.4-1.6-2-2.6-1.8M9 9.6h6"/><circle cx="9.7" cy="12.8" r="1.5"/><circle cx="14.3" cy="12.8" r="1.5"/><path d="M11.2 12.8h1.6"/>',
};
const AV={
 man:P.face+P.man, woman:P.face+P.woman, baby:P.face+P.baby, boy:P.face+P.boy, girl:P.face+P.girl,
 grandma:P.face+P.grandma, grandpa:P.face+P.grandpa,
 couple:'<g transform="translate(-4.2 1.5) scale(.72)">'+P.face+P.man+'</g><g transform="translate(7.6 1.5) scale(.72)">'+P.face+P.woman+'</g>',
 pet:'<circle cx="12" cy="14" r="5.5"/><path d="M7 10.5L6 5l4 3.3M17 10.5L18 5l-4 3.3"/><circle cx="10" cy="13.5" r=".5" fill="currentColor"/><circle cx="14" cy="13.5" r=".5" fill="currentColor"/><path d="M11 16h2"/>',
 work:'<rect x="4" y="8" width="16" height="11" rx="1.5"/><path d="M9 8V6h6v2M4 13h16"/>',
 dots:'<circle cx="7" cy="12" r=".9" fill="currentColor"/><circle cx="12" cy="12" r=".9" fill="currentColor"/><circle cx="17" cy="12" r=".9" fill="currentColor"/>',
 plus:'<path d="M12 5v14M5 12h14"/>',
};
const CI={
 food:'<path d="M7 3.5v6.5a2 2 0 0 0 2 2M11 3.5v6.5a2 2 0 0 1-2 2v8.5M9 3.5v5M16 20.5v-17c-2 1.5-3 4-3 8.5h3"/>',
 bus:'<rect x="5" y="4" width="14" height="13" rx="2.5"/><path d="M5 12h14M8 17v2.5M16 17v2.5M8.5 7l7 3.5"/><circle cx="8.5" cy="14.5" r=".7" fill="currentColor"/><circle cx="15.5" cy="14.5" r=".7" fill="currentColor"/>',
 ticket:'<path d="M3.5 7h17v3a2 2 0 0 0 0 4v3h-17v-3a2 2 0 0 0 0-4z"/><path d="M15 7v1.5M15 11v2M15 15.5V17" />',
 game:'<path d="M7.5 7h9a4 4 0 0 1 3.8 5.2l-1.2 4a2.2 2.2 0 0 1-3.9.6L13.8 15h-3.6l-1.4 1.8a2.2 2.2 0 0 1-3.9-.6l-1.2-4A4 4 0 0 1 7.5 7z"/><path d="M7.5 9.8v2.6M6.2 11.1h2.6M15 11h2.2"/>',
 edu:'<path d="M2.5 9.5L12 5l9.5 4.5L12 14z"/><path d="M6.5 11.5v4c1.5 1.5 3.5 2.3 5.5 2.3s4-.8 5.5-2.3v-4M21.5 9.5v5"/>',
 trip:'<rect x="4" y="8" width="16" height="11" rx="2"/><path d="M9 8V5.5h6V8M8.5 8v11M15.5 8v11"/>',
 fashion:'<path d="M12 8.5V7.6a1.8 1.8 0 1 1 1.8-1.8M12 8.5L3.5 15a1 1 0 0 0 .6 1.8h15.8a1 1 0 0 0 .6-1.8z"/>',
 beauty:'<circle cx="12" cy="9" r="5.5"/><path d="M12 14.5V20M8.5 20.5h7M9.8 7.2l2-2M10.5 10l3.7-3.7"/>',
 life:'<path d="M5 8h14l-1.2 11.5a1.5 1.5 0 0 1-1.5 1.3H7.7a1.5 1.5 0 0 1-1.5-1.3z"/><path d="M9 10.5V6.5a3 3 0 0 1 6 0v4"/>',
 house:'<path d="M4 11l8-6.5 8 6.5M6 9.5V20h12V9.5"/><path d="M10 20v-5h4v5"/>',
 phone:'<rect x="7" y="3" width="10" height="18" rx="2"/><path d="M11 18h2"/>',
 med:'<rect x="4" y="7" width="16" height="12" rx="2"/><path d="M9 7V5h6v2M12 10v6M9 13h6"/>',
 gift:'<rect x="4" y="9" width="16" height="4"/><path d="M5.5 13v7h13v-7M12 9v11M12 9C10 5 7 5.5 7.5 7.5 8 9 12 9 12 9zM12 9c2-4 5-3.5 4.5-1.5C16 9 12 9 12 9z"/>',
 kid:'<path d="M9.5 3.5h5M10.3 3.5v2.5L8.5 8.5v10.5a1.5 1.5 0 0 0 1.5 1.5h4a1.5 1.5 0 0 0 1.5-1.5V8.5L13.7 6V3.5M8.5 12h3M8.5 15h3"/>',
 cafe:'<path d="M5 9h11v5a5 5 0 0 1-5 5h-1a5 5 0 0 1-5-5zM16 10.5h1.5a2.5 2.5 0 0 1 0 5H16M8 3.5c-.8 1 .8 1.8 0 3M11 3.5c-.8 1 .8 1.8 0 3"/>',
 ins:'<path d="M12 3.5c-4.5 0-8 3-8.5 7.5h17C20 6.5 16.5 3.5 12 3.5zM12 11v7a2 2 0 0 1-4 0"/>',
 car:'<path d="M5 15.5V12l1.8-4.5h10.4L19 12v3.5zM5 15.5v2.5h2.5v-2.5M16.5 15.5v2.5H19v-2.5M5 12h14"/><circle cx="8" cy="13.8" r=".7" fill="currentColor"/><circle cx="16" cy="13.8" r=".7" fill="currentColor"/>',
 salary:'<rect x="3.5" y="6.5" width="17" height="12" rx="2"/><path d="M15 12.5h5.5M3.5 9.5h12"/><circle cx="17" cy="12.5" r=".6" fill="currentColor"/>',
 bonus:'<path d="M12 3.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.8l-5.2 2.8 1-5.8-4.3-4.1 5.9-.9z"/>',
 allow:'<path d="M4 9.5h16v10H4zM4 9.5l8 5.5 8-5.5M7 9.5V5h10v4.5"/>',
 interest:'<path d="M4 19.5h16M6.5 16l4-4.5 3 3L19 8M15 8h4v4"/>',
 more:AV.dots,
};
export const svg=(p,cls)=>'<svg class="i'+(cls?" "+cls:"")+'" viewBox="0 0 24 24">'+p+'</svg>';

const OUT_CATS=[["식비","food"],["교통","bus"],["문화","ticket"],["오락","game"],["교육","edu"],["여행","trip"],["패션","fashion"],["미용","beauty"],
 ["카페·간식","cafe"],["생활","life"],["주거·관리비","house"],["통신","phone"],["의료","med"],["육아","kid"],["경조사","gift"],["보험","ins"],["차량","car"],["기타","more"]];
const IN_CATS=[["급여","salary"],["상여","bonus"],["용돈","allow"],["이자·배당","interest"],["기타","more"]];
const catIcon=(type,c)=>{const l=type==="in"?IN_CATS:OUT_CATS;const f=l.find(x=>x[0]===c);return f?f[1]:"more"};
const DEFAULT_MEMBERS=[{id:"head",label:"가장",icon:"man"},{id:"wife",label:"공쥬님💜",icon:"woman"},{id:"us",label:"우리",icon:"couple"},{id:"baby",label:"아기",icon:"baby"},
 {id:"son",label:"아들",icon:"boy"},{id:"daughter",label:"딸",icon:"girl"},{id:"inlaw-w",label:"처가댁",icon:"grandma"},{id:"inlaw-h",label:"시댁",icon:"grandpa"},{id:"etc",label:"기타",icon:"dots"}];
const PICK_ICONS=["man","woman","couple","baby","boy","girl","grandma","grandpa","pet","work","dots"];

/* ---------- 공휴일: 일요일, 양력 고정 공휴일, 2026년 음력 공휴일·대체공휴일 ---------- */
const FIXED=["01-01","03-01","05-05","06-06","08-15","10-03","10-09","12-25"];
const EXTRA={"2026-02-16":1,"2026-02-17":1,"2026-02-18":1,"2026-03-02":1,"2026-05-24":1,"2026-05-25":1,"2026-06-03":1,"2026-08-17":1,"2026-09-24":1,"2026-09-25":1,"2026-09-26":1,"2026-10-05":1};
const isHoliday=(ds,dow)=>dow===0||FIXED.includes(ds.slice(5))||!!EXTRA[ds];

/* ---------- 상태 ---------- */
const $=id=>document.getElementById(id);
const fmt=n=>Math.round(n).toLocaleString("ko-KR");
const pad=n=>String(n).padStart(2,"0");
const ds=(y,m,d)=>y+"-"+pad(m)+"-"+pad(d);
const todayStr=()=>{const d=new Date();return ds(d.getFullYear(),d.getMonth()+1,d.getDate())};
const WD=["일","월","화","수","목","금","토"];
const parseWon=s=>{const n=Number(String(s).replace(/[^\d]/g,""));return Number.isFinite(n)?Math.min(n,9e12):0};

let db=null,canWrite=true,unsub=null;
let ym=(()=>{const d=new Date();return{y:d.getFullYear(),m:d.getMonth()+1}})();
let pickerYear=ym.y;
let selDate=todayStr();
const DAILY_DEFAULT=100000;
const BUDGET_FIRST_DAY="2026-11-03"; // 하루 예산 계산을 처음 시작한 날. 이날 이전은 계산하지 않는다.
let allEntries=[];
let entries=[];
let settings={budget:0,daily:DAILY_DEFAULT,members:DEFAULT_MEMBERS.slice()};
let draft=null;
let memoHist=new Map(); // memo -> {category,type,count}
let autoComplete=true; try{autoComplete=localStorage.getItem("ac")!=="0"}catch(e){}
let unsubSettings=null;
let currentUid=null;
let newIcon="pet", pendingDel=false, pendingMemberRm=null;

const member=id=>settings.members.find(m=>m.id===id)||{id,label:"알 수 없음",icon:"dots"};

/* ---------- 화면 전환 ---------- */
const SCREENS=["sLogin","sHome","sWho","sCat","sList","sStats"];
function show(id){SCREENS.forEach(s=>$(s).hidden=s!==id);window.scrollTo(0,0);
  if(id==="sWho")setTimeout(()=>{if(!$("amountIn").value)$("amountIn").focus()},60);
  if(id==="sList")renderList(); if(id==="sStats")renderStats();}
document.querySelectorAll(".back").forEach(b=>b.onclick=()=>show("sHome"));

function toast(t){const el=$("toast");el.textContent=t;el.hidden=false;clearTimeout(toast._t);toast._t=setTimeout(()=>el.hidden=true,2200)}

/* ---------- 홈 ---------- */
function monthRange(){const s=ds(ym.y,ym.m,1);const n=ym.m===12?{y:ym.y+1,m:1}:{y:ym.y,m:ym.m+1};return[s,ds(n.y,n.m,1)]}
/* 하루 예산 이월 계산 (매월 1일에 초기화)
   사용 가능(d) = 하루 예산 + 전날 남은 돈,  남은 돈(d) = 사용 가능(d) − 사용(d)
   전날 초과하면 남은 돈이 음수라 그만큼 줄어든다. 말일의 남은 돈 = 그 달에 아낀 금액. */
const dayNum=s=>Math.round(Date.parse(s+"T00:00:00Z")/864e5);
const dayStr=n=>new Date(n*864e5).toISOString().slice(0,10);
function dailyBudgets(){
  const B=settings.daily||0, out={};
  if(!B)return out;
  let[mStart,mEnd]=monthRange();
  if(mEnd<=BUDGET_FIRST_DAY)return out;
  if(mStart<BUDGET_FIRST_DAY)mStart=BUDGET_FIRST_DAY;
  const spent={};entries.forEach(e=>{if(e.type==="out")spent[e.date]=(spent[e.date]||0)+e.amount});
  let carry=0;
  for(let n=dayNum(mStart),end=dayNum(mEnd);n<end;n++){
    const k=dayStr(n),avail=B+carry,sp=spent[k]||0;
    out[k]={avail,spent:sp,left:avail-sp,carry};carry=avail-sp;
  }
  return out;
}
function totals(){let i=0,o=0;entries.forEach(e=>e.type==="in"?i+=e.amount:o+=e.amount);return{i,o}}
/* 달력 칸용: 100만 원 이상은 만 원 단위로 줄여 칸을 넘지 않게 한다 */
function short(n){const a=Math.abs(n);return(n<0?"-":"")+(a>=1e6?fmt(Math.round(a/1e4))+"만":fmt(a))}
function signed(n){return(n<0?"-":"")+fmt(Math.abs(n))}

function renderHome(){
  $("monthLabel").textContent=ym.y+"년 "+ym.m+"월";
  const{i,o}=totals();
  $("sIn").textContent="+"+fmt(i)+"원";
  const B=settings.budget||0;
  $("sOut").textContent="-"+fmt(o)+"원";
  $("sNet").textContent=signed(i-o)+"원";

  const bud=dailyBudgets();
  const perDay={};entries.forEach(e=>{const p=perDay[e.date]||(perDay[e.date]={o:0,i:0});e.type==="in"?p.i+=e.amount:p.o+=e.amount});
  const first=new Date(ym.y,ym.m-1,1).getDay(), days=new Date(ym.y,ym.m,0).getDate(), today=todayStr();
  const wk=$("weeks");wk.textContent="";
  let row=null;
  for(let c=0;c<first+days;c++){
    if(c%7===0){row=document.createElement("div");row.className="week";wk.appendChild(row);
      const lab=document.createElement("div");lab.className="lab";lab.setAttribute("aria-hidden","true");row.appendChild(lab)}
    const cell=document.createElement(c<first?"div":"button");cell.className="day";
    if(c>=first){
      const d=c-first+1,key=ds(ym.y,ym.m,d),dow=c%7;
      if(isHoliday(key,dow))cell.classList.add("hol");
      if(key===selDate)cell.classList.add("sel");
      if(key===today)cell.classList.add("today");
      cell.setAttribute("aria-label",ym.m+"월 "+d+"일");
      const n=document.createElement("span");n.className="d num";n.textContent=d;cell.appendChild(n);
      const p=perDay[key],bd=bud[key];
      if(bd&&key<=today){
        const lab=row.firstChild;if(!lab.childElementCount)lab.innerHTML="<i></i><span>사용가능 예산</span><span>금일 사용금액</span>";
        const a=document.createElement("span");a.className="amt avail num";a.textContent=short(bd.avail);if(bd.avail<0)a.classList.add("over");cell.appendChild(a);
        if(bd.spent){const u=document.createElement("span");u.className="amt num";u.textContent=short(bd.spent);if(bd.left<0)u.classList.add("over");cell.appendChild(u)}
      }else if(p&&p.o){const u=document.createElement("span");u.className="amt num";u.textContent="-"+fmt(p.o);cell.appendChild(u)}
      cell.onclick=()=>{if(selDate===key){openNew()}else{selDate=key;renderHome()}};
    }
    row.appendChild(cell);
  }
  while(row&&row.children.length<8){const e=document.createElement("div");e.className="day";row.appendChild(e)}

  const sd=new Date(selDate+"T00:00:00");
  $("dayTitle").textContent=(sd.getMonth()+1)+"월 "+sd.getDate()+"일 ("+WD[sd.getDay()]+")";
  const bx=$("budgetBox"),b=bud[selDate];
  bx.hidden=!b;
  if(b){
    const isLast=dayNum(selDate)===dayNum(monthRange()[1])-1;
    $("bLabel").textContent=(isLast?"이번 달 목표 달성액 · ":"")+(selDate===today?"오늘 남은 돈":selDate<today?"이날 남은 돈":"이날 예정 남은 돈");
    const left=$("bLeft");left.textContent=signed(b.left)+"원";left.classList.toggle("over",b.left<0);
    $("bDetail").textContent="사용 가능 "+signed(b.avail)+"원 (하루 "+fmt(settings.daily)+(b.carry>0?" + 이월 "+fmt(b.carry):b.carry<0?" − 초과 "+fmt(-b.carry):"")+") · 사용 "+fmt(b.spent)+"원";
    const pct=b.avail>0?Math.min(100,b.spent/b.avail*100):100;$("bBar").style.width=pct+"%";$("bBar").classList.toggle("over",b.left<0);
    $("bNext").textContent=isLast&&selDate>today?"남은 날 더 쓰지 않으면 이번 달 "+(b.left>=0?fmt(b.left)+"원을 아끼게 됩니다.":fmt(-b.left)+"원 초과로 끝납니다.")
      :isLast?"이번 달에 "+(b.left>=0?fmt(b.left)+"원을 아꼈습니다.":fmt(-b.left)+"원을 초과했습니다.")+" 다음 달 1일에 새로 시작합니다."
      :b.left>=0?"남은 "+fmt(b.left)+"원은 다음 날 사용 가능 금액에 더해집니다.":"초과한 "+fmt(-b.left)+"원은 다음 날 사용 가능 금액에서 빠집니다.";
  }
  const rows=$("dayRows");rows.textContent="";
  const list=entries.filter(e=>e.date===selDate).sort((a,b)=>(b.createdAt||0)-(a.createdAt||0));
  if(!list.length){rows.innerHTML='<div class="empty">이날 기록이 없습니다. 아래 버튼으로 등록하세요.</div>'}
  list.forEach(e=>rows.appendChild(entryRow(e)));
}
function entryRow(e){
  const b=document.createElement("button");b.className="row";
  const m=member(e.who);
  b.innerHTML='<div class="ic">'+svg(CI[catIcon(e.type,e.category)])+'</div><div><div class="t"><span></span>'+svg(AV[m.icon]||AV.dots)+'</div><div class="s"><span class="chip"></span><span class="w"></span></div></div><div class="a num"></div>';
  b.querySelector(".t span").textContent=e.memo||e.category;
  b.querySelector(".chip").textContent=e.category;
  b.querySelector(".w").textContent=m.label;
  const a=b.querySelector(".a");a.textContent=(e.type==="in"?"+":"-")+fmt(e.amount)+"원";if(e.type==="in")a.classList.add("in");
  b.onclick=()=>openEdit(e);
  return b;
}

/* 월 선택 */
$("monthBtn").onclick=()=>{const p=$("picker");p.hidden=!p.hidden;$("monthBtn").setAttribute("aria-expanded",!p.hidden);pickerYear=ym.y;renderPicker()};
function renderPicker(){
  $("yLabel").textContent=pickerYear+"년";const g=$("mGrid");g.textContent="";
  for(let m=1;m<=12;m++){const b=document.createElement("button");b.textContent=m+"월";
    b.setAttribute("aria-current",pickerYear===ym.y&&m===ym.m);
    b.onclick=()=>{ym={y:pickerYear,m};$("picker").hidden=true;$("monthBtn").setAttribute("aria-expanded","false");
      const t=todayStr();selDate=t.startsWith(ds(ym.y,ym.m,1).slice(0,7))?t:ds(ym.y,ym.m,1);subscribe()};
    g.appendChild(b)}
}
$("yPrev").onclick=()=>{pickerYear--;renderPicker()};$("yNext").onclick=()=>{pickerYear++;renderPicker()};

$("goList").onclick=()=>show("sList");$("goStats").onclick=()=>show("sStats");
$("goAdd").onclick=openNew;$("ctaAdd").onclick=openNew;

/* ---------- 등록 흐름 ---------- */
function blockIfReadOnly(){if(canWrite)return false;toast("보기 전용입니다. 편집 권한이 있어야 등록할 수 있습니다.");return true}
function openNew(){if(blockIfReadOnly())return;draft={date:selDate,amount:0,who:null,type:"out",memo:"",category:null,id:null};pendingDel=false;
  $("amountIn").value="";$("whoMsg").textContent="";$("addMember").hidden=true;renderWho();show("sWho")}
function openEdit(e){draft={...e};pendingDel=false;renderCat();show("sCat")}

function dateLabel(d){const t=new Date(d+"T00:00:00");return t.getFullYear()+"년 "+(t.getMonth()+1)+"월 "+t.getDate()+"일("+WD[t.getDay()]+")"}
function renderWho(){
  $("dateVal").textContent=dateLabel(draft.date);$("dateIn").value=draft.date;
  const g=$("whoGrid");g.textContent="";
  settings.members.forEach(m=>{const b=document.createElement("button");b.className="tile";
    b.innerHTML='<div class="c">'+svg(AV[m.icon]||AV.dots)+'</div><span></span>';b.querySelector("span").textContent=m.label;
    b.onclick=()=>pickWho(m.id);g.appendChild(b)});
  const add=document.createElement("button");add.className="tile";add.innerHTML='<div class="c">'+svg(AV.plus)+'</div><span>추가</span>';
  add.onclick=()=>{$("addMember").hidden=false;$("mName").value="";newIcon="pet";renderIconPick();$("mName").focus()};g.appendChild(add);
}
$("dateIn").addEventListener("change",()=>{if($("dateIn").value){draft.date=$("dateIn").value;$("dateVal").textContent=dateLabel(draft.date)}});
function comma(el){el.addEventListener("input",()=>{const n=parseWon(el.value);el.value=n?fmt(n):""})}
comma($("amountIn"));comma($("amount2"));comma($("budgetIn"));comma($("dailyIn"));
function pickWho(id){
  const n=parseWon($("amountIn").value);
  if(!n){$("whoMsg").textContent="금액을 먼저 입력하세요.";$("amountIn").focus();return}
  draft.amount=n;draft.who=id;$("whoMsg").textContent="";renderCat();show("sCat");
  setTimeout(()=>$("memoIn").focus(),60);
}
$("whoBack").onclick=()=>show("sHome");

function renderIconPick(){const box=$("mIcons");box.textContent="";
  PICK_ICONS.forEach(k=>{const b=document.createElement("button");b.innerHTML=svg(AV[k]);b.setAttribute("aria-pressed",k===newIcon);b.setAttribute("aria-label","아이콘 "+k);
    b.onclick=()=>{newIcon=k;renderIconPick()};box.appendChild(b)})}
$("mCancel").onclick=()=>$("addMember").hidden=true;
$("mSave").onclick=async()=>{
  const label=$("mName").value.trim();if(!label){$("mName").focus();return}
  const members=[...settings.members,{id:"m"+Date.now().toString(36),label,icon:newIcon}];
  if(await saveSettings({members})){$("addMember").hidden=true;renderWho();toast(label+" 추가됨")}
};

/* 3단계 */
function renderCat(){
  document.querySelectorAll(".tabs button").forEach(b=>b.setAttribute("aria-pressed",b.dataset.t===draft.type));
  $("whoVal").textContent=member(draft.who).label;
  $("amount2").value=draft.amount?fmt(draft.amount):"";
  $("memoIn").value=draft.memo||"";
  $("acSw").setAttribute("aria-checked",autoComplete);
  $("catMsg").textContent="";
  const g=$("catGrid");g.textContent="";
  (draft.type==="in"?IN_CATS:OUT_CATS).forEach(([c,ic])=>{const b=document.createElement("button");b.className="tile";
    b.innerHTML='<div class="c">'+svg(CI[ic])+'</div><span></span>';b.querySelector("span").textContent=c;
    b.setAttribute("aria-pressed",draft.category===c);b.onclick=()=>saveEntry(c);g.appendChild(b)});
  const del=$("delBtn");del.hidden=!draft.id||!canWrite;del.textContent=pendingDel?"한 번 더 누르면 삭제됩니다":"이 내역 삭제";del.classList.toggle("confirm",pendingDel);
  renderSugg();
}
document.querySelectorAll(".tabs button").forEach(b=>b.onclick=()=>{if(draft.type!==b.dataset.t){draft.type=b.dataset.t;draft.category=null;renderCat()}});
$("whoRow").onclick=()=>{if(draft.id)return;draft.memo=$("memoIn").value;$("amountIn").value=fmt(draft.amount);renderWho();show("sWho")};
$("catBack").onclick=()=>{if(draft.id){show("sHome");return}draft.memo=$("memoIn").value;$("amountIn").value=fmt(draft.amount);renderWho();show("sWho")};
$("catClose").onclick=()=>show("sHome");
$("acSw").onclick=()=>{autoComplete=!autoComplete;try{localStorage.setItem("ac",autoComplete?"1":"0")}catch(e){}$("acSw").setAttribute("aria-checked",autoComplete);renderSugg()};
$("memoIn").addEventListener("input",renderSugg);

function renderSugg(){
  const box=$("sugg");box.textContent="";
  const q=$("memoIn").value.trim();
  if(!autoComplete){box.hidden=true;return}
  const all=[...memoHist.entries()].filter(([m,v])=>v.type===draft.type&&m!==q&&(!q||m.includes(q))).sort((a,b)=>b[1].count-a[1].count).slice(0,6);
  box.hidden=!all.length;
  all.forEach(([m,v])=>{const b=document.createElement("button");b.textContent=m;
    b.onclick=()=>{$("memoIn").value=m;draft.category=v.category;renderCat()};box.appendChild(b)});
}

function errText(e){const c=e&&e.code;
  if(c==="invalid_argument"||c==="permission-denied")return"저장 권한이 없습니다. 가계부 주인에게 편집 권한을 받아야 합니다.";
  if(c==="quota_exceeded")return"저장 공간이 가득 찼습니다. 오래된 내역을 지운 뒤 다시 시도하세요.";
  if(c==="resource_exhausted")return"요청이 너무 잦습니다. 잠시 후 다시 시도하세요.";
  return"저장하지 못했습니다. 연결을 확인하고 다시 시도하세요."}

let saving=false;
async function saveEntry(category){
  if(saving)return;
  if(!db){$("catMsg").textContent="저장소에 연결되지 않았습니다.";return}
  const amount=parseWon($("amount2").value);
  if(!amount){$("catMsg").textContent="금액을 입력하세요.";$("amount2").focus();return}
  const memo=$("memoIn").value.trim().slice(0,40);
  const body={type:draft.type,amount,category,date:draft.date,who:draft.who,memo,createdAt:draft.createdAt||Date.now(),by:draft.by||currentUid};
  if(draft.id)body.updatedAt=Date.now();
  saving=true;
  try{
    if(draft.id)await db.doc("entries/"+draft.id).set(body);
    else await db.collection("entries").doc().set(body);
    if(memo){const h=memoHist.get(memo)||{count:0};memoHist.set(memo,{category,type:draft.type,count:h.count+1})}
    toast((draft.id?"수정 · ":"")+category+" "+fmt(amount)+"원");
    selDate=draft.date;
    const[s,e]=monthRange();
    if(draft.date<s||draft.date>=e){const[y,m]=draft.date.split("-").map(Number);ym={y,m};subscribe()}else renderHome();
    show("sHome");
  }catch(e){$("catMsg").textContent=errText(e);if(e&&(e.code==="invalid_argument"||e.code==="permission-denied"))setReadOnly()}
  finally{saving=false}
}
$("delBtn").onclick=async()=>{
  if(!pendingDel){pendingDel=true;renderCat();setTimeout(()=>{if(pendingDel){pendingDel=false;if(!$("sCat").hidden)renderCat()}},4000);return}
  pendingDel=false;
  try{await db.doc("entries/"+draft.id).delete();toast("삭제했습니다");show("sHome")}catch(e){$("catMsg").textContent=errText(e)}
};

/* ---------- 월간 내역 ---------- */
function renderList(){
  $("listTitle").textContent=ym.y+"년 "+ym.m+"월 내역";
  const body=$("listBody");body.textContent="";
  if(!entries.length){body.innerHTML='<div class="empty">이 달에 기록된 내역이 없습니다.</div>';return}
  const g={};entries.forEach(e=>(g[e.date]=g[e.date]||[]).push(e));
  Object.keys(g).sort().reverse().forEach(d=>{
    const box=document.createElement("div");box.className="listday";
    const t=new Date(d+"T00:00:00");const o=g[d].filter(e=>e.type==="out").reduce((s,e)=>s+e.amount,0);
    const h=document.createElement("h3");h.innerHTML="<span></span><span class='num'></span>";
    h.children[0].textContent=(t.getMonth()+1)+"월 "+t.getDate()+"일 ("+WD[t.getDay()]+")";h.children[1].textContent=o?"-"+fmt(o):"";
    box.appendChild(h);g[d].sort((a,b)=>(b.createdAt||0)-(a.createdAt||0)).forEach(e=>box.appendChild(entryRow(e)));body.appendChild(box)});
}

/* ---------- 통계·설정 ---------- */
function bars(target,pairs,total){
  const el=$(target);el.textContent="";
  if(!pairs.length){el.innerHTML='<div class="empty" style="text-align:left;padding:0">이 달 지출이 없습니다.</div>';return}
  const max=pairs[0][1];
  pairs.forEach(([k,v])=>{const r=document.createElement("div");r.className="brow";
    r.innerHTML='<span></span><div class="track"><i></i></div><span class="num"></span>';
    r.children[0].textContent=k;r.querySelector("i").style.width=(v/max*100)+"%";
    r.children[2].textContent=fmt(v)+"원 · "+Math.round(v/total*100)+"%";el.appendChild(r)});
}
function renderStats(){
  $("statsTitle").textContent=ym.y+"년 "+ym.m+"월 통계";
  const{o}=totals(),bc={},bw={};
  entries.filter(e=>e.type==="out").forEach(e=>{bc[e.category]=(bc[e.category]||0)+e.amount;const l=member(e.who).label;bw[l]=(bw[l]||0)+e.amount});
  bars("byCat",Object.entries(bc).sort((a,b)=>b[1]-a[1]),o);
  bars("byWho",Object.entries(bw).sort((a,b)=>b[1]-a[1]),o);
  const B=settings.budget||0;
  if(B){const r=document.createElement("div");r.className="brow";r.innerHTML='<span>예산</span><div class="track"><i></i></div><span class="num"></span>';
    const p=o/B;const i=r.querySelector("i");i.style.width=Math.min(100,p*100)+"%";i.classList.toggle("over",p>1);
    r.children[2].textContent=fmt(o)+" / "+fmt(B)+"원";$("byCat").prepend(r)}
  $("budgetIn").value=B?fmt(B):"";$("dailyIn").value=settings.daily?fmt(settings.daily):"";
  renderMemberEdit();
}
function renderMemberEdit(){
  const box=$("memberEdit");box.textContent="";
  const lab=document.createElement("div");lab.style.cssText="font-size:.82rem;color:var(--muted)";lab.textContent="사용자 이름";box.appendChild(lab);
  settings.members.forEach(m=>{const r=document.createElement("div");r.className="mrow";
    r.innerHTML=svg(AV[m.icon]||AV.dots)+'<input maxlength="12">';
    const inp=r.querySelector("input");inp.value=m.label;inp.dataset.id=m.id;inp.id="mem-"+m.id;inp.setAttribute("aria-label",m.label+" 이름");
    const used=entries.some(e=>e.who===m.id);
    if(!DEFAULT_MEMBERS.some(d=>d.id===m.id)&&!used){const rm=document.createElement("button");rm.className="rm";
      rm.textContent=pendingMemberRm===m.id?"삭제 확인":"삭제";
      rm.onclick=async()=>{if(pendingMemberRm!==m.id){pendingMemberRm=m.id;renderMemberEdit();return}
        pendingMemberRm=null;if(await saveSettings({members:settings.members.filter(x=>x.id!==m.id)}))renderMemberEdit()};
      r.appendChild(rm)}
    box.appendChild(r)});
}
$("saveSettings").onclick=async()=>{
  const members=settings.members.map(m=>{const i=document.querySelector('#memberEdit input[data-id="'+m.id+'"]');return{...m,label:(i&&i.value.trim())||m.label}});
  if(await saveSettings({budget:parseWon($("budgetIn").value),daily:parseWon($("dailyIn").value),members})){toast("설정을 저장했습니다");renderStats();renderHome()}
};
async function saveSettings(patch){
  if(blockIfReadOnly())return false;
  if(!db){toast("저장소에 연결되지 않았습니다.");return false}
  const next={...settings,...patch};
  try{await db.doc("meta/settings").set({budget:next.budget||0,daily:next.daily,members:next.members});settings=next;return true}
  catch(e){toast(errText(e));return false}
}


/* ---------- 데이터 연결 (Firebase) ---------- */
function setReadOnly(){canWrite=false;const s=$("status");s.hidden=false;s.textContent="이 계정은 가계부에 접근할 권한이 없습니다. 등록된 이메일로 로그인했는지 확인하세요."}
function subscribe(){
  if(unsub)unsub();entries=[];allEntries=[];renderHome();if(!db)return;
  const[s,e]=monthRange();
  const from=s;
  unsub=db.collection("entries").where("date",">=",from).where("date","<",e).orderBy("date","desc")
    .onSnapshot(snap=>{allEntries=snap.docs.map(d=>({id:d.id,...d.data()})).filter(x=>typeof x.amount==="number");
      entries=allEntries.filter(x=>x.date>=s);
      renderHome();if(!$("sList").hidden)renderList();if(!$("sStats").hidden)renderStats()},
      err=>{if(err&&err.code==="permission-denied")setReadOnly();else $("dayRows").innerHTML='<div class="empty">내역을 불러오지 못했습니다. 앱을 다시 열어 주세요.</div>'});
}
export function startSession(adapter,uid){
  currentUid=uid||null;db=adapter;canWrite=true;$("status").hidden=true;
  if(unsubSettings)unsubSettings();
  unsubSettings=db.doc("meta/settings").onSnapshot(s=>{if(!s.exists)return;const d=s.data();
    settings={budget:Number(d.budget)||0,daily:d.daily==null?DAILY_DEFAULT:Number(d.daily)||0,
      members:Array.isArray(d.members)&&d.members.length?d.members:DEFAULT_MEMBERS.slice()};
    renderHome();if(!$("sStats").hidden)renderMemberEdit()},()=>{});
  subscribe();show("sHome");
  memoHist=new Map();
  db.collection("entries").orderBy("createdAt","desc").limit(400).get().then(r=>{
    r.docs.forEach(d=>{const x=d.data();if(!x.memo)return;const h=memoHist.get(x.memo);
      if(h)h.count++;else memoHist.set(x.memo,{category:x.category,type:x.type,count:1})})}).catch(()=>{});
}
export function endSession(){
  if(unsub)unsub();if(unsubSettings)unsubSettings();unsub=unsubSettings=null;db=null;entries=[];
  settings={budget:0,daily:DAILY_DEFAULT,members:DEFAULT_MEMBERS.slice()};allEntries=[];renderHome();show("sLogin");
}
export {toast,show,$};
renderHome();
