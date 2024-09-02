import React, { useState } from 'react'
import menuItems from '../Data/Data'
const App = () => {
    const [items,setItems]=useState(menuItems);
    function handleFilter(filterType){
        if(filterType==='all'){
            setItems(menuItems)
        }else{
            const newItems=menuItems.filter(item=> item.category===filterType);
            setItems(newItems)
        }
        
    }
  return (
    <div>
      <h1> Our Menu</h1>
      <div className="btn_container">
        <button onClick={()=>handleFilter('all')}>ALL</button>
        <button onClick={()=>handleFilter('breakfast')}>Breakfast</button>
        <button onClick={()=>handleFilter('lunch')}>Lunch</button>
        <button onClick={()=>handleFilter('shakes')}>Shakes</button>
      </div>
       <div className="menu">
        {items.map((menuItem)=>{
             const { id, title, img, desc, price, category } = menuItem;
            return(
                <div id={id}>
                    <img src={img} alt={title}/>
                    <header>
                    <h4>{title}</h4>
                    <h4 className="price">${price}</h4>
                    </header>
                    <p className="item-text">{desc}</p>
                </div>
             )
            })}
       </div>
    </div>
  )
}

export default App
