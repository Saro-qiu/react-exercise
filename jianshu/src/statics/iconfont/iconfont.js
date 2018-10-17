import {injectGlobal} from 'styled-components';

injectGlobal`
    
    @font-face {font-family: "iconfont";
    src: url('./iconfont.eot?t=1538038239004'); /* IE9*/
    src: url('./iconfont.eot?t=1538038239004#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('data:application/x-font-woff;charset=utf-8;base64,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') format('woff'),
    url('./iconfont.ttf?t=1538038239004') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
    url('./iconfont.svg?t=1538038239004#iconfont') format('svg'); /* iOS 4.1- */
    }

    .iconfont {
    font-family:"iconfont" !important;
    font-size:16px;
    font-style:normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    }
    .icon-spin:before { content: "\e851"; }

    .icon-fangdajing:before { content: "\e603"; }
    
    .icon-shouji1:before { content: "\e606"; }
    
    .icon-icon_account:before { content: "\e60a"; }
    
    .icon-Aa:before { content: "\e607"; }
    
    .icon--quill:before { content: "\e608"; }
    
    .icon-iconjia:before { content: "\e601"; }
    
    .icon-menu-up:before { content: "\e600"; }
    
    .icon-mima:before { content: "\e602"; }
`