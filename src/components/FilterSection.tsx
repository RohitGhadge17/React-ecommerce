import items from '../Info';
import Wrapper from './FilterSection.styles';

const FilterSection = () => {
    return (
        <div>
            <div className="filter-company">
                <h3>Company</h3>
                <form action="#">
                    <select name="company" id="company" className="filter-company--select"
                    >
                        {items.map((item) => {
                            return (
                                <option value={item.brand} key={item.id}>
                                    {item.brand}
                                </option>
                            )
                        })}
                    </select>
                </form>
            </div>
            <div className="filter_price">
                <h3>Price</h3>
                <p>
                    $Price
                </p>
                <input
                    type="range"
                    name="price"
                />
            </div>
        </div>
    )
}

export default FilterSection;