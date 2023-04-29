
import { collection, doc, setDoc, addDoc, updateDoc, deleteDoc, getDoc, getDocs, where, query } from "firebase/firestore"; 
import { db } from "./firebase"
function Exp(){
    function Create () {
        addDoc(collection(db, "notes"), {     
              title: "hello",
              topic: "css",
              id:"345"
            }).then(() => { 
              // Data saved successfully!
              console.log('data submitted');  
        
            }).catch((error) => {
                  // The write failed...
                  console.log(error);
            });
        }

function getall(){

    getDocs(collection(db, "notes")).then(docSnap => {
        let users = [];
        docSnap.forEach((doc)=> {
            users.push({ ...doc.data(), id:doc.id })
        });
            console.log("Document data:", users);       
    });
}



function sing(){

getDocs(query(collection(db, "notes"), where('id','==', 12))).then(docSnap => {
    let users = []; 
    docSnap.forEach((doc)=> {
        users.push({ ...doc.data(), id:doc.id })
    });
        console.log("Document data:", users);           
});


}

let id="345"
async function dele(id){
   await deleteDoc(doc(db, "notes", id),{id:id});  
}

    return(
        <div>

<button onClick={()=>dele(id)}>add</button>
<button>delete</button>
<button>edit</button>


        </div>
    )
}


export default Exp