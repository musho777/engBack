export const Validation = (arr) => {
    let status = true
    let error = ''
    arr.map((elm, i) => {
        let statusarr = true
        elm.type.map((el, i) => {
            if (el == 'empty' && !elm.value) {
                status = false
                error = `${elm.title} is invalid`
                statusarr = false
                return
            }
            else if (el == 'file' && !elm.value) {
                status = false
                error = `${elm.title} is not file`
                statusarr = false
                return
            }
        })
        if (!statusarr) {
            return
        }

    })
    if (status) {
        return { status }
    }
    else {
        return { status, error }
    }
}