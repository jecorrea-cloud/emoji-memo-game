import Card from '../Card/Card';
import './Board.css';

const Board = ({cards}) => {
    return (
        <main className="board">
            {cards.map(  (card, i) => {
                return <Card key={`${i}_${card.emoji}`} card={card}/>
            })}
        </main>
    )    
}

export default Board;