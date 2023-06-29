function GoodsItem(props) {
    const {
        Image,
        Material,
        Price,
        id,
        name,
        type,
        addToBasket = Function.prototype,
    } = props;

    return (
        <div className='card'>
            <div className='card-image'>
                <img src={Image} alt={name} />
            </div>
            <div className='card-content'>
                <span className='card-title'>{name}</span>
                <p>Материал изготовления: {Material}. Тип посуды: {type}.</p>
            </div>
            <div className='card-action'>
                <button
                    className='btn'
                    onClick={() =>
                        addToBasket({
                            id,
                            name,
                            Price
                        })
                    }
                >
                    Купить
                </button>
                <span className='right' style={{ fontSize: '1.8rem' }}>
                    {Price} $.
                </span>
            </div>
        </div>
    );
}

export { GoodsItem };
