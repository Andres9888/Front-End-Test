import React, { Component } from "react"
import { ordersData } from "../lib/orders"
import OrdersTable from "./OrdersTable"
import OrderDetailsTable from "./OrderDetailsTable"
import DeleteOrder from "./DeleteOrder"

export class Orders extends Component {
  state = {
    orders: [],
    selectedOrder: {},
    displayDelete: false,
  }

  selectOrder = (order) => this.setState({ selectedOrder: order })
  clearSelected = () => this.setState({ selectedOrder: {} })
  deleteOrder = () =>
    this.setState(({ displayDelete }) => ({ displayDelete: !displayDelete }))
  confirmDelete = () => {
    const { orders, selectedOrder } = this.state
    const updated = orders.filter(({ id }) => id !== selectedOrder.id)
    this.setState({ orders: updated }, () => {
      this.clearSelected()
      this.deleteOrder()
    })
  }

  componentDidMount() {
    this.setState({ orders: ordersData })
  }

  render() {
    const { displayDelete, orders, selectedOrder } = this.state
    const orderSelected = Object.keys(selectedOrder).length > 0
    const ordersActions = {
      selectOrder: this.selectOrder,
      deleteOrder: this.deleteOrder,
    }
    const detailsActions = {
      clearSelected: this.clearSelected,
    }
    const deleteActions = {
      clearSelected: this.clearSelected,
      confirmDelete: this.confirmDelete,
      deleteOrder: this.deleteOrder,
    }

    const renderDisplay = () => {
      switch (true) {
        case displayDelete:
          return <DeleteOrder data={selectedOrder} actions={deleteActions} />
          break
        case orderSelected:
          return (
            <OrderDetailsTable data={selectedOrder} actions={detailsActions} />
          )
          break
        case !orderSelected:
          return <OrdersTable data={orders} actions={ordersActions} />
          break
      }
    }

    return <div className="layout">{renderDisplay()}</div>
  }
}

export default Orders
