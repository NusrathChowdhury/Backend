import express from 'express';
import cors from 'cors'
import { MongoClient, ObjectId } from 'mongodb';
import 'dotenv/config'




const app = express();
const port = 5000;

//middleware
app.use(cors())
app.use(express.json())



const client = new MongoClient(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.gyuk9k3.mongodb.net/`);

export async function connectToMongoDB() {
  try {
    await client.connect();
    console.log("You successfully connected to MongoDB!");
    return client;
  } catch (err) {
    console.dir(err);
  }
}


const connetedCleint=await connectToMongoDB();
const db = connetedCleint.db('SimpleCardDb');
const users = db.collection("Users");
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/users',async(req,res) =>{
  const cursor=users.find({})
  const allUsers=await cursor.toArray()
  res.send(allUsers)
})

app.get('/users/:id',async(req,res)=>{
  console.log('Params in the server',req.params)
  const id=req.params.id;
  const query={_id:new ObjectId(id)}
  const result=await users.findOne(query)
  res.send(result);
})


app.post('/users', async (req, res) => {
    const newUser = req.body;

    console.log('new user:', newUser);

    const result = await users.insertOne(newUser);

    res.send(result);
});
//UpdateUser
app.patch('/users/:id',async(req, res)=>{
   const id=req.params.id;
   const updatedUser=req.body;

   const filter={
    _id:new ObjectId(id)
   }
   const options={upsert:true}
   const updateDoc={
    $set:{
      name:updatedUser.name,
      email:updatedUser.email
    }
   }
   const result=await users.updateOne(filter,updateDoc,options)
   res.send(result)

})

app.delete('/users/:id',async(req, res)=>{
  const id=req.params.id;
  const query={_id:new ObjectId(id)}
  const result=await users.deleteOne(query);
  res.send(result)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});