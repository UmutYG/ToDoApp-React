"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// class Blockquote extends React.Component
// {
//   render()
//   {
//     const request = new XMLHttpRequest();
//     request.open("GET",'https://programming-quotes-api.herokuapp.com/quotes/random');
//     request.send();
//     // callback
//     request.addEventListener('load', ()=>{
//         const data = JSON.parse(request.responseText);
//         console.log(data);
//         return <div>
//                 <blockquote className="blockquote text-center">
//                       <p className="mt-1" id="quote">
//                         {data.en}
//                       </p>
//                       <footer className="blockquote-footer mt-2" id="author"><cite title="Source Title"></cite></footer>
//                     </blockquote>
//               </div>
//   });
// }
// }
var TaskModel = /*#__PURE__*/_createClass(function TaskModel(taskHeader, taskDescription) {
  _classCallCheck(this, TaskModel);

  this.taskHeader = taskHeader;
  this.taskDescription = taskDescription;
});

var ToDoApp = /*#__PURE__*/function (_React$Component) {
  _inherits(ToDoApp, _React$Component);

  var _super = _createSuper(ToDoApp);

  function ToDoApp(props) {
    var _this;

    _classCallCheck(this, ToDoApp);

    _this = _super.call(this, props);
    _this.addTask = _this.addTask.bind(_assertThisInitialized(_this));
    _this.deleteTask = _this.deleteTask.bind(_assertThisInitialized(_this));
    _this.state = {
      tasks: [new TaskModel("Startup Task 1", "Do 1"), new TaskModel("Startup Task 2", "Do 2"), new TaskModel("Startup Task 3", "Do 3")]
    };
    return _this;
  }

  _createClass(ToDoApp, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var tasks = JSON.parse(localStorage.getItem("tasks"));

      if (tasks) {
        // Override default tasks with localstorage tasks.
        this.setState({
          tasks: tasks
        });
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      // Determining if there is a change
      if (prevState.tasks.length !== this.state.tasks.length) {
        var jsonData = JSON.stringify(this.state.tasks);
        localStorage.setItem("tasks", jsonData);
      }
    }
  }, {
    key: "addTask",
    value: function addTask(task) {
      // Method 1
      // this.state.tasks.push(task)
      // this.setState(
      // {
      //   tasks : this.state.tasks
      // });
      // Method 2
      this.setState(function (prevState) {
        return {
          tasks: prevState.tasks.concat(task)
        };
      });
    }
  }, {
    key: "deleteTask",
    value: function deleteTask(task) {
      // get a new array
      this.setState(function (prevState) {
        var updatedTasks = prevState.tasks.filter(function (t) {
          return t != task;
        });
        return {
          tasks: updatedTasks
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PageHeader, null), " ", /*#__PURE__*/React.createElement(TaskControl, {
        addTask: this.addTask
      }), " ", /*#__PURE__*/React.createElement(Filters, null), " ", /*#__PURE__*/React.createElement(ToDoList, {
        deleteTask: this.deleteTask,
        todos: this.state
      }));
    }
  }]);

  return ToDoApp;
}(React.Component);

var TaskControl = /*#__PURE__*/function (_React$Component2) {
  _inherits(TaskControl, _React$Component2);

  var _super2 = _createSuper(TaskControl);

  function TaskControl(props) {
    var _this2;

    _classCallCheck(this, TaskControl);

    _this2 = _super2.call(this, props);
    _this2.onFormSubmit = _this2.onFormSubmit.bind(_assertThisInitialized(_this2));
    return _this2;
  }

  _createClass(TaskControl, [{
    key: "onFormSubmit",
    value: function onFormSubmit(e) {
      e.preventDefault();
      var header = e.target.elements.taskHeader.value.trim();
      var desc = e.target.elements.taskDescription.value.trim();
      var newTask = new TaskModel(header, desc);
      this.props.addTask(newTask);
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("form", {
        onSubmit: this.onFormSubmit
      }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
        className: "input-group mb-3"
      }, /*#__PURE__*/React.createElement("input", {
        type: "text",
        className: "form-control",
        placeholder: "Add Task",
        name: "taskHeader",
        id: "input"
      }), /*#__PURE__*/React.createElement("button", {
        className: "btn btn-outline-secondary",
        onClick: this.preparetoAdd,
        id: "button-add"
      }, "Add")), /*#__PURE__*/React.createElement("div", {
        className: "input-group mb-3"
      }, /*#__PURE__*/React.createElement("input", {
        type: "text",
        className: "form-control",
        placeholder: "Add Description",
        name: "taskDescription",
        id: "inputDesc"
      }))));
    }
  }]);

  return TaskControl;
}(React.Component);

var ToDoList = function ToDoList(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: "accordion",
    id: "mainAccordion"
  }, props.todos.tasks.map(function (item, index) {
    return /*#__PURE__*/React.createElement(ToDo, {
      key: index,
      deleteTask: props.deleteTask,
      task: item
    });
  }));
};

var ToDo = /*#__PURE__*/function (_React$Component3) {
  _inherits(ToDo, _React$Component3);

  var _super3 = _createSuper(ToDo);

  function ToDo(props) {
    var _this3;

    _classCallCheck(this, ToDo);

    _this3 = _super3.call(this, props);
    _this3.deleteTask = _this3.deleteTask.bind(_assertThisInitialized(_this3));
    return _this3;
  }

  _createClass(ToDo, [{
    key: "deleteTask",
    value: function deleteTask() {
      this.props.deleteTask(this.props.task);
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", {
        className: "accordion-item"
      }, /*#__PURE__*/React.createElement("h2", {
        className: "accordion-header",
        id: "headingOne"
      }, /*#__PURE__*/React.createElement("button", {
        className: "accordion-button",
        type: "button",
        "data-bs-toggle": "collapse",
        "data-bs-target": "#a${task.TaskId}",
        "aria-expanded": "true",
        "aria-controls": "collapseOne"
      }, this.props.task.taskHeader), /*#__PURE__*/React.createElement("div", {
        className: "icons"
      }, /*#__PURE__*/React.createElement("a", {
        href: "#"
      }, /*#__PURE__*/React.createElement("i", {
        className: "fa-solid fa-pen-to-square fa-sm"
      })), /*#__PURE__*/React.createElement("a", {
        href: "#"
      }, /*#__PURE__*/React.createElement("i", {
        className: "fa-solid fa-trash fa-sm",
        onClick: this.deleteTask
      })), /*#__PURE__*/React.createElement("a", {
        href: "#",
        id: "status"
      }, /*#__PURE__*/React.createElement("i", {
        className: "${statusIcon}"
      })))), /*#__PURE__*/React.createElement("div", {
        id: "a${task.id}",
        className: "accordion-collapse collapse show",
        "aria-labelledby": "headingOne",
        "data-bs-parent": "#accordionExample"
      }, /*#__PURE__*/React.createElement("div", {
        className: "accordion-body"
      }, this.props.task.taskDescription)));
    }
  }]);

  return ToDo;
}(React.Component);

var Filters = function Filters() {
  return /*#__PURE__*/React.createElement("ul", {
    className: "list-group list-group-horizontal mb-3"
  }, /*#__PURE__*/React.createElement("li", {
    className: "list-group-item"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "All")), /*#__PURE__*/React.createElement("li", {
    className: "list-group-item"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Pending")), /*#__PURE__*/React.createElement("li", {
    className: "list-group-item"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Completed")));
};

var PageHeader = function PageHeader() {
  return /*#__PURE__*/React.createElement("p", {
    className: "card-text fs-4"
  }, "ToDoApp");
};

ReactDOM.render( /*#__PURE__*/React.createElement(ToDoApp, null), root);
