import americano from '../../assets/images/62037.jpg'
import agitationBannerImage from '../../assets/images/bg1.jpg'
import State from "../models/state"

const initialState: State = {
    products: [],
    activeCardUrl: null,
    agitationBanner: {
        imgUrl: agitationBannerImage,
        title: 'Чому обирають Fast Coffee?',
        text: null,
        content: [ {
            title: 'Швидкість та зручність',
            text: 'У нашому стрімкому світі кожна хвилина на вагу золота. Fast Coffee гарантує, що ви отримаєте свою улюблену каву або смузі максимально швидко. Ідеальний вибір для тих, хто завжди в русі.'
        },
        {
            title: 'Якість у кожній чашці',
            text: 'Ми використовуємо лише свіжообсмажені зерна та найкращі інгредієнти для приготування кожного напою. Незалежно від того, чи ви любите еспресо, капучино або освіжаючий смузі — ви отримаєте бездоганний смак.'
        },
        {
            title: 'Індивідуальний підхід',
            text: 'У нас кожен клієнт може створити свій ідеальний напій. Обирайте улюблені сиропи, додатки або альтернативне молоко та налаштуйте смак під себе. Кожна ваша кава — унікальна, як і ви!'
        },
        {
            title: 'Свіжість на першому місці',
            text: 'Всі інгредієнти для наших смузі та інших напоїв завжди свіжі. Ми ретельно підбираємо фрукти та овочі, щоб ви отримали максимум користі та смаку в кожному ковтку.'
        }
    ]
    },
    loadedAllProducts: false,
    randomCoffee: null
}

export default initialState