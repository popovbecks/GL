function Serv () {
    this.al = function () {
        alert('aaaa')
    }
}

export default (ngModule) => {
    ngModule.service('Serv', Serv);
}