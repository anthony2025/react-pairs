const suits = 'CLUBS DIAMONDS HEARTS SPADES'.split(' ')
const values = 'ACE 2 3 4 5 6 7 8 9 10 JACK QUEEN KING'.split(' ')
const offset = ({suit, value}) => {
  const sequenceNumber = 13 * suits.indexOf(suit) + values.indexOf(value)
  return `${-100 * sequenceNumber}% 0%`
}

const Card = ({card}) =>
  <div className="Card" style={{backgroundPosition: offset(card)}} />

const renderCards = cards => {
  return cards.map(card => <Card key={card.code} card={card} />)
}

const renderPlaceholders = numPlaceholders => {
  return Array(numPlaceholders)
    .fill()
    .map((_, i) => <div key={i} className="PlaceholderCard" />)
}

const HandCards = ({cards, numPlaceholders}) =>
  <div className="Hand_Cards">
    {cards ? renderCards(cards) : renderPlaceholders(numPlaceholders)}
  </div>

class Hand extends React.Component {
  constructor() {
    super()
    this.fetchCards = this.fetchCards.bind(this)
    this.state = {loading: false, cards: null}
  }

  fetchCards() {
    this.setState({loading: true})
    API.dealCards(5).then(({cards}) => {
      this.setState({cards, loading: false})
    })
  }

  render() {
    const {cards, loading} = this.state

    return (
      <div className="Hand">
        <HandCards cards={cards} numPlaceholders={5} />
        {loading
          ? <div className="Loading">
              <img src="https://frontend.center/images/loading.svg" />
            </div>
          : <button className="Button" onClick={this.fetchCards}>
              {cards ? 'Replace hand' : 'Get cards'}
            </button>}
      </div>
    )
  }
}

const App = () =>
  <div className="Main">
    <Hand />
  </div>

const css = `
body {
  margin: 0;
  background-size: 200vw 200vh;
  background-color: darkgreen;
  background-image: radial-gradient(transparent, rgba(0,0,0,0.9));
  background-blend-mode: multiply;
  background-position: -45vw -20vh;
}

.Main {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.Hand {
  position: relative;
  min-height: 250px;
  display: flex;
  align-items: center;
  flex-direction: column;
  background: #fefefe;
  padding: 2rem;
  border-radius: 0.5rem;
}

.Hand_Cards {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
}

.Button {
  background: rgba(255, 255, 255, 0.8);
  padding: 1em 2em;
  font-size: 1.125rem;
  font-weight: 300;
  text-transform: uppercase;
  border: 1px solid #999;
  border-radius: 0.5rem;
}

@keyframes fade-in {
  from {
    opacity: 0;
  }
}

.Loading {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.8);
  animation: fade-in 0.5s ease-out both;
}

.Loading > img {
  width: 3rem;
}

@keyframes slide-up {
  from {
    opacity: 0;
    transform: scale(0.8) translateY(20%);
  }
}

.PlaceholderCard, .Card {
  margin: 0.25rem;
  width: 120px;
  height: 160px;
}
.PlaceholderCard {
  background: #eee;
  border-radius: 0.5rem;
}

.Card {
  animation: slide-up 0.3s backwards;
  transition: opacity 0.5s;
  background: url(https://frontend.center/images/card-sprite.png);
  background-size: 5200% 100%;
}

.Card:nth-child(2) { animation-delay: 0.1s; }
.Card:nth-child(3) { animation-delay: 0.2s; }
.Card:nth-child(4) { animation-delay: 0.3s; }
.Card:nth-child(5) { animation-delay: 0.4s; }
`
