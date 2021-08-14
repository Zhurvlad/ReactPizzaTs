import * as PizzasActionCreator from './pizza'
import * as FilterActionCreator from './filter'

export default {
    ...FilterActionCreator,
    ...PizzasActionCreator
}