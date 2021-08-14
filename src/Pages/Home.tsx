import React, {useEffect} from 'react';
import {PizzaBlock} from "../Components/PizzaBlock";
import {Category} from "../Components/Category";
import {SortPopup} from "../Components/SortPopup";
import {useSelector} from "react-redux";
import {useTypedSelector} from "../Components/hooks/useTypedSelector";
import {UserPizzaActions} from "../Components/hooks/UseActions";
import LoadingBlock from "../Components/PizzaBlock/LoadingBlock";


const categories = [
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые"
]

const sort = [
    {name: "популярности", type: "rating", order: 'desc' },
    {name: "цене", type: "price", order: 'desc'},
    {name: "алфавит", type: 'name', order: "asc"}
    ]



export const Home = () => {
    const {items, isLoading, error} = useTypedSelector(pizza => pizza.pizzas)
    const {category, popupObj} = useTypedSelector(filter => filter.filter)
    const {fetchPizza, setCategory, setPopup} = UserPizzaActions()

    const onSetCategory = (index:any) => {
        setCategory(index)
    }

    const onSetPopup = (sortObj:any) => {
        setPopup(sortObj)
    }

    useEffect(() => {
        fetchPizza(category, popupObj)
    }, [category, popupObj])

console.log(category)

    return (
        <div className="container">
            <div className="content__top">
                    <Category
                        categoryAdd={category}
                        onSetSelectCategory={onSetCategory}
                        category={categories}/>
                <SortPopup
                    onSetPopup={onSetPopup}
                    popupObj={popupObj}
                    sort ={sort}/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {isLoading ? items && items.map((pizzaObj) =>
                    <PizzaBlock
                        {...pizzaObj}
                        key={pizzaObj.id}/>
                ):
                Array(12).fill(0).map((obj,_) => (
                    <LoadingBlock key={obj+_}/>
                )) }
            </div>
        </div>
    );
};

