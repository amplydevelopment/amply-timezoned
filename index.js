var R=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function tt(F){return F&&F.__esModule&&Object.prototype.hasOwnProperty.call(F,"default")?F.default:F}var at={exports:{}};(function(F,E){(function(H,T){F.exports=T()})(R,function(){var H=1e3,T=6e4,W=36e5,U="millisecond",m="second",S="minute",$="hour",A="day",D="week",C="month",g="quarter",y="year",v="date",i="Invalid Date",r=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,u=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,h={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(a){var e=["th","st","nd","rd"],t=a%100;return"["+a+(e[(t-20)%10]||e[t]||e[0])+"]"}},c=function(a,e,t){var s=String(a);return!s||s.length>=e?a:""+Array(e+1-s.length).join(t)+a},O={s:c,z:function(a){var e=-a.utcOffset(),t=Math.abs(e),s=Math.floor(t/60),n=t%60;return(e<=0?"+":"-")+c(s,2,"0")+":"+c(n,2,"0")},m:function a(e,t){if(e.date()<t.date())return-a(t,e);var s=12*(t.year()-e.year())+(t.month()-e.month()),n=e.clone().add(s,C),o=t-n<0,f=e.clone().add(s+(o?-1:1),C);return+(-(s+(t-n)/(o?n-f:f-n))||0)},a:function(a){return a<0?Math.ceil(a)||0:Math.floor(a)},p:function(a){return{M:C,y,w:D,d:A,D:v,h:$,m:S,s:m,ms:U,Q:g}[a]||String(a||"").toLowerCase().replace(/s$/,"")},u:function(a){return a===void 0}},M="en",b={};b[M]=h;var L="$isDayjsObject",z=function(a){return a instanceof Z||!(!a||!a[L])},Y=function a(e,t,s){var n;if(!e)return M;if(typeof e=="string"){var o=e.toLowerCase();b[o]&&(n=o),t&&(b[o]=t,n=o);var f=e.split("-");if(!n&&f.length>1)return a(f[0])}else{var l=e.name;b[l]=e,n=l}return!s&&n&&(M=n),n||!s&&M},p=function(a,e){if(z(a))return a.clone();var t=typeof e=="object"?e:{};return t.date=a,t.args=arguments,new Z(t)},d=O;d.l=Y,d.i=z,d.w=function(a,e){return p(a,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var Z=function(){function a(t){this.$L=Y(t.locale,null,!0),this.parse(t),this.$x=this.$x||t.x||{},this[L]=!0}var e=a.prototype;return e.parse=function(t){this.$d=function(s){var n=s.date,o=s.utc;if(n===null)return new Date(NaN);if(d.u(n))return new Date;if(n instanceof Date)return new Date(n);if(typeof n=="string"&&!/Z$/i.test(n)){var f=n.match(r);if(f){var l=f[2]-1||0,w=(f[7]||"0").substring(0,3);return o?new Date(Date.UTC(f[1],l,f[3]||1,f[4]||0,f[5]||0,f[6]||0,w)):new Date(f[1],l,f[3]||1,f[4]||0,f[5]||0,f[6]||0,w)}}return new Date(n)}(t),this.init()},e.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},e.$utils=function(){return d},e.isValid=function(){return this.$d.toString()!==i},e.isSame=function(t,s){var n=p(t);return this.startOf(s)<=n&&n<=this.endOf(s)},e.isAfter=function(t,s){return p(t)<this.startOf(s)},e.isBefore=function(t,s){return this.endOf(s)<p(t)},e.$g=function(t,s,n){return d.u(t)?this[s]:this.set(n,t)},e.unix=function(){return Math.floor(this.valueOf()/1e3)},e.valueOf=function(){return this.$d.getTime()},e.startOf=function(t,s){var n=this,o=!!d.u(s)||s,f=d.p(t),l=function(P,k){var N=d.w(n.$u?Date.UTC(n.$y,k,P):new Date(n.$y,k,P),n);return o?N:N.endOf(A)},w=function(P,k){return d.w(n.toDate()[P].apply(n.toDate("s"),(o?[0,0,0,0]:[23,59,59,999]).slice(k)),n)},x=this.$W,_=this.$M,I=this.$D,Q="set"+(this.$u?"UTC":"");switch(f){case y:return o?l(1,0):l(31,11);case C:return o?l(1,_):l(0,_+1);case D:var V=this.$locale().weekStart||0,X=(x<V?x+7:x)-V;return l(o?I-X:I+(6-X),_);case A:case v:return w(Q+"Hours",0);case $:return w(Q+"Minutes",1);case S:return w(Q+"Seconds",2);case m:return w(Q+"Milliseconds",3);default:return this.clone()}},e.endOf=function(t){return this.startOf(t,!1)},e.$set=function(t,s){var n,o=d.p(t),f="set"+(this.$u?"UTC":""),l=(n={},n[A]=f+"Date",n[v]=f+"Date",n[C]=f+"Month",n[y]=f+"FullYear",n[$]=f+"Hours",n[S]=f+"Minutes",n[m]=f+"Seconds",n[U]=f+"Milliseconds",n)[o],w=o===A?this.$D+(s-this.$W):s;if(o===C||o===y){var x=this.clone().set(v,1);x.$d[l](w),x.init(),this.$d=x.set(v,Math.min(this.$D,x.daysInMonth())).$d}else l&&this.$d[l](w);return this.init(),this},e.set=function(t,s){return this.clone().$set(t,s)},e.get=function(t){return this[d.p(t)]()},e.add=function(t,s){var n,o=this;t=Number(t);var f=d.p(s),l=function(_){var I=p(o);return d.w(I.date(I.date()+Math.round(_*t)),o)};if(f===C)return this.set(C,this.$M+t);if(f===y)return this.set(y,this.$y+t);if(f===A)return l(1);if(f===D)return l(7);var w=(n={},n[S]=T,n[$]=W,n[m]=H,n)[f]||1,x=this.$d.getTime()+t*w;return d.w(x,this)},e.subtract=function(t,s){return this.add(-1*t,s)},e.format=function(t){var s=this,n=this.$locale();if(!this.isValid())return n.invalidDate||i;var o=t||"YYYY-MM-DDTHH:mm:ssZ",f=d.z(this),l=this.$H,w=this.$m,x=this.$M,_=n.weekdays,I=n.months,Q=n.meridiem,V=function(k,N,J,q){return k&&(k[N]||k(s,o))||J[N].slice(0,q)},X=function(k){return d.s(l%12||12,k,"0")},P=Q||function(k,N,J){var q=k<12?"AM":"PM";return J?q.toLowerCase():q};return o.replace(u,function(k,N){return N||function(J){switch(J){case"YY":return String(s.$y).slice(-2);case"YYYY":return d.s(s.$y,4,"0");case"M":return x+1;case"MM":return d.s(x+1,2,"0");case"MMM":return V(n.monthsShort,x,I,3);case"MMMM":return V(I,x);case"D":return s.$D;case"DD":return d.s(s.$D,2,"0");case"d":return String(s.$W);case"dd":return V(n.weekdaysMin,s.$W,_,2);case"ddd":return V(n.weekdaysShort,s.$W,_,3);case"dddd":return _[s.$W];case"H":return String(l);case"HH":return d.s(l,2,"0");case"h":return X(1);case"hh":return X(2);case"a":return P(l,w,!0);case"A":return P(l,w,!1);case"m":return String(w);case"mm":return d.s(w,2,"0");case"s":return String(s.$s);case"ss":return d.s(s.$s,2,"0");case"SSS":return d.s(s.$ms,3,"0");case"Z":return f}return null}(k)||f.replace(":","")})},e.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},e.diff=function(t,s,n){var o,f=this,l=d.p(s),w=p(t),x=(w.utcOffset()-this.utcOffset())*T,_=this-w,I=function(){return d.m(f,w)};switch(l){case y:o=I()/12;break;case C:o=I();break;case g:o=I()/3;break;case D:o=(_-x)/6048e5;break;case A:o=(_-x)/864e5;break;case $:o=_/W;break;case S:o=_/T;break;case m:o=_/H;break;default:o=_}return n?o:d.a(o)},e.daysInMonth=function(){return this.endOf(C).$D},e.$locale=function(){return b[this.$L]},e.locale=function(t,s){if(!t)return this.$L;var n=this.clone(),o=Y(t,s,!0);return o&&(n.$L=o),n},e.clone=function(){return d.w(this.$d,this)},e.toDate=function(){return new Date(this.valueOf())},e.toJSON=function(){return this.isValid()?this.toISOString():null},e.toISOString=function(){return this.$d.toISOString()},e.toString=function(){return this.$d.toUTCString()},a}(),j=Z.prototype;return p.prototype=j,[["$ms",U],["$s",m],["$m",S],["$H",$],["$W",A],["$M",C],["$y",y],["$D",v]].forEach(function(a){j[a[1]]=function(e){return this.$g(e,a[0],a[1])}}),p.extend=function(a,e){return a.$i||(a(e,Z,p),a.$i=!0),p},p.locale=Y,p.isDayjs=z,p.unix=function(a){return p(1e3*a)},p.en=b[M],p.Ls=b,p.p={},p})})(at);var ct=at.exports;const B=tt(ct);var ot={exports:{}};(function(F,E){(function(H,T){F.exports=T()})(R,function(){var H={year:0,month:1,day:2,hour:3,minute:4,second:5},T={};return function(W,U,m){var S,$=function(g,y,v){v===void 0&&(v={});var i=new Date(g),r=function(u,h){h===void 0&&(h={});var c=h.timeZoneName||"short",O=u+"|"+c,M=T[O];return M||(M=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:u,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:c}),T[O]=M),M}(y,v);return r.formatToParts(i)},A=function(g,y){for(var v=$(g,y),i=[],r=0;r<v.length;r+=1){var u=v[r],h=u.type,c=u.value,O=H[h];O>=0&&(i[O]=parseInt(c,10))}var M=i[3],b=M===24?0:M,L=i[0]+"-"+i[1]+"-"+i[2]+" "+b+":"+i[4]+":"+i[5]+":000",z=+g;return(m.utc(L).valueOf()-(z-=z%1e3))/6e4},D=U.prototype;D.tz=function(g,y){g===void 0&&(g=S);var v,i=this.utcOffset(),r=this.toDate(),u=r.toLocaleString("en-US",{timeZone:g}),h=Math.round((r-new Date(u))/1e3/60),c=15*-Math.round(r.getTimezoneOffset()/15)-h;if(!Number(c))v=this.utcOffset(0,y);else if(v=m(u,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(c,!0),y){var O=v.utcOffset();v=v.add(i-O,"minute")}return v.$x.$timezone=g,v},D.offsetName=function(g){var y=this.$x.$timezone||m.tz.guess(),v=$(this.valueOf(),y,{timeZoneName:g}).find(function(i){return i.type.toLowerCase()==="timezonename"});return v&&v.value};var C=D.startOf;D.startOf=function(g,y){if(!this.$x||!this.$x.$timezone)return C.call(this,g,y);var v=m(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return C.call(v,g,y).tz(this.$x.$timezone,!0)},m.tz=function(g,y,v){var i=v&&y,r=v||y||S,u=A(+m(),r);if(typeof g!="string")return m(g).tz(r);var h=function(b,L,z){var Y=b-60*L*1e3,p=A(Y,z);if(L===p)return[Y,L];var d=A(Y-=60*(p-L)*1e3,z);return p===d?[Y,p]:[b-60*Math.min(p,d)*1e3,Math.max(p,d)]}(m.utc(g,i).valueOf(),u,r),c=h[0],O=h[1],M=m(c).utcOffset(O);return M.$x.$timezone=r,M},m.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},m.tz.setDefault=function(g){S=g}}})})(ot);var ht=ot.exports;const dt=tt(ht);var ut={exports:{}};(function(F,E){(function(H,T){F.exports=T()})(R,function(){var H="minute",T=/[+-]\d\d(?::?\d\d)?/g,W=/([+-]|\d\d)/g;return function(U,m,S){var $=m.prototype;S.utc=function(i){var r={date:i,utc:!0,args:arguments};return new m(r)},$.utc=function(i){var r=S(this.toDate(),{locale:this.$L,utc:!0});return i?r.add(this.utcOffset(),H):r},$.local=function(){return S(this.toDate(),{locale:this.$L,utc:!1})};var A=$.parse;$.parse=function(i){i.utc&&(this.$u=!0),this.$utils().u(i.$offset)||(this.$offset=i.$offset),A.call(this,i)};var D=$.init;$.init=function(){if(this.$u){var i=this.$d;this.$y=i.getUTCFullYear(),this.$M=i.getUTCMonth(),this.$D=i.getUTCDate(),this.$W=i.getUTCDay(),this.$H=i.getUTCHours(),this.$m=i.getUTCMinutes(),this.$s=i.getUTCSeconds(),this.$ms=i.getUTCMilliseconds()}else D.call(this)};var C=$.utcOffset;$.utcOffset=function(i,r){var u=this.$utils().u;if(u(i))return this.$u?0:u(this.$offset)?C.call(this):this.$offset;if(typeof i=="string"&&(i=function(M){M===void 0&&(M="");var b=M.match(T);if(!b)return null;var L=(""+b[0]).match(W)||["-",0,0],z=L[0],Y=60*+L[1]+ +L[2];return Y===0?0:z==="+"?Y:-Y}(i),i===null))return this;var h=Math.abs(i)<=16?60*i:i,c=this;if(r)return c.$offset=h,c.$u=i===0,c;if(i!==0){var O=this.$u?this.toDate().getTimezoneOffset():-1*this.utcOffset();(c=this.local().add(h+O,H)).$offset=h,c.$x.$localOffset=O}else c=this.utc();return c};var g=$.format;$.format=function(i){var r=i||(this.$u?"YYYY-MM-DDTHH:mm:ss[Z]":"");return g.call(this,r)},$.valueOf=function(){var i=this.$utils().u(this.$offset)?0:this.$offset+(this.$x.$localOffset||this.$d.getTimezoneOffset());return this.$d.valueOf()-6e4*i},$.isUTC=function(){return!!this.$u},$.toISOString=function(){return this.toDate().toISOString()},$.toString=function(){return this.toDate().toUTCString()};var y=$.toDate;$.toDate=function(i){return i==="s"&&this.$offset?S(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate():y.call(this)};var v=$.diff;$.diff=function(i,r,u){if(i&&this.$u===i.$u)return v.call(this,i,r,u);var h=this.local(),c=S(i).local();return v.call(h,c,r,u)}}})})(ut);var lt=ut.exports;const mt=tt(lt);var ft={exports:{}};(function(F,E){(function(H,T){F.exports=T()})(R,function(){var H={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},T=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,W=/\d/,U=/\d\d/,m=/\d\d?/,S=/\d*[^-_:/,()\s\d]+/,$={},A=function(r){return(r=+r)+(r>68?1900:2e3)},D=function(r){return function(u){this[r]=+u}},C=[/[+-]\d\d:?(\d\d)?|Z/,function(r){(this.zone||(this.zone={})).offset=function(u){if(!u||u==="Z")return 0;var h=u.match(/([+-]|\d\d)/g),c=60*h[1]+(+h[2]||0);return c===0?0:h[0]==="+"?-c:c}(r)}],g=function(r){var u=$[r];return u&&(u.indexOf?u:u.s.concat(u.f))},y=function(r,u){var h,c=$.meridiem;if(c){for(var O=1;O<=24;O+=1)if(r.indexOf(c(O,0,u))>-1){h=O>12;break}}else h=r===(u?"pm":"PM");return h},v={A:[S,function(r){this.afternoon=y(r,!1)}],a:[S,function(r){this.afternoon=y(r,!0)}],Q:[W,function(r){this.month=3*(r-1)+1}],S:[W,function(r){this.milliseconds=100*+r}],SS:[U,function(r){this.milliseconds=10*+r}],SSS:[/\d{3}/,function(r){this.milliseconds=+r}],s:[m,D("seconds")],ss:[m,D("seconds")],m:[m,D("minutes")],mm:[m,D("minutes")],H:[m,D("hours")],h:[m,D("hours")],HH:[m,D("hours")],hh:[m,D("hours")],D:[m,D("day")],DD:[U,D("day")],Do:[S,function(r){var u=$.ordinal,h=r.match(/\d+/);if(this.day=h[0],u)for(var c=1;c<=31;c+=1)u(c).replace(/\[|\]/g,"")===r&&(this.day=c)}],w:[m,D("week")],ww:[U,D("week")],M:[m,D("month")],MM:[U,D("month")],MMM:[S,function(r){var u=g("months"),h=(g("monthsShort")||u.map(function(c){return c.slice(0,3)})).indexOf(r)+1;if(h<1)throw new Error;this.month=h%12||h}],MMMM:[S,function(r){var u=g("months").indexOf(r)+1;if(u<1)throw new Error;this.month=u%12||u}],Y:[/[+-]?\d+/,D("year")],YY:[U,function(r){this.year=A(r)}],YYYY:[/\d{4}/,D("year")],Z:C,ZZ:C};function i(r){var u,h;u=r,h=$&&$.formats;for(var c=(r=u.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(p,d,Z){var j=Z&&Z.toUpperCase();return d||h[Z]||H[Z]||h[j].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(a,e,t){return e||t.slice(1)})})).match(T),O=c.length,M=0;M<O;M+=1){var b=c[M],L=v[b],z=L&&L[0],Y=L&&L[1];c[M]=Y?{regex:z,parser:Y}:b.replace(/^\[|\]$/g,"")}return function(p){for(var d={},Z=0,j=0;Z<O;Z+=1){var a=c[Z];if(typeof a=="string")j+=a.length;else{var e=a.regex,t=a.parser,s=p.slice(j),n=e.exec(s)[0];t.call(d,n),p=p.replace(n,"")}}return function(o){var f=o.afternoon;if(f!==void 0){var l=o.hours;f?l<12&&(o.hours+=12):l===12&&(o.hours=0),delete o.afternoon}}(d),d}}return function(r,u,h){h.p.customParseFormat=!0,r&&r.parseTwoDigitYear&&(A=r.parseTwoDigitYear);var c=u.prototype,O=c.parse;c.parse=function(M){var b=M.date,L=M.utc,z=M.args;this.$u=L;var Y=z[1];if(typeof Y=="string"){var p=z[2]===!0,d=z[3]===!0,Z=p||d,j=z[2];d&&(j=z[2]),$=this.$locale(),!p&&j&&($=h.Ls[j]),this.$d=function(s,n,o,f){try{if(["x","X"].indexOf(n)>-1)return new Date((n==="X"?1e3:1)*s);var l=i(n)(s),w=l.year,x=l.month,_=l.day,I=l.hours,Q=l.minutes,V=l.seconds,X=l.milliseconds,P=l.zone,k=l.week,N=new Date,J=_||(w||x?1:N.getDate()),q=w||N.getFullYear(),G=0;w&&!x||(G=x>0?x-1:N.getMonth());var K,et=I||0,nt=Q||0,rt=V||0,it=X||0;return P?new Date(Date.UTC(q,G,J,et,nt,rt,it+60*P.offset*1e3)):o?new Date(Date.UTC(q,G,J,et,nt,rt,it)):(K=new Date(q,G,J,et,nt,rt,it),k&&(K=f(K).week(k).toDate()),K)}catch{return new Date("")}}(b,Y,L,h),this.init(),j&&j!==!0&&(this.$L=this.locale(j).$L),Z&&b!=this.format(Y)&&(this.$d=new Date("")),$={}}else if(Y instanceof Array)for(var a=Y.length,e=1;e<=a;e+=1){z[1]=Y[e-1];var t=h.apply(this,z);if(t.isValid()){this.$d=t.$d,this.$L=t.$L,this.init();break}e===a&&(this.$d=new Date(""))}else O.call(this,M)}}})})(ft);var $t=ft.exports;const vt=tt($t);B.extend(mt);B.extend(dt);B.extend(vt);const st=B.tz.guess();document.addEventListener("DOMContentLoaded",()=>{Array.from(document.querySelectorAll("[amp-type=date-format]")).forEach(E=>{var W;const H=((W=E.textContent)==null?void 0:W.trim())||"",T=E.getAttribute("amp-format");if(T){const U=E.getAttribute("amp-timezone")||st;if(U)try{const m=E.hasAttribute("amp-current-format")?B.tz(H,E.getAttribute("amp-current-format")||"",U):B.tz(H,U);if(m.isValid()){const S=m.tz(st).format(T);E.setAttribute("amp-date-status","success"),E.setAttribute("amp-date-actual",H),E.textContent=S}else E.setAttribute("amp-date-status","failed")}catch{E.setAttribute("amp-date-status","failed")}}})});
