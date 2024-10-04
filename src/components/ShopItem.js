import style from './style.module.css'

function ShopItem({items}){

    return(
        <div className={style.fd}>
            <div className={style.spanitem}>
                <img key={items.name} src={items.img} alt={items.name} className={style.img_list}/>
                <div className={style.cnamelist}>{items.name}</div>
                <div className={style.colorlist}>{items.color}</div>
                <div className={style.pricelist}>${items.price}</div>
                <button className={style.btnlist}>ADD TO CART</button>
            </div>
        </div>
    )

}

export default ShopItem;