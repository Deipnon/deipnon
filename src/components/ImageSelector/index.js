import React from 'react'
import { propOr } from 'ramda'
import { useLazyQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import { Modal, Card, Row, Col, Input, Avatar } from 'antd'

import { searchImage } from '../../graphql/queries'

const { Search } = Input

const ImageSelector = ({ visible, onSelect, onClose}) => {
  const searchRef = React.createRef()
  const [search, { loading, data }] = useLazyQuery(gql(searchImage))
  const images = propOr([], ['searchImage'], data)
  
  return (
    <Modal
      title="Search and select image"
      centered
      visible={visible}
      onOk={onClose}
      onCancel={onClose}
      width={800}
    >
      <Search
        autoFocus={true}
        ref={searchRef}
        size="large"
        loading={loading}
        placeholder="input search text"
        style={{marginBottom: '15px'}}
        onSearch={searchKey => {
          search({
            variables: {
              request: {
                searchKey
              }
            }
          })
        }}
      />
      <Card size="small">
        <div style={{ height: '400px', "overflowY": 'auto', "overflowX": 'hidden' }}>
          <Row gutter={[16, 16]}>
            {images.map((image, index) => (
              <Col key={index} span={3}>
                <Avatar size={84} shape="square" src={image.small} style={{ cursor: 'pointer' }} onClick={() => { onSelect(image)}} />
              </Col>
            ))}
          </Row>
        </div>
      </Card>
    </Modal>
  )
}

export default ImageSelector