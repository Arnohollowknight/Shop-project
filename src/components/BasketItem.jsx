function BasketItem(props) {
    const {
        id,
        name,
        Price,
        quantity,
        removeFromBasket = Function.prototype,
        incQuantity = Function.prototype,
        decQuantity = Function.prototype,
    } = props;
    return (
        <li className='collection-item'>
            {name}{' '}
            <i
                className='material-icons basket-quantity'
                onClick={ quantity <= 1 ? (() => removeFromBasket(id)) : (() => decQuantity(id))}
            >
                remove
            </i>{' '}
            x{quantity}{' '}
            <i
                className='material-icons basket-quantity'
                onClick={() => incQuantity(id)}
            >
                add
            </i>{' '}
            = {(Price * quantity).toFixed(2)} $.
            <span
                className='secondary-content'
                onClick={() => removeFromBasket(id)}
            >
                <i className='material-icons basket-delete'>close</i>
            </span>
        </li>
    );
}

export { BasketItem };
