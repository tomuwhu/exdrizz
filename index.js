import expr from 'express'
import 'dotenv/config';
import habs from 'express-handlebars'
import { drizzle } from "drizzle-orm/mysql2";
const db = drizzle(process.env.DATABASE_URL);
var x = 1
var y = Math.random()
const rn = fix => Math.random().toFixed(fix)
const hbs = habs.create({
  defaultLayout: 'main.hbs',
  helpers: {
    mod2: a => `${a} mod 2 = ${a % 2}` 
  }  
})
const app = expr()
  .engine('.hbs', hbs.engine)
  .set('view engine', '.hbs')
  .set('views', './views')
  .use(expr.static('static'))
  .use(expr.json())
  .post('/post', (req, res) => {
    console.log(req.body)
    res.send(JSON.stringify({x: ++x, y: rn(2)}))
  })
  .get('/', (req, res) => {
    res.render('root', {a: 10, x: x++, y: rn(2)})
  })
  .listen(3000)