import React from 'react'
import { Table } from 'antd';

import styles from './people.module.scss'

const PeopleComponent = () => {
  const columns = [
    {
      title: 'Pessoa',
      dataIndex: 'name',
      sortDirections: ['descend'],
    },
    {
      title: 'Números marcados',
      dataIndex: 'count',
      defaultSortOrder: 'descend',
      sorter: (a, b) => a.count - b.count,
    },
  ];

  const data = [
    {
      name: 'John Brown',
      count: 32,
    },
    {
      name: 'Jim Green',
      count: 42,
      cpf: '123456789'
    },
  ];

  function onChange(pagination, filters, sorter, extra) {
    console.log('params', pagination, filters, sorter, extra);
  }


  return (
    <Table
      columns={columns}
      dataSource={data}
      onChange={onChange}
      pagination={{ position: ['none', 'none'] }}
      onRow={(record, rowIndex) => {
        return {
          onClick: _ => { console.log(record); },
        };
      }}
    />
  )
}

export default PeopleComponent