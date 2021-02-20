"use strict";var _self="undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{},Prism=function(o){var u=/\blang(?:uage)?-([\w-]+)\b/i,t=0,j={manual:o.Prism&&o.Prism.manual,disableWorkerMessageHandler:o.Prism&&o.Prism.disableWorkerMessageHandler,util:{encode:function(e){return e instanceof C?new C(e.type,j.util.encode(e.content),e.alias):Array.isArray(e)?e.map(j.util.encode):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).slice(8,-1)},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++t}),e.__id},clone:function a(e,n){var r,t,s=j.util.type(e);switch(n=n||{},s){case"Object":if(t=j.util.objId(e),n[t])return n[t];for(var i in r={},n[t]=r,e)e.hasOwnProperty(i)&&(r[i]=a(e[i],n));return r;case"Array":return(t=j.util.objId(e),n[t])?n[t]:(r=[],n[t]=r,e.forEach(function(e,t){r[t]=a(e,n)}),r);default:return e}}},languages:{extend:function(e,t){var a,n=j.util.clone(j.languages[e]);for(a in t)n[a]=t[a];return n},insertBefore:function(a,e,t,n){var r,s=(n=n||j.languages)[a],i={};for(r in s)if(s.hasOwnProperty(r)){if(r==e)for(var l in t)t.hasOwnProperty(l)&&(i[l]=t[l]);t.hasOwnProperty(r)||(i[r]=s[r])}var o=n[a];return n[a]=i,j.languages.DFS(j.languages,function(e,t){t===o&&e!=a&&(this[e]=i)}),i},DFS:function e(t,a,n,r){r=r||{};var s,i,l,o=j.util.objId;for(s in t)t.hasOwnProperty(s)&&(a.call(t,s,t[s],n||s),i=t[s],"Object"!==(l=j.util.type(i))||r[o(i)]?"Array"!==l||r[o(i)]||(r[o(i)]=!0,e(i,a,s,r)):(r[o(i)]=!0,e(i,a,null,r)))}},plugins:{},highlightAll:function(e,t){j.highlightAllUnder(document,e,t)},highlightAllUnder:function(e,t,a){var n={callback:a,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};j.hooks.run("before-highlightall",n);for(var r,s=e.querySelectorAll(n.selector),i=0;r=s[i++];)j.highlightElement(r,!0===t,n.callback)},highlightElement:function(e,t,a){for(var n,r="none",s=e;s&&!u.test(s.className);)s=s.parentNode;s&&(r=(s.className.match(u)||[,"none"])[1].toLowerCase(),n=j.languages[r]),e.className=e.className.replace(u,"").replace(/\s+/g," ")+" language-"+r,e.parentNode&&(s=e.parentNode,/pre/i.test(s.nodeName)&&(s.className=s.className.replace(u,"").replace(/\s+/g," ")+" language-"+r));function i(e){l.highlightedCode=e,j.hooks.run("before-insert",l),l.element.innerHTML=l.highlightedCode,j.hooks.run("after-highlight",l),j.hooks.run("complete",l),a&&a.call(l.element)}var l={element:e,language:r,grammar:n,code:e.textContent};j.hooks.run("before-sanity-check",l),l.code?(j.hooks.run("before-highlight",l),l.grammar?t&&o.Worker?((t=new Worker(j.filename)).onmessage=function(e){i(e.data)},t.postMessage(JSON.stringify({language:l.language,code:l.code,immediateClose:!0}))):i(j.highlight(l.code,l.grammar,l.language)):i(j.util.encode(l.code))):j.hooks.run("complete",l)},highlight:function(e,t,a){a={code:e,grammar:t,language:a};return j.hooks.run("before-tokenize",a),a.tokens=j.tokenize(a.code,a.grammar),j.hooks.run("after-tokenize",a),C.stringify(j.util.encode(a.tokens),a.language)},matchGrammar:function(e,t,a,n,r,s,i){for(var l in a)if(a.hasOwnProperty(l)&&a[l]){if(l==i)return;for(var o=a[l],o="Array"===j.util.type(o)?o:[o],u=0;u<o.length;++u){var c,g=o[u],d=g.inside,p=!!g.lookbehind,m=!!g.greedy,f=0,h=g.alias;m&&!g.pattern.global&&(c=g.pattern.toString().match(/[imuy]*$/)[0],g.pattern=RegExp(g.pattern.source,c+"g")),g=g.pattern||g;for(var b=n,y=r;b<t.length;y+=t[b].length,++b){var F=t[b];if(t.length>e.length)return;if(!(F instanceof C)){if(m&&b!=t.length-1){if(g.lastIndex=y,!(P=g.exec(e)))break;for(var k=P.index+(p?P[1].length:0),w=P.index+P[0].length,A=b,v=y,x=t.length;A<x&&(v<w||!t[A].type&&!t[A-1].greedy);++A)(v+=t[A].length)<=k&&(++b,y=v);if(t[b]instanceof C)continue;$=A-b,F=e.slice(y,v),P.index-=y}else{g.lastIndex=0;var P=g.exec(F),$=1}if(P){p&&(f=P[1]?P[1].length:0);var w=(k=P.index+f)+(P=P[0].slice(f)).length,S=F.slice(0,k),_=F.slice(w),F=[b,$];S&&(++b,y+=S.length,F.push(S));S=new C(l,d?j.tokenize(P,d):P,h,P,m);if(F.push(S),_&&F.push(_),Array.prototype.splice.apply(t,F),1!=$&&j.matchGrammar(e,t,a,b,y,!0,l),s)break}else if(s)break}}}}},tokenize:function(e,t){var a=[e],n=t.rest;if(n){for(var r in n)t[r]=n[r];delete t.rest}return j.matchGrammar(e,a,t,0,0,!1),a},hooks:{all:{},add:function(e,t){var a=j.hooks.all;a[e]=a[e]||[],a[e].push(t)},run:function(e,t){var a=j.hooks.all[e];if(a&&a.length)for(var n,r=0;n=a[r++];)n(t)}},Token:C};function C(e,t,a,n,r){this.type=e,this.content=t,this.alias=a,this.length=0|(n||"").length,this.greedy=!!r}if(o.Prism=j,C.stringify=function(e,t){if("string"==typeof e)return e;if(Array.isArray(e))return e.map(function(e){return C.stringify(e,t)}).join("");var a={type:e.type,content:C.stringify(e.content,t),tag:"span",classes:["token",e.type],attributes:{},language:t};e.alias&&(n=Array.isArray(e.alias)?e.alias:[e.alias],Array.prototype.push.apply(a.classes,n)),j.hooks.run("wrap",a);var n=Object.keys(a.attributes).map(function(e){return e+'="'+(a.attributes[e]||"").replace(/"/g,"&quot;")+'"'}).join(" ");return"<"+a.tag+' class="'+a.classes.join(" ")+'"'+(n?" "+n:"")+">"+a.content+"</"+a.tag+">"},!o.document)return o.addEventListener&&(j.disableWorkerMessageHandler||o.addEventListener("message",function(e){var t=JSON.parse(e.data),a=t.language,e=t.code,t=t.immediateClose;o.postMessage(j.highlight(e,j.languages[a],a)),t&&o.close()},!1)),j;var e=document.currentScript||[].slice.call(document.getElementsByTagName("script")).pop();return e&&(j.filename=e.src,j.manual||e.hasAttribute("data-manual")||("loading"!==document.readyState?window.requestAnimationFrame?window.requestAnimationFrame(j.highlightAll):window.setTimeout(j.highlightAll,16):document.addEventListener("DOMContentLoaded",j.highlightAll))),j}(_self);"undefined"!=typeof module&&module.exports&&(module.exports=Prism),"undefined"!=typeof global&&(global.Prism=Prism),Prism.languages.markup={comment:/<!--[\s\S]*?-->/,prolog:/<\?[\s\S]+?\?>/,doctype:/<!DOCTYPE[\s\S]+?>/i,cdata:/<!\[CDATA\[[\s\S]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/i,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/i,inside:{punctuation:[/^=/,{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i},Prism.languages.markup.tag.inside["attr-value"].inside.entity=Prism.languages.markup.entity,Prism.hooks.add("wrap",function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))}),Object.defineProperty(Prism.languages.markup.tag,"addInlined",{value:function(e,t){var a={};a["language-"+t]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:Prism.languages[t]},a.cdata=/^<!\[CDATA\[|\]\]>$/i;a={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:a}};a["language-"+t]={pattern:/[\s\S]+/,inside:Prism.languages[t]};t={};t[e]={pattern:RegExp(/(<__[\s\S]*?>)(?:<!\[CDATA\[[\s\S]*?\]\]>\s*|[\s\S])*?(?=<\/__>)/.source.replace(/__/g,e),"i"),lookbehind:!0,greedy:!0,inside:a},Prism.languages.insertBefore("markup","cdata",t)}}),Prism.languages.xml=Prism.languages.extend("markup",{}),Prism.languages.html=Prism.languages.markup,Prism.languages.mathml=Prism.languages.markup,Prism.languages.svg=Prism.languages.markup,function(e){var t=/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;e.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-]+[\s\S]*?(?:;|(?=\s*\{))/,inside:{rule:/@[\w-]+/}},url:{pattern:RegExp("url\\((?:"+t.source+"|[^\n\r()]*)\\)","i"),inside:{function:/^url/i,punctuation:/^\(|\)$/}},selector:RegExp("[^{}\\s](?:[^{};\"']|"+t.source+")*?(?=\\s*\\{)"),string:{pattern:t,greedy:!0},property:/[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,important:/!important\b/i,function:/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:,]/},e.languages.css.atrule.inside.rest=e.languages.css;t=e.languages.markup;t&&(t.tag.addInlined("style","css"),e.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:t.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:e.languages.css}},alias:"language-css"}},t.tag))}(Prism),Prism.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(?:true|false)\b/,function:/\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,punctuation:/[{}[\];(),.:]/},Prism.languages.javascript=Prism.languages.extend("clike",{"class-name":[Prism.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/,lookbehind:!0}],keyword:[{pattern:/((?:^|})\s*)(?:catch|finally)\b/,lookbehind:!0},{pattern:/(^|[^.])\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],number:/\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,function:/#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,operator:/-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/}),Prism.languages.javascript["class-name"][0].pattern=/(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/,Prism.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=\s*($|[\r\n,.;})\]]))/,lookbehind:!0,greedy:!0},"function-variable":{pattern:/#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i,inside:Prism.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/,lookbehind:!0,inside:Prism.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),Prism.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}|(?!\${)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\${|}$/,alias:"punctuation"},rest:Prism.languages.javascript}},string:/[\s\S]+/}}}),Prism.languages.markup&&Prism.languages.markup.tag.addInlined("script","javascript"),Prism.languages.js=Prism.languages.javascript,"undefined"!=typeof self&&self.Prism&&self.document&&document.querySelector&&(self.Prism.fileHighlight=function(e){e=e||document;var o={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"};Array.prototype.slice.call(e.querySelectorAll("pre[data-src]")).forEach(function(e){if(!e.hasAttribute("data-src-loaded")){for(var t,a,n=e.getAttribute("data-src"),r=e,s=/\blang(?:uage)?-([\w-]+)\b/i;r&&!s.test(r.className);)r=r.parentNode;r&&(a=(e.className.match(s)||[,""])[1]),a||(t=(n.match(/\.(\w+)$/)||[,""])[1],a=o[t]||t);var i=document.createElement("code");i.className="language-"+a,e.textContent="",i.textContent="Loading…",e.appendChild(i);var l=new XMLHttpRequest;l.open("GET",n,!0),l.onreadystatechange=function(){4==l.readyState&&(l.status<400&&l.responseText?(i.textContent=l.responseText,Prism.highlightElement(i),e.setAttribute("data-src-loaded","")):400<=l.status?i.textContent="✖ Error "+l.status+" while fetching file: "+l.statusText:i.textContent="✖ Error: File does not exist or is empty")},l.send(null)}}),Prism.plugins.toolbar&&Prism.plugins.toolbar.registerButton("download-file",function(e){var t=e.element.parentNode;if(t&&/pre/i.test(t.nodeName)&&t.hasAttribute("data-src")&&t.hasAttribute("data-download-link")){var a=t.getAttribute("data-src"),e=document.createElement("a");return e.textContent=t.getAttribute("data-download-link-label")||"Download",e.setAttribute("download",""),e.href=a,e}})},document.addEventListener("DOMContentLoaded",function(){self.Prism.fileHighlight()}));