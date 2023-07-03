# TACSS
*(tarte aux CSS, too much rules; I think)*
![#tarteaucitronBigAlert.narrow](/assets/sshot-bigalert-narrow-fr.png)
## tarteaucitron.js CSS light theme
Tried to make a fresh light theme for [tarteaucitron.js] GDPR cookies manager.

For my projects, I need to make lot of changes on [tarteaucitron.js] default CSS, to match websites global theme.\
I tried to use some variables to help update colors and size for further changes, and add comments on mystics parts.\
I hope it helps.

## Usage
- `css/tac-custom.css` main CSS file

At the begining, I only overrides some rules, and quickly I decide to rewrite everything, because too much changes. So now, `css/tac-custom.css` can be used as standalone CSS stylesheet with [tarteaucitron.js] option: `"useExternalCss":true`

- `fonts/OpenSans-VariableFont_wdth,wght.ttf` is an optionnal sans-serif font
- `js/*.js` are helpers, not needed

## Known issues - actually
* mobile not test yet
* does not cover PRO/PREMIUM options
* showAlertSmall is very basic
* groupServices partially
* no builds/no minimize release
* license

## Next
I want to add support on `BigAlert` with somes variations, like "narrow", "wide" and "borderless" and off course, support all [tarteaucitron.js] features.

### Screenshots

![cookies management panel](/assets/sshot-panel-en.png)
![big alert wide](/assets/sshot-alert-wide-fr.png)
![alert small](/assets/sshot-smallAlert-fr.png)

## Crédits

- [tarteaucitron.js] GITHUB - GDPR cookies manager
- [tarteaucitron.io] website - GDPR cookies manager
- `assets/cookie.svg` [svgrepo] - CC0 License

[tarteaucitron.js]:https://github.com/AmauriC/tarteaucitron.js
[tarteaucitron.io]:https://tarteaucitron.io/
[svgrepo]:https://www.svgrepo.com/svg/30963/cookie
