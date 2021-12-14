import React from 'react'
import AppContainer from"./AppContainer";

const Create = () => {
    return (
        <AppContainer
        title="Create Todo"
        >
        <form>
            <div className='form-group'>
                <label>Title</label>
                <input className="form-control" type="text"/>
            </div>
            <div className='form-group'>
                <label>Content</label>
                <textarea className="form-control" />
            </div>
            <div className='form-group'>
                <button type='button' className="btn btn-success">Create</button>
            </div>
        </form>

        </AppContainer>
    )
}

export default Create
