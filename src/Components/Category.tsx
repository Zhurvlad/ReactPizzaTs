import React, {useState} from 'react';

interface CategoryProps {
    category: string[],
    onSetSelectCategory: any,
    categoryAdd:any
}

export const Category:React.FC<CategoryProps> = ({category, onSetSelectCategory, categoryAdd}) => {


    const onSetCategory = (index:any) => {

            onSetSelectCategory(index)
    }

    return (
        <div className="categories">
            <ul>
                <li onClick={() =>onSetCategory(null)} className={categoryAdd === null ? "active": ''}>Все</li>
                {category && category.map((cat,index) => (
                    <li className={categoryAdd === index ? 'active': ''} onClick={() => onSetCategory(index)} key={cat+index}>{cat}</li>
                ))}
            </ul>
        </div>
    );
};

