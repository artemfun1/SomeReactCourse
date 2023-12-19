const inputClick =()=> console.log('click')



const elements = <div onClick={inputClick}>test</div>
const app = document.getElementById('app')


ReactDOM.render(elements,app) 