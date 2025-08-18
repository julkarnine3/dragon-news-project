import React, { use } from 'react';
import { NavLink } from 'react-router';

const categoriesPromise = fetch('/public/categories.json').then(res => res.json());

const Categories = () => {
    const categories = use(categoriesPromise);
    console.log(categories);
    return (
        <div>
            <h1 className='font-bold text-xl'>All Categories({categories.length})</h1>
          <div className='grid grid-cols-1 mt-5 gap-3'>
              {
                categories.map((category) => (
                <NavLink key={category.id} to={`/category/${category.id}`} className={'btn shadow-none bg-white border-0 hover:bg-base-300 font-semibold text-accent'}>{category.name}</NavLink>
            
            ))
            }
          </div>
        </div>
    );
};

export default Categories;