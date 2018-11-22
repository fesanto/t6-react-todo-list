import React from 'react'
import Form from '../form'
import './postit.css'
import { createPostit } from '../../apis/postit.api'


class Postit extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: 0,
            title: '',
            text: '',
            editing: false
        }
    }

    handlePostitClick = () => {
        this.setState({
            editing: true
        })
    }

    handlePostitRemove = () => {
    }

    handlePostitSubmit = (e) => {
        e.preventDefault()
        const postit = {
            title: this.state.title,
            text: this.state.text
        }

        createPostit(postit)
            .then((response) => {
                console.log(response)
            })
            .catch((error) => {
                console.log(error)
        })
    }

    setTitle = (e) => {
        const inputTitle = e.target.value
        this.setState({
            title: inputTitle
        })
    }

    setText = (e) => {
        const inputText = e.target.value
        this.setState({
            text: inputText
        })
    }

    render() {
        return (
            <div onClick={this.handlePostitClick} className='postit'>
                <Form onSubmit={this.handlePostitSubmit}>
                    {/* se o estado for editing, ele renderizará o botão, por isso usar o && */}
                    {this.state.editing && (
                    <button onClick={this.handlePostitRemove} className = 'postit__button-remove'>
                    X
                    </button>
                    )
                    }

                    <input type='text' className='postit__title' placeholder='Título...' value={this.state.title} onChange={this.setTitle}/>

                    <textarea className='postit__text' placeholder='Digite o texto aqui...' name='text' value={this.state.text} onChange={this.setText} />

                    {this.state.editing && (<button className='postit__button-completed' >Concluído</button>)
                    }
                </Form>
            </div>
        )
    }

}

export default Postit