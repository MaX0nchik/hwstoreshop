import IconSwitch from './IconSwitch';
import {useState} from 'react';
import ListView from './ListView';
import CardsView from './CardsView';

function Store({products}){

    const [icon, setIcon] = useState('view_list');

    const handleSwitch = (icont) =>{
        setIcon(icont==='view_list'? 'view_module' : 'view_list');
    }

    const viewItems = (view) => {
        let content;
        if (view==='view_list'){
            content = <CardsView cards={products}/>
        }
        else {
            content = <ListView products={products}/>
        }
        return content;
    }

    return(
        <div>
            <IconSwitch icon={icon} onSwitch={()=>handleSwitch(icon)}/>
            {viewItems(icon)}
        </div>
    )

}

export default Store;