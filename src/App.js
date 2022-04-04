import './App.css'
import {Comments, Posts, Users} from './components'

export const app = () => {
    return (
        <div>
            <div className={'users_posts'}>
            <Users/>
            <Posts/>
            </div>
            <Comments/>
        </div>
    );

}

export class App {
}