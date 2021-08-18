import * as PizzasActionCreator from './pizza'
import * as FilterActionCreator from './filter'
import * as CartActionCreator from './cart'

export default  {
    ...FilterActionCreator,
    ...PizzasActionCreator,
    ...CartActionCreator
}