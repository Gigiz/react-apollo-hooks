import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from 'react-apollo-hooks';

const GET_CATEGORY_LIST = gql(`
  query getCategoryList {
    viewer {
      categoryList {
        name
        description
      }
    }
  }
`);

const CategoryList = () => {
  const { data, error } = useQuery(GET_CATEGORY_LIST);
  
  if (error) {
    return (
      <div>Error</div>
    );
  }

  return (
    <>
      <h2>Category List</h2>
      <ul>
        {data.viewer && data.viewer.categoryList.map((category, index) => (
          <li key={index}>{category.name}</li>
        ))}
      </ul>
    </>
  );
};

export default CategoryList;