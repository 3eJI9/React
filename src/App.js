import './App.css'
import {Comments, Posts, Users} from './components'

const App = () => {
    return (
        <div>
            <div className={'users_posts'}>
            <Users/>
            <Posts/>
            </div>
            <div className={'comments'}>
            <Comments/>
            </div>
            </div>
    );

}

export default App