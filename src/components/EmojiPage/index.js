import {Component} from 'react'

import ShowCase from '../ShowCase'

import './index.css'

const daysList = [
  {
    id: '3639dd44-a5d5-11ec-b909-0242ac120002',

    day: 'Sun',
  },

  {
    id: '3639e17c-a5d5-11ec-b909-0242ac120002',

    day: 'Mon',
  },

  {
    id: '3639e37a-a5d5-11ec-b909-0242ac120002',

    day: 'Tue',
  },

  {
    id: '3639e532-a5d5-11ec-b909-0242ac120002',

    day: 'Wed',
  },

  {
    id: '3639e8c0-a5d5-11ec-b909-0242ac120002',

    day: 'Thu',
  },

  {
    id: '3639ea32-a5d5-11ec-b909-0242ac120002',

    day: 'Fri',
  },

  {
    id: '3639eb90-a5d5-11ec-b909-0242ac120002',

    day: 'Sat',
  },
]

const initialDatesList = [
  {
    id: '380e6b12-a454-11ec-b909-0242ac120002',

    date: '01',

    emojiUrl: '',

    emojiName: '',
  },

  {
    id: '380e6cac-a454-11ec-b909-0242ac120002',

    date: '02',

    emojiUrl: '',

    emojiName: '',
  },

  {
    id: '380e6de2-a454-11ec-b909-0242ac120002',

    date: '03',

    emojiUrl: '',

    emojiName: '',
  },

  {
    id: '380e6efa-a454-11ec-b909-0242ac120002',

    date: '04',

    emojiUrl: '',

    emojiName: '',
  },

  {
    id: '380e7012-a454-11ec-b909-0242ac120002',

    date: '05',

    emojiUrl: '',

    emojiName: '',
  },

  {
    id: '380e712a-a454-11ec-b909-0242ac120002',

    date: '06',

    emojiUrl: '',

    emojiName: '',
  },

  {
    id: '380e7454-a454-11ec-b909-0242ac120002',

    date: '07',

    emojiUrl: '',

    emojiName: '',
  },

  {
    id: '380e7576-a454-11ec-b909-0242ac120002',

    date: '08',

    emojiUrl: '',

    emojiName: '',
  },

  {
    id: '380e768e-a454-11ec-b909-0242ac120002',

    date: '09',

    emojiUrl: '',

    emojiName: '',
  },

  {
    id: '380e77a6-a454-11ec-b909-0242ac120002',

    date: '10',

    emojiUrl: '',

    emojiName: '',
  },

  {
    id: '380e78b4-a454-11ec-b909-0242ac120002',

    date: '11',

    emojiUrl: '',

    emojiName: '',
  },

  {
    id: '380e79d6-a454-11ec-b909-0242ac120002',

    date: '12',

    emojiUrl: '',

    emojiName: '',
  },

  {
    id: '380e7aee-a454-11ec-b909-0242ac120002',

    date: '13',

    emojiUrl: '',

    emojiName: '',
  },

  {
    id: '380e7c06-a454-11ec-b909-0242ac120002',

    date: '14',

    emojiUrl: '',

    emojiName: '',
  },

  {
    id: '380e7ec2-a454-11ec-b909-0242ac120002',

    date: '15',

    emojiUrl: '',

    emojiName: '',
  },

  {
    id: '380e7fda-a454-11ec-b909-0242ac120002',

    date: '16',

    emojiUrl: '',

    emojiName: '',
  },

  {
    id: '380e80e8-a454-11ec-b909-0242ac120002',

    date: '17',

    emojiUrl: '',

    emojiName: '',
  },

  {
    id: '380e8282-a454-11ec-b909-0242ac120002',

    date: '18',

    emojiUrl: '',

    emojiName: '',
  },

  {
    id: '380e83e0-a454-11ec-b909-0242ac120002',

    date: '19',

    emojiUrl: '',

    emojiName: '',
  },

  {
    id: '380e8516-a454-11ec-b909-0242ac120002',

    date: '20',

    emojiUrl: '',

    emojiName: '',
  },

  {
    id: '380e8638-a454-11ec-b909-0242ac120002',

    date: '21',

    emojiUrl: '',

    emojiName: '',
  },

  {
    id: '380e88cc-a454-11ec-b909-0242ac120002',

    date: '22',

    emojiUrl: '',

    emojiName: '',
  },

  {
    id: '380e89f8-a454-11ec-b909-0242ac120002',

    date: '23',

    emojiUrl: '',

    emojiName: '',
  },

  {
    id: '380e8b1a-a454-11ec-b909-0242ac120002',

    date: '24',

    emojiUrl: '',

    emojiName: '',
  },

  {
    id: '380e8c32-a454-11ec-b909-0242ac120002',

    date: '25',

    emojiUrl: '',

    emojiName: '',
  },

  {
    id: '380e8d40-a454-11ec-b909-0242ac120002',

    date: '26',

    emojiUrl: '',

    emojiName: '',
  },

  {
    id: '380e8e4e-a454-11ec-b909-0242ac120002',

    date: '27',

    emojiUrl: '',

    emojiName: '',
  },

  {
    id: '380e8f70-a454-11ec-b909-0242ac120002',

    date: '28',

    emojiUrl: '',

    emojiName: '',
  },

  {
    id: '380e90e2-a454-11ec-b909-0242ac120002',

    date: '29',

    emojiUrl: '',

    emojiName: '',
  },

  {
    id: '380e94de-a454-11ec-b909-0242ac120002',

    date: '30',

    emojiUrl: '',

    emojiName: '',
  },

  {
    id: '380e96be-a454-11ec-b909-0242ac120002',

    date: '31',

    emojiUrl: '',

    emojiName: '',
  },
]

const emojisList = [
  {
    id: '380e6284-a454-11ec-b909-0242ac120002',

    emojiName: 'Very Happy',

    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/monthly-emojis/monthly-emojis-very-happy.png',
  },

  {
    id: '380e64f0-a454-11ec-b909-0242ac120002',

    emojiName: 'Happy',

    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/monthly-emojis/monthly-emojis-happy.png',
  },

  {
    id: '380e6626-a454-11ec-b909-0242ac120002',

    emojiName: 'Neutral',

    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/monthly-emojis/monthly-emojis-neutral.png',
  },

  {
    id: '380e6748-a454-11ec-b909-0242ac120002',

    emojiName: 'Sad',

    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/monthly-emojis/monthly-emojis-sad.png',
  },

  {
    id: '380e69c8-a454-11ec-b909-0242ac120002',

    emojiName: 'Very Sad',

    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/monthly-emojis/monthly-emojis-very-sad.png',
  },
]

class EmojiPage extends Component {
  state = {
    dayList: daysList,
    activeDay: daysList[0].day,
    activeImage: emojisList[0].emojiName,

    imageBubble: false,
  }

  onClickActiveDay = activeImage => {
    console.log(activeImage)
    this.setState({imageBubble: true})
  }

  onClickActiveImage = activeImage => {
    console.log(activeImage)
    this.setState({imageBubble: true})
  }

  onClickImage = emojiName => {
    const {activeImage} = this.state
    if (activeImage === emojiName) {
      this.setState(prevState => ({
        imageBubble: !prevState.imageBubble,
      }))
    }
  }

  onClickDay = () => {}

  render() {
    const {dayList, activeDay, activeImage, imageBubble} = this.state

    return (
      <div className="bg-container">
        <h1 className="heading">Monthly Emojis</h1>

        <div className="show-container">
          <div className="month-container">
            <h1 className="month-heading">January</h1>

            <ul className="month-list">
              {dayList.map(eachDay => (
                <li className="list" key={eachDay.id}>
                  <p>{eachDay.day}</p>
                </li>
              ))}
            </ul>

            <ul className="date-container">
              {initialDatesList.map(eachDate => (
                <li className="list" key={eachDate.id}>
                  <button
                    type="button"
                    className="button"
                    onClick={() => this.onClickDay(eachDate.date)}
                  >
                    {eachDate.date}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="emoji-container">
              <ul className="emoji-list">
                {emojisList.map(eachEmoji => (
                  <li className="list" key={eachEmoji.id}>
                    <p> {eachEmoji.emojiName}</p>
                    <button
                      className="button-image"
                      type="button"
                      onClick={() => this.onClickImage(eachEmoji.emojiName)}
                    >
                      <img
                        src={eachEmoji.emojiUrl}
                        alt={eachEmoji.emojiName}
                        className={imageBubble ? 'emoji-bubble' : 'emoji'}
                      />
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="emoji-container">
              <ShowCase
                emojiDetails={emojisList}
                daysList={daysList}
                activeDay={activeDay}
                activeImage={activeImage}
                onClickActiveImage={this.onClickActiveImage}
                onClickActiveDay={this.onClickActiveDay}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default EmojiPage
