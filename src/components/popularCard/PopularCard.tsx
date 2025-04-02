import './popularcard.css'

export type BeggingOnHerKneesToBePopularType = {
    name: string
    description: string
    price: string
    image: string
}

const PopularCard = ({ name, description, price, image }: BeggingOnHerKneesToBePopularType) => {

    return (
        <div className="popular__card">
            <div className="popular__images">
                <i className="popular__shape"></i>
                <img src={image} alt={name} />
                <img className="popular__bean-1" src='img/bean-img.png' />
                <img className="popular__bean-2" src='img/bean-img.png' />
            </div>
        </div>
    )
}

export default PopularCard