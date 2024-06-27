// scripts.js

// Facebook Pixel Code
!function(f,b,e,v,n,t,s)
{
    if(f.fbq) return;
    n=f.fbq=function(){
        n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments)
    };
    if(!f._fbq) f._fbq=n;
    n.push=n;
    n.loaded=!0;
    n.version='2.0';
    n.queue=[];
    t=b.createElement(e);
    t.async=!0;
    t.src=v;
    s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)
}
(window, document,'script', 'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '1658798754893542');
fbq('track', 'PageView');

// Track form submission event
document.querySelector('iframe').addEventListener('load', function() {
    var iframeContent = this.contentWindow.document;
    iframeContent.querySelector('form').addEventListener('submit', function() {
        fbq('track', 'Lead');
        document.getElementById('thank-you').style.display = 'block';
        this.style.display = 'none'; // Hide the form after submission
    });
});
