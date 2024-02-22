tarteaucitron.init(
    {
    "privacyUrl": "/privacy.policy.url", /* Privacy policy url */
    "hashtag": "#tarteaucitron", /* Open the panel with this hashtag */
    "cookieName": "tarteaucitron", /* Cookie name */
    "orientation": "bottom", /* Banner position (top - bottom) */
    "groupServices": true, /* Group services by category */
    "showAlertSmall": false, /* Show the small banner on bottom right */
    "cookieslist": true, /* Show the cookie list */
    "closePopup": true, /* Show a close X on the banner */
    "showIcon": true, /* Show cookie icon to manage cookies */
    "iconSrc": "/assets/cookie.svg", /* Optionnal: URL or base64 encoded image */
    "iconPosition": "BottomRight", /* BottomRight, BottomLeft, TopRight and TopLeft */
    "adblocker": false, /* Show a Warning if an adblocker is detected */
    "DenyAllCta" : true, /* Show the deny all button */
    "AcceptAllCta" : true, /* Show the accept all button when highPrivacy on */
    "highPrivacy": true, /* HIGHLY RECOMMANDED Disable auto consent */
    "handleBrowserDNTRequest": false, /* If Do Not Track == 1, disallow all */
    "removeCredit": true, /* Remove credit link */
    "moreInfoLink": true, /* Show more info link */
    "useExternalCss": true, /* If false, the tarteaucitron.css file will be loaded */
    "useExternalJs": false, /* If false, the tarteaucitron.js file will be loaded */
    //"cookieDomain": ".my-multisite-domaine.fr", /* Shared cookie for multisite */
    "readmoreLink": "", /* Change the default readmore link */
    "mandatory": true, /* Show a message about mandatory cookies */
    "EXT_narrow":"wide",
    }
);
// (tarteaucitron.job = tarteaucitron.job || []).push('youtube', 'twitter', 'facebook', 'amazon', 'instagram');
(tarteaucitron.job = tarteaucitron.job || []).push('twitter', 'facebook', 'amazon', 'instagram');