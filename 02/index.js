class compose(middlewares) {
    // 暗号：排序
    return function (ctx) {
        return dispatch(0)
        function dispatch(i) {
            let fn = middlewares[i]
            if (!fn) {
                return Promise.resolve()
            }
            return Promise.resolve(
                fn(ctx, function next() {
                    return dispatch(i + 1)
                })
            )
        }
    }
}

module.exports = compose;