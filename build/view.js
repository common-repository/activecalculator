window.addEventListener("message",(function(a){if("https://app.activecalculator.com"===a.origin&&a.data&&"UPDATE_CALCULATOR_IFRAME_HEIGHT"===a.data.action){var t=document.querySelector('iframe[name="ActiveCalculator"]'),e=parseInt(a.data.payload.height,10);t&&!isNaN(e)&&e>0&&(t.style.height=e+"px")}}));