(function(){var t={3198:function(t,e,s){"use strict";var i=s(144),a=s(998),n=s(433),r=s(3059),o=function(){var t=this,e=t._self._c;return e(a.Z,[e("AppBar"),e(r.Z,[e(n.Z,{staticClass:"py-5"},[e("IntroPage"),e("ExperiencePage",{on:{openModal:t.openModal}}),e("ProjectPage",{on:{openModal:t.openModal}}),e("SkillPage"),e("AwardPage"),e("BlogPage")],1)],1),t.showModal?e("DetailModal",{attrs:{data:t.modalData},on:{close:function(e){t.showModal=!1}},model:{value:t.showModal,callback:function(e){t.showModal=e},expression:"showModal"}}):t._e()],1)},l=[],c=s(704),u=s(5550),p=s(6190),f=s(4324),m=s(5808),d=s(4525),v=s(2751),g=s(1199),h=s(3687),_=function(){var t=this,e=t._self._c;return e(c.Z,{staticClass:"d-flex justify-space-between app-bar-wrap",attrs:{app:"",color:t.$vuetify.theme.dark?"black":"primary",width:"100%",dark:""}},[e("div",{staticClass:"d-flex align-center"},[e("h1",{staticClass:"app-bar-title"},[e("a",{staticClass:"white--text",on:{click:t.scrollToTop}},[t._v("DOHU JEON")])])]),e(h.Z),e("div",{staticClass:"navigation-menu-wrap"},t._l(t.sectionList,(function(s,i){return e(p.Z,{key:i,staticClass:"white--text",attrs:{plain:""},on:{click:function(e){return t.scrollToSection(s)}}},[t._v(t._s(s))])})),1),e(h.Z),e(g.Z,{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function({on:s,attrs:i}){return[e(u.Z,t._g(t._b({staticClass:"drawer-trigger-btn"},"v-app-bar-nav-icon",i,!1),s))]}}])},[e(m.Z,t._l(t.sectionList,(function(s,i){return e(d.Z,{key:i},[e(v.V9,[e(p.Z,{staticClass:"menu-btn",attrs:{width:"100%",plain:""},on:{click:function(e){return t.scrollToSection(s)}}},[t._v(t._s(s))])],1)],1)})),1)],1),e(p.Z,{attrs:{icon:""},on:{click:t.switchTheme}},[t.$vuetify.theme.dark?e(f.Z,[t._v("mdi-weather-night")]):e(f.Z,[t._v("mdi-weather-sunny")])],1)],1)},k=[],x={name:"AppBar",data:()=>({sectionList:["Intro","Experience","Project","Skill","Award","Blog"]}),methods:{scrollToTop(){window.scrollTo(0,0)},scrollToSection(t){document.getElementById(t.toLowerCase()).scrollIntoView({block:"center",behavior:"smooth"})},switchTheme(){this.$vuetify.theme.dark=!this.$vuetify.theme.dark}}},y=x,C=s(3736),w=(0,C.Z)(y,_,k,!1,null,null,null),b=w.exports,Z=s(3423),S=s(579),j=s(5495),T=function(){var t=this,e=t._self._c;return e(S.Z,{staticClass:"intro-wrap",attrs:{id:"intro",color:"transparent",flat:""}},[e("h2",{staticClass:"primary--text section-header"},[t._v("Introduce")]),e("div",{staticClass:"intro-container mt-3"},[e("div",{staticClass:"profile-wrap"},[e(Z.Z,{attrs:{size:"200",rounded:"lg"}},[e(j.Z,{attrs:{alt:"profile image",src:s(1032)}})],1)],1),e("div",{staticClass:"text-wrap"},[e("p",[t._v(" 안녕하세요. 프론트엔드 개발자 "),e("strong",{staticClass:"primary--text"},[t._v("전도후")]),t._v(" 입니다. ")]),e("p",{staticClass:"mt-2"},[t._v(" 현재 스타트업에서 "),e("strong",{staticClass:"primary--text"},[t._v("웹 프론트엔드 개발자")]),t._v(" 를 담당하고 있습니다. "),e("br"),t._v(" 시각화 대시보드, 차트와 유저 관리를 포함 한 앱 관리자 웹과 웹뷰를 개발하고 있습니다. "),e("br")]),e("p",{staticClass:"mt-3"},[t._v(" 또한, "),e("strong",{staticClass:"primary--text"},[t._v("UI 개발팀 인턴")]),t._v(" 과 "),e("strong",{staticClass:"primary--text"},[t._v("survey programmer")]),t._v(" 경력을 가지고 있고 인도에서 학창시절을 보낸 다양한 경험을 가지고있습니다. ")]),e("p",{staticClass:"mt-3"},[t._v("글 솜씨는 좋지 않지만 얻은 정보들을 공유하고 기억하기 위해 개인 블로그에 포스트를 작성하려 노력하고 있습니다.")])])])])},M=[],P={name:"IntroPage"},O=P,D=(0,C.Z)(O,T,M,!1,null,null,null),N=D.exports,L=s(4886),V=function(){var t=this,e=t._self._c;return e(S.Z,{staticClass:"experience-wrap mt-5",attrs:{id:"experience",flat:"",color:"transparent"}},[e("h2",{staticClass:"primary--text section-header"},[t._v("Experience")]),t._l(t.experienceContents,(function(s,i){return e(S.Z,{key:i,staticClass:"section-wrap",class:{"mt-3":i>0,"mt-4":0===i}},[e(L.ZB,{staticClass:"contents-wrap"},[e("div",{staticClass:"d-flex flex-column justify-center info-wrap"},[e("div",[e("a",{staticClass:"company-link",attrs:{href:s.companyLink,target:"_blank"}},[t._v(t._s(s.name))])]),e("p",{staticClass:"mt-2"},[e("strong",[t._v(t._s(s.role))])]),e("p",[t._v(t._s(s.date))])]),e("ul",{staticClass:"work-list flex-grow-1 d-flex flex-column justify-center"},t._l(s.work,(function(s,i){return e("li",{key:i,staticClass:"d-flex align-start",class:{"mt-2":i>0}},[e(f.Z,{staticClass:"mr-2"},[t._v("mdi-briefcase-outline")]),t._v(" "+t._s(s)+" ")],1)})),0)]),e(L.h7,{staticClass:"d-flex justify-center button-wrap"},[e(p.Z,{staticClass:"primary--text",attrs:{elevation:"0",width:"100%",color:"transparent"},on:{click:function(e){return t.openModal(s.modalContents)}}},[t._v("More Details")])],1)],1)}))],2)},B=[],A={name:"ExperiencePage",data:()=>({experienceContents:[{name:"카이아이 컴퍼니",companyLink:"https://www.kai-i.com/",role:"Frontend Developer",date:"2021.06 ~ current",work:["앱 웹뷰 구현 및 서비스 관리자 페이지 화면 구현 ","기존 프로젝트 css에서 sass로 전환","데이터 시각화를 위한 대시보드, 차트 기능 구현"],modalContents:{title:"카이아이 컴퍼니",sections:[{subTitle:"# What I Learned",contents:["vuex를 이용한 state 관리","vuetify와 sass를 이용한 UI구현","컴포넌트 모듈화를 통한 재사용성 향상","기획자, 백엔드 개발자, 디자이너와 협업"]},{subTitle:"# Skill",contents:["Vue","Vuex","Vuetify","Sass"]}]}},{name:"칸타코리아",companyLink:"http://www.kantar.co.kr/",role:"Survey Programmer (CAWI)",date:"2018.09 ~ 2020.09",work:["IBM Dimension Platform을 이용한 온라인 설문조사(CAWI) 구현 및 진행","한국 설문조사에 자주 사용되는 UI 컴포넌트와 라이브러리 개발","프로젝트 코드 입력시 테스트 및 실제 조사 URL 생성 페이지 개발"],modalContents:{title:"칸타코리아",sections:[{subTitle:"# What I Learned",contents:["온라인 설문조사 개발부터 진행, 데이터 전달 경험","크로스 브라우징 대응","1년이상 진행하는 장기프로젝트를 담당하며 얻은 소통기술과 책임감"]},{subTitle:"# Skill",contents:["Javascript","JQuery","Css","HTML","Vue"]}]}},{name:"NTech Service (NHN Technology Service)",companyLink:"https://www.nts-corp.com/",role:"인턴",date:"2018.01 ~ 2018.02",work:["UI개발팀 인턴으로 웹 교육과 매일 과제 수행","디자인(psd 파일) 기반으로 웹 페이지 구현"],modalContents:{title:"NTech Service(NHN Technology Service)",sections:[{subTitle:"# What I Learned",contents:["HTML, CSS, Javascript, Sass, Gulp 등 웹 전반적인 지식","반응형, 크로스 브라우징, 접근성, 성능 개선을 고려한 개발"]},{subTitle:"# Skill",contents:["Javascript","CSS","HTML","Sass","Gulp"]}]}}]}),methods:{openModal(t){this.$emit("openModal",t)}}},E=A,I=(0,C.Z)(E,V,B,!1,null,null,null),$=I.exports,F=s(9930),J=function(){var t=this,e=t._self._c;return e(F.Z,{attrs:{scrollable:"","max-width":"500",transition:"dialog-bottom-transition","overlay-color":"rgba(0,0,0,0.7)","overlay-opacity":"1"},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[e(S.Z,{staticClass:"modal-wrap",attrs:{tile:""}},[e(L.EB,{staticClass:"d-flex justify-space-between flex-nowrap title-wrap"},[e("p",[t._v(t._s(t.data.title))]),e(p.Z,{attrs:{width:"36",height:"36",icon:""},on:{click:function(e){return t.$emit("close")}}},[e(f.Z,{attrs:{color:"primary",size:"28"}},[t._v("mdi-close")])],1)],1),e(L.ZB,{staticClass:"text-wrap"},[t.data.imageName?e("div",{staticClass:"mt-4"},[e(j.Z,{attrs:{alt:`${t.data.imageName} project image`,src:s(9300)(`./${t.data.imageName}`),contain:"","max-height":"500px"}})],1):t._e(),t._l(t.data.sections,(function(s,i){return e("div",{key:i,staticClass:"text-container mt-4"},[e("h3",{staticClass:"primary--text"},[t._v(t._s(s.subTitle))]),"# Skill"===s.subTitle?e("div",{staticClass:"skill-list d-flex flex-wrap mt-4"},t._l(s.contents,(function(t,s){return e("SkillChip",{key:s,attrs:{name:t}})})),1):e("ul",{staticClass:"work-list flex-grow-1 pl-2 mt-4"},t._l(s.contents,(function(s,i){return e("li",{key:i,staticClass:"d-flex align-start",class:{"mt-4":0===i}},[e(f.Z,{staticClass:"mr-2"},[t._v("mdi-fire")]),t._v(" "+t._s(s)+" ")],1)})),0)])}))],2)],1)],1)},U=[],R=s(4127),H=function(){var t=this,e=t._self._c;return e(R.Z,{staticClass:"pa-4",attrs:{color:"primary",outlined:"",label:""}},[e(Z.Z,{attrs:{left:""}},[e(j.Z,{attrs:{src:s(363)(`./ic-24-${t.name.toLowerCase()}.svg`)}})],1),t._v(" "+t._s(t.name)+" ")],1)},W=[],z={name:"SkillChip",props:{name:{type:String,default:""}}},G=z,K=(0,C.Z)(G,H,W,!1,null,"72aebc82",null),Q=K.exports,q={name:"DetailModal",components:{SkillChip:Q},props:{value:Boolean,data:{type:Object,default:()=>({title:"",sections:[]})}},computed:{show:{get(){return this.value},set(t){this.$emit("input",t)}}}},X=q,Y=(0,C.Z)(X,J,U,!1,null,"a54ab1b2",null),tt=Y.exports,et=function(){var t=this,e=t._self._c;return e(S.Z,{staticClass:"project-wrap mt-5",attrs:{id:"project",color:"transparent",flat:""}},[e("h2",{staticClass:"primary--text section-header"},[t._v("Project")]),t._l(t.projectContents,(function(s,i){return e(S.Z,{key:i,class:{"mt-3":i>0,"mt-4":0===i}},[e(L.ZB,{staticClass:"contents-wrap"},[e("h3",{staticClass:"primary--text"},[e("span",[t._v(t._s(s.platformName))]),e("span",[t._v(t._s(s.name))])]),e("div",[e("h4",[e(f.Z,{attrs:{left:""}},[t._v("mdi-information-outline")]),t._v(" 프로젝트 소개 ")],1),e("p",{staticClass:"pl-9 mt-2"},[t._v(t._s(s.introduction))])]),e("div",[e("h4",[e(f.Z,{attrs:{left:""}},[t._v("mdi-calendar-edit")]),t._v(" 개발 기간 ")],1),t._l(s.dates,(function(s,i){return e("p",{key:`date-${i}`,staticClass:"pl-9 mt-2"},[t._v(" "+t._s(s)+" ")])}))],2),e("div",[e("h4",[e(f.Z,{attrs:{left:""}},[t._v("mdi-sword")]),t._v(" 사용 기술 ")],1),e("div",{staticClass:"pl-9 mt-2 d-flex flex-wrap skill-list"},t._l(s.skills,(function(t,s){return e("SkillChip",{key:s,attrs:{name:t}})})),1)])]),e(L.h7,{staticClass:"d-flex justify-center button-wrap"},[e(p.Z,{staticClass:"primary--text",attrs:{elevation:"0",width:"100%",color:"transparent"},on:{click:function(e){return t.openModal(s.modalContents)}}},[t._v("More Details")])],1)],1)}))],2)},st=[],it={name:"ProjectPage",components:{SkillChip:Q},data:()=>({projectContents:[{platformName:"치매예방 관리 플랫폼:",name:"멘티실버 플러스",introduction:"시니어 맞춤형 보이는 ARS 기술과 음성인식 기술을 활용한 인지능력 자가 체크 서비스 및 치매예방 DB관리 시스템",skills:["Vue","Javascript","Vuex","Vuetify","Sass","ChartJS","HTML","CSS"],dates:["2022.01 ~ 2022.01 (보이는 ARS 모바일 조사 개발)","2022.07 ~ current (관리대상자 관리 웹 프론트엔드 개발)"],modalContents:{title:"멘티실버 플러스",imageName:"menti-silver-plus.gif",sections:[{subTitle:"# 서비스 목표",contents:["COVID-19로 인해 방문검진이 어려워진 환경에 맞춰 시간과 장소에 구애받지 않고 스스로 치매진단을 할수 있는 자가 문진을 제공","위험 인자를 찾아 지속적인 치매 예방 실천행동 및 인지 훈련 프로그램을 제공하여 치매 발병 가능성을 감소 목표"]},{subTitle:"# 내 기여도",contents:["모바일 ARS KDSQ검사(인지기능평가) 페이지 개발","센터 관리대상자 관리 웹 프론트엔드 개발","KDSQ검사 결과 차트와 표로 표현","관리대상자 전환 시 서명 저장"]}]}},{platformName:"구강통합관리 플랫폼:",name:"덴티아이(Denti-i) 2022",introduction:"건강한 구강을 위해 검진부터 예방까지 학교, 보건소, 병원이 효율적으로 관리할 수 있는 통합관리 플랫폼",skills:["Vue","Javascript","Vuex","Sass"],dates:["2022.03 ~ 2022.04 (기관용 웹 페이지 마이그레이션)","2022.06 ~ 2022.06 (웹뷰 프론트엔드 개발)"],modalContents:{title:"덴티아이(Denti-i) 2022",imageName:"denti-i.gif",sections:[{subTitle:"# 서비스 목표",contents:["서울, 인천, 부산, 여수, 밀양, 순천, 수원시가 지정한 초등학생과 학교를 다니지 않는 아동에게 지자체가 지정한 치과 의료기관에서 무상으로 구강 진료를 쉽고 편하게 받을 수 있도록 기술 지원하는 서비스"]},{subTitle:"# 내 기여도",contents:["웹뷰 프론트엔드 개발","지자체와 사업별로 구분하여 구강 검진결과 페이지 개발 및 데이터를 그래프와 수치로 구현","치아이미지 svg를 이용한 충치 위치 구현","기관용 웹 페이지 2022년형식으로 마이그레이션 및 css에서 sass로 전환"]}]}},{platformName:"육군구강관리 플랫폼:",name:"덴티로카(Denti-ROKA)",introduction:"육군 장병을 위한 구강건강관리 플랫폼",skills:["Vue","Javascript","Vuex","Vuetify","Sass","chartJS","vuei18n"],dates:["2021.12 ~ 2022.01 (관리자 웹 프론트엔드 개발)","2022.05 ~ 2022.05 (베트남 수출용 개발)"],modalContents:{title:"덴티로카(Denti-ROKA)",imageName:"denti-roka.gif",sections:[{subTitle:"# 서비스 목표",contents:["스마트폰 카메라를 이용하여 자가 구강 촬영을 통한 플라그 체크, 구강 교육 컨텐츠 제공으로 장병들의 구강관리"]},{subTitle:"# 내 기여도",contents:["장병 정보등록 및 관리, 통계를 볼 수 있는  관리자 웹 프론트엔드 개발","장병의 구강상태를 치아이미지로 표현","차트와 표로 비교 구강 결과 분석 리포트 구현","vue-i18n을 이용하여 베트남 수출용 페이지 개발"]}]}}]}),methods:{openModal(t){this.$emit("openModal",t)}}},at=it,nt=(0,C.Z)(at,et,st,!1,null,"3dd8d086",null),rt=nt.exports,ot=function(){var t=this,e=t._self._c;return e(S.Z,{staticClass:"skill-wrap mt-5",attrs:{id:"skill",color:"transparent",flat:""}},[e("h2",{staticClass:"primary--text section-header"},[t._v("Skill")]),t._l(t.primarySkillContents,(function(i,a){return e(S.Z,{key:a,staticClass:"section-wrap",class:{"mt-3":a>0,"mt-4":0===a}},[e(L.ZB,{staticClass:"d-flex align-center contents-wrap"},[e("div",{staticClass:"d-flex align-center flex-shrink-0"},[e(Z.Z,{attrs:{size:"60",rounded:"lg",left:""}},[e(j.Z,{attrs:{src:s(3189)(`./ic-100-${i.name.toLowerCase()}.svg`)}})],1),e("p",{staticClass:"skill-name ml-4"},[e("strong",[t._v(t._s(i.name))])])],1),e("div",{staticClass:"flex-grow-1 skill-text-wrap ml-4"},t._l(i.text,(function(s,i){return e("p",{key:i},[t._v(t._s(s))])})),0)])],1)})),e("div",{staticClass:"mt-4"},t._l(t.skillContents,(function(s,i){return e("div",{key:i,staticClass:"skill-list-wrap",class:{"mt-3":i>0}},[e("p",{staticClass:"flex-shrink-0 sub-category-title"},[t._v(t._s(`${s.title}: `))]),e("div",{staticClass:"skill-list d-flex flex-wrap"},t._l(s.skills,(function(t){return e("SkillChip",{key:t,attrs:{name:t}})})),1)])})),0)],2)},lt=[],ct={name:"SkillPage",components:{SkillChip:Q},data:()=>({primarySkillContents:[{name:"Javascript",text:["ES6 문법을 사용하며 코드의 재사용성과 쉽게 이해 할 수 있도록 함수형 프로그래밍을 지향하며 개발하도록 노력하고 있습니다."]},{name:"Typescript",text:["코드 단에서 오류 검사와 코드 자동완성의 장점을 가지고 있으므로, 프로젝트 개발 생산성과 유지보수에 이점이 있습니다.","추후 Vue3로 리팩토링 하며 적용할 예정입니다."]},{name:"Vue",text:["Vue2를 기반으로 전반적인 프로젝트에 사용중입니다. ","코드 재사용성을 위해 mixin과 slot을 사용 중이며, composition api도 적용 할 예정입니다."]},{name:"React",text:["개인 프로젝트와 인터넷 강의를 통해 배우는 중이며 소규모 프로젝트부터 적용해 볼 예정입니다."]}],skillContents:[{title:"UI library",skills:["Vuetify","StyledComponents"]},{title:"Collaboration",skills:["Bitbucket","Jira","Zeplin","Figma","Notion","Slack"]},{title:"Language",skills:["Korean","English"]}]})},ut=ct,pt=(0,C.Z)(ut,ot,lt,!1,null,"57f7b6eb",null),ft=pt.exports,mt=s(8893),dt=s(2082),vt=function(){var t=this,e=t._self._c;return e(S.Z,{staticClass:"award-wrap mt-5",attrs:{id:"award",color:"transparent",flat:""}},[e("h2",{staticClass:"primary--text section-header"},[t._v("Award")]),e(S.Z,{staticClass:"py-5 mt-3"},[e(mt.Z,{attrs:{"align-top":""}},t._l(t.awardContents,(function(s,i){return e(dt.Z,{key:i,attrs:{small:""},scopedSlots:t._u([{key:"opposite",fn:function(){return[e("span",{domProps:{textContent:t._s(s.year)}})]},proxy:!0}],null,!0)},[e("div",{staticClass:"pa-4"},[e("h4",[e("b",[t._v(t._s(s.awardName))]),e(f.Z,{attrs:{right:""}},[t._v("mdi-trophy-outline")])],1),e("p",{staticClass:"mt-2"},[t._v(" "+t._s(s.explanation)+" ")])])])})),1)],1)],1)},gt=[],ht={name:"AwardPage",data:()=>({awardContents:[{year:"2019년",awardName:"칸타코리아 - 우수사원상(Rookie 상)",explanation:"[칸타코리아] 장기 프로젝트 진행과 라이브러리와 사이트 개발로 인한 팀 내 작업 편의성에 기여로 인한 수상 "}]})},_t=ht,kt=(0,C.Z)(_t,vt,gt,!1,null,"51dd949c",null),xt=kt.exports,yt=function(){var t=this,e=t._self._c;return e(S.Z,{staticClass:"blog-wrap mt-5",attrs:{id:"blog",color:"transparent",flat:""}},[e("h2",{staticClass:"primary--text section-header"},[t._v("Blog")]),e(S.Z,{staticClass:"mt-3 py-4 px-8"},t._l(t.blogContents,(function(s,i){return e(d.Z,{key:i,attrs:{"two-line":""}},[e(v.km,[e(v.V9,[e("a",{staticClass:"link",attrs:{href:s.link,target:"_blank"}},[t._v(t._s(s.name))])]),e(v.oZ,{staticClass:"mt-1"},[t._v(" "+t._s(s.explanation)+" ")])],1)],1)})),1)],1)},Ct=[],wt={name:"BlogPage",data:()=>({blogContents:[{name:"Velog",link:"https://velog.io/@adc0612",explanation:"프론트엔드 실무 프로젝트 및 공부 지식 블로그"},{name:"Jekyll - Github Page",link:"https://adc0612.github.io/",explanation:"프론트엔드 공부 지식 블로그 (Velog로 옮겨서 작성중이라 최신글이 없다.)"}]})},bt=wt,Zt=(0,C.Z)(bt,yt,Ct,!1,null,"3fd3b202",null),St=Zt.exports,jt={name:"App",components:{BlogPage:St,AwardPage:xt,SkillPage:ft,ProjectPage:rt,DetailModal:tt,AppBar:b,IntroPage:N,ExperiencePage:$},data:()=>({showModal:!1,modalData:{}}),mounted(){this.initDarkMode()},methods:{initDarkMode(){const t=window.matchMedia("(prefers-color-scheme: dark)");t.addEventListener("change",(()=>{this.$vuetify.theme.dark=!this.$vuetify.theme.dark})),t.matches&&setTimeout((()=>this.$vuetify.theme.dark=!0),0)},openModal(t){this.showModal=!0,this.modalData=t}}},Tt=jt,Mt=(0,C.Z)(Tt,o,l,!1,null,null,null),Pt=Mt.exports,Ot=s(629);i.ZP.use(Ot.ZP);var Dt=new Ot.ZP.Store({state:{},getters:{},mutations:{},actions:{},modules:{}}),Nt=s(1705),Lt=s(5229);i.ZP.use(Nt.Z);var Vt=new Nt.Z({lang:{locales:{ko:Lt.ko,en:Lt.en},current:"ko"},theme:{default:"light",themes:{light:{primary:"#316e5e",primaryLight:"#00A981",primaryDark:"#1F2E2A",primaryDarker:"#242D2A",blackLight:"#444",secondary:"#FF9736",error:"#EF4242",success:"#1CC966",inputBG:"#fcfcfc",tableBGWhite:"#f8f7fa",white:"#fff"},dark:{primary:"#f2b115",secondary:"#424242",accent:"#FF4081",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00"}}}});i.ZP.config.productionTip=!1,new i.ZP({store:Dt,vuetify:Vt,render:t=>t(Pt)}).$mount("#app")},3189:function(t,e,s){var i={"./ic-100-javascript.svg":3378,"./ic-100-react.svg":9218,"./ic-100-typescript.svg":885,"./ic-100-vue.svg":4348};function a(t){var e=n(t);return s(e)}function n(t){if(!s.o(i,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return i[t]}a.keys=function(){return Object.keys(i)},a.resolve=n,t.exports=a,a.id=3189},363:function(t,e,s){var i={"./ic-24-bitbucket.svg":7310,"./ic-24-chartjs.svg":5193,"./ic-24-css.svg":9342,"./ic-24-english.svg":2270,"./ic-24-figma.svg":9427,"./ic-24-gulp.svg":3950,"./ic-24-html.svg":8559,"./ic-24-javascript.svg":9101,"./ic-24-jira.svg":5402,"./ic-24-jotai.svg":5990,"./ic-24-jquery.svg":3891,"./ic-24-korean.svg":3977,"./ic-24-notion.svg":3822,"./ic-24-react.svg":7532,"./ic-24-sass.svg":8876,"./ic-24-slack.svg":4632,"./ic-24-styledcomponents.svg":2713,"./ic-24-typescript.svg":2540,"./ic-24-vue.svg":6349,"./ic-24-vuei18n.svg":8320,"./ic-24-vuetify.svg":390,"./ic-24-vuex.svg":8388,"./ic-24-zeplin.svg":9236};function a(t){var e=n(t);return s(e)}function n(t){if(!s.o(i,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return i[t]}a.keys=function(){return Object.keys(i)},a.resolve=n,t.exports=a,a.id=363},9300:function(t,e,s){var i={"./denti-i.gif":867,"./denti-roka.gif":6465,"./menti-silver-plus.gif":9050,"./portfolio-demo.gif":9983,"./profile.jpeg":1032};function a(t){var e=n(t);return s(e)}function n(t){if(!s.o(i,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return i[t]}a.keys=function(){return Object.keys(i)},a.resolve=n,t.exports=a,a.id=9300},3378:function(t,e,s){"use strict";t.exports=s.p+"img/ic-100-javascript.4a362b4d.svg"},9218:function(t,e,s){"use strict";t.exports=s.p+"img/ic-100-react.1051276b.svg"},885:function(t,e,s){"use strict";t.exports=s.p+"img/ic-100-typescript.1d312127.svg"},4348:function(t,e,s){"use strict";t.exports=s.p+"img/ic-100-vue.919a8054.svg"},7310:function(t,e,s){"use strict";t.exports=s.p+"img/ic-24-bitbucket.ad6227c8.svg"},5193:function(t,e,s){"use strict";t.exports=s.p+"img/ic-24-chartjs.67a94ae4.svg"},9342:function(t,e,s){"use strict";t.exports=s.p+"img/ic-24-css.f37f2c73.svg"},2270:function(t,e,s){"use strict";t.exports=s.p+"img/ic-24-english.5a3f7852.svg"},9427:function(t,e,s){"use strict";t.exports=s.p+"img/ic-24-figma.a1d44d78.svg"},3950:function(t,e,s){"use strict";t.exports=s.p+"img/ic-24-gulp.93b4e950.svg"},8559:function(t,e,s){"use strict";t.exports=s.p+"img/ic-24-html.6d79add0.svg"},9101:function(t,e,s){"use strict";t.exports=s.p+"img/ic-24-javascript.c1f24f42.svg"},5402:function(t,e,s){"use strict";t.exports=s.p+"img/ic-24-jira.ac51d97d.svg"},5990:function(t,e,s){"use strict";t.exports=s.p+"img/ic-24-jotai.86c5f005.svg"},3891:function(t,e,s){"use strict";t.exports=s.p+"img/ic-24-jquery.f950100c.svg"},3977:function(t,e,s){"use strict";t.exports=s.p+"img/ic-24-korean.2de9ced0.svg"},3822:function(t,e,s){"use strict";t.exports=s.p+"img/ic-24-notion.b2fff93b.svg"},7532:function(t,e,s){"use strict";t.exports=s.p+"img/ic-24-react.fe39912a.svg"},8876:function(t,e,s){"use strict";t.exports=s.p+"img/ic-24-sass.cfeb0f01.svg"},4632:function(t,e,s){"use strict";t.exports=s.p+"img/ic-24-slack.f2d4eca5.svg"},2713:function(t,e,s){"use strict";t.exports=s.p+"img/ic-24-styledcomponents.3e6d1f91.svg"},2540:function(t,e,s){"use strict";t.exports=s.p+"img/ic-24-typescript.da42661a.svg"},6349:function(t,e,s){"use strict";t.exports=s.p+"img/ic-24-vue.70265e6d.svg"},8320:function(t,e,s){"use strict";t.exports=s.p+"img/ic-24-vuei18n.f54bf014.svg"},390:function(t,e,s){"use strict";t.exports=s.p+"img/ic-24-vuetify.7936ae0a.svg"},8388:function(t,e,s){"use strict";t.exports=s.p+"img/ic-24-vuex.daa5c429.svg"},9236:function(t,e,s){"use strict";t.exports=s.p+"img/ic-24-zeplin.91c89abc.svg"},867:function(t,e,s){"use strict";t.exports=s.p+"img/denti-i.602d8364.gif"},6465:function(t,e,s){"use strict";t.exports=s.p+"img/denti-roka.3028f2fa.gif"},9050:function(t,e,s){"use strict";t.exports=s.p+"img/menti-silver-plus.28700cc1.gif"},9983:function(t,e,s){"use strict";t.exports=s.p+"img/portfolio-demo.57194c50.gif"},1032:function(t,e,s){"use strict";t.exports=s.p+"img/profile.39b46e57.jpeg"}},e={};function s(i){var a=e[i];if(void 0!==a)return a.exports;var n=e[i]={exports:{}};return t[i](n,n.exports,s),n.exports}s.m=t,function(){var t=[];s.O=function(e,i,a,n){if(!i){var r=1/0;for(u=0;u<t.length;u++){i=t[u][0],a=t[u][1],n=t[u][2];for(var o=!0,l=0;l<i.length;l++)(!1&n||r>=n)&&Object.keys(s.O).every((function(t){return s.O[t](i[l])}))?i.splice(l--,1):(o=!1,n<r&&(r=n));if(o){t.splice(u--,1);var c=a();void 0!==c&&(e=c)}}return e}n=n||0;for(var u=t.length;u>0&&t[u-1][2]>n;u--)t[u]=t[u-1];t[u]=[i,a,n]}}(),function(){s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,{a:e}),e}}(),function(){s.d=function(t,e){for(var i in e)s.o(e,i)&&!s.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){s.p="/<repository_name>/"}(),function(){var t={143:0};s.O.j=function(e){return 0===t[e]};var e=function(e,i){var a,n,r=i[0],o=i[1],l=i[2],c=0;if(r.some((function(e){return 0!==t[e]}))){for(a in o)s.o(o,a)&&(s.m[a]=o[a]);if(l)var u=l(s)}for(e&&e(i);c<r.length;c++)n=r[c],s.o(t,n)&&t[n]&&t[n][0](),t[n]=0;return s.O(u)},i=self["webpackChunk_2022_portfolio"]=self["webpackChunk_2022_portfolio"]||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))}();var i=s.O(void 0,[998],(function(){return s(3198)}));i=s.O(i)})();
//# sourceMappingURL=app.9aa62d61.js.map