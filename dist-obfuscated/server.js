'use strict';const a13_0xfecfc4=a13_0x53d2;(function(_0x10d692,_0x1258ac){const _0x482e6e=a13_0x53d2,_0x3a235e=_0x10d692();while(!![]){try{const _0x408915=-parseInt(_0x482e6e(0x15a))/0x1*(parseInt(_0x482e6e(0x150))/0x2)+parseInt(_0x482e6e(0x148))/0x3*(-parseInt(_0x482e6e(0x154))/0x4)+parseInt(_0x482e6e(0x140))/0x5+-parseInt(_0x482e6e(0x160))/0x6*(-parseInt(_0x482e6e(0x153))/0x7)+parseInt(_0x482e6e(0x133))/0x8*(-parseInt(_0x482e6e(0x13e))/0x9)+-parseInt(_0x482e6e(0x176))/0xa+parseInt(_0x482e6e(0x175))/0xb*(parseInt(_0x482e6e(0x14f))/0xc);if(_0x408915===_0x1258ac)break;else _0x3a235e['push'](_0x3a235e['shift']());}catch(_0x502813){_0x3a235e['push'](_0x3a235e['shift']());}}}(a13_0x164a,0x528a8));var __awaiter=this&&this[a13_0xfecfc4(0x16f)]||function(_0x409c29,_0x65a9a8,_0x1bc952,_0x2304d0){function _0x46bb0b(_0x2ff377){return _0x2ff377 instanceof _0x1bc952?_0x2ff377:new _0x1bc952(function(_0x2e5d86){_0x2e5d86(_0x2ff377);});}return new(_0x1bc952||(_0x1bc952=Promise))(function(_0x3655de,_0x397585){const _0x21b9c7=a13_0x53d2;function _0x29d25f(_0x46d0f9){const _0x2c6df0=a13_0x53d2;try{_0x43ab66(_0x2304d0[_0x2c6df0(0x147)](_0x46d0f9));}catch(_0x578be0){_0x397585(_0x578be0);}}function _0x58d0c7(_0x2a818d){try{_0x43ab66(_0x2304d0['throw'](_0x2a818d));}catch(_0x3d38c7){_0x397585(_0x3d38c7);}}function _0x43ab66(_0x2ab209){const _0x1a0d4b=a13_0x53d2;_0x2ab209[_0x1a0d4b(0x16a)]?_0x3655de(_0x2ab209['value']):_0x46bb0b(_0x2ab209[_0x1a0d4b(0x166)])[_0x1a0d4b(0x165)](_0x29d25f,_0x58d0c7);}_0x43ab66((_0x2304d0=_0x2304d0[_0x21b9c7(0x131)](_0x409c29,_0x65a9a8||[]))['next']());});},__importDefault=this&&this[a13_0xfecfc4(0x16d)]||function(_0x1e4a05){const _0xe464b8=a13_0xfecfc4;return _0x1e4a05&&_0x1e4a05[_0xe464b8(0x162)]?_0x1e4a05:{'default':_0x1e4a05};};Object['defineProperty'](exports,a13_0xfecfc4(0x162),{'value':!![]}),exports[a13_0xfecfc4(0x136)]=void 0x0;function a13_0x53d2(_0x44a35d,_0xd3fa2d){const _0x164a5e=a13_0x164a();return a13_0x53d2=function(_0x53d26b,_0x4b8406){_0x53d26b=_0x53d26b-0x12d;let _0x19570d=_0x164a5e[_0x53d26b];return _0x19570d;},a13_0x53d2(_0x44a35d,_0xd3fa2d);}const express_1=__importDefault(require(a13_0xfecfc4(0x130))),https_1=__importDefault(require(a13_0xfecfc4(0x156))),fs_1=__importDefault(require('fs')),helmet_1=__importDefault(require(a13_0xfecfc4(0x13c))),express_rate_limit_1=__importDefault(require('express-rate-limit')),cookie_parser_1=__importDefault(require('cookie-parser')),request_ip_1=__importDefault(require(a13_0xfecfc4(0x174))),body_parser_1=__importDefault(require(a13_0xfecfc4(0x157))),cors_1=__importDefault(require(a13_0xfecfc4(0x13d))),xss_1=__importDefault(require('xss')),mongoose_1=__importDefault(require(a13_0xfecfc4(0x161))),dotenv_1=__importDefault(require(a13_0xfecfc4(0x173))),userRoutes_1=__importDefault(require(a13_0xfecfc4(0x15f))),displayRoutes_1=__importDefault(require(a13_0xfecfc4(0x164))),path_1=__importDefault(require('path'));dotenv_1[a13_0xfecfc4(0x159)][a13_0xfecfc4(0x16b)]();const app=(0x0,express_1[a13_0xfecfc4(0x159)])(),PORT=0x2329,connectDB=()=>__awaiter(void 0x0,void 0x0,void 0x0,function*(){const _0x2a6945=a13_0xfecfc4;try{const _0x31fa0a='mongodb://'+process[_0x2a6945(0x13b)][_0x2a6945(0x14b)]+':'+process[_0x2a6945(0x13b)][_0x2a6945(0x141)]+'@'+process['env'][_0x2a6945(0x158)]+':'+process[_0x2a6945(0x13b)][_0x2a6945(0x151)]+'/'+process[_0x2a6945(0x13b)][_0x2a6945(0x155)]+'?'+process[_0x2a6945(0x13b)][_0x2a6945(0x170)];yield mongoose_1[_0x2a6945(0x159)][_0x2a6945(0x14a)](_0x31fa0a),console[_0x2a6945(0x13f)](_0x2a6945(0x14c));}catch(_0x2ccafe){console['error'](_0x2a6945(0x138),_0x2ccafe),process[_0x2a6945(0x152)](0x1);}});exports[a13_0xfecfc4(0x136)]=connectDB;const limiter=(0x0,express_rate_limit_1[a13_0xfecfc4(0x159)])({'windowMs':0xf*0x3c*0x3e8,'max':0x320,'keyGenerator':_0x41e34b=>request_ip_1[a13_0xfecfc4(0x159)][a13_0xfecfc4(0x15b)](_0x41e34b)||'unknown'}),sanitizeMiddleware=(_0x395622,_0x1d4e68,_0x50bffd)=>{const _0x17f3df=a13_0xfecfc4,_0xe3af83=_0x3e1f2c=>typeof _0x3e1f2c===_0x17f3df(0x12e)?(0x0,xss_1[_0x17f3df(0x159)])(_0x3e1f2c):_0x3e1f2c;if(_0x395622[_0x17f3df(0x139)])_0x395622[_0x17f3df(0x139)]=Object[_0x17f3df(0x143)](Object['entries'](_0x395622[_0x17f3df(0x139)])[_0x17f3df(0x15e)](([_0x538006,_0x405500])=>[_0x538006,_0xe3af83(_0x405500)]));if(_0x395622[_0x17f3df(0x168)])_0x395622[_0x17f3df(0x168)]=Object[_0x17f3df(0x143)](Object[_0x17f3df(0x144)](_0x395622[_0x17f3df(0x168)])[_0x17f3df(0x15e)](([_0x3c75cf,_0x403c91])=>[_0x3c75cf,_0xe3af83(_0x403c91)]));if(_0x395622[_0x17f3df(0x169)])_0x395622[_0x17f3df(0x169)]=Object[_0x17f3df(0x143)](Object[_0x17f3df(0x144)](_0x395622['params'])[_0x17f3df(0x15e)](([_0x1628b7,_0x2d6328])=>[_0x1628b7,_0xe3af83(_0x2d6328)]));_0x50bffd();};app[a13_0xfecfc4(0x14d)](express_1[a13_0xfecfc4(0x159)][a13_0xfecfc4(0x178)]()),app[a13_0xfecfc4(0x14d)](body_parser_1['default'][a13_0xfecfc4(0x178)]({'limit':'100kb'})),app[a13_0xfecfc4(0x14d)](body_parser_1[a13_0xfecfc4(0x159)]['urlencoded']({'extended':!![],'limit':a13_0xfecfc4(0x12f)})),app['use']((0x0,cookie_parser_1[a13_0xfecfc4(0x159)])()),app['use']((0x0,cors_1[a13_0xfecfc4(0x159)])()),app[a13_0xfecfc4(0x14d)](request_ip_1[a13_0xfecfc4(0x159)]['mw']()),app[a13_0xfecfc4(0x14d)](sanitizeMiddleware),app[a13_0xfecfc4(0x14d)](limiter),app[a13_0xfecfc4(0x14d)]((0x0,helmet_1[a13_0xfecfc4(0x159)])());const storagePath=path_1[a13_0xfecfc4(0x159)][a13_0xfecfc4(0x177)](__dirname,a13_0xfecfc4(0x142));!fs_1[a13_0xfecfc4(0x159)][a13_0xfecfc4(0x134)](storagePath)&&fs_1['default'][a13_0xfecfc4(0x172)](storagePath,{'recursive':!![]});app[a13_0xfecfc4(0x14d)]((_0x2b1c3d,_0x373f04,_0x172749)=>{const _0x11df61=a13_0xfecfc4;_0x373f04[_0x11df61(0x15d)](_0x11df61(0x149),_0x11df61(0x171)),_0x373f04['header'](_0x11df61(0x13a),_0x11df61(0x14e)),_0x373f04['header']('X-XSS-Protection',_0x11df61(0x179)),_0x172749();}),app[a13_0xfecfc4(0x14d)](helmet_1['default'][a13_0xfecfc4(0x135)]({'directives':{'defaultSrc':[a13_0xfecfc4(0x146)],'scriptSrc':['\x27self\x27',a13_0xfecfc4(0x15c)]}})),app['set'](a13_0xfecfc4(0x167),a13_0xfecfc4(0x16e)),(0x0,exports['connectDB'])(),app[a13_0xfecfc4(0x14d)](a13_0xfecfc4(0x12d),userRoutes_1[a13_0xfecfc4(0x159)]),app[a13_0xfecfc4(0x14d)]('/frame/api/display',displayRoutes_1[a13_0xfecfc4(0x159)]),app[a13_0xfecfc4(0x16c)](a13_0xfecfc4(0x137),(_0x5c1da4,_0x201a31)=>{const _0x16bf4f=a13_0xfecfc4;_0x201a31[_0x16bf4f(0x145)](0xc8)['json']({'message':_0x16bf4f(0x132)});});const server=https_1['default']['createServer'](app);server['listen'](PORT,()=>{const _0x6ce6b6=a13_0xfecfc4;console[_0x6ce6b6(0x13f)](_0x6ce6b6(0x163)+PORT);});function a13_0x164a(){const _0xdfbca=['body','X-Frame-Options','env','helmet','cors','171198bqmRcR','log','1392540wnLuYa','MONGO_PASS','storage_iframe_player','fromEntries','entries','status','\x27self\x27','next','99DLwyaz','X-Content-Type-Options','connect','MONGO_USER','Connected\x20to\x20MongoDB\x20database:\x20iframe\x20screens','use','SAMEORIGIN','3316344gNkJQq','50mmyaeM','MONGO_PORT','exit','7cFcDMj','14404hFKeij','MONGO_DB','https','body-parser','MONGO_HOST','default','25936vuYEwY','getClientIp','trusted-cdn.com','header','map','./routes/userRoutes','2767254nOUgcb','mongoose','__esModule','iFrame\x20El-araby\x20Server\x20is\x20running\x20securely\x20at\x20port\x20:','./routes/displayRoutes','then','value','trust\x20proxy','query','params','done','config','get','__importDefault','127.0.0.1','__awaiter','MONGO_OPTIONS','nosniff','mkdirSync','dotenv','request-ip','55VrJlqS','4265240XpeuCp','join','json','1;\x20mode=block','/frame/api/user','string','100kb','express','apply','Hello,\x20this\x20is\x20Waged!','248ufwRwC','existsSync','contentSecurityPolicy','connectDB','/frame/Waged','MongoDB\x20connection\x20error:'];a13_0x164a=function(){return _0xdfbca;};return a13_0x164a();}