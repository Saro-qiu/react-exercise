import {injectGlobal} from 'styled-components';

injectGlobal`
    
    @font-face {font-family: "iconfont";
    src: url('./iconfont.eot?t=1537947900955'); /* IE9*/
    src: url('./iconfont.eot?t=1537947900955#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('data:application/x-font-woff;charset=utf-8;base64,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') format('woff'),
    url('./iconfont.ttf?t=1537947900955') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
    url('./iconfont.svg?t=1537947900955#iconfont') format('svg'); /* iOS 4.1- */
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

    .icon-Aa:before { content: "\e607"; }

    .icon--quill:before { content: "\e608"; }

    .icon-iconjia:before { content: "\e601"; }
    
    .icon-menu-up:before { content: "\e600"; }


`