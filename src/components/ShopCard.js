import style from './style.module.css'

function ShopCard({card}){

    return(
        <div className={style.gridview}>
            <div className={style.ingrid}>
                <div className={style.namegrid}>{card.name}</div>
                <div>{card.color}</div>
                <img key={card.name} src={card.img} alt={card.name} className={style.imggrid}/>
                <div className={style.pricebutgrid}>
                    <div>${card.price}</div>
                    <button className={style.btnlist}>ADD TO CART</button>
                </div>
            </div>
        </div>
    )
}

export default ShopCard;