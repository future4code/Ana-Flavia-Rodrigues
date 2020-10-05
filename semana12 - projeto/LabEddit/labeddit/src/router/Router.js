import React from 'react';
import { Switch, Route} from 'react-router-dom';
import FeedPage from '../screen/FeedPage/FeedPage';
import LoginPage from '../screen/LoginPage/LoginPage';
import PostPage from '../screen/PostPage/PostPage';
import SignUp from '../screen/SignUp/SignUpPage';
import ErrorPage from '../screen/ErrorPage/ErrorPage';
import CreatePostPage from '../screen/CreatePostPage/CreatePostPage';



const  Router = () => {
    return(
            <Switch>
                <Route exact  path = {["/login" ,"/"]}>
                    <LoginPage/>
                </Route>

                <Route exact  path = "/feed">
                    <FeedPage/>
                </Route>

                <Route exact  path = "/post/:id">
                    <PostPage/>
                </Route>

                <Route exact  path = "/register">
                    <SignUp/>
                </Route>
                <Route exact  path = "/create">
                    <CreatePostPage/>
                </Route>


                <Route>
                    <ErrorPage/>
                </Route>


            </Switch>

            
    )
}

export default Router