var s0 = document.createElement('script');
s0.async = "async";
s0.src = "https://cdn.jsdelivr.net/gh/unib0ts/unibots@latest/ubHB/main/hb.js";
s0.type = "text/javascript";
document.getElementsByTagName('head')[0].appendChild(s0);

window.unibotshb = window.unibotshb || { cmd: [] };
unibotshb.cmd.push(() => {
    ubHB("heightcomparison");
});
