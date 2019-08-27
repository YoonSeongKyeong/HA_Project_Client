import React, { Component } from 'react'
import Todo from './Todo'
import { BackButton } from '../component'

class TodoList extends Component {// 이 component는 투두목록을 보여줄 방식을 설정할 수 있고, 그에 따라서 해당하는 투두목록을 보여줍니다.
    constructor(props) {
        super(props)

        this.state = {
            selection: 3,//3 : 모든 투두, 1: 미완료한 투두, 2: 완료한 투두
            todos:[]
        }
        this.selectRender=this.selectRender.bind(this)
    }

    componentDidMount() {
        let targetUrl = 'https://koreanjson.com/todos/?userid=' + this.props.match.params.id
        fetch(targetUrl).then(response => response.json()).then(result => (this.setState({todos:result})))
    }

    selectRender() {
        let filterFunction;
        if(this.state.selection === 1) {
            filterFunction = (todoObj)=>todoObj.isCompleted; 
        }
        else if(this.state.selection === 2) {
            filterFunction = (todoObj)=>!todoObj.isCompleted; 
        }
        else {
            filterFunction = () => true;
        }
        return this.state.todos.filter(filterFunction).map(todo=><Todo todo={todo}/>);
    }

    render() {
        return (
            <React.Fragment>
                <BackButton history={this.props.history} />
                <div>어떤 Todo를 선택할 건지 결정하는 옵션들 : 모든 투두(default), 미완료한 투두, 완료한 투두</div>
                {this.selectRender()}
            </React.Fragment>
        )
    }
}
export default TodoList;