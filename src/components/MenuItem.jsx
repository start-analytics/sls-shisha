const MenuItem = ({url, title, price, description, filter})=>{return(
<div className={`col-lg-6 menu-item isotope-item ${filter}`}>    
    <img src={url} className="menu-img" alt="" />
    <div className="menu-content">
        <div >{title}</div>
        <span>{price}</span>
    </div>
    <div className="menu-ingredients">{description}</div>
</div>
);}

export default MenuItem;