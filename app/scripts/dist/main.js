(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wsClient = require('./ws-client');

var _wsClient2 = _interopRequireDefault(_wsClient);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ChatApp = function ChatApp() {
    _classCallCheck(this, ChatApp);

    _wsClient2.default.init('ws://localhost:3001');
    _wsClient2.default.registerOpenHandler(function () {
        var message = new ChatMessage({ message: 'pow!' });

        _wsClient2.default.sendMessage(message.serialize());
    });
    _wsClient2.default.registerMessageHandler(function (data) {
        console.log(data);
    });
};

var ChatMessage = function () {
    function ChatMessage(_ref) {
        var m = _ref.message,
            _ref$user = _ref.user,
            u = _ref$user === undefined ? 'batman' : _ref$user,
            _ref$timestamp = _ref.timestamp,
            t = _ref$timestamp === undefined ? new Date().getTime() : _ref$timestamp;

        _classCallCheck(this, ChatMessage);

        this.user = u;
        this.message = m;
        this.timestamp = t;
    }

    _createClass(ChatMessage, [{
        key: 'serialize',
        value: function serialize() {
            return {
                user: this.user,
                message: this.message,
                timestamp: this.timestamp
            };
        }
    }]);

    return ChatMessage;
}();

exports.default = ChatApp;
// new ChatApp();

},{"./ws-client":3}],2:[function(require,module,exports){
'use strict';

var _app = require('./app');

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

new _app2.default();

},{"./app":1}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var socket = void 0; //using let so variable is not hoisted 

function init(url) {
    socket = new WebSocket(url);
    console.log('connecting...');
}

function registerOpenHandler(handlerFunction) {
    socket.onopen = function () {
        console.log('open');
        handlerFunction();
    };
}

function registerMessageHandler(handlerFunction) {
    socket.onmessage = function (e) {
        console.log('message', e.data);

        var data = JSON.parse(e.data);
        handlerFunction(data);
    };
}

function sendMessage(payload) {
    socket.send(JSON.stringify(payload));
}

exports.default = {
    init: init,
    registerOpenHandler: registerOpenHandler,
    registerMessageHandler: registerMessageHandler,
    sendMessage: sendMessage
};

},{}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvc2NyaXB0cy9zcmMvYXBwLmpzIiwiYXBwL3NjcmlwdHMvc3JjL21haW4uanMiLCJhcHAvc2NyaXB0cy9zcmMvd3MtY2xpZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7SUFFTSxPLEdBQ0YsbUJBQWM7QUFBQTs7QUFDVix1QkFBTyxJQUFQLENBQVkscUJBQVo7QUFDQSx1QkFBTyxtQkFBUCxDQUEyQixZQUFNO0FBQzdCLFlBQUksVUFBVSxJQUFJLFdBQUosQ0FBZ0IsRUFBRSxTQUFTLE1BQVgsRUFBaEIsQ0FBZDs7QUFFQSwyQkFBTyxXQUFQLENBQW1CLFFBQVEsU0FBUixFQUFuQjtBQUNILEtBSkQ7QUFLQSx1QkFBTyxzQkFBUCxDQUE4QixVQUFDLElBQUQsRUFBVTtBQUNwQyxnQkFBUSxHQUFSLENBQVksSUFBWjtBQUNILEtBRkQ7QUFHSCxDOztJQUdDLFc7QUFDRiwrQkFJRztBQUFBLFlBSFUsQ0FHVixRQUhDLE9BR0Q7QUFBQSw2QkFGQyxJQUVEO0FBQUEsWUFGTyxDQUVQLDZCQUZTLFFBRVQ7QUFBQSxrQ0FEQyxTQUNEO0FBQUEsWUFEWSxDQUNaLGtDQURlLElBQUksSUFBSixFQUFELENBQWEsT0FBYixFQUNkOztBQUFBOztBQUNDLGFBQUssSUFBTCxHQUFZLENBQVo7QUFDQSxhQUFLLE9BQUwsR0FBZSxDQUFmO0FBQ0EsYUFBSyxTQUFMLEdBQWlCLENBQWpCO0FBQ0g7Ozs7b0NBQ1c7QUFDUixtQkFBTztBQUNILHNCQUFNLEtBQUssSUFEUjtBQUVILHlCQUFTLEtBQUssT0FGWDtBQUdILDJCQUFXLEtBQUs7QUFIYixhQUFQO0FBS0g7Ozs7OztrQkFHVSxPO0FBQ2Y7Ozs7O0FDcENBOzs7Ozs7QUFDQSxJQUFJLGFBQUo7Ozs7Ozs7O0FDREEsSUFBSSxlQUFKLEMsQ0FBWTs7QUFFWixTQUFTLElBQVQsQ0FBYyxHQUFkLEVBQW1CO0FBQ2YsYUFBUyxJQUFJLFNBQUosQ0FBYyxHQUFkLENBQVQ7QUFDQSxZQUFRLEdBQVIsQ0FBWSxlQUFaO0FBQ0g7O0FBRUQsU0FBUyxtQkFBVCxDQUE2QixlQUE3QixFQUE4QztBQUMxQyxXQUFPLE1BQVAsR0FBZ0IsWUFBTTtBQUNsQixnQkFBUSxHQUFSLENBQVksTUFBWjtBQUNBO0FBQ0gsS0FIRDtBQUlIOztBQUVELFNBQVMsc0JBQVQsQ0FBZ0MsZUFBaEMsRUFBaUQ7QUFDN0MsV0FBTyxTQUFQLEdBQW1CLFVBQUMsQ0FBRCxFQUFPO0FBQ3RCLGdCQUFRLEdBQVIsQ0FBWSxTQUFaLEVBQXVCLEVBQUUsSUFBekI7O0FBRUEsWUFBSSxPQUFPLEtBQUssS0FBTCxDQUFXLEVBQUUsSUFBYixDQUFYO0FBQ0Esd0JBQWdCLElBQWhCO0FBQ0gsS0FMRDtBQU1IOztBQUVELFNBQVMsV0FBVCxDQUFxQixPQUFyQixFQUE4QjtBQUMxQixXQUFPLElBQVAsQ0FBWSxLQUFLLFNBQUwsQ0FBZSxPQUFmLENBQVo7QUFDSDs7a0JBRWM7QUFDWCxjQURXO0FBRVgsNENBRlc7QUFHWCxrREFIVztBQUlYO0FBSlcsQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImltcG9ydCBzb2NrZXQgZnJvbSAnLi93cy1jbGllbnQnO1xyXG5cclxuY2xhc3MgQ2hhdEFwcCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzb2NrZXQuaW5pdCgnd3M6Ly9sb2NhbGhvc3Q6MzAwMScpO1xyXG4gICAgICAgIHNvY2tldC5yZWdpc3Rlck9wZW5IYW5kbGVyKCgpID0+IHtcclxuICAgICAgICAgICAgbGV0IG1lc3NhZ2UgPSBuZXcgQ2hhdE1lc3NhZ2UoeyBtZXNzYWdlOiAncG93IScgfSk7XHJcblxyXG4gICAgICAgICAgICBzb2NrZXQuc2VuZE1lc3NhZ2UobWVzc2FnZS5zZXJpYWxpemUoKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgc29ja2V0LnJlZ2lzdGVyTWVzc2FnZUhhbmRsZXIoKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIENoYXRNZXNzYWdlIHtcclxuICAgIGNvbnN0cnVjdG9yKHtcclxuICAgICAgICBtZXNzYWdlOiBtLFxyXG4gICAgICAgIHVzZXI6IHU9J2JhdG1hbicsXHJcbiAgICAgICAgdGltZXN0YW1wOiB0PShuZXcgRGF0ZSgpKS5nZXRUaW1lKClcclxuICAgIH0pIHtcclxuICAgICAgICB0aGlzLnVzZXIgPSB1O1xyXG4gICAgICAgIHRoaXMubWVzc2FnZSA9IG07XHJcbiAgICAgICAgdGhpcy50aW1lc3RhbXAgPSB0O1xyXG4gICAgfVxyXG4gICAgc2VyaWFsaXplKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHVzZXI6IHRoaXMudXNlcixcclxuICAgICAgICAgICAgbWVzc2FnZTogdGhpcy5tZXNzYWdlLFxyXG4gICAgICAgICAgICB0aW1lc3RhbXA6IHRoaXMudGltZXN0YW1wXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2hhdEFwcDtcclxuLy8gbmV3IENoYXRBcHAoKTsiLCJpbXBvcnQgQ2hhdEFwcCBmcm9tICcuL2FwcCc7XHJcbm5ldyBDaGF0QXBwKCk7XHJcbiIsImxldCBzb2NrZXQ7IC8vdXNpbmcgbGV0IHNvIHZhcmlhYmxlIGlzIG5vdCBob2lzdGVkIFxyXG5cclxuZnVuY3Rpb24gaW5pdCh1cmwpIHtcclxuICAgIHNvY2tldCA9IG5ldyBXZWJTb2NrZXQodXJsKTtcclxuICAgIGNvbnNvbGUubG9nKCdjb25uZWN0aW5nLi4uJyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlZ2lzdGVyT3BlbkhhbmRsZXIoaGFuZGxlckZ1bmN0aW9uKSB7XHJcbiAgICBzb2NrZXQub25vcGVuID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdvcGVuJyk7XHJcbiAgICAgICAgaGFuZGxlckZ1bmN0aW9uKCk7XHJcbiAgICB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiByZWdpc3Rlck1lc3NhZ2VIYW5kbGVyKGhhbmRsZXJGdW5jdGlvbikge1xyXG4gICAgc29ja2V0Lm9ubWVzc2FnZSA9IChlKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ21lc3NhZ2UnLCBlLmRhdGEpO1xyXG4gICAgXHJcbiAgICAgICAgbGV0IGRhdGEgPSBKU09OLnBhcnNlKGUuZGF0YSk7XHJcbiAgICAgICAgaGFuZGxlckZ1bmN0aW9uKGRhdGEpO1xyXG4gICAgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2VuZE1lc3NhZ2UocGF5bG9hZCkge1xyXG4gICAgc29ja2V0LnNlbmQoSlNPTi5zdHJpbmdpZnkocGF5bG9hZCkpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBpbml0LFxyXG4gICAgcmVnaXN0ZXJPcGVuSGFuZGxlcixcclxuICAgIHJlZ2lzdGVyTWVzc2FnZUhhbmRsZXIsXHJcbiAgICBzZW5kTWVzc2FnZVxyXG59XHJcblxyXG4iXX0=
