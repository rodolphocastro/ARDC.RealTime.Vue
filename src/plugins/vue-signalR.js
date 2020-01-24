const signalR = require("@microsoft/signalr");

const VueSignalR = {
    install(Vue) {
        Vue.prototype.$signalR = signalR;
        Vue.prototype.$createNewSignalRConnection = function (hubUrl) {
            return new signalR.HubConnectionBuilder()
                .withUrl(hubUrl)
                .build();
        }
    }
};

export default VueSignalR;