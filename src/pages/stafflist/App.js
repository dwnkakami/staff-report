import React, {Component} from 'react';
class App extends Component {
    constructor() {
        super()
        this.state = {
            name: [
                "佐藤テスト",

                "後藤テスト",

                "菊池テスト",

                "磯野テスト",

                "鈴木テスト",

                "高橋テスト",

                "田中テスト",

                "伊藤テスト",

                "渡邉テスト",

                "中村テスト",

                "中野テスト",

                "田村テスト",

                "石田テスト",

                "安達テスト",

                "井上テスト",

                "テスト佐藤",

                "テスト後藤",

                "テスト菊池",

                "テスト磯野",

                "テスト鈴木",

                "テスト高橋",

                "テスト田中",

                "テスト伊藤",

                "テスト渡邉",

                "テスト中村",

                "テスト中野",

                "テスト田村",

                "テスト石田",

                "テスト安達",

                "テスト井上"
            ],
            items: []
        }
    }

    componentDidMount() {
        this.setState({items: this.state.name})
    }

    filterList(e){
        const updateList = this.state.name.filter((item) => {
            return item.toLowerCase().search( e.target.value.toLowerCase()) !== -1;
        })
        this.setState({items: updateList})
    }


render() {
    return (
        <div>
            {/* <FilterForm search={(name) => this.searchByName(name)} /> */}
            <form action="">
                <input type="text" placeholder="search" onChange={(e) => this.filterList(e)}/>
            </form>
            <div>
            {this.state.items.map((item, index) => {
                return (
                    <li key={index}>{item}</li>
                )
            })}
            </div>
            </div>
        );
    }
}

// class FilterForm extends Component{
//     constructor(props){
//         super(props)
//         this.state = {name: ''}
//     }
// }

export default App;