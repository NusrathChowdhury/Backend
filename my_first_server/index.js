import express from 'express';
import cors from 'cors'
const app = express()
const port =process.env.PORT||5000;

app.use(cors());
app.use(express.json())


app.get('/', (req, res) => {
  res.send('Hello World! whatever')
})

const users=[
  {id:1,name:'jhon Doe',email:'whatever@gmaila.com'},
  {id:2,name:'jhon Doe',email:'whatever2@gmaila.com'},
  {id:3,name:'jhon Doe',email:'whatever3@gmaila.com'},
  {id:4,name:'jhon Doe',email:'whatever4@gmaila.com'},
  {id:5,name:'jhon Doe',email:'whatever5@gmaila.com'},
]


app.get('/users',(req,res) =>{
  res.send(users)
})

app.post('/users',(req,res)=>{
  res.send({success:true,message:'User added successfully'})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})