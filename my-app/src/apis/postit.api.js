import api from '../infra/api-config'
//é a const postit que criamos no handlePostitSubmit
export function createPostit(postit) {
    const url = '/todo'

    const data = {
        title: postit.title,
        desc: postit.text
    }

    return api().post(url, data)

}

export function getPostitsApi() {
    const url = '/todo'

    return api().get(url)
}

export function deletePostit(idPostit) {
    const url = `/todo/${idPostit}`

    return api().delete(url)
}

//criando uma função sayhello que recebe um parâmetro chamado nome
//function sayhello(nome) {
//     console.log(`hi ${nome}`)
// }
//criando uma constante chamada camila que recebe camila
// const camila = 'camila'
//chamando a função com parâmetro definido na constante acima
// sayhello(camila)
//resultado da função com o valor da constante
// hi camila

export function editPostit(postit) {
    const url = `/todo/${postit.id}`

    const data = {
        title: postit.title,
        desc: postit.text
    }

    return api().put(url, data)    
}