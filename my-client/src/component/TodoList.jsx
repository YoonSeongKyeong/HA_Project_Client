import React, { Component } from 'react'
import Todo from './Todo'
import { BackButton } from '../component'
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'

const options = [
    { value: '1', label: '모든 투두' },
    { value: '2', label: '완료한 투두' },
    { value: '3', label: '미완료한 투두' }
]
const defaultOption = options[0]

class TodoList extends Component {// 이 component는 투두목록을 보여줄 방식을 설정할 수 있고, 그에 따라서 해당하는 투두목록을 보여줍니다.
    constructor(props) {
        super(props)
        this.todosForPut = []//PUT할 객체들의 array
        this.state = {
            selection: '1',//1 : 모든 투두(default), 2 : 완료한 투두, 3 : 미완료한 투두
            todos: []
        }
        this.getTodosFromServer = this.getTodosFromServer.bind(this)
        this.selectRender = this.selectRender.bind(this)
        this._onSelect = this._onSelect.bind(this)
        this.handleTodoClick = this.handleTodoClick.bind(this)
        this.handlePut = this.handlePut.bind(this)
    }

    componentDidMount() {
        this.getTodosFromServer();
    }

    getTodosFromServer() {
        let targetUrl = 'https://koreanjson.com/todos/?userId=' + this.props.match.params.id;
        console.log(targetUrl)
        fetch(targetUrl).then(response => response.json()).then(result => (this.setState({ todos: result })));
    }

    selectRender() {
        let filterFunction;
        if (this.state.selection === '1') {// 모든 투두
            filterFunction = () => true;
        }
        else if (this.state.selection === '2') {// 완료한 투두
            filterFunction = (todoObj) => todoObj.completed;
        }
        else {//'3' 미완료한 투두
            filterFunction = (todoObj) => !todoObj.completed;
        }
        return this.state.todos.filter(filterFunction).map(todo => <Todo onClick={this.handleTodoClick} todo={todo} key={todo.id} />);
    }

    handleTodoClick(id) {// Network Resource를 줄이기 위해서 PUT한 뒤에 다시 GET하지 않고 클라이언트상에서 render한다. 나중에 적용 버튼을 눌러서 한번에 PUT
        const newTodos = this.state.todos.map(todoObj => {
            if (todoObj.id === id) {
                let newTodoObj = { ...todoObj }
                newTodoObj.completed = !todoObj.completed;
                let alreadyInPutList = false;//이미 한번 클릭했다면 두번째엔 없던것으로 상쇄시키는 로직 (효율적인 PUT을 위해서)
                this.todosForPut=this.todosForPut.filter(objForPut=>{if(objForPut.id===id){alreadyInPutList=true;return false}return true})
                !alreadyInPutList&&this.todosForPut.push(newTodoObj);
                return newTodoObj;
            }
            return todoObj;
        })
        this.setState({ todos: newTodos })
    }

    _onSelect(e) {
        this.setState({ selection: e.value })
    }

    handlePut() {
        if(this.todosForPut.length===0) return;
        //서버에 this.todosForPut을 PUT하는 일을 하면 된다. korean json에서는 지원하지 않기 때문에 아직 보류중
    }

    render() {
        return (
            <React.Fragment>
                <BackButton history={this.props.history} />
                <div>어떤 Todo를 선택할 건지 결정하는 옵션들 : 모든 투두(default), 미완료한 투두, 완료한 투두</div>
                <Dropdown options={options} onChange={this._onSelect} value={defaultOption} placeholder="Todo filter" />
                {this.selectRender()}
                <div>
                <button onClick={this.handlePut}>지금까지 변경내용 서버에 저장하기</button>
                <button onClick={this.getTodosFromServer}>되돌리기</button>
                </div>
            </React.Fragment>
        )
    }
}

export default TodoList;