const env = import.meta.env.MODE || 'prod'
const EnvConfig = {
    development: {
        baseApi:'/api',
        mockApi:'https://apifoxmock.com/m1/943972-0-default'
    },
    test:{
        baseApi:'/api',
        mockApi:'https://apifoxmock.com/m1/943972-0-default'
    },
    prod:{
        baseApi:'/api',
        mockApi:'https://apifoxmock.com/m1/943972-0-default'
    }

}

export default {
    env,
    ...EnvConfig[env],
    //mock
    mock:false
}