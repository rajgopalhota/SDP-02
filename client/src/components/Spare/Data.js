import seat from './Assets/seat.png'
import inmirror from './Assets/inmirror.png'
import windmirror from './Assets/windmirror.jpg'
import redhead from './Assets/redhead.jpg'
import bluehead from './Assets/bluehead.jpg'
import ackkit from './Assets/ackkit.png'
import airvent from './Assets/airvent.png'
import brakefluid from './Assets/brakefluid.png'
import clock from './Assets/clock.png'
import compressor from './Assets/Compressor.png'
import condensor from './Assets/condensor.png'
import coolant from './Assets/coolant.png'
import engineoil from './Assets/engineoil.png'
import exhaust from './Assets/exhaust.png'
import foglamp from './Assets/foglamp.png'
import radiatorflush from './Assets/radiatorflush.png'
import silencer from './Assets/silencer.png'
import speaker from './Assets/speaker.png'
import wipermotor from './Assets/wipermotor.png'

const spareList = [
    {
        id: 1,
        title: "Wiper Motor",
        price: 1000,
        img: wipermotor,
        amount: 1,
        type: "parts"
      },
      {
        id: 2,
        title: "Silencer",
        price: 8500,
        img: silencer,
        amount: 1,
        type: "parts"
      },
      {
        id: 3,
        title: "Children Seat",
        price: 9490,
        img: seat,
        amount: 1,
        type: "accessories"
      },
      {
        id: 4,
        title: "Fog Lamp",
        price: 6500,
        img: foglamp,
        amount: 1,
        type: "light"
      },
      {
        id: 5,
        title: "Speaker",
        price: 2300,
        img: speaker,
        amount: 1,
        type: "parts"
      },
      {
        id: 6,
        title: "Exhaust",
        price: 5700,
        img: exhaust,
        amount: 1,
        type: "parts"
      },
      {
        id: 7,
        title: "Engine Oil",
        price: 2100,
        img: engineoil,
        amount: 1,
        type: "oil"
      },
      {
        id: 8,
        title: "Coolant",
        price: 2140,
        img: coolant,
        amount: 1,
        type: "oil"
      },
      {
        id: 9,
        title: "Condensor",
        price: 3680,
        img: condensor,
        amount: 1,
        type: "parts"
      },
      {
        id: 10,
        title: "Compressor",
        price: 4780,
        img: compressor,
        amount: 1,
        type: "parts"
      },
      {
        id: 11,
        title: "Clock",
        price: 800,
        img: clock,
        amount: 1,
        type: "accessories"
      },
      {
        id: 12,
        title: "Brake Fluid",
        price: 2300,
        img: brakefluid,
        amount: 1,
        type: "oil"
      },
      {
        id: 13,
        title: "Air Vent",
        price: 3490,
        img: airvent,
        amount: 1,
        type: "parts"

      },
      {
        id: 14,
        title: "AC Repair Kit",
        price: 3490,
        img: ackkit,
        amount: 1,
        type: "parts"

      },
      {
        id: 15,
        title: "Radiator Flush",
        price: 7100,
        img: radiatorflush,
        amount: 1,
        type: "oil"

      },
      {
        id: 16,
        title: "Nexa Mirror",
        price: 3490,
        img: inmirror,
        amount: 1,
        type: "mirror"

      },
      {
        id: 17,
        title: "Side Mirror",
        price: 3090,
        img: windmirror,
        amount: 1,
        type: "mirror"

      },
      {
        id: 18,
        title: "Red Headlight",
        price: 5490,
        img: redhead,
        amount: 1,
        type: "light"

      },
      {
        id: 19,
        title: "Blue Headlight",
        price: 9490,
        img: bluehead,
        amount: 1,
        type: "light"

      },
]

export default spareList;