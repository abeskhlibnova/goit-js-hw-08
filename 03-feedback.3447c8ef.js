function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,i=/^0o[0-7]+$/i,f=parseInt,u="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=u||c||Function("return this")(),s=Object.prototype.toString,m=Math.max,d=Math.min,p=function(){return l.Date.now()};function v(e,t,n){var o,r,a,i,f,u,c=0,l=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=o,a=r;return o=r=void 0,c=t,i=e.apply(a,n)}function k(e){return c=e,f=setTimeout(x,t),l?y(e):i}function S(e){var n=e-u;return void 0===u||n>=t||n<0||s&&e-c>=a}function x(){var e=p();if(S(e))return j(e);f=setTimeout(x,function(e){var n=t-(e-u);return s?d(n,a-(e-c)):n}(e))}function j(e){return f=void 0,v&&o?y(e):(o=r=void 0,i)}function O(){var e=p(),n=S(e);if(o=arguments,r=this,u=e,n){if(void 0===f)return k(u);if(s)return f=setTimeout(x,t),y(u)}return void 0===f&&(f=setTimeout(x,t)),i}return t=g(t)||0,b(n)&&(l=!!n.leading,a=(s="maxWait"in n)?m(g(n.maxWait)||0,t):a,v="trailing"in n?!!n.trailing:v),O.cancel=function(){void 0!==f&&clearTimeout(f),c=0,o=u=r=f=void 0},O.flush=function(){return void 0===f?i:j(p())},O}function b(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function g(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(b(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=b(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=a.test(e);return n||i.test(e)?f(e.slice(2),n?2:8):r.test(e)?NaN:+e}t=function(e,t,n){var o=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return b(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),v(e,t,{leading:o,maxWait:t,trailing:r})};const y={feedbackForm:document.querySelector(".feedback-form"),emailInput:document.querySelector("input[type=email]"),textarea:document.querySelector(".feedback-form textarea")};y.feedbackForm.addEventListener("submit",e(t)((function(e){e.preventDefault();const t=y.emailInput.value,n=y.textarea.value;localStorage.setItem("feedback-form-state",JSON.stringify({email:t,message:n})),console.log(localStorage.getItem("feedback-form-state")),y.feedbackForm.reset(),localStorage.removeItem("feedback-form-state")}),500)),y.feedbackForm.addEventListener("input",(function(e){e.preventDefault();const t=y.emailInput.value,n=y.textarea.value;localStorage.setItem("feedback-form-state",JSON.stringify({email:t,message:n}))})),function(){const e=JSON.parse(localStorage.getItem("feedback-form-state"));e&&(y.feedbackForm.elements.email.value=e.email,y.feedbackForm.elements.message.value=e.message)}();
//# sourceMappingURL=03-feedback.3447c8ef.js.map