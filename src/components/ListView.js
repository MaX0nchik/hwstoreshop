import ShopItem from "./ShopItem";

function ListView({products}){
    return(
        <div>
            {products.map((items) => (
                <ShopItem items={items}/>
            ))
            }
        </div>
    )
}

export default ListView;