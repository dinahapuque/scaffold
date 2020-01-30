export default options = {
    interceptors: {
        request: [{
            success: function ({ getState, dispatch, getSourceAction }, req) {
                return Promise.resolve(req);
            },
            error: function ({ getState, dispatch, getSourceAction }, error) {

                return Promise.reject(error);
            }
        }], response: [{
            success: function ({ getState, dispatch, getSourceAction }, req) {
                return Promise.resolve(req);
            },
            error: function ({ getState, dispatch, getSourceAction }, error) {
                return Promise.reject(error);
            }
        }]
    }
};