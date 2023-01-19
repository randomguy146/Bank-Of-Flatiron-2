import React,{ useState } from "react";
function Form() {

    
    
    const [description, setDescription] = useState('')
    const [category, setCategory] = useState('')
    const [amount, setAmount] = useState('')
    const [date, setDate] = useState([]);


    function handeDescriptionChange(event){
        setDescription(event.target.value)
    }
    function handeCategoryChange(event){
        setCategory(event.target.value)
    }

    function handeAmountChange(event){
        setAmount(event.target.value)
    }
    function handeDateChange(event){
        setDate(event.target.value)
    }

    function handleSubmit(event){
        event.preventDefault();

        if(category.length > 0 && description.length > 0 && amount.length > 0){
            
            fetch('http://localhost:8001/transactions',{
                method: 'POST',
                headers: { 
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    description: description,
                    category: category,
                    amount: amount,
                    date: date
                })
            }).then(res => res.json())
            
        }else{
            console.log('No data value')
        }
    }

    return (
        <form onSubmit={handleSubmit}>

            <div>
            <label htmlFor='category'>Category</label>
            <input
            type='text'
            onChange={handeCategoryChange}
            />

            <label htmlFor='description'>Description</label>
            <input
            type='text'
            onChange={handeDescriptionChange}
            />
            </div>

            <div>
            <label htmlFor='amount' >Amount</label>
            <input
            type='text'
            onChange={handeAmountChange}
            />

            <label htmlFor="date">Date</label>
            <input
            type='date'
            onChange={handeDateChange}
            />
            </div>

            <button type="submit">Submit</button>
        </form>
    );
}

export default Form;