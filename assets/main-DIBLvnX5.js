(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();(()=>{const r=document.querySelector(".js-menu-container"),n=document.querySelector(".js-open-menu"),o=document.querySelector(".js-close-menu"),s=document.querySelectorAll(".header-link"),e=()=>{const t=n.getAttribute("aria-expanded")==="true"||!1;n.setAttribute("aria-expanded",!t),r.classList.toggle("is-open");const l=t?"enableBodyScroll":"disableBodyScroll";bodyScrollLock[l](document.body)};s.forEach(t=>t.addEventListener("click",e)),n.addEventListener("click",e),o.addEventListener("click",e),window.matchMedia("(min-width: 768px)").addEventListener("change",t=>{t.matches&&(r.classList.remove("is-open"),n.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))})})();var d,c,u,g,h,i,a,m,f;d=document.getElementsByClassName("custom-select");g=d.length;for(c=0;c<g;c++){for(i=d[c].getElementsByTagName("select")[0],h=i.length,a=document.createElement("DIV"),a.setAttribute("class","select-selected"),a.innerHTML=i.options[i.selectedIndex].innerHTML,d[c].appendChild(a),m=document.createElement("DIV"),m.setAttribute("class","select-items select-hide"),u=1;u<h;u++)f=document.createElement("DIV"),f.innerHTML=i.options[u].innerHTML,f.addEventListener("click",function(r){var n,o,s,e,t,l,p;for(e=this.parentNode.parentNode.getElementsByTagName("select")[0],l=e.length,t=this.parentNode.previousSibling,o=0;o<l;o++)if(e.options[o].innerHTML==this.innerHTML){for(e.selectedIndex=o,t.innerHTML=this.innerHTML,n=this.parentNode.getElementsByClassName("same-as-selected"),p=n.length,s=0;s<p;s++)n[s].removeAttribute("class");this.setAttribute("class","same-as-selected");break}t.click()}),m.appendChild(f);d[c].appendChild(m),a.addEventListener("click",function(r){r.stopPropagation(),y(this),this.nextSibling.classList.toggle("select-hide"),this.classList.toggle("select-arrow-active")})}function y(r){var n,o,s,e,t,l=[];for(n=document.getElementsByClassName("select-items"),o=document.getElementsByClassName("select-selected"),e=n.length,t=o.length,s=0;s<t;s++)r==o[s]?l.push(s):o[s].classList.remove("select-arrow-active");for(s=0;s<e;s++)l.indexOf(s)&&n[s].classList.add("select-hide")}document.addEventListener("click",y);
//# sourceMappingURL=main-DIBLvnX5.js.map
