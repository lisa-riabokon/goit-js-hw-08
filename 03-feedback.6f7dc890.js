!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var o="Expected a function",i=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,a=/^0o[0-7]+$/i,c=parseInt,l="object"==typeof n&&n&&n.Object===Object&&n,d="object"==typeof self&&self&&self.Object===Object&&self,s=l||d||Function("return this")(),v=Object.prototype.toString,m=Math.max,g=Math.min,p=function(){return s.Date.now()};function b(e,t,n){var r,i,u,f,a,c,l=0,d=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError(o);function b(t){var n=r,o=i;return r=i=void 0,l=t,f=e.apply(o,n)}function S(e){return l=e,a=setTimeout(T,t),d?b(e):f}function O(e){var n=e-c;return void 0===c||n>=t||n<0||s&&e-l>=u}function T(){var e=p();if(O(e))return h(e);a=setTimeout(T,function(e){var n=t-(e-c);return s?g(n,u-(e-l)):n}(e))}function h(e){return a=void 0,v&&r?b(e):(r=i=void 0,f)}function w(){var e=p(),n=O(e);if(r=arguments,i=this,c=e,n){if(void 0===a)return S(c);if(s)return a=setTimeout(T,t),b(c)}return void 0===a&&(a=setTimeout(T,t)),f}return t=j(t)||0,y(n)&&(d=!!n.leading,u=(s="maxWait"in n)?m(j(n.maxWait)||0,t):u,v="trailing"in n?!!n.trailing:v),w.cancel=function(){void 0!==a&&clearTimeout(a),l=0,r=c=i=a=void 0},w.flush=function(){return void 0===a?f:h(p())},w}function y(t){var n=void 0===t?"undefined":e(r)(t);return!!t&&("object"==n||"function"==n)}function j(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(r)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==v.call(t)}(t))return NaN;if(y(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=y(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var o=f.test(t);return o||a.test(t)?c(t.slice(2),o?2:8):u.test(t)?NaN:+t}t=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError(o);return y(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),b(e,t,{leading:r,maxWait:t,trailing:i})};var S,O="feedback-form-state",T={},h={form:document.querySelector(".feedback-form"),textarea:document.querySelector(".feedback-form textarea")};h.form.addEventListener("submit",(function(e){e.preventDefault(),e.currentTarget.reset(),localStorage.removeItem(O)})),h.form.addEventListener("input",e(t)((function(e){T[e.target.name]=e.target.value}),500)),(S=localStorage.getItem(O))&&(h.form.value=S),console.log(T),localStorage.setItem(O,JSON.stringify(T));var w=localStorage.getItem(O),x=JSON.parse(w);console.log(x)}();
//# sourceMappingURL=03-feedback.6f7dc890.js.map
