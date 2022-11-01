const Personaje = ({image,name}) => {

    return(
        
        <div className="card">
            <img src={image} className="card-img"/>
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
            </div>
        </div>
    );
}

export {Personaje};

//col-md-12 col-sm-6 justify-content-md-center