import React, { Fragment } from 'react'

const ListTodo = () => {
  return (
    <Fragment>
      <table class="table mt-5 text-centre">
        <thead>
          <tr>
            <th>Description</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {/* 
          <tr>
            <td>John</td>
            <td>Doe</td>
            <td>john@example.com</td>
          </tr> 
        */}
        </tbody>
      </table>
    </Fragment>
  )
}

export default ListTodo;