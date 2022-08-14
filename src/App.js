import React, { useState, useEffect } from 'react';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft, faCircle, faCheckCircle, faPlus } from '@fortawesome/free-solid-svg-icons';

const App = () => {
	// HINT: each "item" in our list names a name, a boolean to tell if its been completed, and a quantity
	const [items, setItems] = useState([
		
	]);
	const [inputValue,setInputValue]=useState("");
	const [totalCount,setTotalCount]=useState(0)
	const handleAddButton=()=>{
		const newItem={
			itemName:inputValue,
			quantity:1,
			isSelected:false,
		}
		const newItems=[...items,newItem]
		
		if(inputValue!="")
		{	setItems(newItems)
			setTotalCount(totalCount+1)}
		else{
			alert("Enter item ")
		}
		
		setInputValue("")
		
	}
	const handleIncrease=(index)=>{
		const newItems=[...items]
		newItems[index].quantity++
		setItems(newItems)
		calculateTotal()
	}
	const handleDecrease=(index)=>{
		const newItems=[...items]
		if(newItems[index].quantity===1){
			return
		}
		newItems[index].quantity--
		setItems(newItems)
		calculateTotal()
	}
	const handleSelected=(index)=>{
		const newItems=[...items]
		newItems[index].isSelected=!newItems[index].isSelected
		setItems(newItems)
	}
	const calculateTotal=()=>{
		const totalCount=items.reduce((total,item)=>{
			return total+item.quantity
		},0)
		setTotalCount(totalCount)
	}

	return (
		<div className='app-background'>
			<div className='main-container'>
				<h1 style={{fontFamily:'monospace',fontSize:36}}>Shopping List</h1>
				<div className='add-item-box'>
					<input value={inputValue} onChange={(e)=>setInputValue(e.target.value)} className='add-item-input' placeholder='Add an item...' />
					<FontAwesomeIcon onClick={()=>handleAddButton()} icon={faPlus} />
				</div>
				<div className='item-list'>
					{items.map((item,index)=>(
						<div className='item-container' >
						<div className='item-name' onClick={()=>handleSelected(index)}>
							
							{item.isSelected ? (
								<>
									<FontAwesomeIcon icon={faCheckCircle} />
									<span className='completed'>{item.itemName}</span>
								</>
							) : (
								<>
									<FontAwesomeIcon icon={faCircle} />
									<span>{item.itemName}</span>
								</>
							)}
						</div>
						<div className='quantity'>
							<button>
								<FontAwesomeIcon onClick={()=>handleDecrease(index)} icon={faChevronLeft} />
							</button>
							<span>{item.quantity} </span>
							<button>
								<FontAwesomeIcon onClick={()=>handleIncrease(index)} icon={faChevronRight} />
							</button>
						</div>
					</div>
					))}
					
				</div>
				<div className='total'>Total: {totalCount}</div>
			</div>
		</div>
	);
};

export default App;
