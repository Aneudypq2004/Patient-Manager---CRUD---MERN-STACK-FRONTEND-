
const FormDate = dat => {
    const date = new Date(dat)

    const options = {
        day: "numeric",
        month: "long",
        year: "numeric"

    }

    return date.toLocaleDateString('en-us', options)
}


export default FormDate