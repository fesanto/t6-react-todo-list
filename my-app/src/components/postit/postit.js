import React from 'react'
import Form from '../form'
import './postit.css'
import { createPostit, deletePostit, editPostit } from '../../apis/postit.api'


class Postit extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.id ? this.props.id : 0,
            title: this.props.title ? this.props.title : '',
            text: this.props.text ? this.props.text : '',
            editing: false
        }
    }

    handlePostitClick = () => {
        console.log('handlePostitClick')
        this.setState({
            editing: true
        })
    }

    handlePostitRemove = (e) => {
        console.log('handlePostitRemove')
        e.stopPropagation()
        const id = this.state.id

        deletePostit(id)
            .then((response) => {
                console.log(response)
                this.props.updatePostits()
            })
            .catch((error) => {
                console.log(error)
            })
    }

    handlePostitSubmit = (e) => {
        e.preventDefault()

        //se o id estiver preenchido, eu vou editar o postit
        if (this.state.id) {
            const postit = {
                id: this.state.id,
                title: this.state.title,
                text: this.state.text
            }
            editPostit(postit)
                .then((response) => {
                    console.log(response)
                    this.props.updatePostits()
                })
                .catch((error) => {
                    console.log(error)
                })
        //se não tiver, eu vou criar o postit
        } else {
            const postit = {
                title: this.state.title,
                text: this.state.text
            }
            createPostit(postit)
                .then((response) => {
                    console.log(response)
                    this.props.updatePostits()
                    this.setState({
                        id: '',
                        title: '',
                        text: ''
                    })
                })
                .catch((error) => {
                    console.log(error)
                })
        }

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
                        <button type='button' onClick={this.handlePostitRemove} className='postit__button-remove'>
                            X
                    </button>
                    )
                    }

                    <input type='text' className='postit__title' placeholder='Título...' value={this.state.title} onChange={this.setTitle} />

                    <textarea className='postit__text' placeholder='Digite o texto aqui...' name='text' value={this.state.text} onChange={this.setText} />

                    {this.state.editing && (<button className='postit__button-completed' >Concluído</button>)
                    }
                </Form>
            </div>
        )
    }

}

export default Postit