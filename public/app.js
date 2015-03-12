!function(){"use strict";var t="undefined"!=typeof window?window:global;if("function"!=typeof t.require){var e={},n={},r=function(t,e){return{}.hasOwnProperty.call(t,e)},o=function(t,e){var n,r,o=[];n=/^\.\.?(\/|$)/.test(e)?[t,e].join("/").split("/"):e.split("/");for(var i=0,s=n.length;s>i;i++)r=n[i],".."===r?o.pop():"."!==r&&""!==r&&o.push(r);return o.join("/")},i=function(t){return t.split("/").slice(0,-1).join("/")},s=function(e){return function(n){var r=i(e),s=o(r,n);return t.require(s,e)}},u=function(t,e){var r={id:t,exports:{}};return n[t]=r,e(r.exports,s(t),r),r.exports},a=function(t,i){var s=o(t,".");if(null==i&&(i="/"),r(n,s))return n[s].exports;if(r(e,s))return u(s,e[s]);var a=o(s,"./index");if(r(n,a))return n[a].exports;if(r(e,a))return u(a,e[a]);throw new Error('Cannot find module "'+t+'" from "'+i+'"')},l=function(t,n){if("object"==typeof t)for(var o in t)r(t,o)&&(e[o]=t[o]);else e[t]=n},c=function(){var t=[];for(var n in e)r(e,n)&&t.push(n);return t};t.require=a,t.require.define=l,t.require.register=l,t.require.list=c,t.require.brunch=!0}}(),require.register("config",function(t,e,n){n.exports={root:"/pushstate-n-iframes/"}}),require.register("scripts/app",function(t,e,n){var r,o,i=function(t,e){return function(){return t.apply(e,arguments)}};o=e("config"),r=function(){function t(t,e){this.name=t,this.onPopState=i(this.onPopState,this),this.onPushState=i(this.onPushState,this),console.debug(e,o),this.root=(null!=e?e.root:void 0)||"/",this.log=document.getElementById("console"),console.debug(""+this.name+" | starts..."),this.bindEvents()}return t.prototype.addStep=function(){var t,e;return e=this.log.children.length,t=this.log.appendChild(document.createElement("li")),t.innerHTML="<b>"+this.name+"</b> &gt; going to step "+e,e},t.prototype.removeStep=function(){return this.log.removeChild(this.log.lastChild)},t.prototype.onPushState=function(){var t,e;return t=this.addStep(),e=""+this.root+this.name+"/step"+t,window.history.pushState({steps:t+1},null,e),console.debug(""+this.name+" | push to step "+t)},t.prototype.onPopState=function(t){var e,n,r,o;return e=(null!=(r=t.state)?r.steps:void 0)||1,this.log.children.length>e?(this.removeStep(),n=(null!=(o=t.state)?o.steps:void 0)?"step "+(t.state.steps-1):"initial step",console.debug(""+this.name+" | pop to "+n)):(n=this.addStep(),console.debug(""+this.name+" | replay to step "+n))},t.prototype.bindEvents=function(){var t;return t=document.getElementById("push"),t.addEventListener("click",this.onPushState),t.removeAttribute("disabled"),window.addEventListener("popstate",this.onPopState)},t}(),n.exports=function(t,e){var n;return n={root:(null!=e?e.root:void 0)||o.root,pushState:("undefined"!=typeof optons&&null!==optons?optons.pushState:void 0)||!1},window.application=new r(t,n)}}),require.register("scripts/main",function(t,e,n){var r,o,i,s,u,a,l,c,f,p,d;i=e("config"),r=[],d=i.root,l=function(t){return r.length?r.filter(function(e){return e.id===t})[0]||void 0:void 0},s=function(t,e){var n;return n=document.createElement("iframe"),n.addEventListener("load",a),n.setAttribute("id",t),n.setAttribute("src",e),document.querySelector(".container").appendChild(n),r.push(n),u(n)},u=function(t){var e,n,r,o;for(n=document.querySelectorAll(".container iframe"),r=0,o=n.length;o>r;r++)e=n[r],e.classList.remove("active");return t?t.classList.add("active"):void 0},a=function(){var t,e;return t=this.contentWindow,e=window.history.pushState,t.history.pushState=function(){return e.apply(t.history,arguments),setTimeout(function(){var e,n;return e=t.location.pathname,n=t.history.state,window.history.replaceState(n,null,e)},35)},t.addEventListener("popstate",f)},p=function(t){return setTimeout(function(){var e,n;return e=l(t),n=(null!=e?e.contentWindow.location.pathname:void 0)||d,window.history.pushState(null,null,n)},35)},c=function(t){var e,n,r;return t.preventDefault(),n=t.target,r=n.dataset.appSlug,r?(e=l(r),e?u(e):s(r,n.href)):u(),p(r)},f=function(t){var e;return this!==window&&window.history.replaceState(t.state,null,this.location.pathname),e=window.location.pathname.substring(d.length).split("/")[0],u(l(e)||void 0)},o=function(){var t,e,n,r;for(e=document.querySelectorAll("nav a"),n=0,r=e.length;r>n;n++)t=e[n],t.addEventListener("click",c);return window.addEventListener("popstate",f)},n.exports=function(){return console.debug("main | starts..."),o()}}),!function(t){if("object"==typeof exports)module.exports=t();else if("function"==typeof define&&define.amd)define(t);else{var e;"undefined"!=typeof window?e=window:"undefined"!=typeof global?e=global:"undefined"!=typeof self&&(e=self),e.jade=t()}}(function(){return function t(e,n,r){function o(s,u){if(!n[s]){if(!e[s]){var a="function"==typeof require&&require;if(!u&&a)return a(s,!0);if(i)return i(s,!0);throw new Error("Cannot find module '"+s+"'")}var l=n[s]={exports:{}};e[s][0].call(l.exports,function(t){var n=e[s][1][t];return o(n?n:t)},l,l.exports,t,e,n,r)}return n[s].exports}for(var i="function"==typeof require&&require,s=0;s<r.length;s++)o(r[s]);return o}({1:[function(t,e,n){"use strict";function r(t){return null!=t&&""!==t}function o(t){return Array.isArray(t)?t.map(o).filter(r).join(" "):t}n.merge=function i(t,e){if(1===arguments.length){for(var n=t[0],o=1;o<t.length;o++)n=i(n,t[o]);return n}var s=t["class"],u=e["class"];(s||u)&&(s=s||[],u=u||[],Array.isArray(s)||(s=[s]),Array.isArray(u)||(u=[u]),t["class"]=s.concat(u).filter(r));for(var a in e)"class"!=a&&(t[a]=e[a]);return t},n.joinClasses=o,n.cls=function(t,e){for(var r=[],i=0;i<t.length;i++)r.push(e&&e[i]?n.escape(o([t[i]])):o(t[i]));var s=o(r);return s.length?' class="'+s+'"':""},n.attr=function(t,e,r,o){return"boolean"==typeof e||null==e?e?" "+(o?t:t+'="'+t+'"'):"":0==t.indexOf("data")&&"string"!=typeof e?" "+t+"='"+JSON.stringify(e).replace(/'/g,"&apos;")+"'":r?" "+t+'="'+n.escape(e)+'"':" "+t+'="'+e+'"'},n.attrs=function(t,e){var r=[],i=Object.keys(t);if(i.length)for(var s=0;s<i.length;++s){var u=i[s],a=t[u];"class"==u?(a=o(a))&&r.push(" "+u+'="'+a+'"'):r.push(n.attr(u,a,!1,e))}return r.join("")},n.escape=function(t){var e=String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");return e===""+t?t:e},n.rethrow=function s(e,n,r,o){if(!(e instanceof Error))throw e;if(!("undefined"==typeof window&&n||o))throw e.message+=" on line "+r,e;try{o=o||t("fs").readFileSync(n,"utf8")}catch(i){s(e,null,r)}var u=3,a=o.split("\n"),l=Math.max(r-u,0),c=Math.min(a.length,r+u),u=a.slice(l,c).map(function(t,e){var n=e+l+1;return(n==r?"  > ":"    ")+n+"| "+t}).join("\n");throw e.path=n,e.message=(n||"Jade")+":"+r+"\n"+u+"\n\n"+e.message,e}},{fs:2}],2:[function(){},{}]},{},[1])(1)});