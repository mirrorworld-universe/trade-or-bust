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

System.register("chunks:///_virtual/main", ['./debug-view-runtime-control.ts', './Singleton.ts', './counter-label.ts', './JsCaller.ts', './MUDListener.ts', './ponzi-controller.ts', './ponzi-model.ts', './test.ts'], function () {
  return {
    setters: [null, null, null, null, null, null, null, null],
    execute: function () {}
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

System.register("chunks:///_virtual/ponzi-controller.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _inheritsLoose, _createClass, cclegacy, _decorator, log, find, Component;

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
    }],
    execute: function () {
      var _dec, _class, _class2;

      cclegacy._RF.push({}, "d27bewDLOVJ3aP597Cc0JT2", "ponzi-controller", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var ponzi_controller = exports('ponzi_controller', (_dec = ccclass('ponzi_controller'), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(ponzi_controller, _Component);

        function ponzi_controller() {
          return _Component.apply(this, arguments) || this;
        }

        var _proto = ponzi_controller.prototype;

        _proto.start = function start() {
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

          globalThis.ponzi.game_update = function (oldValue, newValue) {
            self.gameUpdate(oldValue, newValue);
          };

          globalThis.ponzi.counter_update = function (oldValue, newValue) {
            self.counterUpdate(oldValue, newValue);
          };
        };

        _proto.sendCCCMsg = function sendCCCMsg(msgName, msgData) {
          this.node.emit(msgName, msgData);
        };

        _proto.counterInit = function counterInit(value) {};

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
          // 调用函数，传入两个对象，得到结果
          var result = this.compareObjects(oldObj, newObj); // 打印结果

          console.log(result); // ["name", "age"]
        } // 定义一个函数来比较两个对象，并返回一个数组，包含变动的参数名称
        ;

        _proto.compareObjects = function compareObjects(obj1, obj2) {
          // 定义一个空数组来存储变动的参数名称
          var changedParams = {}; // 遍历obj1的所有属性

          for (var key in obj1) {
            // 如果obj2没有该属性，或者obj2的属性值与obj1不同，则说明该属性发生了变动
            if (!obj2.hasOwnProperty(key) || obj1[key] !== obj2[key]) {
              // 将变动的属性名称添加到数组中
              changedParams[key] = obj2[key];
            }
          } // 遍历obj2的所有属性


          for (var _key in obj2) {
            // 如果obj1没有该属性，则说明该属性是新增的，也属于变动
            if (!obj1.hasOwnProperty(_key)) {
              // 将变动的属性名称添加到数组中
              changedParams[_key] = obj2[_key];
            }
          } // 返回变动的参数名称数组


          return changedParams;
        };

        _createClass(ponzi_controller, null, [{
          key: "instance",
          get: // 定义一个公共的静态方法，用于获取类的唯一实例
          function get() {
            // 如果实例不存在，就创建一个新的实例并赋值给静态属性
            if (!ponzi_controller._instance) {
              ponzi_controller._instance = find("ponzi-controller").getComponent(ponzi_controller);
            } // 返回静态属性


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

System.register("chunks:///_virtual/test.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ponzi-controller.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, Component, ponzi_controller;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
    }, function (module) {
      ponzi_controller = module.ponzi_controller;
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

        _proto.start = function start() {
          ponzi_controller.instance.sendCCCMsg('ccc_counter_value', 1);
        };

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