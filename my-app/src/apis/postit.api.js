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