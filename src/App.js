import './App.css'
import {Comments, Posts, Users} from './components'

const App = () => {
    return (
        <div>
            <div className={'users_posts'}>
            <Users/>
            <div className={'posts'}>
                <Posts/>
            </div>
            </div>
            <div className={'comments'}>
            <Comments/>
            </div>
            </div>
    );

}

export default App