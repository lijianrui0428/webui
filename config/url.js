const DEV_URL = 'http://localhost:7984/'
const PRO_URL = 'https://produce.com'

export default process.env.NODE_ENV === 'development' ? DEV_URL : PRO_URL
