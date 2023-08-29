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
      ccc_msg.on_mapitem_update = "on_mapitem_update";
      ccc_msg.on_isplayer_update = "on_isplayer_update";
      ccc_msg.network_block_ui = "network_block_ui";
      ccc_msg.single_button_dialog = "single_button_dialog";

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
  var _createClass, cclegacy;

  return {
    setters: [function (module) {
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "fe2486vschNp7nd3k0xklcP", "data_center", undefined);

      var data_center = exports('data_center', /*#__PURE__*/function () {
        function data_center() {
          this.players = void 0;
        }

        var _proto = data_center.prototype;

        _proto.data_center = function data_center() {};

        _proto.onPlayerUpdate = function onPlayerUpdate(oldObj, newObj) {};

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

System.register("chunks:///_virtual/data_utils.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator;

  return {
    setters: [function (module) {
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "235a2OfZ7dJwpKSXgxeiHSF", "data_utils", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var data_utils = exports('data_utils', (_dec = ccclass('data_utils'), _dec(_class = /*#__PURE__*/function () {
        function data_utils() {}

        data_utils.getCurrentPlayerData = /*#__PURE__*/function () {
          var _getCurrentPlayerData = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var playerEntity, currentPlayer;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  playerEntity = globalThis.ponzi.currentPlayer;
                  currentPlayer = null;
                  _context.prev = 2;
                  _context.next = 5;
                  return window.queryValue == null ? void 0 : window.queryValue(window.env.components.Player, playerEntity);

                case 5:
                  currentPlayer = _context.sent;
                  _context.next = 11;
                  break;

                case 8:
                  _context.prev = 8;
                  _context.t0 = _context["catch"](2);
                  currentPlayer = null;

                case 11:
                  return _context.abrupt("return", currentPlayer);

                case 12:
                case "end":
                  return _context.stop();
              }
            }, _callee, null, [[2, 8]]);
          }));

          function getCurrentPlayerData() {
            return _getCurrentPlayerData.apply(this, arguments);
          }

          return getCurrentPlayerData;
        }();

        return data_utils;
      }()) || _class));

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
      });

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

System.register("chunks:///_virtual/lobby-controller.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './component_state.ts', './ponzi-controller.ts', './ccc_msg.ts', './string_utils.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Label, Node, log, Component, sys, component_state, ponzi_controller, ccc_msg, string_utils;

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
      log = module.log;
      Component = module.Component;
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

          _this.welcomeInited = false;
          _this.inited = false; //User do not join but game is started
          //game state is 2
          // private async showGamingLobby(){
          //     this.enterLobby();
          //     this.contentLabel.string = "Game is started. Don't you want to join us?";
          //     let currentPlayer:PlayerData = null;
          //     try{
          //         const playerEntity = globalThis.ponzi.currentPlayer;
          //         currentPlayer = await window.queryValue?.(window.env.components.Player, playerEntity);
          //     }catch{
          //         currentPlayer = null;
          //     }
          //     if(currentPlayer){
          //         this.btnJoinGame.active = false;
          //         this.btnTriggerGame.active = true;
          //     }else{
          //         this.btnJoinGame.active = true;
          //         this.btnTriggerGame.active = false;
          //     }
          // }

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
                // if(newPlayerState == component_state.player_ingame){
                //     if(globalThis.ponzi.gameState == component_state.game_ingame){
                //         this.enterGameScene();
                //     }else{
                //         this.contentLabel.string = "You have joined the game, now just waiting for start!";
                //     }
                // }else{
                //     error("Unexpected player state:"+newPlayerState);
                // }

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
                          log("Count down is finished,ask to enter game!");
                          self.updateLobby();

                        case 2:
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
                    _context9.next = 5;
                    break;
                  }

                  log("no gameObj, stop updateing lobby");
                  return _context9.abrupt("return");

                case 5:
                  isPlayer = false;
                  _context9.prev = 6;
                  playerEntity = globalThis.ponzi.currentPlayer;
                  _context9.next = 10;
                  return window.queryValue == null ? void 0 : window.queryValue(window.env.components.IsPlayer, playerEntity);

                case 10:
                  isPlayer = _context9.sent;
                  _context9.next = 16;
                  break;

                case 13:
                  _context9.prev = 13;
                  _context9.t0 = _context9["catch"](6);
                  isPlayer = false;

                case 16:
                  if (gameState == component_state.game_ingame) {
                    if (isPlayer) {
                      log("ingame+isPlayer");
                      this.showGameNode();
                      this.btnJoinGame.active = false;
                      this.btnTriggerGame.active = false;
                    } else {
                      this.showLobbyNode();
                      log("ingame+notPlayer");
                      this.contentLabel.string = "Game is started, just waiting for entering game!";
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
                        this.contentLabel.string = "You have joined the game, waiting for game starting...";
                        this.startCountdownAnimator(_leftSeconds);
                      } else {
                        log("gameWaiting+isPlayer+isStarted");
                        this.contentLabel.string = "The game is start now, please enter it.";
                        this.btnJoinGame.active = false;
                        this.btnTriggerGame.active = true;
                      }
                    } else {
                      log("gameWaiting+notPlayer");

                      if (leftSeconds > 0) {
                        this.startCountdownAnimator(leftSeconds);
                      }

                      this.contentLabel.string = "Game is not start, just join us!";
                      this.btnJoinGame.active = true;
                      this.btnTriggerGame.active = false;
                    }
                  }

                case 17:
                case "end":
                  return _context9.stop();
              }
            }, _callee9, this, [[6, 13]]);
          }));

          function updateLobby() {
            return _updateLobby.apply(this, arguments);
          }

          return updateLobby;
        }() //A game's start time is passed but not trigger by a user
        //Only about time
        ;

        _proto.showStartingLobby = /*#__PURE__*/function () {
          var _showStartingLobby = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10() {
            var playerEntity, currentPlayer;
            return _regeneratorRuntime().wrap(function _callee10$(_context10) {
              while (1) switch (_context10.prev = _context10.next) {
                case 0:
                  this.contentLabel.string = "Game is started, just enter game!";
                  this.showLobbyNode();
                  playerEntity = globalThis.ponzi.currentPlayer;
                  currentPlayer = null;
                  _context10.prev = 4;
                  _context10.next = 7;
                  return window.queryValue == null ? void 0 : window.queryValue(window.env.components.Player, playerEntity);

                case 7:
                  currentPlayer = _context10.sent;
                  _context10.next = 13;
                  break;

                case 10:
                  _context10.prev = 10;
                  _context10.t0 = _context10["catch"](4);
                  currentPlayer = null;

                case 13:
                  if (currentPlayer) {
                    this.btnTriggerGame.active = true;
                    this.btnJoinGame.active = false;
                  } else {
                    this.btnTriggerGame.active = false;
                    this.btnJoinGame.active = true;
                  }

                case 14:
                case "end":
                  return _context10.stop();
              }
            }, _callee10, this, [[4, 10]]);
          }));

          function showStartingLobby() {
            return _showStartingLobby.apply(this, arguments);
          }

          return showStartingLobby;
        }();

        _proto.registerListeners = function registerListeners() {
          var self = this;
          ponzi_controller.instance.on(ccc_msg.on_gamestate_update, /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11(obj) {
            return _regeneratorRuntime().wrap(function _callee11$(_context11) {
              while (1) switch (_context11.prev = _context11.next) {
                case 0:
                  log("ccc_msg.on_gamestate_update received!");
                  self.updateLobby();

                case 2:
                case "end":
                  return _context11.stop();
              }
            }, _callee11);
          })));
          ponzi_controller.instance.on(ccc_msg.on_isplayer_update, /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12(obj) {
            var entity, newValue, playerEntity, hash;
            return _regeneratorRuntime().wrap(function _callee12$(_context12) {
              while (1) switch (_context12.prev = _context12.next) {
                case 0:
                  entity = obj.entity;
                  newValue = obj.newValue;
                  log("ccc_msg.on_gamestate_update received!", entity, newValue);
                  playerEntity = globalThis.ponzi.currentPlayer;
                  hash = string_utils.getHashFromSymbol(playerEntity);

                  if (hash == entity) {
                    self.updateLobby();
                  }

                case 6:
                case "end":
                  return _context12.stop();
              }
            }, _callee12);
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
          this.countDownLabel.string = this.leftTime.toString();
          var self = this; // 计算重复次数，等于结束时间减一

          var repeat = endTime - 1; // 调用schedule方法，传入回调函数，间隔时间为1秒，重复次数为repeat，延迟时间为0

          this.schedule(function () {
            self.leftTime--;
            self.countDownLabel.string = self.formatSeconds(self.leftTime);
          }, 1, repeat, 0);
        } // private redundantTime:number;
        // private startCountUpAnimation(endTime){
        //     this.redundantTime = endTime;
        //     this.countDownLabel.string = this.leftTime.toString();
        //     const self = this;
        //     // 计算重复次数，等于结束时间减一
        //     // 调用schedule方法，传入回调函数，间隔时间为1秒，重复次数为repeat，延迟时间为0
        //     this.schedule(()=>{
        //         self.redundantTime ++;
        //         self.countDownLabel.string = self.formatSeconds(self.leftTime);
        //     }, 1, -1, 0);
        // }
        // 定义一个函数，接受一个秒数作为参数，返回一个字符串表示转换后的结果
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
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createForOfIteratorHelperLoose, cclegacy, _decorator, Node, log, instantiate, Component, lobby_playerlist_model, ponzi_controller, ccc_msg, string_utils;

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
      lobby_playerlist_model = module.lobby_playerlist_model;
    }, function (module) {
      ponzi_controller = module.ponzi_controller;
    }, function (module) {
      ccc_msg = module.ccc_msg;
    }, function (module) {
      string_utils = module.string_utils;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;

      cclegacy._RF.push({}, "9ada3n5kAFHOqFUXwLqrjjF", "lobby-playerlist", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var lobby_playerlist = exports('lobby_playerlist', (_dec = ccclass('lobby_playerlist'), _dec2 = property({
        type: Node
      }), _dec3 = property({
        type: Node
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

          this.lobbyPlayers.forEach(function (ele) {
            _this2.addNewNode(ele);
          });
          this.registerListeners();
        };

        _proto.registerListeners = function registerListeners() {
          var _this3 = this;

          var self = this;
          ponzi_controller.instance.on(ccc_msg.on_player_add, function (entity) {
            string_utils.addStringToArray(_this3.lobbyPlayers, entity);
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
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/main", ['./debug-view-runtime-control.ts', './Singleton.ts', './lobby-controller.ts', './counter-label.ts', './ccc_msg.ts', './component_state.ts', './GameData.ts', './JsCaller.ts', './MUDListener.ts', './PlayerData.ts', './data_center.ts', './ponzi-controller.ts', './ponzi-model.ts', './FakeMessageCenter.ts', './test.ts', './data_utils.ts', './object_utils.ts', './string_utils.ts', './HexMapTile.ts', './lobby-playerlist-model.ts', './lobby-playerlist.ts', './map-controller.ts', './mapblock.ts', './player-model.ts', './single-button-pop.ts', './popupui_manager.ts'], function () {
  return {
    setters: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/map-controller.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ponzi-controller.ts', './ccc_msg.ts', './mapblock.ts', './string_utils.ts', './component_state.ts', './player-model.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createForOfIteratorHelperLoose, _extends, cclegacy, _decorator, Node, log, instantiate, Vec3, Component, ponzi_controller, ccc_msg, mapblock, string_utils, component_state, player_model;

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
            self.drawMap(width, height, newMap);
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
                obj.x = valueNum;
              } else if (key == 'y') {
                var _valueNum = Number(value);

                obj.y = _valueNum;
              } else if (key == 'money') {
                var _valueNum2 = Number(value);

                obj.money = _valueNum2;
              }
            }
          }

          log("role array:", array);
          var self = this;
          self.playerParent.removeAllChildren();

          for (var _key2 in array) {
            var _value = array[_key2];
            var newNode = instantiate(self.playerModel);
            newNode.setParent(self.playerParent);
            newNode.active = true;
            var pos = self.tmpCoorArray[_value.y][_value.x];
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
                obj.x = valueNum;
              } else if (key == 'y') {
                obj.y = valueNum;
              } else if (key == 'itemType') {
                obj.itemType = valueNum;
              }
            }
          }

          var self = this;
          self.itemParent.removeAllChildren();
          array.forEach(function (ele) {
            var newNode = instantiate(self.mapItemModel);
            newNode.setParent(self.itemParent);
            newNode.active = true;
            var pos = self.tmpCoorArray[ele.x][ele.y];
            newNode.position = new Vec3(pos.x, pos.y, 0);
          });
        };

        _proto.drawMap = function drawMap(width, height, newMap) {
          var _window$mudutils;

          if (!newMap) {
            log("No map data to draw!");
            return;
          }

          this.terrainArray = (_window$mudutils = window.mudutils) == null ? void 0 : _window$mudutils.hexToArray(width, height, newMap); // 示例使用

          var centerX = width / 2; // 中心点的 X 坐标

          var centerY = height / 2; // 中心点的 Y 坐标

          var hexMap = this.generateHexMap(100, 78);
          var coordinationArray = this.moveAllTiles(hexMap, centerX, centerY);
          this.tmpCoorArray = coordinationArray;
          log("coordinationArray 111:", coordinationArray);
          var coorMap = this.generateHexCoorMap();

          for (var i = 0; i < coordinationArray.length; i++) {
            for (var j = 0; j < coordinationArray[i].length; j++) {
              var tile = coordinationArray[i][j];
              var coor = coorMap[i][j]; // 在这里访问和操作每个地图块（tile）
              // console.log(`Tile at (${tile.x}, ${tile.y}): ${tile.emoji}`);

              var newNode = instantiate(this.mapBlockModel);
              newNode.setParent(this.mapParent);
              newNode.active = true;
              newNode.position = new Vec3(tile.x, tile.y, 0);
              var script = newNode.getComponent(mapblock);
              script.init(coor);
              script.showLabel(coor.x + "," + coor.y);
            }
          }
        };

        _proto.generateHexCoorMap = function generateHexCoorMap() {
          var mapArray = [];

          for (var i = 0; i < 8; i++) {
            var row = [];

            for (var j = 0; j < 8; j++) {
              var x = j;
              var y = i;
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

        _proto.generateHexMap = function generateHexMap(size, hSize) {
          var mapArray = [];

          for (var i = 0; i < 8; i++) {
            var row = [];
            var evenRowOffset = i % 2 === 0 ? 0 : size / 2;

            for (var j = 0; j < 8; j++) {
              var x = size * j + evenRowOffset;
              var y = hSize * i;
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
        this.x = void 0;
        this.y = void 0;
        this.itemType = void 0;
      };

      var RoleLocalObj = function RoleLocalObj() {
        this.gameId = void 0;
        this.state = void 0;
        this.money = void 0;
        this.x = void 0;
        this.y = void 0;
        this.assets = void 0;
        this.transactions = void 0;
      };

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/mapblock.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ponzi-controller.ts', './ccc_msg.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Label, Component, log, ponzi_controller, ccc_msg;

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
      log = module.log;
    }, function (module) {
      ponzi_controller = module.ponzi_controller;
    }, function (module) {
      ccc_msg = module.ccc_msg;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;

      cclegacy._RF.push({}, "f922dKK6jNJnb8lD64YYLm6", "mapblock", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var mapblock = exports('mapblock', (_dec = ccclass('mapblock'), _dec2 = property({
        type: Label
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(mapblock, _Component);

        function mapblock() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "label", _descriptor, _assertThisInitialized(_this));

          _this.mapTile = void 0;
          return _this;
        }

        var _proto = mapblock.prototype;

        _proto.start = function start() {// this.label.node.active = false;
        };

        _proto.update = function update(deltaTime) {};

        _proto.init = function init(mapTile) {
          this.mapTile = mapTile;
        };

        _proto.showLabel = function showLabel(content) {
          this.label.string = content;
          this.label.node.active = true;
        };

        _proto.onBlockClicked = /*#__PURE__*/function () {
          var _onBlockClicked = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  log("click block:", this.mapTile.x, this.mapTile.y);
                  ponzi_controller.instance.sendCCCMsg(ccc_msg.network_block_ui, true);
                  _context.prev = 2;
                  _context.next = 5;
                  return window.move == null ? void 0 : window.move(this.mapTile.x, this.mapTile.y);

                case 5:
                  _context.next = 10;
                  break;

                case 7:
                  _context.prev = 7;
                  _context.t0 = _context["catch"](2);
                  ponzi_controller.instance.sendCCCMsg(ccc_msg.single_button_dialog, {
                    content: "You can't go there",
                    btnText: "OK"
                  });

                case 10:
                  ponzi_controller.instance.sendCCCMsg(ccc_msg.network_block_ui, false);

                case 11:
                case "end":
                  return _context.stop();
              }
            }, _callee, this, [[2, 7]]);
          }));

          function onBlockClicked() {
            return _onBlockClicked.apply(this, arguments);
          }

          return onBlockClicked;
        }();

        return mapblock;
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

        return object_utils;
      }());

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

System.register("chunks:///_virtual/ponzi-controller.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ccc_msg.ts', './object_utils.ts'], function (exports) {
  var _inheritsLoose, _createClass, cclegacy, _decorator, log, find, Component, ccc_msg, object_utils;

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
        };

        _proto.sendCCCMsg = function sendCCCMsg(msgName, msgData) {
          this.node.emit(msgName, msgData);
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
            var result = this.compareObjects(oldObj, newObj);
            console.log(result); // ["name", "age"]

            if (result['x'] || result['y']) {
              ponzi_controller.instance.sendCCCMsg(ccc_msg.on_player_update, null);
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

System.register("chunks:///_virtual/popupui_manager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ponzi-controller.ts', './ccc_msg.ts', './single-button-pop.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Component, ponzi_controller, ccc_msg, single_button_pop;

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
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;

      cclegacy._RF.push({}, "454a77xJxBFcYkhgV356qng", "popupui_manager", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var popupui_manager = exports('popupui_manager', (_dec = ccclass('popupui_manager'), _dec2 = property({
        type: Node
      }), _dec3 = property({
        type: single_button_pop
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

          return _this;
        }

        var _proto = popupui_manager.prototype;

        _proto.start = function start() {
          var self = this;
          ponzi_controller.instance.on(ccc_msg.network_block_ui, function (show) {
            self.networkBlock.active = show;
          });
          ponzi_controller.instance.on(ccc_msg.single_button_dialog, function (_ref) {
            var content = _ref.content,
                btnText = _ref.btnText;
            self.singleDialog.node.active = true;
            self.singleDialog.init(content, btnText);
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
      })), _class2)) || _class));

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

        _proto.start = function start() {};

        _proto.update = function update(deltaTime) {};

        return test;
      }(Component)) || _class));

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