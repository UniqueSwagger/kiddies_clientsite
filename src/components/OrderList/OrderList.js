import React, { useState, useEffect } from "react";
import { Table, Container, Button, Form, Badge } from "react-bootstrap";
import axios from "axios";
import Loader from "../Loader/Loader";
import "./OrderList.css";
import Swal from "sweetalert2";

const OrderList = () => {
  const [isStatus, setIsStatus] = useState("");
  const [registeredOrders, setRegisteredOrders] = useState(null);
  //getting all orders info
  useEffect(() => {
    axios
      .get("http://localhost:5000/orders")
      .then((res) => setRegisteredOrders(res.data));
  }, [isStatus]);

  const handleUpdate = (e, id) => {
    Swal.fire({
      title: "Are you sure you wanna update status?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Updated!", "Successfully updated order status", "success");
        axios
          .put(`http://localhost:5000/registeredOrder/${id}`, {
            status: e.target.value,
          })
          .then((res) => {
            if (res.data.modifiedCount) {
              setIsStatus(e.target.value);
            }
          });
      }
    });
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure you wanna delete it?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("deleted!", "Successfully deleted this order", "success");
        axios
          .delete(`http://localhost:5000/registeredOrder/${id}`)
          .then((res) => {
            if (res.data.deletedCount) {
              const remaining = registeredOrders.filter(
                (order) => order._id !== id
              );
              setRegisteredOrders(remaining);
            }
          });
      }
    });
  };

  return (
    <>
      {registeredOrders ? (
        <Container className="my-5 bg-body p-5 admin">
          {!registeredOrders.length ? (
            <div>
              <h1 className="text-center text-black mt-5 pt-5">
                No Orders Available
              </h1>
            </div>
          ) : (
            <Table style={{ overflow: "scroll" }} responsive>
              <thead className="bg-light rounded">
                <tr>
                  <th className="p-3 name">Name</th>
                  <th className="p-3">Email Id</th>
                  <th className="p-3">Phone</th>
                  <th className="p-3">Book</th>
                  <th className="p-3">Category</th>
                  <th className="p-3">Price</th>
                  <th className="p-3">Status</th>
                  <th className="p-3">Update Status</th>
                  <th className="p-3 action">Action</th>
                </tr>
              </thead>
              <tbody>
                {registeredOrders?.map(
                  ({ _id, name, addedProducts, email, status, phone }) => (
                    <tr key={_id}>
                      <td className="p-3">{name}</td>
                      <td className="p-3">{email}</td>
                      <td className="p-3">{phone}</td>
                      <td className="p-3">
                        {addedProducts.map((product) => (
                          <p>
                            <span>{product.title}</span>
                          </p>
                        ))}
                      </td>
                      <td className="p-3">
                        {addedProducts.map((product) => (
                          <p>
                            <span>{product.category}</span>
                          </p>
                        ))}
                      </td>
                      <td className="p-3">
                        {addedProducts.map((product) => (
                          <p>
                            <span>{product.price}$</span>
                          </p>
                        ))}
                      </td>
                      <td className="p-3">
                        <Badge
                          className="px-2 pb-2 pt-1"
                          pill
                          bg={`${
                            status === "Pending"
                              ? "danger"
                              : status === "On Going"
                              ? "warning"
                              : "success"
                          }`}
                        >
                          {status}
                        </Badge>
                      </td>
                      <td>
                        <Form.Select
                          className="border-0 w-75 shadow-none"
                          onChange={(e) => handleUpdate(e, _id)}
                        >
                          <option value="Pending">Pending</option>
                          <option value="On Going">On Going</option>
                          <option value="Done">Done</option>
                        </Form.Select>
                      </td>
                      <td className="p-3">
                        <Button
                          className="shadow-none"
                          onClick={() => handleDelete(_id)}
                          variant="danger"
                        >
                          <i className="fas fa-trash-alt"></i>
                        </Button>
                      </td>
                    </tr>
                  )
                )}
              </tbody>
            </Table>
          )}
        </Container>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default OrderList;
