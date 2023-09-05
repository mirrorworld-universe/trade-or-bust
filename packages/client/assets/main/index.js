System.register("chunks:///_virtual/button_raisingcapital.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ponzi-controller.ts', './ccc_msg.ts', './time_utils.ts', './component_state.ts', './ponzi_config.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Label, Button, log, sys, Component, warn, ponzi_controller, ccc_msg, time_utils, component_state, ponzi_config;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Label = module.Label;
      Button = module.Button;
      log = module.log;
      sys = module.sys;
      Component = module.Component;
      warn = module.warn;
    }, function (module) {
      ponzi_controller = module.ponzi_controller;
    }, function (module) {
      ccc_msg = module.ccc_msg;
    }, function (module) {
      time_utils = module.time_utils;
    }, function (module) {
      component_state = module.component_state;
    }, function (module) {
      ponzi_config = module.ponzi_config;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;

      cclegacy._RF.push({}, "534b2tDzAlF7JnGIhuhuB56", "button_raisingcapital", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var button_raisingcapital = exports('button_raisingcapital', (_dec = ccclass('button_raisingcapital'), _dec2 = property({
        type: Label
      }), _dec3 = property({
        type: Button
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(button_raisingcapital, _Component);

        function button_raisingcapital() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "label", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "button", _descriptor2, _assertThisInitialized(_this));

          _this._inited = false; //seconds

          _this.leftTime = void 0;
          _this.endTime = void 0;
          _this.startTime = void 0;
          _this.timer = void 0;
          return _this;
        }

        var _proto = button_raisingcapital.prototype;

        _proto.start = function start() {};

        _proto.update = /*#__PURE__*/function () {
          var _update = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(deltaTime) {
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  if (this._inited) {
                    _context.next = 3;
                    break;
                  }

                  _context.next = 3;
                  return this.init();

                case 3:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));

          function update(_x) {
            return _update.apply(this, arguments);
          }

          return update;
        }();

        _proto.onBtnClicked = /*#__PURE__*/function () {
          var _onBtnClicked = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  ponzi_controller.instance.sendCCCMsg(ccc_msg.show_pick_asset, true);

                case 1:
                case "end":
                  return _context2.stop();
              }
            }, _callee2);
          }));

          function onBtnClicked() {
            return _onBtnClicked.apply(this, arguments);
          }

          return onBtnClicked;
        }();

        _proto.init = /*#__PURE__*/function () {
          var _init = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
            var gameState, playerEntity, raiseCountdown;
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  gameState = globalThis.ponzi.gameState;

                  if (!(gameState != component_state.game_ingame)) {
                    _context3.next = 3;
                    break;
                  }

                  return _context3.abrupt("return");

                case 3:
                  playerEntity = globalThis.ponzi.currentPlayer;

                  if (playerEntity) {
                    _context3.next = 6;
                    break;
                  }

                  return _context3.abrupt("return");

                case 6:
                  _context3.next = 8;
                  return window.queryValue == null ? void 0 : window.queryValue(window.env.components.RaiseColddown, playerEntity);

                case 8:
                  raiseCountdown = _context3.sent;

                  if (raiseCountdown) {
                    _context3.next = 11;
                    break;
                  }

                  return _context3.abrupt("return");

                case 11:
                  this._inited = true;
                  _context3.next = 14;
                  return this.updateUI();

                case 14:
                  this._registerListeners();

                case 15:
                case "end":
                  return _context3.stop();
              }
            }, _callee3, this);
          }));

          function init() {
            return _init.apply(this, arguments);
          }

          return init;
        }();

        _proto.updateUI = /*#__PURE__*/function () {
          var _updateUI = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
            var playerEntity, raiseCountdown, timeStamp, useableTime;
            return _regeneratorRuntime().wrap(function _callee4$(_context4) {
              while (1) switch (_context4.prev = _context4.next) {
                case 0:
                  playerEntity = globalThis.ponzi.currentPlayer;
                  _context4.next = 3;
                  return window.queryValue == null ? void 0 : window.queryValue(window.env.components.RaiseColddown, playerEntity);

                case 3:
                  raiseCountdown = _context4.sent;

                  if (raiseCountdown) {
                    _context4.next = 6;
                    break;
                  }

                  return _context4.abrupt("return");

                case 6:
                  timeStamp = sys.now() / 1000;
                  useableTime = Number(raiseCountdown.end);
                  warn("btn_raise:", timeStamp, useableTime);

                  if (useableTime < timeStamp) {
                    this.label.string = "Raising Capital";
                    this.button.interactable = true;
                  } else {
                    this.label.node.active = true;
                    this.button.interactable = false;
                    this.leftTime = useableTime - timeStamp;
                    this.startTime = Number(raiseCountdown.start);
                    this.endTime = Number(raiseCountdown.end);
                    this.startCountDownAnimation();
                  }

                case 10:
                case "end":
                  return _context4.stop();
              }
            }, _callee4, this);
          }));

          function updateUI() {
            return _updateUI.apply(this, arguments);
          }

          return updateUI;
        }();

        _proto._registerListeners = function _registerListeners() {
          var self = this;
          ponzi_controller.instance.on(ccc_msg.on_raisecolddown_update, function (update) {
            self.updateUI();
          });
        };

        _proto.startCountDownAnimation = function startCountDownAnimation() {
          var self = this; // 计算重复次数，等于结束时间减一

          var repeat = this.endTime - 1; // 调用schedule方法，传入回调函数，间隔时间为1秒，重复次数为repeat，延迟时间为0

          this.unschedule(this.minuesTimeLabel);
          this.schedule(this.minuesTimeLabel, 1, repeat, 0);
          clearTimeout(this.timer);
          log("Start a timer within", this.leftTime);
          this.timer = setTimeout(function () {
            self.updateUI();
            self.unschedule(self.minuesTimeLabel);
          }, this.leftTime * 1000);
        };

        _proto.minuesTimeLabel = function minuesTimeLabel() {
          var nowTime = sys.now() / 1000;
          var endTime = this.endTime;
          var startTime = this.startTime;
          this.label.string = time_utils.calculateRemainingTime(nowTime, endTime, startTime, ponzi_config.fakeBlockTime);
        };

        return button_raisingcapital;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "label", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "button", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/bytes_utils.ts", ['cc'], function (exports) {
  var cclegacy, log;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      log = module.log;
    }],
    execute: function () {
      cclegacy._RF.push({}, "1d0530WzXxL4qvSX/MEFrl0", "bytes_utils", undefined);

      var bytes_utils = exports('bytes_utils', /*#__PURE__*/function () {
        function bytes_utils() {}

        bytes_utils.decodeTradeListItem = function decodeTradeListItem(encodedBytes) {
          log("encodedBytes is ", encodedBytes);
          if (!encodedBytes) return null;
          var hexString = encodedBytes.slice(2); // const bytes = hexString.match(/.{1,2}/g)?.map(byte => parseInt(byte, 16));

          if (!hexString) {
            return null;
          }

          var length = hexString.length;
          log(length);
          var lll = 64;
          var idx = 0; //这个数字是0000020，十进制32，猜测表示每一位的长度

          var bytes1 = hexString.substring(idx, idx + lll); // log("from ",idx," to ",idx + lll," is:",bytes1);

          idx += lll; //猜测这个值表示之后的值在当前list中的index

          var bytes2 = hexString.substring(idx, idx + lll); // log("from ",idx," to ",idx + lll," is:",bytes2);

          idx += lll;
          var bytes3 = hexString.substring(idx, idx + lll); // log("from ",idx," to ",idx + lll," is:",bytes3);

          idx += lll;
          var bytes4 = hexString.substring(idx, idx + lll); // log("from ",idx," to ",idx + lll," is:",bytes4);

          idx += lll;
          var bytes5 = hexString.substring(idx, idx + lll); // log("from ",idx," to ",idx + lll," is:",bytes5);
          // const partner = this.byteArrayToHexString(partnerBytes);

          var tradeListItem = {
            index: Number(this.hexToBinary(bytes2)),
            isPresenter: Number(this.hexToBinary(bytes3)) === 1,
            isSuccess: Number(this.hexToBinary(bytes4)) === 1,
            partner: '0x' + bytes5
          };
          return tradeListItem;
        };

        bytes_utils.hexToBinary = function hexToBinary(hexString) {
          // 去除开头的 "0x"
          var hexWithoutPrefix = hexString.slice(2);
          var binaryString = '';

          for (var i = 0; i < hexWithoutPrefix.length; i++) {
            var hexChar = hexWithoutPrefix[i];
            var nibbleValue = parseInt(hexChar, 16); // 将每个十六进制字符转换为对应的 4 位二进制

            var nibbleBinary = nibbleValue.toString(2); // 补零，使得每个四位二进制数长度都为 4

            var paddedNibbleBinary = '0'.repeat(4 - nibbleBinary.length) + nibbleBinary;
            binaryString += paddedNibbleBinary;
          }

          return binaryString;
        };

        bytes_utils.byteArrayToHexString = function byteArrayToHexString(bytes) {
          return bytes.map(function (_byte) {
            return _byte.toString(16).length % 2 === 0 ? _byte.toString(16) : "0" + _byte.toString(16);
          }).join('');
        };

        return bytes_utils;
      }());

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ccc_msg.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "59d27HvRm5NarxwrmaHORg8", "ccc_msg", undefined);

      var ccc_msg = exports('ccc_msg', function ccc_msg() {});
      ccc_msg.on_player_add = "on_player_add";
      ccc_msg.on_player_update = "on_player_update";
      ccc_msg.on_gamestate_update = "on_gamestate_update";
      ccc_msg.on_gamemap_update = "on_gamemap_update";
      ccc_msg.on_gamemap_walkrecord_update = "on_gamemap_walkrecord_update";
      ccc_msg.on_mapitem_update = "on_mapitem_update";
      ccc_msg.on_isplayer_update = "on_isplayer_update";
      ccc_msg.network_block_ui = "network_block_ui";
      ccc_msg.single_button_dialog = "single_button_dialog";
      ccc_msg.show_pick_asset = "show_pick_asset";
      ccc_msg.show_pick_fund = "show_pick_fund";
      ccc_msg.show_rules = "show_rules";
      ccc_msg.show_trade = "show_trade";
      ccc_msg.show_trade_ask = "show_trade_ask";
      ccc_msg.show_trade_input = "show_trade_input";
      ccc_msg.show_rank = "show_rand";
      ccc_msg.on_raisecolddown_update = "on_raisecolddown_update";
      ccc_msg.on_assetslist_update = "on_assetslist_update";

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/changing_ellipses.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, Component;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Label = module.Label;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;

      cclegacy._RF.push({}, "9cb46RSpf1AAa6ibWoXrpH1", "changing_ellipses", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var changing_ellipses = exports('changing_ellipses', (_dec = ccclass('changing_ellipses'), _dec2 = property(Label), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(changing_ellipses, _Component);

        function changing_ellipses() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "label", _descriptor, _assertThisInitialized(_this));

          _this.ellipsisCount = 0;
          _this.timer = null;
          return _this;
        }

        var _proto = changing_ellipses.prototype;

        _proto.onEnable = function onEnable() {
          this.startEllipsisAnimation();
        };

        _proto.onDisable = function onDisable() {
          this.stopEllipsisAnimation();
        };

        _proto.updateLabel = function updateLabel(myString) {
          this.label.string = myString + ".".repeat(this.ellipsisCount);
        };

        _proto.startEllipsisAnimation = function startEllipsisAnimation() {
          var _this2 = this;

          this.timer = setInterval(function () {
            _this2.ellipsisCount = (_this2.ellipsisCount + 1) % 4;

            _this2.updateLabel(_this2.label.string.replace(/\.*$/, ""));
          }, 500);
        };

        _proto.stopEllipsisAnimation = function stopEllipsisAnimation() {
          clearInterval(this.timer);
          this.timer = null;
        };

        return changing_ellipses;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "label", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/component_state.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "38324j/AvxLkoz63j/B2dvp", "component_state", undefined);

      var component_state = exports('component_state', function component_state() {});
      component_state.player_inlobby = 1;
      component_state.player_ingame = 2;
      component_state.game_waiting = 1;
      component_state.game_ingame = 2;

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/coor_utils.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "bff6aGdFNBMKpL9ymzamZne", "coor_utils", undefined);

      var coor_utils = exports('coor_utils', /*#__PURE__*/function () {
        function coor_utils() {}

        coor_utils.getNeighboringHexes = function getNeighboringHexes(row, col) {
          // 根据当前行数选择相应的方向数组
          var directions = row % 2 === 0 ? [{
            rowOff: 0,
            colOff: 1
          }, // 右
          {
            rowOff: 0,
            colOff: -1
          }, // 左
          {
            rowOff: 1,
            colOff: -1
          }, // 左上
          {
            rowOff: -1,
            colOff: -1
          }, // 左下
          {
            rowOff: 1,
            colOff: 0
          }, // 右上
          {
            rowOff: -1,
            colOff: 0
          } // 右下
          ] : [{
            rowOff: 0,
            colOff: -1
          }, // 左
          {
            rowOff: 0,
            colOff: 1
          }, // 右
          {
            rowOff: 1,
            colOff: 0
          }, // 左上
          {
            rowOff: -1,
            colOff: 0
          }, // 左下
          {
            rowOff: 1,
            colOff: 1
          }, // 右上
          {
            rowOff: -1,
            colOff: 1
          } // 右下
          ];
          var neighboringHexes = [];

          for (var i = 0; i < directions.length; i++) {
            var dir = directions[i];
            var neighborQ = row + dir.rowOff;
            var neighborR = col + dir.colOff;
            neighboringHexes.push({
              row: neighborQ,
              col: neighborR
            });
          }

          return neighboringHexes;
        };

        return coor_utils;
      }());

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/counter-label.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ponzi-controller.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, Label, log, Component, ponzi_controller;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Label = module.Label;
      log = module.log;
      Component = module.Component;
    }, function (module) {
      ponzi_controller = module.ponzi_controller;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "c8007sglyBNMIgtqDRM0y2U", "counter-label", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var counter_label = exports('counter_label', (_dec = ccclass('counter_label'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(counter_label, _Component);

        function counter_label() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this.inited = false;
          return _this;
        }

        var _proto = counter_label.prototype;

        _proto.start = function start() {};

        _proto.init = function init() {
          var _globalThis$ponzi;

          if ((_globalThis$ponzi = globalThis.ponzi) != null && _globalThis$ponzi.counter) {
            this.inited = true;
            var label = this.node.getComponent(Label);
            label.string = "New count is:" + globalThis.ponzi.counter.value;
            var self = this;
            ponzi_controller.instance.on("ccc_counter_value", function (msg) {
              var label = self.node.getComponent(Label);
              label.string = "New count is:" + msg;
            });
          } else {
            log("counter is not prepared!");
          }
        };

        _proto.update = function update(deltaTime) {
          if (!this.inited) this.init();
        };

        _proto.onBtnAddClicked = function onBtnAddClicked() {
          console.log("onBtnAddClicked clicked!");
          window.increment == null ? void 0 : window.increment();
        };

        _proto.onBtnAddRoomClicked = function onBtnAddRoomClicked() {
          console.log("onBtnAddRoomClicked clicked!");
          window.createRoom == null ? void 0 : window.createRoom();
        };

        return counter_label;
      }(Component)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/data_center.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _createClass, cclegacy, warn, log, sys;

  return {
    setters: [function (module) {
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      warn = module.warn;
      log = module.log;
      sys = module.sys;
    }],
    execute: function () {
      cclegacy._RF.push({}, "fe2486vschNp7nd3k0xklcP", "data_center", undefined);

      var data_center = exports('data_center', /*#__PURE__*/function () {
        function data_center() {
          this._mapRecordKey = "map_record_key_";
        }

        var _proto = data_center.prototype;

        _proto.data_center = function data_center() {}; // 存储二维数组


        _proto.saveMapWalkRecord = function saveMapWalkRecord(data) {
          var gameObj = globalThis.ponzi.game;

          if (!gameObj) {
            warn("No gameobj when saving map record");
            return;
          }

          var jsonString = JSON.stringify(data);
          log("Save map record:" + this._mapRecordKey + gameObj.gameId + jsonString);
          sys.localStorage.setItem(this._mapRecordKey + gameObj.gameId, jsonString);
        } // 获取二维数组
        ;

        _proto.loadMapWalkRecord = function loadMapWalkRecord() {
          var gameObj = globalThis.ponzi.game;

          if (!gameObj) {
            warn("No gameobj when loading map record");
            return null;
          }

          var jsonString = sys.localStorage.getItem(this._mapRecordKey + gameObj.gameId);

          if (jsonString) {
            var recordArray = JSON.parse(jsonString);
            log("load map record:" + this._mapRecordKey + gameObj.gameId + jsonString);
            return recordArray;
          } else {
            var newArray = [];
            this.saveMapWalkRecord(newArray);
            return newArray;
          }
        };

        _createClass(data_center, null, [{
          key: "instance",
          get: function get() {
            // 如果实例不存在，就创建一个新的实例并赋值给静态属性
            if (!data_center._instance) {
              data_center._instance = new data_center();
            } // 返回静态属性


            return data_center._instance;
          }
        }]);

        return data_center;
      }());
      data_center._instance = void 0;

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/debug-view-runtime-control.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Color, Canvas, UITransform, instantiate, Label, RichText, Toggle, Button, director, Component;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Color = module.Color;
      Canvas = module.Canvas;
      UITransform = module.UITransform;
      instantiate = module.instantiate;
      Label = module.Label;
      RichText = module.RichText;
      Toggle = module.Toggle;
      Button = module.Button;
      director = module.director;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3;

      cclegacy._RF.push({}, "b2bd1+njXxJxaFY3ymm06WU", "debug-view-runtime-control", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var DebugViewRuntimeControl = exports('DebugViewRuntimeControl', (_dec = ccclass('internal.DebugViewRuntimeControl'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(DebugViewRuntimeControl, _Component);

        function DebugViewRuntimeControl() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "compositeModeToggle", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "singleModeToggle", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "EnableAllCompositeModeButton", _descriptor3, _assertThisInitialized(_this));

          _this._single = 0;
          _this.strSingle = ['No Single Debug', 'Vertex Color', 'Vertex Normal', 'Vertex Tangent', 'World Position', 'Vertex Mirror', 'Face Side', 'UV0', 'UV1', 'UV Lightmap', 'Project Depth', 'Linear Depth', 'Fragment Normal', 'Fragment Tangent', 'Fragment Binormal', 'Base Color', 'Diffuse Color', 'Specular Color', 'Transparency', 'Metallic', 'Roughness', 'Specular Intensity', 'IOR', 'Direct Diffuse', 'Direct Specular', 'Direct All', 'Env Diffuse', 'Env Specular', 'Env All', 'Emissive', 'Light Map', 'Shadow', 'AO', 'Fresnel', 'Direct Transmit Diffuse', 'Direct Transmit Specular', 'Env Transmit Diffuse', 'Env Transmit Specular', 'Transmit All', 'Direct Internal Specular', 'Env Internal Specular', 'Internal All', 'Fog'];
          _this.strComposite = ['Direct Diffuse', 'Direct Specular', 'Env Diffuse', 'Env Specular', 'Emissive', 'Light Map', 'Shadow', 'AO', 'Normal Map', 'Fog', 'Tone Mapping', 'Gamma Correction', 'Fresnel', 'Transmit Diffuse', 'Transmit Specular', 'Internal Specular', 'TT'];
          _this.strMisc = ['CSM Layer Coloration', 'Lighting With Albedo'];
          _this.compositeModeToggleList = [];
          _this.singleModeToggleList = [];
          _this.miscModeToggleList = [];
          _this.textComponentList = [];
          _this.labelComponentList = [];
          _this.textContentList = [];
          _this.hideButtonLabel = void 0;
          _this._currentColorIndex = 0;
          _this.strColor = ['<color=#ffffff>', '<color=#000000>', '<color=#ff0000>', '<color=#00ff00>', '<color=#0000ff>'];
          _this.color = [Color.WHITE, Color.BLACK, Color.RED, Color.GREEN, Color.BLUE];
          return _this;
        }

        var _proto = DebugViewRuntimeControl.prototype;

        _proto.start = function start() {
          // get canvas resolution
          var canvas = this.node.parent.getComponent(Canvas);

          if (!canvas) {
            console.error('debug-view-runtime-control should be child of Canvas');
            return;
          }

          var uiTransform = this.node.parent.getComponent(UITransform);
          var halfScreenWidth = uiTransform.width * 0.5;
          var halfScreenHeight = uiTransform.height * 0.5;
          var x = -halfScreenWidth + halfScreenWidth * 0.1,
              y = halfScreenHeight - halfScreenHeight * 0.1;
          var width = 200,
              height = 20; // new nodes

          var miscNode = this.node.getChildByName('MiscMode');
          var buttonNode = instantiate(miscNode);
          buttonNode.parent = this.node;
          buttonNode.name = 'Buttons';
          var titleNode = instantiate(miscNode);
          titleNode.parent = this.node;
          titleNode.name = 'Titles'; // title

          for (var i = 0; i < 2; i++) {
            var newLabel = instantiate(this.EnableAllCompositeModeButton.getChildByName('Label'));
            newLabel.setPosition(x + (i > 0 ? 50 + width * 2 : 150), y, 0.0);
            newLabel.setScale(0.75, 0.75, 0.75);
            newLabel.parent = titleNode;

            var _labelComponent = newLabel.getComponent(Label);

            _labelComponent.string = i ? '----------Composite Mode----------' : '----------Single Mode----------';
            _labelComponent.color = Color.WHITE;
            _labelComponent.overflow = 0;
            this.labelComponentList[this.labelComponentList.length] = _labelComponent;
          }

          y -= height; // single

          var currentRow = 0;

          for (var _i = 0; _i < this.strSingle.length; _i++, currentRow++) {
            if (_i === this.strSingle.length >> 1) {
              x += width;
              currentRow = 0;
            }

            var newNode = _i ? instantiate(this.singleModeToggle) : this.singleModeToggle;
            newNode.setPosition(x, y - height * currentRow, 0.0);
            newNode.setScale(0.5, 0.5, 0.5);
            newNode.parent = this.singleModeToggle.parent;
            var textComponent = newNode.getComponentInChildren(RichText);
            textComponent.string = this.strSingle[_i];
            this.textComponentList[this.textComponentList.length] = textComponent;
            this.textContentList[this.textContentList.length] = textComponent.string;
            newNode.on(Toggle.EventType.TOGGLE, this.toggleSingleMode, this);
            this.singleModeToggleList[_i] = newNode;
          }

          x += width; // buttons

          this.EnableAllCompositeModeButton.setPosition(x + 15, y, 0.0);
          this.EnableAllCompositeModeButton.setScale(0.5, 0.5, 0.5);
          this.EnableAllCompositeModeButton.on(Button.EventType.CLICK, this.enableAllCompositeMode, this);
          this.EnableAllCompositeModeButton.parent = buttonNode;
          var labelComponent = this.EnableAllCompositeModeButton.getComponentInChildren(Label);
          this.labelComponentList[this.labelComponentList.length] = labelComponent;
          var changeColorButton = instantiate(this.EnableAllCompositeModeButton);
          changeColorButton.setPosition(x + 90, y, 0.0);
          changeColorButton.setScale(0.5, 0.5, 0.5);
          changeColorButton.on(Button.EventType.CLICK, this.changeTextColor, this);
          changeColorButton.parent = buttonNode;
          labelComponent = changeColorButton.getComponentInChildren(Label);
          labelComponent.string = 'TextColor';
          this.labelComponentList[this.labelComponentList.length] = labelComponent;
          var HideButton = instantiate(this.EnableAllCompositeModeButton);
          HideButton.setPosition(x + 200, y, 0.0);
          HideButton.setScale(0.5, 0.5, 0.5);
          HideButton.on(Button.EventType.CLICK, this.hideUI, this);
          HideButton.parent = this.node.parent;
          labelComponent = HideButton.getComponentInChildren(Label);
          labelComponent.string = 'Hide UI';
          this.labelComponentList[this.labelComponentList.length] = labelComponent;
          this.hideButtonLabel = labelComponent; // misc

          y -= 40;

          for (var _i2 = 0; _i2 < this.strMisc.length; _i2++) {
            var _newNode = instantiate(this.compositeModeToggle);

            _newNode.setPosition(x, y - height * _i2, 0.0);

            _newNode.setScale(0.5, 0.5, 0.5);

            _newNode.parent = miscNode;

            var _textComponent = _newNode.getComponentInChildren(RichText);

            _textComponent.string = this.strMisc[_i2];
            this.textComponentList[this.textComponentList.length] = _textComponent;
            this.textContentList[this.textContentList.length] = _textComponent.string;

            var toggleComponent = _newNode.getComponent(Toggle);

            toggleComponent.isChecked = _i2 ? true : false;

            _newNode.on(Toggle.EventType.TOGGLE, _i2 ? this.toggleLightingWithAlbedo : this.toggleCSMColoration, this);

            this.miscModeToggleList[_i2] = _newNode;
          } // composite


          y -= 150;

          for (var _i3 = 0; _i3 < this.strComposite.length; _i3++) {
            var _newNode2 = _i3 ? instantiate(this.compositeModeToggle) : this.compositeModeToggle;

            _newNode2.setPosition(x, y - height * _i3, 0.0);

            _newNode2.setScale(0.5, 0.5, 0.5);

            _newNode2.parent = this.compositeModeToggle.parent;

            var _textComponent2 = _newNode2.getComponentInChildren(RichText);

            _textComponent2.string = this.strComposite[_i3];
            this.textComponentList[this.textComponentList.length] = _textComponent2;
            this.textContentList[this.textContentList.length] = _textComponent2.string;

            _newNode2.on(Toggle.EventType.TOGGLE, this.toggleCompositeMode, this);

            this.compositeModeToggleList[_i3] = _newNode2;
          }
        };

        _proto.isTextMatched = function isTextMatched(textUI, textDescription) {
          var tempText = new String(textUI);
          var findIndex = tempText.search('>');

          if (findIndex === -1) {
            return textUI === textDescription;
          } else {
            tempText = tempText.substr(findIndex + 1);
            tempText = tempText.substr(0, tempText.search('<'));
            return tempText === textDescription;
          }
        };

        _proto.toggleSingleMode = function toggleSingleMode(toggle) {
          var debugView = director.root.debugView;
          var textComponent = toggle.getComponentInChildren(RichText);

          for (var i = 0; i < this.strSingle.length; i++) {
            if (this.isTextMatched(textComponent.string, this.strSingle[i])) {
              debugView.singleMode = i;
            }
          }
        };

        _proto.toggleCompositeMode = function toggleCompositeMode(toggle) {
          var debugView = director.root.debugView;
          var textComponent = toggle.getComponentInChildren(RichText);

          for (var i = 0; i < this.strComposite.length; i++) {
            if (this.isTextMatched(textComponent.string, this.strComposite[i])) {
              debugView.enableCompositeMode(i, toggle.isChecked);
            }
          }
        };

        _proto.toggleLightingWithAlbedo = function toggleLightingWithAlbedo(toggle) {
          var debugView = director.root.debugView;
          debugView.lightingWithAlbedo = toggle.isChecked;
        };

        _proto.toggleCSMColoration = function toggleCSMColoration(toggle) {
          var debugView = director.root.debugView;
          debugView.csmLayerColoration = toggle.isChecked;
        };

        _proto.enableAllCompositeMode = function enableAllCompositeMode(button) {
          var debugView = director.root.debugView;
          debugView.enableAllCompositeMode(true);

          for (var i = 0; i < this.compositeModeToggleList.length; i++) {
            var _toggleComponent = this.compositeModeToggleList[i].getComponent(Toggle);

            _toggleComponent.isChecked = true;
          }

          var toggleComponent = this.miscModeToggleList[0].getComponent(Toggle);
          toggleComponent.isChecked = false;
          debugView.csmLayerColoration = false;
          toggleComponent = this.miscModeToggleList[1].getComponent(Toggle);
          toggleComponent.isChecked = true;
          debugView.lightingWithAlbedo = true;
        };

        _proto.hideUI = function hideUI(button) {
          var titleNode = this.node.getChildByName('Titles');
          var activeValue = !titleNode.active;
          this.singleModeToggleList[0].parent.active = activeValue;
          this.miscModeToggleList[0].parent.active = activeValue;
          this.compositeModeToggleList[0].parent.active = activeValue;
          this.EnableAllCompositeModeButton.parent.active = activeValue;
          titleNode.active = activeValue;
          this.hideButtonLabel.string = activeValue ? 'Hide UI' : 'Show UI';
        };

        _proto.changeTextColor = function changeTextColor(button) {
          this._currentColorIndex++;

          if (this._currentColorIndex >= this.strColor.length) {
            this._currentColorIndex = 0;
          }

          for (var i = 0; i < this.textComponentList.length; i++) {
            this.textComponentList[i].string = this.strColor[this._currentColorIndex] + this.textContentList[i] + '</color>';
          }

          for (var _i4 = 0; _i4 < this.labelComponentList.length; _i4++) {
            this.labelComponentList[_i4].color = this.color[this._currentColorIndex];
          }
        };

        _proto.onLoad = function onLoad() {};

        _proto.update = function update(deltaTime) {};

        return DebugViewRuntimeControl;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "compositeModeToggle", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "singleModeToggle", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "EnableAllCompositeModeButton", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/FakeMessageCenter.ts", ['cc'], function (exports) {
  var cclegacy, _decorator;

  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }],
    execute: function () {
      var _dec, _class, _class2;

      cclegacy._RF.push({}, "8c811sdB9lJhrQ4jI2GzBIO", "FakeMessageCenter", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var FakeMessageCenter = exports('FakeMessageCenter', (_dec = ccclass('FakeMessageCenter'), _dec(_class = (_class2 = /*#__PURE__*/function () {
        function FakeMessageCenter() {
          this.Broardcast = void 0;
          this.game = void 0;
          this.gameMap = void 0;
        } // 定义一个静态方法，用来获取该实例


        FakeMessageCenter.getInstance = function getInstance() {
          // 如果实例不存在，就创建一个新的实例
          if (!this.instance) {
            this.instance = new FakeMessageCenter();
          } // 返回实例


          return this.instance;
        };

        var _proto = FakeMessageCenter.prototype;

        _proto.FakeMessageCenter = function FakeMessageCenter() {// ...
        };

        return FakeMessageCenter;
      }(), _class2.instance = null, _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/fond_card.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, Node, Component;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Label = module.Label;
      Node = module.Node;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;

      cclegacy._RF.push({}, "a39ac4RE2RKH5ziPVHx+KK9", "fond_card", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var fond_card = exports('fond_card', (_dec = ccclass('foud_card'), _dec2 = property({
        type: Label
      }), _dec3 = property({
        type: Label
      }), _dec4 = property({
        type: Label
      }), _dec5 = property({
        type: Label
      }), _dec6 = property({
        type: Node
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(fond_card, _Component);

        function fond_card() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "labelFund", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "labelTime", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "labelRepay", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "labelRate", _descriptor4, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "chosenTag", _descriptor5, _assertThisInitialized(_this));

          return _this;
        }

        var _proto = fond_card.prototype;

        _proto.start = function start() {};

        _proto.update = function update(deltaTime) {};

        _proto.init = function init() {};

        _proto.setChosen = function setChosen(isChosen) {
          this.chosenTag.active = isChosen;
        };

        return fond_card;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "labelFund", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "labelTime", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "labelRepay", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "labelRate", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "chosenTag", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/game_countdown.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './time_utils.ts', './ponzi_config.ts', './component_state.ts', './ponzi-controller.ts', './ccc_msg.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, sys, Component, time_utils, ponzi_config, component_state, ponzi_controller, ccc_msg;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Label = module.Label;
      sys = module.sys;
      Component = module.Component;
    }, function (module) {
      time_utils = module.time_utils;
    }, function (module) {
      ponzi_config = module.ponzi_config;
    }, function (module) {
      component_state = module.component_state;
    }, function (module) {
      ponzi_controller = module.ponzi_controller;
    }, function (module) {
      ccc_msg = module.ccc_msg;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;

      cclegacy._RF.push({}, "6a488WYpMlOrbSBAAWn+CO1", "game_countdown", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var game_countdown = exports('game_countdown', (_dec = ccclass('game_countdown'), _dec2 = property({
        type: Label
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(game_countdown, _Component);

        function game_countdown() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "label", _descriptor, _assertThisInitialized(_this));

          _this._inited = false;
          return _this;
        }

        var _proto = game_countdown.prototype;

        _proto.start = function start() {};

        _proto.update = function update(deltaTime) {
          if (!this._inited) this.init();
        };

        _proto.init = function init() {
          var gameObj = globalThis.ponzi.game;
          if (!gameObj) return;
          this._inited = true;

          this._updateUI();

          this._registerListeners();
        };

        _proto._registerListeners = function _registerListeners() {
          var self = this;
          ponzi_controller.instance.on(ccc_msg.on_gamestate_update, function (obj) {
            // const {oldObj,newObj} = obj;
            self._updateUI();
          });
        };

        _proto._updateUI = function _updateUI() {
          var gameState = globalThis.ponzi.gameState;
          if (gameState != component_state.game_ingame) return;
          this.unschedule(this._updateLabel);
          this.schedule(this._updateLabel);
        };

        _proto._updateLabel = function _updateLabel() {
          var gameObj = globalThis.ponzi.game;
          if (!gameObj) return;
          var startTime = Number(gameObj.startTime);
          var endTime = Number(gameObj.endTime);
          var nowTime = sys.now() / 1000;
          var str = time_utils.calculateRemainingTime(nowTime, endTime, startTime, ponzi_config.fakeBlockTime);
          this.label.string = str;
        };

        return game_countdown;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "label", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/game_ui_controller.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ponzi-controller.ts', './ccc_msg.ts'], function (exports) {
  var _inheritsLoose, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Component, ponzi_controller, ccc_msg;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
    }, function (module) {
      ponzi_controller = module.ponzi_controller;
    }, function (module) {
      ccc_msg = module.ccc_msg;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "c12da80TohPu6Sg2EzMf/Fw", "game_ui_controller", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var game_ui_controller = exports('game_ui_controller', (_dec = ccclass('game_ui_controller'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(game_ui_controller, _Component);

        function game_ui_controller() {
          return _Component.apply(this, arguments) || this;
        }

        var _proto = game_ui_controller.prototype;

        _proto.start = function start() {};

        _proto.update = function update(deltaTime) {};

        _proto.onRuleClicked = function onRuleClicked() {
          ponzi_controller.instance.sendCCCMsg(ccc_msg.show_rules, true);
        };

        _proto.onCovertTradeClicked = function onCovertTradeClicked() {
          ponzi_controller.instance.sendCCCMsg(ccc_msg.show_trade, true);
        };

        _proto.onGameFinishClicked = /*#__PURE__*/function () {
          var _onGameFinishClicked = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  ponzi_controller.instance.sendCCCMsg(ccc_msg.network_block_ui, true);
                  _context.prev = 1;
                  _context.next = 4;
                  return window.finishGame == null ? void 0 : window.finishGame();

                case 4:
                  _context.next = 9;
                  break;

                case 6:
                  _context.prev = 6;
                  _context.t0 = _context["catch"](1);
                  ponzi_controller.instance.sendCCCMsg(ccc_msg.single_button_dialog, {
                    content: "The end game encountered a problem.",
                    btnText: "OK"
                  });

                case 9:
                  _context.prev = 9;
                  ponzi_controller.instance.sendCCCMsg(ccc_msg.network_block_ui, false);
                  return _context.finish(9);

                case 12:
                case "end":
                  return _context.stop();
              }
            }, _callee, null, [[1, 6, 9, 12]]);
          }));

          function onGameFinishClicked() {
            return _onGameFinishClicked.apply(this, arguments);
          }

          return onGameFinishClicked;
        }();

        return game_ui_controller;
      }(Component)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GameData.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "60250BBLnlPmIeHEjeK6uam", "GameData", undefined);

      var GameData = exports('GameData', function GameData() {
        this.gameId = void 0;
        this.startTime = void 0;
        this.endTime = void 0;
      });

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/HexMapTile.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "e387c/xNDNOuKwNp+PrfiY+", "HexMapTile", undefined);

      var HexMapTile = exports('HexMapTile', function HexMapTile() {
        this.x = void 0;
        this.y = void 0;
        this.emoji = void 0;
        this.row = void 0;
        this.col = void 0;
      });

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/item_asset.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, Component;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Label = module.Label;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;

      cclegacy._RF.push({}, "adce7lj+XBP05NuRPKO3PVd", "item_asset", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var item_asset = exports('item_asset', (_dec = ccclass('item_asset'), _dec2 = property({
        type: Label
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(item_asset, _Component);

        function item_asset() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "label", _descriptor, _assertThisInitialized(_this));

          return _this;
        }

        var _proto = item_asset.prototype;

        _proto.start = function start() {};

        _proto.update = function update(deltaTime) {};

        return item_asset;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "label", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/JsCaller.ts", ['cc'], function (exports) {
  var cclegacy, _decorator;

  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }],
    execute: function () {
      var _dec, _class, _class2;

      cclegacy._RF.push({}, "da8c9cEXPBCPbvJSCuGyRd8", "JsCaller", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var JsCaller = exports('JsCaller', (_dec = ccclass('JsCaller'), _dec(_class = (_class2 = /*#__PURE__*/function () {
        function JsCaller() {} // 定义一个静态方法，用来获取该实例


        JsCaller.getInstance = function getInstance() {
          // 如果实例不存在，就创建一个新的实例
          if (!this.instance) {
            this.instance = new JsCaller();
          } // 返回实例


          return this.instance;
        } // 定义其他属性和方法
        ;

        var _proto = JsCaller.prototype;

        _proto.JsCaller = function JsCaller() {// ...
        } // public out
        ;

        return JsCaller;
      }(), _class2.instance = null, _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/list_utils.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _createForOfIteratorHelperLoose, cclegacy;

  return {
    setters: [function (module) {
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "e3e13ubvmhH06LuQi5BMWln", "list_utils", undefined);

      var list_utils = exports('list_utils', /*#__PURE__*/function () {
        function list_utils() {}

        list_utils.getExtraStrings = function getExtraStrings(list1, list2) {
          if (!list1) return list2;
          var set = new Set(list1);
          var extras = [];

          for (var _iterator = _createForOfIteratorHelperLoose(list2), _step; !(_step = _iterator()).done;) {
            var str = _step.value;

            if (!set.has(str)) {
              extras.push(str);
            }
          }

          return extras;
        };

        return list_utils;
      }());

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/lobby-controller.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './component_state.ts', './ponzi-controller.ts', './ccc_msg.ts', './string_utils.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Label, Node, Component, log, sys, component_state, ponzi_controller, ccc_msg, string_utils;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Label = module.Label;
      Node = module.Node;
      Component = module.Component;
      log = module.log;
      sys = module.sys;
    }, function (module) {
      component_state = module.component_state;
    }, function (module) {
      ponzi_controller = module.ponzi_controller;
    }, function (module) {
      ccc_msg = module.ccc_msg;
    }, function (module) {
      string_utils = module.string_utils;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7;

      cclegacy._RF.push({}, "9aed4LIkbtB8b7eNgSv/Q/O", "lobby-controller", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var lobby_controller = exports('lobby_controller', (_dec = ccclass('lobby_controller'), _dec2 = property({
        type: Label
      }), _dec3 = property({
        type: Label
      }), _dec4 = property({
        type: Node
      }), _dec5 = property({
        type: Node
      }), _dec6 = property({
        type: Label
      }), _dec7 = property({
        type: Node
      }), _dec8 = property({
        type: Node
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(lobby_controller, _Component);

        function lobby_controller() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "countDownLabel", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "contentLabel", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "btnJoinGame", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "btnTriggerGame", _descriptor4, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "welcomeLabel", _descriptor5, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "lobbyNode", _descriptor6, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "gameNode", _descriptor7, _assertThisInitialized(_this));

          _this.IsPlayerButGameNotStart = "The Round Has Not Started Yet";
          _this.NotPlayerButGameIsStart = "Game is started, just waiting for entering game!";
          _this.IsPlayerGameReachTimeButNotStart = "The Game Has Already Started, Please Click \"Play\" To Begin.";
          _this.NotPlayerAndGameNotReachTime = "Game is not start, just join us!";
          _this.welcomeInited = false;
          _this.inited = false;
          _this.timer = null;
          _this.leftTime = void 0;
          return _this;
        }

        var _proto = lobby_controller.prototype;

        _proto.start = function start() {};

        _proto.update = /*#__PURE__*/function () {
          var _update = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(deltaTime) {
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  if (this.inited) {
                    _context.next = 3;
                    break;
                  }

                  _context.next = 3;
                  return this.initLobby();

                case 3:
                  if (this.welcomeInited) {
                    _context.next = 6;
                    break;
                  }

                  _context.next = 6;
                  return this.initWelcome();

                case 6:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));

          function update(_x) {
            return _update.apply(this, arguments);
          }

          return update;
        }();

        _proto.onRulesClicked = function onRulesClicked() {
          ponzi_controller.instance.sendCCCMsg(ccc_msg.show_rules, true);
        };

        _proto.onJoinGameClicked = /*#__PURE__*/function () {
          var _onJoinGameClicked = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  ponzi_controller.instance.sendCCCMsg(ccc_msg.network_block_ui, true);
                  _context2.next = 3;
                  return window.joinGame == null ? void 0 : window.joinGame();

                case 3:
                  ponzi_controller.instance.sendCCCMsg(ccc_msg.network_block_ui, false);

                case 4:
                case "end":
                  return _context2.stop();
              }
            }, _callee2);
          }));

          function onJoinGameClicked() {
            return _onJoinGameClicked.apply(this, arguments);
          }

          return onJoinGameClicked;
        }();

        _proto.onTriggerGameClicked = /*#__PURE__*/function () {
          var _onTriggerGameClicked = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  _context3.next = 2;
                  return this.triggerGame();

                case 2:
                case "end":
                  return _context3.stop();
              }
            }, _callee3, this);
          }));

          function onTriggerGameClicked() {
            return _onTriggerGameClicked.apply(this, arguments);
          }

          return onTriggerGameClicked;
        }();

        _proto.initWelcome = /*#__PURE__*/function () {
          var _initWelcome = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
            var playerEntity, hash;
            return _regeneratorRuntime().wrap(function _callee4$(_context4) {
              while (1) switch (_context4.prev = _context4.next) {
                case 0:
                  playerEntity = globalThis.ponzi.currentPlayer;

                  if (playerEntity) {
                    _context4.next = 3;
                    break;
                  }

                  return _context4.abrupt("return");

                case 3:
                  this.welcomeInited = true;
                  hash = string_utils.getHashFromSymbol(playerEntity);
                  this.welcomeLabel.string = "Welcome, " + string_utils.sliceLastN(hash, 8) + "!";

                case 6:
                case "end":
                  return _context4.stop();
              }
            }, _callee4, this);
          }));

          function initWelcome() {
            return _initWelcome.apply(this, arguments);
          }

          return initWelcome;
        }();

        _proto.initLobby = /*#__PURE__*/function () {
          var _initLobby = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
            var gameObj;
            return _regeneratorRuntime().wrap(function _callee5$(_context5) {
              while (1) switch (_context5.prev = _context5.next) {
                case 0:
                  gameObj = globalThis.ponzi.game;

                  if (gameObj) {
                    globalThis.ponzi.gameState;
                    this.inited = true;
                    this.updateLobby();
                    this.registerListeners();
                  }

                case 2:
                case "end":
                  return _context5.stop();
              }
            }, _callee5, this);
          }));

          function initLobby() {
            return _initLobby.apply(this, arguments);
          }

          return initLobby;
        }();

        _proto.triggerGame = /*#__PURE__*/function () {
          var _triggerGame = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
            return _regeneratorRuntime().wrap(function _callee6$(_context6) {
              while (1) switch (_context6.prev = _context6.next) {
                case 0:
                  ponzi_controller.instance.sendCCCMsg(ccc_msg.network_block_ui, true);
                  _context6.next = 3;
                  return window.askStart == null ? void 0 : window.askStart();

                case 3:
                  ponzi_controller.instance.sendCCCMsg(ccc_msg.network_block_ui, false);

                case 4:
                case "end":
                  return _context6.stop();
              }
            }, _callee6);
          }));

          function triggerGame() {
            return _triggerGame.apply(this, arguments);
          }

          return triggerGame;
        }();

        _proto.startCountdownAnimator = /*#__PURE__*/function () {
          var _startCountdownAnimator = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(leftSeconds) {
            var self;
            return _regeneratorRuntime().wrap(function _callee8$(_context8) {
              while (1) switch (_context8.prev = _context8.next) {
                case 0:
                  self = this;
                  this.startCountDownAnimation(leftSeconds);
                  clearTimeout(this.timer);
                  log("start timer:", leftSeconds * 1000);
                  this.timer = setTimeout( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
                    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
                      while (1) switch (_context7.prev = _context7.next) {
                        case 0:
                          self.updateLobby();

                        case 1:
                        case "end":
                          return _context7.stop();
                      }
                    }, _callee7);
                  })), leftSeconds * 1000);

                case 5:
                case "end":
                  return _context8.stop();
              }
            }, _callee8, this);
          }));

          function startCountdownAnimator(_x2) {
            return _startCountdownAnimator.apply(this, arguments);
          }

          return startCountdownAnimator;
        }();

        _proto.updateLobby = /*#__PURE__*/function () {
          var _updateLobby = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9() {
            var gameState, gameObj, isPlayer, playerEntity, timeStamp, gameStartTime, leftSeconds, _timeStamp, _gameStartTime, _leftSeconds;

            return _regeneratorRuntime().wrap(function _callee9$(_context9) {
              while (1) switch (_context9.prev = _context9.next) {
                case 0:
                  gameState = globalThis.ponzi.gameState;
                  gameObj = globalThis.ponzi.game;

                  if (gameObj) {
                    _context9.next = 4;
                    break;
                  }

                  return _context9.abrupt("return");

                case 4:
                  isPlayer = false;
                  _context9.prev = 5;
                  playerEntity = globalThis.ponzi.currentPlayer;
                  _context9.next = 9;
                  return window.queryValue == null ? void 0 : window.queryValue(window.env.components.IsPlayer, playerEntity);

                case 9:
                  isPlayer = _context9.sent;
                  _context9.next = 15;
                  break;

                case 12:
                  _context9.prev = 12;
                  _context9.t0 = _context9["catch"](5);
                  isPlayer = false;

                case 15:
                  if (gameState == component_state.game_ingame) {
                    if (isPlayer) {
                      log("ingame+isPlayer");
                      this.showGameNode();
                      this.btnJoinGame.active = false;
                      this.btnTriggerGame.active = false;
                    } else {
                      this.showLobbyNode();
                      log("ingame+notPlayer");
                      this.contentLabel.string = this.NotPlayerButGameIsStart;
                      this.btnJoinGame.active = true;
                      this.btnTriggerGame.active = false;
                    }
                  } else if (gameState == component_state.game_waiting) {
                    this.showLobbyNode();
                    timeStamp = sys.now();
                    timeStamp = Number(timeStamp) / 1000;
                    gameStartTime = Number(gameObj.startTime);
                    leftSeconds = Math.floor(gameStartTime - timeStamp);

                    if (isPlayer) {
                      this.contentLabel.string = "Game is started, just enter game!";
                      this.btnJoinGame.active = false;
                      this.btnTriggerGame.active = false;
                      _timeStamp = sys.now();
                      _timeStamp = Number(_timeStamp) / 1000;
                      _gameStartTime = Number(gameObj.startTime);
                      _leftSeconds = Math.floor(_gameStartTime - _timeStamp);

                      if (_leftSeconds > 0) {
                        log("gameWaiting+isPlayer+notStart");
                        this.contentLabel.string = this.IsPlayerButGameNotStart;
                        this.startCountdownAnimator(_leftSeconds);
                      } else {
                        log("gameWaiting+isPlayer+isStarted");
                        this.contentLabel.string = this.IsPlayerGameReachTimeButNotStart;
                        this.btnJoinGame.active = false;
                        this.btnTriggerGame.active = true;
                      }
                    } else {
                      log("gameWaiting+notPlayer");

                      if (leftSeconds > 0) {
                        this.startCountdownAnimator(leftSeconds);
                      }

                      this.contentLabel.string = this.NotPlayerAndGameNotReachTime;
                      this.btnJoinGame.active = true;
                      this.btnTriggerGame.active = false;
                    }
                  }

                case 16:
                case "end":
                  return _context9.stop();
              }
            }, _callee9, this, [[5, 12]]);
          }));

          function updateLobby() {
            return _updateLobby.apply(this, arguments);
          }

          return updateLobby;
        }();

        _proto.registerListeners = function registerListeners() {
          var self = this;
          ponzi_controller.instance.on(ccc_msg.on_gamestate_update, /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(obj) {
            return _regeneratorRuntime().wrap(function _callee10$(_context10) {
              while (1) switch (_context10.prev = _context10.next) {
                case 0:
                  self.updateLobby();

                case 1:
                case "end":
                  return _context10.stop();
              }
            }, _callee10);
          })));
          ponzi_controller.instance.on(ccc_msg.on_isplayer_update, /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11(obj) {
            var entity, playerEntity, hash;
            return _regeneratorRuntime().wrap(function _callee11$(_context11) {
              while (1) switch (_context11.prev = _context11.next) {
                case 0:
                  entity = obj.entity;
                  obj.newValue;
                  playerEntity = globalThis.ponzi.currentPlayer;
                  hash = string_utils.getHashFromSymbol(playerEntity);

                  if (hash == entity) {
                    self.updateLobby();
                  }

                case 5:
                case "end":
                  return _context11.stop();
              }
            }, _callee11);
          })));
        };

        _proto.showGameNode = function showGameNode() {
          this.lobbyNode.active = false;
          this.gameNode.active = true;
        };

        _proto.showLobbyNode = function showLobbyNode() {
          this.lobbyNode.active = true;
          this.gameNode.active = false; // this.btnJoinGame = true;
        };

        _proto.startCountDownAnimation = function startCountDownAnimation(endTime) {
          this.leftTime = endTime;
          this.countDownLabel.string = this.leftTime.toString(); // 计算重复次数，等于结束时间减一

          var repeat = endTime - 1; // 调用schedule方法，传入回调函数，间隔时间为1秒，重复次数为repeat，延迟时间为0

          this.unschedule(this.minuesTimeLabel);
          this.schedule(this.minuesTimeLabel, 1, repeat, 0);
        };

        _proto.minuesTimeLabel = function minuesTimeLabel() {
          this.leftTime--;
          this.countDownLabel.string = this.formatSeconds(this.leftTime);
        } // 定义一个函数，接受一个秒数作为参数，返回一个字符串表示转换后的结果
        ;

        _proto.formatSeconds = function formatSeconds(seconds) {
          var dayStr = " Day ";
          var hourStr = " Hour ";
          var minuteStr = " Minute ";
          var secondStr = " Second "; // 定义一个空字符串，用于存储结果

          var result = ""; // 定义一天、一小时、一分钟的秒数

          var day = 24 * 60 * 60;
          var hour = 60 * 60;
          var minute = 60; // 计算天数，并添加到结果中，如果为零，则不显示

          var days = Math.floor(seconds / day);

          if (days > 0) {
            result += days + dayStr;
          } // 计算小时数，并添加到结果中，如果为零，则不显示


          var hours = Math.floor(seconds % day / hour);

          if (hours > 0) {
            result += hours + hourStr;
          } // 计算分钟数，并添加到结果中，如果为零，则不显示


          var minutes = Math.floor(seconds % hour / minute);

          if (minutes > 0) {
            result += minutes + minuteStr;
          } // 计算秒数，并添加到结果中，如果为零，则不显示


          var showSeconds = Math.floor(seconds % minute);

          if (showSeconds > 0) {
            result += showSeconds + secondStr;
          } // 返回结果字符串


          return result;
        };

        return lobby_controller;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "countDownLabel", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "contentLabel", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "btnJoinGame", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "btnTriggerGame", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "welcomeLabel", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "lobbyNode", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "gameNode", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/lobby-playerlist-model.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, Component;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Label = module.Label;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;

      cclegacy._RF.push({}, "fc8b6iSYANJari6mOXx6nYG", "lobby-playerlist-model", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var lobby_playerlist_model = exports('lobby_playerlist_model', (_dec = ccclass('lobby_playerlist_model'), _dec2 = property({
        type: Label
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(lobby_playerlist_model, _Component);

        function lobby_playerlist_model() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "labelName", _descriptor, _assertThisInitialized(_this));

          return _this;
        }

        var _proto = lobby_playerlist_model.prototype;

        _proto.start = function start() {};

        _proto.update = function update(deltaTime) {};

        _proto.init = function init(name) {
          this.labelName.string = name;
        };

        return lobby_playerlist_model;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "labelName", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/lobby-playerlist.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './lobby-playerlist-model.ts', './ponzi-controller.ts', './ccc_msg.ts', './string_utils.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createForOfIteratorHelperLoose, cclegacy, _decorator, Node, Label, log, instantiate, Component, lobby_playerlist_model, ponzi_controller, ccc_msg, string_utils;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Label = module.Label;
      log = module.log;
      instantiate = module.instantiate;
      Component = module.Component;
    }, function (module) {
      lobby_playerlist_model = module.lobby_playerlist_model;
    }, function (module) {
      ponzi_controller = module.ponzi_controller;
    }, function (module) {
      ccc_msg = module.ccc_msg;
    }, function (module) {
      string_utils = module.string_utils;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3;

      cclegacy._RF.push({}, "9ada3n5kAFHOqFUXwLqrjjF", "lobby-playerlist", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var lobby_playerlist = exports('lobby_playerlist', (_dec = ccclass('lobby_playerlist'), _dec2 = property({
        type: Node
      }), _dec3 = property({
        type: Node
      }), _dec4 = property({
        type: Label
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(lobby_playerlist, _Component);

        function lobby_playerlist() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "model", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "gridParent", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "peopleLabel", _descriptor3, _assertThisInitialized(_this));

          _this.lobbyPlayers = void 0;
          _this.inited = false;
          return _this;
        }

        var _proto = lobby_playerlist.prototype;

        _proto.start = function start() {};

        _proto.update = function update(deltaTime) {
          if (!this.inited) this.init();
        };

        _proto.init = function init() {
          var _this2 = this;

          var players = window.getPlayers == null ? void 0 : window.getPlayers();

          if (!players) {
            return;
          }

          log("lobby-playerlist start init...");
          this.inited = true;
          this.lobbyPlayers = [];

          for (var key in players) {
            var map = players[key];

            for (var _iterator = _createForOfIteratorHelperLoose(map), _step; !(_step = _iterator()).done;) {
              var _step$value = _step.value,
                  entity = _step$value[0],
                  value = _step$value[1]; //   console.log(key, entity, value);

              var hash = string_utils.getHashFromSymbol(entity);
              string_utils.addStringToArray(this.lobbyPlayers, hash);
            }
          }

          this.peopleLabel.string = this.lobbyPlayers.length + " Players Login...";
          this.lobbyPlayers.forEach(function (ele) {
            _this2.addNewNode(ele);
          });
          this.registerListeners();
        };

        _proto.registerListeners = function registerListeners() {
          var self = this;
          ponzi_controller.instance.on(ccc_msg.on_player_add, function (entity) {
            string_utils.addStringToArray(self.lobbyPlayers, entity);
            self.peopleLabel.string = self.lobbyPlayers.length + " Players Login...";
            self.addNewNode(entity);
          });
        };

        _proto.addNewNode = function addNewNode(hash) {
          var str = hash.toString();
          var newNode = instantiate(this.model);
          newNode.active = true;
          newNode.parent = this.gridParent;
          var modelScript = newNode.getComponent(lobby_playerlist_model);
          modelScript.init(string_utils.sliceLastN(str, 4));
        };

        return lobby_playerlist;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "model", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "gridParent", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "peopleLabel", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/main", ['./debug-view-runtime-control.ts', './Singleton.ts', './lobby-controller.ts', './counter-label.ts', './ccc_msg.ts', './component_state.ts', './ponzi_config.ts', './GameData.ts', './JsCaller.ts', './MUDListener.ts', './PlayerData.ts', './data_center.ts', './ponzi-controller.ts', './ponzi-model.ts', './FakeMessageCenter.ts', './test.ts', './TradeListItem.ts', './bytes_utils.ts', './coor_utils.ts', './list_utils.ts', './object_utils.ts', './rule_utils.ts', './string_utils.ts', './time_utils.ts', './HexMapTile.ts', './RoleLocalObj.ts', './RowCol.ts', './UnsolicitedTransactionObj.ts', './temp_data.ts', './game_ui_controller.ts', './lobby-playerlist-model.ts', './lobby-playerlist.ts', './map-controller.ts', './mapblock.ts', './pick-money-card.ts', './player-model.ts', './pick_asset.ts', './rank.ts', './single-button-pop.ts', './trade-ask.ts', './trade_input_price.ts', './popupui_manager.ts', './trade.ts', './button_raisingcapital.ts', './changing_ellipses.ts', './fond_card.ts', './game_countdown.ts', './item_asset.ts', './mapitem.ts', './pick_asset_item.ts', './right-player-list-item.ts', './right-player-list.ts', './rules.ts', './title-money.ts', './toggle.ts', './trade-asset-item.ts', './trade_parter_item.ts'], function () {
  return {
    setters: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/map-controller.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ponzi-controller.ts', './ccc_msg.ts', './mapblock.ts', './string_utils.ts', './component_state.ts', './player-model.ts', './RoleLocalObj.ts', './ponzi_config.ts', './data_center.ts', './RowCol.ts', './coor_utils.ts', './mapitem.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createForOfIteratorHelperLoose, _extends, cclegacy, _decorator, Node, log, instantiate, Vec3, Component, ponzi_controller, ccc_msg, mapblock, string_utils, component_state, player_model, RoleLocalObj, ponzi_config, data_center, RowCol, coor_utils, mapitem;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
      _extends = module.extends;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      log = module.log;
      instantiate = module.instantiate;
      Vec3 = module.Vec3;
      Component = module.Component;
    }, function (module) {
      ponzi_controller = module.ponzi_controller;
    }, function (module) {
      ccc_msg = module.ccc_msg;
    }, function (module) {
      mapblock = module.mapblock;
    }, function (module) {
      string_utils = module.string_utils;
    }, function (module) {
      component_state = module.component_state;
    }, function (module) {
      player_model = module.player_model;
    }, function (module) {
      RoleLocalObj = module.RoleLocalObj;
    }, function (module) {
      ponzi_config = module.ponzi_config;
    }, function (module) {
      data_center = module.data_center;
    }, function (module) {
      RowCol = module.RowCol;
    }, function (module) {
      coor_utils = module.coor_utils;
    }, function (module) {
      mapitem = module.mapitem;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6;

      cclegacy._RF.push({}, "f3250iGpAVPmqBmTcrOIPDJ", "map-controller", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var map_controller = exports('map_controller', (_dec = ccclass('map_controller'), _dec2 = property({
        type: Node
      }), _dec3 = property({
        type: Node
      }), _dec4 = property({
        type: Node
      }), _dec5 = property({
        type: Node
      }), _dec6 = property({
        type: Node
      }), _dec7 = property({
        type: Node
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(map_controller, _Component);

        function map_controller() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "mapParent", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "itemParent", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "playerParent", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "mapBlockModel", _descriptor4, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "mapItemModel", _descriptor5, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "playerModel", _descriptor6, _assertThisInitialized(_this));

          _this.terrainArray = void 0;
          _this.inited = false;
          _this._oldMapChangeResult = void 0;
          _this.tmpCoorArray = void 0;
          return _this;
        }

        var _proto = map_controller.prototype;

        _proto.start = function start() {
          this.mapBlockModel.active = false;
          this.mapItemModel.active = false;
          this.playerModel.active = false;
        };

        _proto.update = function update(deltaTime) {
          if (!this.inited) this.init();
        };

        _proto.init = function init() {
          var _globalThis$ponzi$gam;

          var gameState = globalThis.ponzi.gameState;
          if (gameState != component_state.game_ingame) return;
          var map = (_globalThis$ponzi$gam = globalThis.ponzi.gameMap) == null ? void 0 : _globalThis$ponzi$gam.mapArray;
          if (!map) return;
          var items = window.getMapItems == null ? void 0 : window.getMapItems();
          if (!items) return;
          this.inited = true;
          this.updateMap();
          this.drawItem();
          this.drawPlayers();
          this.registerListeners();
        };

        _proto.registerListeners = function registerListeners() {
          var self = this;
          ponzi_controller.instance.on(ccc_msg.on_gamemap_update, function (changeResult) {
            var _globalThis$ponzi$gam2, _globalThis$ponzi$gam3;

            if (!changeResult) return;
            var newMap = changeResult['mapArray'];
            var width = Number((_globalThis$ponzi$gam2 = globalThis.ponzi.gameMap) == null ? void 0 : _globalThis$ponzi$gam2.width);
            var height = Number((_globalThis$ponzi$gam3 = globalThis.ponzi.gameMap) == null ? void 0 : _globalThis$ponzi$gam3.height);
            self._oldMapChangeResult = changeResult;
            self.drawMap(width, height, newMap);
          });
          ponzi_controller.instance.on(ccc_msg.on_gamemap_walkrecord_update, function () {
            self.updateMap();
          });
          ponzi_controller.instance.on(ccc_msg.on_mapitem_update, function (oldValue, newValue) {
            self.drawItem();
          });
          ponzi_controller.instance.on(ccc_msg.on_player_update, function () {
            self.drawPlayers();
          });
        };

        _proto.updateMap = function updateMap() {
          var _globalThis$ponzi$gam4, _globalThis$ponzi$gam5, _globalThis$ponzi$gam6;

          var width = Number((_globalThis$ponzi$gam4 = globalThis.ponzi.gameMap) == null ? void 0 : _globalThis$ponzi$gam4.width);
          var height = Number((_globalThis$ponzi$gam5 = globalThis.ponzi.gameMap) == null ? void 0 : _globalThis$ponzi$gam5.height);
          var map = (_globalThis$ponzi$gam6 = globalThis.ponzi.gameMap) == null ? void 0 : _globalThis$ponzi$gam6.mapArray;

          if (!map) {
            log("No map data!!!!!!");
            return;
          }

          this.drawMap(width, height, map);
        } // private 
        ;

        _proto.drawPlayers = function drawPlayers() {
          var players = window.getPlayers == null ? void 0 : window.getPlayers();

          if (!players) {
            return;
          }

          var array = {};

          for (var key in players) {
            var map = players[key];

            for (var _iterator = _createForOfIteratorHelperLoose(map), _step; !(_step = _iterator()).done;) {
              var _step$value = _step.value,
                  entity = _step$value[0],
                  value = _step$value[1]; //   console.log(key, entity, value);

              var hash = string_utils.getHashFromSymbol(entity);

              if (!array[hash]) {
                array[hash] = new RoleLocalObj();
              }

              var obj = array[hash];
              array[hash] = obj;

              if (key == 'x') {
                var valueNum = Number(value);
                obj.row = valueNum;
              } else if (key == 'y') {
                var _valueNum = Number(value);

                obj.col = _valueNum;
              } else if (key == 'money') {
                var _valueNum2 = Number(value);

                obj.money = _valueNum2;
              }
            }
          } // log("role array:",array);


          var self = this;
          self.playerParent.removeAllChildren();

          for (var _key2 in array) {
            var _value = array[_key2];
            var newNode = instantiate(self.playerModel);
            newNode.setParent(self.playerParent);
            newNode.active = true;
            var pos = self.tmpCoorArray[_value.row][_value.col];
            newNode.position = new Vec3(pos.x, pos.y, 0);
            var script = newNode.getComponent(player_model);
            script.init(_key2);
          }
        };

        _proto.drawItem = function drawItem() {
          var items = window.getMapItems == null ? void 0 : window.getMapItems();

          if (!items) {
            return;
          }

          var array = [];

          for (var key in items) {
            var map = items[key];

            for (var _iterator2 = _createForOfIteratorHelperLoose(map), _step2; !(_step2 = _iterator2()).done;) {
              var _step2$value = _step2.value,
                  entity = _step2$value[0],
                  value = _step2$value[1]; //   console.log(key, entity, value);

              var index = string_utils.getNumberFromSymbol(entity) - 1;
              var valueNum = string_utils.getNumberFromSymbol(value);

              if (!array[index]) {
                array[index] = new MapItemLocalObj();
              }

              var obj = array[index];
              array[index] = obj;

              if (key == 'x') {
                obj.row = valueNum;
              } else if (key == 'y') {
                obj.col = valueNum;
              }
            }
          }

          var recordMap = data_center.instance.loadMapWalkRecord();
          log("item.values:", array);
          var self = this;
          self.itemParent.removeAllChildren();
          array.forEach(function (ele) {
            var newNode = instantiate(self.mapItemModel);
            newNode.setParent(self.itemParent);
            newNode.active = true;
            var pos = self.tmpCoorArray[ele.row][ele.col];
            newNode.position = new Vec3(pos.x, pos.y, 0);
            var script = newNode.getComponent(mapitem);
            script.init(recordMap[ele.row] && recordMap[ele.row][ele.col] == 1);
          });
        };

        _proto.drawMap = function drawMap(width, height, newMap) {
          var _window$mudutils,
              _this2 = this;

          if (!newMap) {
            log("No map data to draw!");
            return;
          }

          this.terrainArray = (_window$mudutils = window.mudutils) == null ? void 0 : _window$mudutils.hexToArray(width, height, newMap); // 示例使用

          var centerX = width / 2; // 中心点的 X 坐标

          var centerY = height / 2; // 中心点的 Y 坐标

          var hexMap = this.generateHexMap(100, 78);
          var coordinationArray = this.moveAllTiles(hexMap, centerX, centerY);
          this.tmpCoorArray = coordinationArray; // log("coordinationArray 111:",coordinationArray);

          var coorMap = this.generateHexCoorMap(); //check player

          var array = {};
          var players = window.getPlayers == null ? void 0 : window.getPlayers();

          for (var key in players) {
            var map = players[key];

            for (var _iterator3 = _createForOfIteratorHelperLoose(map), _step3; !(_step3 = _iterator3()).done;) {
              var _step3$value = _step3.value,
                  entity = _step3$value[0],
                  value = _step3$value[1]; //   console.log(key, entity, value);

              var hash = string_utils.getHashFromSymbol(entity);

              if (!array[hash]) {
                array[hash] = new RoleLocalObj();
              }

              var obj = array[hash];
              array[hash] = obj;

              if (key == 'x') {
                var valueNum = Number(value);
                obj.row = valueNum;
              } else if (key == 'y') {
                var _valueNum3 = Number(value);

                obj.col = _valueNum3;
              }
            }
          }

          var recordMap = data_center.instance.loadMapWalkRecord();

          for (var _key3 in array) {
            var _value2 = array[_key3];

            if (_key3 == globalThis.ponzi.currentPlayer) {
              this.giveValue(recordMap, _value2.row, _value2.col);
              var arround = coor_utils.getNeighboringHexes(_value2.row, _value2.col);
              arround.forEach(function (ele) {
                _this2.giveValue(recordMap, ele.row, ele.col);
              });
            }
          }

          data_center.instance.saveMapWalkRecord(recordMap);
          this.mapParent.removeAllChildren();

          for (var row = 0; row < coordinationArray.length; row++) {
            for (var col = 0; col < coordinationArray[row].length; col++) {
              var tile = coordinationArray[row][col];
              var coor = coorMap[row][col]; // 在这里访问和操作每个地图块（tile）
              // console.log(`Tile at (${tile.x}, ${tile.y}): ${tile.emoji}`);

              var newNode = instantiate(this.mapBlockModel);
              newNode.setParent(this.mapParent);
              newNode.active = true;
              newNode.position = new Vec3(tile.x, tile.y, 0);
              var script = newNode.getComponent(mapblock);

              if (recordMap[row]) {
                recordMap[row][col];
              }

              script.init(coor, recordMap[row] && recordMap[row][col] == 1);
              if (ponzi_config.showCoor) script.showLabel(coor.row + "," + coor.col);
            }
          }
        };

        _proto.generateHexCoorMap = function generateHexCoorMap() {
          var mapArray = [];

          for (var i = 0; i < ponzi_config.mapWH; i++) {
            var row = [];

            for (var j = 0; j < ponzi_config.mapWH; j++) {
              // const x = j;
              // const y = i;
              var tmp = new RowCol();
              tmp.row = i;
              tmp.col = j;
              row.push(tmp);
            }

            mapArray.push(row);
          }

          return mapArray;
        };

        _proto.generateHexMap = function generateHexMap(size, hSize) {
          var mapArray = [];

          for (var rowIdx = 0; rowIdx < ponzi_config.mapWH; rowIdx++) {
            var row = [];
            var evenRowOffset = rowIdx % 2 === 0 ? 0 : size / 2;

            for (var colIdx = 0; colIdx < ponzi_config.mapWH; colIdx++) {
              var x = size * colIdx + evenRowOffset;
              var y = hSize * rowIdx;
              var emoji = "▲"; // 这里使用 ▲ 作为示例地图块的表现形式，你可以根据需求修改

              row.push({
                x: x,
                y: y,
                emoji: emoji
              });
            }

            mapArray.push(row);
          }

          return mapArray;
        };

        _proto.moveAllTiles = function moveAllTiles(mapArray, centerX, centerY) {
          // 平移整个地图，使中心位于给定的点
          var centerTile = mapArray[centerY][centerX];
          var offsetX = centerX - Math.floor(mapArray.length / 2);
          var offsetY = centerY - Math.floor(mapArray[0].length / 2);
          var shiftedMapArray = mapArray.map(function (row) {
            return row.map(function (tile) {
              return _extends({}, tile, {
                x: tile.x - centerTile.x + offsetX,
                y: tile.y - centerTile.y + offsetY
              });
            });
          });
          return shiftedMapArray;
        };

        _proto.giveValue = function giveValue(recordMap, row, col) {
          if (!recordMap[row]) recordMap[row] = [];
          recordMap[row][col] = 1;
        };

        return map_controller;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "mapParent", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "itemParent", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "playerParent", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "mapBlockModel", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "mapItemModel", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "playerModel", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));

      var MapItemLocalObj = function MapItemLocalObj() {
        this.row = void 0;
        this.col = void 0;
      };

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/mapblock.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ponzi-controller.ts', './ccc_msg.ts', './data_center.ts', './coor_utils.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Label, Node, warn, Component, log, ponzi_controller, ccc_msg, data_center, coor_utils;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Label = module.Label;
      Node = module.Node;
      warn = module.warn;
      Component = module.Component;
      log = module.log;
    }, function (module) {
      ponzi_controller = module.ponzi_controller;
    }, function (module) {
      ccc_msg = module.ccc_msg;
    }, function (module) {
      data_center = module.data_center;
    }, function (module) {
      coor_utils = module.coor_utils;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3;

      cclegacy._RF.push({}, "f922dKK6jNJnb8lD64YYLm6", "mapblock", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var mapblock = exports('mapblock', (_dec = ccclass('mapblock'), _dec2 = property({
        type: Label
      }), _dec3 = property({
        type: Node
      }), _dec4 = property({
        type: Node
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(mapblock, _Component);

        function mapblock() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "label", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "walkedImage", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "newImage", _descriptor3, _assertThisInitialized(_this));

          _this.mapTile = void 0;
          return _this;
        }

        var _proto = mapblock.prototype;

        _proto.start = function start() {// this.label.node.active = false;
        };

        _proto.update = function update(deltaTime) {};

        _proto.init = function init(mapTile, isWalked) {
          this.mapTile = mapTile;
          this.label.node.active = false;
          this.walkedImage.active = isWalked;
          this.newImage.active = !isWalked;
        };

        _proto.showLabel = function showLabel(content) {
          this.label.string = content;
          this.label.node.active = true; // this.walkedImage.active = false;
          // this.newImage.active = true;
        };

        _proto.onBlockClicked = /*#__PURE__*/function () {
          var _onBlockClicked = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  log("click block:", this.mapTile.row, this.mapTile.col);
                  this.updateMapWalkRecord(this.mapTile.row, this.mapTile.col);
                  ponzi_controller.instance.sendCCCMsg(ccc_msg.network_block_ui, true);
                  _context.prev = 3;
                  _context.next = 6;
                  return window.move == null ? void 0 : window.move(this.mapTile.row, this.mapTile.col);

                case 6:
                  this.updateMapWalkRecord(this.mapTile.row, this.mapTile.col);
                  ponzi_controller.instance.sendCCCMsg(ccc_msg.on_gamemap_walkrecord_update, null);
                  _context.next = 13;
                  break;

                case 10:
                  _context.prev = 10;
                  _context.t0 = _context["catch"](3);
                  ponzi_controller.instance.sendCCCMsg(ccc_msg.single_button_dialog, {
                    content: "You can't go there",
                    btnText: "OK"
                  });

                case 13:
                  ponzi_controller.instance.sendCCCMsg(ccc_msg.network_block_ui, false);

                case 14:
                case "end":
                  return _context.stop();
              }
            }, _callee, this, [[3, 10]]);
          }));

          function onBlockClicked() {
            return _onBlockClicked.apply(this, arguments);
          }

          return onBlockClicked;
        }();

        _proto.updateMapWalkRecord = function updateMapWalkRecord(row, col) {
          var _this2 = this;

          var recordMap = data_center.instance.loadMapWalkRecord();
          this.giveValue(recordMap, row, col);
          warn("Hex center:" + row + " " + col);
          var arround = coor_utils.getNeighboringHexes(row, col);
          arround.forEach(function (ele) {
            warn("Hex:" + ele.row + " " + ele.col);

            _this2.giveValue(recordMap, ele.row, ele.col);
          });
          data_center.instance.saveMapWalkRecord(recordMap);
        };

        _proto.giveValue = function giveValue(recordMap, row, col) {
          if (!recordMap[row]) recordMap[row] = [];
          recordMap[row][col] = 1;
        };

        return mapblock;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "label", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "walkedImage", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "newImage", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/mapitem.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, tween, v2, Component;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      tween = module.tween;
      v2 = module.v2;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;

      cclegacy._RF.push({}, "49b4aAjQItOMplhuIvp5DQa", "mapitem", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var mapitem = exports('mapitem', (_dec = ccclass('mapitem'), _dec2 = property({
        type: Node
      }), _dec3 = property({
        type: Node
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(mapitem, _Component);

        function mapitem() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "lightNode", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "darkNode", _descriptor2, _assertThisInitialized(_this));

          return _this;
        }

        var _proto = mapitem.prototype;

        _proto.start = function start() {};

        _proto.update = function update(deltaTime) {};

        _proto.init = function init(showLight) {
          this.lightNode.active = showLight;
          this.darkNode.active = !showLight;
        };

        _proto.coinJumpAndFly = function coinJumpAndFly(coin, target, callback) {
          // 获取金币的初始坐标
          var origin = coin.position; // 设置金币的动画序列，包括跳起、飞向、缩小、消失四个步骤

          tween(coin).sequence( // 跳起：让金币在0.5秒内向上移动100像素，并旋转180度
          tween().by(0.5, {
            position: v2(0, 100),
            angle: 180
          }), // 飞向：让金币在1秒内飞向目标坐标，并旋转360度
          tween().to(1, {
            position: target,
            angle: 360
          }), // 缩小：让金币在0.5秒内缩小到原来的一半
          tween().to(0.5, {
            scale: 0.5
          }), // 消失：让金币在0.5秒内透明度降为0，并恢复初始状态
          tween().to(0.5, {
            opacity: 0
          }).call(function () {
            // 恢复金币的初始位置、大小、角度和透明度
            coin.position = origin;
            coin.scale = 1;
            coin.angle = 0;
            coin.opacity = 255;
          }), tween.call(callback)).start();
        };

        return mapitem;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "lightNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "darkNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MUDListener.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, Component;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "d39a68r4wVEMKcXMZ0+aGDs", "MUDListener", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var MUDListener = exports('MUDListener', (_dec = ccclass('MUDListener'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(MUDListener, _Component);

        function MUDListener() {
          return _Component.apply(this, arguments) || this;
        }

        var _proto = MUDListener.prototype;

        _proto.start = function start() {};

        _proto.update = function update(deltaTime) {};

        _proto.startListen = function startListen() {};

        return MUDListener;
      }(Component)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/object_utils.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "35821YoN2VMO7iAVcpIzcMJ", "object_utils", undefined);

      var object_utils = exports('object_utils', /*#__PURE__*/function () {
        function object_utils() {}

        object_utils.isNull = function isNull(obj) {
          if (typeof obj === "undefined" || obj === null) {
            return true;
          }

          return false;
        };

        object_utils.compareObjects = function compareObjects(obj1, obj2) {
          // 定义一个空数组来存储变动的参数名称
          var changedParams = {};

          if (!obj1 && obj2) {
            for (var key in obj2) {
              changedParams[key] = obj2[key];
            }
          } else {
            // 遍历obj1的所有属性
            for (var _key in obj1) {
              // 如果obj2没有该属性，或者obj2的属性值与obj1不同，则说明该属性发生了变动
              if (!obj2.hasOwnProperty(_key) || obj1[_key] !== obj2[_key]) {
                // 将变动的属性名称添加到数组中
                changedParams[_key] = obj2[_key];
              }
            } // 遍历obj2的所有属性


            for (var _key2 in obj2) {
              // 如果obj1没有该属性，则说明该属性是新增的，也属于变动
              if (!obj1.hasOwnProperty(_key2)) {
                // 将变动的属性名称添加到数组中
                changedParams[_key2] = obj2[_key2];
              }
            } // 返回变动的参数名称数组


            return changedParams;
          }
        };

        return object_utils;
      }());

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/pick_asset_item.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Component;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;

      cclegacy._RF.push({}, "dd8667K5XBPVoBYaIzxRI5X", "pick_asset_item", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var pick_asset_item = exports('pick_asset_item', (_dec = ccclass('pick_asset_item'), _dec2 = property({
        type: Node
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(pick_asset_item, _Component);

        function pick_asset_item() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "chosenBoarder", _descriptor, _assertThisInitialized(_this));

          return _this;
        }

        var _proto = pick_asset_item.prototype;

        _proto.start = function start() {};

        _proto.update = function update(deltaTime) {};

        _proto.chosen = function chosen(isChosen) {
          this.chosenBoarder.active = isChosen;
        };

        return pick_asset_item;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "chosenBoarder", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/pick_asset.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ponzi-controller.ts', './ccc_msg.ts', './pick_asset_item.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Node, Component, warn, ponzi_controller, ccc_msg, pick_asset_item;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Component = module.Component;
      warn = module.warn;
    }, function (module) {
      ponzi_controller = module.ponzi_controller;
    }, function (module) {
      ccc_msg = module.ccc_msg;
    }, function (module) {
      pick_asset_item = module.pick_asset_item;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;

      cclegacy._RF.push({}, "2f164Tql71PoIU0wqaCp2Nc", "pick_asset", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var pick_asset = exports('pick_asset', (_dec = ccclass('pick_asset'), _dec2 = property({
        type: Node
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(pick_asset, _Component);

        function pick_asset() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "itemParent", _descriptor, _assertThisInitialized(_this));

          _this.pickAsset = 0;
          return _this;
        }

        var _proto = pick_asset.prototype;

        _proto.start = function start() {
          this.reset();
        };

        _proto.update = function update(deltaTime) {};

        _proto.reset = function reset() {
          this.pickAsset = 0;
          var children = this.itemParent.children;
          children.forEach(function (node) {
            var script = node.getComponent(pick_asset_item);
            script.chosen(false);
          });
        };

        _proto.onItemClicked = function onItemClicked(event) {
          var clickNode = event.target;
          var children = this.itemParent.children;
          var index = children.indexOf(clickNode);
          children.forEach(function (node) {
            var script = node.getComponent(pick_asset_item);
            script.chosen(node === clickNode);
          });
          var assetNumber = index + 1;
          this.pickAsset = assetNumber;
        };

        _proto.onPickClicked = /*#__PURE__*/function () {
          var _onPickClicked = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  warn("User wants to pick ", this.pickAsset);

                  if (!(this.pickAsset == 0)) {
                    _context.next = 4;
                    break;
                  }

                  ponzi_controller.instance.sendCCCMsg(ccc_msg.single_button_dialog, {
                    content: "Please choose an asset first!",
                    btnText: "OK"
                  });
                  return _context.abrupt("return");

                case 4:
                  ponzi_controller.instance.sendCCCMsg(ccc_msg.network_block_ui, true);
                  _context.prev = 5;
                  _context.next = 8;
                  return window.pickAsset == null ? void 0 : window.pickAsset(this.pickAsset);

                case 8:
                  _context.next = 13;
                  break;

                case 10:
                  _context.prev = 10;
                  _context.t0 = _context["catch"](5);
                  ponzi_controller.instance.sendCCCMsg(ccc_msg.single_button_dialog, {
                    content: "pick failed",
                    btnText: "OK"
                  });

                case 13:
                  _context.prev = 13;
                  ponzi_controller.instance.sendCCCMsg(ccc_msg.network_block_ui, false);
                  this.node.active = false;
                  ponzi_controller.instance.sendCCCMsg(ccc_msg.show_pick_fund, true);
                  return _context.finish(13);

                case 18:
                case "end":
                  return _context.stop();
              }
            }, _callee, this, [[5, 10, 13, 18]]);
          }));

          function onPickClicked() {
            return _onPickClicked.apply(this, arguments);
          }

          return onPickClicked;
        }();

        return pick_asset;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "itemParent", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/pick-money-card.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './fond_card.ts', './ponzi-controller.ts', './ccc_msg.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Node, log, Component, fond_card, ponzi_controller, ccc_msg;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      log = module.log;
      Component = module.Component;
    }, function (module) {
      fond_card = module.fond_card;
    }, function (module) {
      ponzi_controller = module.ponzi_controller;
    }, function (module) {
      ccc_msg = module.ccc_msg;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;

      cclegacy._RF.push({}, "4574bQ+J7JAPZCXsSAL518i", "pick-money-card", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var pick_money_card = exports('pick_money_card', (_dec = ccclass('pick_money_card'), _dec2 = property({
        type: Node
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(pick_money_card, _Component);

        function pick_money_card() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "cardParent", _descriptor, _assertThisInitialized(_this));

          return _this;
        }

        var _proto = pick_money_card.prototype;

        _proto.start = function start() {
          var children = this.cardParent.children;
          children.forEach(function (ele) {
            var script = ele.getComponent(fond_card);
            script.setChosen(false);
          });
        };

        _proto.update = function update(deltaTime) {};

        _proto.onItemClicked = function onItemClicked(event) {
          var itemNode = event.target.parent;
          log("click item:", itemNode.name);
          var children = this.cardParent.children;
          children.forEach(function (ele) {
            var script = ele.getComponent(fond_card);
            script.setChosen(ele == itemNode);
          });
        };

        _proto.onButtonClicked = /*#__PURE__*/function () {
          var _onButtonClicked = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  ponzi_controller.instance.sendCCCMsg(ccc_msg.network_block_ui, true);
                  _context.next = 3;
                  return window.pickFund == null ? void 0 : window.pickFund();

                case 3:
                  ponzi_controller.instance.sendCCCMsg(ccc_msg.network_block_ui, false);
                  this.node.active = false;

                case 5:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));

          function onButtonClicked() {
            return _onButtonClicked.apply(this, arguments);
          }

          return onButtonClicked;
        }();

        return pick_money_card;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "cardParent", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/player-model.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './string_utils.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Component, string_utils;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Component = module.Component;
    }, function (module) {
      string_utils = module.string_utils;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;

      cclegacy._RF.push({}, "42f64jpdAxK2I6YwOKiWMXX", "player-model", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var player_model = exports('player_model', (_dec = ccclass('player_model'), _dec2 = property({
        type: Node
      }), _dec3 = property({
        type: Node
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(player_model, _Component);

        function player_model() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "sprite", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "spriteEnemy", _descriptor2, _assertThisInitialized(_this)); //Hash


          _this.playerHash = void 0;
          return _this;
        }

        var _proto = player_model.prototype;

        _proto.start = function start() {};

        _proto.update = function update(deltaTime) {};

        _proto.init = function init(hash) {
          this.playerHash = hash;
          var curPlayerEntity = globalThis.ponzi.currentPlayer;

          if (hash == string_utils.getHashFromSymbol(curPlayerEntity)) {
            this.sprite.active = true;
            this.spriteEnemy.active = false;
          } else {
            this.sprite.active = false;
            this.spriteEnemy.active = true;
          }
        };

        return player_model;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "sprite", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "spriteEnemy", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/PlayerData.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "93c079OZHxMV4reU3/L5lUf", "PlayerData", undefined);

      var PlayerData = exports('PlayerData', function PlayerData() {
        this.gameId = void 0;
        this.state = void 0;
        this.money = void 0;
        this.assets = void 0;
        this.transactions = void 0;
      });

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ponzi_config.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "946baLZbaNKJJ9Vxuu7bT87", "ponzi_config", undefined);

      var ponzi_config = exports('ponzi_config', function ponzi_config() {});
      ponzi_config.fakeBlockTime = 5;
      ponzi_config.mapWH = 20;
      ponzi_config.showCoor = false;

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ponzi-controller.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ccc_msg.ts', './object_utils.ts', './list_utils.ts', './bytes_utils.ts', './string_utils.ts'], function (exports) {
  var _inheritsLoose, _createClass, cclegacy, _decorator, log, find, Component, ccc_msg, object_utils, list_utils, bytes_utils, string_utils;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      log = module.log;
      find = module.find;
      Component = module.Component;
    }, function (module) {
      ccc_msg = module.ccc_msg;
    }, function (module) {
      object_utils = module.object_utils;
    }, function (module) {
      list_utils = module.list_utils;
    }, function (module) {
      bytes_utils = module.bytes_utils;
    }, function (module) {
      string_utils = module.string_utils;
    }],
    execute: function () {
      var _dec, _class, _class2;

      cclegacy._RF.push({}, "d27bewDLOVJ3aP597Cc0JT2", "ponzi-controller", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var ponzi_controller = exports('ponzi_controller', (_dec = ccclass('ponzi_controller'), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(ponzi_controller, _Component);

        function ponzi_controller() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this.players = void 0;
          _this.Game = void 0;
          _this.GameMap = void 0;
          return _this;
        }

        var _proto = ponzi_controller.prototype;

        _proto.start = function start() {
          this.players = [];
          this.init();
        };

        _proto.on = function on(msgName, func) {
          this.node.on(msgName, func);
        };

        _proto.init = function init() {
          if (!globalThis.ponzi) {
            globalThis.ponzi = {};
          }

          this.registerJsLiseners();
        };

        _proto.registerJsLiseners = function registerJsLiseners() {
          log("ccc registerJsLiseners");
          var self = this;

          globalThis.ponzi.gamestate_update = function (oldValue, newValue) {
            self.gameStateUpdate(oldValue, newValue);
          };

          globalThis.ponzi.game_update = function (oldValue, newValue) {
            self.gameUpdate(oldValue, newValue);
          };

          globalThis.ponzi.counter_update = function (oldValue, newValue) {
            self.counterUpdate(oldValue, newValue);
          };

          globalThis.ponzi.isplayer_update = function (update) {
            self.onIsPlayerUpdate(update.entity, update.value[0]);
          };

          globalThis.ponzi.transactionlist_update = function (update) {
            self.transactionListUpdate(update);
          };

          globalThis.ponzi.assetslist_update = function (update) {
            self.onAssetsListUpdate(update);
          };

          globalThis.ponzi.player_update = function (update) {
            var _update$value = update.value,
                nextValue = _update$value[0],
                prevValue = _update$value[1];
            self.onPlayerChanged(update.entity, prevValue, nextValue);
          };

          globalThis.ponzi.gamemap_update = function (oldValue, newValue) {
            self.onGameMapChanged(oldValue, newValue);
          };

          globalThis.ponzi.mapitems_update = function (oldValue, newValue) {
            self.onMapItemsChanged(oldValue, newValue);
          };

          globalThis.ponzi.raiseColddown_update = function (update) {
            self.onRaiseColddownUpdate(update);
          };

          globalThis.ponzi.tradelist_update = function (update) {
            self.onTradeListUpdate(update);
          };

          globalThis.ponzi.passivetransaction_update = function (update) {
            self.onPassiveTransactionUpdate(update);
          };

          globalThis.ponzi.playergameresult_update = function (update) {
            self.onPlayerGameResultUpdate(update);
          };
        };

        _proto.sendCCCMsg = function sendCCCMsg(msgName, msgData) {
          this.node.emit(msgName, msgData);
        };

        _proto.onPlayerGameResultUpdate = function onPlayerGameResultUpdate(update) {
          if (update.entity != globalThis.ponzi.currentPlayer) return;
          var _update$value2 = update.value,
              nextValue = _update$value2[0],
              prevValue = _update$value2[1];
          var data = nextValue;
          var rank = data.rank + 1;
          var points = data.points;
          var gpu = data.gpu;
          var bitcoin = data.bitcoin;
          var battery = data.battery;
          var leiter = data.leiter;
          var gold = data.gold;
          var oil = data.oil;
          log("onPlayerGameResultUpdate", update);
          ponzi_controller.instance.sendCCCMsg(ccc_msg.show_rank, {
            rank: rank,
            points: points
          });
        };

        _proto.onPassiveTransactionUpdate = function onPassiveTransactionUpdate(update) {
          if (update.entity != globalThis.ponzi.currentPlayer) return;
          var _update$value3 = update.value,
              nextValue = _update$value3[0],
              prevValue = _update$value3[1];
          if (!nextValue) return;
          var obj = nextValue;
          var presenterName = obj.from;
          var offerMoney = obj.money;
          var assetNumber = obj.asset;
          ponzi_controller.instance.sendCCCMsg(ccc_msg.show_trade_ask, {
            presenterName: presenterName,
            offerMoney: offerMoney,
            assetNumber: assetNumber
          });
        };

        _proto.onTradeListUpdate = function onTradeListUpdate(update) {
          //todo: notice the presenter of trade here
          log("onTradeListUpdate", update);
          var me = globalThis.ponzi.currentPlayer;
          if (update.entity != me) return;
          var _update$value4 = update.value,
              nextValue = _update$value4[0],
              prevValue = _update$value4[1]; // let oldValue:TradeListItem = bytes_utils.decodeTradeListItem(prevValue);

          log("nextValue.list:", nextValue.list);
          var newValue = bytes_utils.decodeTradeListItem(nextValue.list);
          if (!newValue) return;
          var content = "";
          var optStr = newValue.isSuccess ? "accept" : "counter-buy";

          if (newValue.isPresenter) {
            content = "Your trade partner " + string_utils.sliceLastN(newValue.partner, 6) + " " + optStr + " your trade. Please check your asset and money update.";
          } else {
            content = "You " + optStr + " the trade offered by " + string_utils.sliceLastN(newValue.partner, 6) + ". Please check your asset and money update.";
          } // if(oldValue.index != newValue.index)


          ponzi_controller.instance.sendCCCMsg(ccc_msg.single_button_dialog, {
            content: content,
            btnText: "OK"
          });
        };

        _proto.onRaiseColddownUpdate = function onRaiseColddownUpdate(update) {
          this.sendCCCMsg(ccc_msg.on_raisecolddown_update, update);
        };

        _proto.onMapItemsChanged = function onMapItemsChanged(oldObj, newObj) {
          ponzi_controller.instance.sendCCCMsg(ccc_msg.on_mapitem_update, {
            oldObj: oldObj,
            newObj: newObj
          });
        };

        _proto.onGameMapChanged = function onGameMapChanged(oldObj, newObj) {
          // 调用函数，传入两个对象，得到结果
          var result = this.compareObjects(oldObj, newObj);

          if (!result) {
            log("There is no changes on GameMap");
            return;
          }

          log("on game map changed:", result);
          ponzi_controller.instance.sendCCCMsg(ccc_msg.on_gamemap_update, result);
        };

        _proto.onIsPlayerUpdate = function onIsPlayerUpdate(entity, newObj) {
          ponzi_controller.instance.sendCCCMsg(ccc_msg.on_isplayer_update, {
            entity: entity,
            newObj: newObj
          });
        };

        _proto.onPlayerChanged = function onPlayerChanged(entity, oldObj, newObj) {
          if (object_utils.isNull(oldObj) && newObj) {
            ponzi_controller.instance.sendCCCMsg(ccc_msg.on_player_add, entity);
          } else {
            var result = this.compareObjects(oldObj, newObj); // console.log(result); // ["name", "age"]

            if (result['x'] || result['y']) {
              ponzi_controller.instance.sendCCCMsg(ccc_msg.on_player_update, {
                entity: entity,
                oldObj: oldObj,
                newObj: newObj
              });
            }
          }
        };

        _proto.onAssetsListUpdate = function onAssetsListUpdate(update) {
          this.sendCCCMsg(ccc_msg.on_assetslist_update, update);
        };

        _proto.transactionListUpdate = function transactionListUpdate(update) {
          var entity = update.entity;
          var _update$value5 = update.value,
              nextValue = _update$value5[0],
              prevValue = _update$value5[1];
          log("transactionListUpdate extraStrings:", update, nextValue, prevValue);
          var playerEntity = globalThis.ponzi.currentPlayer;

          if (entity == playerEntity) {
            var extraStrings = list_utils.getExtraStrings(prevValue == null ? void 0 : prevValue.list, nextValue.list);

            if (extraStrings.length > 0) {
              log("transactionListUpdate extraStrings:", extraStrings);
              ponzi_controller.instance.sendCCCMsg(ccc_msg.single_button_dialog, {
                content: "You've got a new trading partner",
                btnText: "OK"
              });
            }
          }
        };

        _proto.counterUpdate = function counterUpdate(oldObj, newObj) {
          // 调用函数，传入两个对象，得到结果
          var result = this.compareObjects(oldObj, newObj);
          var counterValue = result['value'];

          if (counterValue) {
            this.sendCCCMsg('ccc_counter_value', counterValue);
          } // 打印结果


          console.log(result); // ["name", "age"]
        };

        _proto.gameInit = function gameInit(game) {};

        _proto.gameUpdate = function gameUpdate(oldObj, newObj) {
          var result = this.compareObjects(oldObj, newObj); // 打印结果

          console.log("game update", result); // ["name", "age"]
        };

        _proto.gameStateUpdate = function gameStateUpdate(oldObj, newObj) {
          this.sendCCCMsg(ccc_msg.on_gamestate_update, {
            oldObj: oldObj,
            newObj: newObj
          });
        } // 定义一个函数来比较两个对象，并返回一个数组，包含变动的参数名称
        ;

        _proto.compareObjects = function compareObjects(obj1, obj2) {
          // 定义一个空数组来存储变动的参数名称
          var changedParams = {};

          if (!obj1 && obj2) {
            for (var key in obj2) {
              changedParams[key] = obj2[key];
            }
          } else {
            // 遍历obj1的所有属性
            for (var _key2 in obj1) {
              // 如果obj2没有该属性，或者obj2的属性值与obj1不同，则说明该属性发生了变动
              if (!obj2.hasOwnProperty(_key2) || obj1[_key2] !== obj2[_key2]) {
                // 将变动的属性名称添加到数组中
                changedParams[_key2] = obj2[_key2];
              }
            } // 遍历obj2的所有属性


            for (var _key3 in obj2) {
              // 如果obj1没有该属性，则说明该属性是新增的，也属于变动
              if (!obj1.hasOwnProperty(_key3)) {
                // 将变动的属性名称添加到数组中
                changedParams[_key3] = obj2[_key3];
              }
            } // 返回变动的参数名称数组


            return changedParams;
          }
        };

        _createClass(ponzi_controller, null, [{
          key: "instance",
          get: function get() {
            if (!ponzi_controller._instance) {
              ponzi_controller._instance = find("ponzi-controller").getComponent(ponzi_controller);
            }

            return ponzi_controller._instance;
          }
        }]);

        return ponzi_controller;
      }(Component), _class2._instance = void 0, _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ponzi-model.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Singleton.ts'], function (exports) {
  var _inheritsLoose, _createClass, cclegacy, _decorator, Singleton;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }, function (module) {
      Singleton = module.default;
    }],
    execute: function () {
      var _dec, _class, _class2;

      cclegacy._RF.push({}, "badc4hFtvJJQpODfCwyJgyN", "ponzi-model", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var PonziModel = exports('default', (_dec = ccclass("PonziModel"), _dec(_class = (_class2 = /*#__PURE__*/function (_Singleton) {
        _inheritsLoose(PonziModel, _Singleton);

        function PonziModel() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Singleton.call.apply(_Singleton, [this].concat(args)) || this;
          _this.counterValue = void 0;
          return _this;
        }

        var _proto = PonziModel.prototype; // 定义一个私有的构造函数，使得外部不能直接创建类的实例

        _proto.PonziModel = function PonziModel() {
          this.counterValue = 0;
        } // 定义一个公共的静态方法，用于获取类的唯一实例
        ;

        _createClass(PonziModel, null, [{
          key: "instance",
          get: function get() {
            // 如果实例不存在，就创建一个新的实例并赋值给静态属性
            if (!PonziModel._instance) {
              PonziModel._instance = new PonziModel();
            } // 返回静态属性


            return PonziModel._instance;
          }
        }]);

        return PonziModel;
      }(Singleton()), _class2._instance = void 0, _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/popupui_manager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ponzi-controller.ts', './ccc_msg.ts', './single-button-pop.ts', './pick_asset.ts', './pick-money-card.ts', './rules.ts', './trade.ts', './trade-ask.ts', './trade_input_price.ts', './rank.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Component, ponzi_controller, ccc_msg, single_button_pop, pick_asset, pick_money_card, rules, trade, trade_ask, trade_input_price, rank;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Component = module.Component;
    }, function (module) {
      ponzi_controller = module.ponzi_controller;
    }, function (module) {
      ccc_msg = module.ccc_msg;
    }, function (module) {
      single_button_pop = module.single_button_pop;
    }, function (module) {
      pick_asset = module.pick_asset;
    }, function (module) {
      pick_money_card = module.pick_money_card;
    }, function (module) {
      rules = module.rules;
    }, function (module) {
      trade = module.trade;
    }, function (module) {
      trade_ask = module.trade_ask;
    }, function (module) {
      trade_input_price = module.trade_input_price;
    }, function (module) {
      rank = module.rank;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9;

      cclegacy._RF.push({}, "454a77xJxBFcYkhgV356qng", "popupui_manager", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var popupui_manager = exports('popupui_manager', (_dec = ccclass('popupui_manager'), _dec2 = property({
        type: Node
      }), _dec3 = property({
        type: single_button_pop
      }), _dec4 = property({
        type: pick_asset
      }), _dec5 = property({
        type: pick_money_card
      }), _dec6 = property({
        type: rules
      }), _dec7 = property({
        type: trade
      }), _dec8 = property({
        type: trade_ask
      }), _dec9 = property({
        type: trade_input_price
      }), _dec10 = property({
        type: rank
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(popupui_manager, _Component);

        function popupui_manager() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "networkBlock", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "singleDialog", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "pickAsset", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "pickFund", _descriptor4, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "rules", _descriptor5, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "trade", _descriptor6, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "tradeAsk", _descriptor7, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "tradeInput", _descriptor8, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "rank", _descriptor9, _assertThisInitialized(_this));

          return _this;
        }

        var _proto = popupui_manager.prototype;

        _proto.start = function start() {
          var self = this;
          self.pickAsset.node.active = false;
          self.pickFund.node.active = false;
          self.rules.node.active = false;
          self.trade.node.active = false;
          self.tradeAsk.node.active = false;
          self.tradeInput.node.active = false;
          self.rank.node.active = false;
          ponzi_controller.instance.on(ccc_msg.network_block_ui, function (show) {
            self.networkBlock.active = show;
          });
          ponzi_controller.instance.on(ccc_msg.single_button_dialog, function (_ref) {
            var content = _ref.content,
                btnText = _ref.btnText;
            self.singleDialog.node.active = true;
            self.singleDialog.init(content, btnText);
          });
          ponzi_controller.instance.on(ccc_msg.show_pick_asset, function () {
            self.pickAsset.node.active = true;
            self.pickAsset.reset();
          });
          ponzi_controller.instance.on(ccc_msg.show_pick_fund, function () {
            self.pickFund.node.active = true;
          });
          ponzi_controller.instance.on(ccc_msg.show_rules, function () {
            self.rules.node.active = true;
          });
          ponzi_controller.instance.on(ccc_msg.show_trade, function () {
            self.trade.node.active = true;
            self.trade.reset();
          });
          ponzi_controller.instance.on(ccc_msg.show_trade_ask, function (obj) {
            self.tradeAsk.node.active = true;
            var presenterName = obj.presenterName,
                offerMoney = obj.offerMoney,
                assetNumber = obj.assetNumber;
            self.tradeAsk.init(presenterName, offerMoney, assetNumber);
          });
          ponzi_controller.instance.on(ccc_msg.show_trade_input, function () {
            self.tradeInput.node.active = true;
          });
          ponzi_controller.instance.on(ccc_msg.show_rank, function (obj) {
            var rank = obj.rank;
            var points = obj.points;
            self.rank.node.active = true;
            self.rank.init(rank, points);
          });
        };

        _proto.update = function update(deltaTime) {};

        return popupui_manager;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "networkBlock", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "singleDialog", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "pickAsset", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "pickFund", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "rules", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "trade", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "tradeAsk", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "tradeInput", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "rank", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/rank.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ponzi-controller.ts', './ccc_msg.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, Component, ponzi_controller, ccc_msg;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Label = module.Label;
      Component = module.Component;
    }, function (module) {
      ponzi_controller = module.ponzi_controller;
    }, function (module) {
      ccc_msg = module.ccc_msg;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;

      cclegacy._RF.push({}, "54d5aEhC05A5IR98CYYCn2I", "rank", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var rank = exports('rank', (_dec = ccclass('rank'), _dec2 = property({
        type: Label
      }), _dec3 = property({
        type: Label
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(rank, _Component);

        function rank() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "labelRank", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "labelPoints", _descriptor2, _assertThisInitialized(_this));

          return _this;
        }

        var _proto = rank.prototype;

        _proto.start = function start() {};

        _proto.update = function update(deltaTime) {};

        _proto.init = function init(_rank, points) {
          this.labelPoints.string = points.toString();
          this.labelRank.string = _rank.toString();
        };

        _proto.onShareClicked = function onShareClicked() {
          ponzi_controller.instance.sendCCCMsg(ccc_msg.single_button_dialog, {
            content: "This feature is under development",
            btnText: "OK"
          });
        };

        _proto.onPlayerAgainClicked = function onPlayerAgainClicked() {
          ponzi_controller.instance.sendCCCMsg(ccc_msg.single_button_dialog, {
            content: "This feature is under development",
            btnText: "OK"
          });
        };

        _proto.onBtnCloseClicked = function onBtnCloseClicked() {
          this.node.active = false;
        };

        return rank;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "labelRank", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "labelPoints", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/right-player-list-item.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ponzi-controller.ts', './ccc_msg.ts', './rule_utils.ts', './string_utils.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Label, Component, ponzi_controller, ccc_msg, rule_utils, string_utils;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Label = module.Label;
      Component = module.Component;
    }, function (module) {
      ponzi_controller = module.ponzi_controller;
    }, function (module) {
      ccc_msg = module.ccc_msg;
    }, function (module) {
      rule_utils = module.rule_utils;
    }, function (module) {
      string_utils = module.string_utils;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8;

      cclegacy._RF.push({}, "244b0/ZByZNJZ3APWmgrHO6", "right-player-list-item", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var right_player_list_item = exports('right_player_list_item', (_dec = ccclass('right_player_list_item'), _dec2 = property({
        type: Label
      }), _dec3 = property({
        type: Label
      }), _dec4 = property({
        type: Label
      }), _dec5 = property({
        type: Label
      }), _dec6 = property({
        type: Label
      }), _dec7 = property({
        type: Label
      }), _dec8 = property({
        type: Label
      }), _dec9 = property({
        type: Label
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(right_player_list_item, _Component);

        function right_player_list_item() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "labelName", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "labelItem1", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "labelItem2", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "labelItem3", _descriptor4, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "labelItem4", _descriptor5, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "labelItem5", _descriptor6, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "labelItem6", _descriptor7, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "labelPoints", _descriptor8, _assertThisInitialized(_this));

          _this.itemPlayerEntity = void 0;
          _this._inited = false;
          return _this;
        }

        var _proto = right_player_list_item.prototype;

        _proto.start = function start() {};

        _proto.update = function update(deltaTime) {
          if (!this._inited) this._init();
        };

        _proto.init = function init(itemPlayerEntity) {
          this.itemPlayerEntity = itemPlayerEntity;
        };

        _proto._init = /*#__PURE__*/function () {
          var _init2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var playerEntity;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  playerEntity = this.itemPlayerEntity;

                  if (playerEntity) {
                    _context.next = 3;
                    break;
                  }

                  return _context.abrupt("return");

                case 3:
                  this._inited = true;
                  this.labelName.string = string_utils.truncateString(playerEntity); //query self assetsList

                  this.updateUI(); //register lis

                  this._registerListeners();

                case 7:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));

          function _init() {
            return _init2.apply(this, arguments);
          }

          return _init;
        }();

        _proto.updateUI = /*#__PURE__*/function () {
          var _updateUI = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
            var assetsList, totalScore;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.next = 2;
                  return window.queryValue == null ? void 0 : window.queryValue(window.env.components.AssetsList, this.itemPlayerEntity);

                case 2:
                  assetsList = _context2.sent;
                  this.labelItem1.string = assetsList.gpu;
                  this.labelItem2.string = assetsList.bitcoin;
                  this.labelItem3.string = assetsList.battery;
                  this.labelItem4.string = assetsList.leiter;
                  this.labelItem5.string = assetsList.gold;
                  this.labelItem6.string = assetsList.oil;
                  totalScore = rule_utils.calculateScore(assetsList.gpu) + rule_utils.calculateScore(assetsList.bitcoin) + rule_utils.calculateScore(assetsList.battery) + rule_utils.calculateScore(assetsList.leiter) + rule_utils.calculateScore(assetsList.gold) + rule_utils.calculateScore(assetsList.oil);
                  this.labelPoints.string = totalScore.toString();

                case 11:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, this);
          }));

          function updateUI() {
            return _updateUI.apply(this, arguments);
          }

          return updateUI;
        }();

        _proto._registerListeners = function _registerListeners() {
          var self = this;
          ponzi_controller.instance.on(ccc_msg.on_assetslist_update, /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(update) {
            var _update$value;

            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  _update$value = update.value, _update$value[0], _update$value[1];

                  if (!(self.itemPlayerEntity != update.entity)) {
                    _context3.next = 3;
                    break;
                  }

                  return _context3.abrupt("return");

                case 3:
                  _context3.next = 5;
                  return self.updateUI();

                case 5:
                case "end":
                  return _context3.stop();
              }
            }, _callee3);
          })));
        };

        return right_player_list_item;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "labelName", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "labelItem1", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "labelItem2", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "labelItem3", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "labelItem4", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "labelItem5", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "labelItem6", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "labelPoints", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/right-player-list.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './right-player-list-item.ts', './string_utils.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createForOfIteratorHelperLoose, cclegacy, _decorator, Node, log, instantiate, Component, right_player_list_item, string_utils;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      log = module.log;
      instantiate = module.instantiate;
      Component = module.Component;
    }, function (module) {
      right_player_list_item = module.right_player_list_item;
    }, function (module) {
      string_utils = module.string_utils;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;

      cclegacy._RF.push({}, "1641dmD3eZCmoTdvp1N2NUq", "right-player-list", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var right_player_list = exports('right_player_list', (_dec = ccclass('right_player_list'), _dec2 = property({
        type: Node
      }), _dec3 = property({
        type: Node
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(right_player_list, _Component);

        function right_player_list() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "itemModel", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "itemParent", _descriptor2, _assertThisInitialized(_this));

          _this._inited = false;
          return _this;
        }

        var _proto = right_player_list.prototype;

        _proto.start = function start() {
          this.itemModel.active = false;
        };

        _proto.update = function update(deltaTime) {
          if (!this._inited) this.init();
        };

        _proto.init = function init() {
          var players = window.getAssetsList == null ? void 0 : window.getAssetsList();

          if (!players) {
            return;
          }

          this._inited = true;
          var array = [];

          for (var key in players) {
            var map = players[key];

            for (var _iterator = _createForOfIteratorHelperLoose(map), _step; !(_step = _iterator()).done;) {
              var _step$value = _step.value,
                  entity = _step$value[0],
                  value = _step$value[1];
              console.log(key, entity, value);
              var hash = string_utils.getHashFromSymbol(entity);

              if (array.indexOf(hash) === -1) {
                array.push(hash);
              }
            }
          }

          log("role array:", array);
          var self = this; // self.itemParent.removeAllChildren();

          for (var _key2 in array) {
            var _hash = array[_key2];
            var newNode = instantiate(self.itemModel);
            newNode.setParent(self.itemParent);
            newNode.active = true;
            var script = newNode.getComponent(right_player_list_item);
            script.init(_hash);
          }
        };

        return right_player_list;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "itemModel", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "itemParent", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/RoleLocalObj.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "14c670v7IFJSIz5aZf751FE", "RoleLocalObj", undefined);

      var RoleLocalObj = exports('RoleLocalObj', function RoleLocalObj() {
        this.gameId = void 0;
        this.state = void 0;
        this.money = void 0;
        this.row = void 0;
        this.col = void 0;
        this.assets = void 0;
        this.transactions = void 0;
      });

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/RowCol.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "637703VAvtEYaVriGd18T+w", "RowCol", undefined);

      var RowCol = exports('RowCol', function RowCol() {
        this.row = void 0;
        this.col = void 0;
      });

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/rule_utils.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "b9c5b9TA9FHL7VuIfigYW2z", "rule_utils", undefined);

      var rule_utils = exports('rule_utils', /*#__PURE__*/function () {
        function rule_utils() {}

        rule_utils.calculateSingleAssetScore = function calculateSingleAssetScore(arr) {
          var score = 0;

          for (var i = 0; i < arr.length; i++) {
            score += i + 1;
          }

          return score;
        };

        rule_utils.calculateScore = function calculateScore(num) {
          var score = 0;

          for (var i = 1; i <= num; i++) {
            score += i;
          }

          return score;
        };

        return rule_utils;
      }());

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/rules.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, Component;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "b2741IVokNLR4WeLxS/1+Dk", "rules", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var rules = exports('rules', (_dec = ccclass('rules'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(rules, _Component);

        function rules() {
          return _Component.apply(this, arguments) || this;
        }

        var _proto = rules.prototype;

        _proto.start = function start() {};

        _proto.update = function update(deltaTime) {};

        _proto.onCloseClicked = function onCloseClicked() {
          this.node.active = false;
        };

        return rules;
      }(Component)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/single-button-pop.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, Component;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Label = module.Label;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;

      cclegacy._RF.push({}, "c321aMqJepMl7TZuWl0gSUf", "single-button-pop", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var single_button_pop = exports('single_button_pop', (_dec = ccclass('single_button_pop'), _dec2 = property({
        type: Label
      }), _dec3 = property({
        type: Label
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(single_button_pop, _Component);

        function single_button_pop() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "contentLabel", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "buttonLabel", _descriptor2, _assertThisInitialized(_this));

          return _this;
        }

        var _proto = single_button_pop.prototype;

        _proto.start = function start() {};

        _proto.update = function update(deltaTime) {};

        _proto.init = function init(content, btnText) {
          this.contentLabel.string = content;
          this.buttonLabel.string = btnText;
        };

        _proto.onBtnClicked = function onBtnClicked() {
          this.node.active = false;
        };

        return single_button_pop;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "contentLabel", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "buttonLabel", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Singleton.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _createClass, cclegacy;

  return {
    setters: [function (module) {
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      exports('default', Singleton);

      cclegacy._RF.push({}, "68201K4vYJGJIZzioC2UaTs", "Singleton", undefined);

      function Singleton() {
        var SingletonT = /*#__PURE__*/function () {
          function SingletonT() {}

          _createClass(SingletonT, null, [{
            key: "Inst",
            get: function get() {
              if (SingletonT._inst === null) {
                SingletonT._inst = new this();
              }

              return SingletonT._inst;
            }
          }]);

          return SingletonT;
        }();

        SingletonT._inst = null;
        return SingletonT;
      }

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/string_utils.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "27384iB89NAKKt0tJGnSKbp", "string_utils", undefined);

      var string_utils = exports('string_utils', /*#__PURE__*/function () {
        function string_utils() {}

        string_utils.truncateString = function truncateString(str) {
          if (str.length <= 7) {
            return str; // 字符串长度不足以进行截断，直接返回原字符串
          }

          var leftPart = str.slice(0, 3); // 左边剩下的3位字符

          var rightPart = str.slice(-4); // 右边剩下的4位字符

          return leftPart + "..." + rightPart;
        };

        string_utils.sliceLastN = function sliceLastN(str, n) {
          // 如果n小于等于0，或者大于等于字符串的长度，返回空字符串
          if (n <= 0 || n >= str.length) {
            return "";
          } // 否则，使用slice方法，从字符串的长度减去n的位置开始，到字符串的末尾结束，返回截取的子字符串
          else {
              return str.slice(str.length - n);
            }
        };

        string_utils.getNumberFromSymbol = function getNumberFromSymbol(sym) {
          var hexValue = this.getHashFromSymbol(sym);
          var decimalValue = BigInt(hexValue);
          var numberValue = Number(decimalValue);
          return numberValue;
        };

        string_utils.getHashFromSymbol = function getHashFromSymbol(sym) {
          var str = sym.toString();
          var index = str.indexOf("Symbol(");

          if (index !== 0) {
            // log("This is not a symble string:",sym);
            return sym;
          }

          var hash = str.slice(7, -1); // 调用slice方法，去掉前面的"Symbol("和后面的")"

          return hash;
        };

        string_utils.addStringToArray = function addStringToArray(arr, str) {
          // 如果数组中已经包含了这个字符串，不做任何操作
          var index = arr.indexOf(str);

          if (index !== -1) {
            return;
          } // 否则，将这个字符串推入数组的末尾
          else {
              arr.push(str);
            }
        };

        return string_utils;
      }());

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/temp_data.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _createClass, cclegacy;

  return {
    setters: [function (module) {
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "b0e25pkQlVO2q3QYb9DG0fi", "temp_data", undefined);

      var temp_data = exports('temp_data', /*#__PURE__*/function () {
        function temp_data() {
          this.tradeAsset = void 0;
          this.tradeTargetPlayer = void 0;
        }

        var _proto = temp_data.prototype;

        _proto.setTradeInfo = function setTradeInfo(asset, targetPlayer) {
          this.tradeAsset = asset;
          this.tradeTargetPlayer = targetPlayer;
        };

        _proto.getTradeInfo = function getTradeInfo() {
          return [this.tradeAsset, this.tradeTargetPlayer];
        };

        _createClass(temp_data, null, [{
          key: "instance",
          get: function get() {
            if (!temp_data._instance) {
              temp_data._instance = new temp_data();
            }

            return temp_data._instance;
          }
        }]);

        return temp_data;
      }());
      temp_data._instance = void 0;

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/test.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, Component;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "d14e046qVRM64qyg0X0aGwn", "test", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var test = exports('test', (_dec = ccclass('test'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(test, _Component);

        function test() {
          return _Component.apply(this, arguments) || this;
        }

        var _proto = test.prototype;

        _proto.start = function start() {// const testBytes = "0x0000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000001000000000000000000000000ef5f8c47df0897a040417c39d38b9251240474bc";
          // const tradeListItem = bytes_utils.decodeTradeListItem(testBytes);
          // console.log(tradeListItem);
        };

        _proto.update = function update(deltaTime) {};

        return test;
      }(Component)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/time_utils.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "c6be3VlEfVCrY8g3GPpt2JU", "time_utils", undefined);

      var time_utils = exports('time_utils', /*#__PURE__*/function () {
        function time_utils() {}

        time_utils.calculateRemainingTime = function calculateRemainingTime(nowTime, endTime, startTime, blockRange) {
          var remainingSeconds = endTime - nowTime;
          var remainingHours = Math.floor(remainingSeconds / 3600);
          var remainingMinutes = Math.ceil(remainingSeconds % 3600 / 60); // 使用 ceil() 向上取整

          var elapsedBlocks = Math.floor((nowTime - startTime) / blockRange);
          var totalBlocks = Math.floor((endTime - startTime) / blockRange);
          return remainingHours + "H " + remainingMinutes + "M (" + elapsedBlocks + "/" + totalBlocks + " BLOCKS)";
        } // 定义一个函数，接受一个秒数作为参数，返回一个字符串表示转换后的结果
        ;

        time_utils.formatSeconds = function formatSeconds(seconds) {
          var dayStr = " Day ";
          var hourStr = " Hour ";
          var minuteStr = " Minute ";
          var secondStr = " Second "; // 定义一个空字符串，用于存储结果

          var result = ""; // 定义一天、一小时、一分钟的秒数

          var day = 24 * 60 * 60;
          var hour = 60 * 60;
          var minute = 60; // 计算天数，并添加到结果中，如果为零，则不显示

          var days = Math.floor(seconds / day);

          if (days > 0) {
            result += days + dayStr;
          } // 计算小时数，并添加到结果中，如果为零，则不显示


          var hours = Math.floor(seconds % day / hour);

          if (hours > 0) {
            result += hours + hourStr;
          } // 计算分钟数，并添加到结果中，如果为零，则不显示


          var minutes = Math.floor(seconds % hour / minute);

          if (minutes > 0) {
            result += minutes + minuteStr;
          } // 计算秒数，并添加到结果中，如果为零，则不显示


          var showSeconds = Math.floor(seconds % minute);

          if (showSeconds > 0) {
            result += showSeconds + secondStr;
          } // 返回结果字符串


          return result;
        };

        return time_utils;
      }());

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/title-money.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ponzi-controller.ts', './ccc_msg.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Label, Component, ponzi_controller, ccc_msg;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Label = module.Label;
      Component = module.Component;
    }, function (module) {
      ponzi_controller = module.ponzi_controller;
    }, function (module) {
      ccc_msg = module.ccc_msg;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;

      cclegacy._RF.push({}, "1f072PXdu1KhajgTKS+uklP", "title-money", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var title_money = exports('title_money', (_dec = ccclass('title_money'), _dec2 = property({
        type: Label
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(title_money, _Component);

        function title_money() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "moneyLabel", _descriptor, _assertThisInitialized(_this));

          _this._inited = false;
          return _this;
        }

        var _proto = title_money.prototype;

        _proto.start = function start() {};

        _proto.update = function update(deltaTime) {
          if (!this._inited) this.init();
        };

        _proto.init = /*#__PURE__*/function () {
          var _init = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var playerEntity, currentPlayer;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  playerEntity = globalThis.ponzi.currentPlayer;

                  if (playerEntity) {
                    _context.next = 3;
                    break;
                  }

                  return _context.abrupt("return");

                case 3:
                  this._inited = true;
                  currentPlayer = null;
                  _context.prev = 5;
                  _context.next = 8;
                  return window.queryValue == null ? void 0 : window.queryValue(window.env.components.Player, playerEntity);

                case 8:
                  currentPlayer = _context.sent;
                  this.moneyLabel.string = currentPlayer.money.toString();
                  _context.next = 15;
                  break;

                case 12:
                  _context.prev = 12;
                  _context.t0 = _context["catch"](5);
                  currentPlayer = null;

                case 15:
                  this.registerListeners();

                case 16:
                case "end":
                  return _context.stop();
              }
            }, _callee, this, [[5, 12]]);
          }));

          function init() {
            return _init.apply(this, arguments);
          }

          return init;
        }();

        _proto.registerListeners = function registerListeners() {
          var _this2 = this;

          var playerEntity = globalThis.ponzi.currentPlayer;
          ponzi_controller.instance.on(ccc_msg.on_player_update, function (obj) {
            var entity = obj.entity;
            var oldObj = obj.oldObj;
            var newObj = obj.newObj;

            if (playerEntity == entity) {
              _this2.moneyLabel.string = newObj.money;
            }
          });
        };

        return title_money;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "moneyLabel", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/toggle.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Component;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;

      cclegacy._RF.push({}, "5994bopob5Cv4DCK56zzKaF", "toggle", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var toggle = exports('toggle', (_dec = ccclass('toggle'), _dec2 = property({
        type: Node
      }), _dec3 = property({
        type: Node
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(toggle, _Component);

        function toggle() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "normal", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "select", _descriptor2, _assertThisInitialized(_this));

          return _this;
        }

        var _proto = toggle.prototype;

        _proto.start = function start() {};

        _proto.update = function update(deltaTime) {};

        _proto.setSelected = function setSelected(isSelected) {
          this.normal.active = !isSelected;
          this.select.active = isSelected;
        };

        return toggle;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "normal", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "select", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/trade_input_price.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ccc_msg.ts', './ponzi-controller.ts', './temp_data.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, EditBox, Component, log, ccc_msg, ponzi_controller, temp_data;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      EditBox = module.EditBox;
      Component = module.Component;
      log = module.log;
    }, function (module) {
      ccc_msg = module.ccc_msg;
    }, function (module) {
      ponzi_controller = module.ponzi_controller;
    }, function (module) {
      temp_data = module.temp_data;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;

      cclegacy._RF.push({}, "405c1e05X1AlbJ3m5SdZ5c6", "trade_input_price", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var trade_input_price = exports('trade_input_price', (_dec = ccclass('trade_input_price'), _dec2 = property({
        type: EditBox
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(trade_input_price, _Component);

        function trade_input_price() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "editBox", _descriptor, _assertThisInitialized(_this));

          return _this;
        }

        var _proto = trade_input_price.prototype;

        _proto.start = function start() {};

        _proto.update = function update(deltaTime) {};

        _proto.onConfirmClicked = /*#__PURE__*/function () {
          var _onConfirmClicked = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var data;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  log("Confirm", this.editBox.textLabel.string);
                  ponzi_controller.instance.sendCCCMsg(ccc_msg.network_block_ui, true);
                  _context.prev = 2;
                  data = temp_data.instance.getTradeInfo();
                  _context.next = 6;
                  return window.trade == null ? void 0 : window.trade(data[1], data[0], this.editBox.textLabel.string);

                case 6:
                  ponzi_controller.instance.sendCCCMsg(ccc_msg.single_button_dialog, {
                    content: "Trade sended, please wait for answer.",
                    btnText: "OK"
                  });
                  this.node.active = false;
                  _context.next = 13;
                  break;

                case 10:
                  _context.prev = 10;
                  _context.t0 = _context["catch"](2);
                  ponzi_controller.instance.sendCCCMsg(ccc_msg.single_button_dialog, {
                    content: "Trade failed, condition is not satisfied.",
                    btnText: "OK"
                  });

                case 13:
                  _context.prev = 13;
                  ponzi_controller.instance.sendCCCMsg(ccc_msg.network_block_ui, false);
                  return _context.finish(13);

                case 16:
                case "end":
                  return _context.stop();
              }
            }, _callee, this, [[2, 10, 13, 16]]);
          }));

          function onConfirmClicked() {
            return _onConfirmClicked.apply(this, arguments);
          }

          return onConfirmClicked;
        }();

        return trade_input_price;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "editBox", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/trade_parter_item.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './toggle.ts', './item_asset.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, Node, Component, toggle, item_asset;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Label = module.Label;
      Node = module.Node;
      Component = module.Component;
    }, function (module) {
      toggle = module.toggle;
    }, function (module) {
      item_asset = module.item_asset;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3;

      cclegacy._RF.push({}, "e6d36LpflZAVrHvuiNRf44x", "trade_parter_item", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var trade_parter_item = exports('trade_parter_item', (_dec = ccclass('trade_parter_item'), _dec2 = property({
        type: Label
      }), _dec3 = property({
        type: Node
      }), _dec4 = property({
        type: toggle
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(trade_parter_item, _Component);

        function trade_parter_item() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "labelName", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "assetParent", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "toggle", _descriptor3, _assertThisInitialized(_this));

          _this.entity = void 0;
          return _this;
        }

        var _proto = trade_parter_item.prototype;

        _proto.start = function start() {};

        _proto.update = function update(deltaTime) {};

        _proto.setSelected = function setSelected(isSelected) {
          this.toggle.setSelected(isSelected);
        };

        _proto.init = function init(name, c1, c2, c3, c4, c5, c6) {
          this.labelName.string = name;
          this.setAssetCountByIndex(0, c1);
          this.setAssetCountByIndex(1, c2);
          this.setAssetCountByIndex(2, c3);
          this.setAssetCountByIndex(3, c4);
          this.setAssetCountByIndex(4, c5);
          this.setAssetCountByIndex(5, c6);
        };

        _proto.setAssetCountByIndex = function setAssetCountByIndex(index, count) {
          var children = this.assetParent.children;
          var script = children[index].getComponent(item_asset);
          script.label.string = count.toString();
        };

        return trade_parter_item;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "labelName", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "assetParent", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "toggle", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/trade-ask.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ponzi-controller.ts', './ccc_msg.ts', './string_utils.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Label, Node, Component, ponzi_controller, ccc_msg, string_utils;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Label = module.Label;
      Node = module.Node;
      Component = module.Component;
    }, function (module) {
      ponzi_controller = module.ponzi_controller;
    }, function (module) {
      ccc_msg = module.ccc_msg;
    }, function (module) {
      string_utils = module.string_utils;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3;

      cclegacy._RF.push({}, "293aazEYTtEbpomexLptRJM", "trade-ask", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var trade_ask = exports('trade_ask', (_dec = ccclass('trade_ask'), _dec2 = property({
        type: Label
      }), _dec3 = property({
        type: Label
      }), _dec4 = property({
        type: Node
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(trade_ask, _Component);

        function trade_ask() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "labelLine1", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "labelLine2", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "iconParent", _descriptor3, _assertThisInitialized(_this));

          return _this;
        }

        var _proto = trade_ask.prototype;

        _proto.start = function start() {};

        _proto.update = function update(deltaTime) {};

        _proto.init = function init(presenterName, offerMoney, assetNumber) {
          for (var i = 0; i < this.iconParent.children.length; i++) {
            this.iconParent.children[i].active = i === assetNumber - 1;
          }

          this.labelLine1.string = "User " + string_utils.sliceLastN(presenterName, 6) + " wants to buy your " + this.getAssetName(assetNumber) + " for";
          this.labelLine2.string = "$" + offerMoney;
        };

        _proto.onBtnAcceptClicked = /*#__PURE__*/function () {
          var _onBtnAcceptClicked = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  ponzi_controller.instance.sendCCCMsg(ccc_msg.network_block_ui, true);
                  _context.prev = 1;
                  _context.next = 4;
                  return window.acceptTrade == null ? void 0 : window.acceptTrade();

                case 4:
                  _context.next = 9;
                  break;

                case 6:
                  _context.prev = 6;
                  _context.t0 = _context["catch"](1);
                  ponzi_controller.instance.sendCCCMsg(ccc_msg.single_button_dialog, {
                    content: "Accept failed",
                    btnText: "OK"
                  });

                case 9:
                  _context.prev = 9;
                  ponzi_controller.instance.sendCCCMsg(ccc_msg.network_block_ui, false);
                  return _context.finish(9);

                case 12:
                  this.node.active = false;

                case 13:
                case "end":
                  return _context.stop();
              }
            }, _callee, this, [[1, 6, 9, 12]]);
          }));

          function onBtnAcceptClicked() {
            return _onBtnAcceptClicked.apply(this, arguments);
          }

          return onBtnAcceptClicked;
        }();

        _proto.onBtnRejectClicked = /*#__PURE__*/function () {
          var _onBtnRejectClicked = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  ponzi_controller.instance.sendCCCMsg(ccc_msg.network_block_ui, true);
                  _context2.prev = 1;
                  _context2.next = 4;
                  return window.rejectTrade == null ? void 0 : window.rejectTrade();

                case 4:
                  _context2.next = 9;
                  break;

                case 6:
                  _context2.prev = 6;
                  _context2.t0 = _context2["catch"](1);
                  ponzi_controller.instance.sendCCCMsg(ccc_msg.single_button_dialog, {
                    content: "Accept failed",
                    btnText: "OK"
                  });

                case 9:
                  _context2.prev = 9;
                  ponzi_controller.instance.sendCCCMsg(ccc_msg.network_block_ui, false);
                  return _context2.finish(9);

                case 12:
                  this.node.active = false;

                case 13:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, this, [[1, 6, 9, 12]]);
          }));

          function onBtnRejectClicked() {
            return _onBtnRejectClicked.apply(this, arguments);
          }

          return onBtnRejectClicked;
        }();

        _proto.getAssetName = function getAssetName(number) {
          if (number === 1) {
            return "GPU";
          } else if (number === 2) {
            return "bitcoin";
          } else if (number === 3) {
            return "battery";
          } else if (number === 4) {
            return "leiter";
          } else if (number === 5) {
            return "gold";
          } else if (number === 6) {
            return "oil";
          } else {
            return "unknown asset";
          }
        };

        return trade_ask;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "labelLine1", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "labelLine2", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "iconParent", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/trade-asset-item.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Component;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;

      cclegacy._RF.push({}, "00e3bOPa+pGmr23g33/bwXz", "trade-asset-item", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var trade_asset_item = exports('trade_asset_item', (_dec = ccclass('trade_asset_item'), _dec2 = property({
        type: Node
      }), _dec3 = property({
        type: Node
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(trade_asset_item, _Component);

        function trade_asset_item() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "normalImage", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "selectedImage", _descriptor2, _assertThisInitialized(_this));

          return _this;
        }

        var _proto = trade_asset_item.prototype;

        _proto.start = function start() {};

        _proto.update = function update(deltaTime) {};

        _proto.setSelected = function setSelected(isSelected) {
          this.normalImage.active = !isSelected;
          this.selectedImage.active = isSelected;
        };

        return trade_asset_item;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "normalImage", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "selectedImage", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/trade.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './trade-asset-item.ts', './ponzi-controller.ts', './ccc_msg.ts', './trade_parter_item.ts', './string_utils.ts', './temp_data.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, _createForOfIteratorHelperLoose, cclegacy, _decorator, Node, Component, instantiate, Vec3, trade_asset_item, ponzi_controller, ccc_msg, trade_parter_item, string_utils, temp_data;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Component = module.Component;
      instantiate = module.instantiate;
      Vec3 = module.Vec3;
    }, function (module) {
      trade_asset_item = module.trade_asset_item;
    }, function (module) {
      ponzi_controller = module.ponzi_controller;
    }, function (module) {
      ccc_msg = module.ccc_msg;
    }, function (module) {
      trade_parter_item = module.trade_parter_item;
    }, function (module) {
      string_utils = module.string_utils;
    }, function (module) {
      temp_data = module.temp_data;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3;

      cclegacy._RF.push({}, "46d93LmPf1IGaA1Ix4Vqbkb", "trade", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var trade = exports('trade', (_dec = ccclass('trade'), _dec2 = property({
        type: Node
      }), _dec3 = property({
        type: Node
      }), _dec4 = property({
        type: Node
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(trade, _Component);

        function trade() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "assetsParent", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "partnerParent", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "tradeItemModel", _descriptor3, _assertThisInitialized(_this));

          _this.assetIndex = -1;
          _this.partnerEntity = void 0;
          _this._inited = false;
          return _this;
        }

        var _proto = trade.prototype;

        _proto.start = function start() {
          this.tradeItemModel.active = false;
        };

        _proto.update = function update(deltaTime) {
          if (!this._inited) this.init();
        };

        _proto.onCloseClicked = function onCloseClicked() {
          this.node.active = false;
        };

        _proto.reset = function reset() {
          this._inited = false;
          this.partnerEntity = null;
          this.assetIndex = -1;

          this._resetAssets();
        };

        _proto.onTradeClicked = /*#__PURE__*/function () {
          var _onTradeClicked = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  if (!(this.assetIndex === -1)) {
                    _context.next = 3;
                    break;
                  }

                  ponzi_controller.instance.sendCCCMsg(ccc_msg.single_button_dialog, {
                    content: "Please choose an asset first.",
                    btnText: "OK"
                  });
                  return _context.abrupt("return");

                case 3:
                  if (this.partnerEntity) {
                    _context.next = 6;
                    break;
                  }

                  ponzi_controller.instance.sendCCCMsg(ccc_msg.single_button_dialog, {
                    content: "Please choose an trade partner first.",
                    btnText: "OK"
                  });
                  return _context.abrupt("return");

                case 6:
                  temp_data.instance.setTradeInfo(this.assetIndex, this.partnerEntity);
                  this.node.active = false;
                  this.reset();
                  ponzi_controller.instance.sendCCCMsg(ccc_msg.show_trade_input, null);

                case 10:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));

          function onTradeClicked() {
            return _onTradeClicked.apply(this, arguments);
          }

          return onTradeClicked;
        }();

        _proto.onAssetItemClicked = function onAssetItemClicked(event) {
          var _this2 = this;

          var node = event.target;
          var children = this.assetsParent.children;
          children.forEach(function (ele) {
            var script = ele.getComponent(trade_asset_item);
            script.setSelected(node === ele);

            if (node === ele) {
              _this2.assetIndex = children.indexOf(node) + 1;
            }
          });
        };

        _proto.onParterBoxClicked = function onParterBoxClicked(event) {
          var _this3 = this;

          var node = event.target.parent;
          var children = this.partnerParent.children;
          children.forEach(function (ele) {
            var script = ele.getComponent(trade_parter_item);
            script.setSelected(node === ele);

            if (node === ele) {
              _this3.partnerEntity = script.entity;
            }
          });
        };

        _proto.init = /*#__PURE__*/function () {
          var _init = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
            var matchingEntities, _iterator, _step, playerEntity, al, newNode, script, name;

            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  this._inited = true;
                  this.partnerParent.removeAllChildren();
                  _context2.next = 4;
                  return window.queryAssetsList == null ? void 0 : window.queryAssetsList();

                case 4:
                  matchingEntities = _context2.sent;
                  _iterator = _createForOfIteratorHelperLoose(matchingEntities);

                case 6:
                  if ((_step = _iterator()).done) {
                    _context2.next = 21;
                    break;
                  }

                  playerEntity = _step.value;
                  _context2.next = 10;
                  return window.queryValue == null ? void 0 : window.queryValue(globalThis.env.components.AssetsList, playerEntity);

                case 10:
                  al = _context2.sent;
                  newNode = instantiate(this.tradeItemModel);
                  newNode.active = true;
                  newNode.parent = this.partnerParent;
                  newNode.position = Vec3.ZERO;
                  script = newNode.getComponent(trade_parter_item);
                  script.entity = playerEntity;
                  name = string_utils.sliceLastN(string_utils.getHashFromSymbol(playerEntity), 6);
                  script.init(name, al.gpu, al.bitcoin, al.battery, al.leiter, al.gold, al.oil);

                case 19:
                  _context2.next = 6;
                  break;

                case 21:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, this);
          }));

          function init() {
            return _init.apply(this, arguments);
          }

          return init;
        }();

        _proto._resetAssets = function _resetAssets() {
          var children = this.assetsParent.children;
          children.forEach(function (ele) {
            var script = ele.getComponent(trade_asset_item);
            script.setSelected(false);
          });
        } // private _
        ;

        return trade;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "assetsParent", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "partnerParent", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "tradeItemModel", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/TradeListItem.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "60f0c6bPsZGiZMumBa6l3Er", "TradeListItem", undefined);

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/UnsolicitedTransactionObj.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "a9f7abiGsdPjopqeJNvQvmf", "UnsolicitedTransactionObj", undefined);

      var UnsolicitedTransactionObj = exports('UnsolicitedTransactionObj', function UnsolicitedTransactionObj() {
        this.asset = void 0;
        this.money = void 0;
        this.from = void 0;
      });

      cclegacy._RF.pop();
    }
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});