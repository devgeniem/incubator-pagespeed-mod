(function(){var c=!0,f=null,g=!1,j=window,k=Object,m=document;function n(a,b){return a.createElement=b}function p(a,b){return a.addEventListener=b}function q(a,b){return a.attachEvent=b}
var r="push",s="exec",t="indexOf",u="hasAttribute",v="readyState",w="querySelector",x="defineProperty",y="addEventListener",z="setAttribute",A="attachEvent",B="getElementsByTagName",C="documentElement",D="length",E="prototype",F="removeChild",G="call",H="getAttribute",I="querySelectorAll",J="fireEvent",K="parentNode",L="",aa="\n",ba='");',ca="*",da=":not([psa_not_processed])",ea="<div>_</div>",fa='=document.getElementById("',ga="Add to queue str: ",ha="Add to queue url: ",ia="DOMContentLoaded",ja=
"Evaluated: ",M="Exception while evaluating.",ka="Exception while overriding document.all.",la="Exception while overriding document.readyState.",ma="Executed: ",na="Executing a script twice. Orig_Index: ",oa="Firefox",pa="Firing Event: ",qa="HTMLEvents",ra="PSA ERROR: ",N="SCRIPT",sa="Unable to insert nodes, no context element found",ta="[psa_current_node]",ua="[psa_not_processed]",va='[type="text/psajs"]',wa="all",xa="application/ecmascript",ya="application/javascript",za="application/x-ecmascript",
Aa="application/x-javascript",Ba="complete",Ca="data:text/javascript,",Da="div",Ea="dw: ",O="error",Fa="handle_dw: ",Ga="id",Ha="language",P="load",Ia="loaded",Ja="loading",Q="on",Ka="onDOMContentLoaded",La="onafterscripts",Ma="onbeforescripts",R="onload",Na="onload: ",Oa="onreadystatechange",S="orig_index",Pa="pagespeed_orig_src",Qa="pagespeed_orig_type",Ra="psa_current_node",Sa="psa_dw_target",T="psa_not_processed",Ta="psanode",Ua="readyState",Va="readystatechange",U="script",Wa="src",Xa="text/",
Ya="text/ecmascript",Za="text/javascript",$a="text/javascript1.0",ab="text/javascript1.1",bb="text/javascript1.2",cb="text/javascript1.3",db="text/javascript1.4",eb="text/javascript1.5",fb="text/jscript",gb="text/livescript",hb="text/psajs",ib="text/x-ecmascript",jb="text/x-javascript",kb="true",V="type",lb="var ",W;j.pagespeed=j.pagespeed||{};var X=j.pagespeed;X.deferJsNs={};
var Y=X.deferJsNs,Z=function(){this.i=[];this.g=[];this.k=this.h=0;this.l=[];this.d=L;this.p={};this.H=[xa,ya,za,Aa,Ya,Za,$a,ab,bb,cb,db,eb,fb,gb,ib,jb];this.B=m.getElementById;this.r=m[B];this.W=m.write;this.X=m.writeln;this.V=m.open;this.U=m.close;this.C=m[y];this.F=j[y];this.D=m[A];this.G=j[A];this.c=m.createElement;this.t=this.s=this.a=0;this.f=this.q=c;this.m=f;this.n=0;this.o=[]},mb=g;W=Z[E];
W.log=function(a,b){this.g&&(this.g[r](L+a),b&&(this.g[r](b),"undefined"!=typeof console&&"undefined"!=typeof console.log&&console.log(ra+a+b.message)))};W.N=function(a,b){this.i.splice(b?b:this.i[D],0,a)};W.Q=function(a){var b=this.c[G](m,U);b.text=a;b[z](V,Za);a=this.A();a[K].insertBefore(b,a)};
W.$=function(){for(var a=m[B](ca),b=L,d=0;d<a[D];d++)if(a[d][u](Ga)){var e=a[d][H](Ga);if(e&&-1==e.search(/[-:.]/)&&-1==e.search(/^[0-9]/))try{j[e]&&j[e].tagName&&(b+=lb+e+fa+e+ba)}catch(i){this.log(M,i)}}b&&this.Q(b)};W.z=function(a,b,d){var e=a[H](Pa)||a[H](Wa);e?(d&&((new Image).src=e),this.addUrl(e,a,b)):(d=a.innerHTML||a.textContent||a.data)&&this.T(d,a,b)};
W.T=function(a,b,d){if(this.ca())this.addUrl(Ca+encodeURIComponent(a),b,d);else{this.g[r](ga+a);var e=this;this.N(function(){e.v(b);e.M()[z](Ra,L);try{e.Q(a)}catch(d){e.log(M,d)}e.log(ja+a);e.w()},d)}};Z[E].addStr=Z[E].T;
Z[E].addUrl=function(a,b,d){this.g[r](ha+a);var e=this;this.N(function(){e.v(b);var d=e.c[G](m,U);d[z](V,Za);var h=function(){e.log(ma+a);e.w()};Y.j(d,h);Y.e(d,O,h);9>e.b()&&Y.e(d,Va,function(){if(d[v]==Ba||d[v]==Ia)d.onreadystatechange=f,h()});d[z](Wa,a);var l=b.innerHTML||b.textContent||b.data;l&&d.appendChild(m.createTextNode(l));l=e.M();l[z](Ra,L);l[K].insertBefore(d,l)},d)};Z[E].addUrl=Z[E].addUrl;W=Z[E];
W.v=function(a){if(m[I]&&!(8>=this.b()))for(var b=m[I](ua),d=0;d<b[D];d++){var e=b.item(d);if(e==a)break;e[H](V)!=hb&&e.removeAttribute(T)}};W.aa=function(){for(var a=this.r[G](m,ca),b=0;b<a[D];b++)a.item(b)[z](T,L)};W.M=function(){var a=f;m[w]&&(a=m[w](va));return a};W.A=function(){var a;m[w]&&(a=m[w](ta));return a||this.r[G](m,Ta)[0]};W.ba=function(){var a=this.A();a.nodeName==N&&a[K][F](a)};
W.u=function(){if(!(5<=this.a))if(this.f&&(this.b()&&m[C].originalDoScroll&&(m[C].doScroll=m[C].originalDoScroll),k[x]&&delete m[v],this.b()&&k[x]&&delete m.all),m.getElementById=this.B,m[I]&&!(8>=this.b())&&(m.getElementsByTagName=this.r),n(m,this.c),m.open=this.V,m.close=this.U,m.write=this.W,m.writeln=this.X,this.f){this.a=5;this.Y();var a=this;m[v]!=Ba?Y.j(j,function(){a.K()}):(m.onreadystatechange&&this[s](m.onreadystatechange,m),j.onload&&($(j,R,j.onload),j.onload=f),this.K())}else this.a=1,
this.q=g,this.m&&(this[s](this.m),this.m=f)};W.K=function(){this[J](3);for(var a=m.body[B](Ta),b=a[D]-1;0<=b;b--)m.body[F](a[b]);this.a=6;this[J](4)};W.fa=function(a){for(;a=a[K];)if(a==m)return c;return g};W.O=function(a){for(var b=0,d=a[D],e=0;e<d;++e){var i=a[e],h=i[K],l=i.src,nb=i.textContent;(8<this.b()&&(!h||l==L&&nb==L)||!this.b()&&(!this.fa(i)||l==L))&&b++}return b};W.I=function(){if(4!=this.a)return g;var a=0;0!=this.k&&(a=this.O(this.l));return this.k==a?c:g};
W.ra=function(){return 6===this.a};Z[E].scriptsAreDone=Z[E].ra;Z[E].w=function(){this.J();this.ba();this.h<this.i[D]?(this.h++,this.i[this.h-1][G](j)):this.f?(this.a=4,this.v(),this[J](2),this.I()&&this.u()):this.u()};Z[E].S=function(a){for(var b=[],d=a[D],e=0;e<d;++e)b[r](a.item(e));return b};
Z[E].da=function(){if(this.q){var a=m.createElement(Ta);a[z](Sa,kb);m.body.appendChild(a);this.b()&&this.$();if(k[x])try{var b={configurable:c,get:function(){return Ja}};k[x](m,Ua,b)}catch(d){this.log(la,d)}if(this.b()&&(m[C].originalDoScroll=m[C].doScroll,m[C].doScroll=function(){throw"psa exception";},k[x]))try{b={configurable:c,get:function(){}},k[x](m,wa,b)}catch(e){this.log(ka,e)}}this.aa();this.Z();var i=this;m.writeln=function(a){i.L(a+aa)};m.write=function(a){i.L(a)};m.open=function(){};m.close=
function(){};m.getElementById=function(a){i.J();a=i.B[G](m,a);return a==f||a[u](T)?f:a};m[I]&&!(8>=i.b())&&(m.getElementsByTagName=function(a){return m[I](a+da)});n(m,function(a){var b=i.c[G](m,a);a.toLowerCase()==U&&(i.l[r](b),i.k++,a=function(){i.k--;var a=i.l[t](this);-1!=a&&(i.l.splice(a,1),i.I()&&i.u())},Y.j(b,a),Y.e(b,O,a));return b})};Z[E].execute=function(){if(2==this.a){var a=0;0!=this.n&&(a=this.O(this.o));this.n==a&&(n(m,this.c),this.P())}};Z[E].execute=Z[E].execute;
Z[E].P=function(){2==this.a&&(this.q&&this[J](1),this.a=3,this.da(),this.w())};Z[E].run=Z[E].P;W=Z[E];W.ia=function(a){var b=this.c[G](m,Da);b.innerHTML=ea+a;b[F](b.firstChild);return b};W.ka=function(a){var b=a[K];b&&b[F](a)};W.ha=function(a,b){for(var d=this.S(a),e=d[D],i=b[K],h=0;h<e;++h){var l=d[h];this.ka(l);i.insertBefore(l,b)}};W.ja=function(a){return a.nodeName!=N?g:a[u](V)?(a=a[H](V),!a||-1!=this.H[t](a)):a[u](Ha)?(a=a[H](Ha),!a||-1!=this.H[t](Xa+a.toLowerCase())):c};
W.R=function(a,b){if(a.childNodes)for(var d=this.S(a.childNodes),e=d[D],i=0;i<e;++i){var h=d[i];h.nodeName==N?this.ja(h)&&(b[r](h),h[z](Qa,h.type),h[z](V,hb),h[z](Pa,h.src),h[z](Wa,L),h[z](T,L)):this.R(h,b)}};W.ga=function(a,b){for(var d=a[D],e=0;e<d;++e)this.z(a[e],b+e,!!e)};W.ea=function(a,b,d){var a=this.ia(a),e=[];this.R(a,e);d?this.ha(a.childNodes,d):this.log(sa);this.ga(e,b)};W.J=function(){if(this.d!=L){this.log(Fa+this.d);var a=this.d;this.d=L;var b=this.A();this.ea(a,this.h,b)}};
W.L=function(a){this.log(Ea+a);this.d+=a};W.pa=function(a,b){this.log(Na+b.toString());6==this.a?b[G](a):$(a,R,b)};Z[E].addOnloadListeners=Z[E].pa;Z[E].la=function(a){$(j,Ma,a)};Z[E].addBeforeDeferRunFunctions=Z[E].la;Z[E].sa=function(a){$(j,La,a)};Z[E].addAfterDeferRunFunctions=Z[E].sa;Z[E].fireEvent=function(a){this.s=a;this.log(pa+a);for(var a=this.p[a]||[],b=0;b<a[D];++b)this[s](a[b]);a.length=0};Z[E].exec=function(a,b){try{a[G](b||j)}catch(d){this.log(M,d)}};
Z[E].Z=function(){var a=this;j[y]?(p(m,function(b,d,e){$(m,b,d,e,a.C)}),p(j,function(b,d,e){$(j,b,d,e,a.F)})):j[A]&&(q(m,function(b,d){$(m,b,d,void 0,a.D)}),q(j,function(b,d){$(j,b,d,void 0,a.G)}))};Z[E].Y=function(){j[y]?(p(m,this.C),p(j,this.F)):j[A]&&(q(m,this.D),q(j,this.G))};
var $=function(a,b,d,e,i){var h=X.deferJs;if(!(6<=h.a)){if(2>h.s&&(b==ia||b==Va||b==Ka||b==Oa))b=2;else if(3>h.s&&(b==P||b==R))b=3;else if(b==Ma)b=1;else if(b==La)b=4;else{i&&i[G](a,b,d,e);return}var l;3==b&&!(8>=h.b())&&(l=m.createEvent(qa),l.initEvent(P,g,g));h.p[b]||(h.p[b]=[]);h.p[b][r](function(){d[G](a,l)})}};
Z[E].oa=function(a){if(!(2<=this.a)){if(a){if(!mb){a();return}this.f=g;this.m=a}else this.f=c;this.a=2;for(var b=m[B](U),d=b[D],e=0;e<d;++e){var i=this.i[D]==this.h,h=b[e];h[H](V)==hb&&(a?h[H](S)==this.t&&(this.t++,this.z(h,void 0,!i)):(h[H](S)<this.t&&this.log(na+h[H](S),Error(L)),this.z(h,void 0,!i)))}}};Z[E].registerScriptTags=Z[E].oa;Y.j=function(a,b){Y.e(a,P,b)};X.addOnload=Y.j;
Y.e=function(a,b,d){if(a[y])a[y](b,d,g);else if(a[A])a[A](Q+b,d);else{var e=a[Q+b];a[Q+b]=function(){d[G](this);e&&e[G](this)}}};X.addHandler=Y.e;Z[E].ca=function(){return-1!=navigator.userAgent[t](oa)};Z[E].b=function(){var a=/(?:MSIE.(\d+\.\d+))/[s](navigator.userAgent);return a&&a[1]?m.documentMode||parseFloat(a[1]):NaN};
Z[E].na=function(){var a=this;n(m,function(b){var d=a.c[G](m,b);b.toLowerCase()==U&&(a.o[r](d),a.n++,b=function(){var b=a.o[t](this);-1!=b&&(a.o.splice(b,1),a.n--,a.execute())},Y.j(d,b),Y.e(d,O,b));return d})};Z[E].ma=function(){return mb};Z[E].isExperimentalMode=Z[E].ma;Y.qa=function(){if(!X.deferJs){j.localStorage&&(mb=j.localStorage.defer_js_experimental);var a=new Z;a.na();X.deferJs=a}};X.deferInit=Y.qa;})();
