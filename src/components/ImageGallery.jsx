const ImageGallery = ({ url })=>{
    return(<div className="col-lg-3 col-md-4">
    <div className="gallery-item">
        <a href={url} className="glightbox" data-gallery="images-gallery">
            <img src={url} alt="" style={{ height: 250 }} className="img-fluid w-100 object-fit-cover" />
        </a>
    </div>
</div>);
}

export default ImageGallery;