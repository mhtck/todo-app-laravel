import React from "react";
import { Link } from "react-router-dom";
import AppContainer from "./AppContainer";

const Home = () => {
    return (
        <AppContainer title="Todo App">
            <Link to="/create" class="btn btn-primary">
                New
            </Link>

            <div class="table-responsive">
                <table class="table table-striped mt-4">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Title</th>
                            <th>Content</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>100</td>
                            <td>Not</td>
                            <td>Not tutmak güzel</td>
                            <td>
                                <Link to="/edit/1" class="btn btn-warning">
                                    Edit
                                </Link>
                                <a href="#" class="btn btn-danger">
                                    Delete
                                </a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </AppContainer>
    );
};

export default Home;
