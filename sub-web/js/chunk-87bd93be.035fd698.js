(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-87bd93be"],{"04d1":function(e,t,o){var r=o("342f"),l=r.match(/firefox\/(\d+)/i);e.exports=!!l&&+l[1]},"0cb2":function(e,t,o){var r=o("e330"),l=o("7b0b"),a=Math.floor,n=r("".charAt),i=r("".replace),s=r("".slice),c=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,u=/\$([$&'`]|\d{1,2})/g;e.exports=function(e,t,o,r,f,m){var b=o+e.length,d=r.length,p=u;return void 0!==f&&(f=l(f),p=c),i(m,p,(function(l,i){var c;switch(n(i,0)){case"$":return"$";case"&":return e;case"`":return s(t,0,o);case"'":return s(t,b);case"<":c=f[s(i,1,-1)];break;default:var u=+i;if(0===u)return l;if(u>d){var m=a(u/10);return 0===m?l:m<=d?void 0===r[m-1]?n(i,1):r[m-1]+n(i,1):l}c=r[u-1]}return void 0===c?"":c}))}},"14c3":function(e,t,o){var r=o("da84"),l=o("c65b"),a=o("825a"),n=o("1626"),i=o("c6b6"),s=o("9263"),c=r.TypeError;e.exports=function(e,t){var o=e.exec;if(n(o)){var r=l(o,e,t);return null!==r&&a(r),r}if("RegExp"===i(e))return l(s,e,t);throw c("RegExp#exec called on incompatible receiver")}},"25f0":function(e,t,o){"use strict";var r=o("e330"),l=o("5e77").PROPER,a=o("6eeb"),n=o("825a"),i=o("3a9b"),s=o("577e"),c=o("d039"),u=o("ad6d"),f="toString",m=RegExp.prototype,b=m[f],d=r(u),p=c((function(){return"/a/b"!=b.call({source:"a",flags:"b"})})),h=l&&b.name!=f;(p||h)&&a(RegExp.prototype,f,(function(){var e=n(this),t=s(e.source),o=e.flags,r=s(void 0===o&&i(m,e)&&!("flags"in m)?d(e):o);return"/"+t+"/"+r}),{unsafe:!0})},"4de4":function(e,t,o){"use strict";var r=o("23e7"),l=o("b727").filter,a=o("1dde"),n=a("filter");r({target:"Array",proto:!0,forced:!n},{filter:function(e){return l(this,e,arguments.length>1?arguments[1]:void 0)}})},"4e82":function(e,t,o){"use strict";var r=o("23e7"),l=o("e330"),a=o("59ed"),n=o("7b0b"),i=o("07fa"),s=o("577e"),c=o("d039"),u=o("addb"),f=o("a640"),m=o("04d1"),b=o("d998"),d=o("2d00"),p=o("512c"),h=[],v=l(h.sort),S=l(h.push),g=c((function(){h.sort(void 0)})),C=c((function(){h.sort(null)})),x=f("sort"),y=!c((function(){if(d)return d<70;if(!(m&&m>3)){if(b)return!0;if(p)return p<603;var e,t,o,r,l="";for(e=65;e<76;e++){switch(t=String.fromCharCode(e),e){case 66:case 69:case 70:case 72:o=3;break;case 68:case 71:o=4;break;default:o=2}for(r=0;r<47;r++)h.push({k:t+r,v:o})}for(h.sort((function(e,t){return t.v-e.v})),r=0;r<h.length;r++)t=h[r].k.charAt(0),l.charAt(l.length-1)!==t&&(l+=t);return"DGBEFHACIJK"!==l}})),k=g||!C||!x||!y,w=function(e){return function(t,o){return void 0===o?-1:void 0===t?1:void 0!==e?+e(t,o)||0:s(t)>s(o)?1:-1}};r({target:"Array",proto:!0,forced:k},{sort:function(e){void 0!==e&&a(e);var t=n(this);if(y)return void 0===e?v(t):v(t,e);var o,r,l=[],s=i(t);for(r=0;r<s;r++)r in t&&S(l,t[r]);u(l,w(e)),o=l.length,r=0;while(r<o)t[r]=l[r++];while(r<s)delete t[r++];return t}})},"512c":function(e,t,o){var r=o("342f"),l=r.match(/AppleWebKit\/(\d+)\./);e.exports=!!l&&+l[1]},5319:function(e,t,o){"use strict";var r=o("2ba4"),l=o("c65b"),a=o("e330"),n=o("d784"),i=o("d039"),s=o("825a"),c=o("1626"),u=o("5926"),f=o("50c4"),m=o("577e"),b=o("1d80"),d=o("8aa5"),p=o("dc4a"),h=o("0cb2"),v=o("14c3"),S=o("b622"),g=S("replace"),C=Math.max,x=Math.min,y=a([].concat),k=a([].push),w=a("".indexOf),R=a("".slice),A=function(e){return void 0===e?e:String(e)},L=function(){return"$0"==="a".replace(/./,"$0")}(),_=function(){return!!/./[g]&&""===/./[g]("a","$0")}(),M=!i((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")}));n("replace",(function(e,t,o){var a=_?"$":"$0";return[function(e,o){var r=b(this),a=void 0==e?void 0:p(e,g);return a?l(a,e,r,o):l(t,m(r),e,o)},function(e,l){var n=s(this),i=m(e);if("string"==typeof l&&-1===w(l,a)&&-1===w(l,"$<")){var b=o(t,n,i,l);if(b.done)return b.value}var p=c(l);p||(l=m(l));var S=n.global;if(S){var g=n.unicode;n.lastIndex=0}var L=[];while(1){var _=v(n,i);if(null===_)break;if(k(L,_),!S)break;var M=m(_[0]);""===M&&(n.lastIndex=d(i,f(n.lastIndex),g))}for(var U="",$=0,j=0;j<L.length;j++){_=L[j];for(var F=m(_[0]),O=C(x(u(_.index),i.length),0),N=[],I=1;I<_.length;I++)k(N,A(_[I]));var T=_.groups;if(p){var B=y([F],N,O,i);void 0!==T&&k(B,T);var P=m(r(l,void 0,B))}else P=h(F,i,O,N,T,l);O>=$&&(U+=R(i,$,O)+P,$=O+F.length)}return U+R(i,$)}]}),!M||!L||_)},"8aa5":function(e,t,o){"use strict";var r=o("6547").charAt;e.exports=function(e,t,o){return t+(o?r(e,t).length:1)}},a640:function(e,t,o){"use strict";var r=o("d039");e.exports=function(e,t){var o=[][e];return!!o&&r((function(){o.call(null,t||function(){throw 1},1)}))}},a9c7:function(e,t,o){"use strict";o.r(t);var r=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("el-row",{staticStyle:{"margin-top":"10px"}},[o("el-col",[o("el-card",[o("div",{attrs:{slot:"header"},slot:"header"},[e._v(" Firefly-SubConverter "),o("svg-icon",{staticStyle:{"margin-left":"20px"},attrs:{"icon-class":"github"},on:{click:e.goToProject}}),o("svg-icon",{staticStyle:{"margin-left":"20px"},attrs:{"icon-class":"telegram"},on:{click:e.gotoTgChannel}}),o("div",{staticStyle:{display:"inline-block",position:"absolute",right:"20px"}},[e._v(" "+e._s(e.backendVersion)+" ")])],1),o("el-container",[o("el-form",{staticStyle:{width:"100%"},attrs:{model:e.form,"label-width":"80px","label-position":"left"}},[o("el-form-item",{attrs:{label:"模式设置:"}},[o("el-radio",{attrs:{label:"1"},model:{value:e.advanced,callback:function(t){e.advanced=t},expression:"advanced"}},[e._v("基础模式")]),o("el-radio",{attrs:{label:"2"},model:{value:e.advanced,callback:function(t){e.advanced=t},expression:"advanced"}},[e._v("进阶模式")])],1),o("el-form-item",{attrs:{label:"订阅链接:"}},[o("el-input",{attrs:{type:"textarea",rows:"3",placeholder:"支持各种订阅链接或单节点链接，多个链接每行一个或用 | 分隔"},on:{blur:e.saveSubUrl},model:{value:e.form.sourceSubUrl,callback:function(t){e.$set(e.form,"sourceSubUrl",t)},expression:"form.sourceSubUrl"}})],1),o("el-form-item",{attrs:{label:"客户端项:"}},[o("el-select",{staticStyle:{width:"100%"},model:{value:e.form.clientType,callback:function(t){e.$set(e.form,"clientType",t)},expression:"form.clientType"}},e._l(e.options.clientTypes,(function(e,t){return o("el-option",{key:t,attrs:{label:t,value:e}})})),1)],1),o("el-form-item",{attrs:{label:"远程配置:"}},[o("el-select",{staticStyle:{width:"100%"},attrs:{"allow-create":"",filterable:"",placeholder:"请选择"},model:{value:e.form.remoteConfig,callback:function(t){e.$set(e.form,"remoteConfig",t)},expression:"form.remoteConfig"}},e._l(e.options.remoteConfig,(function(t){return o("el-option-group",{key:t.label,attrs:{label:t.label}},e._l(t.options,(function(e){return o("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)})),1)],1),o("el-form-item",{attrs:{label:"后端地址:"}},[o("el-select",{staticStyle:{width:"100%"},attrs:{"allow-create":"",filterable:"",placeholder:"请选择"},model:{value:e.form.customBackend,callback:function(t){e.$set(e.form,"customBackend",t)},expression:"form.customBackend"}},e._l(e.options.customBackend,(function(e,t){return o("el-option",{key:t,attrs:{label:t,value:e}})})),1)],1),"2"===e.advanced?o("div",[o("el-form-item",{attrs:{label:"包含节点:"}},[o("el-input",{attrs:{placeholder:"节点名包含的关键字，支持正则"},model:{value:e.form.includeRemarks,callback:function(t){e.$set(e.form,"includeRemarks",t)},expression:"form.includeRemarks"}})],1),o("el-form-item",{attrs:{label:"排除节点:"}},[o("el-input",{attrs:{placeholder:"节点名不包含的关键字，支持正则"},model:{value:e.form.excludeRemarks,callback:function(t){e.$set(e.form,"excludeRemarks",t)},expression:"form.excludeRemarks"}})],1),o("el-form-item",{attrs:{label:"输出文件名:"}},[o("el-input",{attrs:{placeholder:"返回的订阅文件名"},model:{value:e.form.filename,callback:function(t){e.$set(e.form,"filename",t)},expression:"form.filename"}})],1),o("el-form-item",{attrs:{label:"TUN & DNS:"}},[o("el-input",{attrs:{placeholder:"tap | tun"},model:{value:e.form.clashdns,callback:function(t){e.$set(e.form,"clashdns",t)},expression:"form.clashdns"}})],1),o("el-form-item",{attrs:{"label-width":"0px"}},[o("el-row",{attrs:{type:"flex"}},[o("el-col",[o("el-checkbox",{attrs:{label:"Emoji",border:""},model:{value:e.form.emoji,callback:function(t){e.$set(e.form,"emoji",t)},expression:"form.emoji"}})],1),o("el-col",[o("el-checkbox",{staticStyle:{"margin-left":"10px"},attrs:{border:"",label:"Clash新字段",placement:"bottom"},model:{value:e.form.new_name,callback:function(t){e.$set(e.form,"new_name",t)},expression:"form.new_name"}})],1),o("el-popover",{attrs:{placement:"bottom"},model:{value:e.form.extraset,callback:function(t){e.$set(e.form,"extraset",t)},expression:"form.extraset"}},[o("el-row",[o("el-checkbox",{attrs:{label:"启用 UDP"},model:{value:e.form.udp,callback:function(t){e.$set(e.form,"udp",t)},expression:"form.udp"}})],1),o("el-row",[o("el-checkbox",{attrs:{label:"节点类型"},model:{value:e.form.appendType,callback:function(t){e.$set(e.form,"appendType",t)},expression:"form.appendType"}})],1),o("el-row",[o("el-checkbox",{attrs:{label:"排序节点"},model:{value:e.form.sort,callback:function(t){e.$set(e.form,"sort",t)},expression:"form.sort"}})],1),o("el-row",[o("el-checkbox",{attrs:{label:"过滤非法节点"},model:{value:e.form.fdn,callback:function(t){e.$set(e.form,"fdn",t)},expression:"form.fdn"}})],1),o("el-row",[o("el-checkbox",{attrs:{label:"TCP Fast Open"},model:{value:e.form.tfo,callback:function(t){e.$set(e.form,"tfo",t)},expression:"form.tfo"}})],1),o("el-row",[o("el-checkbox",{attrs:{label:"Skip Cert Verify"},model:{value:e.form.scv,callback:function(t){e.$set(e.form,"scv",t)},expression:"form.scv"}})],1),o("el-row",[o("el-checkbox",{attrs:{label:"输出为 Node List"},model:{value:e.form.nodeList,callback:function(t){e.$set(e.form,"nodeList",t)},expression:"form.nodeList"}})],1),o("el-button",{attrs:{slot:"reference"},slot:"reference"},[e._v("节点处理")])],1),o("el-popover",{staticStyle:{"margin-left":"10px"},attrs:{placement:"bottom"},model:{value:e.form.rule,callback:function(t){e.$set(e.form,"rule",t)},expression:"form.rule"}},[o("el-row",[o("el-checkbox",{attrs:{label:"展开规则"},model:{value:e.form.expand,callback:function(t){e.$set(e.form,"expand",t)},expression:"form.expand"}})],1),o("el-row",[o("el-checkbox",{attrs:{label:"Classic Rule Provider"},model:{value:e.form.classic,callback:function(t){e.$set(e.form,"classic",t)},expression:"form.classic"}})],1),o("el-button",{attrs:{slot:"reference"},slot:"reference"},[e._v("Rule Provider 选项")])],1)],1)],1)],1):e._e(),o("div",{staticStyle:{"margin-top":"50px"}}),o("el-divider",{attrs:{"content-position":"center"}},[o("i",{staticClass:"el-icon-magic-stick"})]),o("el-form-item",{attrs:{label:"定制订阅:"}},[o("el-input",{staticClass:"copy-content",attrs:{disabled:""},model:{value:e.customSubUrl,callback:function(t){e.customSubUrl=t},expression:"customSubUrl"}},[o("el-button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:e.customSubUrl,expression:"customSubUrl",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:e.onCopy,expression:"onCopy",arg:"success"}],ref:"copy-btn",attrs:{slot:"append",icon:"el-icon-document-copy"},slot:"append"},[e._v("复制")])],1)],1),o("el-form-item",{staticStyle:{"margin-top":"40px","text-align":"center"},attrs:{"label-width":"0px"}},[o("el-button",{staticStyle:{width:"120px"},attrs:{type:"danger",disabled:0===e.form.sourceSubUrl.length},on:{click:e.makeUrl}},[e._v("生成订阅链接")]),o("el-button",{staticStyle:{width:"120px"},attrs:{type:"primary",icon:"el-icon-connection",disabled:0===e.customSubUrl.length},on:{click:e.clashInstall}},[e._v("一键导入Clash")])],1)],1)],1)],1)],1)],1)],1)},l=[],a=(o("ac1f"),o("00b4"),o("5319"),o("b64b"),o("d3b7"),o("25f0"),o("4e82"),o("4de4"),o("e9c4"),"https://github.com/LM-Firefly/sub-web"),n="https://raw.githubusercontent.com/LM-Firefly/Rules/master/Subconverter-base/MultiSub-NoReject.ini",i="https://github.com/tindy2013/subconverter/releases",s="https://firefly-sub.herokuapp.com/sub?",c="https://t.me/subconverter_discuss",u={data:function(){var e={backendVersion:"",advanced:"1",isPC:!0,options:{clientTypes:{Clash:"clash",Surge3:"surge&ver=3",Surge4:"surge&ver=4",Quantumult:"quan","Quantumult X":"quanx",Loon:"loon",Mellow:"mellow",Surfboard:"surfboard","Shadowsocks(SIP002)":"ss","Shadowsocks Android(SIP008)":"sssub",ShadowsocksR:"ssr",ShadowsocksD:"ssd",V2Ray:"v2ray",Trojan:"trojan","混合订阅（mixed）":"mixed","自动判断客户端":"auto"},customBackend:{"localhost:25500 本地版":"http://localhost:25500/sub?","firefly-sub.herokuapp.com":"https://firefly-sub.herokuapp.com/sub?","firefly-sub.vercel.app":"https://firefly-sub.vercel.app/sub?","firefly-sub.up.railway.app":"https://firefly-sub.up.railway.app/sub?","sub.ccsub.site(CordCloud机场提供)":"https://subweb.ccsub.site/sub?"},backendOptions:[{value:"http://localhost:25500/sub?"},{value:"https://firefly-sub.herokuapp.com/sub?"},{value:"https://firefly-sub.vercel.app/sub?"},{value:"https://firefly-sub.up.railway.app/sub?"},{value:"https://subweb.ccsub.site/sub?"}],remoteConfig:[{label:"默认",options:[{label:"不选，由接口提供方提供",value:""}]},{label:"LM-Firefly (Online, 与Github 同步)",options:[{label:"AIO",value:"https://raw.githubusercontent.com/LM-Firefly/Rules/master/Subconverter-base/AIO.ini"},{label:"AIO-NoReject",value:"https://raw.githubusercontent.com/LM-Firefly/Rules/master/Subconverter-base/AIO-NoReject.ini"},{label:"MultiSub-NoReject",value:"https://raw.githubusercontent.com/LM-Firefly/Rules/master/Subconverter-base/MultiSub-NoReject.ini"},{label:"AllSub-NoReject",value:"https://raw.githubusercontent.com/LM-Firefly/Rules/master/Subconverter-base/AllSub-NoReject.ini"},{label:"CordCloud",value:"https://raw.githubusercontent.com/LM-Firefly/Rules/master/Subconverter-base/CordCloud.ini"},{label:"CordCloud-NoReject",value:"https://raw.githubusercontent.com/LM-Firefly/Rules/master/Subconverter-base/CordCloud-NoReject.ini"},{label:"AIO-Classic",value:"https://raw.githubusercontent.com/LM-Firefly/Rules/master/Subconverter-base/AIO-Classic.ini"}]},{label:"ACL4SSR (Online, 与Github 同步)",options:[{label:"ACL4SSR 默认版 分组比较全",value:"https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online.ini"},{label:"ACL4SSR_AdblockPlus 更多去广告",value:"https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_AdblockPlus.ini"},{label:"ACL4SSR_Full_MultiMode 全分组 自动测速、故障转移、负载均衡",value:"https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Full_MultiMode.ini"},{label:"ACL4SSR_Full 全分组 重度用户使用",value:"https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Full.ini"},{label:"ACL4SSR_Full_AdblockPlus 全分组 重度用户使用 更多去广告",value:"https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Full_AdblockPlus.ini"},{label:"ACL4SSR_Full_Netflix 全分组 重度用户使用 奈飞全量",value:"https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Full_Netflix.ini"},{label:"ACL4SSR_Full_NoAuto 全分组 无自动测速 重度用户使用",value:"https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Full_NoAuto.ini"},{label:"ACL4SSR_Mini 精简版",value:"https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Mini.ini"},{label:"ACL4SSR_Mini_MultiCountry 精简版 带港美日国家",value:"https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Mini_MultiCountry.ini"},{label:"ACL4SSR_Mini_AdblockPlus 精简版 更多去广告",value:"https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Mini_AdblockPlus.ini"},{label:"ACL4SSR_Mini_Fallback 精简版 带故障转移",value:"https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Mini_Fallback.ini"},{label:"ACL4SSR_Mini_MultiMode 精简版 自动测速、故障转移、负载均衡",value:"https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Mini_MultiMode.ini"},{label:"ACL4SSR_Mini_NoAuto 精简版 不带自动测速",value:"https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Mini_NoAuto.ini"},{label:"ACL4SSR_NoAuto 无自动测速",value:"https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_NoAuto.ini"},{label:"ACL4SSR_NoReject 无广告拦截规则",value:"https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_NoReject.ini"}]},{label:"机场定制",options:[{label:"EXFLUX",value:"https://gist.github.com/jklolixxs/16964c46bad1821c70fa97109fd6faa2/raw/EXFLUX.ini"},{label:"NaNoport",value:"https://gist.github.com/jklolixxs/32d4e9a1a5d18a92beccf3be434f7966/raw/NaNoport.ini"},{label:"BigAirport",value:"https://gist.github.com/jklolixxs/e2b0105c8be6023f3941816509a4c453/raw/BigAirport.ini"},{label:"跑路云",value:"https://gist.github.com/jklolixxs/9f6989137a2cfcc138c6da4bd4e4cbfc/raw/PaoLuCloud.ini"},{label:"WaveCloud",value:"https://gist.github.com/jklolixxs/fccb74b6c0018b3ad7b9ed6d327035b3/raw/WaveCloud.ini"},{label:"几鸡",value:"https://gist.github.com/jklolixxs/bfd5061dceeef85e84401482f5c92e42/raw/JiJi.ini"},{label:"ImmTelecom",value:"https://gist.github.com/jklolixxs/24f4f58bb646ee2c625803eb916fe36d/raw/ImmTelecom.ini"},{label:"AmyTelecom",value:"https://gist.github.com/jklolixxs/b53d315cd1cede23af83322c26ce34ec/raw/AmyTelecom.ini"},{label:"Miaona",value:"https://gist.github.com/jklolixxs/ff8ddbf2526cafa568d064006a7008e7/raw/Miaona.ini"},{label:"Foo&Friends",value:"https://gist.github.com/jklolixxs/df8fda1aa225db44e70c8ac0978a3da4/raw/Foo&Friends.ini"},{label:"ABCloud",value:"https://gist.github.com/jklolixxs/b1f91606165b1df82e5481b08fd02e00/raw/ABCloud.ini"},{label:"希腊奶",value:"https://raw.githubusercontent.com/MegumiUUU/megumiclash/master/common.ini"},{label:"路飞船长",value:"https://raw.githubusercontent.com/Mazeorz/airports/master/Clash/Luffy_balance.ini"},{label:"CNIX",value:"https://raw.githubusercontent.com/Mazeorz/airports/master/Clash/SSRcloud.ini"},{label:"Nirvana",value:"https://raw.githubusercontent.com/Mazetsz/ACL4SSR/master/Clash/config/V2rayPro.ini"},{label:"V2Pro",value:"https://raw.githubusercontent.com/Mazeorz/airports/master/Clash/V2Pro.ini"},{label:"史迪仔-自动测速",value:"https://raw.githubusercontent.com/Mazeorz/airports/master/Clash/Stitch.ini"},{label:"史迪仔-负载均衡",value:"https://raw.githubusercontent.com/Mazeorz/airports/master/Clash/Stitch-Balance.ini"},{label:"Maying",value:"https://subconverter.oss-ap-southeast-1.aliyuncs.com/Rules/RemoteConfig/customized/maying.ini"},{label:"Ytoo",value:"https://cdn.jsdelivr.net/gh/SleepyHeeead/subconverter-config@master/remote-config/customized/ytoo.ini"},{label:"FlowerCloud",value:"https://cdn.jsdelivr.net/gh/SleepyHeeead/subconverter-config@master/remote-config/customized/flowercloud.ini"},{label:"NyanCAT",value:"https://cdn.jsdelivr.net/gh/SleepyHeeead/subconverter-config@master/remote-config/customized/nyancat.ini"},{label:"Nexitally",value:"https://cdn.jsdelivr.net/gh/SleepyHeeead/subconverter-config@master/remote-config/customized/nexitally.ini"},{label:"SoCloud",value:"https://cdn.jsdelivr.net/gh/SleepyHeeead/subconverter-config@master/remote-config/customized/socloud.ini"},{label:"ARK",value:"https://cdn.jsdelivr.net/gh/SleepyHeeead/subconverter-config@master/remote-config/customized/ark.ini"},{label:"贼船",value:"https://cdn.jsdelivr.net/gh/SleepyHeeead/subconverter-config@master/remote-config/customized/ssrcloud.ini"}]},{label:"Special",options:[{label:"NeteaseUnblock(仅规则，No-Urltest)",value:"https://cdn.jsdelivr.net/gh/SleepyHeeead/subconverter-config@master/remote-config/special/netease.ini"},{label:"Basic(仅GEOIP CN + Final)",value:"https://cdn.jsdelivr.net/gh/SleepyHeeead/subconverter-config@master/remote-config/special/basic.ini"}]}]},form:{sourceSubUrl:"",clientType:"",customBackend:"",remoteConfig:"",excludeRemarks:"",includeRemarks:"",filename:"",clashdns:"",emoji:!0,nodeList:!1,rule:!1,extraset:!1,sort:!1,udp:!1,tfo:!1,scv:!1,fdn:!1,appendType:!1,insert:!1,expand:!1,classic:!1,new_name:!0},loading:!1,customSubUrl:"",myBot:c,sampleConfig:n},t=/Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);if(t){for(var o=e.options.remoteConfig[1].options,r=0;r<o.length;r++)o[r].label.length>10&&(o[r].label=o[r].label.replace(/\s.*/,""));for(var l={},a=Object.keys(e.options.customBackend),i=0;i<a.length;i++){var s=a[i].replace(/\(.*/,"");l[s]=e.options.customBackend[a[i]]}e.options.customBackend=l}return e},created:function(){document.title="Firefly-SubConverter",this.isPC=this.$getOS().isPc,this.form.sourceSubUrl=this.getLocalStorageItem("sourceSubUrl")},mounted:function(){this.form.clientType="clash",this.form.customBackend=s,this.form.remoteConfig="https://raw.githubusercontent.com/LM-Firefly/Rules/master/Subconverter-base/MultiSub-NoReject.ini",this.getBackendVersion()},methods:{onCopy:function(){this.$message.success("Copied!")},goToProject:function(){window.open(a)},gotoTgChannel:function(){window.open(c)},gotoGayhub:function(){window.open(i)},gotoRemoteConfig:function(){window.open(n)},clashInstall:function(){if(""===this.customSubUrl)return this.$message.error("请先填写必填项，生成订阅链接"),!1;var e="clash://install-config?url=";window.open(e+encodeURIComponent(""!==this.curtomShortSubUrl?this.curtomShortSubUrl:this.customSubUrl))},surgeInstall:function(){if(""===this.customSubUrl)return this.$message.error("请先填写必填项，生成订阅链接"),!1;var e="surge://install-config?url=";window.open(e+this.customSubUrl)},makeUrl:function(){var e=this;if(""===this.form.sourceSubUrl||""===this.form.clientType)return this.$message.error("订阅链接与客户端为必填项"),!1;var t=""===this.form.customBackend?s:this.form.customBackend,o=""===this.form.remoteConfig?"":this.form.remoteConfig,r=this.form.sourceSubUrl;if(r=r.replace(/(\n|\r|\n\r)/g,"|"),-1!==r.indexOf("losadhwse")&&(-1!==t.indexOf("py6.pw")||-1!==t.indexOf("subconverter-web.now.sh")||-1!==t.indexOf("api.wcc.best")))return this.$alert("此机场订阅已将该后端屏蔽，请自建后端转换。","转换错误提示",{confirmButtonText:"确定",callback:function(t){e.$message({type:"error",message:"action: ".concat(t)})}}),!1;this.customSubUrl=t+"target="+this.form.clientType+"&url="+encodeURIComponent(r)+"&insert="+this.form.insert,""!==o&&(this.customSubUrl+="&config="+encodeURIComponent(o)),"2"===this.advanced&&(""!==this.form.excludeRemarks&&(this.customSubUrl+="&exclude="+encodeURIComponent(this.form.excludeRemarks)),""!==this.form.includeRemarks&&(this.customSubUrl+="&include="+encodeURIComponent(this.form.includeRemarks)),""!==this.form.filename&&(this.customSubUrl+="&filename="+encodeURIComponent(this.form.filename)),this.form.appendType&&(this.customSubUrl+="&append_type="+this.form.appendType.toString()),""!==this.form.clashdns&&(this.customSubUrl+="&clash.dns="+encodeURIComponent(this.form.clashdns)),this.customSubUrl+="&emoji="+this.form.emoji.toString()+"&list="+this.form.nodeList.toString()+"&udp="+this.form.udp.toString()+"&tfo="+this.form.tfo.toString()+"&scv="+this.form.scv.toString()+"&fdn="+this.form.fdn.toString()+"&sort="+this.form.sort.toString()+"&expand="+this.form.expand.toString()+"&classic="+this.form.classic.toString(),"clash"===this.form.clientType&&(this.customSubUrl+="&new_name="+this.form.new_name.toString())),this.$copyText(this.customSubUrl),this.$message.success("定制订阅已复制到剪贴板")},notify:function(){var e=this.$createElement;this.$notify({title:"隐私提示",type:"warning",message:e("i",{style:"color: teal"},"各种订阅链接（短链接服务除外）生成纯前端实现，无隐私问题。默认提供后端转换服务，隐私担忧者请自行搭建后端服务。")})},backendSearch:function(e,t){var o=this.options.backendOptions,r=e?o.filter(this.createFilter(e)):o;t(r)},createFilter:function(e){return function(t){return 0===t.value.toLowerCase().indexOf(e.toLowerCase())}},getBackendVersion:function(){var e=this;this.$axios.get(s.substring(0,s.length-5)+"/version").then((function(t){e.backendVersion=t.data.replace(/backend\n$/gm,""),e.backendVersion=e.backendVersion.replace("subconverter","")}))},saveSubUrl:function(){""!==this.form.sourceSubUrl&&this.setLocalStorageItem("sourceSubUrl",this.form.sourceSubUrl)},getLocalStorageItem:function(e){var t=+new Date,o=localStorage.getItem(e),r="";if(null!==o){var l=JSON.parse(o);l.expire>t?r=l.value:localStorage.removeItem(e)}return r},setLocalStorageItem:function(e,t){var o="86400",r=+new Date,l={setTime:r,ttl:parseInt(o),expire:r+1e3*o,value:t};localStorage.setItem(e,JSON.stringify(l))}}},f=u,m=o("2877"),b=Object(m["a"])(f,r,l,!1,null,null,null);t["default"]=b.exports},addb:function(e,t,o){var r=o("f36a"),l=Math.floor,a=function(e,t){var o=e.length,s=l(o/2);return o<8?n(e,t):i(e,a(r(e,0,s),t),a(r(e,s),t),t)},n=function(e,t){var o,r,l=e.length,a=1;while(a<l){r=a,o=e[a];while(r&&t(e[r-1],o)>0)e[r]=e[--r];r!==a++&&(e[r]=o)}return e},i=function(e,t,o,r){var l=t.length,a=o.length,n=0,i=0;while(n<l||i<a)e[n+i]=n<l&&i<a?r(t[n],o[i])<=0?t[n++]:o[i++]:n<l?t[n++]:o[i++];return e};e.exports=a},b64b:function(e,t,o){var r=o("23e7"),l=o("7b0b"),a=o("df75"),n=o("d039"),i=n((function(){a(1)}));r({target:"Object",stat:!0,forced:i},{keys:function(e){return a(l(e))}})},d784:function(e,t,o){"use strict";o("ac1f");var r=o("e330"),l=o("6eeb"),a=o("9263"),n=o("d039"),i=o("b622"),s=o("9112"),c=i("species"),u=RegExp.prototype;e.exports=function(e,t,o,f){var m=i(e),b=!n((function(){var t={};return t[m]=function(){return 7},7!=""[e](t)})),d=b&&!n((function(){var t=!1,o=/a/;return"split"===e&&(o={},o.constructor={},o.constructor[c]=function(){return o},o.flags="",o[m]=/./[m]),o.exec=function(){return t=!0,null},o[m](""),!t}));if(!b||!d||o){var p=r(/./[m]),h=t(m,""[e],(function(e,t,o,l,n){var i=r(e),s=t.exec;return s===a||s===u.exec?b&&!n?{done:!0,value:p(t,o,l)}:{done:!0,value:i(o,t,l)}:{done:!1}}));l(String.prototype,e,h[0]),l(u,m,h[1])}f&&s(u[m],"sham",!0)}},d998:function(e,t,o){var r=o("342f");e.exports=/MSIE|Trident/.test(r)},e9c4:function(e,t,o){var r=o("23e7"),l=o("da84"),a=o("d066"),n=o("2ba4"),i=o("e330"),s=o("d039"),c=l.Array,u=a("JSON","stringify"),f=i(/./.exec),m=i("".charAt),b=i("".charCodeAt),d=i("".replace),p=i(1..toString),h=/[\uD800-\uDFFF]/g,v=/^[\uD800-\uDBFF]$/,S=/^[\uDC00-\uDFFF]$/,g=function(e,t,o){var r=m(o,t-1),l=m(o,t+1);return f(v,e)&&!f(S,l)||f(S,e)&&!f(v,r)?"\\u"+p(b(e,0),16):e},C=s((function(){return'"\\udf06\\ud834"'!==u("\udf06\ud834")||'"\\udead"'!==u("\udead")}));u&&r({target:"JSON",stat:!0,forced:C},{stringify:function(e,t,o){for(var r=0,l=arguments.length,a=c(l);r<l;r++)a[r]=arguments[r];var i=n(u,null,a);return"string"==typeof i?d(i,h,g):i}})}}]);
//# sourceMappingURL=chunk-87bd93be.035fd698.js.map