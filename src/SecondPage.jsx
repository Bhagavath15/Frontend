export function SecondPage({ car2, search }) {

    return (
        <div className="card-container">
            {car2.filter((detail) => {
                if (search === "") {
                    return detail;
                } else if (detail.carName.toLowerCase().includes(search.toLowerCase())) {
                    return detail;
                }
            }).map((car, index) => <SecondPageCards car={car} key={index} />)}
        </div>
    );
}
function SecondPageCards({ car }) {

    return (
        <div className="card">
            <div className="card-content">
                <img className="car-image" src={car.image} />
                <div className="carName">
                    <h3>{car.carName}</h3>
                    <p className="model">{car.model}</p>
                </div>
                <div className="car-content">
                    <p><i class="bi bi-people"></i>{car.person} People</p>
                    <p><i class="bi bi-fuel-pump"></i>{car.fuel}</p>

                </div>
                <div className="car-content">

                    <p><i class="bi bi-speedometer"></i>{car.mileage}</p>
                    <p><i class="fa-solid fa-steering-wheel"></i>{car.gearType}</p>
                </div>
                <div className="car-price">
                    <h2>{car.price}/month</h2>
                    <div className="rent-button">
                        <span><i class="bi bi-suit-heart"></i></span>
                        <button class="btn btn-primary">Rent Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
}