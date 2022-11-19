//Variable that defines the current environment
const env = "production";

//Environment settings development
const development = {
    host: 'http://localhost:8080'
}

//Environment settings production
const production = {
    host: ''
}

//Environment settings test
const test = {
    host: ''
}

const getObj = () => ({
    development, production, test
}[env] || development);

export default getObj();