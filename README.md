# TACSS
*tarte aux CSS, too much rules; I think*

## tarteaucitron.js CSS light theme
Tried to make a fresh light theme for [tarteaucitron.js] GDPR cookies manager.

For my projects, I need to change [tarteaucitron.js] default CSS a lot to match websites global theme.\
I tried to use some variables to help update colors and size for further changes, and add comments on mystics parts.\
I hope it helps.

## Usage:
- `css/tac-custom.css` main CSS file

At the begining, I only overrides some rules, and quickly I decide to rewrite everything, because too much changes. So now, `css/tac-custom.css` can be used as standalone CSS stylesheet with [tarteaucitron.js] option: `"useExternalCss":true`

- `fonts/OpenSans-VariableFont_wdth,wght.ttf` is an optionnal sans-serif font
- `js/*.js` are helpers, not needed

![cookies managment panel](/assets/sshot-panel-en.png)

## Known issues - actually
* does not cover PRO/PREMIUM options
* showAlertSmall is very basic
* groupServices partially
* no builds/no minimize release
* license

##Crédits:
- [tarteaucitron.js] GITHUB - GDPR cookies manager
- [tarteaucitron.io] website - GDPR cookies manager
- `assets/cookie.svg` [svgrepo] - CC0 License

[tarteaucitron.js]:https://github.com/AmauriC/tarteaucitron.js
[tarteaucitron.io]:https://tarteaucitron.io/
[svgrepo]:https://www.svgrepo.com/svg/30963/cookie
