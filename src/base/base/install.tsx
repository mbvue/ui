export default (obj: any) => {
    obj.install = function (app: any) {
        app.component(obj.name, obj);
    };

    return obj;
};
