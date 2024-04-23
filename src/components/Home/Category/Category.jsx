
import {useNavigate} from 'react-router-dom'

import "./Category.scss";
const Category = ({ categories }) => {

    const navigate = useNavigate();

    // Check if categories is undefined or if data is not an array
    if (!categories || !categories.data || !Array.isArray(categories.data)) {
        return <div></div>;
    }

    return (
        <div className="shop-by-category">
            <div className="categories">
                {categories?.data?.map((item) => (
                    <div key={item.id} className="category" onClick={()=>navigate(`/category/${item.id}`)}>
                        <img src={process.env.REACT_APP_DEV_URL + item.attributes.img.data.attributes.url} alt="" />
                        
                        <p>{item.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Category;
