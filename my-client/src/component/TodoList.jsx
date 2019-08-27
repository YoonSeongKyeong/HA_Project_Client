import React, { Component } from 'react'
import Todo from './Todo'
import { BackButton } from '../component'
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'
const options = [
    { value: '1', label: '모든 투두' },
    { value: '2', label: '완료한 투두'},
    { value: '3', label: '미완료한 투두'}
]
const defaultOption = options[0]

class TodoList extends Component {// 이 component는 투두목록을 보여줄 방식을 설정할 수 있고, 그에 따라서 해당하는 투두목록을 보여줍니다.
    constructor(props) {
        super(props)

        this.state = {
            selection: '1',//1 : 모든 투두(default), 2 : 완료한 투두, 3 : 미완료한 투두
            todos: []
        }
        this.selectRender = this.selectRender.bind(this)
        this._onSelect = this._onSelect.bind(this)
    }

    componentDidMount() {
        let targetUrl = 'https://koreanjson.com/todos/?userid=' + this.props.match.params.id
        fetch(targetUrl).then(response => response.json()).then(result => (this.setState({ todos: result })))
    }

    selectRender() {
        let filterFunction;
        if (this.state.selection === '1') {
            filterFunction = () => true;
        }
        else if (this.state.selection === '2') {
            filterFunction = (todoObj) => todoObj.completed;
        }
        else {//'3'
            filterFunction = (todoObj) => !todoObj.completed;
        }
        return this.state.todos.filter(filterFunction).map(todo => <Todo todo={todo} />);
    }

    _onSelect(e) {
        this.setState({selection: e.value})
    }

    render() {
        return (
            <React.Fragment>
                <BackButton history={this.props.history} />
                <div>어떤 Todo를 선택할 건지 결정하는 옵션들 : 모든 투두(default), 미완료한 투두, 완료한 투두</div>
                <Dropdown options={options} onChange={this._onSelect} value={defaultOption} placeholder="Todo filter" />
                {this.selectRender()}
            </React.Fragment>
        )
    }
}
export default TodoList;