import style from './style.module.css';
import ShopCard from './ShopCard';

const CardsView = ({cards}) => {
    return(
        <div className={style.divcards}>
            <div className={style.gridview}>
                {cards.map((card)=> (
                    <ShopCard card={card}/>
                ))                    
                }
            </div>
        </div>
    )
}

export default CardsView;