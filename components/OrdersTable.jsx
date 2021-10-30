import React from "react"
import PropTypes from "prop-types"
import dayjs from "dayjs"

function OrdersTable({ data, actions }) {
  const { deleteOrder, selectOrder } = actions

  const handleViewDetail = (order) => {
    selectOrder(order)
  }

  const handleDeleteOrder = (order) => {
    selectOrder(order)
    deleteOrder()
  }

  return (
    <div>
      <h1>Customer Orders</h1>

      <table>
        <thead>
          <tr>
            <th>Customer</th>
            <th>Order Date</th>
          </tr>
        </thead>
        <tbody>
          {data.map((order) => (
            <tr key={order.id}>
              <td>{order.customerName}</td>
              <td>{dayjs(order.createdOn).format("MMMM DD, YYYY - h:MM A")}</td>
              <td>
                <button
                  type="button"
                  className="detailButton"
                  onClick={() => handleViewDetail(order)}
                >
                  Details
                </button>
                <button
                  type="button"
                  className="deleteButton"
                  onClick={() => handleDeleteOrder(order)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

OrdersTable.propTypes = {
  data: PropTypes.array.isRequired,
  actions: PropTypes.objectOf(PropTypes.func).isRequired,
}

export default OrdersTable
