// @flow
import React, { useState } from 'react'
import { path } from 'ramda'
import { useQuery, useMutation } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import { PageHeader, Empty, Button } from 'antd'
import { PlusOutlined } from '@ant-design/icons'

import { listProductCategorys } from '../../graphql/queries'
import { deleteProductCategory, updateProductCategory } from '../../graphql/mutations'
import { useRestaurant } from '../../hooks'

import CategoryDrawer from './CategoryDrawer'
import CategoryCard from './CategoryCard'

const MenuView = () => {
  const [isDrawerOpen, setDrawerStatus] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState({})
  const restaurant = useRestaurant();
  
  const [remove] = useMutation(gql(deleteProductCategory))
  const [update] = useMutation(gql(updateProductCategory))
  const { data, refetch } = useQuery(gql(listProductCategorys), {
    variables: {
      filter: {
        restaurantId: { eq: restaurant.id }
      }
    }
  });
  
  const productCategories = path(['listProductCategorys', 'items'], data)
  
  const showEditCategory = (category) => {
    setSelectedCategory(category)
    setDrawerStatus(true)
  }
  
  const showNewCategory = () => {
    setSelectedCategory({})
    setDrawerStatus(true)
  }
  
  const removeCategory = (category) => {
    remove({
      variables: {
        input: {
          id: category.id
        }
      }
    }).then(refetch)
  }
  
  const handleChangedStatus= category => {
    update({
      variables: {
        input: {
          id: category.id,
          isActive: !category.isActive
        }
      }
    }).then(refetch)
  }

  return (<React.Fragment>
    <PageHeader title="Restaurant Menu" className="page-title"
    extra={
      <Button type="primary" icon={<PlusOutlined />} onClick={showNewCategory}>
        Add Category
      </Button>
    }
    />
      {productCategories ? productCategories.sort((a, b) => a.sortOrder - b.sortOrder).map((category) => (
        <CategoryCard
        key={category.id}
        category={category}
        onEdit={showEditCategory}
        onRemove={removeCategory}
        onStatusChange={handleChangedStatus}
        />
      )) : <Empty />}


    {isDrawerOpen && <CategoryDrawer 
      selectedCategory={selectedCategory}
      isOpen={isDrawerOpen} 
      totalCategory={productCategories ? productCategories.length : 0} 
      onClose={() => setDrawerStatus(false)} 
      onSave={() => {
        setDrawerStatus(false);
        refetch();
      }}
    />}

  </React.Fragment>)
}


export default MenuView

// https://awimowqapo.cloudimg.io/v7/https://i.pinimg.com/originals/da/59/48/da5948e191f841484264d805d732bc81.jpg?w=200