import apiClient from "./baseApiService";

const messagesRoot = "messages";

/**
 * Service para acessar os endpoints de Messages.
 */
export default class MessagesService {

    /**
     * Obtem todas as mensagens disponíveis.
     * @param {function} callback Ação a ser executada com os dados retornados
     */
    list(callback) {
        apiClient.get(messagesRoot).then(res => {
            return callback(res.data);
        })
    }

    /**
     * Obtem uma mensagem específica.
     * @param {string} id id da mensagem
     * @param {function} callback ação a ser executada com o retorno
     */
    get(id, callback) {
        apiClient.get(messagesRoot, { params: { id: id } }).then(res => callback(res.data));
    }

    /**
     * Deleta uma mensagem específica.
     * @param {string} id id da mensagem
     * @param {function} callback ação a ser executada com o retorno
     */
    delete(id, callback) {
        apiClient.delete(messagesRoot, { params: { id: id } }).then(res => callback(res));  // TODO: Melhorar o retorno, possivelmente processar o Status para true ou false
    }

    /**
     * Cria uma nova mensagem.
     * @param {object} newMessage a mensagem a ser criada
     * @param {string} newMessage.username nome do usuário
     * @param {string} newMessage.content conteúdo da mensagem
     * @param {function} callback ação a ser executada com o retorno
     */
    create(newMessage, callback) {
        apiClient.post(messagesRoot, newMessage).then(res => callback(res.data));   // TODO: Melhorar o retorno
    }
}