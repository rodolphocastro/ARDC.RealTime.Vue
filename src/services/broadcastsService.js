import apiClient from "./baseApiService";

const broadcastsRoot = "broadcasts";

/**
 * Service para acessar os endpoints de Broadcasts na API.
 */
export default class BroadcastsService {

    /**
     * Obtem todos os broadcasts disponíveis.
     * @param {function} callback Ação a ser executada com os dados recebidos
     */
    list(callback) {
        apiClient.get(broadcastsRoot).then(res => {
            return callback(res.data);
        });
    }

    /**
     * Obtem um broadcast específico.
     * @param {string} id Id do broadcast
     * @param {function} callback Ação a ser executada com os dados recebidos
     */
    get(id, callback) {
        apiClient.get(broadcastsRoot, { params: { id: id } }).then(res => {
            return callback(res.data);
        });
    }

    /**
     * Obtem o broadcast mais recente.
     * @param {function} callback Ação a ser executada com os dados recebidos
     */
    getLatest(callback) {
        apiClient.get(`${broadcastsRoot}/latest`).then(res => {
            return callback(res.data);
        });
    }
}