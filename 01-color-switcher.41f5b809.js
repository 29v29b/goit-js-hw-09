!function(){var t=document.querySelector("body"),e=document.querySelector("button[data-start]"),n=document.querySelector("button[data-stop]"),o=null;function a(){o=setInterval((function(){t.setAttribute("style","background-color: ".concat("#".concat(Math.floor(16777215*Math.random()).toString(16))))}),1e3)}n.disabled=!0,e.addEventListener("click",(function(){a(),e.disabled=!0,n.disabled=!1})),n.addEventListener("click",(function(){clearInterval(o),e.disabled=!1,n.disabled=!0}))}();
//# sourceMappingURL=01-color-switcher.41f5b809.js.map