// state 2
const todocontainer=document.querySelector('#todolistcontant')
const tododonecontainer=document.querySelector('#todoDonecontant')
const todonotdonecontainer=document.querySelector('#todoNotDonecontant')
const input=document.querySelector('#input')
const inputSerch=document.querySelector('#inputSerch')
const remaindtodo=document.querySelector('#remaindtodo')


//input serche
inputSerch.addEventListener('keyup' , (e) =>{
    serch =e.target.value
    render(database)
})
let serch = ''

// state 3 tarif db
let database= [
    {id:1,  titel:'bye milk', state: true},
    {id:2,  titel:'bye car', state: false},
    {id:3,  titel:'bye pen', state: true},
    {id:4,  titel:'bye shet', state: false}
]



const render =db =>{
    
    renderdel(db.filter(item => item.state))
    renderdel1(db.filter(item => !item.state))
    todoremaind(db.filter(item => !item.state))
    todocontainer.innerHTML = ''
    db.filter(item => item.titel.toUpperCase().includes(serch.toUpperCase())).map(item => {

        todocontainer.innerHTML += `
                 <tr  >
                
                     <td>
                          ${item.id}
                     </td>
                     <td>
                        ${item.titel}
                     </td>
                     <td style="cursor: pointer;  onclick="checktodo(${item.id})">
                     <i class="fa-solid fa-cart-shopping"></i>
                     </td>
                     <td>
               
                     <button class="btn button border-0 " onclick="delettodo(${item.id})" style="cursor: pointer;><i class="fa-solid fa-trash-can-arrow-up"></i></button>
                     </td>
                </tr>


                 `
    })
}
const renderdel = db =>{
    tododonecontainer.innerHTML = ''
    db.map(item => {
        tododonecontainer.innerHTML += `
        <tr  >
                
        <td>
             ${item.id}
        </td>
        <td>
           ${item.titel}
        </td>
        <td style="cursor: pointer; onclick="checktodo(${item.id})">
       ثبت شد <i class="fa-regular fa-thumbs-up"></i>
        </td>
        </tr>
      
                 `
    })
}
const renderdel1 = db =>{
    todonotdonecontainer.innerHTML = ''
    db.map(item => {
        todonotdonecontainer.innerHTML += `
        <tr >
                
        <td>
             ${item.id}
        </td>
        <td>
           ${item.titel}
        </td>
        <td style="cursor: pointer;" onclick="checktodo(${item.id})">
        غیر فعال شد <i class="fa-regular fa-thumbs-down"></i>
        </td>
        </tr>

                 `
    })
}
//  true & false 
const checktodo = id => {
        database = database.map(item =>  item.id === id ? {...item,state:!item.state}: item )
        render(database)

}



// delet to do 
const delettodo=id=>{
    database = database.filter(item => item.id !==id)
    render(database)

}

const addtodo = ()=>{
database=[...database , {id:Math.floor(Math.random()*1000) ,titel:input.value , state:false}]
render(database)
}

const cleardb = ()=>{
    database = []
    render(database)
}

const todoremaind = db =>{
    remaindtodo.innerHTML =`تعداد کالا ${db.length}  `
}

render(database)