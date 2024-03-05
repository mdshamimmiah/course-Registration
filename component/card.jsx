

const Card = ({selectedCards,remaining,totalRemaining,totalPrice}) => {
    // console.log(props.selectedCards)
    return (
        <div className="text-start px-3">
             <h3 className="mb-3">Credit Hour remaining:{remaining} hr</h3><hr className="mb-3 border" />
             <p className="text-2xl font-bold mb-3"> Course Name</p> <hr className="mb-3 border" /> 
             {
                selectedCards.map((homeCard) => (<li className="list-decimal text-start mb-3" key={homeCard.idx}>{homeCard.title}</li>))
             }
           
             <h3 className="mb-3">Total Credit Hour: {totalRemaining} hr</h3><hr className="mb-4 border" />
             <h3 className="mb-4">Total Price:{totalPrice}</h3>
        </div>
    );
};

export default Card;